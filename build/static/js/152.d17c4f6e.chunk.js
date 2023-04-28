(self.webpackChunknbc_react=self.webpackChunknbc_react||[]).push([[152],{1038:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r,o=(r=n(2791))&&r.__esModule?r:{default:r},a=n(460),i=n(5376),c=n(2240),l=["isProcessing","isOpen","id","message","title","action","handleAction","handleClose"];function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}var u=o.default.forwardRef((function(e,t){return o.default.createElement(c.Slide,s({direction:"up"},e,{ref:t}))})),f=function(e){var t=e.isProcessing,n=void 0!==t&&t,r=e.isOpen,f=void 0!==r&&r,d=(e.id,e.message),p=void 0===d?"":d,m=e.title,b=void 0===m?"":m,v=e.action,y=void 0===v?"":v,h=e.handleAction,g=void 0===h?function(){}:h,_=e.handleClose,O=void 0===_?function(){}:_,M=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,l),w=(0,a.useIntl)(),S=(0,i.useTheme)(),E=(0,c.useMediaQuery)(S.breakpoints.down("sm"));return o.default.createElement(c.Dialog,s({fullScreen:E,open:f,onClose:O,TransitionComponent:u,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},M),o.default.createElement(c.DialogTitle,{id:"alert-dialog-title"},b),o.default.createElement(c.DialogContent,null,o.default.createElement(c.DialogContentText,{id:"alert-dialog-description"},p)),o.default.createElement(c.DialogActions,null,o.default.createElement(c.Button,{onClick:O,color:"primary"},w.formatMessage({id:"cancel",defaultMessage:"Cancel"})),o.default.createElement(c.Button,{disabled:n,onClick:function(){g(O)},color:"secondary"},y)))};t.default=f,e.exports=t.default},3152:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){var t=e.children,n=(0,r.useConfig)().appConfig;return i.default.createElement(i.default.Fragment,null,i.default.createElement(v.default,{appConfig:n},i.default.createElement(y.default,{appConfig:n},i.default.createElement("div",{style:{display:"flex"}},i.default.createElement(_,null,t)))))};var r=n(2404),o=n(2240),a=h(n(1756)),i=h(n(2791)),c=n(5321),l=h(n(3808)),s=h(n(2613)),u=h(n(5342)),f=n(8246),d=n(5376),p=n(460),m=h(n(7308)),b=h(n(8784)),v=h(n(8892)),y=h(n(3785));function h(e){return e&&e.__esModule?e:{default:e}}function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}n(4933),n(7076),n(9350),n(5224);var _=function(e){var t=e.children,n=(0,p.useIntl)(),v=(0,r.useConfig)().appConfig,y=(0,c.useTheme)(),h=y.themeID,_=y.isDarkMode,O=y.isRTL,M=v||{},w=M.theme,S=M.pwa,E=M.notistack,P=S||{},I=P.useiOSPWAPrompt,j=P.iOSPWAPromptProps,x=(w||{}).themes,T=void 0===x?[]:x,N=(0,u.default)(h,T,_,O);return i.default.createElement(d.ThemeProvider,{theme:N},i.default.createElement(o.CssBaseline,null),i.default.createElement(f.SnackbarProvider,g({maxSnack:3},E),i.default.createElement(l.default,null,i.default.createElement(s.default,null,i.default.createElement(m.default,null,i.default.createElement(b.default,null,t))))),I&&i.default.createElement(a.default,g({promptOnVisit:1,timesToShow:3,copyTitle:n.formatMessage({id:"ios_prompt_title",defaultMessage:"Add to Home Screen"}),copyClosePrompt:n.formatMessage({id:"ios_prompt_close",defaultMessage:"Close"}),copyBody:n.formatMessage({id:"ios_prompt_body",defaultMessage:"This website has app functionality. Add it to your home screen to use it in fullscreen and while offline."}),copyShareButtonLabel:n.formatMessage({id:"ios_prompt_share_button",defaultMessage:"1) Press the 'Share' button"}),copyAddHomeButtonLabel:n.formatMessage({id:"ios_prompt_add_to_home_button",defaultMessage:"2) Press 'Add to Home Screen'"}),permanentlyHideOnDismiss:!1},j)))};e.exports=t.default},3808:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){var t=e.children,n=(0,i.useIntl)(),l=(0,o.useConfig)().appConfig,u=(0,a.useSnackbar)(),f=u.enqueueSnackbar,d=u.closeSnackbar,p=(l||{}).update||{},m=p.checkInterval,b=void 0===m?3e3:m,v=p.repeatInterval,y=void 0===v?3e5:v,h=function(e){return r.default.createElement(r.Fragment,null,r.default.createElement(c.Button,{variant:"contained",style:{margin:8},onClick:function(){d(e),s()}},n.formatMessage({id:"update",defaultMessage:"Update"})),r.default.createElement(c.Button,{color:"secondary",onClick:function(){setTimeout(g,y),d(e)}},n.formatMessage({id:"later",defaultMessage:"Later"})))},g=function e(){window.update?f(n.formatMessage({id:"update_available",defaultMessage:"Update available!"}),{persist:!0,action:h,preventDuplicate:!0,anchorOrigin:{vertical:"top",horizontal:"center"}}):setTimeout(e,b)};return(0,r.useEffect)(g,[g]),r.default.createElement(r.Fragment,null,t)};var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=l(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}r.default=e,n&&n.set(e,r);return r}(n(2791)),o=n(2404),a=n(8246),i=n(460),c=n(2240);function l(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(l=function(e){return e?n:t})(e)}var s=function(){window.update&&window.update()};e.exports=t.default},2549:function(e,t,n){"use strict";var r;t.__esModule=!0,t.default=t.Context=void 0;var o=((r=n(2791))&&r.__esModule?r:{default:r}).default.createContext(null);t.Context=o;var a=o;t.default=a},2613:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}r.default=e,n&&n.set(e,r);return r}(n(2791)),o=i(n(2549)),a=i(n(1038));function i(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}var s=function(e){var t=e.children,n=(0,r.useState)({isOpen:!1}),i=n[0],c=n[1],s=(0,r.useState)(!1),u=s[0],f=s[1],d=function(){c({isOpen:!1})};return r.default.createElement(o.default.Provider,{value:{openDialog:function(e){c(l({isOpen:!0},e))},closeDialog:d,setProcessing:function(e){f(e)}}},r.default.createElement(r.Fragment,null,t,r.default.createElement(a.default,l({handleClose:d,isProcessing:u},i))))};t.default=s,e.exports=t.default},8892:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}r.default=e,n&&n.set(e,r);return r}(n(2791)),o=l(n(4350)),a=n(2240),i=n(8967),c=l(n(9675));function l(e){return e&&e.__esModule?e:{default:e}}function s(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}var f=function(e){var t=e.appConfig,n=e.children,l=e.persistKey,s=void 0===l?"menu":l,f=(t||{}).menu,d=f.initialAuthMenuOpen,p=f.initialMiniMode,m=f.initialMenuOpen,b=f.initialMobileMenuOpen,v=f.initialMiniSwitchVisibility,y=f.useWindowWatcher,h=JSON.parse(localStorage.getItem(s)),g=(0,r.useReducer)(c.default,u({isAuthMenuOpen:d,isMiniMode:p,isMenuOpen:m,isMobileMenuOpen:b,isMiniSwitchVisibility:v},h)),_=g[0],O=g[1],M={toggleThis:function(e,t){void 0===t&&(t=null),"isAuthMenuOpen"===e?O((0,i.setIsAuthMenuOpen)(null!==t?t:!_.isAuthMenuOpen)):"isMiniMode"===e?O((0,i.setIsMiniMode)(null!==t?t:!_.isMiniMode)):"isMenuOpen"===e?O((0,i.setIsMenuOpen)(null!==t?t:!_.isMenuOpen)):"isMobileMenuOpen"===e?O((0,i.setIsMobileMenuOpen)(null!==t?t:!_.isMobileMenuOpen)):"isMiniSwitchVisibility"===e&&O((0,i.setIsMiniSwitchVisibility)(null!==t?t:!_.isMiniSwitchVisibility))},isAuthMenuOpen:_.isAuthMenuOpen,isMiniMode:_.isMiniMode,isMenuOpen:_.isMenuOpen,isMobileMenuOpen:_.isMobileMenuOpen,isMiniSwitchVisibility:_.isMiniSwitchVisibility},w=(0,a.useMediaQuery)("(min-width:600px)");return(0,r.useEffect)((function(){try{localStorage.setItem(s,JSON.stringify(_))}catch(e){console.warn(e)}}),[_,s]),(0,r.useEffect)((function(){y&&(w||(M.setMenuOpen(!1),M.setMiniMode(!1)))}),[w,M,y]),r.default.createElement(o.default.Provider,{value:u({isDesktop:w},M)},n)};t.default=f,e.exports=t.default},8967:function(e,t,n){"use strict";t.__esModule=!0,t.setIsAuthMenuOpen=function(e){return{type:r.SET_IS_AUTH_MENU_OPEN,payload:e}},t.setIsMenuOpen=function(e){return{type:r.SET_IS_MENU_OPEN,payload:e}},t.setIsMiniMode=function(e){return{type:r.SET_IS_MINI_MODE,payload:e}},t.setIsMiniSwitchVisibility=function(e){return{type:r.SET_IS_MINI_SWITCH_VISIBILITY,payload:e}},t.setIsMobileMenuOpen=function(e){return{type:r.SET_IS_MOBILE_MENU_OPEN,payload:e}};var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=o(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var c=a?Object.getOwnPropertyDescriptor(e,i):null;c&&(c.get||c.set)?Object.defineProperty(r,i,c):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n(1837));function o(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(o=function(e){return e?n:t})(e)}},9675:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){void 0===e&&(e={});var n=t.type,o=t.payload;switch(n){case r.SET_IS_AUTH_MENU_OPEN:return a({},e,{isAuthMenuOpen:o});case r.SET_IS_MINI_MODE:return a({},e,{isMiniMode:o});case r.SET_IS_MENU_OPEN:return a({},e,{isMenuOpen:o});case r.SET_IS_MOBILE_MENU_OPEN:return a({},e,{isMobileMenuOpen:o});case r.SET_IS_MINI_SWITCH_VISIBILITY:return a({},e,{isMiniSwitchVisibility:o});default:return e}};var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=o(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var c=a?Object.getOwnPropertyDescriptor(e,i):null;c&&(c.get||c.set)?Object.defineProperty(r,i,c):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n(1837));function o(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(o=function(e){return e?n:t})(e)}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}e.exports=t.default},1837:function(e,t){"use strict";t.__esModule=!0,t.SET_IS_MOBILE_MENU_OPEN=t.SET_IS_MINI_SWITCH_VISIBILITY=t.SET_IS_MINI_MODE=t.SET_IS_MENU_OPEN=t.SET_IS_AUTH_MENU_OPEN=void 0;t.SET_IS_AUTH_MENU_OPEN="SET_IS_AUTH_MENU_OPEN";t.SET_IS_MINI_MODE="SET_IS_MINI_MODE";t.SET_IS_MENU_OPEN="SET_IS_MENU_OPEN";t.SET_IS_MOBILE_MENU_OPEN="SET_IS_MOBILE_MENU_OPEN";t.SET_IS_MINI_SWITCH_VISIBILITY="SET_IS_MINI_SWITCH_VISIBILITY"},5342:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=n(5376);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var a=function(e,t,n,a){if(t)for(var i=0;i<t.length;i++)if(t[i].id===e){var c=t[i].source,l=null!=c?c.palette:{};return(0,r.createTheme)(o({},c,{palette:o({},l,{mode:n?"dark":"light"}),direction:a?"rtl":"ltr"}))}return(0,r.createTheme)({palette:{mode:n?"dark":"light"},direction:a?"rtl":"ltr"})};t.default=a,e.exports=t.default},1756:function(e,t,n){var r;n.g,e.exports=(r=n(2791),function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=5)}([function(e,t){e.exports=r},function(e,t,n){var r=n(2),o=n(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a=(r(o,{insert:"head",singleton:!1}),o.locals?o.locals:{});e.exports=a},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],l=t.base?a[0]+t.base:a[0],s=n[l]||0,u="".concat(l," ").concat(s);n[l]=s+1;var f=c(u),d={css:a[1],media:a[2],sourceMap:a[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:u,updater:v(d,t),references:1}),r.push(u)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var u,f=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,b=0;function v(e,t){var n,r,o;if(t.singleton){var a=b++;n=m||(m=s(t)),r=d.bind(null,n,a,!1),o=d.bind(null,n,a,!0)}else n=s(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);i[o].references--}for(var a=l(e,t),s=0;s<n.length;s++){var u=c(n[s]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=a}}}},function(e,t,n){(t=n(4)(!1)).push([e.i,'._4e96{overflow:hidden}._132a{background-color:rgba(0,0,0,0.8);left:0;min-height:100vh;min-height:-webkit-fill-available;opacity:0;position:fixed;top:0;transition:opacity 0.2s ease-in;width:100vw;z-index:999999}._132a._7c0e{opacity:1;display:block}._132a.efc7{pointer-events:none;touch-action:none}@media (prefers-color-scheme: dark){._132a._20ef{background:rgba(10,10,10,0.5);color:rgba(235,235,245,0.6)}}._6733{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background-color:rgba(250,250,250,0.8);border-radius:10px;bottom:0;color:black;filter:brightness(1.1);left:0;margin:0 8px 10px;overflow:hidden;position:fixed;transform:translateY(calc(100% + 10px));transition:transform 0.4s cubic-bezier(0.4, 0.24, 0.3, 1);width:calc(100vw - 16px);z-index:999999}._6733._7c0e{transform:translateY(0);display:block}._6733.efc7{pointer-events:none;touch-action:none}._6733._20ef{background:rgba(255,255,255,0.6);filter:brightness(1.6)}@media (prefers-color-scheme: dark){._6733._20ef{background:rgba(65,65,65,0.7);filter:brightness(1.1)}}._199d{align-items:center;border-bottom:1px solid rgba(0,0,0,0.1);border-top:0px;border-left:0px;border-right:0px;border-width:0.5px;display:flex;flex-flow:row nowrap;justify-content:space-between;padding:13px 16px}._20ef ._199d{border-color:rgba(60,60,67,0.29)}@media (prefers-color-scheme: dark){._20ef ._199d{border-color:rgba(140,140,140,0.7)}}._199d .ab5d{color:#333;font-family:-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:18px;font-weight:500;line-height:1.125;margin:0;padding:0}._20ef ._199d .ab5d{color:#000}@media (prefers-color-scheme: dark){._20ef ._199d .ab5d{color:#fff}}._199d ._6a7e{color:#2d7cf6;font-size:16px;padding:0;margin:0;border:0;background:transparent}._20ef ._199d ._6a7e{color:#0055b3}@media (prefers-color-scheme: dark){._20ef ._199d ._6a7e{color:#0984ff}}.ebda{display:flex;width:100%}.ebda .a91e{border-bottom:1px solid rgba(0,0,0,0.1);border-top:0px;border-left:0px;border-right:0px;border-width:0.5px;color:inherit;margin:0 16px;padding:16px;width:100%}._20ef .ebda .a91e{border-color:rgba(60,60,67,0.29)}@media (prefers-color-scheme: dark){._20ef .ebda .a91e{border-color:rgba(140,140,140,0.7)}}._7d3c{color:#7b7b7a;font-family:-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:13px;line-height:17px;margin:0;padding:0}._7d3c.e161{font-weight:600}._20ef ._7d3c{color:rgba(60,60,67,0.6)}@media (prefers-color-scheme: dark){._20ef ._7d3c{border-color:rgba(235,235,245,0.6);color:rgba(235,235,245,0.6)}}.e6cc{color:inherit;margin:0 16px;padding:16px}.e6cc ._3183{align-items:center;display:flex;flex-flow:row nowrap;justify-content:flex-start;text-align:left;margin-bottom:16px}.e6cc ._3183:last-of-type{margin-bottom:0}.e6cc ._4408,.e6cc ._4b98{flex:0 0 auto;height:30px;margin-right:32px;width:25px}.e6cc ._4b98{color:#2d7cf6}._20ef .e6cc ._4b98{color:black;fill:black}@media (prefers-color-scheme: dark){._20ef .e6cc ._4b98{color:white;fill:white}}.e6cc ._4408{color:#2d7cf6;fill:#2d7cf6}._20ef .e6cc ._4408{color:#0055b3;fill:#0055b3}@media (prefers-color-scheme: dark){._20ef .e6cc ._4408{color:#0984ff;fill:#0984ff}}\n',""]),t.locals={noScroll:"_4e96",pwaPromptOverlay:"_132a",visible:"_7c0e",hidden:"efc7",modern:"_20ef",pwaPrompt:"_6733",pwaPromptHeader:"_199d",pwaPromptTitle:"ab5d",pwaPromptCancel:"_6a7e",pwaPromptBody:"ebda",pwaPromptDescription:"a91e",pwaPromptCopy:"_7d3c",bold:"e161",pwaPromptInstruction:"e6cc",pwaPromptInstructionStep:"_3183",pwaPromptShareIcon:"_4408",pwaPromptHomeIcon:"_4b98"},e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n,r,o,a=e[1]||"",i=e[3];if(!i)return a;if(t&&"function"==typeof btoa){var c=(n=i,r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(o," */")),l=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[a].concat(l).concat([c]).join("\n")}return[a].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=function(e){var t=e.className,n=e.modern;return void 0!==n&&n?o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,viewBox:"0 0 566 670"},o.a.createElement("path",{d:"M255 12c4-4 10-8 16-8s12 3 16 8l94 89c3 4 6 7 8 12 2 6 0 14-5 19-7 8-20 9-28 2l-7-7-57-60 2 54v276c0 12-10 22-22 22-12 1-24-10-23-22V110l1-43-60 65c-5 5-13 8-21 6a19 19 0 0 1-16-17c-1-7 2-13 7-18l95-91z"}),o.a.createElement("path",{d:"M43 207c16-17 40-23 63-23h83v46h-79c-12 0-25 3-33 13-8 9-10 21-10 33v260c0 13 0 27 6 38 5 12 18 18 30 19l14 1h302c14 0 28 0 40-8 11-7 16-21 16-34V276c0-11-2-24-9-33-8-10-22-13-34-13h-78v-46h75c13 0 25 1 37 4 16 4 31 13 41 27 11 17 14 37 14 57v280c0 20-3 41-15 58a71 71 0 0 1-45 27c-11 2-23 3-34 3H109c-19-1-40-4-56-15-14-9-23-23-27-38-4-12-5-25-5-38V270c1-22 6-47 22-63z"})):o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,viewBox:"0 0 120 169"},o.a.createElement("g",{fill:"currentColor"},o.a.createElement("path",{d:"M60 0l28 28-2 2a586 586 0 0 0-4 4L64 15v90h-8V15L38 34l-4-4-2-2L60 0z"}),o.a.createElement("path",{d:"M0 49h44v8H8v104h104V57H76v-8h44v120H0V49z"})))},i=function(e){var t=e.className,n=e.modern;return void 0!==n&&n?o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,viewBox:"0 0 578 584"},o.a.createElement("path",{d:"M101 35l19-1h333c12 0 23 0 35 3 17 3 34 12 44 27 13 16 16 38 16 58v329c0 19 0 39-8 57a65 65 0 0 1-37 37c-18 7-38 7-57 7H130c-21 1-44 0-63-10-14-7-25-20-30-34-6-15-8-30-8-45V121c1-21 5-44 19-61 13-16 33-23 53-25m7 46c-10 1-19 6-24 14-7 8-9 20-9 31v334c0 12 2 25 10 34 9 10 23 12 35 12h336c14 1 30-3 38-15 6-9 8-20 8-31V125c0-12-2-24-10-33-9-9-22-12-35-12H121l-13 1z"}),o.a.createElement("path",{d:"M271 161c9-11 31-10 38 4 3 5 3 11 3 17v87h88c7 0 16 1 21 7 6 6 7 14 6 22a21 21 0 0 1-10 14c-5 4-11 5-17 5h-88v82c0 7-1 15-6 20-10 10-29 10-37-2-3-6-4-13-4-19v-81h-87c-8-1-17-3-23-9-5-6-6-15-4-22a21 21 0 0 1 11-14c6-3 13-3 19-3h84v-88c0-7 1-14 6-20z"})):o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:t,viewBox:"55.99425507 31.98999977 157.76574707 157.76371765"},o.a.createElement("path",{fill:"#58595b",d:"M90.49 32.83a54.6 54.6 0 019.55-.84c23.98.03 47.96 0 71.94.01 8.5.07 17.3 1.74 24.4 6.65 10.94 7.28 16.52 20.54 17.35 33.3.06 26.03 0 52.06.03 78.08 0 10.16-3.59 20.56-10.95 27.73-7.93 7.61-18.94 11.43-29.79 11.98-25.71.03-51.42 0-77.12.01-10.37-.11-21.01-3.77-28.17-11.48-8.22-8.9-11.72-21.29-11.73-33.21.01-23.03-.03-46.05.02-69.07-.01-9.14 1.33-18.71 6.65-26.4 6.21-9.4 16.97-14.79 27.82-16.76m38.18 41.09c-.05 10.25.01 20.5 0 30.75-9.58-.03-19.16.02-28.75-.04-2.27.08-4.98-.25-6.68 1.61-2.84 2.34-2.75 7.12.01 9.48 1.8 1.69 4.46 1.57 6.75 1.64 9.56-.04 19.12-.01 28.67-.03.02 10.24-.06 20.48.01 30.72-.14 2.66 1.36 5.4 3.95 6.3 3.66 1.66 8.52-1.13 8.61-5.23.26-10.59.02-21.2.09-31.79 9.88 0 19.76.02 29.64.01 2.74.12 5.85-.67 7.14-3.34 2.23-3.75-.61-9.34-5.08-9.29-10.57-.14-21.14-.01-31.7-.04-.01-10.25.04-20.49 0-30.74.3-3.5-2.66-7.09-6.3-6.79-3.65-.33-6.66 3.26-6.36 6.78z"}),o.a.createElement("path",{fill:"transparent",d:"M128.67 73.92c-.3-3.52 2.71-7.11 6.36-6.78 3.64-.3 6.6 3.29 6.3 6.79.04 10.25-.01 20.49 0 30.74 10.56.03 21.13-.1 31.7.04 4.47-.05 7.31 5.54 5.08 9.29-1.29 2.67-4.4 3.46-7.14 3.34-9.88.01-19.76-.01-29.64-.01-.07 10.59.17 21.2-.09 31.79-.09 4.1-4.95 6.89-8.61 5.23-2.59-.9-4.09-3.64-3.95-6.3-.07-10.24.01-20.48-.01-30.72-9.55.02-19.11-.01-28.67.03-2.29-.07-4.95.05-6.75-1.64-2.76-2.36-2.85-7.14-.01-9.48 1.7-1.86 4.41-1.53 6.68-1.61 9.59.06 19.17.01 28.75.04.01-10.25-.05-20.5 0-30.75z"}))},c=n(1),l=n.n(c);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p=function(e){var t=e.delay,n=e.copyTitle,c=e.copyBody,d=e.copyAddHomeButtonLabel,p=e.copyShareButtonLabel,m=e.copyClosePrompt,b=e.permanentlyHideOnDismiss,v=e.promptData,y=e.maxVisits,h=e.onClose,g=f(Object(r.useState)(!Boolean(t)),2),_=g[0],O=g[1];Object(r.useEffect)((function(){t&&setTimeout((function(){document.activeElement&&document.activeElement.blur(),O(!0)}),t)}),[]),Object(r.useEffect)((function(){_&&document.body.classList.add(l.a.noScroll)}),[_]);var M=/OS (13|14)/.test(window.navigator.userAgent),w=_?l.a.visible:l.a.hidden,S=M?l.a.modern:"legacy",E=function(e){document.body.classList.remove(l.a.noScroll),O(!1),b&&localStorage.setItem("iosPwaPrompt",JSON.stringify(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},v,{visits:y}))),"function"==typeof h&&h(e)},P=function(e){_||(e.currentTarget.style.display="none")};return o.a.createElement(r.Fragment,null,o.a.createElement("div",{className:"".concat(l.a.pwaPromptOverlay," ").concat(w," ").concat(S," iOSPWA-overlay"),"aria-label":"Close",role:"button",onClick:E,onTransitionEnd:P}),o.a.createElement("div",{className:"".concat(l.a.pwaPrompt," ").concat(w," ").concat(S," iOSPWA-container"),"aria-describedby":"pwa-prompt-description","aria-labelledby":"pwa-prompt-title",role:"dialog",onTransitionEnd:P},o.a.createElement("div",{className:"".concat(l.a.pwaPromptHeader," iOSPWA-header")},o.a.createElement("p",{id:"pwa-prompt-title",className:"".concat(l.a.pwaPromptTitle," iOSPWA-title")},n),o.a.createElement("button",{className:"".concat(l.a.pwaPromptCancel," iOSPWA-cancel"),onClick:E},m)),o.a.createElement("div",{className:"".concat(l.a.pwaPromptBody," iOSPWA-body")},o.a.createElement("div",{className:"".concat(l.a.pwaPromptDescription," iOSPWA-description")},o.a.createElement("p",{id:"pwa-prompt-description",className:"".concat(l.a.pwaPromptCopy," iOSPWA-description-copy")},c))),o.a.createElement("div",{className:"".concat(l.a.pwaPromptInstruction," iOSPWA-steps")},o.a.createElement("div",{className:"".concat(l.a.pwaPromptInstructionStep," iOSPWA-step1")},o.a.createElement(a,{className:"".concat(l.a.pwaPromptShareIcon," iOSPWA-step1-icon"),modern:M}),o.a.createElement("p",{className:"".concat(l.a.pwaPromptCopy," ").concat(l.a.bold," iOSPWA-step1-copy")},p)),o.a.createElement("div",{className:"".concat(l.a.pwaPromptInstructionStep," iOSPWA-step2")},o.a.createElement(i,{className:"".concat(l.a.pwaPromptHomeIcon," iOSPWA-step2-icon"),modern:M}),o.a.createElement("p",{className:"".concat(l.a.pwaPromptCopy," ").concat(l.a.bold," iOSPWA-step2-copy")},d)))))};function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=function(e){var t,n,r,a=e.timesToShow,i=void 0===a?1:a,c=e.promptOnVisit,l=void 0===c?1:c,s=e.permanentlyHideOnDismiss,u=void 0===s||s,f=e.copyTitle,d=void 0===f?"Add to Home Screen":f,v=e.copyBody,y=void 0===v?"This website has app functionality. Add it to your home screen to use it in fullscreen and while offline.":v,h=e.copyShareButtonLabel,g=void 0===h?"1) Press the 'Share' button on the menu bar below.":h,_=e.copyAddHomeButtonLabel,O=void 0===_?"2) Press 'Add to Home Screen'.":_,M=e.copyClosePrompt,w=void 0===M?"Cancel":M,S=e.delay,E=void 0===S?1e3:S,P=e.debug,I=void 0!==P&&P,j=e.onClose,x=void 0===j?function(){}:j,T=JSON.parse(localStorage.getItem("iosPwaPrompt"));if(null===T&&(T={isiOS:(t=/iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase()),n="MacIntel"===navigator.platform&&navigator.maxTouchPoints>1,r="standalone"in window.navigator&&window.navigator.standalone,(t||n)&&!r),visits:0},localStorage.setItem("iosPwaPrompt",JSON.stringify(T))),T.isiOS||I){var N=T.visits+1>=l;if((T.visits+1<l+i||I)&&(localStorage.setItem("iosPwaPrompt",JSON.stringify(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},T,{visits:T.visits+1}))),N||I))return o.a.createElement(p,{delay:E,copyTitle:d,copyBody:y,copyAddHomeButtonLabel:O,copyShareButtonLabel:g,copyClosePrompt:w,permanentlyHideOnDismiss:u,promptData:T,maxVisits:i+l,onClose:x})}return null}}]))},4933:function(e,t,n){"use strict";n.r(t),t.default={}},7076:function(e,t,n){"use strict";n.r(t),t.default={}},9350:function(e,t,n){"use strict";n.r(t),t.default={}},5224:function(e,t,n){"use strict";n.r(t),t.default={}}}]);
//# sourceMappingURL=152.d17c4f6e.chunk.js.map