!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=105)}({0:function(e,t){function n(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var r=o(i);return[n].concat(i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"})).concat([r]).join("\n")}return[n].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=n(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},1:function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=g[o.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](o.parts[r]);for(;r<o.parts.length;r++)i.parts.push(d(o.parts[r],t))}else{for(var a=[],r=0;r<o.parts.length;r++)a.push(d(o.parts[r],t));g[o.id]={id:o.id,refs:1,parts:a}}}}function i(e,t){for(var n=[],o={},i=0;i<e.length;i++){var r=e[i],a=t.base?r[0]+t.base:r[0],s=r[1],c=r[2],l=r[3],d={css:s,media:c,sourceMap:l};o[a]?o[a].parts.push(d):n.push(o[a]={id:a,parts:[d]})}return n}function r(e,t){var n=h(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=w[w.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),w.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=w.indexOf(e);t>=0&&w.splice(t,1)}function s(e){var t=document.createElement("style");return e.attrs.type="text/css",l(t,e.attrs),r(e,t),t}function c(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",l(t,e.attrs),r(e,t),t}function l(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function d(e,t){var n,o,i,r;if(t.transform&&e.css){if(!(r=t.transform(e.css)))return function(){};e.css=r}if(t.singleton){var l=x++;n=v||(v=s(t)),o=u.bind(null,n,l,!1),i=u.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),o=f.bind(null,n,t),i=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),o=p.bind(null,n),i=function(){a(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}function u(e,t,n,o){var i=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=y(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function p(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function f(e,t,n){var o=n.css,i=n.sourceMap,r=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||r)&&(o=b(o)),i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([o],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var g={},m=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),h=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),v=null,x=0,w=[],b=n(3);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=m()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=i(e,t);return o(n,t),function(e){for(var r=[],a=0;a<n.length;a++){var s=n[a],c=g[s.id];c.refs--,r.push(c)}if(e){o(i(e,t),t)}for(var a=0;a<r.length;a++){var c=r[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete g[c.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},105:function(e,t,n){e.exports=n(50)},2:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("page.ui.xxt",[]);ngMod.directive("dynamicHtml",["$compile",function(e){return{restrict:"EA",replace:!0,link:function(t,n,o){t.$watch(o.dynamicHtml,function(o){o&&o.length&&(n.html(o),e(n.contents())(t))})}}}]),ngMod.service("tmsDynaPage",["$q",function($q){this.loadCss=function(e){var t,n;t=document.createElement("style"),t.innerHTML=e,n=document.querySelector("head"),n.appendChild(t)},this.loadExtCss=function(e){var t,n;t=document.createElement("link"),t.href=e,t.rel="stylesheet",n=document.querySelector("head"),n.appendChild(t)},this.loadJs=function(ngApp,js){!function(ngApp){eval(js)}(ngApp)},this.loadScript=function(e){var t,n,o=$q.defer();return n=function(){var i;i=document.createElement("script"),i.src=e[t],i.onload=function(){t++,t<e.length?n():o.resolve()},document.body.appendChild(i)},e&&(angular.isString(e)&&(e=[e]),e.length&&(t=0,n())),o.promise},this.loadExtJs=function(e,t){var n,o=this,i=$q.defer(),r=t.ext_js.length;return n=function(n){var a;a=document.createElement("script"),a.src=n.url,a.onload=function(){0===--r&&(t.js&&t.js.length&&o.loadJs(e,t.js),i.resolve())},document.body.appendChild(a)},t.ext_js&&t.ext_js.length&&t.ext_js.forEach(n),i.promise},this.loadCode=function(e,t){var n=this,o=$q.defer();return t.ext_css&&t.ext_css.length&&t.ext_css.forEach(function(e){n.loadExtCss(e.url)}),t.css&&t.css.length&&this.loadCss(t.css),t.ext_js&&t.ext_js.length?n.loadExtJs(e,t).then(function(){o.resolve()}):(t.js&&t.js.length&&n.loadJs(e,t.js),o.resolve()),o.promise},this.openPlugin=function(e){var t,n,o,i,r=$q.defer();return document.documentElement.clientWidth>768?document.documentElement.scrollTop=0:document.body.scrollTop=0,i=document.getElementsByTagName("body")[0],i.style.cssText="overflow-y:hidden",t=document.createDocumentFragment(),n=document.createElement("div"),n.setAttribute("id","frmPlugin"),o=document.createElement("iframe"),n.appendChild(o),n.onclick=function(){n.parentNode.removeChild(n),i.style.cssText="overflow-y:auto"},t.appendChild(n),document.body.appendChild(t),0===e.indexOf("http")?(window.onClosePlugin=function(e){n.parentNode.removeChild(n),i.style.cssText="overflow-y:auto",r.resolve(e)},o.setAttribute("src",e)):o.contentDocument&&o.contentDocument.body&&(o.contentDocument.body.innerHTML=e),r.promise}}])},21:function(e,t,n){"use strict";void 0===window.xxt&&(window.xxt={}),window.xxt.image={options:{},choose:function(e,t){var n,o=[];if(n=e.promise,window.YixinJSBridge)window.YixinJSBridge.invoke("pickImage",{type:t,quality:100},function(t){var n;t.data&&t.data.length&&(n={imgSrc:"data:"+t.mime+";base64,"+t.data},o.push(n)),e.resolve(o)});else{var i=document.createElement("input");i.setAttribute("type","file"),i.addEventListener("change",function(t){var n,r,a,s;for(r=t.target.files.length,n=0;n<r;n++){a=t.target.files[n],s={".jp":"image/jpeg",".pn":"image/png",".gi":"image/gif"}[a.name.match(/\.(\w){2}/g)[0]||".jp"],a.type2=a.type||s;var c=new FileReader;c.onload=function(t){return function(n){var r={};r.imgSrc=n.target.result.replace(/^.+(,)/,"data:"+t.type2+";base64,"),o.push(r),document.body.removeChild(i),e.resolve(o)}}(a),c.readAsDataURL(a)}},!1),i.style.opacity=0,document.body.appendChild(i),i.click()}return n},wxUpload:function(e,t){var n;return n=e.promise,0===t.imgSrc.indexOf("weixin://")||0===t.imgSrc.indexOf("wxLocalResource://")?window.wx.uploadImage({localId:t.imgSrc,isShowProgressTips:1,success:function(n){t.serverId=n.serverId,e.resolve(t)}}):e.resolve(t),n}}},22:function(e,t,n){"use strict";void 0===window.xxt&&(window.xxt={}),window.xxt.geo={options:{},getAddress:function(e,t,n){var o;if(o=t.promise,window.wx)window.wx.getLocation({success:function(o){var i="/rest/site/fe/matter/enroll/locationGet";i+="?site="+n,i+="&lat="+o.latitude,i+="&lng="+o.longitude,e.get(i).then(function(e){t.resolve({errmsg:"ok",lat:o.latitude,lng:o.longitude,address:e.data.address})})}});else try{var i=window.navigator;if(null!==i){var r=i.geolocation;null!==r?r.getCurrentPosition(function(o){var i="/rest/site/fe/matter/enroll/locationGet";i+="?site="+n,i+="&lat="+o.coords.latitude,i+="&lng="+o.coords.longitude,e.get(i).then(function(e){t.resolve({errmsg:"ok",lat:o.coords.latitude,lng:o.coords.longitude,address:e.data.address})})},function(){t.resolve({errmsg:"获取地理位置失败"})}):t.resolve({errmsg:"无法获取地理位置"})}else t.resolve({errmsg:"无法获取地理位置"})}catch(e){alert("exception:"+e.message)}return o}}},25:function(e,t,n){t=e.exports=n(0)(void 0),t.push([e.i,".dialog.mask{position:fixed;background:rgba(0,0,0,.3);top:0;left:0;bottom:0;right:0;overflow:auto;z-index:998}.dialog.dlg{position:absolute;background:#fff;left:0;right:0;bottom:0;margin:15px}.dialog .dlg-body,.dialog .dlg-header{padding:15px 15px 0}.dialog .dlg-footer{text-align:right;padding:15px}.dialog .dlg-footer button{border-radius:0}div[wrap=filter] .detail{background:#ccc}div[wrap=filter] .detail .options .label{display:inline-block;margin:.5em;padding-top:.3em;font-size:100%}div[wrap=filter] .detail .actions .btn{border-radius:0}",""])},26:function(e,t,n){var o=n(25);"string"==typeof o&&(o=[[e.i,o,""]]);var i={};i.transform=void 0;n(1)(o,i);o.locals&&(e.exports=o.locals)},28:function(e,t){var n={};n.makeDialog=function(e,t){var n,o;return o=document.createElement("div"),o.setAttribute("id",e),o.classList.add("dialog","mask"),n="<div class='dialog dlg'>",t.header&&t.header.length&&(n+="<div class='dlg-header'>"+t.header+"</div>"),n+="<div class='dlg-body'>"+t.body+"</div>",t.footer&&t.footer.length&&(n+="<div class='dlg-footer'>"+t.footer+"</div>"),n+="</div>",o.innerHTML=n,document.body.appendChild(o),o.children};var o=angular.module("directive.signin",[]);o.directive("tmsDate",["$compile",function(e){return{restrict:"A",scope:{value:"=tmsDateValue"},controller:["$scope",function(e){e.close=function(){var t;t=document.querySelector("#"+e.dialogID),document.body.removeChild(t),e.opened=!1},e.ok=function(){var t;t=new Date,t.setTime(0),t.setFullYear(e.data.year),t.setMonth(e.data.month-1),t.setDate(e.data.date),t.setHours(e.data.hour),t.setMinutes(e.data.minute),e.value=parseInt(t.getTime()/1e3),e.close()}}],link:function(t,o,i){var r,a,s,c;void 0===t.value&&(t.value=1*new Date/1e3),a=new Date,a.setTime(1e3*t.value),t.options={years:[2014,2015,2016,2017,2018,2019,2020],months:[1,2,3,4,5,6,7,8,9,10,11,12],dates:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],hours:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],minutes:[0,5,10,15,20,25,30,35,40,45,50,55]},s=5*Math.round(a.getMinutes()/5),t.data={year:a.getFullYear(),month:a.getMonth()+1,date:a.getDate(),hour:a.getHours(),minute:s},-1===t.options.minutes.indexOf(s)&&t.options.minutes.push(s),c='<div class="form-group"><select class="form-control" ng-model="data.year" ng-options="y for y in options.years"></select></div>',c+='<div class="form-group"><select class="form-control" ng-model="data.month" ng-options="m for m in options.months"></select></div>',c+='<div class="form-group"><select class="form-control" ng-model="data.date" ng-options="d for d in options.dates"></select></div>',c+='<div class="form-group"><select class="form-control" ng-model="data.hour" ng-options="h for h in options.hours"></select></div>',c+='<div class="form-group"><select class="form-control" ng-model="data.minute" ng-options="mi for mi in options.minutes"></select></div>',r=function(o){if(o.preventDefault(),o.stopPropagation(),!t.opened){var i,r;r="_dlg-"+1*new Date,i={header:"",body:c,footer:'<button class="btn btn-default" ng-click="close()">关闭</button><button class="btn btn-success" ng-click="ok()">确定</button>'},i=n.makeDialog(r,i),t.opened=!0,t.dialogID=r,e(i)(t)}},o[0].querySelector("[ng-bind]").addEventListener("click",r)}}}]),o.directive("tmsCheckboxGroup",function(){return{restrict:"A",link:function(e,t,n){var o,i,r,a;n.tmsCheckboxGroup&&n.tmsCheckboxGroup.length&&(o=n.tmsCheckboxGroup,n.tmsCheckboxGroupModel&&n.tmsCheckboxGroupModel.length&&(i=n.tmsCheckboxGroupModel,n.tmsCheckboxGroupUpper&&n.tmsCheckboxGroupUpper.length&&(a=n.tmsCheckboxGroupUpper,r=document.querySelectorAll("[name="+o+"]"),e.$watch(i+"."+o,function(e){var t;t=0,angular.forEach(e,function(e,n){e&&t++}),t>=a?[].forEach.call(r,function(e){void 0===e.checked?!e.classList.contains("checked")&&e.setAttribute("disabled",!0):!e.checked&&(e.disabled=!0)}):[].forEach.call(r,function(e){void 0===e.checked?e.removeAttribute("disabled"):e.disabled=!1})},!0))))}}}),o.directive("flexImg",function(){return{restrict:"A",replace:!0,template:"<img ng-src='{{img.imgSrc}}'>",link:function(e,t,n){angular.element(t).on("load",function(){var e,t,n=this.clientWidth,o=this.clientHeight;n>o?(e=n/o*80,angular.element(this).css({height:"100%",width:e+"px",top:"0",left:"50%","margin-left":-1*e/2+"px"})):(t=o/n*80,angular.element(this).css({width:"100%",height:t+"px",left:"0",top:"50%","margin-top":-1*t/2+"px"}))})}}}),o.directive("dynamicHtml",["$compile",function(e){return{restrict:"EA",replace:!0,link:function(t,n,o){t.$watch(o.dynamicHtml,function(o){o&&o.length&&(n.html(o),e(n.contents())(t))})}}}])},29:function(e,t,n){"use strict";n(7),/MicroMessenger/i.test(navigator.userAgent)&&window.signPackage&&window.wx?window.wx.ready(function(){window.wx.showOptionMenu()}):/YiXin/i.test(navigator.userAgent)&&document.addEventListener("YixinJSBridgeReady",function(){YixinJSBridge.call("showOptionMenu")},!1),n(26),n(8),n(6),n(2),n(21),n(22),n(28);var o=function(e,t){if(!window.xxt||!window.xxt.share)return!1;var n,o;n=location.protocol+"//"+location.host+LS.j("","site","app"),t.page.share_page&&"Y"===t.page.share_page&&(n+="&page="+t.page.name,n+="&ek="+t.enrollKey),o=t.app.summary,t.page.share_summary&&t.page.share_summary.length&&t.record&&(o=t.record.data[t.page.share_summary]),e.shareData={title:t.app.title,link:n,desc:o,pic:t.app.pic},window.xxt.share.set(t.app.title,n,o,t.app.pic),window.shareCounter=0,window.xxt.share.options.logger=function(e){}},i=angular.module("app",["ngSanitize","notice.ui.xxt","http.ui.xxt","page.ui.xxt","directive.signin","snsshare.ui.xxt"]);i.config(["$controllerProvider","$locationProvider",function(e,t){i.provider={controller:e.register},t.html5Mode(!0)}]),i.controller("ctrlMain",["$scope","$timeout","http2","tmsLocation","tmsDynaPage",function(e,t,n,r,a){function s(){n.get(r.j("askFollow","site")).then(function(){},function(e){var t,n;t=document.body,n=document.createElement("iframe"),n.setAttribute("id","frmPopup"),n.height=t.clientHeight,t.scrollTop=0,t.appendChild(n),window.closeAskFollow=function(){n.style.display="none"},n.setAttribute("src",r.j("askFollow","site")),n.style.display="block"})}function c(t){var n,o,i,r;r=!0,n=e,i=t.match(/\((.*?)\)/)[1].replace(/'|"/g,"").split(","),angular.forEach(t.replace(/\(.*?\)/,"").split("."),function(e){if(o&&(n=o),!n[e])return void(r=!1);o=n[e]}),r&&o.apply(n,i)}var l=[];e.closeWindow=function(){/MicroMessenger/i.test(navigator.userAgent)?window.wx.closeWindow():/YiXin/i.test(navigator.userAgent)&&window.YixinJSBridge.call("closeWebView")},e.addRecord=function(t,n){n?e.gotoPage(t,n,null,null,!1,"Y"):alert("没有指定登记编辑页")},e.gotoPage=function(t,n,o,i,a,c){if(t.preventDefault(),t.stopPropagation(),a&&!e.User.fan)return void s();var l=r.j("","site","app");void 0!==o&&null!==o&&o.length&&(l+="&ek="+o),void 0!==i&&null!==i&&i.length&&(l+="&rid="+i),void 0!==n&&null!==n&&n.length&&(l+="&page="+n),void 0!==c&&"Y"===c&&(l+="&newRecord=Y"),location.replace(l)},e.openMatter=function(e,t,n,o){var i="/rest/site/fe/matter?site="+r.s().site+"&id="+e+"&type="+t;n?location.replace(i):!1===o?location.href=i:window.open(i)},e.gotoLottery=function(e,t,n){e.preventDefault(),e.stopPropagation(),location.replace("/rest/app/lottery?mpid="+r.s().mpid+"&lottery="+t+"&enrollKey="+n)},e.followMp=function(t,n){/YiXin/i.test(navigator.userAgent)?location.href="yixin://opencard?pid="+e.mpa.yx_cardid:void 0!==n&&n.length?e.gotoPage(t,n):alert("请在易信中打开页面")},e.onReady=function(t){e.params?c(t):l.push(t)},n.get(r.j("get","site","app","rid","page","ek","newRecord")).then(function(n){var r=n.data,s=r.site,c=r.app,d=r.mission,u={};c.data_schemas=JSON.parse(c.data_schemas),c.data_schemas.forEach(function(e){u[e.id]=e}),c._schemasById=u,e.params=r,e.site=s,e.mission=d,e.app=c,e.user=r.user,"Y"===c.multi_rounds&&(e.activeRound=r.activeRound),o(e,r),"Y"===c.use_site_header&&s&&s.header_page&&a.loadCode(i,s.header_page),"Y"===c.use_mission_header&&d&&d.header_page&&a.loadCode(i,d.header_page),"Y"===c.use_mission_footer&&d&&d.footer_page&&a.loadCode(i,d.footer_page),"Y"===c.use_site_footer&&s&&s.footer_page&&a.loadCode(i,s.footer_page),r.page&&a.loadCode(i,r.page).then(function(){e.page=r.page}),l.length&&angular.forEach(l,PG.exec),t(function(){e.$broadcast("xxt.app.signin.ready",r)});var p;(p=document.querySelector(".loading"))&&p.parentNode.removeChild(p)})}]),e.exports=i},3:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i))return e;var r;return r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")"})}},50:function(e,t,n){"use strict";n(83);var o=n(29);o.factory("Record",["$http","$q",function(e,t){var n;return n=function(){},n.prototype.get=function(e){var n;return n=t.defer(),n.resolve({data:{}}),n.promise},{ins:function(){return new n}}}]),o.controller("ctrlRecord",["$scope","Record","tmsLocation",function(e,t,n){var o=t.ins(),i=e.app.data_schemas;e.value2Label=function(e){var t,n,r,a,s,c=[];if(i&&o.current&&o.current.data){if(void 0===(t=o.current.data[e]))return"";for(n=0,r=i.length;n<r;n++)if(a=i[n],i[n].id===e){a=i[n];break}if(a&&a.ops&&a.ops.length){for(s=t.split(","),n=0,r=a.ops.length;n<r;n++)-1!==s.indexOf(a.ops[n].v)&&c.push(a.ops[n].l);if(c.length)return c.join(",")}return t}return""},e.editRecord=function(e,t){},e.gotoEnroll=function(e,t){},o.get(n.s().ek),e.Record=o}]),o.directive("tmsImageInput",["$compile","$q",function(e,t){return{restrict:"A",controller:["$scope","$timeout",function(e,t){}]}}]),o.directive("tmsFileInput",["$q",function(e){return{restrict:"A",controller:["$scope","$timeout",function(e,t){}]}}])},6:function(e,t,n){"use strict";var o=angular.module("http.ui.xxt",[]);o.provider("tmsLocation",function(){var e;this.config=function(t){e=t||location.pathname},this.$get=["$location",function(t){return e||(e=location.pathname),{s:function(){return t.search()},j:function(n){var o=e,i=[];n&&n.length&&(o+="/"+n);for(var r=1,a=arguments.length;r<a;r++)i.push(arguments[r]+"="+(t.search()[arguments[r]]||""));return i.length&&(o+="?"+i.join("&")),o}}}]}),o.service("http2",["$rootScope","$http","$timeout","$q","$sce","$compile",function(e,t,n,o,i,r){function a(t,n,o){var a;return a=angular.element("<div></div>"),a.attr({class:"tms-notice alert alert-"+(n||"info"),"ng-style":"{'z-index':1099}"}).html(i.trustAsHtml(t)),o||a[0].addEventListener("click",function(){document.body.removeChild(a[0])},!0),r(a)(e),document.body.appendChild(a[0]),a[0]}function s(e){e&&document.body.removeChild(e)}this.get=function(e,i){var r,c,l=o.defer();return i=angular.extend({headers:{accept:"application/json"},autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},i),!0===i.showProgress&&(c=n(function(){c=null,r=a(i.showProgressText,"info")},i.showProgressDelay)),t.get(e,i).success(function(e){if(!0===i.showProgress&&(c&&n.cancel(c),r&&(s(r),r=null)),angular.isString(e)){if(i.autoNotice&&a(e,"warning"),i.autoBreak)return;l.reject(e)}else if(0!=e.err_code){if(i.autoNotice){var t;t=angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),a(t,"warning")}if(i.autoBreak)return;l.reject(e)}else l.resolve(e)}).error(function(e,t){!0===i.showProgress&&(c&&n.cancel(c),r&&(s(r),r=null)),a(null===e?"网络不可用":e,"danger")}),l.promise},this.post=function(e,i,r){var c,l,d=o.defer();return r=angular.extend({headers:{accept:"application/json"},autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},r),!0===r.showProgress&&(l=n(function(){l=null,c=a(r.showProgressText,"info")},r.showProgressDelay)),t.post(e,i,r).success(function(e){if(!0===r.showProgress&&(l&&n.cancel(l),c&&(s(c),c=null)),angular.isString(e)){if(r.autoNotice&&(a(e,"warning"),c=null),r.autoBreak)return;d.reject(e)}else if(0!=e.err_code){if(r.autoNotice){var t;t=angular.isString(e.err_msg)?e.err_msg:angular.isArray(e.err_msg)?e.err_msg.join("<br>"):JSON.stringify(e.err_msg),a(t,"warning")}if(r.autoBreak)return;d.reject(e)}else d.resolve(e)}).error(function(e,t){!0===r.showProgress&&(l&&n.cancel(l),c&&(s(c),c=null)),a(null===e?"网络不可用":e,"danger")}),d.promise}}])},68:function(e,t,n){t=e.exports=n(0)(void 0),t.push([e.i,".ng-cloak{display:none}body,html{height:100%;width:100%;background:#f8f8f8;font-family:Microsoft Yahei,Arial}body{position:relative;padding:15px;font-size:16px}img{max-width:100%}ul{list-style:none}li,ul,ul.img-tiles li{margin:0;padding:0}ul.img-tiles li{position:relative;display:inline-block;overflow:hidden;width:80px;height:80px;float:left}ul.img-tiles li.img-thumbnail img{display:inline-block;position:absolute;max-width:none}ul.img-tiles li.img-thumbnail button{position:absolute;top:0;right:0}ul.img-tiles li.img-picker button{position:auto;width:100%;height:100%}ul.img-tiles li.img-picker button span{font-size:36px}div[wrap].wrap-splitline{padding-bottom:.5em;border-bottom:1px solid #fff}div[wrap].wrap-inline>*{display:inline-block;vertical-align:middle;margin:0 1em 0 0}div[wrap].wrap-inline>label{width:6em;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}div[wrap=matter]>span{cursor:pointer;text-decoration:underline}#frmPopup{position:absolute;top:0;left:0;right:0;bottom:0;border:none;width:100%;z-index:999;box-sizing:border-box}",""])},7:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("snsshare.ui.xxt",[]);ngMod.service("tmsSnsShare",["$http",function($http){function setWxShare(e,t,n,o,i){window.wx.onMenuShareTimeline({title:i.descAsTitle?n:e,link:t,imgUrl:o,success:function(){try{i.logger&&i.logger("T")}catch(e){alert("share failed:"+e.message)}},cancel:function(){},fail:function(){alert("shareT: fail")}}),window.wx.onMenuShareAppMessage({title:e,desc:n,link:t,imgUrl:o,success:function(){try{i.logger&&i.logger("F")}catch(e){alert("share failed:"+e.message)}},cancel:function(){},fail:function(){alert("shareF: fail")}})}function setYxShare(e,t,n,o,i){var r={img_url:o,link:t,title:e,desc:n};window.YixinJSBridge.on("menu:share:appmessage",function(e){try{i.logger&&i.logger("F")}catch(e){alert("share failed:"+e.message)}window.YixinJSBridge.invoke("sendAppMessage",r,function(e){})}),window.YixinJSBridge.on("menu:share:timeline",function(e){try{i.logger&&i.logger("T")}catch(e){alert("share failed:"+e.message)}window.YixinJSBridge.invoke("shareTimeline",r,function(e){})})}this.config=function(e){this.options=e},this.set=function(title,link,desc,img,fnOther){var _this=this;if(img&&-1===img.indexOf("http")&&(img="http://"+location.host+img),/MicroMessenger/i.test(navigator.userAgent)){var script;script=document.createElement("script"),script.src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js",script.onload=function(){var xhr,url;xhr=new XMLHttpRequest,url="/rest/site/fe/wxjssdksignpackage?site="+_this.options.siteId+"&url="+encodeURIComponent(location.href.split("#")[0]),xhr.open("GET",url,!0),xhr.onreadystatechange=function(){if(4==xhr.readyState)if(xhr.status>=200&&xhr.status<400){var signPackage;try{eval("("+xhr.responseText+")"),signPackage&&(signPackage.debug=!1,signPackage.jsApiList=_this.options.jsApiList,wx.config(signPackage),wx.ready(function(){setWxShare(title,link,desc,img,_this.options)}),wx.error(function(e){alert(JSON.stringify(e))}))}catch(e){alert("local error:"+e.toString())}}else alert("http error:"+xhr.statusText)},xhr.send()},document.body.appendChild(script)}else/Yixin/i.test(navigator.userAgent)?void 0===window.YixinJSBridge?document.addEventListener("YixinJSBridgeReady",function(){setYxShare(title,link,desc,img,_this.options)},!1):setYxShare(title,link,desc,img,_this.options):fnOther&&"function"==typeof fnOther&&fnOther(title,link,desc,img)}}])},8:function(e,t,n){"use strict";angular.module("notice.ui.xxt",["ngSanitize"]).service("noticebox",["$timeout","$q",function(e,t){var n="tmsbox"+1*new Date,o={type:"",timer:null},i=function(e,t){var i;return i=document.querySelector("#"+n),null===i?(i=document.createElement("div"),i.setAttribute("id",n),i.classList.add("notice-box"),i.classList.add("alert"),i.classList.add("alert-"+e),i.innerHTML="<div>"+t+"</div>",document.body.appendChild(i),o.type=e):(o.type!==e&&(i.classList.remove("alert-"+e),o.type=e),i.childNodes[0].innerHTML=t),i};this.close=function(){var e;(e=document.querySelector("#"+n))&&document.body.removeChild(e)},this.error=function(t){var n,r;o.timer&&(e.cancel(o.timer),o.timer=null),n=i("danger",t),r=document.createElement("button"),r.classList.add("close"),r.innerHTML="<span>&times;</span>",n.insertBefore(r,n.childNodes[0]),r.addEventListener("click",function(){document.body.removeChild(n)})},this.warn=function(t){var n,r;o.timer&&(e.cancel(o.timer),o.timer=null),n=i("warning",t),r=document.createElement("button"),r.classList.add("close"),r.innerHTML="<span>&times;</span>",n.insertBefore(r,n.childNodes[0]),r.addEventListener("click",function(){document.body.removeChild(n)})},this.success=function(t){var n;o.timer&&e.cancel(o.timer),n=i("success",t),o.timer=e(function(){n.parentNode&&n.parentNode===document.body&&document.body.removeChild(n),o.timer=null},2e3)},this.info=function(t){var n;o.timer&&e.cancel(o.timer),n=i("info",t),o.timer=e(function(){n.parentNode&&n.parentNode===document.body&&document.body.removeChild(n),o.timer=null},2e3)},this.progress=function(e){i("progress",e)},this.confirm=function(n){var r,a,s;return r=t.defer(),o.timer&&(e.cancel(o.timer),o.timer=null),a=i("warning",n),s=document.createElement("button"),s.classList.add("btn","btn-default","btn-sm"),s.innerHTML="是",a.appendChild(s,a.childNodes[0]),s.addEventListener("click",function(){document.body.removeChild(a),r.resolve()}),s=document.createElement("button"),s.classList.add("btn","btn-default","btn-sm"),s.innerHTML="否",a.appendChild(s,a.childNodes[0]),s.addEventListener("click",function(){document.body.removeChild(a),r.reject()}),r.promise}}])},83:function(e,t,n){var o=n(68);"string"==typeof o&&(o=[[e.i,o,""]]);var i={};i.transform=void 0;n(1)(o,i);o.locals&&(e.exports=o.locals)}});