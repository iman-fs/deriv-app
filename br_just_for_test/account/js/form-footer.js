/*! For license information please see form-footer.js.LICENSE.txt */
!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("@deriv/shared"),require("react")):"function"==typeof define&&define.amd?define(["@deriv/shared","react"],r):"object"==typeof exports?exports["@deriv/account"]=r(require("@deriv/shared"),require("react")):e["@deriv/account"]=r(e["@deriv/shared"],e.react)}(self,((e,r)=>(()=>{var t={"../../../node_modules/classnames/index.js":(e,r)=>{var t;!function(){"use strict";var o={}.hasOwnProperty;function s(){for(var e=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var n=typeof t;if("string"===n||"number"===n)e.push(t);else if(Array.isArray(t)){if(t.length){var a=s.apply(null,t);a&&e.push(a)}}else if("object"===n)if(t.toString===Object.prototype.toString)for(var p in t)o.call(t,p)&&t[p]&&e.push(p);else e.push(t.toString())}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(t=function(){return s}.apply(r,[]))||(e.exports=t)}()},"../../../node_modules/prop-types/factoryWithThrowingShims.js":(e,r,t)=>{"use strict";var o=t("../../../node_modules/prop-types/lib/ReactPropTypesSecret.js");function s(){}function n(){}n.resetWarningCache=s,e.exports=function(){function e(e,r,t,s,n,a){if(a!==o){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}function r(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:n,resetWarningCache:s};return t.PropTypes=t,t}},"../../../node_modules/prop-types/index.js":(e,r,t)=>{e.exports=t("../../../node_modules/prop-types/factoryWithThrowingShims.js")()},"../../../node_modules/prop-types/lib/ReactPropTypesSecret.js":e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"@deriv/shared":r=>{"use strict";r.exports=e},react:e=>{"use strict";e.exports=r}},o={};function s(e){var r=o[e];if(void 0!==r)return r.exports;var n=o[e]={exports:{}};return t[e](n,n.exports,s),n.exports}s.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return s.d(r,{a:r}),r},s.d=(e,r)=>{for(var t in r)s.o(r,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},s.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);var n={};return(()=>{"use strict";s.d(n,{default:()=>c});var e=s("react"),r=s.n(e),t=s("../../../node_modules/prop-types/index.js"),o=s("@deriv/shared"),a=s("../../../node_modules/classnames/index.js"),p=s.n(a),i=function(e){var t=e.children,s=e.className,n=r().useContext(o.PlatformContext).is_appstore;return r().createElement("div",{className:p()("account-form__footer",s,{"account-form__footer--dashboard":n}),"data-testid":"form-footer-container"},t)};i.prototype={children:t.PropTypes.object};const c=i})(),n.default})()));