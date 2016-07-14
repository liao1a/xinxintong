<?php
namespace pl\fe\matter\wall;

require_once dirname(dirname(__FILE__)) . '/base.php';
/**
 * 信息墙
 */
class message extends \pl\fe\matter\base {
	/**
	 *
	 */
	public function index_action() {
		$this->view_action('/pl/fe/matter/wall/detail');
	}
	/**
	 * 获得所有消息
	 */
	public function list_action($wall, $page = 1, $size = 30, $contain = null, $siteid) {
		$contain = isset($contain) ? explode(',', $contain) : array();
		$messages = $this->model('matter\wall')->messages($siteid, $wall, $page, $size, $contain);

		return new \ResponseData($messages);
	}
	/**
	 * 获得未审核的消息
	 */
	public function pendingList_action($wall, $last = 0, $siteid) {
		$messages = $this->model('matter\wall')->pendingMessages($siteid, $wall, $last);

		return new \ResponseData(array($messages, time()));
	}
	/**
	 * 批准消息上墙
	 *
	 * 如果需要推送消息，将上墙信息推送给墙内所有用户
	 *
	 * $wid 信息墙ID
	 * $id 消息ID
	 *
	 */
	public function approve_action($wall, $id, $siteid) {
		$model = $this->model('matter\wall');
		/**
		 * 批准消息
		 */
		$v = $model->approve($siteid, $wall, $id, $this);
		/**
		 * 是否需要推送消息
		 */
		$wall = $model->byId($wall, 'id,quit_cmd,skip_approve,push_others,quit_reply,user_url');

		if ('Y' === $wall->push_others) {
			$approvedMsg = $model->messageById($wall->id, $id);

			$openid = $approvedMsg->openid;

			switch ($approvedMsg->data_type) {
			case 'text':
				$msg = array(
					'type' => $approvedMsg->data_type,
					'data' => $approvedMsg->data,
				);
				break;
			case 'image':
				$msg = array(
					'type' => $approvedMsg->data_type,
					'data' => array($approvedMsg->data_media_id, $approvedMsg->data),
				);
				break;
			}

			$model->push_others($siteid, $openid, $msg, $wall, $wall->id, $this);
		}

		return new \ResponseData($v);
	}
	/**
	 * 拒绝消息上墙
	 *
	 * $wid
	 * $id
	 *
	 */
	public function reject_action($wall, $id) {
		$v = $this->model('matter\wall')->reject($wall, $id);

		return new \ResponseData($v);
	}
	/**
	 * 清空信息墙的所有数据
	 */
	public function reset_action($wall) {
		/**
		 * 清除所有加入的人
		 */
		$this->model()->delete('xxt_wall_enroll', "wid='$wall'");
		/**
		 * 清除所有留言
		 */
		$rst = $this->model()->delete('xxt_wall_log', "wid='$wall'");

		return new \ResponseData($rst);
	}
}