/*! For license information please see form-body.js.LICENSE.txt */
!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("@deriv/components"),require("@deriv/shared"),require("react")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/shared","react"],r):"object"==typeof exports?exports["@deriv/account"]=r(require("@deriv/components"),require("@deriv/shared"),require("react")):e["@deriv/account"]=r(e["@deriv/components"],e["@deriv/shared"],e.react)}(self,((e,r,t)=>(()=>{var o={"../../../node_modules/classnames/index.js":(e,r)=>{var t;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var s=typeof t;if("string"===s||"number"===s)e.push(t);else if(Array.isArray(t)){if(t.length){var a=n.apply(null,t);a&&e.push(a)}}else if("object"===s)if(t.toString===Object.prototype.toString)for(var c in t)o.call(t,c)&&t[c]&&e.push(c);else e.push(t.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(t=function(){return n}.apply(r,[]))||(e.exports=t)}()},"@deriv/components":r=>{"use strict";r.exports=e},"@deriv/shared":e=>{"use strict";e.exports=r},react:e=>{"use strict";e.exports=t}},n={};function s(e){var r=n[e];if(void 0!==r)return r.exports;var t=n[e]={exports:{}};return o[e](t,t.exports,s),t.exports}s.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return s.d(r,{a:r}),r},s.d=(e,r)=>{for(var t in r)s.o(r,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},s.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);var a={};return(()=>{"use strict";s.d(a,{default:()=>l});var e=s("@deriv/components"),r=s("react"),t=s.n(r),o=s("../../../node_modules/classnames/index.js"),n=s.n(o),c=s("@deriv/shared"),i=function(r){var o=r.children,s=r.className,a=r.scroll_offset;return t().createElement(e.ThemedScrollbars,{is_bypassed:(0,c.isMobile)(),height:a?"calc(100% - ".concat(a,")"):"100%"},t().createElement("div",{className:n()("account__scrollbars_container",s)},o))};const l=function(r){var o=r.children,n=r.scroll_offset;return t().createElement(t().Fragment,null,t().createElement(e.DesktopWrapper,null,t().createElement(i,{className:"account__scrollbars_container--grid-layout",scroll_offset:n},o)),t().createElement(e.MobileWrapper,null,t().createElement(e.Div100vhContainer,{className:"account__scrollbars_container--grid-layout",height_offset:n||"200px"},o)))}})(),a.default})()));