!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=155)}({0:function(e,t,n){"use strict";function r(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=r(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},1:function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=m[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(u(r.parts[i],t))}else{for(var s=[],i=0;i<r.parts.length;i++)s.push(u(r.parts[i],t));m[r.id]={id:r.id,refs:1,parts:s}}}}function o(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],a=i[1],c=i[2],l=i[3],d={css:a,media:c,sourceMap:l};r[s]?r[s].parts.push(d):n.push(r[s]={id:s,parts:[d]})}return n}function i(e,t){var n=y(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=k[k.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),k.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=y(e.insertAt.before,n);n.insertBefore(t,o)}}function s(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=k.indexOf(e);t>=0&&k.splice(t,1)}function a(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var n=d();n&&(e.attrs.nonce=n)}return l(t,e.attrs),i(e,t),t}function c(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",l(t,e.attrs),i(e,t),t}function l(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function d(){return n.nc}function u(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var l=b++;n=x||(x=a(t)),r=f.bind(null,n,l,!1),o=f.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),r=h.bind(null,n,t),o=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),r=p.bind(null,n),o=function(){s(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function f(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=S(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function p(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function h(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=w(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}var m={},g=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),v=function(e,t){return t?t.querySelector(e):document.querySelector(e)},y=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=v.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),x=null,b=0,k=[],w=n(4);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=g()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return r(n,t),function(e){for(var i=[],s=0;s<n.length;s++){var a=n[s],c=m[a.id];c.refs--,i.push(c)}if(e){r(o(e,t),t)}for(var s=0;s<i.length;s++){var c=i[s];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete m[c.id]}}}};var S=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},155:function(e,t,n){e.exports=n(81)},21:function(e,t,n){"use strict";angular.module("modal.ui.xxt",[]).service("tmsModal",["$rootScope","$compile","$q","$controller",function(e,t,n,r){this.open=function(o){var i,s=n.defer(),a=n.defer(),c={result:s.promise,closed:a.promise,close:function(e){document.body.removeChild(f[0]),s.resolve(e)},dismiss:function(e){document.body.removeChild(f[0]),a.resolve(e)}};i=e.$new(!0),o.controller&&r(o.controller,{$scope:i,$tmsModalInstance:c});var l,d,u,f;return l=angular.element("<div></div>"),l.attr({class:"modal-content","ng-style":"{'z-index':1060}"}).append(o.template),d=angular.element("<div></div>"),d.attr({class:"modal-dialog"}).append(l),u=angular.element("<div></div>"),u.attr({class:"modal-backdrop","ng-style":"{'z-index':1040}"}),f=angular.element("<div></div>"),f.attr({class:"modal","ng-style":"{'z-index':1050}",tabindex:-1}).append(d).append(u),t(f)(i),document.body.appendChild(f[0]),c}}])},22:function(e,t,n){var r=n(30);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0};o.transform=void 0,o.insertInto=void 0;n(1)(r,o);r.locals&&(e.exports=r.locals)},27:function(e,t,n){"use strict";n(22),n(3),n(21),angular.module("favor.ui.xxt",["page.ui.xxt","modal.ui.xxt"]).service("tmsFavor",["$rootScope","$http","$q","tmsDynaPage","tmsModal",function(e,t,n,r,o){function i(e){var r,o;return o=n.defer(),r="/rest/site/fe/user/favor/byUser",r+="?site="+e.siteid,r+="&id="+e.id,r+="&type="+e.type,t.get(r).success(function(e){o.resolve(e.data)}),o.promise}function s(e){var r,o;return o=n.defer(),r="/rest/site/fe/user/favor/add",r+="?site="+e.siteid,r+="&id="+e.id,r+="&type="+e.type,t.get(r).success(function(e){o.resolve(e.data)}),o.promise}function a(e){var r,o;return o=n.defer(),r="/rest/site/fe/user/favor/remove",r+="?site="+e.siteid,r+="&id="+e.id,r+="&type="+e.type,t.get(r).success(function(e){o.resolve(e.data)}),o.promise}function c(e){var r,o;return o=n.defer(),r="/rest/pl/fe/site/favor/sitesByUser?site="+e.siteid+"&id="+e.id+"&type="+e.type+"&_="+1*new Date,t.get(r).success(function(e){0==e.err_code&&o.resolve(e.data)}),o.promise}function l(e,r){var o,i;return i=n.defer(),o="/rest/pl/fe/site/favor/add?id="+e.id+"&type="+e.type,t.post(o,r).success(function(e){i.resolve(e.data)}),i.promise}function d(e,r){var o,i;return i=n.defer(),o="/rest/pl/fe/site/favor/remove?id="+e.id+"&type="+e.type,t.post(o,r).success(function(e){i.resolve(e.data)}),i.promise}this.open=function(e){var n;n='<div class="modal-header"><span class="modal-title">指定收藏位置</span></div>',n+='<div class="modal-body">',n+='<div class="checkbox">',n+="<label>",n+="<input type='checkbox' ng-true-value=\"'Y'\" ng-false-value=\"'N'\" ng-model='person._selected'>",n+="<span>个人账户</span>",n+="<span ng-if=\"person._favored==='Y'\">（已收藏）</span>",n+="</label>",n+="</div>",n+='<div class="checkbox" ng-repeat="site in mySites">',n+="<label>",n+="<input type='checkbox' ng-true-value=\"'Y'\" ng-false-value=\"'N'\" ng-model='site._selected'>",n+="<span>{{site.name}}</span>",n+="<span ng-if=\"site._favored==='Y'\">（已收藏）</span>",n+="</label>",n+="</div>",n+='<div ng-if="mySites.length===0"><a href="" ng-click="createSite()">创建</a>团队进行收藏，方便团队内共享信息</div>',n+="</div>",n+='<div class="modal-footer"><button class="btn btn-default" ng-click="cancel()">关闭</button><button class="btn btn-success" ng-click="ok()">确定</button></div>',o.open({template:n,controller:["$scope","$tmsModalInstance",function(n,r){i(e).then(function(e){n.person={_favored:e?"Y":"N"},n.person._selected=n.person._favored}),c(e).then(function(e){var t=e;t.forEach(function(e){e._selected=e._favored}),n.mySites=t}),n.createSite=function(){t.get("/rest/pl/fe/site/create").success(function(e){var t=e.data;t._favored=t._selected="N",n.mySites=[t]})},n.ok=function(){var e;e={person:n.person,mySites:n.mySites},r.close(e)},n.cancel=function(){r.dismiss()}}]}).result.then(function(t){var n,r;if(n=t.person,n&&n._selected!==n._favored&&("Y"===n._selected?s(e):a(e)),r=t.mySites){var o=[],i=[];r.forEach(function(e){e._selected!==e._favored&&("Y"===e._selected?o.push(e.id):i.push(e.id))}),o.length&&l(e,o),i.length&&d(e,i)}})},this.showSwitch=function(t,n){var o,i=this;o=document.createElement("div"),o.classList.add("tms-switch","tms-switch-favor"),o.addEventListener("click",function(o){o.preventDefault(),o.stopPropagation(),e.$apply(function(){t.loginExpire?i.open(n):r.openPlugin(location.protocol+"//"+location.host+"/rest/site/fe/user/access?site=platform#login").then(function(e){t.loginExpire=e.loginExpire,i.open(n)})})},!0),document.body.appendChild(o)}}])},3:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("page.ui.xxt",[]);ngMod.directive("dynamicHtml",["$compile",function(e){return{restrict:"EA",replace:!0,link:function(t,n,r){t.$watch(r.dynamicHtml,function(r){r&&r.length&&(n.html(r),e(n.contents())(t))})}}}]),ngMod.service("tmsDynaPage",["$q",function($q){this.loadCss=function(e){var t,n;t=document.createElement("style"),t.innerHTML=e,n=document.querySelector("head"),n.appendChild(t)},this.loadExtCss=function(e){var t,n;t=document.createElement("link"),t.href=e,t.rel="stylesheet",n=document.querySelector("head"),n.appendChild(t)},this.loadJs=function(ngApp,js){!function(ngApp){eval(js)}(ngApp)},this.loadScript=function(e){var t,n,r=$q.defer();return n=function(){var o;o=document.createElement("script"),o.src=e[t],o.onload=function(){t++,t<e.length?n():r.resolve()},document.body.appendChild(o)},e&&(angular.isString(e)&&(e=[e]),e.length&&(t=0,n())),r.promise},this.loadExtJs=function(e,t){var n,r=this,o=$q.defer(),i=t.ext_js.length;return n=function(n){var s;s=document.createElement("script"),s.src=n.url,s.onload=function(){0===--i&&(t.js&&t.js.length&&r.loadJs(e,t.js),o.resolve())},document.body.appendChild(s)},t.ext_js&&t.ext_js.length&&t.ext_js.forEach(n),o.promise},this.loadCode=function(e,t){var n=this,r=$q.defer();return t.ext_css&&t.ext_css.length&&t.ext_css.forEach(function(e){n.loadExtCss(e.url)}),t.css&&t.css.length&&this.loadCss(t.css),t.ext_js&&t.ext_js.length?n.loadExtJs(e,t).then(function(){r.resolve()}):(t.js&&t.js.length&&n.loadJs(e,t.js),r.resolve()),r.promise},this.openPlugin=function(e){var t,n,r,o,i,s;return s=$q.defer(),e||(console.log("参数为空"),s.reject()),document.documentElement.clientWidth>768?document.documentElement.scrollTop=0:document.body.scrollTop=0,i=document.getElementsByTagName("body")[0],o=document.getElementsByTagName("html")[0],o.style.cssText="height:100%;",i.style.cssText="height:100%;overflow-y:hidden",t=document.createDocumentFragment(),n=document.createElement("div"),n.setAttribute("id","frmPlugin"),r=document.createElement("iframe"),n.appendChild(r),n.onclick=function(){n.parentNode.removeChild(n),i.style.cssText="overflow-y:auto"},t.appendChild(n),document.body.appendChild(t),0===e.indexOf("http")?(window.onClosePlugin=function(e){n.parentNode.removeChild(n),i.style.cssText="overflow-y:auto",s.resolve(e)},r.setAttribute("src",e)):r.contentDocument&&r.contentDocument.body&&(r.contentDocument.body.innerHTML=e),s.promise}}])},30:function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,".modal {\r\n    display: block;\r\n    overflow: hidden;\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    outline: 0;\r\n    opacity: 1;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    opacity: 1;\r\n}\r\n\r\n.modal-backdrop {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-color: #000;\r\n    opacity: .5;\r\n}\r\n\r\n.modal-dialog {\r\n    position: relative;\r\n    z-index: 1055;\r\n    margin: 0;\r\n    position: relative;\r\n    width: auto;\r\n    margin: 10px;\r\n}\r\n\r\n.modal-content {\r\n    position: relative;\r\n    background-color: #fff;\r\n    -webkit-background-clip: padding-box;\r\n    background-clip: padding-box;\r\n    border: 1px solid #999;\r\n    border: 1px solid rgba(0, 0, 0, .2);\r\n    border-radius: 6px;\r\n    outline: 0;\r\n    -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\r\n    box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\r\n}\r\n\r\n.modal-header {\r\n    padding: 15px;\r\n    border-bottom: 1px solid #e5e5e5;\r\n}\r\n\r\n.modal-header .close {\r\n    margin-top: -2px;\r\n}\r\n\r\n.modal-title {\r\n    margin: 0;\r\n    line-height: 1.42857143;\r\n}\r\n\r\n.modal-body {\r\n    position: relative;\r\n    padding: 15px;\r\n}\r\n\r\n.modal-footer {\r\n    padding: 15px;\r\n    text-align: right;\r\n    border-top: 1px solid #e5e5e5;\r\n}\r\n\r\nbutton.close {\r\n    -webkit-appearance: none;\r\n    padding: 0;\r\n    cursor: pointer;\r\n    background: 0 0;\r\n    border: 0;\r\n}\r\n\r\n.close {\r\n    float: right;\r\n    font-size: 21px;\r\n    font-weight: 700;\r\n    line-height: 1;\r\n    color: #000;\r\n    text-shadow: 0 1px 0 #fff;\r\n    filter: alpha(opacity=20);\r\n    opacity: .2;\r\n}\r\n\r\n@media (min-width:768px) {\r\n    .modal-dialog {\r\n        width: 600px;\r\n        margin: 30px auto;\r\n    }\r\n    .modal-content {\r\n        -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\r\n        box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\r\n    }\r\n}\r\n",""])},4:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o))return e;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},5:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("snsshare.ui.xxt",[]);ngMod.service("tmsSnsShare",["$http",function($http){function setWxShare(e,t,n,r,o){window.wx.onMenuShareTimeline({title:o.descAsTitle?n:e,link:t,imgUrl:r,success:function(){try{o.logger&&o.logger("T")}catch(e){alert("share failed:"+e.message)}},cancel:function(){},fail:function(){alert("shareT: fail")}}),window.wx.onMenuShareAppMessage({title:e,desc:n,link:t,imgUrl:r,success:function(){try{o.logger&&o.logger("F")}catch(e){alert("share failed:"+e.message)}},cancel:function(){},fail:function(){alert("shareF: fail")}})}var _isReady=!1;this.config=function(e){this.options=e},this.set=function(title,link,desc,img,fnOther){var _this=this;if(img&&-1===img.indexOf(location.protocol)&&(img=location.protocol+"//"+location.host+img),_isReady)/MicroMessenger/i.test(navigator.userAgent)?setWxShare(title,link,desc,img,_this.options):fnOther&&"function"==typeof fnOther&&fnOther(title,link,desc,img);else if(/MicroMessenger/i.test(navigator.userAgent)){var script;script=document.createElement("script"),script.src=location.protocol+"//res.wx.qq.com/open/js/jweixin-1.0.0.js",script.onload=function(){var xhr,url;xhr=new XMLHttpRequest,url="/rest/site/fe/wxjssdksignpackage?site="+_this.options.siteId+"&url="+encodeURIComponent(location.href.split("#")[0]),xhr.open("GET",url,!0),xhr.onreadystatechange=function(){if(4==xhr.readyState)if(xhr.status>=200&&xhr.status<400){var signPackage;try{eval("("+xhr.responseText+")"),signPackage&&(signPackage.debug=!1,signPackage.jsApiList=_this.options.jsApiList,wx.config(signPackage),wx.ready(function(){setWxShare(title,link,desc,img,_this.options),_isReady=!0}),wx.error(function(e){alert(JSON.stringify(e))}))}catch(e){alert("local error:"+e.toString())}}else alert("http error:"+xhr.statusText)},xhr.send()},document.body.appendChild(script)}else fnOther&&"function"==typeof fnOther&&(fnOther(title,link,desc,img),_isReady=!0)}}])},81:function(e,t,n){"use strict";n(27),n(5),angular.module("app",["ui.bootstrap","page.ui.xxt","favor.ui.xxt","snsshare.ui.xxt"]).config(["$locationProvider",function(e){e.html5Mode(!0)}]).controller("ctrl",["$scope","$location","$http","tmsFavor","tmsDynaPage","tmsSnsShare",function(e,t,n,r,o,i){var s,a,c,l;s=t.search().site,a=t.search().id,c=t.search().inviteToken,l=t.search().shareby?t.search().shareby:"",e.isSmallLayout=!1,e.isFull=!1,e.elSiteCard=angular.element(document.querySelector("#site-card")),window.screen&&window.screen.width<992&&(e.isSmallLayout=!0);var d=function(){var t,r;t=e.user.uid+"_"+1*new Date,i.config({siteId:s,logger:function(r){var o="/rest/site/fe/matter/logShare";o+="?shareid="+t,o+="&site="+s,o+="&id="+a,o+="&type=link",o+="&title="+e.link.title,o+="&shareto="+r,o+="&shareby="+l,n.get(o)},jsApiList:["hideOptionMenu","onMenuShareTimeline","onMenuShareAppMessage"]}),e.link.invite?r=location.protocol+"//"+location.host+"/i/"+e.link.invite.code:(r=location.href,/shareby=/.test(r)?r=r.replace(/shareby=[^&]*/,"shareby="+t):r+="&shareby="+t),i.set(e.link.title,r,e.link.summary,e.link.pic)};e.siteCardToggled=function(e){var t;e&&(t=document.querySelector("#site-card>.dropdown-menu"))&&(t.style.left="auto",t.style.right=0)},e.favor=function(e,t){e.loginExpire?r.open(t):o.openPlugin(location.protocol+"//"+location.host+"/rest/site/fe/user/access?site=platform#login").then(function(n){e.loginExpire=n.loginExpire,r.open(t)})},e.invite=function(e,t){e.loginExpire?location.href="/rest/site/fe/invite?matter=link,"+t.id+"&inviteToken="+c:o.openPlugin(location.protocol+"//"+location.host+"/rest/site/fe/user/access?site=platform#login").then(function(n){e.loginExpire=n.loginExpire,location.href="/rest/site/fe/invite?matter=link,"+t.id+"&inviteToken="+c})},e.siteUser=function(e){var t=location.protocol+"//"+location.host;t+="/rest/site/fe/user",t+="?site="+e,location.href=t},e.gotoNavApp=function(e){switch(e.type){case"enroll":location.href="/rest/site/fe/matter/enroll?site="+e.siteid+"&app="+e.id;break;case"article":case"channel":location.href="/rest/site/fe/matter?site="+e.siteid+"&id="+e.id+"&type="+e.type;break;case"link":location.href="/rest/site/fe/matter/link?site="+e.siteid+"&id="+e.id+"&type="+e.type;break;case"topic":location.href="/rest/site/fe/matter/enroll?site="+e.siteid+"&app="+e.aid+"&topic="+e.id+"&page=topic"}},n.get("/rest/site/home/get?site="+s).success(function(t){e.siteInfo=t.data,n.get("/rest/site/fe/matter/link/get?site="+s+"&id="+a).success(function(t){function r(){var e=event.touches[0];l=!0,f.x=e.clientX,f.y=e.clientY,m=u.offsetLeft,g=u.offsetTop}function o(){if(l){var e=event.touches[0];p=e.clientX-f.x,h=e.clientY-f.y,v=m+p,y=g+h,Math.abs(p)&&event.preventDefault(),v=v<=0?0:v>=u.parentNode.offsetWidth-u.offsetWidth?u.parentNode.offsetWidth-u.offsetWidth:v,y=y<=0?0:y>=u.parentNode.offsetHeight-u.offsetHeight?u.parentNode.offsetHeight-u.offsetHeight:y,u.style.left=v+"px",u.style.top=y+"px"}}function i(){l=!1}if(t.data&&(e.link=t.data.link,e.user=t.data.user,e.qrcode="/rest/site/fe/matter/link/qrcode?site="+s+"&url="+encodeURIComponent(location.href),-1!==Object.keys(e.link).indexOf("invite")&&(-1!==e.link.fullUrl.indexOf("?")?e.link.fullUrl=e.link.fullUrl+"&inviteToken="+c:e.link.fullUrl=e.link.fullUrl+"?inviteToken="+c),/MicroMessenge/i.test(navigator.userAgent)&&d(),document.querySelector("#link>iframe").setAttribute("src",e.link.fullUrl),n.post("/rest/site/fe/matter/logAccess?site="+s,{search:location.search.replace("?",""),referer:document.referrer,id:a,type:"link",title:e.link.title}),"number"==typeof window.screenX&&!0===e.isSmallLayout)){var l,u,f,p,h,m,g,v,y;l=!1,u=document.getElementById("btnFS"),f={x:0,y:0},u.addEventListener("touchstart",function(){r()},!1),u.addEventListener("touchmove",function(){o()},!1),u.addEventListener("touchend",function(){i()},!1),u.addEventListener("click",function(t){e.isFull?(document.querySelector(".col-md-3").style.display="block",document.querySelector(".invite").style.display="block",document.querySelector("#matters").classList="visible-xs visibile-sm",this.innerText="开始体验",e.isFull=!1):(document.querySelector(".col-md-3").style.display="none",document.querySelector(".invite").style.display="none",document.querySelector("#matters").classList="hidden",this.innerText="退出体验",e.isFull=!0)})}}).error(function(e,t){})})}]).filter("filesize",function(){return function(e){var t;return e/1024<1?t="B":(e/=1024,e/1024<1?t="K":(e/=1024,t="M")),(e=new Number(e).toFixed(2))+t}})}});