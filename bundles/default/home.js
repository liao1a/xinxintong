!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=65)}({0:function(e,t,n){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},s=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),r=[];function a(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},o=[],i=0;i<e.length;i++){var s=e[i],c=t.base?s[0]+t.base:s[0],l=n[c]||0,d="".concat(c," ").concat(l);n[c]=l+1;var u=a(d),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(r[u].references++,r[u].updater(p)):r.push({identifier:d,updater:m(p,t),references:1}),o.push(d)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var r=s(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function p(e,t,n,o){var i=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,i);else{var s=document.createTextNode(i),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(s,r[t]):e.appendChild(s)}}function f(e,t,n){var o=n.css,i=n.media,s=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),s&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var g=null,h=0;function m(e,t){var n,o,i;if(t.singleton){var s=h++;n=g||(g=l(t)),o=p.bind(null,n,s,!1),i=p.bind(null,n,s,!0)}else n=l(t),o=f.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var i=a(n[o]);r[i].references--}for(var s=c(e,t),l=0;l<n.length;l++){var d=a(n[l]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}n=s}}}},1:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=(r=o,a=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(c," */")),s=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(s).concat([i]).join("\n")}var r,a,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(o)for(var s=0;s<this.length;s++){var r=this[s][0];null!=r&&(i[r]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);o&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},2:function(e,t,n){"use strict";var o=angular.module("http.ui.xxt",["ng"]);o.provider("tmsLocation",(function(){var e;this.config=function(t){e=t||location.pathname},this.$get=["$location",function(t){return e||(e=location.pathname),{s:function(){var e=t.search();if(arguments.length){for(var n=[],o=0,i=arguments.length;o<i;o++)n.push(arguments[o]+"="+(e[arguments[o]]||""));return n.join("&")}return e},j:function(n){var o=e,i=[];n&&n.length&&(o+="/"+n);for(var s=1,r=arguments.length;s<r;s++)i.push(arguments[s]+"="+(t.search()[arguments[s]]||""));return i.length&&(o+="?"+i.join("&")),o},path:function(){return arguments.length?t.path(arguments[0]):t.path()}}}]})),o.service("http2",["$rootScope","$http","$timeout","$q","$sce","$compile",function(e,t,n,o,i,s){function r(t,n,o){var r;return i.trustAsHtml(t),(r=angular.element("<div></div>")).attr({class:"tms-notice-box alert alert-"+(n||"info"),"ng-style":"{'z-index':1099}"}).html(t),o||r[0].addEventListener("click",(function(){document.body.removeChild(r[0])}),!0),s(r)(e),document.body.appendChild(r[0]),r[0]}function a(e){e&&document.body.removeChild(e)}function c(e){return!(!e.page||!angular.isObject(e.page))&&(void 0===e.page.at&&(e.page.at=1),void 0===e.page.size&&(e.page.size=12),void 0!==e.page.j&&angular.isFunction(e.page.j)||(e.page.j=function(){return"page="+this.at+"&size="+this.size}),!0)}this.get=function(e,i){var s,l,d=o.defer();return!0===(i=angular.extend({headers:{accept:"application/json"},parseResponse:!0,autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},i)).showProgress&&(l=n((function(){l=null,s=r(i.showProgressText,"info")}),i.showProgressDelay)),c(i)&&(e+=(-1===e.indexOf("?")?"?":"&")+i.page.j()),t.get(e,i).success((function(e){if(i.page&&void 0!==e.data.total&&(i.page.total=e.data.total),!0===i.showProgress&&(l&&n.cancel(l),s&&(a(s),s=null)),i.parseResponse)if(angular.isString(e)){if(i.autoNotice&&r(e,"warning"),i.autoBreak)return;d.reject(e)}else if(e.err_code&&0!=e.err_code){if(i.autoNotice)r(angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),"warning");if(i.autoBreak)return;d.reject(e)}else d.resolve(e);else d.resolve(e)})).error((function(e,t){!0===i.showProgress&&(l&&n.cancel(l),s&&(a(s),s=null)),r(null===e?"网络不可用":e,"danger")})),d.promise},this.post=function(e,i,s){var l,d,u=o.defer();return!0===(s=angular.extend({headers:{accept:"application/json"},parseResponse:!0,autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},s)).showProgress&&(d=n((function(){d=null,l=r(s.showProgressText,"info")}),s.showProgressDelay)),c(s)&&(e+=(-1===e.indexOf("?")?"?":"&")+s.page.j()),t.post(e,i,s).success((function(e){if(s.page&&void 0!==e.data.total&&(s.page.total=e.data.total),!0===s.showProgress&&(d&&n.cancel(d),l&&(a(l),l=null)),s.parseResponse)if(angular.isString(e)){if(s.autoNotice&&(r(e,"warning"),l=null),s.autoBreak)return;u.reject(e)}else if(0!=e.err_code){if(s.autoNotice)r(angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),"warning");if(s.autoBreak)return;u.reject(e)}else u.resolve(e);else u.resolve(e)})).error((function(e,t){!0===s.showProgress&&(d&&n.cancel(d),l&&(a(l),l=null)),r(null===e?"网络不可用":e,"danger")})),u.promise},this.merge=function(e,t,n){return!angular.equals(e,t)&&function e(t,n,o){if(n){if(t){if(angular.isArray(t)){t.length>n.length&&t.splice(n.length-1,t.length-n.length);for(var i=0,s=n.length;i<s;i++)i<t.length?e(t[i],n[i],o):t.push(n[i])}else if(angular.isObject(t)){for(var r in t)o&&-1!==o.indexOf(r)||(void 0===n[r]?delete t[r]:angular.isObject(n[r])&&angular.isObject(t[r])?e(t[r],n[r],o):t[r]=n[r]);for(var r in n)o&&-1!==o.indexOf(r)||void 0===t[r]&&(t[r]=n[r])}}else t=n;return!0}}(e,t,n)}}])},20:function(e,t,n){var o=n(0),i=n(26);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var s={insert:"head",singleton:!1};o(i,s);e.exports=i.locals||{}},21:function(e,t,n){"use strict";angular.module("modal.ui.xxt",[]).service("tmsModal",["$rootScope","$compile","$q","$controller",function(e,t,n,o){this.open=function(i){var s,r,a,c,l,d=n.defer(),u=n.defer(),p={result:d.promise,closed:u.promise,close:function(e){document.body.removeChild(l[0]),d.resolve(e)},dismiss:function(e){document.body.removeChild(l[0]),u.resolve(e)}};return s=e.$new(!0),i.controller&&o(i.controller,{$scope:s,$tmsModalInstance:p}),(r=angular.element("<div></div>")).attr({class:"modal-content","ng-style":"{'z-index':1060}"}).append(i.template),(a=angular.element("<div></div>")).attr({class:"modal-dialog"}).append(r),(c=angular.element("<div></div>")).attr({class:"modal-backdrop","ng-style":"{'z-index':1040}"}),(l=angular.element("<div></div>")).attr({class:"modal","ng-style":"{'z-index':1050}",tabindex:-1}).append(a).append(c),t(l)(s),document.body.appendChild(l[0]),p}}])},26:function(e,t,n){(t=n(1)(!1)).push([e.i,".modal {\n    display: block;\n    overflow: hidden;\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    outline: 0;\n    opacity: 1;\n    overflow-x: hidden;\n    overflow-y: auto;\n    opacity: 1;\n}\n\n.modal-backdrop {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: #000;\n    opacity: .5;\n}\n\n.modal-dialog {\n    position: relative;\n    z-index: 1055;\n    margin: 0;\n    position: relative;\n    width: auto;\n    margin: 10px;\n}\n\n.modal-content {\n    position: relative;\n    background-color: #fff;\n    -webkit-background-clip: padding-box;\n    background-clip: padding-box;\n    border: 1px solid #999;\n    border: 1px solid rgba(0, 0, 0, .2);\n    border-radius: 6px;\n    outline: 0;\n    -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\n    box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\n}\n\n.modal-header {\n    padding: 15px;\n    border-bottom: 1px solid #e5e5e5;\n}\n\n.modal-header .close {\n    margin-top: -2px;\n}\n\n.modal-title {\n    margin: 0;\n    line-height: 1.42857143;\n}\n\n.modal-body {\n    position: relative;\n    padding: 15px;\n}\n\n.modal-footer {\n    padding: 15px;\n    text-align: right;\n    border-top: 1px solid #e5e5e5;\n}\n\nbutton.close {\n    -webkit-appearance: none;\n    padding: 0;\n    cursor: pointer;\n    background: 0 0;\n    border: 0;\n}\n\n.close {\n    float: right;\n    font-size: 21px;\n    font-weight: 700;\n    line-height: 1;\n    color: #000;\n    text-shadow: 0 1px 0 #fff;\n    filter: alpha(opacity=20);\n    opacity: .2;\n}\n\n@media (min-width:768px) {\n    .modal-dialog {\n        width: 600px;\n        margin: 30px auto;\n    }\n    .modal-content {\n        -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\n        box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\n    }\n}\n",""]),e.exports=t},27:function(e,t,n){"use strict";n(20),n(3),n(21),angular.module("favor.ui.xxt",["page.ui.xxt","modal.ui.xxt"]).service("tmsFavor",["$rootScope","$http","$q","tmsDynaPage","tmsModal",function(e,t,n,o,i){this.open=function(e){i.open({template:'<div class="modal-header"><span class="modal-title">指定收藏位置</span></div><div class="modal-body"><div class="checkbox"><label><input type=\'checkbox\' ng-true-value="\'Y\'" ng-false-value="\'N\'" ng-model=\'person._selected\'><span>个人账户</span><span ng-if="person._favored===\'Y\'">（已收藏）</span></label></div><div class="checkbox" ng-repeat="site in mySites"><label><input type=\'checkbox\' ng-true-value="\'Y\'" ng-false-value="\'N\'" ng-model=\'site._selected\'><span>{{site.name}}</span><span ng-if="site._favored===\'Y\'">（已收藏）</span></label></div><div ng-if="mySites.length===0"><a href="" ng-click="createSite()">创建</a>团队进行收藏，方便团队内共享信息</div></div><div class="modal-footer"><button class="btn btn-default" ng-click="cancel()">关闭</button><button class="btn btn-success" ng-click="ok()">确定</button></div>',controller:["$scope","$tmsModalInstance",function(o,i){(function(e){var o,i;return i=n.defer(),o="/rest/site/fe/user/favor/byUser",o+="?site="+e.siteid,o+="&id="+e.id,o+="&type="+e.type,t.get(o).success((function(e){i.resolve(e.data)})),i.promise})(e).then((function(e){o.person={_favored:e?"Y":"N"},o.person._selected=o.person._favored})),function(e){var o,i;return i=n.defer(),o="/rest/pl/fe/site/favor/sitesByUser?site="+e.siteid+"&id="+e.id+"&type="+e.type+"&_="+1*new Date,t.get(o).success((function(e){0==e.err_code&&i.resolve(e.data)})),i.promise}(e).then((function(e){var t=e;t.forEach((function(e){e._selected=e._favored})),o.mySites=t})),o.createSite=function(){t.get("/rest/pl/fe/site/create").success((function(e){var t=e.data;t._favored=t._selected="N",o.mySites=[t]}))},o.ok=function(){var e;e={person:o.person,mySites:o.mySites},i.close(e)},o.cancel=function(){i.dismiss()}}]}).result.then((function(o){var i,s;if((i=o.person)&&i._selected!==i._favored&&("Y"===i._selected?function(e){var o,i;i=n.defer(),o="/rest/site/fe/user/favor/add",o+="?site="+e.siteid,o+="&id="+e.id,o+="&type="+e.type,t.get(o).success((function(e){i.resolve(e.data)})),i.promise}(e):function(e){var o,i;i=n.defer(),o="/rest/site/fe/user/favor/remove",o+="?site="+e.siteid,o+="&id="+e.id,o+="&type="+e.type,t.get(o).success((function(e){i.resolve(e.data)})),i.promise}(e)),s=o.mySites){var r=[],a=[];s.forEach((function(e){e._selected!==e._favored&&("Y"===e._selected?r.push(e.id):a.push(e.id))})),r.length&&function(e,o){var i,s;s=n.defer(),i="/rest/pl/fe/site/favor/add?id="+e.id+"&type="+e.type,t.post(i,o).success((function(e){s.resolve(e.data)})),s.promise}(e,r),a.length&&function(e,o){var i,s;s=n.defer(),i="/rest/pl/fe/site/favor/remove?id="+e.id+"&type="+e.type,t.post(i,o).success((function(e){s.resolve(e.data)})),s.promise}(e,a)}}))},this.showSwitch=function(t,n){var i,s=this;(i=document.createElement("div")).classList.add("tms-switch","tms-switch-favor"),i.addEventListener("click",(function(i){i.preventDefault(),i.stopPropagation(),e.$apply((function(){t.loginExpire?s.open(n):o.openPlugin(location.protocol+"//"+location.host+"/rest/site/fe/user/access?site=platform#login").then((function(e){t.loginExpire=e.loginExpire,s.open(n)}))}))}),!0),document.body.appendChild(i)}}])},3:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("page.ui.xxt",[]);ngMod.directive("dynamicHtml",["$compile",function(e){return{restrict:"EA",replace:!0,link:function(t,n,o){t.$watch(o.dynamicHtml,(function(o){o&&o.length&&(n.html(o),e(n.contents())(t))}))}}}]),ngMod.service("tmsDynaPage",["$q",function($q){this.loadCss=function(e){var t;(t=document.createElement("style")).innerHTML=e,document.querySelector("head").appendChild(t)},this.loadExtCss=function(e){var t;(t=document.createElement("link")).href=e,t.rel="stylesheet",document.querySelector("head").appendChild(t)},this.loadJs=function(ngApp,js){!function(ngApp){eval(js)}(ngApp)},this.loadScript=function(e){var t,n,o=$q.defer();return n=function(){var i;(i=document.createElement("script")).src=e[t],i.onload=function(){++t<e.length?n():o.resolve()},document.body.appendChild(i)},e&&(angular.isString(e)&&(e=[e]),e.length&&(t=0,n())),o.promise},this.loadExtJs=function(e,t){var n,o=this,i=$q.defer(),s=t.ext_js.length;return n=function(n){var r;(r=document.createElement("script")).src=n.url,r.onload=function(){0===--s&&(t.js&&t.js.length&&o.loadJs(e,t.js),i.resolve())},document.body.appendChild(r)},t.ext_js&&t.ext_js.length&&t.ext_js.forEach(n),i.promise},this.loadCode=function(e,t){var n=this,o=$q.defer();return t.ext_css&&t.ext_css.length&&t.ext_css.forEach((function(e){n.loadExtCss(e.url)})),t.css&&t.css.length&&this.loadCss(t.css),t.ext_js&&t.ext_js.length?n.loadExtJs(e,t).then((function(){o.resolve()})):(t.js&&t.js.length&&n.loadJs(e,t.js),o.resolve()),o.promise},this.openPlugin=function(e){var t,n,o,i,s;return s=$q.defer(),e||(console.log("参数为空"),s.reject()),document.documentElement.clientWidth>768?document.documentElement.scrollTop=0:document.body.scrollTop=0,i=document.getElementsByTagName("body")[0],document.getElementsByTagName("html")[0].style.cssText="height:100%;",i.style.cssText="height:100%;overflow-y:hidden",t=document.createDocumentFragment(),(n=document.createElement("div")).setAttribute("id","frmPlugin"),o=document.createElement("iframe"),n.appendChild(o),n.onclick=function(){n.parentNode.removeChild(n),i.style.cssText="overflow-y:auto"},t.appendChild(n),document.body.appendChild(t),0===e.indexOf("http")?(window.onClosePlugin=function(e){n.parentNode.removeChild(n),i.style.cssText="overflow-y:auto",s.resolve(e)},o.setAttribute("src",e)):o.contentDocument&&o.contentDocument.body&&(o.contentDocument.body.innerHTML=e),s.promise}}])},39:function(e,t,n){"use strict";n(20),n(21),angular.module("subscribe.ui.xxt",["modal.ui.xxt"]).service("tmsSubscribe",["$http","tmsModal",function(e,t){this.open=function(n,o){t.open({template:'<div class="modal-header"><span class="modal-title">关注团队，接收该团队发布的内容</span></div><div class="modal-body"><div class="checkbox"><label><input type=\'checkbox\' ng-true-value="\'Y\'" ng-false-value="\'N\'" ng-model=\'atSite._selected\'><span>个人账户</span><span ng-if="atSite._subscribed===\'Y\'">（已关注）</span></label></div><div class="checkbox" ng-repeat="site in mySites"><label><input type=\'checkbox\' ng-true-value="\'Y\'" ng-false-value="\'N\'" ng-model=\'site._selected\'><span>{{site.name}}</span><span ng-if="site._subscribed===\'Y\'">（已关注）</span></label></div><div ng-if="mySites.length===0"><a href="" ng-click="createSite()">创建</a>团队进行关注，方便团队内共享信息</div></div><div class="modal-footer"><button class="btn btn-default" ng-click="cancel()">关闭</button><button class="btn btn-success" ng-click="ok()">确定</button></div>',controller:["$scope","$tmsModalInstance",function(t,n){e.get("/rest/site/home/get?site="+o.id+"&_="+1*new Date).success((function(e){var n=e.data;n._selected=n._subscribed,t.atSite=n})),e.get("/rest/pl/fe/site/subscribe/sitesByUser?site="+o.id+"&_="+1*new Date).success((function(e){if(0==e.err_code){var n=e.data;n.forEach((function(e){e._selected=e._subscribed})),t.mySites=n}})),t.createSite=function(){e.get("/rest/pl/fe/site/create").success((function(e){var n=e.data;n._subscribed=n._selected="N",t.mySites=[n]}))},t.ok=function(){var e;e={atSite:t.atSite,mySites:t.mySites},n.close(e)},t.cancel=function(){n.dismiss()}}]}).result.then((function(t){var n,i;if((n=t.atSite)&&n._selected!==n._subscribed&&(a="Y"===n._selected?"/rest/site/fe/user/site/subscribe?site="+o.id+"&target="+n.id:"/rest/site/fe/user/site/unsubscribe?site="+o.id+"&target="+n.id,e.get(a)),i=t.mySites){var s=[],r=[];if(i.forEach((function(e){e._selected!==e._subscribed&&("Y"===e._selected?s.push(e.id):r.push(e.id))})),s.length){var a="/rest/pl/fe/site/subscribe/do?site="+o.id;a+="&subscriber="+s.join(","),e.get(a)}}}))}}])},40:function(e,t,n){"use strict";n(20),n(3),n(21),angular.module("forward.ui.xxt",["page.ui.xxt","modal.ui.xxt"]).service("tmsForward",["$rootScope","$http","$q","tmsDynaPage","tmsModal",function(e,t,n,o,i){function s(e){var o,i;return i=n.defer(),o="/rest/pl/fe/site/forward/sitesByUser?site="+e.siteid+"&id="+e.id+"&type="+e.type+"&_="+1*new Date,t.get(o).success((function(e){0==e.err_code&&i.resolve(e.data)})),i.promise}this.open=function(e){i.open({template:'<div class="modal-header"><span class="modal-title">转发到哪个团队和频道</span></div><div class="modal-body"><div ng-repeat="site in mySites"><span>{{site.name}}</span><div class="checkbox" ng-repeat="chn in site.homeChannels"><label><input type=\'checkbox\' ng-true-value="\'Y\'" ng-false-value="\'N\'" ng-model=\'chn._selected\' ng-change="choose(site,chn)"><span>{{chn.title}}</span></label></div><div ng-if="site.homeChannels.length===0"><a href="" ng-click="createChannel(site)">创建</a>团队主页频道，转发内容到团队主页</div></div><div ng-if="mySites.length===0"><a href="" ng-click="createSite()">创建</a>团队，转发内容到团队主页</div></div><div class="modal-footer"><button class="btn btn-default" ng-click="cancel()">关闭</button><button class="btn btn-success" ng-click="ok()">确定</button></div>',controller:["$http","$scope","$tmsModalInstance",function(t,n,o){var i=[];s(e).then((function(e){var t=e;t.forEach((function(e){e._selected=e._recommended})),n.mySites=t})),n.createChannel=function(e){t.post("/rest/pl/fe/matter/channel/create?site="+e.id,{}).success((function(n){var o=n.data;t.post("/rest/pl/fe/site/setting/page/addHomeChannel?site="+e.id,o).success((function(t){e.homeChannels.push(t.data)}))}))},n.createSite=function(){t.get("/rest/pl/fe/site/create").success((function(e){var t=e.data;t._selected="N",t.homeChannels=[],n.mySites=[t]}))},n.choose=function(e,t){"Y"===t._selected?(t.siteid=e.id,i.push(t)):i.splice(i.indexOf(t),1)},n.ok=function(){var n=[];i.length&&(i.forEach((function(e){n.push({siteid:e.siteid,channelId:e.channel_id})})),t.post("/rest/pl/fe/site/forward/push?id="+e.id+"&type="+e.type,n).success((function(){o.close()})))},n.cancel=function(){o.dismiss()}}]})},this.showSwitch=function(t,n){var i,s=this;(i=document.createElement("div")).classList.add("tms-switch","tms-switch-forward"),i.addEventListener("click",(function(i){i.preventDefault(),i.stopPropagation(),e.$apply((function(){t.loginExpire?s.open(n):o.openPlugin(location.protocol+"//"+location.host+"/rest/site/fe/user/access?site=platform#login").then((function(e){t.loginExpire=e.loginExpire,s.open(n)}))}))}),!0),document.body.appendChild(i)}}])},65:function(e,t,n){e.exports=n(66)},66:function(e,t,n){"use strict";n(2),n(3),n(39),n(27),n(40);var o=angular.module("app",["ngSanitize","ui.bootstrap","ui.tms","http.ui.xxt","page.ui.xxt","subscribe.ui.xxt","favor.ui.xxt","forward.ui.xxt"]);o.config(["$locationProvider","$controllerProvider","$uibTooltipProvider",function(e,t,n){e.html5Mode(!0),o.provider={controller:t.register},n.setTriggers({show:"hide"})}]),o.provider("srvUser",(function(){var e;this.$get=["$q","http2",function(t,n){return{getSiteUser:function(o){return e||(e=t.defer(),n.get("/rest/site/fe/user/get?site="+o).then((function(t){e.resolve(t.data)}))),e.promise}}}]})),o.directive("autoHeight",["$window",function(e){return{restrict:"A",scope:{},link:function(t,n,o){var i=e.innerHeight;n.css("min-height",i-52-50+"px")}}}]),o.directive("imageonload",(function(){return{restrict:"A",link:function(e,t,n){t.bind("load",(function(){e.$apply(n.imageonload)}))}}})),o.controller("ctrlMain",["$scope","http2","srvUser","tmsDynaPage","tmsSubscribe",function(e,t,n,i,s){var r,a,c={};e.subView="",e.subscribeSite=function(){if(e.user.loginExpire)s.open(a,e.site);else{if(window.sessionStorage){var t=JSON.stringify({name:"subscribeSite"});window.sessionStorage.setItem("xxt.home.auth.pending",t)}location.href="/rest/site/fe/user/login?site="+siteId}},e.shiftPage=function(t){e.subView!==t&&(void 0===c[t]?i.loadCode(o,r[t+"_page"]).then((function(){c[t]=r[t+"_page"],e.page=c[t]||{html:"<div></div>"},e.subView=t,history.replaceState({},"","/rest/home/"+t)})):(e.page=c[t]||{html:"<div></div>"},e.subView=t,history.replaceState({},"","/rest/home/"+t)))},e.openSite=function(e){location.href="/rest/site/home?site="+e.siteid},e.openTemplate=function(e){location.href="/rest/site/fe/matter/template?template="+e.id},t.get("/rest/home/get").then((function(t){!1===(r=t.data.platform).home_page?location.href="/rest/pl/fe":(e.platform=r,/\/site/.test(location.href)?e.shiftPage("site"):/\/template/.test(location.href)?e.shiftPage("template"):e.shiftPage("home")),n.getSiteUser("platform").then((function(t){var n;(e.user=a=t,window.sessionStorage)&&((n=window.sessionStorage.getItem("xxt.home.auth.pending"))&&(window.sessionStorage.removeItem("xxt.home.auth.pending"),user.isLogin&&(n=JSON.parse(n),e[n.name].apply(e,n.args||[]))))}))}))}]),e.exports=o}});