!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=89)}({0:function(e,t){function n(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var r=o(i);return[n].concat(i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"})).concat([r]).join("\n")}return[n].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=n(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},1:function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=f[o.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](o.parts[r]);for(;r<o.parts.length;r++)i.parts.push(p(o.parts[r],t))}else{for(var a=[],r=0;r<o.parts.length;r++)a.push(p(o.parts[r],t));f[o.id]={id:o.id,refs:1,parts:a}}}}function i(e,t){for(var n=[],o={},i=0;i<e.length;i++){var r=e[i],a=t.base?r[0]+t.base:r[0],s=r[1],c=r[2],l=r[3],p={css:s,media:c,sourceMap:l};o[a]?o[a].parts.push(p):n.push(o[a]={id:a,parts:[p]})}return n}function r(e,t){var n=m(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=w[w.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),w.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=w.indexOf(e);t>=0&&w.splice(t,1)}function s(e){var t=document.createElement("style");return e.attrs.type="text/css",l(t,e.attrs),r(e,t),t}function c(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",l(t,e.attrs),r(e,t),t}function l(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function p(e,t){var n,o,i,r;if(t.transform&&e.css){if(!(r=t.transform(e.css)))return function(){};e.css=r}if(t.singleton){var l=x++;n=v||(v=s(t)),o=d.bind(null,n,l,!1),i=d.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),o=g.bind(null,n,t),i=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),o=u.bind(null,n),i=function(){a(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}function d(e,t,n,o){var i=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=b(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function u(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function g(e,t,n){var o=n.css,i=n.sourceMap,r=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||r)&&(o=y(o)),i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([o],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var f={},h=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),m=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),v=null,x=0,w=[],y=n(3);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=h()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=i(e,t);return o(n,t),function(e){for(var r=[],a=0;a<n.length;a++){var s=n[a],c=f[s.id];c.refs--,r.push(c)}if(e){o(i(e,t),t)}for(var a=0;a<r.length;a++){var c=r[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete f[c.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},18:function(e,t,n){"use strict";void 0===window.xxt&&(window.xxt={}),window.xxt.geo={options:{},getAddress:function(e,t,n){var o;if(o=t.promise,window.wx)window.wx.getLocation({success:function(o){var i="/rest/site/fe/matter/enroll/locationGet";i+="?site="+n,i+="&lat="+o.latitude,i+="&lng="+o.longitude,e.get(i).then(function(e){t.resolve({errmsg:"ok",lat:o.latitude,lng:o.longitude,address:e.data.address})})}});else try{var i=window.navigator;if(null!==i){var r=i.geolocation;null!==r?r.getCurrentPosition(function(o){var i="/rest/site/fe/matter/enroll/locationGet";i+="?site="+n,i+="&lat="+o.coords.latitude,i+="&lng="+o.coords.longitude,e.get(i).then(function(e){t.resolve({errmsg:"ok",lat:o.coords.latitude,lng:o.coords.longitude,address:e.data.address})})},function(){t.resolve({errmsg:"获取地理位置失败"})}):t.resolve({errmsg:"无法获取地理位置"})}else t.resolve({errmsg:"无法获取地理位置"})}catch(e){alert("exception:"+e.message)}return o}}},19:function(e,t,n){"use strict";void 0===window.xxt&&(window.xxt={}),window.xxt.image={options:{},choose:function(e,t){var n,o=[];if(n=e.promise,window.YixinJSBridge)window.YixinJSBridge.invoke("pickImage",{type:t,quality:100},function(t){var n;t.data&&t.data.length&&(n={imgSrc:"data:"+t.mime+";base64,"+t.data},o.push(n)),e.resolve(o)});else{var i=document.createElement("input");i.setAttribute("type","file"),i.addEventListener("change",function(t){var n,r,a,s;for(r=t.target.files.length,n=0;n<r;n++){a=t.target.files[n],s={".jp":"image/jpeg",".pn":"image/png",".gi":"image/gif"}[a.name.match(/\.(\w){2}/g)[0]||".jp"],a.type2=a.type||s;var c=new FileReader;c.onload=function(t){return function(n){var r={};r.imgSrc=n.target.result.replace(/^.+(,)/,"data:"+t.type2+";base64,"),o.push(r),document.body.removeChild(i),e.resolve(o)}}(a),c.readAsDataURL(a)}},!1),i.style.opacity=0,document.body.appendChild(i),i.click()}return n},wxUpload:function(e,t){var n;return n=e.promise,0===t.imgSrc.indexOf("weixin://")||0===t.imgSrc.indexOf("wxLocalResource://")?window.wx.uploadImage({localId:t.imgSrc,isShowProgressTips:1,success:function(n){t.serverId=n.serverId,e.resolve(t)}}):e.resolve(t),n}}},22:function(e,t,n){t=e.exports=n(0)(void 0),t.push([e.i,".dialog.mask{position:fixed;background:rgba(0,0,0,.3);top:0;left:0;bottom:0;right:0;overflow:auto;z-index:998}.dialog.dlg{position:absolute;background:#fff;left:0;right:0;bottom:0;margin:15px}.dialog .dlg-body,.dialog .dlg-header{padding:15px 15px 0}.dialog .dlg-footer{text-align:right;padding:15px}.dialog .dlg-footer button{border-radius:0}div[wrap=filter] .detail{background:#ccc}div[wrap=filter] .detail .options .label{display:inline-block;margin:.5em;padding-top:.3em;font-size:100%}div[wrap=filter] .detail .actions .btn{border-radius:0}",""])},23:function(e,t,n){var o=n(22);"string"==typeof o&&(o=[[e.i,o,""]]);var i={};i.transform=void 0;n(1)(o,i);o.locals&&(e.exports=o.locals)},26:function(e,t){var n={};n.makeDialog=function(e,t){var n,o;return o=document.createElement("div"),o.setAttribute("id",e),o.classList.add("dialog","mask"),n="<div class='dialog dlg'>",t.header&&t.header.length&&(n+="<div class='dlg-header'>"+t.header+"</div>"),n+="<div class='dlg-body'>"+t.body+"</div>",t.footer&&t.footer.length&&(n+="<div class='dlg-footer'>"+t.footer+"</div>"),n+="</div>",o.innerHTML=n,document.body.appendChild(o),o.children};var o=angular.module("directive.signin",[]);o.directive("tmsDate",["$compile",function(e){return{restrict:"A",scope:{value:"=tmsDateValue"},controller:["$scope",function(e){e.close=function(){var t;t=document.querySelector("#"+e.dialogID),document.body.removeChild(t),e.opened=!1},e.ok=function(){var t;t=new Date,t.setTime(0),t.setFullYear(e.data.year),t.setMonth(e.data.month-1),t.setDate(e.data.date),t.setHours(e.data.hour),t.setMinutes(e.data.minute),e.value=parseInt(t.getTime()/1e3),e.close()}}],link:function(t,o,i){var r,a,s,c;void 0===t.value&&(t.value=1*new Date/1e3),a=new Date,a.setTime(1e3*t.value),t.options={years:[2014,2015,2016,2017,2018,2019,2020],months:[1,2,3,4,5,6,7,8,9,10,11,12],dates:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],hours:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],minutes:[0,5,10,15,20,25,30,35,40,45,50,55]},s=5*Math.round(a.getMinutes()/5),t.data={year:a.getFullYear(),month:a.getMonth()+1,date:a.getDate(),hour:a.getHours(),minute:s},-1===t.options.minutes.indexOf(s)&&t.options.minutes.push(s),c='<div class="form-group"><select class="form-control" ng-model="data.year" ng-options="y for y in options.years"></select></div>',c+='<div class="form-group"><select class="form-control" ng-model="data.month" ng-options="m for m in options.months"></select></div>',c+='<div class="form-group"><select class="form-control" ng-model="data.date" ng-options="d for d in options.dates"></select></div>',c+='<div class="form-group"><select class="form-control" ng-model="data.hour" ng-options="h for h in options.hours"></select></div>',c+='<div class="form-group"><select class="form-control" ng-model="data.minute" ng-options="mi for mi in options.minutes"></select></div>',r=function(o){if(o.preventDefault(),o.stopPropagation(),!t.opened){var i,r;r="_dlg-"+1*new Date,i={header:"",body:c,footer:'<button class="btn btn-default" ng-click="close()">关闭</button><button class="btn btn-success" ng-click="ok()">确定</button>'},i=n.makeDialog(r,i),t.opened=!0,t.dialogID=r,e(i)(t)}},o[0].querySelector("[ng-bind]").addEventListener("click",r)}}}]),o.directive("tmsCheckboxGroup",function(){return{restrict:"A",link:function(e,t,n){var o,i,r,a;n.tmsCheckboxGroup&&n.tmsCheckboxGroup.length&&(o=n.tmsCheckboxGroup,n.tmsCheckboxGroupModel&&n.tmsCheckboxGroupModel.length&&(i=n.tmsCheckboxGroupModel,n.tmsCheckboxGroupUpper&&n.tmsCheckboxGroupUpper.length&&(a=n.tmsCheckboxGroupUpper,r=document.querySelectorAll("[name="+o+"]"),e.$watch(i+"."+o,function(e){var t;t=0,angular.forEach(e,function(e,n){e&&t++}),t>=a?[].forEach.call(r,function(e){void 0===e.checked?!e.classList.contains("checked")&&e.setAttribute("disabled",!0):!e.checked&&(e.disabled=!0)}):[].forEach.call(r,function(e){void 0===e.checked?e.removeAttribute("disabled"):e.disabled=!1})},!0))))}}}),o.directive("flexImg",function(){return{restrict:"A",replace:!0,template:"<img ng-src='{{img.imgSrc}}'>",link:function(e,t,n){angular.element(t).on("load",function(){var e,t,n=this.clientWidth,o=this.clientHeight;n>o?(e=n/o*80,angular.element(this).css({height:"100%",width:e+"px",top:"0",left:"50%","margin-left":-1*e/2+"px"})):(t=o/n*80,angular.element(this).css({width:"100%",height:t+"px",left:"0",top:"50%","margin-top":-1*t/2+"px"}))})}}}),o.directive("dynamicHtml",["$compile",function(e){return{restrict:"EA",replace:!0,link:function(t,n,o){t.$watch(o.dynamicHtml,function(o){o&&o.length&&(n.html(o),e(n.contents())(t))})}}}])},27:function(module,exports,__webpack_require__){"use strict";__webpack_require__(7),/MicroMessenger/i.test(navigator.userAgent)&&window.signPackage&&window.wx?window.wx.ready(function(){window.wx.showOptionMenu()}):/YiXin/i.test(navigator.userAgent)&&document.addEventListener("YixinJSBridgeReady",function(){YixinJSBridge.call("showOptionMenu")},!1),__webpack_require__(23),__webpack_require__(19),__webpack_require__(18),__webpack_require__(26);var setPage=function($scope,page){if(page.ext_css&&page.ext_css.length&&angular.forEach(page.ext_css,function(e){var t,n;t=document.createElement("link"),t.href=e.url,t.rel="stylesheet",n=document.querySelector("head"),n.appendChild(t)}),page.ext_js&&page.ext_js.length){var i,l,loadJs;i=0,l=page.ext_js.length,loadJs=function(){var js;js=page.ext_js[i],$.getScript(js.url,function(){i++,i===l?page.js&&page.js.length&&$scope.$apply(function dynamicjs(){eval(page.js),$scope.page=page}):loadJs()})},loadJs()}else page.js&&page.js.length?function dynamicjs(){eval(page.js),$scope.page=page}():$scope.page=page},setShareData=function(e,t,n){if(!window.xxt||!window.xxt.share)return!1;try{var o,i;o="http://"+location.host+LS.j("","site","app"),t.page.share_page&&"Y"===t.page.share_page&&(o+="&page="+t.page.name,o+="&ek="+t.enrollKey),i=t.app.summary,t.page.share_summary&&t.page.share_summary.length&&t.record&&(i=t.record.data[t.page.share_summary]),e.shareData={title:t.app.title,link:o,desc:i,pic:t.app.pic},window.xxt.share.set(t.app.title,o,i,t.app.pic),window.shareCounter=0,window.xxt.share.options.logger=function(e){}}catch(e){alert(e.message)}},ngApp=angular.module("app",["ngSanitize","directive.signin","snsshare.ui.xxt"]);ngApp.provider("ls",function(){var e={};this.params=function(t){var n;return n=location.search,angular.forEach(t,function(t){var o,i;i=new RegExp(t+"=([^&]*)"),o=n.match(i),e[t]=o?o[1]:""}),e},this.$get=function(){return{p:e,j:function(t){var n=1,o=arguments.length,i="/rest/site/fe/matter/signin",r=[];for(t&&t.length&&(i+="/"+t);n<o;n++)r.push(arguments[n]+"="+e[arguments[n]]);return r.length&&(i+="?"+r.join("&")),i}}}}),ngApp.config(["$controllerProvider","lsProvider",function(e,t){ngApp.provider={controller:e.register},t.params(["site","app","rid","page","ek","preview","newRecord","ignoretime"])}]),ngApp.controller("ctrlMain",["$scope","$http","$timeout","ls",function($scope,$http,$timeout,LS){var tasksOfOnReady=[];$scope.errmsg="",$scope.closePreviewTip=function(){$scope.preview="N"};var openAskFollow=function(){$http.get("/rest/site/fe/matter/signin/askFollow?site="+LS.p.site).error(function(e){var t,n;t=document.body,n=document.createElement("iframe"),n.setAttribute("id","frmPopup"),n.height=t.clientHeight,t.scrollTop=0,t.appendChild(n),window.closeAskFollow=function(){n.style.display="none"},n.setAttribute("src","/rest/site/fe/matter/signin/askFollow?site="+LS.p.site),n.style.display="block"})},loadCss=function(e){var t,n;t=document.createElement("link"),t.href=e.url,t.rel="stylesheet",n=document.querySelector("head"),n.appendChild(t)},loadDynaCss=function(e){var t,n;t=document.createElement("style"),t.rel="stylesheet",t.innerHTML=e,n=document.querySelector("head"),n.appendChild(t)};$scope.closeWindow=function(){/MicroMessenger/i.test(navigator.userAgent)?window.wx.closeWindow():/YiXin/i.test(navigator.userAgent)&&window.YixinJSBridge.call("closeWebView")},$scope.addRecord=function(e,t){t?$scope.gotoPage(e,t,null,null,!1,"Y"):alert("没有指定登记编辑页")},$scope.gotoPage=function(e,t,n,o,i,r){if(e.preventDefault(),e.stopPropagation(),i&&!$scope.User.fan)return void openAskFollow();var a=LS.j("","site","app");void 0!==n&&null!==n&&n.length&&(a+="&ek="+n),void 0!==o&&null!==o&&o.length&&(a+="&rid="+o),void 0!==t&&null!==t&&t.length&&(a+="&page="+t),void 0!==r&&"Y"===r&&(a+="&newRecord=Y"),location.replace(a)},$scope.openMatter=function(e,t,n,o){var i="/rest/site/fe/matter?site="+LS.p.site+"&id="+e+"&type="+t;n?location.replace(i):!1===o?location.href=i:window.open(i)},$scope.gotoLottery=function(e,t,n){e.preventDefault(),e.stopPropagation(),location.replace("/rest/app/lottery?mpid="+LS.p.mpid+"&lottery="+t+"&enrollKey="+n)},$scope.followMp=function(e,t){/YiXin/i.test(navigator.userAgent)?location.href="yixin://opencard?pid="+$scope.mpa.yx_cardid:void 0!==t&&t.length?$scope.gotoPage(e,t):alert("请在易信中打开页面")},$scope.onReady=function(e){$scope.params?PG.exec(e):tasksOfOnReady.push(e)},$http.get(LS.j("get","site","app","rid","page","ek","newRecord")).success(function(rsp){if(0!==rsp.err_code)return void($scope.errmsg=rsp.err_msg);try{var params=rsp.data,site=params.site,app=params.app,mission=params.mission,schemasById={};app.data_schemas=JSON.parse(app.data_schemas),app.data_schemas.forEach(function(e){schemasById[e.id]=e}),app._schemasById=schemasById,$scope.params=params,$scope.site=site,$scope.mission=mission,$scope.app=app,$scope.user=params.user,"Y"===params.app.multi_rounds&&($scope.activeRound=params.activeRound),setShareData($scope,params,$http),"Y"===app.use_site_header&&site&&site.header_page&&(site.header_page.ext_css&&site.header_page.ext_css.length&&angular.forEach(site.header_page.ext_css,function(e){loadCss(e)}),site.header_page.css.length&&loadDynaCss(site.header_page.css),function(){eval(site.header_page.js)}()),"Y"===app.use_mission_header&&mission&&mission.header_page&&(mission.header_page.ext_css&&mission.header_page.ext_css.length&&angular.forEach(mission.header_page.ext_css,function(e){loadCss(e)}),mission.header_page.css.length&&loadDynaCss(mission.header_page.css),function(){eval(mission.header_page.js)}()),"Y"===app.use_mission_footer&&mission&&mission.footer_page&&(mission.footer_page.ext_css&&mission.footer_page.ext_css.length&&angular.forEach(mission.footer_page.ext_css,function(e){loadCss(e)}),mission.footer_page.css.length&&loadDynaCss(mission.footer_page.css),function(){eval(mission.footer_page.js)}()),"Y"===app.use_site_footer&&site&&site.footer_page&&(site.footer_page.ext_css&&site.footer_page.ext_css.length&&angular.forEach(site.footer_page.ext_css,function(e){loadCss(e)}),site.footer_page.css.length&&loadDynaCss(site.footer_page.css),function(){eval(site.footer_page.js)}()),setPage($scope,params.page),tasksOfOnReady.length&&angular.forEach(tasksOfOnReady,PG.exec),$timeout(function(){$scope.$broadcast("xxt.app.signin.ready",params)});var eleLoading;(eleLoading=document.querySelector(".loading"))&&eleLoading.parentNode.removeChild(eleLoading)}catch(e){alert(e.message)}}).error(function(e,t){if(401===t){var n=document.createElement("iframe");n.setAttribute("id","frmPopup"),n.onload=function(){this.height=document.querySelector("body").clientHeight},document.body.appendChild(n),0===e.indexOf("http")?(window.onAuthSuccess=function(){n.style.display="none"},n.setAttribute("src",e),n.style.display="block"):n.contentDocument&&n.contentDocument.body&&(n.contentDocument.body.innerHTML=e,n.style.display="block")}else $scope.errmsg=e})}]),module.exports=ngApp},3:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i))return e;var r;return r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")"})}},43:function(e,t,n){"use strict";n(73);var o=n(27);o.factory("Record",["$http","$q","ls",function(e,t,n){var o,i,r;return o=function(){this.current={enroll_at:0}},r=!1,o.prototype.get=function(o){if(r)return!1;r=!0;var i,a,s;return i=this,s=t.defer(),a=n.j("record/get","site","app"),o&&(a+="&ek="+o),e.get(a).success(function(e){var t;t=e.data,0==e.err_code&&(i.current=t,s.resolve(t)),r=!1}),s.promise},{ins:function(e,t,n,r){return i||(i=new o(e,t,n,r))}}}]),o.controller("ctrlRecord",["$scope","Record","$sce","ls",function(e,t,n,o){var i=t.ins();e.value2Label=function(t){var o,r,a,s=[];return e.app.data_schemas&&(r=e.app._schemasById[t])&&i.current.data&&((o=i.current.data[t])?r.ops&&r.ops.length&&(a=o.split(","),r.ops.forEach(function(e){-1!==a.indexOf(e.v)&&s.push(e.l)}),o=s.join(",")):o=""),n.trustAsHtml(o)},e.editRecord=function(t,n){n?e.gotoPage(t,n,i.current.enroll_key):alert("没有指定登记编辑页")},e.gotoEnroll=function(t,n){if(e.app.enroll_app_id){var i="/rest/site/fe/matter/enroll";i+="?site="+o.p.site,i+="&app="+e.app.enroll_app_id,i+="&ignoretime=Y",location.href=i}else e.$root.$errmsg="没有指定关联报名表，无法填写报名信息"},i.get(o.p.ek),e.Record=i}]),o.controller("ctrlView",["$scope",function(e){}])},60:function(e,t,n){t=e.exports=n(0)(void 0),t.push([e.i,".ng-cloak{display:none}body,html{height:100%;width:100%;background:#efefef;font-family:Microsoft Yahei,Arial}body{position:relative;padding:15px;font-size:16px}img{max-width:100%}#errmsg{display:block;opacity:0;height:0;overflow:hidden;width:300px;position:fixed;top:0;left:50%;margin:0 0 0 -150px;text-align:center;transition:opacity 1s;z-index:-1;word-break:break-all}#errmsg.active{opacity:1;height:auto;z-index:999}#tipPreview{z-index:9999;position:fixed;bottom:4px;left:4px;right:4px;height:48px;background:rgba(0,0,0,.5);border-radius:4px;text-align:center;line-height:48px;color:#fff;font-size:14px}#tipPreview button{float:auto;position:absolute;top:12px;right:8px}div[wrap].wrap-splitline{padding-bottom:.5em;border-bottom:1px dotted #eee}div[wrap].wrap-inline>*{display:inline-block;vertical-align:top;margin:0 1em 0 0}div[wrap].wrap-inline>label{width:6em;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}div[wrap] ul{list-style:none;padding:0;margin:0;max-width:50%}div[schema-type=image]>ul>li>img{width:100%}div[wrap=matter]>span{cursor:pointer;text-decoration:underline}li .wrap-inline>label{padding:7px 0;color:#444}li .wrap-inline{border-bottom:1px dashed #efefef}li .wrap-inline:last-child{border-bottom:0}#frmPopup{position:absolute;top:0;left:0;right:0;bottom:0;border:none;width:100%;z-index:999;box-sizing:border-box}",""])},7:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("snsshare.ui.xxt",[]);ngMod.service("tmsSnsShare",["$http",function($http){function setWxShare(e,t,n,o,i){window.wx.onMenuShareTimeline({title:i.descAsTitle?n:e,link:t,imgUrl:o,success:function(){try{i.logger&&i.logger("T")}catch(e){alert("share failed:"+e.message)}},cancel:function(){},fail:function(){alert("shareT: fail")}}),window.wx.onMenuShareAppMessage({title:e,desc:n,link:t,imgUrl:o,success:function(){try{i.logger&&i.logger("F")}catch(e){alert("share failed:"+e.message)}},cancel:function(){},fail:function(){alert("shareF: fail")}})}function setYxShare(e,t,n,o,i){var r={img_url:o,link:t,title:e,desc:n};window.YixinJSBridge.on("menu:share:appmessage",function(e){try{i.logger&&i.logger("F")}catch(e){alert("share failed:"+e.message)}window.YixinJSBridge.invoke("sendAppMessage",r,function(e){})}),window.YixinJSBridge.on("menu:share:timeline",function(e){try{i.logger&&i.logger("T")}catch(e){alert("share failed:"+e.message)}window.YixinJSBridge.invoke("shareTimeline",r,function(e){})})}this.config=function(e){this.options=e},this.set=function(title,link,desc,img,fnOther){var _this=this;if(img&&-1===img.indexOf("http")&&(img="http://"+location.host+img),/MicroMessenger/i.test(navigator.userAgent)){var script;script=document.createElement("script"),script.src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js",script.onload=function(){var xhr,url;xhr=new XMLHttpRequest,url="/rest/site/fe/wxjssdksignpackage?site="+_this.options.siteId+"&url="+encodeURIComponent(location.href.split("#")[0]),xhr.open("GET",url,!0),xhr.onreadystatechange=function(){if(4==xhr.readyState)if(xhr.status>=200&&xhr.status<400){var signPackage;try{eval("("+xhr.responseText+")"),signPackage&&(signPackage.debug=!1,signPackage.jsApiList=_this.options.jsApiList,wx.config(signPackage),wx.ready(function(){setWxShare(title,link,desc,img,_this.options)}),wx.error(function(e){alert(e)}))}catch(e){alert("local error:"+e.toString())}}else alert("http error:"+xhr.statusText)},xhr.send()},document.body.appendChild(script)}else/Yixin/i.test(navigator.userAgent)?void 0===window.YixinJSBridge?document.addEventListener("YixinJSBridgeReady",function(){setYxShare(title,link,desc,img,_this.options)},!1):setYxShare(title,link,desc,img,_this.options):fnOther&&"function"==typeof fnOther&&fnOther(title,link,desc,img)}}])},73:function(e,t,n){var o=n(60);"string"==typeof o&&(o=[[e.i,o,""]]);var i={};i.transform=void 0;n(1)(o,i);o.locals&&(e.exports=o.locals)},89:function(e,t,n){e.exports=n(43)}});