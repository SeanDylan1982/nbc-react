"use strict";(self.webpackChunknbc_react=self.webpackChunknbc_react||[]).push([[570],{8112:function(e,t,n){var i=n(4942),r=n(4841),u=(0,n(6934).ZP)(r.Z)((function(e){var t,n=e.theme;return t={width:"auto",marginLeft:n.spacing(8),marginRight:n.spacing(8)},(0,i.Z)(t,n.breakpoints.up(620),{width:400,marginLeft:"auto",marginRight:"auto"}),(0,i.Z)(t,"marginTop",n.spacing(8)),(0,i.Z)(t,"display","flex"),(0,i.Z)(t,"flexDirection","column"),(0,i.Z)(t,"alignItems","center"),(0,i.Z)(t,"padding","18px 18px 18px"),t}));t.Z=u},5570:function(e,t,n){n.r(t);var i=n(1413),r=n(9439),u=n(4567),a=n(3006),o=n(5849),s=n(7043),l=n(2791),c=n(1087),f=n(1862),p=n(7689),d=n(3539),M=n(1068),_=n(3967),O=n(8112),I=n(184);t.default=function(e){var t=e.redirectTo,n=void 0===t?"/SignIn":t,y=(0,d.Z)(),S=(0,_.Z)(),h=(0,p.s0)(),g=(0,p.TH)(),E=(0,l.useState)(""),v=(0,r.Z)(E,2),b=v[0],w=v[1],m=(0,l.useState)(""),j=(0,r.Z)(m,2),T=j[0],N=j[1],P=(0,M.useMenu)().toggleThis,x=(0,f.useAuth)().setAuth;var U=function(e){x((0,i.Z)({isAuthenticated:!0},e)),P("isAuthMenuOpen",!1);var t=new URLSearchParams(g.search).get("from");h(t||n,{replace:!0})};return(0,I.jsx)(s.default,{pageTitle:"Sign In | Northmead Bowling Club",children:(0,I.jsx)(O.Z,{elevation:6,children:(0,I.jsxs)("div",{sytle:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%"},children:[(0,I.jsx)(u.Z,{component:"h1",variant:"h5",children:y.formatMessage({id:"sign_in"})}),(0,I.jsxs)("form",{sytle:{marginTop:S.spacing(1)},onSubmit:function(e){e.preventDefault(),U({displayName:b,password:T});var t=localStorage.getItem("auth");console.log(t)},noValidate:!0,children:[(0,I.jsx)(a.Z,{value:b,onInput:function(e){return w(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:y.formatMessage({id:"username"}),name:"username",autoComplete:"username",autoFocus:!0}),(0,I.jsx)(a.Z,{value:T,onInput:function(e){return N(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:y.formatMessage({id:"password"}),type:"password",id:"password",autoComplete:"current-password"}),(0,I.jsx)(o.Z,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",style:{margin:S.spacing(3,0,2)},children:y.formatMessage({id:"sign_in",defaultMessage:"Sign In"})})]}),(0,I.jsxs)("div",{style:{display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-between"},children:[(0,I.jsxs)(c.Link,{to:"/password_reset",children:[y.formatMessage({id:"forgot_password"}),"?"]}),(0,I.jsx)(c.Link,{to:"/signup",children:y.formatMessage({id:"registration"})})]})]})})})}},8892:function(e,t,n){t.__esModule=!0,t.default=void 0;var i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=l(t);if(n&&n.has(e))return n.get(e);var i={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var a=r?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(i,u,a):i[u]=e[u]}i.default=e,n&&n.set(e,i);return i}(n(2791)),r=s(n(4350)),u=n(2650),a=n(8967),o=s(n(9675));function s(e){return e&&e.__esModule?e:{default:e}}function l(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(l=function(e){return e?n:t})(e)}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},c.apply(this,arguments)}var f=function(e){var t=e.appConfig,n=e.children,s=e.persistKey,l=void 0===s?"menu":s,f=(t||{}).menu,p=f.initialAuthMenuOpen,d=f.initialMiniMode,M=f.initialMenuOpen,_=f.initialMobileMenuOpen,O=f.initialMiniSwitchVisibility,I=f.useWindowWatcher,y=JSON.parse(localStorage.getItem(l)),S=(0,i.useReducer)(o.default,c({isAuthMenuOpen:p,isMiniMode:d,isMenuOpen:M,isMobileMenuOpen:_,isMiniSwitchVisibility:O},y)),h=S[0],g=S[1],E={toggleThis:function(e,t){void 0===t&&(t=null),"isAuthMenuOpen"===e?g((0,a.setIsAuthMenuOpen)(null!==t?t:!h.isAuthMenuOpen)):"isMiniMode"===e?g((0,a.setIsMiniMode)(null!==t?t:!h.isMiniMode)):"isMenuOpen"===e?g((0,a.setIsMenuOpen)(null!==t?t:!h.isMenuOpen)):"isMobileMenuOpen"===e?g((0,a.setIsMobileMenuOpen)(null!==t?t:!h.isMobileMenuOpen)):"isMiniSwitchVisibility"===e&&g((0,a.setIsMiniSwitchVisibility)(null!==t?t:!h.isMiniSwitchVisibility))},isAuthMenuOpen:h.isAuthMenuOpen,isMiniMode:h.isMiniMode,isMenuOpen:h.isMenuOpen,isMobileMenuOpen:h.isMobileMenuOpen,isMiniSwitchVisibility:h.isMiniSwitchVisibility},v=(0,u.useMediaQuery)("(min-width:600px)");return(0,i.useEffect)((function(){try{localStorage.setItem(l,JSON.stringify(h))}catch(e){console.warn(e)}}),[h,l]),(0,i.useEffect)((function(){I&&(v||(E.setMenuOpen(!1),E.setMiniMode(!1)))}),[v,E,I]),i.default.createElement(r.default.Provider,{value:c({isDesktop:v},E)},n)};t.default=f,e.exports=t.default},1068:function(e,t,n){t.__esModule=!0,t.default=void 0,t.useMenu=function(){return(0,i.useContext)(r.default)},t.withMenu=void 0;var i=n(2791),r=o(n(4350)),u=o(n(8172));t.withMenu=u.default;var a=o(n(8892));function o(e){return e&&e.__esModule?e:{default:e}}t.default=a.default},8967:function(e,t,n){t.__esModule=!0,t.setIsAuthMenuOpen=function(e){return{type:i.SET_IS_AUTH_MENU_OPEN,payload:e}},t.setIsMenuOpen=function(e){return{type:i.SET_IS_MENU_OPEN,payload:e}},t.setIsMiniMode=function(e){return{type:i.SET_IS_MINI_MODE,payload:e}},t.setIsMiniSwitchVisibility=function(e){return{type:i.SET_IS_MINI_SWITCH_VISIBILITY,payload:e}},t.setIsMobileMenuOpen=function(e){return{type:i.SET_IS_MOBILE_MENU_OPEN,payload:e}};var i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var i={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var o=u?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(i,a,o):i[a]=e[a]}i.default=e,n&&n.set(e,i);return i}(n(1837));function r(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}},9675:function(e,t,n){t.__esModule=!0,t.default=function(e,t){void 0===e&&(e={});var n=t.type,r=t.payload;switch(n){case i.SET_IS_AUTH_MENU_OPEN:return u({},e,{isAuthMenuOpen:r});case i.SET_IS_MINI_MODE:return u({},e,{isMiniMode:r});case i.SET_IS_MENU_OPEN:return u({},e,{isMenuOpen:r});case i.SET_IS_MOBILE_MENU_OPEN:return u({},e,{isMobileMenuOpen:r});case i.SET_IS_MINI_SWITCH_VISIBILITY:return u({},e,{isMiniSwitchVisibility:r});default:return e}};var i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var i={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var o=u?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(i,a,o):i[a]=e[a]}i.default=e,n&&n.set(e,i);return i}(n(1837));function r(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},u.apply(this,arguments)}e.exports=t.default},1837:function(e,t){t.__esModule=!0,t.SET_IS_MOBILE_MENU_OPEN=t.SET_IS_MINI_SWITCH_VISIBILITY=t.SET_IS_MINI_MODE=t.SET_IS_MENU_OPEN=t.SET_IS_AUTH_MENU_OPEN=void 0;t.SET_IS_AUTH_MENU_OPEN="SET_IS_AUTH_MENU_OPEN";t.SET_IS_MINI_MODE="SET_IS_MINI_MODE";t.SET_IS_MENU_OPEN="SET_IS_MENU_OPEN";t.SET_IS_MOBILE_MENU_OPEN="SET_IS_MOBILE_MENU_OPEN";t.SET_IS_MINI_SWITCH_VISIBILITY="SET_IS_MINI_SWITCH_VISIBILITY"},8172:function(e,t,n){t.__esModule=!0,t.default=void 0;var i=u(n(4350)),r=u(n(2791));function u(e){return e&&e.__esModule?e:{default:e}}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a.apply(this,arguments)}var o=function(e){return function(t){return r.default.createElement(i.default.Consumer,null,(function(n){return r.default.createElement(e,a({},n,t))}))}};t.default=o,e.exports=t.default},1413:function(e,t,n){n.d(t,{Z:function(){return u}});var i=n(4942);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=570.fbf6a722.chunk.js.map