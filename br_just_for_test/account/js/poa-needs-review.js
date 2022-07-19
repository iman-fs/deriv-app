/*! For license information please see poa-needs-review.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/shared","@deriv/translations","react"],t):"object"==typeof exports?exports["@deriv/account"]=t(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):e["@deriv/account"]=t(e["@deriv/components"],e["@deriv/shared"],e["@deriv/translations"],e.react)}(self,((e,t,n,o)=>(()=>{var r={"./Components/icon-message-content/index.js":(e,t,n)=>{"use strict";n.d(t,{default:()=>d});var o=n("react"),r=n.n(o),s=n("../../../node_modules/prop-types/index.js"),a=n("../../../node_modules/classnames/index.js"),i=n.n(a),c=n("@deriv/components"),p=n("@deriv/shared");function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(e){var t=e.children,n=e.className,o=e.full_width,s=e.icon,a=e.icon_row,u=e.message,d=e.text;return r().createElement(c.Div100vhContainer,{className:i()("account-management__message-wrapper",{"account-management__message-wrapper-full-width":o}),is_disabled:(0,p.isDesktop)(),height_offset:"110px"},r().createElement("div",{className:i()("account-management__message-content",l({},"".concat(n,"__message-content"),n))},s&&r().createElement("div",{className:i()("account-management__message-icon",l({},"".concat(n,"__message-icon"),n))},s),a&&r().createElement("div",null,a),r().createElement(c.Text,{as:"div",color:"general",weight:"bold",size:"s",align:"center",className:i()("account-management__message",l({},"".concat(n,"__message"),n))},u),d&&r().createElement("div",{className:"account-management__text-container"},r().createElement(c.Text,{className:i()(l({},"".concat(n,"__text"),n)),as:"p",size:"xs",align:"center"},d)),t))};u.propTypes={children:s.PropTypes.oneOfType([s.PropTypes.object,s.PropTypes.array,s.PropTypes.bool]),className:s.PropTypes.string,full_width:s.PropTypes.bool,icon:s.PropTypes.object,message:s.PropTypes.oneOfType([s.PropTypes.node,s.PropTypes.string,s.PropTypes.object]),text:s.PropTypes.oneOfType([s.PropTypes.string,s.PropTypes.element])};const d=u},"./Components/poa/continue-trading-button/continue-trading-button.jsx":(e,t,n)=>{"use strict";n.d(t,{M:()=>i});var o=n("@deriv/components"),r=n("@deriv/translations"),s=n("react"),a=n.n(s),i=function(){return a().createElement(o.ButtonLink,{className:"account-management__button",to:"/"},a().createElement(o.Text,{className:"dc-btn__text",as:"p",weight:"bold","data-testid":"continue_btn_text"},(0,r.localize)("Continue trading")))}},"./Components/poi/poi-button/index.js":(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n("./Components/poi/poi-button/poi-button.jsx").x},"./Components/poi/poi-button/poi-button.jsx":(e,t,n)=>{"use strict";n.d(t,{x:()=>i});var o=n("@deriv/components"),r=n("@deriv/translations"),s=n("react"),a=n.n(s),i=function(){return a().createElement(o.ButtonLink,{className:"account-management__button",to:"/account/proof-of-identity"},a().createElement(o.Text,{className:"dc-btn__text",weight:"bold",as:"p"},(0,r.localize)("Proof of identity")))}},"../../../node_modules/classnames/index.js":(e,t)=>{var n;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n)){if(n.length){var a=r.apply(null,n);a&&e.push(a)}}else if("object"===s)if(n.toString===Object.prototype.toString)for(var i in n)o.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},"../../../node_modules/prop-types/factoryWithThrowingShims.js":(e,t,n)=>{"use strict";var o=n("../../../node_modules/prop-types/lib/ReactPropTypesSecret.js");function r(){}function s(){}s.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,s,a){if(a!==o){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:r};return n.PropTypes=n,n}},"../../../node_modules/prop-types/index.js":(e,t,n)=>{e.exports=n("../../../node_modules/prop-types/factoryWithThrowingShims.js")()},"../../../node_modules/prop-types/lib/ReactPropTypesSecret.js":e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"@deriv/components":t=>{"use strict";t.exports=e},"@deriv/shared":e=>{"use strict";e.exports=t},"@deriv/translations":e=>{"use strict";e.exports=n},react:e=>{"use strict";e.exports=o}},s={};function a(e){var t=s[e];if(void 0!==t)return t.exports;var n=s[e]={exports:{}};return r[e](n,n.exports,a),n.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var i={};return(()=>{"use strict";a.d(i,{default:()=>p});var e=a("@deriv/components"),t=a("@deriv/translations"),n=a("react"),o=a.n(n),r=a("./Components/icon-message-content/index.js"),s=a("./Components/poi/poi-button/index.js"),c=a("./Components/poa/continue-trading-button/continue-trading-button.jsx");const p=function(n){var a=n.needs_poi,i=n.is_description_enabled,p=void 0===i||i,l=(0,t.localize)("Your proof of address was submitted successfully");return a?o().createElement(r.default,{message:l,icon:o().createElement(e.Icon,{icon:"IcPoaVerified",size:128})},p&&o().createElement(o().Fragment,null,o().createElement("div",{className:"account-management__text-container"},o().createElement(e.Text,{align:"center",size:"xs",as:"p"},(0,t.localize)("Your document is being reviewed, please check back in 1-3 days.")),o().createElement(e.Text,{align:"center",size:"xs",as:"p"},(0,t.localize)("You must also submit a proof of identity."))),o().createElement(s.Z,null))):o().createElement(r.default,{message:l,text:(0,t.localize)("Your document is being reviewed, please check back in 1-3 days."),icon:o().createElement(e.Icon,{icon:"IcPoaVerified",size:128})},p&&o().createElement(c.M,null))}})(),i.default})()));