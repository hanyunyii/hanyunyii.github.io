(function(){"use strict";var t={4724:function(t,e,n){n.d(e,{nV:function(){return u},tS:function(){return i},u6:function(){return o}});var r=n(4161);function i(t){return r.Z.post("student",{...t})}function o(t){return r.Z.get("student",{params:{...t}})}function u(){return r.Z["delete"]("student")}},4579:function(t,e,n){var r=n(6369),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},o=[],u=n(1001),a={},s=(0,u.Z)(a,i,o,!1,null,null,null),d=s.exports,l=n(2631),c=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"home"},[e("div",{staticClass:"top-title"}),e("el-dialog",{attrs:{visible:t.loading},on:{"update:visible":function(e){t.loading=e}}},[e("el-result",{attrs:{icon:"warning",title:"警告提示",subTitle:"数据已上传至服务器"}},[e("template",{slot:"extra"},[e("el-button",{attrs:{type:"warning",size:"medium"}},[t._v("确定")])],1)],2)],1),e("div",{staticClass:"form-input"},[e("span",{staticClass:"text1"},[t._v(" 大话西游创新阅读平台注册 ")]),e("div",{staticClass:"input-item"},[e("span",{staticClass:"tips"},[t._v("姓名")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.student.name,expression:"student.name"}],staticClass:"input-text",domProps:{value:t.student.name},on:{input:function(e){e.target.composing||t.$set(t.student,"name",e.target.value)}}})]),e("div",{staticClass:"input-item"},[e("span",{staticClass:"tips"},[t._v("手机号码")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.student.phone,expression:"student.phone"}],staticClass:"input-text",domProps:{value:t.student.phone},on:{input:function(e){e.target.composing||t.$set(t.student,"phone",e.target.value)}}})]),e("div",{staticClass:"input-item"},[e("span",{staticClass:"tips"},[t._v("身份证号")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.student.idCard,expression:"student.idCard"}],staticClass:"input-text",domProps:{value:t.student.idCard},on:{input:function(e){e.target.composing||t.$set(t.student,"idCard",e.target.value)}}})]),e("button",{staticClass:"sub-btn",attrs:{disabled:t.submitState},on:{click:t.submitStudent}},[t._v("完成")])])],1)},f=[],p=n(4724),m={name:"HomeView",components:{},data(){return{student:{name:"",phone:"",idCard:""},loading:!1,submitState:!1}},methods:{submitStudent(){(0,p.tS)(this.student).then((t=>{this.submitState=!0,this.loading=!0,setTimeout((()=>{this.$message.success("注册成功"),this.loading=!1}),1e4)}))}},created(){document.title="注册"}},v=m,h=(0,u.Z)(v,c,f,!1,null,"70c9ffae",null),g=h.exports;r["default"].use(l.ZP);const b=[{path:"/",name:"home",component:g},{path:"/dataListStudent",name:"about",component:()=>n.e(443).then(n.bind(n,9162))}],y=new l.ZP({routes:b});var C=y,w=n(3822);r["default"].use(w.ZP);var S=new w.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),_=n(8499),x=n.n(_),k=n(4161),O={install(t){var e=k.Z.create({});e.interceptors.request.use((t=>t)),k.Z.defaults.baseURL="https://www.vshanxi.cn:9112/",k.Z.defaults.headers.satoken=localStorage.getItem("token"),t.prototype.$http=e}},P=O;r["default"].use(x()),r["default"].config.productionTip=!1,r["default"].use(P),new r["default"]({router:C,store:S,render:t=>t(d)}).$mount("#app")}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,loaded:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=t,function(){n.amdO={}}(),function(){var t=[];n.O=function(e,r,i,o){if(!r){var u=1/0;for(l=0;l<t.length;l++){r=t[l][0],i=t[l][1],o=t[l][2];for(var a=!0,s=0;s<r.length;s++)(!1&o||u>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[s])}))?r.splice(s--,1):(a=!1,o<u&&(u=o));if(a){t.splice(l--,1);var d=i();void 0!==d&&(e=d)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[r,i,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/about.5bb531c5.js"}}(),function(){n.miniCssF=function(t){return"css/about.c7a52656.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="student_input:";n.l=function(r,i,o,u){if(t[r])t[r].push(i);else{var a,s;if(void 0!==o)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var c=d[l];if(c.getAttribute("src")==r||c.getAttribute("data-webpack")==e+o){a=c;break}}a||(s=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",e+o),a.src=r),t[r]=[i];var f=function(e,n){a.onerror=a.onload=null,clearTimeout(p);var i=t[r];if(delete t[r],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),s&&document.head.appendChild(a)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,r,i){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var u=function(n){if(o.onerror=o.onload=null,"load"===n.type)r();else{var u=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.href||e,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=u,s.request=a,o.parentNode&&o.parentNode.removeChild(o),i(s)}};return o.onerror=o.onload=u,o.href=e,n?n.parentNode.insertBefore(o,n.nextSibling):document.head.appendChild(o),o},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var i=n[r],o=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===t||o===e))return i}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){i=u[r],o=i.getAttribute("data-href");if(o===t||o===e)return i}},r=function(r){return new Promise((function(i,o){var u=n.miniCssF(r),a=n.p+u;if(e(u,a))return i();t(r,a,null,i,o)}))},i={143:0};n.f.miniCss=function(t,e){var n={443:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=r(t).then((function(){i[t]=0}),(function(e){throw delete i[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,r){var i=n.o(t,e)?t[e]:void 0;if(0!==i)if(i)r.push(i[2]);else{var o=new Promise((function(n,r){i=t[e]=[n,r]}));r.push(i[2]=o);var u=n.p+n.u(e),a=new Error,s=function(r){if(n.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+e+" failed.\n("+o+": "+u+")",a.name="ChunkLoadError",a.type=o,a.request=u,i[1](a)}};n.l(u,s,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,o,u=r[0],a=r[1],s=r[2],d=0;if(u.some((function(e){return 0!==t[e]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(s)var l=s(n)}for(e&&e(r);d<u.length;d++)o=u[d],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(l)},r=self["webpackChunkstudent_input"]=self["webpackChunkstudent_input"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(4579)}));r=n.O(r)})();
//# sourceMappingURL=app.f4b65fa0.js.map