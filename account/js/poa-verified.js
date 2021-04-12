/*! For license information please see poa-verified.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/shared","@deriv/translations","react"],t):"object"==typeof exports?exports["@deriv/account"]=t(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):e["@deriv/account"]=t(e["@deriv/components"],e["@deriv/shared"],e["@deriv/translations"],e.react)}(self,(function(e,t,n,o){return(()=>{var r={"./Components/icon-message-content/index.js":(e,t,n)=>{"use strict";n.d(t,{default:()=>u});var o=n("react"),r=n.n(o),s=n("../../../node_modules/prop-types/index.js"),a=n("../../../node_modules/classnames/index.js"),i=n.n(a),c=n("@deriv/components"),p=n("@deriv/shared");function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(e){var t=e.children,n=e.className,o=e.full_width,s=e.icon,a=e.icon_row,l=e.message,u=e.text;return r().createElement(c.Div100vhContainer,{className:i()("account-management__message-wrapper",{"account-management__message-wrapper-full-width":o}),is_disabled:(0,p.isDesktop)(),height_offset:"110px"},r().createElement("div",{className:i()("account-management__message-content",d({},"".concat(n,"__message-content"),n))},s&&r().createElement("div",{className:i()("account-management__message-icon",d({},"".concat(n,"__message-icon"),n))},s),a&&r().createElement("div",null,a),r().createElement(c.Text,{as:"div",color:"general",weight:"bold",size:"s",align:"center",className:i()("account-management__message",d({},"".concat(n,"__message"),n))},l),u&&r().createElement("div",{className:"account-management__text-container"},r().createElement(c.Text,{className:i()(d({},"".concat(n,"__text"),n)),as:"p",size:"xs",align:"center"},u)),t))};l.propTypes={children:s.PropTypes.oneOfType([s.PropTypes.object,s.PropTypes.array]),className:s.PropTypes.string,full_width:s.PropTypes.bool,icon:s.PropTypes.object,message:s.PropTypes.oneOfType([s.PropTypes.node,s.PropTypes.string,s.PropTypes.object]),text:s.PropTypes.string};const u=l},"./Components/poa-continue-trading-button/continue-trading-button.jsx":(e,t,n)=>{"use strict";n.d(t,{M:()=>i});var o=n("@deriv/components"),r=n("@deriv/translations"),s=n("react"),a=n.n(s),i=function(){return a().createElement(o.ButtonLink,{to:"/"},a().createElement(o.Text,{className:"dc-btn__text",as:"p",weight:"bold"},(0,r.localize)("Continue trading")))}},"./Components/poi-button/poi-button.jsx":(e,t,n)=>{"use strict";n.d(t,{x:()=>i});var o=n("@deriv/components"),r=n("@deriv/translations"),s=n("react"),a=n.n(s),i=function(){return a().createElement(o.ButtonLink,{className:"account-management__button",to:"/account/proof-of-identity"},a().createElement(o.Text,{className:"dc-btn__text",weight:"bold",as:"p"},(0,r.localize)("Proof of identity")))}},"../../../node_modules/classnames/index.js":(e,t)=>{var n;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n)&&n.length){var a=r.apply(null,n);a&&e.push(a)}else if("object"===s)for(var i in n)o.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},"../../../node_modules/prop-types/factoryWithThrowingShims.js":(e,t,n)=>{"use strict";var o=n("../../../node_modules/prop-types/lib/ReactPropTypesSecret.js");function r(){}function s(){}s.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,s,a){if(a!==o){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:r};return n.PropTypes=n,n}},"../../../node_modules/prop-types/index.js":(e,t,n)=>{e.exports=n("../../../node_modules/prop-types/factoryWithThrowingShims.js")()},"../../../node_modules/prop-types/lib/ReactPropTypesSecret.js":e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"@deriv/components":t=>{"use strict";t.exports=e},"@deriv/shared":e=>{"use strict";e.exports=t},"@deriv/translations":e=>{"use strict";e.exports=n},react:e=>{"use strict";e.exports=o}},s={};function a(e){var t=s[e];if(void 0!==t)return t.exports;var n=s[e]={exports:{}};return r[e](n,n.exports,a),n.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var i={};return(()=>{"use strict";a.d(i,{default:()=>u});var e=a("react"),t=a.n(e),n=a("../../../node_modules/prop-types/index.js"),o=a("@deriv/components"),r=a("@deriv/shared"),s=a("@deriv/translations"),c=a("./Components/poi-button/poi-button.jsx"),p=a("./Components/icon-message-content/index.js"),d=a("./Components/poa-continue-trading-button/continue-trading-button.jsx"),l=function(e){var n=e.needs_poi,a=e.is_description_enabled,i=void 0===a||a,l=t().useContext(r.PlatformContext).is_dashboard,u=(0,s.localize)("Your proof of address is verified");return n?t().createElement("div",{className:l&&"account-management__container-dashboard"},t().createElement(p.default,{message:u,text:(0,s.localize)("To continue trading, you must also submit a proof of identity."),icon:t().createElement(o.Icon,{icon:"IcPoaVerified",size:128}),className:l&&"paaccount-management-dashboard"},t().createElement(c.x,null))):t().createElement("div",{className:l&&"account-management__container-dashboard"},t().createElement(p.default,{message:u,icon:t().createElement(o.Icon,{icon:"IcPoaVerified",size:128,className:l&&"account-management-dashboard"})},!i&&t().createElement(d.M,null)))};l.PropTypes={needs_poi:n.PropTypes.bool,is_description_disabled:n.PropTypes.bool};const u=l})(),i.default})()}));