/*! For license information please see form-sub-header.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@deriv/components"),require("react")):"function"==typeof define&&define.amd?define(["@deriv/components","react"],t):"object"==typeof exports?exports["@deriv/account"]=t(require("@deriv/components"),require("react")):e["@deriv/account"]=t(e["@deriv/components"],e.react)}(self,((e,t)=>(()=>{var r={"../../../node_modules/classnames/index.js":(e,t)=>{var r;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)){if(r.length){var a=n.apply(null,r);a&&e.push(a)}}else if("object"===s)if(r.toString===Object.prototype.toString)for(var c in r)o.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},"@deriv/components":t=>{"use strict";t.exports=e},react:e=>{"use strict";e.exports=t}},o={};function n(e){var t=o[e];if(void 0!==t)return t.exports;var s=o[e]={exports:{}};return r[e](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var s={};return(()=>{"use strict";n.d(s,{default:()=>c});var e=n("../../../node_modules/classnames/index.js"),t=n.n(e),r=n("react"),o=n.n(r),a=n("@deriv/components");const c=function(e){var r=e.title,n=e.subtitle,s=e.description,c=r.replace(/\s+/g,"-").toLowerCase();return o().createElement(o().Fragment,null,o().createElement("div",{className:t()("account-form__header",c,{"account-form__header--has-description":!!s}),"data-testid":"form-sub-header"},o().createElement("div",{className:"account-form__header-section"},o().createElement(a.Text,{as:"h1",color:"prominent",weight:"bold",size:"xs",className:"account-form__title"},r),n&&o().createElement(a.Text,{as:"h2",size:"xxxs",color:"prominent",className:"account-form__subtitle"},n))),s&&o().createElement(a.Text,{as:"p",className:"account-form__description"},s))}})(),s.default})()));