<?php
namespace matter;

require_once dirname(__FILE__) . '/enroll_base.php';
/**
 * 签到活动
 */
class signin_model extends enroll_base {
    /**
     * 记录日志时需要的列
     */
    const LOG_FIELDS = 'siteid,id,title,summary,pic,mission_id';
    /**
     *
     */
    protected function table() {
        return 'xxt_signin';
    }
    /**
     *
     */
    public function getEntryUrl($siteid, $id, $roundId = null) {
        if ($siteid === 'platform') {
            $oApp = $this->byId($id, ['cascaded' => 'N', 'fields' => 'id,siteid', 'notDecode' => true]);
            if (false === $oApp) {
                return APP_PROTOCOL . APP_HTTP_HOST . '/404.html';
            }
            $siteid = $oApp->siteid;
        }

        $url = APP_PROTOCOL . APP_HTTP_HOST;
        $url .= '/rest/site/fe/matter/signin';
        $url .= "?site={$siteid}&app=" . $id;
        if (!empty($roundId)) {
            $url .= '&round=' . $roundId;
        }

        return $url;
    }
    /**
     *
     * @param string $appId
     * @param $options array []
     */
    public function byId($appId, $options = []) {
        $fields = isset($options['fields']) ? $options['fields'] : '*';
        $cascaded = isset($options['cascaded']) ? $options['cascaded'] : 'Y';
        $q = [
            $fields,
            'xxt_signin',
            ["id" => $appId],
        ];
        if (($oApp = $this->query_obj_ss($q)) && empty($options['notDecode'])) {
            $oApp->type = 'signin';
            if (isset($oApp->siteid) && isset($oApp->id)) {
                $oApp->entryUrl = $this->getEntryUrl($oApp->siteid, $oApp->id);
            }
            if ($fields === '*' || false !== strpos($fields, 'entry_rule')) {
                if (empty($oApp->entry_rule)) {
                    $oApp->entryRule = new \stdClass;
                } else {
                    $oApp->entryRule = json_decode($oApp->entry_rule);
                }
                unset($oApp->entry_rule);
            }
            if ($fields === '*' || false !== strpos($fields, 'data_schemas')) {
                if (!empty($oApp->data_schemas)) {
                    $oApp->dataSchemas = json_decode($oApp->data_schemas);
                } else {
                    $oApp->dataSchemas = [];
                }
                unset($oApp->data_schemas);
            }
            if ($fields === '*' || false !== strpos($fields, 'recycle_schemas')) {
                if (!empty($oApp->recycle_schemas)) {
                    $oApp->recycleSchemas = json_decode($oApp->recycle_schemas);
                } else {
                    $oApp->recycleSchemas = [];
                }
                unset($oApp->recycle_schemas);
            }
            if ($fields === '*' || false !== strpos($fields, 'assigned_nickname')) {
                if (!empty($oApp->assigned_nickname)) {
                    $oApp->assignedNickname = json_decode($oApp->assigned_nickname);
                } else {
                    $oApp->assignedNickname = new \stdClass;
                }
                unset($oApp->assigned_nickname);
            }
            if (!empty($oApp->matter_mg_tag)) {
                $oApp->matter_mg_tag = json_decode($oApp->matter_mg_tag);
            }
            if (!empty($oApp->absent_cause)) {
                $oApp->absent_cause = json_decode($oApp->absent_cause);
            }
            if ($cascaded === 'Y') {
                /* 页面 */
                $oApp->pages = $this->model('matter\signin\page')->byApp($oApp->id);
                /* 轮次 */
                $oApp->rounds = $this->model('matter\signin\round')->byApp($oApp->id, ['fields' => 'id,rid,title,start_at,end_at,late_at,state']);
            }
        }

        return $oApp;
    }
    /**
     * 返回签到活动列表
     */
    public function &bySite($siteid, $page = null, $size = null, $onlySns = 'N', $aOptions = []) {
        $fields = isset($aOptions['fields']) ? $aOptions['fields'] : 's.*';
        $q = [
            $fields,
            'xxt_signin s',
            "state<>0 and siteid='$siteid'",
        ];
        if (!empty($aOptions['byTitle'])) {
            $q[2] .= " and s.title like '%" . $aOptions['byTitle'] . "%'";
        }
        if (!empty($aOptions['byCreator'])) {
            $q[2] .= " and s.creater_name like '%" . $aOptions['byCreator'] . "%'";
        }
        if (!empty($aOptions['byTags'])) {
            foreach ($aOptions['byTags'] as $tag) {
                $q[2] .= " and s.matter_mg_tag like '%" . $tag->id . "%'";
            }
        }
        if ($onlySns === 'Y') {
            $q[2] .= " and s.entry_rule like '%\"scope\":\"sns\"%'";
        }
        if (isset($aOptions['byStar'])) {
            $q[2] .= " and exists(select 1 from xxt_account_topmatter t where t.matter_type='signin' and t.matter_id=s.id and userid='{$aOptions['byStar']}')";
        }
        $q2['o'] = 's.modify_at desc';
        if ($page && $size) {
            $q2['r']['o'] = ($page - 1) * $size;
            $q2['r']['l'] = $size;
        }
        $result = new \stdClass;
        $result->apps = $this->query_objs_ss($q, $q2);
        if (count($result->apps)) {
            foreach ($result->apps as $oApp) {
                $oApp->type = 'signin';
                /* 是否已经星标 */
                if ($aOptions['user']) {
                    $oUser = $aOptions['user'];
                    $qStar = [
                        'id',
                        'xxt_account_topmatter',
                        ['matter_id' => $oApp->id, 'matter_type' => 'signin', 'userid' => $oUser->id],
                    ];
                    if ($oStar = $this->query_obj_ss($qStar)) {
                        $oApp->star = $oStar->id;
                    }
                }
            }
        }
        if ($page && $size) {
            $q[0] = 'count(s.id)';
            $total = (int) $this->query_val_ss($q);
            $result->total = $total;
        } else {
            $result->total = count($result->apps);
        }

        return $result;
    }
    /**
     * 返回签到活动列表
     */
    public function &byMission($mission, $aOptions = [], $page = null, $size = null) {
        $mission = $this->escape($mission);
        $result = new \stdClass;
        $q = [
            "*,'signin' type",
            'xxt_signin',
            "state<>0 and mission_id='$mission'",
        ];
        if (!empty($aOptions['byTitle'])) {
            $q[2] .= " and title like '%" . $aOptions['byTitle'] . "%'";
        }
        if (!empty($aOptions['byCreator'])) {
            $q[2] .= " and creater_name like '%" . $aOptions['byCreator'] . "%'";
        }
        $q2['o'] = 'modify_at desc';
        if ($page && $size) {
            $q2['r']['o'] = ($page - 1) * $size;
            $q2['r']['l'] = $size;
        }
        $result->apps = $this->query_objs_ss($q, $q2);
        if ($page && $size) {
            $q[0] = 'count(*)';
            $total = (int) $this->query_val_ss($q);
            $result->total = $total;
        } else {
            $result->total = count($result->apps);
        }

        return $result;
    }
    /**
     * 更新记录活动标签
     */
    public function updateTags($aid, $tags) {
        if (empty($tags)) {
            return false;
        }
        if (is_array($tags)) {
            $tags = implode(',', $tags);
        }

        $options = array('fields' => 'tags', 'cascaded' => 'N');
        $app = $this->byId($aid, $options);
        if (empty($app->tags)) {
            $this->update('xxt_signin', array('tags' => $tags), "id='$aid'");
        } else {
            $existent = explode(',', $app->tags);
            $checked = explode(',', $tags);
            $updated = array();
            foreach ($checked as $c) {
                if (!in_array($c, $existent)) {
                    $updated[] = $c;
                }
            }
            if (count($updated)) {
                $updated = array_merge($existent, $updated);
                $updated = implode(',', $updated);
                $this->update('xxt_signin', array('tags' => $updated), "id='$aid'");
            }
        }

        return true;
    }
    /**
     * 活动报名名单
     *
     * 1、如果活动仅限会员报名，那么要叠加会员信息
     * 2、如果报名的表单中有扩展信息，那么要提取扩展信息
     *
     *     $siteid
     * $aid
     * $options
     * --creater openid
     * --visitor openid
     * --page
     * --size
     * --rid 轮次id
     * --kw 检索关键词
     * --by 检索字段
     *
     *
     * return
     * [0] 数据列表
     * [1] 数据总条数
     * [2] 数据项的定义
     */
    public function participants($siteid, $appId, $options = null, $criteria = null) {
        if ($options) {
            is_array($options) && $options = (object) $options;
        }

        $w = "state=1 and aid='$appId' and userid<>''";

        // 指定了登记记录过滤条件
        if (!empty($criteria->record)) {
            $whereByRecord = '';
            if (!empty($criteria->record->verified)) {
                $whereByRecord .= " and verified='{$criteria->record->verified}'";
            }
            $w .= $whereByRecord;
        }

        // 指定了记录标签
        if (!empty($criteria->tags)) {
            $whereByTag = '';
            foreach ($criteria->tags as $tag) {
                $whereByTag .= " and concat(',',tags,',') like '%,$tag,%'";
            }
            $w .= $whereByTag;
        }

        // 指定了登记数据过滤条件
        if (isset($criteria->data)) {
            $whereByData = '';
            foreach ($criteria->data as $k => $v) {
                if (!empty($v)) {
                    $whereByData .= ' and (';
                    $whereByData .= 'data like \'%"' . $k . '":"' . $v . '"%\'';
                    $whereByData .= ' or data like \'%"' . $k . '":"%,' . $v . '"%\'';
                    $whereByData .= ' or data like \'%"' . $k . '":"%,' . $v . ',%"%\'';
                    $whereByData .= ' or data like \'%"' . $k . '":"' . $v . ',%"%\'';
                    $whereByData .= ')';
                }
            }
            $w .= $whereByData;
        }

        // 获得填写的登记数据
        $q = [
            'userid',
            "xxt_signin_record",
            $w,
        ];
        $participants = $this->query_vals_ss($q);

        return $participants;
    }
    /**
     *
     */
    public function &opData(&$oApp, $onlyActiveRound = false) {
        $modelRnd = $this->model('matter\signin\round');
        $opData = [];

        if ($onlyActiveRound) {
            $oActiveRound = $modelRnd->getActive($oApp->siteid, $oApp->id, ['fields' => 'rid,title,start_at,end_at,late_at']);
            if ($oActiveRound) {
                $rounds = [$oActiveRound];
            }
        } else {
            $rounds = $modelRnd->byApp($oApp->id, ['fields' => 'rid,title,start_at,end_at,late_at']);
        }

        if (empty($rounds)) {
            return $opData;
        }
        if (!isset($oActiveRound)) {
            $oActiveRound = $modelRnd->getActive($oApp->siteid, $oApp->id, ['fields' => 'rid,title,start_at,end_at,late_at']);
        }

        foreach ($rounds as $oRound) {
            /* total */
            $q = [
                'count(*)',
                'xxt_signin_log',
                ['aid' => $oApp->id, 'state' => 1, 'rid' => $oRound->rid],
            ];
            $oRound->total = $this->query_val_ss($q);
            /* late */
            if ($oRound->total) {
                if ($oRound->late_at) {
                    $q = [
                        'count(*)',
                        'xxt_signin_log',
                        "aid='" . $this->escape($oApp->id) . "' and rid='{$oRound->rid}' and state=1 and signin_at>" . ((int) $oRound->late_at + 59),
                    ];
                    $oRound->late = $this->query_val_ss($q);
                } else {
                    $oRound->late = 0;
                }
            } else {
                $oRound->late = 0;
            }
            if ($oActiveRound && $oRound->rid === $oActiveRound->rid) {
                $oRound->active = 'Y';
            }

            $opData[] = $oRound;
        }

        return $opData;
    }
    /**
     * 指定用户的行为报告
     */
    public function reportByUser($oApp, $oUser) {
        $modelRec = $this->model('matter\signin\record');

        $oRecord = $modelRec->byUser($oUser, $oApp, ['fields' => 'id,signin_num,signin_log,comment']);
        if (false === $oRecord) {
            return false;
        }
        $result = new \stdClass;

        $result->signin_num = $oRecord->signin_num;
        $result->comment = $oRecord->comment;

        $late_num = 0;
        if (!empty($oApp->rounds) && !empty($oRecord->signin_log)) {
            foreach ($oApp->rounds as $oRound) {
                if (isset($oRecord->signin_log->{$oRound->rid})) {
                    if ($oRound->late_at) {
                        if ($oRecord->signin_log->{$oRound->rid} > $oRound->late_at + 60) {
                            $late_num++;
                        }
                    }
                }

            }
        }
        if ($late_num) {
            $result->late_num = $late_num;
        }

        return $result;
    }
    /**
     * 获得参加记录活动的用户的昵称
     *
     * @param object $oApp
     * @param object $oUser [uid,nickname]
     */
    public function getUserNickname(&$oApp, $oUser) {
        if (empty($oUser->uid)) {
            return '';
        }
        $nickname = '';
        $entryRule = $oApp->entryRule;
        if (isset($entryRule->scope) && $entryRule->scope === 'member') {
            foreach ($entryRule->member as $schemaId => $rule) {
                $modelMem = $this->model('site\user\member');
                if (empty($oUser->unionid)) {
                    $aMembers = $modelMem->byUser($oUser->uid, ['schemas' => $schemaId]);
                    if (count($aMembers) === 1) {
                        $oMember = $aMembers[0];
                        if ($oMember->verified === 'Y') {
                            $nickname = empty($oMember->name) ? $oMember->identity : $oMember->name;
                            break;
                        }
                    }
                } else {
                    $modelAcnt = $this->model('site\user\account');
                    $aUnionUsers = $modelAcnt->byUnionid($oUser->unionid, ['siteid' => $oApp->siteid, 'fields' => 'uid']);
                    foreach ($aUnionUsers as $oUnionUser) {
                        $aMembers = $modelMem->byUser($oUnionUser->uid, ['schemas' => $schemaId]);
                        if (count($aMembers) === 1) {
                            $oMember = $aMembers[0];
                            if ($oMember->verified === 'Y') {
                                $nickname = empty($oMember->name) ? $oMember->identity : $oMember->name;
                                break;
                            }
                        }
                    }
                    if (!empty($nickname)) {
                        break;
                    }
                }
            }
        } else if (isset($entryRule->scope) && $entryRule->scope === 'sns') {
            $modelAcnt = $this->model('site\user\account');
            if ($siteUser = $modelAcnt->byId($oUser->uid)) {
                foreach ($entryRule->sns as $snsName => $rule) {
                    if ($snsName === 'wx') {
                        $modelWx = $this->model('sns\wx');
                        if (($wxConfig = $modelWx->bySite($oApp->siteid)) && $wxConfig->joined === 'Y') {
                            $snsSiteId = $oApp->siteid;
                        } else {
                            $snsSiteId = 'platform';
                        }
                    } else {
                        $snsSiteId = $oApp->siteid;
                    }
                    $modelSnsUser = $this->model('sns\\' . $snsName . '\fan');
                    if ($snsUser = $modelSnsUser->byOpenid($snsSiteId, $siteUser->{$snsName . '_openid'})) {
                        $nickname = $snsUser->nickname;
                        break;
                    }
                }
            }
        } else if (empty($entryRule->scope) || $entryRule->scope === 'none') {
            if (!empty($oApp->mission_id)) {
                /* 从项目中获得用户昵称 */
                $oMission = (object) ['id' => $oApp->mission_id];
                $modelMisUsr = $this->model('matter\mission\user');
                $oMisUsr = $modelMisUsr->byIdInApp($oMission, $oUser->uid, ['fields' => 'nickname']);
                if ($oMisUsr) {
                    $nickname = $oMisUsr->nickname;
                } else {
                    $nickname = empty($oUser->nickname) ? '' : $oUser->nickname;
                }
            } else {
                $nickname = empty($oUser->nickname) ? '' : $oUser->nickname;
            }
        }

        return $nickname;
    }
    /**
     * 创建一个空的签到活动
     *
     * @param string $site site's id
     * @param string $mission mission's id
     *
     */
    public function createByTemplate($oUser, $oSite, $oCustomConfig, $oMission = null, $template = 'basic') {
        /* 模板信息 */
        $oTemplateConfig = $this->_getSysTemplate($template);

        $oNewApp = new \stdClass;
        $appId = uniqid();
        $oNewApp->siteid = $oSite->id;
        $oNewApp->id = $appId;

        /* 从站点和项目中获得pic定义 */
        if (!empty($oMission)) {
            $oNewApp->summary = $oMission->summary;
            $oNewApp->pic = $oMission->pic;
            $oNewApp->mission_id = $oMission->id;
            $oNewApp->use_mission_header = 'Y';
            $oNewApp->use_mission_footer = 'Y';
            $oMisEntryRule = $oMission->entryRule;
        } else {
            $oNewApp->summary = '';
            $oNewApp->pic = $oSite->heading_pic;
            $oNewApp->use_mission_header = 'N';
            $oNewApp->use_mission_footer = 'N';
        }
        /* 用户指定的属性 */
        $title = empty($oCustomConfig->proto->title) ? '新签到活动' : $oCustomConfig->proto->title;
        $oNewApp->title = $title;
        $oNewApp->start_at = isset($oCustomConfig->proto->start_at) ? $oCustomConfig->proto->start_at : 0;
        $oNewApp->end_at = isset($oCustomConfig->proto->end_at) ? $oCustomConfig->proto->end_at : 0;

        /* 进入规则 */
        $oEntryRule = $oTemplateConfig->entryRule;
        if (!isset($oEntryRule->scope)) {
            $oEntryRule->scope = new \stdClass;
        }
        if (!empty($oCustomConfig->proto->entryRule->scope)) {
            /* 用户指定的规则 */
            $oApp = new \stdClass;
            $oApp->id = $appId;
            $oApp->title = $title;
            $oApp->type = 'signin';
            $this->setEntryRuleByProto($oSite, $oEntryRule, $oCustomConfig->proto->entryRule, $oApp, $oUser);
        } else if (isset($oMisEntryRule)) {
            /* 项目的进入规则 */
            $this->setEntryRuleByMission($oEntryRule, $oMisEntryRule);
        }
        /* 关联了通讯录，替换匹配的题目 */
        if (!empty($oTemplateConfig->schema)) {
            /* 通讯录关联题目 */
            if (!empty($oEntryRule->scope) && $oEntryRule->scope === 'member' && isset($oEntryRule->member)) {
                $mschemaIds = array_keys(get_object_vars($oEntryRule->member));
                if (!empty($mschemaIds)) {
                    $this->setSchemaByMschema($mschemaIds[0], $oTemplateConfig);
                }
            }
        }
        /* 关联了分组活动，添加分组名称，替换匹配的题目 */
        if (!empty($oEntryRule->group->id)) {
            $this->setSchemaByGroupApp($oEntryRule->group->id, $oTemplateConfig);
        }
        /* 作为昵称的题目 */
        $oNicknameSchema = $this->findAssignedNicknameSchema($oTemplateConfig->schema);
        if (!empty($oNicknameSchema)) {
            $oNewApp->assigned_nickname = json_encode(['valid' => 'Y', 'schema' => ['id' => $oNicknameSchema->id]]);
        }

        $oNewApp->entry_rule = $this->toJson($oEntryRule);
        $oNewApp->data_schemas = empty($oTemplateConfig->schema) ? [] : $this->toJson($oTemplateConfig->schema);

        $oNewApp = $this->create($oUser, $oNewApp);

        /* 创建缺省页面 */
        $this->_addPageByTemplate($oUser, $oSite->id, $oNewApp, $oTemplateConfig);
        /* 创建缺省轮次 */
        $this->_addFirstRound($oUser, $oSite->id, $oNewApp);

        /* 记录操作日志 */
        $this->model('matter\log')->matterOp($oSite->id, $oUser, $oNewApp, 'C');

        return $oNewApp;
    }
    /**
     * 获得系统模板定义
     */
    private function _getSysTemplate($template) {
        /* 模板信息 */
        $templateDir = TMS_APP_TEMPLATE . '/pl/fe/matter/signin/' . $template;
        $oTemplateConfig = file_get_contents($templateDir . '/config.json');
        $oTemplateConfig = preg_replace('/\t|\r|\n/', '', $oTemplateConfig);
        $oTemplateConfig = json_decode($oTemplateConfig);
        if (JSON_ERROR_NONE !== json_last_error()) {
            //return new \ResponseError('解析模板数据错误：' . json_last_error_msg());
        }
        /* 进入规则 */
        if (empty($oTemplateConfig->entryRule)) {
            //return new \ResponseError('没有获得页面进入规则');
        }
        /**
         * 处理页面
         */
        if (!empty($oTemplateConfig->pages)) {
            foreach ($oTemplateConfig->pages as $oPage) {
                $templateFile = $templateDir . '/' . $oPage->name;
                /* 填充代码 */
                $code = [
                    'html' => file_exists($templateFile . '.html') ? file_get_contents($templateFile . '.html') : '',
                    'css' => file_exists($templateFile . '.css') ? file_get_contents($templateFile . '.css') : '',
                    'js' => file_exists($templateFile . '.js') ? file_get_contents($templateFile . '.js') : '',
                ];
                $oPage->code = $code;
            }
        }

        return $oTemplateConfig;
    }
    /**
     * 根据模板生成页面
     *
     * @param string $app
     * @param string $scenario scenario's name
     * @param string $template template's name
     */
    private function _addPageByTemplate(&$oUser, $siteid, &$app, &$oTemplateConfig) {
        $pages = $oTemplateConfig->pages;
        if (empty($pages)) {
            return false;
        }
        /* 创建页面 */
        //$templateDir = TMS_APP_TEMPLATE . $oTemplateConfig->path;
        $modelPage = $this->model('matter\signin\page');
        $modelCode = $this->model('code\page');
        foreach ($pages as $oPageByTmpl) {
            $oPageByApp = $modelPage->add($oUser, $siteid, $app->id, $oPageByTmpl);
            /*页面关联的定义*/
            $pageSchemas = [];
            $pageSchemas['data_schemas'] = isset($oPageByTmpl->data_schemas) ? $this->toJson($oPageByTmpl->data_schemas) : '[]';
            $pageSchemas['act_schemas'] = isset($oPageByTmpl->act_schemas) ? $this->toJson($oPageByTmpl->act_schemas) : '[]';
            $rst = $modelPage->update(
                'xxt_signin_page',
                $pageSchemas,
                ['aid' => $app->id, 'id' => $oPageByApp->id]
            );
            /* 填充页面 */
            if (!empty($oPageByTmpl->code)) {
                $code = (array) $oPageByTmpl->code;
                /* 页面存在动态信息 */
                $matched = [];
                $pattern = '/<!-- begin: generate by schema -->.*<!-- end: generate by schema -->/s';
                if (preg_match($pattern, $code['html'], $matched)) {
                    $html = $modelPage->htmlBySchema($oPageByTmpl->data_schemas, $matched[0]);
                    $code['html'] = preg_replace($pattern, $html, $code['html']);
                }
                $modelCode->modify($oPageByApp->code_id, $code);
            }
        }

        return $pages;
    }
    /**
     * 添加第一个轮次
     *
     * @param string $app
     */
    private function _addFirstRound(&$oUser, $siteid, &$app) {
        $modelRnd = $this->model('matter\signin\round');

        $roundId = uniqid();
        $round = [
            'siteid' => $siteid,
            'aid' => $app->id,
            'rid' => $roundId,
            'creater' => $oUser->id,
            'create_at' => time(),
            'title' => '第1轮',
            'state' => 1,
        ];

        $modelRnd->insert('xxt_signin_round', $round, false);

        $round = (object) $round;

        return $round;
    }
}