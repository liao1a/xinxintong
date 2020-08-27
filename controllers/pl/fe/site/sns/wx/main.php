<?php

namespace pl\fe\site\sns\wx;

require_once dirname(dirname(dirname(dirname(__FILE__)))) . '/base.php';
/**
 * 微信公众号
 */
class main extends \pl\fe\base
{
  /**
   *
   */
  public function index_action()
  {
    \TPL::output('/pl/fe/site/sns/wx/main');
    exit;
  }
  /**
   *
   */
  public function setting_action()
  {
    \TPL::output('/pl/fe/site/sns/wx/main');
    exit;
  }
  /**
   * 获得公众号配置信息
   */
  public function get_action($site)
  {
    if (false === ($user = $this->accountUser())) {
      return new \ResponseTimeout();
    }

    $modelWx = $this->model('sns\wx');
    $wx = $modelWx->bySite($site);
    if ($wx === false) {
      /* 不存在就创建一个 */
      $data = ['creator' => $user->id, 'create_at' => time()];
      $wx = $modelWx->create($site, $data);
    }

    return new \ResponseData($wx);
  }
  /**
   * 更新账号配置信息
   */
  public function update_action($site)
  {
    if (false === ($user = $this->accountUser())) {
      return new \ResponseTimeout();
    }

    $nv = $this->getPostJson();

    /* 如果修改了token，需要重新重新进行连接验证 */
    isset($nv->token) && $nv->joined = 'N';

    $rst = $this->model()->update(
      'xxt_site_wx',
      $nv,
      "siteid='$site'"
    );

    return new \ResponseData($rst);
  }
  /**
   *
   */
  public function checkJoin_action($site)
  {
    if (false === ($user = $this->accountUser())) {
      return new \ResponseTimeout();
    }

    $joined = "N";
    $siteObj = $this->model('sns\wx')->bySite($site);
    if ($siteObj) {
      if (defined('TMS_MESSENGER_BACK_ADDRESS') && !empty($siteObj->tms_msg_wx_channel_code)) {
        $url = TMS_MESSENGER_BACK_ADDRESS . "/admin/channel/wxmp/get";
        $url .= "?bucket={$siteObj->siteid}&code={$siteObj->tms_msg_wx_channel_code}";
        list($success, $rsp) = tmsHttpGet($url);
        if ($success === true && $rsp->code == 0) {
          $joined = isset($rsp->result->joined) ? $rsp->result->joined : "N";
        }
      } else $joined = $siteObj->joined;
    }

    return new \ResponseData($joined);
  }
}
