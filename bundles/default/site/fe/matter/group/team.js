!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=154)}({0:function(e,t,n){"use strict";var i,o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function a(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},i=[],o=0;o<e.length;o++){var r=e[o],c=t.base?r[0]+t.base:r[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var d=a(u),m={css:r[1],media:r[2],sourceMap:r[3]};-1!==d?(s[d].references++,s[d].updater(m)):s.push({identifier:u,updater:h(m,t),references:1}),i.push(u)}return i}function l(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var s=r(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function m(e,t,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var r=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function f(e,t,n){var i=n.css,o=n.media,r=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var p=null,g=0;function h(e,t){var n,i,o;if(t.singleton){var r=g++;n=p||(p=l(t)),i=m.bind(null,n,r,!1),o=m.bind(null,n,r,!0)}else n=l(t),i=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var o=a(n[i]);s[o].references--}for(var r=c(e,t),l=0;l<n.length;l++){var u=a(n[l]);0===s[u].references&&(s[u].updater(),s.splice(u,1))}n=r}}}},1:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var o=(s=i,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(c," */")),r=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[n].concat(r).concat([o]).join("\n")}var s,a,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(o[s]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);i&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},10:function(e,t,n){"use strict";angular.module("trace.ui.xxt",["http.ui.xxt"]).directive("tmsTrace",["$q","$timeout","http2",function(e,t,n){var i,o,r,s="/xxt/site/matter/enroll/trace",a=function(e,t,n,i,o){this.type=t,this.elapse=n||1*new Date-e,this.biz=i,o&&(this.text=o)},c=function(){function e(e){var t,n;e.sendUrl&&(t=window.localStorage)&&((n=(n=t.getItem(s))?JSON.parse(n):{})[e.sendUrl]=e,t.setItem(s,JSON.stringify(n)))}this.start=0,this.events=[],this.setSendUrl=function(t){this.sendUrl=t,e(this)},this.pushEvent=function(t,n,i){var o,r;0===this.events.length?(this.start=1*new Date,o=new a(this.start,t,0,n,i),this.events.push(o),e(this)):(o=new a(this.start,t,null,n,i),((r=this.events[this.events.length-1]).type!==o.type||o.elapse-r.elapse>1e3)&&(this.events.push(o),e(this)))},this.stop=function(){this.closing="Y",e(this),this.start=0,this.events=[]}},l=function(e){var i;this.begin=function(){this.cancel(i),i=t((function(){var t,i,o;e.stop(),e.sendUrl&&(t=window.localStorage)&&(i=t.getItem(s),o=(i=JSON.parse(i))[e.sendUrl],delete i[e.sendUrl],i=t.setItem(s,JSON.stringify(i)),n.post(e.sendUrl,{start:o.start,events:o.events},{showProgress:!1}))}),5e3)},this.cancel=function(){i&&(t.cancel(i),i=null)}};if((i=window.localStorage)&&(o=(o=i.getItem(s))?JSON.parse(o):{}))for(var u in o)o&&o[u]&&(r=o[u]).closing&&"Y"===r.closing&&(delete o[u],o=i.setItem(s,JSON.stringify(o)),n.post(r.sendUrl,{start:r.start,events:r.events}).then((function(){})));return{restrict:"A",link:function(e,n,i){var o=new c,r=new l(o);!i.readySign&&i.sendUrl&&(o.sendUrl=i.sendUrl),o.pushEvent("load"),n.on("click",(function(e){var t,n,i;(t=e.target).hasAttribute("trace-biz")&&(!(n=t.getAttribute("trace-biz"))&&t.hasAttribute("ng-click")&&(n=t.getAttribute("ng-click")),n&&(n=n.replace(/'|"/g,"")),i=t.innerText),o.pushEvent("click",n,i),r.begin()})),n.on("touchend",(function(e){o.pushEvent("touchend"),r.begin()})),window.addEventListener("scroll",(function(e){o.pushEvent("scroll"),r.begin()})),window.addEventListener("beforeunload",(function(e){o.pushEvent("beforeunload"),o.stop(),r.cancel()})),i.readySign&&e.$watch(i.readySign,(function(e){e&&t((function(){o.setSendUrl(i.sendUrl)}))})),r.begin()}}}])},154:function(e,t,n){e.exports=n(155)},155:function(e,t,n){"use strict";window.moduleAngularModules=["ngRoute"];var i=n(51);i.config(["$routeProvider",function(e){e.when("/rest/site/fe/matter/group/team/create",{template:n(156),controller:"ctrlTeamCreate"}).when("/rest/site/fe/matter/group/team/config",{template:n(157),controller:"ctrlTeamConfig"}).otherwise({template:n(158),controller:"ctrlTeamHome"})}]),i.controller("ctrlTeam",["$scope","tmsLocation","facGroupApp","facGroupUser",function(e,t,n,i){e.gotoHome=function(){location.href="/rest/site/fe/matter/group?"+t.s("site","app")},e.gotoTeamHome=function(){t.path("/rest/site/fe/matter/group/team/home")},n.get().then((function(t){e.app=t,e.schemas=t.dataSchemas,i.get().then((function(t){e.user=t}))}))}]),i.controller("ctrlTeamHome",["$scope","$uibModal","tmsLocation","facGroupTeam","facGroupRecord",function(e,t,i,o,r){e.config=function(){i.path("/rest/site/fe/matter/group/team/config")},e.invite=function(){t.open({template:n(159),controller:["$scope","$uibModalInstance","tmsLocation",function(e,t,n){e.close=function(){t.dismiss()},e.inviteUrl=location.protocol+"//"+location.host+"/rest/site/fe/matter/group/invite?"+n.s("site","app","team")}]})},e.quit=function(t){o.quit(t).then((function(){e.members.splice(e.members.indexOf(t),1)}))},o.get().then((function(t){e.team=t,r.list().then((function(t){e.members=t}))}))}]),i.controller("ctrlTeamCreate",["$scope","$location","facGroupTeam",function(e,t,n){e.submit=function(){n.create(e.team,e.member).then((function(n){t.search().team=n.team_id,e.gotoTeamHome()}))},e.team={},e.member={}}]),i.controller("ctrlTeamConfig",["$scope","$location","facGroupTeam",function(e,t,n){var i,o;o={},e.update=function(t){o[t]=e.team[t],e.modified=!0},e.submit=function(){Object.keys(o).length&&n.update(o).then((function(){e.modified=!1,o={}}))},e.modified=!1,n.get().then((function(t){i=t,e.team=angular.copy(i)}))}])},156:function(e,t){e.exports='<div class=col-md-12> <div class=form-group> <label>团队名称</label> <input type=text class=form-control ng-model=team.title> </div> <div class=form-group> <label>团队介绍</label> <textarea class=form-control ng-model=team.summary></textarea> </div> <section ng-if=schemas.length> <hr> <div class=form-group ng-repeat="schema in schemas" ng-switch on=schema.type> <label ng-bind=schema.title ng-if="schema.type!==\'html\'"></label> <input type=text class=form-control ng-model=member[schema.id] ng-switch-when=shorttext> <textarea class=form-control ng-model=member[schema.id] rows=3 ng-switch-when=longtext></textarea> <ul class=list-unstyled ng-switch-when=single> <li class=radio ng-repschemat="op in schema.ops"> <label> <input type=radio name="{{action.id+\'_\'+schema.id}}" value={{op.v}} ng-model=member[schema.id]><span>{{op.l}}</span></label> </li> </ul> <ul class=list-unstyled ng-switch-when=multiple> <li class=checkbox ng-repschemat="op in schema.ops"> <label> <input type=checkbox ng-model=member[schema.id][op.v]><span>{{op.l}}</span></label> </li> </ul> <div ng-switch-when=date tms-date=Y tms-date-value=member[schema.id]> <div ng-bind="member[schema.id]*1000|date:\'yy-MM-dd HH:mm\'" class=form-control></div> </div> <div tms-image-input=Y ng-switch-when=image> <ul class="img-tiles clschemarfix list-unstyled" name={{schema.id}}> <li wrap=img ng-repschemat="img in member[schema.id]" class=img-thumbnail> <img flex-img> <button class="btn btn-default btn-xs" ng-click=removeImage(schema,$index)><span class="glyphicon glyphicon-remove"></span></button> </li> <li class=img-picker> <button class="btn btn-default" ng-click=chooseImage(schema)><span class="glyphicon glyphicon-picture"></span> <br>选择图片</button> </li> </ul> </div> <div ng-switch-when=html> <div ng-bind-html=schema.content></div> </div> </div> </section> <button class="btn btn-default" ng-click=submit()>完成组建</button> </div>'},157:function(e,t){e.exports='<div class=col-md-12> <div class=form-group> <button class="btn btn-default" ng-click=gotoTeamHome()><span class="glyphicon glyphicon-arrow-left"></span> 返回</button> </div> <div class="panel panel-default"> <div class=panel-body> <div class=form-group> <label>团队名称</label> <input type=text class=form-control ng-model=team.title ng-change="update(\'title\')"> </div> <div class=form-group> <label>团队介绍</label> <textarea class=form-control ng-model=team.summary ng-change="update(\'summary\')"></textarea> </div> </div> </div> <button class=btn ng-class="modified?\'btn-success\':\'btn-default\'" ng-disabled=!modified ng-click=submit()>完成设置</button> </div>'},158:function(e,t){e.exports='<div class=col-md-12> <div class=form-group> <button class="btn btn-default" ng-click=gotoHome()><span class="glyphicon glyphicon-arrow-left"></span> 活动首页</button> <button class="btn btn-default" ng-click=config()><span class="glyphicon glyphicon-cog"></span> 团队设置</button> </div> <div class="panel panel-default"> <div class=panel-body> <div class=form-group> <label ng-bind=::team.title></label> </div> <div class=form-group> <div class=help-block ng-bind=::team.summary></div> </div> </div> </div> <div class="panel panel-default"> <div class=panel-heading>已有成员</div> <div class=panel-body> <div class=list-group> <div class=list-group-item ng-repeat="mem in members"> <span ng-bind=::mem.nickname></span><span ng-if="mem.is_leader===\'Y\'">（组长）</span><button ng-if="mem.is_leader===\'N\'&&user.records[team.team_id].is_leader===\'Y\'" class="btn btn-default btn-xs pull-right" ng-click=quit(mem)>移出</button> </div> </div> </div> </div> <div class=form-group> <button class="btn btn-default" ng-click=invite()><span class="glyphicon glyphicon-share-alt"></span> 发起邀请</button> </div> </div>'},159:function(e,t){e.exports='<div class=modal-header> <button class=close ng-click=close()>×</button> <h5 class=modal-title>邀请</h5> </div> <div class=modal-body> <div class=form-group> <div style=word-break:break-all ng-bind=::inviteUrl></div> </div> </div> <div class=modal-footer> <button class="btn btn-default" ng-click=close()>关闭</button> </div>'},2:function(e,t,n){"use strict";var i=angular.module("http.ui.xxt",["ng"]);i.provider("tmsLocation",(function(){var e;this.config=function(t){e=t||location.pathname},this.$get=["$location",function(t){return e||(e=location.pathname),{s:function(){var e=t.search();if(arguments.length){for(var n=[],i=0,o=arguments.length;i<o;i++)n.push(arguments[i]+"="+(e[arguments[i]]||""));return n.join("&")}return e},j:function(n){var i=e,o=[];n&&n.length&&(i+="/"+n);for(var r=1,s=arguments.length;r<s;r++)o.push(arguments[r]+"="+(t.search()[arguments[r]]||""));return o.length&&(i+="?"+o.join("&")),i},path:function(){return arguments.length?t.path(arguments[0]):t.path()}}}]})),i.service("http2",["$rootScope","$http","$timeout","$q","$sce","$compile",function(e,t,n,i,o,r){function s(t,n,i){var s;return o.trustAsHtml(t),(s=angular.element("<div></div>")).attr({class:"tms-notice-box alert alert-"+(n||"info"),"ng-style":"{'z-index':1099}"}).html(t),i||s[0].addEventListener("click",(function(){document.body.removeChild(s[0])}),!0),r(s)(e),document.body.appendChild(s[0]),s[0]}function a(e){e&&document.body.removeChild(e)}function c(e){return!(!e.page||!angular.isObject(e.page))&&(void 0===e.page.at&&(e.page.at=1),void 0===e.page.size&&(e.page.size=12),void 0!==e.page.j&&angular.isFunction(e.page.j)||(e.page.j=function(){return"page="+this.at+"&size="+this.size}),!0)}this.get=function(e,o){var r,l,u=i.defer();return!0===(o=angular.extend({headers:{accept:"application/json"},parseResponse:!0,autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},o)).showProgress&&(l=n((function(){l=null,r=s(o.showProgressText,"info")}),o.showProgressDelay)),c(o)&&(e+=(-1===e.indexOf("?")?"?":"&")+o.page.j()),t.get(e,o).success((function(e){if(o.page&&void 0!==e.data.total&&(o.page.total=e.data.total),!0===o.showProgress&&(l&&n.cancel(l),r&&(a(r),r=null)),o.parseResponse)if(angular.isString(e)){if(o.autoNotice&&s(e,"warning"),o.autoBreak)return;u.reject(e)}else if(e.err_code&&0!=e.err_code){if(o.autoNotice)s(angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),"warning");if(o.autoBreak)return;u.reject(e)}else u.resolve(e);else u.resolve(e)})).error((function(e,t){!0===o.showProgress&&(l&&n.cancel(l),r&&(a(r),r=null)),s(null===e?"网络不可用":e,"danger")})),u.promise},this.post=function(e,o,r){var l,u,d=i.defer();return!0===(r=angular.extend({headers:{accept:"application/json"},parseResponse:!0,autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},r)).showProgress&&(u=n((function(){u=null,l=s(r.showProgressText,"info")}),r.showProgressDelay)),c(r)&&(e+=(-1===e.indexOf("?")?"?":"&")+r.page.j()),t.post(e,o,r).success((function(e){if(r.page&&void 0!==e.data.total&&(r.page.total=e.data.total),!0===r.showProgress&&(u&&n.cancel(u),l&&(a(l),l=null)),r.parseResponse)if(angular.isString(e)){if(r.autoNotice&&(s(e,"warning"),l=null),r.autoBreak)return;d.reject(e)}else if(0!=e.err_code){if(r.autoNotice)s(angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),"warning");if(r.autoBreak)return;d.reject(e)}else d.resolve(e);else d.resolve(e)})).error((function(e,t){!0===r.showProgress&&(u&&n.cancel(u),l&&(a(l),l=null)),s(null===e?"网络不可用":e,"danger")})),d.promise},this.merge=function(e,t,n){return!angular.equals(e,t)&&function e(t,n,i){if(n){if(t){if(angular.isArray(t)){t.length>n.length&&t.splice(n.length-1,t.length-n.length);for(var o=0,r=n.length;o<r;o++)o<t.length?e(t[o],n[o],i):t.push(n[o])}else if(angular.isObject(t)){for(var s in t)i&&-1!==i.indexOf(s)||(void 0===n[s]?delete t[s]:angular.isObject(n[s])&&angular.isObject(t[s])?e(t[s],n[s],i):t[s]=n[s]);for(var s in n)i&&-1!==i.indexOf(s)||void 0===t[s]&&(t[s]=n[s])}}else t=n;return!0}}(e,t,n)}}])},4:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("snsshare.ui.xxt",[]);ngMod.service("tmsSnsShare",["$http",function($http){function setWxShare(e,t,n,i,o){window.wx.onMenuShareTimeline({title:o.descAsTitle?n:e,link:t,imgUrl:i,success:function(){try{o.logger&&o.logger("T")}catch(e){alert("share failed:"+e.message)}},cancel:function(){},fail:function(){alert("shareT: fail")}}),window.wx.onMenuShareAppMessage({title:e,desc:n,link:t,imgUrl:i,success:function(){try{o.logger&&o.logger("F")}catch(e){alert("share failed:"+e.message)}},cancel:function(){},fail:function(){alert("shareF: fail")}})}var _isReady=!1;this.config=function(e){this.options=e},this.set=function(title,link,desc,img,fnOther){var _this=this,script;(img&&-1===img.indexOf(location.protocol)&&(img=location.protocol+"//"+location.host+img),_isReady)?/MicroMessenger/i.test(navigator.userAgent)?setWxShare(title,link,desc,img,_this.options):fnOther&&"function"==typeof fnOther&&fnOther(title,link,desc,img):/MicroMessenger/i.test(navigator.userAgent)?(script=document.createElement("script"),script.src=location.protocol+"//res.wx.qq.com/open/js/jweixin-1.0.0.js",script.onload=function(){var xhr,url;xhr=new XMLHttpRequest,url="/rest/site/fe/wxjssdksignpackage?site="+_this.options.siteId+"&url="+encodeURIComponent(location.href.split("#")[0]),xhr.open("GET",url,!0),xhr.onreadystatechange=function(){var signPackage;if(4==xhr.readyState)if(xhr.status>=200&&xhr.status<400)try{eval("("+xhr.responseText+")"),signPackage&&(signPackage.debug=!1,signPackage.jsApiList=_this.options.jsApiList,wx.config(signPackage),wx.ready((function(){setWxShare(title,link,desc,img,_this.options),_isReady=!0})),wx.error((function(e){alert(JSON.stringify(e))})))}catch(e){alert("local error:"+e.toString())}else alert("http error:"+xhr.statusText)},xhr.send()},document.body.appendChild(script)):fnOther&&"function"==typeof fnOther&&(fnOther(title,link,desc,img),_isReady=!0)}}])},5:function(e,t,n){"use strict";angular.module("notice.ui.xxt",["ng","ngSanitize"]).service("noticebox",["$timeout","$interval","$q",function(e,t,n){var i="tmsbox"+1*new Date,o={type:"",timer:null},r=function(e,t){var n;return null===(n=document.querySelector("#"+i))?((n=document.createElement("div")).setAttribute("id",i),n.classList.add("tms-notice-box","alert","alert-"+e),n.innerHTML="<div>"+t+"</div>",document.body.appendChild(n),o.type=e):(o.type!==e&&(n.classList.remove("alert-"+e),o.type=e),n.childNodes[0].innerHTML=t),n};this.close=function(){var e;(e=document.querySelector("#"+i))&&document.body.removeChild(e)},this.error=function(t){var n,i;o.timer&&(e.cancel(o.timer),o.timer=null),n=r("danger",t),(i=document.createElement("button")).classList.add("close"),i.innerHTML="<span>&times;</span>",n.insertBefore(i,n.childNodes[0]),i.addEventListener("click",(function(){document.body.removeChild(n)}))},this.warn=function(t){var n,i;o.timer&&(e.cancel(o.timer),o.timer=null),n=r("warning",t),(i=document.createElement("button")).classList.add("close"),i.innerHTML="<span>&times;</span>",n.insertBefore(i,n.childNodes[0]),i.addEventListener("click",(function(){document.body.removeChild(n)}))},this.success=function(t){var n;o.timer&&e.cancel(o.timer),n=r("success",t),o.timer=e((function(){n.parentNode&&n.parentNode===document.body&&document.body.removeChild(n),o.timer=null}),2e3)},this.info=function(t){var n;o.timer&&e.cancel(o.timer),n=r("info",t),o.timer=e((function(){n.parentNode&&n.parentNode===document.body&&document.body.removeChild(n),o.timer=null}),2e3)},this.progress=function(e){r("progress",e)},this.confirm=function(i,s){var a,c,l,u;return a=n.defer(),o.timer&&(e.cancel(o.timer),o.timer=null),c=r("warning",i),s&&s.length?s.forEach((function(n){if((l=document.createElement("button")).classList.add("btn","btn-default","btn-sm"),l.innerHTML=n.label,c.appendChild(l,c.childNodes[0]),l.addEventListener("click",(function(){document.body.removeChild(c),a.resolve(n.value)})),n.execWait){var i=Math.ceil(n.execWait/500),r=document.createElement("span");r.classList.add("countdown"),r.innerHTML=i,l.appendChild(r),u=t((function(){i<=0?(t.cancel(u),u=null):r.innerHTML=--i}),500),o.timer=e((function(){c.parentNode&&c.parentNode===document.body&&document.body.removeChild(c),o.timer=null,a.resolve(n.value)}),n.execWait)}})):((l=document.createElement("button")).classList.add("btn","btn-default","btn-sm"),l.innerHTML="是",c.appendChild(l,c.childNodes[0]),l.addEventListener("click",(function(){document.body.removeChild(c),a.resolve()})),(l=document.createElement("button")).classList.add("btn","btn-default","btn-sm"),l.innerHTML="否",c.appendChild(l,c.childNodes[0]),l.addEventListener("click",(function(){document.body.removeChild(c),a.reject()}))),a.promise}}])},51:function(e,t,n){"use strict";n(52),n(4),/MicroMessenger/i.test(navigator.userAgent)&&window.signPackage&&window.wx&&window.wx.ready((function(){window.wx.showOptionMenu()})),n(10),n(5),n(2),n(6);var i=["ngSanitize","ui.bootstrap","notice.ui.xxt","http.ui.xxt","trace.ui.xxt","snsshare.ui.xxt","siteuser.ui.xxt"];window.moduleAngularModules&&window.moduleAngularModules.forEach((function(e){i.push(e)}));var o=angular.module("app",i);o.config(["$locationProvider","$uibTooltipProvider",function(e,t){e.html5Mode(!0),t.setTriggers({show:"hide"})}]),o.factory("facGroupApp",["$q","http2","tmsLocation",function(e,t,n){var i={get:function(){var i;return i=e.defer(),t.get("/rest/site/fe/matter/group/get?"+n.s("site","app")).then((function(e){i.resolve(e.data)})),i.promise}};return i}]),o.factory("facGroupTeam",["$q","http2","tmsLocation",function(e,t,n){var i={get:function(){var i;return i=e.defer(),t.get("/rest/site/fe/matter/group/team/get?"+n.s("site","app","team")).then((function(e){i.resolve(e.data)})),i.promise},list:function(){var i;return i=e.defer(),t.get("/rest/site/fe/matter/group/team/list?"+n.s("site","app")).then((function(e){i.resolve(e.data)})),i.promise},create:function(i,o){var r;return r=e.defer(),t.post("/rest/site/fe/matter/group/team/add?"+n.s("site","app"),{team:i,member:o}).then((function(e){r.resolve(e.data)})),r.promise},update:function(i){var o;return o=e.defer(),t.post("/rest/site/fe/matter/group/team/update?"+n.s("site","app","team"),i).then((function(e){o.resolve(e.data)})),o.promise},join:function(i){var o;return o=e.defer(),t.post("/rest/site/fe/matter/group/invite/join?"+n.s("site","app","team"),i).then((function(e){o.resolve(e.data)})),o.promise},quit:function(i){var o;return o=e.defer(),t.get("/rest/site/fe/matter/group/team/quit?"+n.s("site","app","team")+"&ek="+i.enroll_key).then((function(e){o.resolve(e.data)})),o.promise}};return i}]),o.factory("facGroupRecord",["$q","http2","tmsLocation",function(e,t,n){var i={list:function(){var i;return i=e.defer(),t.get("/rest/site/fe/matter/group/record/list?"+n.s("site","app","team")).then((function(e){i.resolve(e.data)})),i.promise}};return i}]),o.factory("facGroupUser",["$q","http2","tmsLocation",function(e,t,n){var i={get:function(){var i;return i=e.defer(),t.get("/rest/site/fe/matter/group/user/get?"+n.s("site","app")).then((function(e){var t,n=e.data;n&&(t={teams:[]},n.records&&n.records.length&&n.records.forEach((function(e){t[e.team_id]=e,t.teams.push(e.team_id)})),n.records=t),i.resolve(n)})),i.promise}};return i}]),o.controller("ctrlBase",["$scope","$q","$parse","http2","$timeout","tmsLocation","tmsSnsShare","tmsSiteUser",function(e,t,n,i,o,r,s,a){var c;e.isSmallLayout=!1,window.screen&&window.screen.width<992&&(e.isSmallLayout=!0),(c=document.querySelector(".loading"))&&c.parentNode.removeChild(c)}]),e.exports=o},52:function(e,t,n){var i=n(0),o=n(53);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};i(o,r);e.exports=o.locals||{}},53:function(e,t,n){(t=n(1)(!1)).push([e.i,"body{font-family:'Microsoft Yahei',Arial}.app-pic>div{width:100%;height:0;padding-bottom:56%;background-size:contain;background-repeat:no-repeat;background-position:center}",""]),e.exports=t},6:function(e,t,n){"use strict";angular.module("siteuser.ui.xxt",[]).service("tmsSiteUser",(function(){this.showSwitch=function(e,t){var n;(n=document.createElement("div")).classList.add("tms-switch","tms-switch-siteuser"),n.addEventListener("click",(function(n){n.preventDefault(),n.stopPropagation();var i,o,r,s,a,c=location.protocol+"//"+location.host;c+="/rest/site/fe/user",c+="?site="+e,t?location.href=c:(i=c,r=document.createDocumentFragment(),(s=document.createElement("div")).setAttribute("id","frmPlugin"),a=document.createElement("iframe"),s.appendChild(a),s.onclick=function(){s.parentNode.removeChild(s)},r.appendChild(s),document.body.appendChild(r),0===i.indexOf("http")?(window.onClosePlugin=function(){s.parentNode.removeChild(s),o&&o()},a.setAttribute("src",i)):a.contentDocument&&a.contentDocument.body&&(a.contentDocument.body.innerHTML=i))}),!0),document.body.appendChild(n)}}))}});