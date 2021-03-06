<?php

namespace pl\fe\matter\article;

require_once dirname(dirname(__FILE__)) . '/main_base.php';
/*
 * 文章控制器
 */
class main extends \pl\fe\matter\main_base
{
  /**
   * 返回单图文视图
   */
  public function index_action($id)
  {
    $access = $this->accessControlUser('article', $id);
    if ($access[0] === false) {
      die($access[1]);
    }

    \TPL::output('/pl/fe/matter/article/frame');
    exit;
  }
  /**
   * 获得可见的图文列表
   *
   * @param $mission mission's id
   * @param int $page
   * @param int $size
   *
   * post options
   * --$src p:从父账号检索图文
   * --$tag
   * --$channel
   * --$order
   *
   */
  public function list_action($site = null, $mission = null, $platform = 'N', $page = 1, $size = 30)
  {
    if (false === ($oUser = $this->accountUser())) {
      return new \ResponseTimeout();
    }

    if (!($oOptions = $this->getPostJson())) {
      $oOptions = new \stdClass;
    }
    $modelArt = $this->model('matter\article');
    /**
     * select fields
     */
    $s = "a.id,a.siteid,a.title,a.summary,a.approved,a.mission_id";
    $s .= ",a.create_at,a.modify_at,a.creater,a.creater_name";
    $s .= ",a.read_num,a.score,a.remark_num,a.share_friend_num,a.share_timeline_num,a.download_num";
    /**
     * where
     */
    $w = "a.custom_body='N' and a.state=1 and finished='Y' and exists(select 1 from xxt_site_admin sa where sa.siteid=a.siteid and uid='{$oUser->id}')";
    /* 按名称过滤 */
    if (!empty($oOptions->byTitle)) {
      $w .= " and a.title like '%" . $oOptions->byTitle . "%'";
    }
    if (!empty($oOptions->byCreator)) {
      $w .= " and a.creater_name like '%" . $oOptions->byCreator . "%'";
    }
    if (!empty($oOptions->byTags)) {
      foreach ($oOptions->byTags as $tag) {
        $w .= " and a.matter_mg_tag like '%" . $tag->id . "%'";
      }
    }
    /* 按项目过滤 */
    if (!empty($mission)) {
      $w .= " and a.mission_id=$mission";
    } else if ($platform === 'Y') {
      $w .= " and exists(select 1 from xxt_home_matter where as_global='Y' and matter_type='article' and matter_id=a.id)";
    } else if (!empty($site)) {
      $w .= " and a.siteid='$site'";
    }
    /* 按频道过滤 */
    if (!empty($oOptions->channel)) {
      is_array($oOptions->channel) && $oOptions->channel = implode(',', $oOptions->channel);
      $whichChannel = "exists (select 1 from xxt_channel_matter c where a.id = c.matter_id and c.matter_type='article' and c.channel_id in ($oOptions->channel))";
      $w .= " and $whichChannel";
    }
    /* 按星标过滤 */
    if (isset($oOptions->byStar) && $oOptions->byStar === 'Y') {
      $w .= " and exists(select 1 from xxt_account_topmatter t where t.matter_type='article' and t.matter_id=a.id and userid='{$oUser->id}')";
    }
    $q = [
      $s,
      'xxt_article a',
      $w,
    ];
    /**
     * order
     */
    !isset($oOptions->order) && $oOptions->order = '';
    switch ($oOptions->order) {
      case 'title':
        $q2['o'] = 'CONVERT(a.title USING gbk ) COLLATE gbk_chinese_ci';
        break;
      case 'read':
        $q2['o'] = 'a.read_num desc';
        break;
      case 'share_friend':
        $q2['o'] = 'a.share_friend_num desc';
        break;
      case 'share_timeline':
        $q2['o'] = 'a.share_timeline_num desƒc';
        break;
      case 'like':
        $q2['o'] = 'a.score desc';
        break;
      case 'remark':
        $q2['o'] = 'a.remark_num desc';
        break;
      case 'download':
        $q2['o'] = 'a.download_num desc';
        break;
      default:
        $q2['o'] = 'a.modify_at desc';
    }
    /**
     * limit
     */
    $q2['r'] = ['o' => ($page - 1) * $size, 'l' => $size];

    if ($articles = $modelArt->query_objs_ss($q, $q2)) {
      $q[0] = 'count(*)';
      $total = (int) $modelArt->query_val_ss($q);
      foreach ($articles as $a) {
        $a->type = 'article';
        $a->url = $modelArt->getEntryUrl($a->siteid, $a->id);
        $qStar = [
          'id',
          'xxt_account_topmatter',
          ['matter_id' => $a->id, 'matter_type' => 'article', 'userid' => $oUser->id],
        ];
        if ($oStar = $modelArt->query_obj_ss($qStar)) {
          $a->star = $oStar->id;
        }
      }
    }
    $q[0] = 'count(*)';
    $total = (int) $modelArt->query_val_ss($q);

    return new \ResponseData(['articles' => $articles, 'docs' => $articles, 'total' => $total]);
  }
  /**
   * 获得指定的图文
   *
   * @param int $id article's id
   *
   */
  public function get_action($id, $cascade = 'Y')
  {
    if (false === ($user = $this->accountUser())) {
      return new \ResponseTimeout();
    }

    $modelAct = $this->model('matter\article');
    $oArticle = $modelAct->byId($id);
    if ($oArticle === false) {
      return new \ObjectNotFoundError();
    }

    $oArticle->uid = $user->id;
    if ($cascade === 'Y') {
      /* channels */
      $oArticle->channels = $this->model('matter\channel')->byMatter($id, 'article');
      /* attachments */
      if ($oArticle->has_attachment === 'Y') {
        $oArticle->attachments = $modelAct->query_objs_ss(['*', 'xxt_matter_attachment', ['matter_id' => $id, 'matter_type' => 'article']]);
      }
      /* 所属项目 */
      if ($oArticle->mission_id) {
        $oArticle->mission = $this->model('matter\mission')->byId($oArticle->mission_id);
      }
    }
    /*如果此单图文属于引用那么需要返回被引用的单图文*/
    if ($oArticle->from_mode === 'C') {
      $id2 = $oArticle->from_id;
      $oArticle2 = $modelAct->byId($id2, ['fields' => 'body,author,siteid,id']);
      $oArticle->body = $oArticle2->body;
      $oArticle->author = $oArticle2->author;
    }

    return new \ResponseData($oArticle);
  }
  /**
   * 创建新图文
   * 在站点下或项目下创建图文
   *
   * @param string $site
   * @param int $mission
   *
   */
  public function create_action($site = null, $mission = null)
  {
    if (false === ($oUser = $this->accountUser())) {
      return new \ResponseTimeout();
    }
    if (empty($site) && empty($mission)) {
      return new \ParameterError();
    }

    $oCustomConfig = $this->getPostJson();
    $oArticle = new \stdClass;
    $modelArt = $this->model('matter\article')->setOnlyWriteDbConn(true);

    /*从站点或项目获取的定义*/
    if (empty($mission)) {
      $oSite = $this->model('site')->byId($site, ['fields' => 'id,heading_pic']);
      $oArticle->siteid = $oSite->id;
      $oArticle->pic = $oSite->heading_pic; //使用站点的缺省头图
      $oArticle->summary = '';
    } else {
      $modelMis = $this->model('matter\mission');
      $oMission = $modelMis->byId($mission);
      $oArticle->siteid = $oMission->siteid;
      $oArticle->summary = $modelArt->escape($oMission->summary);
      $oArticle->pic = $oMission->pic;
      $oArticle->mission_id = $oMission->id;
    }

    $q = ['count(*)', 'xxt_article', ['siteid' => $site, 'state' => 1]];
    $countOfArt = (int) $modelArt->query_val_ss($q);

    /* 前端指定的信息 */
    $oArticle->title = empty($oCustomConfig->proto->title) ? ('新图文-' . ++$countOfArt) : $oCustomConfig->proto->title;
    if (!empty($oCustomConfig->proto->summary)) {
      $oArticle->summary = $oCustomConfig->proto->summary;
    }
    $oArticle->hide_pic = 'N';
    $oArticle->url = '';
    $oArticle->body = '';
    $oArticle->can_siteuser = 'Y';
    $oArticle->author = $modelArt->escape($oUser->name);

    $oArticle = $modelArt->create($oUser, $oArticle);

    /* 记录操作日志 */
    $this->model('matter\log')->matterOp($oArticle->siteid, $oUser, $oArticle, 'C');

    return new \ResponseData($oArticle);
  }
  /**
   * 复制单图文
   *
   * @param string $site 被复制单图文所在的团队siteid
   * @param int $id 被复制的单图文
   * @param char $mode 复制模式O:origin C:cite  D:duplicate
   *
   */
  public function copy_action($site, $id, $mission = null, $mode = 'D')
  {
    if (false === ($oUser = $this->accountUser())) {
      return new \ResponseTimeout();
    }

    $modelArt = $this->model('matter\article')->setOnlyWriteDbConn(true);
    $oCopied = $modelArt->byId($id);
    if (false === $oCopied) {
      return new \ObjectNotFoundError();
    }

    $toSites = $this->getPostJson();
    $modelLog = $this->model('matter\log');

    /* 获取元图文的团队名称 */
    $oFromSite = $this->model('site')->byId($site, ['fields' => 'name']);

    $oArticle = new \stdClass;
    $oArticle->summary = $modelArt->escape($oCopied->summary);
    $oArticle->hide_pic = $modelArt->escape($oCopied->hide_pic);
    $oArticle->url = $modelArt->escape($oCopied->url);
    $oArticle->can_siteuser = $modelArt->escape($oCopied->can_siteuser);
    $oArticle->matter_cont_tag = empty($oCopied->matter_cont_tag) ? '' : json_encode($oCopied->matter_cont_tag);
    $oArticle->from_siteid = $site;
    $oArticle->from_site_name = $modelArt->escape($oFromSite->name);
    $oArticle->from_id = $id;
    $oArticle->author = $modelArt->escape($oCopied->author);
    if ($mode === 'D') {
      $oArticle->title = $modelArt->escape($oCopied->title . '（副本）');
      $oArticle->body = $modelArt->escape($oCopied->body);
    } else {
      $oArticle->title = $modelArt->escape($oCopied->title . '（引用）');
    }
    if (!empty($mission)) {
      $oArticle->mission_id = $mission;
    }
    if (empty($toSites)) {
      /* 同一个团队下复制 */
      $oArticle->siteid = $site;
      $oArticle->from_mode = 'S';
      $oArticle = $modelArt->create($oUser, $oArticle);
      /* 记录操作日志 */
      $modelLog->matterOp($site, $oUser, $oArticle, 'C');
    } else {
      /* 跨团队复制 */
      if ($mode === 'D') {
        $oArticle->from_mode = 'D';
      } else {
        $oArticle->from_mode = 'C';
      }
      foreach ($toSites as $oToSite) {
        $toSiteid = $oToSite->siteid;
        if ($oCopied->siteid === $toSiteid) {
          continue;
        }
        $oArticle->siteid = $toSiteid;
        if (isset($oArticle->type)) {
          unset($oArticle->type);
        }
        if (isset($oArticle->id)) {
          unset($oArticle->id);
        }
        $oArticle = $modelArt->create($oUser, $oArticle);
        /* 记录操作日志 */
        $modelLog->matterOp($toSiteid, $oUser, $oArticle, 'C');
        /* 增加原图文的复制数 */
        if ($site !== $toSiteid) {
          $modelArt->update("update xxt_article set copy_num=copy_num+1 where id=$id");
        }
      }
    }

    return new \ResponseData($oArticle);
  }
  /**
   * 更新单图文的字段
   *
   * @param int $id article's id
   */
  public function update_action($id)
  {
    if (false === ($oUser = $this->accountUser())) {
      return new \ResponseTimeout();
    }

    $modelArt = $this->model('matter\article');
    $oArticle = $modelArt->byId($id, ['fields' => 'id,state,from_mode,siteid,mission_id,title,summary,pic,is_markdown']);
    if (false === $oArticle) {
      return new \ObjectNotFoundError();
    }

    $oPosted = $this->getPostJson(false);
    if (empty($oPosted)) {
      return new \ResultEmptyError();
    }

    $oUpdated = new \stdClass;

    foreach ($oPosted as $k => $v) {
      if (in_array($k, ['entry_rule', 'download_rule'])) {
        continue;
      }
      switch ($k) {
        case 'body':
          $oUpdated->{$k} = $modelArt->escape(urldecode($v));
          break;
        case 'body_md':
          $oUpdated->{$k} = $modelArt->escape($v);
          break;
        case 'entryRule':
          $oUpdated->entry_rule = $modelArt->escape($modelArt->toJson($v));
          break;
        case 'config':
          $oUpdated->{$k} = $modelArt->escape($modelArt->toJson($v));
          break;
        case 'downloadRule':
          $oUpdated->download_rule = $modelArt->escape($modelArt->toJson($v));
          break;
        default:
          $oUpdated->{$k} = $modelArt->escape($v);
      }
    }

    /* 如果是引用关系，不修改正文 */
    if ($oArticle->from_mode === 'C') {
      if (isset($oUpdated->body)) {
        unset($oUpdated->body);
      }
      if (isset($oUpdated->author)) {
        unset($oUpdated->author);
      }
    }

    /* 如果是markdown格式，生成html */
    if (isset($oUpdated->body_md) && $oArticle->is_markdown === 'Y') {
      require_once TMS_APP_DIR . '/lib/Parsedown.php';
      // escape导致\n变成了两个字符
      $text = str_replace("\\n", "\n", $oUpdated->body_md);
      $Parsedown = new \Parsedown();
      $Parsedown->setSafeMode(true);
      $body = $Parsedown->text($text);
      $oUpdated->body = $modelArt->escape($body);
    }

    if ($oArticle = $modelArt->modify($oUser, $oArticle, $oUpdated)) {
      if (property_exists($oArticle, 'config')) {
        $oArticle->config = empty($oArticle->config) ? new \stdClass : json_decode($oArticle->config);
      }
      $this->model('matter\log')->matterOp($oArticle->siteid, $oUser, $oArticle, 'U');
    }

    return new \ResponseData($oArticle);
  }
  /**
   * 上传单图文到公众号后台
   */
  public function upload2Mp_action($site, $id, $mediaId = null)
  {
    $article = $this->model('matter\article')->forWxGroupPush($site, $id);

    if (empty($mediaId)) {
      $rsp = $this->model('mpproxy/wx', $site)->materialAddNews($article);
      if ($rsp[0] === false) {
        return new \ResponseError($rsp[1]);
      }

      $data = array(
        'media_id' => $rsp[1],
        'uploaded_at' => time(),
      );
    } else {
      $article = $article['news']['articles'][0];
      $rsp = $this->model('mpproxy/wx', $site)->materialUpdateNews($mediaId, $article);
      if ($rsp[0] === false) {
        return new \ResponseError($rsp[1]);
      }

      $data = array(
        'uploaded_at' => time(),
      );
    }

    $rst = $this->model()->update(
      'xxt_article',
      $data,
      ['siteid' => $site, 'id' => $id]
    );

    return new \ResponseData($data);
  }
  /**
   * 将文件生成的图片转为正文
   */
  private function setBodyByAtt($articleid, $dir)
  {
    $body = '';
    $files = scandir($dir);
    $dir = \TMS_MODEL::toUTF8($dir);
    for ($i = 0, $l = count($files) - 2; $i < $l; $i++) {
      $body .= '<p>';
      $body .= '<img src="' . '/' . $dir . '/' . $i . '.jpg">';
      $body .= '</p>';
    }

    $rst = $this->model()->update(
      'xxt_article',
      array('body' => $body),
      "id='$articleid'"
    );

    return $body;
  }
  /**
   * 将文件生成的图片的第一张设置为头图
   */
  private function setCoverByAtt($articleid, $dir)
  {
    $dir = \TMS_MODEL::toUTF8($dir);
    $url = '/' . $dir . '/0.jpg';
    $rst = $this->model()->update(
      'xxt_article',
      array('pic' => $url),
      "id='$articleid'"
    );

    return $url;
  }
  /**
   * 上传文件并创建图文
   */
  public function uploadAndCreate_action($site, $state = null)
  {
    if ($state === 'done') {
      $oUser = $this->accountUser();
      $posted = $this->getPostJson();
      $file = $posted->file;

      $current = time();
      $filename = str_replace(' ', '_', $file->name);

      $modelArt = $this->model('matter\article');
      /* 生成图文*/
      $oArticle = new \stdClass;
      $oArticle->siteid = $site;
      $oArticle->title = substr($filename, 0, strrpos($filename, '.'));
      $oArticle->author = $oUser->name;
      $oArticle->url = '';
      $oArticle->hide_pic = 'Y';
      $oArticle->can_picviewer = 'Y';
      $oArticle->has_attachment = 'Y';
      $oArticle->pic = '';
      $oArticle->summary = '';
      $oArticle->body = '';
      $oArticle->can_siteuser = 'Y';
      $oArticle = $modelArt->create($oUser, $oArticle);

      /* 保存附件 */
      $att = array();
      $att['article_id'] = $oArticle->id;
      $att['name'] = $filename;
      $att['type'] = $file->type;
      $att['size'] = $file->size;
      $att['last_modified'] = $file->lastModified;
      $att['url'] = 'local://article_' . $oArticle->id . '_' . $filename;
      $this->model()->insert('xxt_matter_attachment', $att, true);

      /* 处理附件 */
      $modelRes = $this->model('fs/local', $site, '_resumable');
      $modelAtt = $this->model('fs/local', $site, '附件');
      $fileUploaded = $modelRes->rootDir . '/article_' . $file->uniqueIdentifier;
      $attachment = $modelAtt->rootDir . '/article_' . $oArticle->id . '_' . \TMS_MODEL::toLocalEncoding($filename);
      if (false === rename($fileUploaded, $attachment)) {
        return new \ResponseError('移动上传文件失败');
      }
      /**获取附件的内容*/
      $appRoot = $_SERVER['DOCUMENT_ROOT'];
      $ext = explode('.', $filename);
      $ext = array_pop($ext);
      $attAbs = $appRoot . '/' . $attachment;
      if (in_array($ext, array('doc', 'docx', 'ppt', 'pptx'))) {
        /* 存放附件转换结果 */
        $attDir = str_replace('.' . $ext, '', $attachment);
        mkdir($appRoot . '/' . $attDir);
        /* 执行转换操作 */
        $output = array();
        $attPng = $appRoot . '/' . $attDir . '/%d.jpg';
        $cmd = $appRoot . '/cus/conv2pdf2img ' . $attAbs . ' ' . $attPng;
        $rsp = exec($cmd, $output, $status);
        if ($status == 1) {
          return new \ResponseError('转换文件失败：' . $rsp);
        }
        $this->setBodyByAtt($id, $attDir);
        if (in_array($ext, array('ppt', 'pptx'))) {
          $this->setCoverByAtt($id, $attDir);
        }
      } else if ($ext === 'pdf') {
        /* 存放附件转换结果 */
        $attDir = str_replace('.' . $ext, '', $attachment);
        mkdir($appRoot . '/' . $attDir);
        $attPng = $appRoot . '/' . $attDir . '/%d.jpg';
        $cmd = $appRoot . '/cus/conv2img ' . $attAbs . ' ' . $attPng;
        $rsp = exec($cmd);
        $this->setBodyByAtt($id, $attDir);
      }
      /*记录操作日志*/
      $this->model('matter\log')->matterOp($site, $oUser, $oArticle, 'C');

      return new \ResponseData($oArticle);
    } else {
      /**
       * 分块上传文件
       */
      $modelFs = $this->model('fs/local', $site, '_resumable');
      $dest = '/article_' . $_POST['resumableIdentifier'];
      $resumable = $this->model('fs/resumable', $site, $dest, $modelFs);
      $resumable->handleRequest($_POST);
      return new \ResponseData('ok');
    }
  }
  /**
   * 删除单图文
   */
  public function remove_action($site, $id)
  {
    if (false === ($oUser = $this->accountUser())) {
      return new \ResponseTimeout();
    }

    $modelArt = $this->model('matter\article');
    $oArticle = $modelArt->byId($id, ['fields' => 'id,siteid,title,summary,pic,mission_id,creater']);
    if (false === $oArticle) {
      return new \ObjectNotFoundError();
    }
    if ($oArticle->creater !== $oUser->id) {
      return new \ResponseError('没有删除数据的权限');
    }

    /**
     * 将图文从所属的多图文和频道中删除
     */
    $modelArt->delete('xxt_channel_matter', ['matter_id' => $id, 'matter_type' => 'article']);

    $rst = $modelArt->remove($oUser, $oArticle);

    return new \ResponseData($rst);
  }
}
