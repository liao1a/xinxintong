!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=187)}({0:function(e,t,n){"use strict";function r(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=r(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},1:function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=m[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(u(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(u(r.parts[i],t));m[r.id]={id:r.id,refs:1,parts:a}}}}function o(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s=i[1],l=i[2],c=i[3],d={css:s,media:l,sourceMap:c};r[a]?r[a].parts.push(d):n.push(r[a]={id:a,parts:[d]})}return n}function i(e,t){var n=w(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=b[b.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),b.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=w(e.insertAt.before,n);n.insertBefore(t,o)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function s(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var n=d();n&&(e.attrs.nonce=n)}return c(t,e.attrs),i(e,t),t}function l(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",c(t,e.attrs),i(e,t),t}function c(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function d(){return n.nc}function u(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var c=x++;n=y||(y=s(t)),r=p.bind(null,n,c,!1),o=p.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),r=g.bind(null,n,t),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=f.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function p(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=j(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function g(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=k(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var m={},h=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),v=function(e,t){return t?t.querySelector(e):document.querySelector(e)},w=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=v.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),y=null,x=0,b=[],k=n(3);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=h()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],l=m[s.id];l.refs--,i.push(l)}if(e){r(o(e,t),t)}for(var a=0;a<i.length;a++){var l=i[a];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete m[l.id]}}}};var j=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},114:function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,".ng-cloak {\r\n\tdisplay: none;\r\n}\r\n\r\nhtml, body {\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tbackground: #efefef;\r\n\tfont-family: Microsoft Yahei, Arial;\r\n}\r\n\r\nbody {\r\n\tposition: relative;\r\n\tpadding: 15px;\r\n\tfont-size: 16px;\r\n}\r\n\r\nimg {\r\n\tmax-width: 100%\r\n}\r\n\r\n.app {\r\n\tmargin-bottom: 65px;\r\n}\r\n\r\n/* default form style*/\r\ndiv[wrap].wrap-splitline {\r\n\tpadding-bottom: 0.5em;\r\n\tborder-bottom: 1px dotted #eee;\r\n}\r\n\r\ndiv[wrap].wrap-inline>* {\r\n\tdisplay: inline-block;\r\n\tvertical-align: top;\r\n\tmargin: 0 1em 0 0;\r\n}\r\n\r\ndiv[wrap].wrap-inline>label {\r\n\twidth: 6em;\r\n\toverflow: hidden;\r\n\twhite-space: nowrap;\r\n\ttext-overflow: ellipsis;\r\n}\r\n\r\ndiv[wrap] ul {\r\n\tlist-style: none;\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tmax-width: 50%;\r\n}\r\n\r\ndiv[schema-type=image]>ul>li>img {\r\n\twidth: 100%;\r\n}\r\n\r\ndiv[wrap=matter]>span {\r\n\tcursor: pointer;\r\n\ttext-decoration: underline;\r\n}\r\n\r\n/*list*/\r\nli .wrap-inline>label {\r\n\tpadding: 7px 0;\r\n\tcolor: #444;\r\n}\r\n\r\nli .wrap-inline {\r\n\tborder-bottom: 1px dashed #efefef;\r\n}\r\n\r\nli .wrap-inline:last-child {\r\n\tborder-bottom: 0;\r\n}\r\n\r\n/* auth */\r\n#frmPopup {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\tborder: none;\r\n\twidth: 100%;\r\n\tz-index: 999;\r\n\tbox-sizing: border-box;\r\n}\r\n",""])},148:function(e,t,n){var r=n(114);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0};o.transform=void 0,o.insertInto=void 0;n(1)(r,o);r.locals&&(e.exports=r.locals)},187:function(e,t,n){e.exports=n(95)},2:function(e,t,n){"use strict";var r=angular.module("http.ui.xxt",["ng"]);r.provider("tmsLocation",function(){var e;this.config=function(t){e=t||location.pathname},this.$get=["$location",function(t){return e||(e=location.pathname),{s:function(){var e=t.search();if(arguments.length){for(var n=[],r=0,o=arguments.length;r<o;r++)n.push(arguments[r]+"="+(e[arguments[r]]||""));return n.join("&")}return e},j:function(n){var r=e,o=[];n&&n.length&&(r+="/"+n);for(var i=1,a=arguments.length;i<a;i++)o.push(arguments[i]+"="+(t.search()[arguments[i]]||""));return o.length&&(r+="?"+o.join("&")),r},path:function(){return arguments.length?t.path(arguments[0]):t.path()}}}]}),r.service("http2",["$rootScope","$http","$timeout","$q","$sce","$compile",function(e,t,n,r,o,i){function a(t,n,r){var a;return o.trustAsHtml(t),a=angular.element("<div></div>"),a.attr({class:"tms-notice-box alert alert-"+(n||"info"),"ng-style":"{'z-index':1099}"}).html(t),r||a[0].addEventListener("click",function(){document.body.removeChild(a[0])},!0),i(a)(e),document.body.appendChild(a[0]),a[0]}function s(e){e&&document.body.removeChild(e)}function l(e){return!(!e.page||!angular.isObject(e.page))&&(void 0===e.page.at&&(e.page.at=1),void 0===e.page.size&&(e.page.size=12),void 0!==e.page.j&&angular.isFunction(e.page.j)||(e.page.j=function(){return"page="+this.at+"&size="+this.size}),!0)}function c(e,t,n){if(e){if(angular.isArray(e)){e.length>t.length&&e.splice(t.length-1,e.length-t.length);for(var r=0,o=t.length;r<o;r++)r<e.length?c(e[r],t[r],n):e.push(t[r])}else if(angular.isObject(e)){for(var i in e)n&&-1!==n.indexOf(i)||(void 0===t[i]?delete e[i]:angular.isObject(t[i])&&angular.isObject(e[i])?c(e[i],t[i],n):e[i]=t[i]);for(var i in t)n&&-1!==n.indexOf(i)||void 0===e[i]&&(e[i]=t[i])}}else e=t;return!0}this.get=function(e,o){var i,c,d=r.defer();return o=angular.extend({headers:{accept:"application/json"},parseResponse:!0,autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},o),!0===o.showProgress&&(c=n(function(){c=null,i=a(o.showProgressText,"info")},o.showProgressDelay)),l(o)&&(e+=(-1===e.indexOf("?")?"?":"&")+o.page.j()),t.get(e,o).success(function(e){if(o.page&&void 0!==e.data.total&&(o.page.total=e.data.total),!0===o.showProgress&&(c&&n.cancel(c),i&&(s(i),i=null)),o.parseResponse)if(angular.isString(e)){if(o.autoNotice&&a(e,"warning"),o.autoBreak)return;d.reject(e)}else if(0!=e.err_code){if(o.autoNotice){var t;t=angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),a(t,"warning")}if(o.autoBreak)return;d.reject(e)}else d.resolve(e);else d.resolve(e)}).error(function(e,t){!0===o.showProgress&&(c&&n.cancel(c),i&&(s(i),i=null)),a(null===e?"网络不可用":e,"danger")}),d.promise},this.post=function(e,o,i){var c,d,u=r.defer();return i=angular.extend({headers:{accept:"application/json"},parseResponse:!0,autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},i),!0===i.showProgress&&(d=n(function(){d=null,c=a(i.showProgressText,"info")},i.showProgressDelay)),l(i)&&(e+=(-1===e.indexOf("?")?"?":"&")+i.page.j()),t.post(e,o,i).success(function(e){if(i.page&&void 0!==e.data.total&&(i.page.total=e.data.total),!0===i.showProgress&&(d&&n.cancel(d),c&&(s(c),c=null)),i.parseResponse)if(angular.isString(e)){if(i.autoNotice&&(a(e,"warning"),c=null),i.autoBreak)return;u.reject(e)}else if(0!=e.err_code){if(i.autoNotice){var t;t=angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),a(t,"warning")}if(i.autoBreak)return;u.reject(e)}else u.resolve(e);else u.resolve(e)}).error(function(e,t){!0===i.showProgress&&(d&&n.cancel(d),c&&(s(c),c=null)),a(null===e?"网络不可用":e,"danger")}),u.promise},this.merge=function(e,t,n){return!angular.equals(e,t)&&c(e,t,n)}}])},25:function(e,t,n){"use strict";void 0===window.xxt&&(window.xxt={}),window.xxt.image={options:{},choose:function(e,t){var n,r=[];n=e.promise;var o=document.createElement("input");return o.setAttribute("type","file"),o.addEventListener("change",function(t){var n,i,a,s;for(i=t.target.files.length,n=0;n<i;n++){a=t.target.files[n],s={".jp":"image/jpeg",".pn":"image/png",".gi":"image/gif"}[a.name.match(/\.(\w){2}/g)[0]||".jp"],a.type2=a.type||s;var l=new FileReader;l.onload=function(t){return function(n){var i={};i.imgSrc=n.target.result.replace(/^.+(,)/,"data:"+t.type2+";base64,"),r.push(i),document.body.removeChild(o),e.resolve(r)}}(a),l.readAsDataURL(a)}},!1),o.style.opacity=0,document.body.appendChild(o),o.click(),n},paste:function(e,t,n){function r(e){var n=e.getAsFile(),r=new FileReader;r.onload=function(e){var n={};n.imgSrc=e.target.result,i.push(n),t.resolve(i)},r.readAsDataURL(n)}var o,i=[];return o=t.promise,e.focus(),e.addEventListener("paste",function(e){var t,n,o=e.clipboardData;if(o&&(t=o.items)&&t.length){for(var i=0;i<o.types.length;i++)if("Files"===o.types[i]){n=t[i];break}n&&"file"===n.kind&&n.type.match(/^image\//i)&&r(n)}}),o},wxUpload:function(e,t){var n;return n=e.promise,0===t.imgSrc.indexOf("weixin://")||0===t.imgSrc.indexOf("wxLocalResource://")?window.wx.uploadImage({localId:t.imgSrc,isShowProgressTips:1,success:function(n){t.serverId=n.serverId,e.resolve(t)}}):e.resolve(t),n}}},28:function(e,t,n){"use strict";void 0===window.xxt&&(window.xxt={}),window.xxt.geo={options:{},getAddress:function(e,t,n){var r;if(r=t.promise,window.wx)window.wx.getLocation({success:function(r){var o="/rest/site/fe/matter/enroll/locationGet";o+="?site="+n,o+="&lat="+r.latitude,o+="&lng="+r.longitude,e.get(o).then(function(e){t.resolve({errmsg:"ok",lat:r.latitude,lng:r.longitude,address:e.data.address})})}});else try{var o=window.navigator;if(null!==o){var i=o.geolocation;null!==i?i.getCurrentPosition(function(r){var o="/rest/site/fe/matter/enroll/locationGet";o+="?site="+n,o+="&lat="+r.coords.latitude,o+="&lng="+r.coords.longitude,e.get(o).then(function(e){t.resolve({errmsg:"ok",lat:r.coords.latitude,lng:r.coords.longitude,address:e.data.address})})},function(){t.resolve({errmsg:"获取地理位置失败"})}):t.resolve({errmsg:"无法获取地理位置"})}else t.resolve({errmsg:"无法获取地理位置"})}catch(e){alert("exception:"+e.message)}return r}}},3:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o))return e;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},4:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("page.ui.xxt",[]);ngMod.directive("dynamicHtml",["$compile",function(e){return{restrict:"EA",replace:!0,link:function(t,n,r){t.$watch(r.dynamicHtml,function(r){r&&r.length&&(n.html(r),e(n.contents())(t))})}}}]),ngMod.service("tmsDynaPage",["$q",function($q){this.loadCss=function(e){var t,n;t=document.createElement("style"),t.innerHTML=e,n=document.querySelector("head"),n.appendChild(t)},this.loadExtCss=function(e){var t,n;t=document.createElement("link"),t.href=e,t.rel="stylesheet",n=document.querySelector("head"),n.appendChild(t)},this.loadJs=function(ngApp,js){!function(ngApp){eval(js)}(ngApp)},this.loadScript=function(e){var t,n,r=$q.defer();return n=function(){var o;o=document.createElement("script"),o.src=e[t],o.onload=function(){t++,t<e.length?n():r.resolve()},document.body.appendChild(o)},e&&(angular.isString(e)&&(e=[e]),e.length&&(t=0,n())),r.promise},this.loadExtJs=function(e,t){var n,r=this,o=$q.defer(),i=t.ext_js.length;return n=function(n){var a;a=document.createElement("script"),a.src=n.url,a.onload=function(){0===--i&&(t.js&&t.js.length&&r.loadJs(e,t.js),o.resolve())},document.body.appendChild(a)},t.ext_js&&t.ext_js.length&&t.ext_js.forEach(n),o.promise},this.loadCode=function(e,t){var n=this,r=$q.defer();return t.ext_css&&t.ext_css.length&&t.ext_css.forEach(function(e){n.loadExtCss(e.url)}),t.css&&t.css.length&&this.loadCss(t.css),t.ext_js&&t.ext_js.length?n.loadExtJs(e,t).then(function(){r.resolve()}):(t.js&&t.js.length&&n.loadJs(e,t.js),r.resolve()),r.promise},this.openPlugin=function(e){var t,n,r,o,i,a;return a=$q.defer(),e||(console.log("参数为空"),a.reject()),document.documentElement.clientWidth>768?document.documentElement.scrollTop=0:document.body.scrollTop=0,i=document.getElementsByTagName("body")[0],o=document.getElementsByTagName("html")[0],o.style.cssText="height:100%;",i.style.cssText="height:100%;overflow-y:hidden",t=document.createDocumentFragment(),n=document.createElement("div"),n.setAttribute("id","frmPlugin"),r=document.createElement("iframe"),n.appendChild(r),n.onclick=function(){n.parentNode.removeChild(n),i.style.cssText="overflow-y:auto"},t.appendChild(n),document.body.appendChild(t),0===e.indexOf("http")?(window.onClosePlugin=function(e){n.parentNode.removeChild(n),i.style.cssText="overflow-y:auto",a.resolve(e)},r.setAttribute("src",e)):r.contentDocument&&r.contentDocument.body&&(r.contentDocument.body.innerHTML=e),a.promise}}])},48:function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"/*dialog*/\r\n.dialog.mask{position:fixed;background:rgba(0,0,0,0.3);top:0;left:0;bottom:0;right:0;overflow:auto;z-index:998}\r\n.dialog.dlg{position:absolute;background:#fff;left:0;right:0;bottom:0;margin:15px}\r\n.dialog .dlg-header{padding:15px 15px 0 15px}\r\n.dialog .dlg-body{padding:15px 15px 0 15px}\r\n.dialog .dlg-footer{text-align:right;padding:15px}\r\n.dialog .dlg-footer button{border-radius:0}\r\n\r\n/*filter*/\r\ndiv[wrap=filter] .detail{background:#ccc}\r\ndiv[wrap=filter] .detail .options .label{display:inline-block;margin:.5em;padding-top:.3em;font-size:100%}\r\ndiv[wrap=filter] .detail .actions .btn{border-radius:0}",""])},5:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("snsshare.ui.xxt",[]);ngMod.service("tmsSnsShare",["$http",function($http){function setWxShare(e,t,n,r,o){window.wx.onMenuShareTimeline({title:o.descAsTitle?n:e,link:t,imgUrl:r,success:function(){try{o.logger&&o.logger("T")}catch(e){alert("share failed:"+e.message)}},cancel:function(){},fail:function(){alert("shareT: fail")}}),window.wx.onMenuShareAppMessage({title:e,desc:n,link:t,imgUrl:r,success:function(){try{o.logger&&o.logger("F")}catch(e){alert("share failed:"+e.message)}},cancel:function(){},fail:function(){alert("shareF: fail")}})}var _isReady=!1;this.config=function(e){this.options=e},this.set=function(title,link,desc,img,fnOther){var _this=this;if(img&&-1===img.indexOf(location.protocol)&&(img=location.protocol+"//"+location.host+img),_isReady)/MicroMessenger/i.test(navigator.userAgent)?setWxShare(title,link,desc,img,_this.options):fnOther&&"function"==typeof fnOther&&fnOther(title,link,desc,img);else if(/MicroMessenger/i.test(navigator.userAgent)){var script;script=document.createElement("script"),script.src=location.protocol+"//res.wx.qq.com/open/js/jweixin-1.0.0.js",script.onload=function(){var xhr,url;xhr=new XMLHttpRequest,url="/rest/site/fe/wxjssdksignpackage?site="+_this.options.siteId+"&url="+encodeURIComponent(location.href.split("#")[0]),xhr.open("GET",url,!0),xhr.onreadystatechange=function(){if(4==xhr.readyState)if(xhr.status>=200&&xhr.status<400){var signPackage;try{eval("("+xhr.responseText+")"),signPackage&&(signPackage.debug=!1,signPackage.jsApiList=_this.options.jsApiList,wx.config(signPackage),wx.ready(function(){setWxShare(title,link,desc,img,_this.options),_isReady=!0}),wx.error(function(e){alert(JSON.stringify(e))}))}catch(e){alert("local error:"+e.toString())}}else alert("http error:"+xhr.statusText)},xhr.send()},document.body.appendChild(script)}else fnOther&&"function"==typeof fnOther&&(fnOther(title,link,desc,img),_isReady=!0)}}])},51:function(e,t,n){var r=n(48);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0};o.transform=void 0,o.insertInto=void 0;n(1)(r,o);r.locals&&(e.exports=r.locals)},54:function(e,t){var n={};n.makeDialog=function(e,t){var n,r;return r=document.createElement("div"),r.setAttribute("id",e),r.classList.add("dialog","mask"),n="<div class='dialog dlg'>",t.header&&t.header.length&&(n+="<div class='dlg-header'>"+t.header+"</div>"),n+="<div class='dlg-body'>"+t.body+"</div>",t.footer&&t.footer.length&&(n+="<div class='dlg-footer'>"+t.footer+"</div>"),n+="</div>",r.innerHTML=n,document.body.appendChild(r),r.children};var r=angular.module("directive.signin",[]);r.directive("tmsDate",["$compile",function(e){return{restrict:"A",scope:{value:"=tmsDateValue"},controller:["$scope",function(e){e.close=function(){var t;t=document.querySelector("#"+e.dialogID),document.body.removeChild(t),e.opened=!1},e.ok=function(){var t;t=new Date,t.setTime(0),t.setFullYear(e.data.year),t.setMonth(e.data.month-1),t.setDate(e.data.date),t.setHours(e.data.hour),t.setMinutes(e.data.minute),e.value=parseInt(t.getTime()/1e3),e.close()}}],link:function(t,r,o){var i,a,s,l;void 0===t.value&&(t.value=1*new Date/1e3),a=new Date,a.setTime(1e3*t.value),t.options={years:[2014,2015,2016,2017,2018,2019,2020],months:[1,2,3,4,5,6,7,8,9,10,11,12],dates:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],hours:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],minutes:[0,5,10,15,20,25,30,35,40,45,50,55]},s=5*Math.round(a.getMinutes()/5),t.data={year:a.getFullYear(),month:a.getMonth()+1,date:a.getDate(),hour:a.getHours(),minute:s},-1===t.options.minutes.indexOf(s)&&t.options.minutes.push(s),l='<div class="form-group"><select class="form-control" ng-model="data.year" ng-options="y for y in options.years"></select></div>',l+='<div class="form-group"><select class="form-control" ng-model="data.month" ng-options="m for m in options.months"></select></div>',l+='<div class="form-group"><select class="form-control" ng-model="data.date" ng-options="d for d in options.dates"></select></div>',l+='<div class="form-group"><select class="form-control" ng-model="data.hour" ng-options="h for h in options.hours"></select></div>',l+='<div class="form-group"><select class="form-control" ng-model="data.minute" ng-options="mi for mi in options.minutes"></select></div>',i=function(r){if(r.preventDefault(),r.stopPropagation(),!t.opened){var o,i;i="_dlg-"+1*new Date,o={header:"",body:l,footer:'<button class="btn btn-default" ng-click="close()">关闭</button><button class="btn btn-success" ng-click="ok()">确定</button>'},o=n.makeDialog(i,o),t.opened=!0,t.dialogID=i,e(o)(t)}},r[0].querySelector("[ng-bind]").addEventListener("click",i)}}}]),r.directive("flexImg",function(){return{restrict:"A",replace:!0,template:"<img ng-src='{{img.imgSrc}}'>",link:function(e,t,n){angular.element(t).on("load",function(){var e,t,n=this.clientWidth,r=this.clientHeight;n>r?(e=n/r*80,angular.element(this).css({height:"100%",width:e+"px",top:"0",left:"50%","margin-left":-1*e/2+"px"})):(t=r/n*80,angular.element(this).css({width:"100%",height:t+"px",left:"0",top:"50%","margin-top":-1*t/2+"px"}))})}}}),r.directive("dynamicHtml",["$compile",function(e){return{restrict:"EA",replace:!0,link:function(t,n,r){t.$watch(r.dynamicHtml,function(r){r&&r.length&&(n.html(r),e(n.contents())(t))})}}}])},55:function(e,t,n){"use strict";n(5),/MicroMessenger/i.test(navigator.userAgent)&&window.signPackage&&window.wx&&window.wx.ready(function(){window.wx.showOptionMenu()}),n(51),n(6),n(2),n(4),n(25),n(28),n(54);var r=function(e,t){if(!window.xxt||!window.xxt.share)return!1;var n,r;n=location.protocol+"//"+location.host+LS.j("","site","app"),t.page.share_page&&"Y"===t.page.share_page&&(n+="&page="+t.page.name,n+="&ek="+t.enrollKey),r=t.app.summary,t.page.share_summary&&t.page.share_summary.length&&t.record&&(r=t.record.data[t.page.share_summary]),e.shareData={title:t.app.title,link:n,desc:r,pic:t.app.pic},window.xxt.share.set(t.app.title,n,r,t.app.pic),window.shareCounter=0,window.xxt.share.options.logger=function(e){}},o=["ngSanitize","notice.ui.xxt","http.ui.xxt","page.ui.xxt","directive.signin","snsshare.ui.xxt"];window.moduleAngularModules&&window.moduleAngularModules.forEach(function(e){o.push(e)});var i=angular.module("app",o);i.config(["$controllerProvider","$locationProvider",function(e,t){i.provider={controller:e.register},t.html5Mode(!0)}]),i.controller("ctrlMain",["$scope","$timeout","http2","tmsLocation","tmsDynaPage",function(e,t,n,o,a){function s(){var e;(e=document.querySelectorAll("[wrap=button]"))&&angular.forEach(e,function(e){e.style.display="none"})}function l(){n.get(o.j("askFollow","site")).then(function(){},function(e){var t,n;t=document.body,n=document.createElement("iframe"),n.setAttribute("id","frmPopup"),n.height=t.clientHeight,t.scrollTop=0,t.appendChild(n),window.closeAskFollow=function(){n.style.display="none"},n.setAttribute("src",o.j("askFollow","site")),n.style.display="block"})}function c(t){var n,r,o,i;i=!0,n=e,o=t.match(/\((.*?)\)/)[1].replace(/'|"/g,"").split(","),angular.forEach(t.replace(/\(.*?\)/,"").split("."),function(e){if(r&&(n=r),!n[e])return void(i=!1);r=n[e]}),i&&r.apply(n,o)}var d=[];e.closeWindow=function(){/MicroMessenger/i.test(navigator.userAgent)&&window.wx.closeWindow()},e.addRecord=function(t,n){n?e.gotoPage(t,n,null,null,!1,"Y"):alert("没有指定登记编辑页")},e.gotoPage=function(t,n,r,i,a,s){if(t.preventDefault(),t.stopPropagation(),a&&!e.User.fan)return void l();var c=o.j("","site","app");void 0!==r&&null!==r&&r.length&&(c+="&ek="+r),void 0!==i&&null!==i&&i.length&&(c+="&rid="+i),void 0!==n&&null!==n&&n.length&&(c+="&page="+n),void 0!==s&&"Y"===s&&(c+="&newRecord=Y"),location.replace(c)},e.openMatter=function(e,t,n,r){var i="/rest/site/fe/matter?site="+o.s().site+"&id="+e+"&type="+t;n?location.replace(i):!1===r?location.href=i:window.open(i)},e.followMp=function(t,n){void 0!==n&&n.length?e.gotoPage(t,n):alert("请在易信中打开页面")},e.onReady=function(t){e.params?c(t):d.push(t)},n.get(o.j("get","site","app","rid","page","ek","newRecord")).then(function(n){var o=n.data,l=o.site,c=o.app,u=o.mission,p={};c.dataSchemas.forEach(function(e){p[e.id]=e}),c._schemasById=p,e.params=o,e.site=l,e.mission=u,e.app=c,e.user=o.user,e.activeRound=o.activeRound,r(e,o),"Y"===c.use_site_header&&l&&l.header_page&&a.loadCode(i,l.header_page),"Y"===c.use_mission_header&&u&&u.header_page&&a.loadCode(i,u.header_page),"Y"===c.use_mission_footer&&u&&u.footer_page&&a.loadCode(i,u.footer_page),"Y"===c.use_site_footer&&l&&l.footer_page&&a.loadCode(i,l.footer_page),o.page&&a.loadCode(i,o.page).then(function(){e.page=o.page}),d.length&&angular.forEach(d,PG.exec),t(function(){s(),e.$broadcast("xxt.app.signin.ready",o)});var f;(f=document.querySelector(".loading"))&&f.parentNode.removeChild(f)})}]),e.exports=i},6:function(e,t,n){"use strict";angular.module("notice.ui.xxt",["ng","ngSanitize"]).service("noticebox",["$timeout","$interval","$q",function(e,t,n){var r="tmsbox"+1*new Date,o={type:"",timer:null},i=function(e,t){var n;return n=document.querySelector("#"+r),null===n?(n=document.createElement("div"),n.setAttribute("id",r),n.classList.add("tms-notice-box","alert","alert-"+e),n.innerHTML="<div>"+t+"</div>",document.body.appendChild(n),o.type=e):(o.type!==e&&(n.classList.remove("alert-"+e),o.type=e),n.childNodes[0].innerHTML=t),n};this.close=function(){var e;(e=document.querySelector("#"+r))&&document.body.removeChild(e)},this.error=function(t){var n,r;o.timer&&(e.cancel(o.timer),o.timer=null),n=i("danger",t),r=document.createElement("button"),r.classList.add("close"),r.innerHTML="<span>&times;</span>",n.insertBefore(r,n.childNodes[0]),r.addEventListener("click",function(){document.body.removeChild(n)})},this.warn=function(t){var n,r;o.timer&&(e.cancel(o.timer),o.timer=null),n=i("warning",t),r=document.createElement("button"),r.classList.add("close"),r.innerHTML="<span>&times;</span>",n.insertBefore(r,n.childNodes[0]),r.addEventListener("click",function(){document.body.removeChild(n)})},this.success=function(t){var n;o.timer&&e.cancel(o.timer),n=i("success",t),o.timer=e(function(){n.parentNode&&n.parentNode===document.body&&document.body.removeChild(n),o.timer=null},2e3)},this.info=function(t){var n;o.timer&&e.cancel(o.timer),n=i("info",t),o.timer=e(function(){n.parentNode&&n.parentNode===document.body&&document.body.removeChild(n),o.timer=null},2e3)},this.progress=function(e){i("progress",e)},this.confirm=function(r,a){var s,l,c;return s=n.defer(),o.timer&&(e.cancel(o.timer),o.timer=null),l=i("warning",r),a&&a.length?a.forEach(function(n){if(c=document.createElement("button"),c.classList.add("btn","btn-default","btn-sm"),c.innerHTML=n.label,l.appendChild(c,l.childNodes[0]),c.addEventListener("click",function(){document.body.removeChild(l),s.resolve(n.value)}),n.execWait){var r=Math.ceil(n.execWait/500),i=document.createElement("span");i.classList.add("countdown"),i.innerHTML=r,c.appendChild(i),t(function(){i.innerHTML=--r},500),o.timer=e(function(){l.parentNode&&l.parentNode===document.body&&document.body.removeChild(l),o.timer=null,s.resolve(n.value)},n.execWait)}}):(c=document.createElement("button"),c.classList.add("btn","btn-default","btn-sm"),c.innerHTML="是",l.appendChild(c,l.childNodes[0]),c.addEventListener("click",function(){document.body.removeChild(l),s.resolve()}),c=document.createElement("button"),c.classList.add("btn","btn-default","btn-sm"),c.innerHTML="否",l.appendChild(c,l.childNodes[0]),c.addEventListener("click",function(){document.body.removeChild(l),s.reject()})),s.promise}}])},95:function(e,t,n){"use strict";n(148);var r=n(55);r.factory("Record",["http2","$q","tmsLocation",function(e,t,n){var r,o,i;return r=function(){this.current={enroll_at:0}},i=!1,r.prototype.get=function(r){if(i)return!1;i=!0;var o,a,s;return o=this,s=t.defer(),a=n.j("record/get","site","app"),r&&(a+="&ek="+r),e.get(a).then(function(e){var t;t=e.data,o.current=t,s.resolve(t),i=!1}),s.promise},{ins:function(e,t,n,i){return o||(o=new r(e,t,n,i))}}}]),r.controller("ctrlRecord",["$scope","$sce",function(e,t){e.value2Label=function(n){var r,o,i,a=[];return e.app.dataSchemas&&(o=e.app._schemasById[n])&&e.Record.facRecord.current.data&&((r=e.Record.facRecord.current.data[n])?o.ops&&o.ops.length&&(i=r.split(","),o.ops.forEach(function(e){-1!==i.indexOf(e.v)&&a.push(e.l)}),r=a.join(",")):r=""),t.trustAsHtml(r)}}]),r.controller("ctrlView",["$scope","tmsLocation","noticebox","Record",function(e,t,n,r){var o=r.ins();e.Record=o,o.get(t.s().ek),e.editRecord=function(t,r){r?e.gotoPage(t,r,o.current.enroll_key):n.error("没有指定登记编辑页")},e.gotoEnroll=function(r){var o;if((o=e.app.entryRule)&&o.enroll&&o.enroll.id){var i="/rest/site/fe/matter/enroll";return i+="?site="+t.s().site,i+="&app="+o.enroll.id,i+="&ignoretime=Y",void(location.href=i)}n.warn("没有指定关联报名表，无法填写报名信息")},e.doAction=function(t,n){switch(n.name){case"editRecord":e.editRecord(t,n.next);break;case"gotoEnroll":e.gotoEnroll(t);break;case"gotoPage":e.gotoPage(t,n.next);break;case"closeWindow":e.closeWindow()}}}])}});