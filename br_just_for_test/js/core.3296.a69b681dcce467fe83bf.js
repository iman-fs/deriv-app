(self.webpackChunk=self.webpackChunk||[]).push([[3296],{86333:(e,n,t)=>{"use strict";t.d(n,{R:()=>f});function r(e,n,t,r){return new(t||(t=Promise))((function(o,i){function u(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(u,a)}c((r=r.apply(e,n||[])).next())}))}function o(e,n){var t,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(e,u)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}Object.create;function i(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,i=t.call(e),u=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return u}Object.create;var u=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);function a(e,n){var t=function(e){var n=e.name;if(n&&-1!==n.lastIndexOf(".")&&!e.type){var t=n.split(".").pop().toLowerCase(),r=u.get(t);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof t.path){var r=e.webkitRelativePath;Object.defineProperty(t,"path",{value:"string"==typeof n?n:"string"==typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}var c=[".DS_Store","Thumbs.db"];function f(e){return r(this,void 0,void 0,(function(){return o(this,(function(n){return[2,(t=e,t.dataTransfer&&e.dataTransfer?s(e.dataTransfer,e.type):d(e))];var t}))}))}function d(e){return(null!==e.target&&e.target.files?p(e.target.files):[]).map((function(e){return a(e)}))}function s(e,n){return r(this,void 0,void 0,(function(){var t;return o(this,(function(r){switch(r.label){case 0:return e.items?(t=p(e.items).filter((function(e){return"file"===e.kind})),"drop"!==n?[2,t]:[4,Promise.all(t.map(v))]):[3,2];case 1:return[2,l(m(r.sent()))];case 2:return[2,l(p(e.files).map((function(e){return a(e)})))]}}))}))}function l(e){return e.filter((function(e){return-1===c.indexOf(e.name)}))}function p(e){for(var n=[],t=0;t<e.length;t++){var r=e[t];n.push(r)}return n}function v(e){if("function"!=typeof e.webkitGetAsEntry)return h(e);var n=e.webkitGetAsEntry();return n&&n.isDirectory?b(n):h(e)}function m(e){return e.reduce((function(e,n){return function(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(i(arguments[n]));return e}(e,Array.isArray(n)?m(n):[n])}),[])}function h(e){var n=e.getAsFile();if(!n)return Promise.reject(e+" is not a File");var t=a(n);return Promise.resolve(t)}function y(e){return r(this,void 0,void 0,(function(){return o(this,(function(n){return[2,e.isDirectory?b(e):g(e)]}))}))}function b(e){var n=e.createReader();return new Promise((function(e,t){var i=[];!function u(){var a=this;n.readEntries((function(n){return r(a,void 0,void 0,(function(){var r,a,c;return o(this,(function(o){switch(o.label){case 0:if(n.length)return[3,5];o.label=1;case 1:return o.trys.push([1,3,,4]),[4,Promise.all(i)];case 2:return r=o.sent(),e(r),[3,4];case 3:return a=o.sent(),t(a),[3,4];case 4:return[3,6];case 5:c=Promise.all(n.map(y)),i.push(c),u(),o.label=6;case 6:return[2]}}))}))}),(function(e){t(e)}))}()}))}function g(e){return r(this,void 0,void 0,(function(){return o(this,(function(n){return[2,new Promise((function(n,t){e.file((function(t){var r=a(t,e.fullPath);n(r)}),(function(e){t(e)}))}))]}))}))}},65014:(e,n,t)=>{"use strict";t.d(n,{GV:()=>u,Gv:()=>i,Sk:()=>r,ZO:()=>o});var r="data-focus-lock",o="data-focus-lock-disabled",i="data-no-focus-lock",u="data-autofocus-inside"},48083:(e,n,t)=>{"use strict";t.d(n,{S:()=>u});var r=t(80574),o=t(26606),i=function(e){return Boolean((0,o.q)(e.querySelectorAll("iframe")).some((function(e){return e===document.activeElement})))},u=function(e){var n=document&&document.activeElement;return!(!n||n.dataset&&n.dataset.focusGuard)&&(0,r.K)(e).reduce((function(e,t){return e||t.contains(n)||i(t)}),!1)}},79283:(e,n,t)=>{"use strict";t.d(n,{U:()=>i});var r=t(65014),o=t(26606),i=function(){return document&&(0,o.q)(document.querySelectorAll("["+r.Gv+"]")).some((function(e){return e.contains(document.activeElement)}))}},48861:(e,n,t)=>{"use strict";t.d(n,{E:()=>a});var r=t(80574),o=t(2920),i=t(10079),u=t(67506),a=function(e){var n=(0,r.K)(e).filter(i.IS),t=(0,u.V0)(e,e,n),a=new Map,c=(0,o.dH)([t],a,!0),f=(0,o.dH)(n,a).filter((function(e){var n=e.node;return(0,i.IS)(n)})).map((function(e){return e.node}));return c.map((function(e){var n=e.node;return{node:n,index:e.index,lockItem:f.indexOf(n)>=0,guard:(0,i.Z9)(n)}}))}},30221:(e,n,t)=>{"use strict";t.d(n,{ZP:()=>h});var r=function(e){return"INPUT"===e.tagName&&"radio"===e.type},o=function(e,n){return r(e)&&e.name?function(e,n){return n.filter(r).filter((function(n){return n.name===e.name})).filter((function(e){return e.checked}))[0]||e}(e,n):e},i=function(e){return e[0]&&e.length>1?o(e[0],e):e[0]},u=function(e,n){return e.length>1?e.indexOf(o(e[n],e)):n},a=t(10079),c="NEW_FOCUS",f=function(e,n,t,r){var i=e.length,f=e[0],d=e[i-1],s=(0,a.Z9)(t);if(!(e.indexOf(t)>=0)){var l,p,v=n.indexOf(t),m=r?n.indexOf(r):v,h=r?e.indexOf(r):-1,y=v-m,b=n.indexOf(f),g=n.indexOf(d),w=(l=n,p=new Set,l.forEach((function(e){return p.add(o(e,l))})),l.filter((function(e){return p.has(e)}))),x=w.indexOf(t)-(r?w.indexOf(r):v),N=u(e,0),O=u(e,i-1);return-1===v||-1===h?c:!y&&h>=0?h:v<=b&&s&&Math.abs(y)>1?O:v>=g&&s&&Math.abs(y)>1?N:y&&Math.abs(x)>1?h:v<=b?O:v>g?N:y?Math.abs(y)>1?h:(i+h+y)%i:void 0}},d=t(80574),s=t(2920),l=t(67506),p=function(e,n){var t=document&&document.activeElement,r=(0,d.K)(e).filter(a.IS),o=(0,l.V0)(t||e,e,r),u=new Map,p=(0,s.fF)(r,u),v=(0,s.dH)(r,u).filter((function(e){var n=e.node;return(0,a.IS)(n)}));if(v[0]||(v=p)[0]){var m,h,y,b,g=(0,s.fF)([o],u).map((function(e){return e.node})),w=(m=g,h=v,y=new Map,h.forEach((function(e){return y.set(e.node,e)})),m.map((function(e){return y.get(e)})).filter(a.$K)),x=w.map((function(e){return e.node})),N=f(x,g,t,n);if(N===c){var O=p.map((function(e){return e.node})).filter((b=(0,l.o$)(r,u),function(e){return e.autofocus||e.dataset&&!!e.dataset.autofocus||b.indexOf(e)>=0}));return{node:O&&O.length?i(O):i(x)}}return void 0===N?N:w[N]}},v=0,m=!1;const h=function(e,n){var t,r=p(e,n);if(!m&&r){if(v>2)return console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),m=!0,void setTimeout((function(){m=!1}),1);v++,(t=r.node).focus(),"contentWindow"in t&&t.contentWindow&&t.contentWindow.focus(),v--}}},2920:(e,n,t)=>{"use strict";t.d(n,{fF:()=>p,dH:()=>l,ir:()=>v});var r=t(26606),o=t(10079),i=function(e,n){var t=e.tabIndex-n.tabIndex,r=e.index-n.index;if(t){if(!e.tabIndex)return 1;if(!n.tabIndex)return-1}return t||r},u=function(e,n,t){return(0,r.q)(e).map((function(e,n){return{node:e,index:n,tabIndex:t&&-1===e.tabIndex?(e.dataset||{}).focusGuard?0:-1:e.tabIndex}})).filter((function(e){return!n||e.tabIndex>=0})).sort(i)},a=t(65014),c=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"].join(","),f=c+", [data-focus-guard]",d=function(e,n){return e.reduce((function(e,t){return e.concat((0,r.q)(t.querySelectorAll(n?f:c)),t.parentNode?(0,r.q)(t.parentNode.querySelectorAll(c)).filter((function(e){return e===t})):[])}),[])},s=function(e,n){return(0,r.q)(e).filter((function(e){return(0,o.bh)(n,e)})).filter((function(e){return(0,o.Zo)(e)}))},l=function(e,n,t){return u(s(d(e,t),n),!0,t)},p=function(e,n){return u(s(d(e),n),!1)},v=function(e,n){return s((t=e.querySelectorAll("["+a.GV+"]"),(0,r.q)(t).map((function(e){return d([e])})).reduce((function(e,n){return e.concat(n)}),[])),n);var t}},80574:(e,n,t)=>{"use strict";t.d(n,{K:()=>u});var r=t(65014),o=t(26606),i=function(e){return e.parentNode?i(e.parentNode):e},u=function(e){return(0,o._)(e).filter(Boolean).reduce((function(e,n){var t=n.getAttribute(r.Sk);return e.push.apply(e,t?function(e){for(var n=new Set,t=e.length,r=0;r<t;r+=1)for(var o=r+1;o<t;o+=1){var i=e[r].compareDocumentPosition(e[o]);(i&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&n.add(o),(i&Node.DOCUMENT_POSITION_CONTAINS)>0&&n.add(r)}return e.filter((function(e,t){return!n.has(t)}))}((0,o.q)(i(n).querySelectorAll("["+r.Sk+'="'+t+'"]:not(['+r.ZO+'="disabled"])'))):[n]),e}),[])}},26606:(e,n,t)=>{"use strict";t.d(n,{_:()=>o,q:()=>r});var r=function(e){for(var n=Array(e.length),t=0;t<e.length;++t)n[t]=e[t];return n},o=function(e){return Array.isArray(e)?e:[e]}},10079:(e,n,t)=>{"use strict";t.d(n,{$K:()=>c,IS:()=>a,Z9:()=>u,Zo:()=>i,bh:()=>o});var r=function(e,n){return!e||e===document||e&&e.nodeType===Node.DOCUMENT_NODE||!function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var n=window.getComputedStyle(e,null);return!(!n||!n.getPropertyValue||"none"!==n.getPropertyValue("display")&&"hidden"!==n.getPropertyValue("visibility"))}(e)&&n(e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode)},o=function(e,n){var t=e.get(n);if(void 0!==t)return t;var i=r(n,o.bind(void 0,e));return e.set(n,i),i},i=function(e){return!(("INPUT"===e.tagName||"BUTTON"===e.tagName)&&("hidden"===e.type||e.disabled))},u=function(e){return Boolean(e&&e.dataset&&e.dataset.focusGuard)},a=function(e){return!u(e)},c=function(e){return Boolean(e)}},67506:(e,n,t)=>{"use strict";t.d(n,{V0:()=>a,o$:()=>c});var r=t(26606),o=t(2920),i=function(e,n){return void 0===n&&(n=[]),n.push(e),e.parentNode&&i(e.parentNode,n),n},u=function(e,n){for(var t=i(e),r=i(n),o=0;o<t.length;o+=1){var u=t[o];if(r.indexOf(u)>=0)return u}return!1},a=function(e,n,t){var o=(0,r._)(e),i=(0,r._)(n),a=o[0],c=!1;return i.filter(Boolean).forEach((function(e){c=u(c||e,e)||c,t.filter(Boolean).forEach((function(e){var n=u(a,e);n&&(c=!c||n.contains(c)?n:u(n,c))}))})),c},c=function(e,n){return e.reduce((function(e,t){return e.concat((0,o.ir)(t,n))}),[])}},63596:()=>{var e="focus-outline-hidden";function n(){var e=this;document.addEventListener("keydown",(function(n){e.focusByKeyboard=!0}),!0),document.addEventListener("mousedown",(function(n){e.focusByKeyboard=!1}),!0),document.addEventListener("focus",(function(n){e.updateVisibility()}),!0),document.addEventListener("focusout",(function(n){window.setTimeout((function(){document.hasFocus()||(e.focusByKeyboard=!0,e.updateVisibility())}),0)})),this.updateVisibility()}n.prototype={focusByKeyboard:!0,updateVisibility:function(){this.hidden=!this.focusByKeyboard},set hidden(n){document.documentElement.classList.toggle(e,n)},get hidden(){return document.documentElement.classList.contains(e)}},new n}}]);