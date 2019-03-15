<?php
require_once '../../db.php';

$sqls = [];
/**
 * 支持的第三方登录
 */
$sql = "create table if not exists xxt_account_third (";
$sql .= "id int(11) unsigned NOT NULL AUTO_INCREMENT";
$sql .= ",creater varchar(50) NOT NULL";
$sql .= ",create_at int(11) NOT NULL";
$sql .= ",appname varchar(50) NOT NULL default ''"; //第三方名称
$sql .= ",pic text null"; // head image.
$sql .= ",appid varchar(100) NOT NULL default ''"; // 
$sql .= ",appsecret varchar(100) NOT NULL default ''"; // 
$sql .= ",scope varchar(20) NOT NULL default ''"; // 获取身份权限
$sql .= ",authloginurl  varchar(255) NOT NULL default ''"; // 用户授权地址
$sql .= ",authuserinfourl  varchar(255) NOT NULL default ''"; // 用户信息地址
$sql .= ",state tinyint not null default 1";
$sql .= ",primary key (id)) ENGINE=MyISAM DEFAULT CHARSET=utf8";
$sqls[] = $sql;
/**
 * 第三方登录的用户
 */
$sql = "create table if not exists xxt_account_third_user (";
$sql .= "id int(11) unsigned NOT NULL AUTO_INCREMENT";
$sql .= ",third_id int(11) NOT NULL"; // 
$sql .= ",openid varchar(255) not null";
$sql .= ",reg_time int(11) NOT NULL";
$sql .= ",headimgurl varchar(255) not null default ''";
$sql .= ",nickname varchar(255) not null default ''";
$sql .= ",sex tinyint not null default 0";
$sql .= ",city varchar(255) not null default ''";
$sql .= ",province varchar(255) not null default ''";
$sql .= ",country varchar(255) not null default ''";
$sql .= ",forbidden char(1) not null default 'N'";
$sql .= ",unionid varchar(32) not null default '' comment '用户的注册id'";
$sql .= ",primary key (id)) ENGINE=MyISAM DEFAULT CHARSET=utf8";
$sqls[] = $sql;
//
$sqls[] = "INSERT INTO account_group(group_id,group_name,asdefault,p_mpgroup_create,p_mp_create,p_mp_permission,p_platform_manage) VALUES(101,'第三方登录用户',0,0,0,0,0)";;
//
foreach ($sqls as $sql) {
	if (!$mysqli->query($sql)) {
		header('HTTP/1.0 500 Internal Server Error');
		echo 'database error: ' . $mysqli->error;
	}
}

echo "end update " . __FILE__ . PHP_EOL;