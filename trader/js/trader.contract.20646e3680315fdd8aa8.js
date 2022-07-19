"use strict";(self.webpackChunk_deriv_trader=self.webpackChunk_deriv_trader||[]).push([["contract","error-component"],{"./src/App/Components/Elements/Errors/index.js":(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var n=r("../../node_modules/prop-types/index.js"),o=r.n(n),a=r("react"),i=r("@deriv/components"),c=r("@deriv/shared"),l=r("@deriv/translations"),s=function(e){var t=e.header,r=e.message,n=e.is_dialog,o=e.redirect_label,s=e.redirectOnClick,u=e.should_show_refresh,_=void 0===u||u?(0,l.localize)("Please refresh this page to continue."):"";return n?a.createElement(i.Dialog,{title:t||(0,l.localize)("There was an error"),is_visible:!0,confirm_button_text:o||(0,l.localize)("Ok"),onConfirm:s||function(){return location.reload()}},r||(0,l.localize)("Sorry, an error occured while processing your request.")):a.createElement(i.PageError,{header:t||(0,l.localize)("Something’s not right"),messages:r?[r,_]:[(0,l.localize)("Sorry, an error occured while processing your request."),_],redirect_urls:[c.routes.trade],redirect_labels:[o||(0,l.localize)("Refresh")],buttonOnClick:s||function(){return location.reload()}})};s.propTypes={message:o().oneOfType([o().node,o().string,o().object]),type:o().string};const u=s},"./src/App/Components/Elements/Modals/UnsupportedContractModal/index.js":(e,t,r)=>{r.d(t,{Z:()=>_});var n=r("../../node_modules/prop-types/index.js"),o=r.n(n),a=r("react"),i=r("@deriv/components"),c=r("@deriv/translations"),l=r("./src/Stores/connect.js"),s=r("@deriv/shared"),u=function(e){var t=e.disableApp,r=e.enableApp,n=e.is_loading,o=e.is_visible,l=e.onConfirm,u=e.onClose;return a.createElement(i.Dialog,{title:(0,c.localize)("We’re working on it"),confirm_button_text:(0,c.localize)("Stay on {{website_domain}}",{website_domain:s.website_name}),cancel_button_text:(0,c.localize)("Go to Binary.com"),onConfirm:l,onCancel:u,disableApp:t,enableApp:r,is_loading:n,is_closed_on_cancel:!0,is_visible:o},a.createElement(c.Localize,{i18n_default_text:"You’ve selected a trade type that is currently unsupported, but we’re working on it."}))};u.propTypes={disableApp:o().func,enableApp:o().func,is_loading:o().bool,is_visible:o().bool,onClose:o().func,onConfirm:o().func};const _=(0,l.$j)((function(e){var t=e.ui;return{disableApp:t.disableApp,enableApp:t.enableApp,is_loading:t.is_loading}}))(u)},"./src/Modules/Contract/index.js":(e,t,r)=>{r.r(t),r.d(t,{default:()=>ke});var n=r("../../node_modules/prop-types/index.js"),o=r.n(n),a=r("react"),i=r("react-router"),c=r("../../node_modules/react-transition-group/esm/CSSTransition.js"),l=r("@deriv/shared"),s=r("./src/App/Components/Elements/Errors/index.js"),u=r("@deriv/translations"),_=r("./src/Stores/connect.js"),d=r("../../node_modules/classnames/index.js"),m=r.n(d),p=r("react-router-dom"),f=r("@deriv/components"),g=r("./src/App/Components/Elements/chart-loader.jsx"),y=r("./src/App/Components/Elements/PositionsDrawer/helpers/index.js"),b=function(e){var t=e.icon,r=e.id,n=e.label,o=e.timestamp,i=e.value,c=e.value2;return a.createElement("div",{id:r,className:"contract-audit__grid"},t&&a.createElement("div",{className:"contract-audit__icon"},t),a.createElement("div",{className:"contract-audit__item"},a.createElement(f.Text,{size:"xxxs",styles:{lineHeight:"unset"},className:"contract-audit__label"},n),a.createElement("div",{className:"contract-audit__value-wrapper"},a.createElement(f.Text,{weight:"bold",size:"xxs",line_height:"m",color:"prominent",className:"contract-audit__value"},i),c&&a.createElement(f.Text,{weight:"bold",size:"xxs",line_height:"m",color:"prominent",className:"contract-audit__value2"},c))),o&&a.createElement("div",{className:"contract-audit__timestamp"},a.createElement(f.Text,{size:"xxxs",align:"right",line_height:"xs",className:"contract-audit__timestamp-value"},(0,l.formatDate)(o)),a.createElement(f.Text,{size:"xxxs",align:"right",line_height:"xs",className:"contract-audit__timestamp-value"},(0,l.formatTime)(o))))};b.propTypes={icon:o().node,label:o().string,value:o().PropTypes.oneOfType([o().number,o().string,o().node]),value2:o().PropTypes.oneOfType([o().number,o().string])};const h=b;var v=r("./src/_common/base/server_time.js"),E=r.n(v),C=function(e){var t=e.contract_end_time,r=e.contract_info,n=e.duration,o=e.duration_unit,i=e.exit_spot,c=r.commission,s=r.contract_type,_=r.currency,d=r.entry_spot_display_value,m=r.entry_tick_time,p=r.exit_tick_time,g=r.profit,b=r.date_start,v=r.tick_count,C=r.transaction_ids,w=(C=void 0===C?{}:C).buy,k=C.sell,S=g>=0,x=(0,l.getCancellationPrice)(r);return a.createElement(f.ThemedScrollbars,{is_bypassed:(0,l.isMobile)()},a.createElement("div",{className:"contract-audit__tabs-content"},a.createElement(h,{id:"dt_id_label",icon:a.createElement(f.Icon,{icon:"IcContractId",size:24}),label:(0,u.localize)("Reference ID"),value:(0,u.localize)("{{buy_value}} (Buy)",{buy_value:w}),value2:k?(0,u.localize)("{{sell_value}} (Sell)",{sell_value:k}):void 0}),(0,l.isMultiplierContract)(s)?a.createElement(a.Fragment,null,a.createElement(h,{id:"dt_commission_label",icon:a.createElement(f.Icon,{icon:"IcContractCommission",size:24}),label:(0,u.localize)("Commission"),value:a.createElement(f.Money,{amount:c,currency:_,show_currency:!0})}),!!x&&a.createElement(h,{id:"dt_cancellation_label",icon:a.createElement(f.Icon,{icon:"IcContractSafeguard",size:24}),label:(0,l.isUserSold)(r)&&(0,l.isEndedBeforeCancellationExpired)(r)?(0,u.localize)("Deal cancellation"):(0,l.isUserCancelled)(r)?(0,u.localize)("Deal cancellation (executed)"):function(e){return!!(e.cancellation.date_expiry<E().get().unix())}(r)?(0,u.localize)("Deal cancellation (expired)"):(0,u.localize)("Deal cancellation (active)"),value:a.createElement(f.Money,{amount:x,currency:_})})):a.createElement(a.Fragment,null,a.createElement(h,{id:"dt_duration_label",icon:a.createElement(f.Icon,{icon:"IcContractDuration",size:24}),label:(0,u.localize)("Duration"),value:v>0?"".concat(v," ").concat(v<2?(0,u.localize)("tick"):(0,u.localize)("ticks")):"".concat(n," ").concat(o)}),a.createElement(h,{id:"dt_bt_label",icon:(0,y.qm)(s)?a.createElement(f.Icon,{icon:"IcContractTarget",size:24}):a.createElement(f.Icon,{icon:"IcContractBarrier",size:24}),label:(0,y.Bs)(r),value:(0,y.rh)(r)||" - "})),a.createElement(h,{id:"dt_start_time_label",icon:a.createElement(f.Icon,{icon:"IcContractStartTime",size:24}),label:(0,u.localize)("Start time"),value:(0,l.toGMTFormat)((0,l.epochToMoment)(b))||" - "}),!(0,y.qm)(s)&&a.createElement(h,{id:"dt_entry_spot_label",icon:a.createElement(f.Icon,{icon:"IcContractEntrySpot",size:24}),label:(0,u.localize)("Entry spot"),value:(0,y.Ew)(d)||" - ",value2:(0,l.toGMTFormat)((0,l.epochToMoment)(m))||" - "}),!isNaN(i)&&a.createElement(h,{id:"dt_exit_spot_label",icon:a.createElement(f.Icon,{icon:"IcContractExitSpot",size:24}),label:(0,u.localize)("Exit spot"),value:(0,y.Ew)(i)||" - ",value2:(0,l.toGMTFormat)((0,l.epochToMoment)(p))||" - "}),!isNaN(t)&&a.createElement(h,{id:"dt_exit_time_label",icon:a.createElement(f.Icon,{icon:"IcContractExitTime",color:S?"green":"red",size:24}),label:(0,u.localize)("Exit time"),value:(0,l.toGMTFormat)((0,l.epochToMoment)(t))||" - "})))};C.propTypes={contract_end_time:o().oneOfType([o().number,o().string]),contract_info:o().object,date_start:o().oneOfType([o().number,o().string]),duration:o().oneOfType([o().number,o().string]),duration_unit:o().string,exit_spot:o().string};const w=C;var k=function(e){var t=e.currency,r=e.history,n=void 0===r?[]:r;return n.length?a.createElement(f.ThemedScrollbars,{is_bypassed:(0,l.isMobile)()},a.createElement("div",{className:"contract-audit__tabs-content"},n.map((function(e,r){return a.createElement(h,{key:r,id:"dt_history_label_".concat(r),label:e.display_name,timestamp:+e.order_date,value:0!==Math.abs(+e.order_amount)?a.createElement(a.Fragment,null,+e.order_amount<0&&a.createElement("strong",null,"-"),a.createElement(f.Money,{amount:e.order_amount,currency:t}),e.value&&a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement("span",null,"(",e.value,")"))):(0,u.localize)("Cancelled")})})))):a.createElement("div",{className:"contract-audit__empty"},a.createElement(f.Icon,{icon:"IcBox",size:48,color:"secondary"}),a.createElement("h4",{className:"contract-audit__empty-header"},(0,u.localize)("No history")),a.createElement(f.Text,{align:"center",line_height:"s",color:"less-prominent",size:"xxs"},(0,u.localize)("You have yet to update either take profit or stop loss")))};k.propTypes={currency:o().string,history:o().array};const S=k;var x=["contract_update_history","has_result","is_multiplier","toggleHistoryTab"];function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var j=function(e){var t=e.contract_update_history,r=e.has_result,n=e.is_multiplier,o=e.toggleHistoryTab,i=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,x),c=i.contract_info,s=c.contract_id,_=c.currency,d=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return T(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?T(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(a.useState([]),2),m=d[0],p=d[1],g=function(e){return e.sort((function(e,t){return t.order_date-e.order_date}))};return a.useEffect((function(){t.length&&t.length>m.length&&p(g(t))}),[t,m]),r?n?a.createElement("div",{className:"contract-audit__wrapper"},a.createElement(f.Tabs,{top:!0,className:"contract-audit__tabs",onTabItemClick:function(e){o(e),e&&l.WS.contractUpdateHistory(s).then((function(e){p(g(e.contract_update_history))}))}},a.createElement("div",{label:(0,u.localize)("Details")},a.createElement(w,i)),a.createElement("div",{label:(0,u.localize)("History")},a.createElement(S,{currency:_,history:m})))):a.createElement("div",{className:"contract-audit__wrapper"},a.createElement(w,i)):null};j.propTypes={contract_info:o().object,contract_update_history:o().array,has_result:o().bool,is_multiplier:o().bool,toggleHistoryTab:o().func};const M=j;var A=r("./src/App/Components/Elements/ContentLoader/index.js"),I=r("./src/Constants/contract.js"),z=r("./src/Utils/Helpers/market-underlying.js"),N=r("react-dom"),D=r.n(N);function O(){return O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},O.apply(this,arguments)}var F=function(e){var t=e.is_multiplier,r=e.children,n=e.onSwipedDown,o=f.SwipeableWrapper.useSwipeable({onSwipedDown:n}),i=document.getElementById("dt_contract_drawer_audit");return i?D().createPortal(a.createElement("div",{className:"contract-audit-card"},a.createElement("div",O({},o,{className:m()("contract-audit-card__container",{"contract-audit-card__container--is-multiplier":t})}),r)),i):null};F.propTypes={is_multiplier:o().bool,children:o().any,onSwipedDown:o().func};var U=function(e){var t=e.children,r=e.onSwipedDown,n=e.onSwipedUp,o=f.SwipeableWrapper.useSwipeable({onSwipedDown:r,onSwipedUp:n});return a.createElement("div",o,t)};U.propTypes={children:o().any,onSwipedDown:o().func,onSwipedUp:o().func};var W=r("./src/App/Components/Elements/market-countdown-timer.jsx");function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var q=function(e){var t=e.symbol,r=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?H(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(a.useState(!0),2),n=r[0],o=r[1];return a.createElement("div",{className:m()("contract-card__market-closed",{"contract-card__market-closed--loading":n})},a.createElement(f.Text,{align:"center",as:"p",className:"contract-card__market-closed__title",styles:{color:"var(--brand-orange)"},weight:"bold"},a.createElement(u.Localize,{i18n_default_text:"Market is closed"})),a.createElement(W.Z,{setIsTimerLoading:o,symbol:t}))};q.propTypes={symbol:o().string};const B=q;var L=r("./src/Stores/Modules/Trading/Helpers/multiplier.js");function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return R(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?R(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var $=function(e){var t=e.active_symbols,r=e.addToast,n=e.contract_info,o=e.contract_update,i=e.currency,c=e.current_focus,s=e.getContractById,u=e.is_market_closed,_=e.is_mobile,d=e.is_multiplier,p=e.is_sell_requested,g=e.is_collapsed,y=e.onClickCancel,b=e.onClickSell,h=e.onSwipedUp,v=e.onSwipedDown,E=e.removeToast,C=e.result,w=e.setCurrentFocus,k=e.server_time,S=e.should_show_cancellation_warning,x=e.status,T=e.toggleCancellationWarning,j=e.toggleContractAuditDrawer,M=P((0,f.useHover)(),2),A=M[0],N=M[1],D=n.profit,O=n.underlying,F=!!(0,l.getEndTime)(n),W=(0,l.getSymbolDisplayName)(t,(0,z.cS)(n.shortcode).underlying),H=(0,l.isCryptoContract)(n.underlying),q=!d||H&&d,R=a.createElement(f.ContractCard.Header,{contract_info:n,display_name:W,getCardLabels:I.gk,getContractTypeDisplay:I.h8,has_progress_slider:(0,l.isDesktop)()&&q,is_mobile:_,is_sell_requested:p,is_sold:F,onClickSell:b,server_time:k}),$=a.createElement(f.ContractCard.Body,{addToast:r,connectWithContractUpdate:L.tP,contract_info:n,contract_update:o,currency:i,current_focus:c,getCardLabels:I.gk,getContractById:s,is_mobile:_,is_multiplier:d,is_sold:F,removeToast:E,server_time:k,setCurrentFocus:w,should_show_cancellation_warning:S,status:x,toggleCancellationWarning:T}),Z=a.createElement(f.ContractCard.Footer,{contract_info:n,getCardLabels:I.gk,is_multiplier:d,is_sell_requested:p,onClickCancel:y,onClickSell:b,server_time:k,status:x}),G=a.createElement(a.Fragment,null,R,$),Y=a.createElement(f.ContractCard,{contract_info:n,getCardLabels:I.gk,is_multiplier:d,profit_loss:D,should_show_result_overlay:!1},a.createElement("div",{className:m()("dc-contract-card",{"dc-contract-card--green":_&&!d&&D>0&&!C,"dc-contract-card--red":_&&!d&&D<0&&!C,"contract-card__market-closed--disabled":u&&N}),ref:A},u&&!(0,l.getEndTime)(n)&&a.createElement("div",{className:m()({"contract-card__market-closed--hidden":(0,l.isDesktop)()&&N})},a.createElement(B,{symbol:O})),G,Z));return a.createElement(a.Fragment,null,a.createElement(f.DesktopWrapper,null,Y),a.createElement(f.MobileWrapper,null,a.createElement(U,{onSwipedUp:F||d?h:void 0,onSwipedDown:F||d?v:void 0},(F||d)&&a.createElement(f.Collapsible.ArrowButton,{onClick:j,is_collapsed:g}),Y)))};$.propTypes={contract_info:o().object,currency:o().string,current_focus:o().string,is_market_closed:o().bool,is_multiplier:o().bool,is_sell_requested:o().bool,onClickCancel:o().func,onClickSell:o().func,status:o().string};const Z=(0,_.$j)((function(e){var t=e.modules,r=e.ui,n=e.contract_trade;return{active_symbols:t.trade.active_symbols,addToast:r.addToast,current_focus:r.current_focus,getContractById:n.getContractById,removeToast:r.removeToast,should_show_cancellation_warning:r.should_show_cancellation_warning,setCurrentFocus:r.setCurrentFocus,toggleCancellationWarning:r.toggleCancellationWarning}}))($);function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Y=function(e){var t,r=e.contract_info,n=e.contract_update,o=e.contract_update_history,i=e.is_mobile,s=e.is_sell_requested,u=e.is_dark_theme,_=e.is_market_closed,d=e.is_multiplier,p=e.onClickCancel,g=e.onClickSell,y=e.server_time,b=e.status,h=e.toggleHistoryTab,v=r.currency,E=r.exit_tick_display_value,C=r.is_sold,w=a.useRef(),k=a.useRef(),S=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return G(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?G(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(a.useState(!1),2),x=S[0],T=S[1];if(!r)return null;var j=r.status||r.is_expired,I=(0,l.isUserSold)(r)&&!d?"-":E,z=a.createElement(M,{contract_info:r,contract_update_history:o,contract_end_time:(0,l.getEndTime)(r),is_dark_theme:u,is_multiplier:d,is_open:!0,duration:(0,l.getDurationTime)(r),duration_unit:(0,l.getDurationUnitText)((0,l.getDurationPeriod)(r)),exit_spot:I,has_result:!!C||d,toggleHistoryTab:h}),N=j?function(){var e=(0,l.isUserSold)(r)&&!d?"-":E,t=a.createElement(M,{contract_info:r,contract_update_history:o,contract_end_time:(0,l.getEndTime)(r),is_dark_theme:u,is_multiplier:d,is_open:!0,duration:(0,l.getDurationTime)(r),duration_unit:(0,l.getDurationUnitText)((0,l.getDurationPeriod)(r)),exit_spot:e,has_result:!!C||d,toggleHistoryTab:h});return a.createElement(a.Fragment,null,a.createElement(Z,{contract_info:r,contract_update:n,currency:v,is_mobile:i,is_market_closed:_,is_multiplier:d,is_sell_requested:s,is_collapsed:x,onClickCancel:p,onClickSell:g,onSwipedUp:function(){return T(!0)},onSwipedDown:function(){return T(!1)},server_time:y,status:b,toggleContractAuditDrawer:function(){return T(!x)}}),a.createElement(f.DesktopWrapper,null,t))}():a.createElement("div",{className:"contract-card"},a.createElement(A.r,{is_dark_theme:u,speed:2})),D=a.createElement(c.Z,{in:x,timeout:250,classNames:"contract-drawer__transition"},a.createElement("div",{id:"dt_contract_drawer",className:m()("contract-drawer",{"contract-drawer--with-collapsible-btn":!!(0,l.getEndTime)(r)||d&&(0,l.isMobile)(),"contract-drawer--is-multiplier":d&&(0,l.isMobile)(),"contract-drawer--is-multiplier-sold":d&&(0,l.isMobile)()&&(0,l.getEndTime)(r)}),style:{transform:x&&w.current&&k.current&&"translateY(calc(".concat(k.current.clientHeight,"px - ").concat(w.current.clientHeight,"px))")},ref:w},a.createElement("div",{className:"contract-drawer__body",ref:k},N),x&&a.createElement(f.MobileWrapper,null,a.createElement("div",{id:"dt_contract_drawer_audit"},a.createElement(F,{is_multiplier:d},z)))));return a.createElement(a.Fragment,null,a.createElement(f.DesktopWrapper,null,D),a.createElement(f.MobileWrapper,null,a.createElement("div",{style:{height:null===(t=k.current)||void 0===t?void 0:t.clientHeight}},a.createElement(f.Div100vhContainer,{height_offset:"40px",is_bypassed:!k.current},D))))};Y.propTypes={contract_info:o().object,is_chart_loading:o().bool,is_dark_theme:o().bool,is_market_closed:o().bool,is_mobile:o().bool,is_history_tab_active:o().bool,is_sell_requested:o().bool,onClickCancel:o().func,onClickContractUpdate:o().func,onClickSell:o().func,status:o().string};const J=(0,i.withRouter)((0,_.$j)((function(e){var t=e.common,r=e.ui;return{server_time:t.server_time,is_mobile:r.is_mobile}}))(Y));var K=r("./src/App/Components/Elements/Modals/UnsupportedContractModal/index.js"),V=r("./src/Modules/SmartChart/index.js"),X=r("./src/Modules/Contract/Components/Digits/index.js"),Q=r("./src/App/Components/Animations/index.js"),ee=r("mobx-react"),te=function(e){var t=e.contract_info;return a.createElement("div",{className:"info-box-longcode"},a.createElement(f.Icon,{icon:"IcContractFlag",className:"info-box-longcode-icon",size:24}),a.createElement(f.Text,{size:"xs",className:"info-box-longcode-text"},t.longcode))};te.propTypes={longcode:o().string};const re=(0,ee.observer)(te);var ne=function(e){var t=e.message,r=void 0===t?"":t,n=e.onClickClose;return r?a.createElement("div",{className:"message"},a.createElement("div",{className:"message-icon"},a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16"},a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("circle",{cx:"8",cy:"8",r:"8",fill:"#F44336"}),a.createElement("path",{fill:"#FFF",fillRule:"nonzero",d:"M8 7.293l3.146-3.147a.5.5 0 0 1 .708.708L8.707 8l3.147 3.146a.5.5 0 0 1-.708.708L8 8.707l-3.146 3.147a.5.5 0 0 1-.708-.708L7.293 8 4.146 4.854a.5.5 0 1 1 .708-.708L8 7.293z"})))),a.createElement("div",{className:"message-text"},r),a.createElement("div",{className:"message-close",onClick:n},a.createElement(f.Icon,{icon:"IcCross"}))):null};ne.propTypes={message:o().string,onClickClose:o().func};const oe=ne;var ae=function(e){var t=e.contract_info,r=e.error_message,n=e.removeError,o=re,i=!!t.longcode;return a.createElement(Q.o,{is_visible:i,className:"info-box-container",keyname:"info-box-container"},!!t.contract_type&&a.createElement("div",{className:"info-box"},a.createElement(o,{contract_info:t})),a.createElement(oe,{message:r,onClickClose:n}))};ae.propTypes={contract_info:o().object,error_message:o().string,removeError:o().func};const ie=ae;var ce=r("./src/Modules/SmartChart/Components/bottom-widgets.jsx"),le=r("./src/Modules/SmartChart/Components/top-widgets.jsx"),se=(0,_.$j)((function(e){var t=e.contract_replay;return{contract_info:t.contract_store.contract_info,digits_info:t.contract_store.digits_info,display_status:t.contract_store.display_status,is_digit_contract:t.contract_store.is_digit_contract,is_ended:t.contract_store.is_ended}}))((function(e){var t=e.is_digit_contract,r=e.is_ended,n=e.contract_info,o=e.digits_info,i=e.display_status;return a.createElement(X.Z,{is_digit_contract:t,is_ended:r,contract_info:n,digits_info:o,display_status:i})})),ue=(0,_.$j)((function(e){var t=e.contract_replay;return{contract_info:t.contract_store.contract_info,error_message:t.error_message,removeError:t.removeErrorMessage}}))((function(e){var t=e.contract_info,r=e.error_message,n=e.removeError;return a.createElement(ie,{contract_info:t,error_message:r,removeError:n})})),_e=function(){return a.createElement(le.Z,{InfoBox:a.createElement(ue,null),is_title_enabled:!1})},de=function(){return a.createElement(ce.Z,{Digits:a.createElement(se,null)})},me=r("mobx"),pe=["ContentComponent"];var fe=function(e){var t=e.marker_config,r=e.marker_content_props,n=e.is_bottom_widget_visible,o=t.ContentComponent,i=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(t,pe),c=a.useCallback((function(){return a.createElement(o,(0,me.toJS)(r))}),[r]);return a.createElement(V.KW,{markerRef:function(e){if(e){if(!i.y){var t=24+(n?115:0);e.div.style.height="calc(100% - ".concat(t,"px)"),e.div.style.zIndex="-1"}e.setPosition({epoch:+i.x,price:+i.y})}}},c())};fe.propTypes={marker_config:o().object,marker_content_props:o().object};const ge=fe;function ye(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var be=function(e){var t=e.contract_id,r=e.contract_info,n=e.contract_update,o=e.contract_update_history,i=e.is_chart_loading,c=e.is_dark_theme,s=e.is_digit_contract,_=e.is_forward_starting,d=e.is_market_closed,y=e.is_sell_requested,b=e.is_valid_to_cancel,h=e.onClickCancel,v=e.NotificationMessages,E=e.onClickSell,C=e.indicative_status,w=e.toggleHistoryTab,k=e.routeBackInApp,S=e.onMount,x=e.onUnmount,T=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return ye(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ye(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(a.useState(!1),2),j=T[0],M=T[1],A=(0,p.useHistory)();if(a.useEffect((function(){var e=+/[^/]*$/.exec(location.pathname)[0];return S(t||e),M(!0),function(){M(!1),x()}}),[t,location,S,x]),!r.underlying)return null;var I=(0,l.isMultiplierContract)(r.contract_type),z=a.createElement(J,{contract_info:r,contract_update:n,contract_update_history:o,is_chart_loading:i,is_dark_theme:c,is_market_closed:d,is_multiplier:I,is_sell_requested:y,is_valid_to_cancel:b,onClickCancel:h,onClickSell:E,status:C,toggleHistoryTab:w});return a.createElement(f.FadeWrapper,{is_visible:j,className:"contract-details-wrapper",keyname:"contract-details-wrapper"},a.createElement(f.MobileWrapper,null,a.createElement(v,null)),a.createElement(K.Z,{onConfirm:function(){A.goBack()},onClose:function(){window.open((0,l.urlFor)("user/statementws",{legacy:!0}),"_blank")},is_visible:_}),a.createElement(f.PageOverlay,{id:"dt_contract_replay_container",header:(0,u.localize)("Contract details"),onClickClose:function(){return M(!1),!(0,l.isEmptyObject)(location.state)&&location.state.from_table_row?A.goBack():k(A)}},a.createElement(f.Div100vhContainer,{className:"trade-container__replay",is_disabled:(0,l.isDesktop)(),height_offset:"80px"},a.createElement(f.DesktopWrapper,null,z),a.createElement(f.MobileWrapper,null,a.createElement("div",{className:m()("contract-drawer__mobile-wrapper",{"contract-drawer__mobile-wrapper--is-multiplier":(0,l.isMobile)()&&I})},z)),a.createElement(a.Suspense,{fallback:a.createElement("div",null)},a.createElement("div",{className:m()("replay-chart__container",{"replay-chart__container--is-multiplier":(0,l.isMobile)()&&I})},a.createElement(f.DesktopWrapper,null,a.createElement(v,null)),a.createElement(g.Z,{is_dark:c,is_visible:i}),a.createElement(f.DesktopWrapper,null,a.createElement(Ee,null)),a.createElement(f.MobileWrapper,null,s?a.createElement(a.Fragment,null,a.createElement(ue,null),a.createElement(f.SwipeableWrapper,{className:"replay-chart__container-swipeable-wrapper"},a.createElement(se,null),a.createElement(Ee,null))):a.createElement(Ee,null)))))))};be.propTypes={contract_id:o().number,contract_info:o().object,indicative_status:o().string,is_chart_loading:o().bool,is_dark_theme:o().bool,is_digit_contract:o().bool,onMount:o().func,onUnmount:o().func,routes:o().arrayOf(o().object)};const he=(0,_.$j)((function(e){var t=e.common,r=e.contract_replay,n=e.ui,o=r,a=o.contract_store;return{routeBackInApp:t.routeBackInApp,contract_info:a.contract_info,contract_update:a.contract_update,contract_update_history:a.contract_update_history,is_digit_contract:a.is_digit_contract,is_market_closed:o.is_market_closed,is_sell_requested:o.is_sell_requested,is_valid_to_cancel:o.is_valid_to_cancel,onClickCancel:o.onClickCancel,onClickSell:o.onClickSell,onMount:o.onMount,onUnmount:o.onUnmount,indicative_status:o.indicative_status,is_chart_loading:o.is_chart_loading,is_forward_starting:o.is_forward_starting,is_dark_theme:n.is_dark_mode_on,NotificationMessages:n.notification_messages_ui,toggleHistoryTab:n.toggleHistoryTab}}))(be);var ve=function(e){var t,r=function(){return(0,l.isDesktop)()&&e.is_digit_contract};return a.createElement(V.Xb,{barriers:e.barriers_array,bottomWidgets:r()?de:null,chartControlsWidgets:null,chartType:e.chart_type,endEpoch:e.end_epoch,margin:e.margin||null,isMobile:(0,l.isMobile)(),enabledNavigationWidget:(0,l.isDesktop)(),enabledChartFooter:!1,granularity:e.granularity,requestAPI:e.wsSendRequest,requestForget:e.wsForget,requestForgetStream:e.wsForgetStream,crosshair:(0,l.isMobile)()?0:void 0,maxTick:(0,l.isMobile)()?8:void 0,requestSubscribe:e.wsSubscribe,settings:e.settings,startEpoch:e.start_epoch,scrollToEpoch:e.scroll_to_epoch,stateChangeListener:e.chartStateChange,symbol:e.symbol,allTicks:e.all_ticks,topWidgets:_e,isConnectionOpened:e.is_socket_opened,isStaticChart:!1,shouldFetchTradingTimes:!e.end_epoch,yAxisMargin:(t={top:(0,l.isMobile)()?96:148,bottom:r()?128:112},(0,l.isMobile)()&&(t.bottom=48),t),anchorChartToLeft:(0,l.isMobile)(),shouldFetchTickHistory:"seconds"!==(0,l.getDurationUnitText)((0,l.getDurationPeriod)(e.contract_info)),contractInfo:e.contract_info},e.markers_array.map((function(e){return a.createElement(ge,{key:e.react_key,marker_config:e.marker_config,marker_content_props:e.content_config,is_bottom_widget_visible:r()})})))};ve.propTypes={barriers_array:o().array,BottomWidgets:o().node,chart_type:o().string,end_epoch:o().number,granularity:o().number,InfoBox:o().node,is_mobile:o().bool,is_socket_opened:o().bool,is_static_chart:o().bool,margin:o().number,markers_array:o().array,replay_controls:o().object,scroll_to_epoch:o().number,settings:o().object,start_epoch:o().number,symbol:o().string,contract_info:o().object,all_ticks:o().array,wsForget:o().func,wsForgetStream:o().func,wsSendRequest:o().func,wsSubscribe:o().func,shouldFetchTickHistory:o().bool};var Ee=(0,_.$j)((function(e){var t=e.modules,r=e.ui,n=e.common,o=e.contract_replay,a=t.trade,i=o.contract_store,c=i.contract_config,s="READY"===o.chart_state||"SCROLL_TO_LEFT"===o.chart_state,u="DBot"===(0,l.getPlatformRedirect)(n.app_routing_history).name,_={language:n.current_language.toLowerCase(),theme:r.is_dark_mode_on&&!u?"dark":"light",position:r.is_chart_layout_default?"bottom":"left",countdown:r.is_chart_countdown_visible,assetInformation:!1,isHighestLowestMarkerEnabled:!1};return{end_epoch:c.end_epoch,chart_type:c.chart_type,start_epoch:c.start_epoch,granularity:c.granularity,scroll_to_epoch:s?c.scroll_to_epoch:void 0,settings:_,is_mobile:r.is_mobile,is_socket_opened:n.is_socket_opened,is_digit_contract:i.is_digit_contract,chartStateChange:o.chartStateChange,margin:o.margin,is_static_chart:o.is_static_chart,barriers_array:i.barriers_array,markers_array:i.markers_array,symbol:i.contract_info.underlying,contract_info:i.contract_info,all_ticks:i.contract_info.audit_details?i.contract_info.audit_details.all_ticks:[],wsForget:a.wsForget,wsSubscribe:a.wsSubscribe,wsSendRequest:a.wsSendRequest,wsForgetStream:a.wsForgetStream}}))(ve),Ce=["GetProposalFailure","ContractValidationError"],we=function(e){var t=e.error_code,r=e.error_message,n=e.match,o=e.history,_=e.has_error,d=e.onMount,m=e.onUnmount,p=e.removeErrorMessage;return a.useEffect((function(){return d(+n.params.contract_id,o),function(){p(),m()}}),[d,m,p,o,n.params.contract_id]),isNaN(n.params.contract_id)?a.createElement(i.Redirect,{to:"/404"}):a.createElement(a.Fragment,null,_?a.createElement(s.default,{message:r,is_dialog:Ce.includes(t),redirect_label:Ce.includes(t)?(0,u.localize)("Ok"):(0,u.localize)("Go back to trading"),redirectOnClick:function(){return o.push(l.routes.trade)},should_show_refresh:!1}):a.createElement(c.Z,{in:!_,timeout:400,classNames:{enter:"contract--enter",enterDone:"contract--enter-done",exit:"contract--exit"},unmountOnExit:!0},a.createElement(he,{contract_id:+n.params.contract_id,key:+n.params.contract_id})))};we.propTypes={error_message:o().string,error_code:o().string,has_error:o().bool,history:o().object,is_mobile:o().bool,match:o().object,onMount:o().func,onUnmount:o().func,removeErrorMessage:o().func,symbol:o().string};const ke=(0,i.withRouter)((0,_.$j)((function(e){var t=e.ui,r=e.contract_replay;return{error_message:r.error_message,error_code:r.error_code,has_error:r.has_error,onMount:r.setAccountSwitcherListener,onUnmount:r.removeAccountSwitcherListener,removeErrorMessage:r.removeErrorMessage,symbol:r.contract_info.underlying,is_mobile:t.is_mobile}}))(we))}}]);