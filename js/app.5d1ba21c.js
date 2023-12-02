(function(){"use strict";var e={7516:function(e,n,t){var r=t(9963),o=t(2954),i=t(2387),a=t(6391),u=t(2389),c=t(6038),f=t(7562),l=t(5121),s=t(2346);t(8877);function d(e){const n=e.toString().split(".");return n[0]=n[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),n.join(".")}var p=t(6252);const m={class:"container py-md-5"},h=(0,p._)("div",{class:"paperOverlay"},null,-1);function b(e,n){const t=(0,p.up)("router-view");return(0,p.wg)(),(0,p.iD)(p.HY,null,[(0,p._)("section",m,[(0,p.Wm)(t)]),h],64)}var v=t(3744);const g={},y=(0,v.Z)(g,[["render",b]]);var w=y,O=t(2201);const P=[{path:"/",name:"home",component:()=>Promise.all([t.e(424),t.e(338)]).then(t.bind(t,5338)),children:[{path:"/",name:"index",component:()=>t.e(755).then(t.bind(t,7408))},{path:"products",name:"商品",component:()=>Promise.all([t.e(560),t.e(878),t.e(457)]).then(t.bind(t,7066))},{path:"about",name:"關於",component:()=>t.e(991).then(t.bind(t,6187))},{path:"login",name:"登入",component:()=>Promise.all([t.e(560),t.e(904)]).then(t.bind(t,5904))},{path:"checkout",name:"結帳",component:()=>Promise.all([t.e(878),t.e(302)]).then(t.bind(t,7134))},{path:"user",name:"使用者",component:()=>Promise.all([t.e(878),t.e(574)]).then(t.bind(t,1309))}]},{path:"/dashboard",name:"後台",component:()=>Promise.all([t.e(560),t.e(424),t.e(495)]).then(t.bind(t,4495))}],j=(0,O.p7)({history:(0,O.r5)(),routes:P});var k=j;c.p8.registerPlugin(f.TextPlugin),Object.keys(i.ZP).forEach((e=>{(0,o.aH)(e,i.ZP[e])})),(0,o.jQ)({generateMessage:(0,a.NC)({zh_TW:u}),validateOnInput:!0}),(0,a.i_)("zh_TW");const E=(0,r.ri)(w);E.config.globalProperties.$toCurrency=d,E.component("VField",o.gN),E.component("VForm",o.l0),E.component("ErrorMessage",o.Bc),E.use(s.Z,l.Z),E.use(k),k.afterEach((()=>{window.scrollTo(0,0)})),E.mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(n,r,o,i){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(l--,1);var f=o();void 0!==f&&(n=f)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{302:"6ea1512d",338:"59309f5a",424:"f047d179",457:"730f4902",495:"6a6a5b54",560:"cbca8a81",574:"2d67bfb5",755:"86107ff7",878:"27bc1061",904:"d21405da",991:"3dcc014d"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{302:"a7b52026",338:"4bae08f2",457:"2507277c",574:"15d0a847",755:"a664a954",904:"c1296dae",991:"31a6f2e1"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="web:";t.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var s=f[l];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==n+i){u=s;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+i),u.src=r),e[r]=[o];var d=function(n,t){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(t){if(i.onerror=i.onload=null,"load"===t.type)r();else{var a=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,i.parentNode&&i.parentNode.removeChild(i),o(c)}};return i.onerror=i.onload=a,i.href=n,t?t.parentNode.insertBefore(i,t.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var a=t.miniCssF(r),u=t.p+a;if(n(a,u))return o();e(r,u,null,o,i)}))},o={143:0};t.f.miniCss=function(e,n){var t={302:1,338:1,457:1,574:1,755:1,904:1,991:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var a=t.p+t.u(n),u=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};t.l(a,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,a=r[0],u=r[1],c=r[2],f=0;if(a.some((function(n){return 0!==e[n]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(c)var l=c(t)}for(n&&n(r);f<a.length;f++)i=a[f],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},r=self["webpackChunkweb"]=self["webpackChunkweb"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(7516)}));r=t.O(r)})();
//# sourceMappingURL=app.5d1ba21c.js.map