(self.webpackChunk=self.webpackChunk||[]).push([[8172],{50418:(e,t,r)=>{var o;self,o=(e,t,r,o,n,a,i,l,u,s)=>(()=>{"use strict";var d,f,c,p,b,h,m={1336:t=>{t.exports=e},57:e=>{e.exports=t},5770:e=>{e.exports=r},2273:e=>{e.exports=o},8310:e=>{e.exports=n},7661:e=>{e.exports=a},259:e=>{e.exports=i},5264:e=>{e.exports=l},8156:e=>{e.exports=u},7111:e=>{e.exports=s}},v={};function g(e){var t=v[e];if(void 0!==t)return t.exports;var r=v[e]={exports:{}};return m[e].call(r.exports,r,r.exports,g),r.exports}g.m=m,g.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return g.d(t,{a:t}),t},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,g.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var r=Object.create(null);g.r(r);var o={};d=d||[null,f({}),f([]),f(f)];for(var n=2&t&&e;"object"==typeof n&&!~d.indexOf(n);n=f(n))Object.getOwnPropertyNames(n).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,g.d(r,o),r},g.d=(e,t)=>{for(var r in t)g.o(t,r)&&!g.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},g.f={},g.e=e=>Promise.all(Object.keys(g.f).reduce(((t,r)=>(g.f[r](e,t),t)),[])),g.u=e=>"bot/js/bot."+({101:"martingale-xml",113:"oscars_grind-xml",297:"dbot-collection",406:"dalembert-xml",558:"bot-web-ui-app"}[e]||e)+"."+{101:"98961f43196c541b4def",113:"13d521f3ad60a8e3edc4",207:"44c428724f324be8a367",297:"a81cf2b2fc5fdec2d862",406:"cf8480d931634777dec3",558:"c7ca692135d743dd1ce3"}[e]+".js",g.miniCssF=e=>"bot/css/bot.bot-web-ui-app.59f833535bace781fc60.css",g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),g.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c={},p="@deriv/bot-web-ui:",g.l=(e,t,r,o)=>{if(c[e])c[e].push(t);else{var n,a;if(void 0!==r)for(var i=document.getElementsByTagName("script"),l=0;l<i.length;l++){var u=i[l];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==p+r){n=u;break}}n||(a=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,g.nc&&n.setAttribute("nonce",g.nc),n.setAttribute("data-webpack",p+r),n.src=e),c[e]=[t];var s=(t,r)=>{n.onerror=n.onload=null,clearTimeout(d);var o=c[e];if(delete c[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(r))),t)return t(r)},d=setTimeout(s.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=s.bind(null,n.onerror),n.onload=s.bind(null,n.onload),a&&document.head.appendChild(n)}},g.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},g.p="/br_just_for_test/",b=e=>new Promise(((t,r)=>{var o=g.miniCssF(e),n=g.p+o;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=(i=r[o]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(n===e||n===t))return i}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){var i;if((n=(i=a[o]).getAttribute("data-href"))===e||n===t)return i}})(o,n))return t();((e,t,r,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=a=>{if(n.onerror=n.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=l,n.parentNode.removeChild(n),o(u)}},n.href=t,document.head.appendChild(n)})(e,n,t,r)})),h={179:0},g.f.miniCss=(e,t)=>{h[e]?t.push(h[e]):0!==h[e]&&{558:1}[e]&&t.push(h[e]=b(e).then((()=>{h[e]=0}),(t=>{throw delete h[e],t})))},(()=>{var e={179:0};g.f.j=(t,r)=>{var o=g.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var n=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=n);var a=g.p+g.u(t),i=new Error;g.l(a,(r=>{if(g.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,o[1](i)}}),"chunk-"+t,t)}};var t=(t,r)=>{var o,n,[a,i,l]=r,u=0;if(a.some((t=>0!==e[t]))){for(o in i)g.o(i,o)&&(g.m[o]=i[o]);l&&l(g)}for(t&&t(r);u<a.length;u++)n=a[u],g.o(e,n)&&e[n]&&e[n][0](),e[n]=0},r=self.webpackChunk_deriv_bot_web_ui=self.webpackChunk_deriv_bot_web_ui||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var y={};return(()=>{g.d(y,{default:()=>o});var e=g(8156),t=g(5770),r=g(1336);const o=(0,t.makeLazyLoader)((function(){return(0,t.moduleLoader)((function(){return Promise.all([g.e(207),g.e(558)]).then(g.bind(g,6789))}))}),(function(){return e.createElement(r.Loading,null)}))()})(),y.default})(),e.exports=o(r(34302),r(38605),r(42413),r(20374),r(40841),r(44066),r(31025),r(16),r(32735),r(12788))}}]);