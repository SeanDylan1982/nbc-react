"use strict";(self.webpackChunknbc_react=self.webpackChunknbc_react||[]).push([[225],{8225:function(e,t,n){t.__esModule=!0,t.default=void 0;var i,r=(i=n(2791))&&i.__esModule?i:{default:i},u=n(1862),o=n(1068),a=n(5321),l=n(2240),s=n(3170),c=n(5376);function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},f.apply(this,arguments)}var p=function(){var e=(0,u.useAuth)().auth,t=(0,a.useTheme)(),n=t.toggleThisTheme,i=t.isDarkMode,p=t.isRTL,M=(0,o.useMenu)(),d=(0,c.useTheme)(),_=e,O=M||{},I=O.toggleThis,E=O.isDesktop,y=O.isMiniMode,S=O.isMenuOpen,h=O.isMiniSwitchVisibility,v=O.isAuthMenuOpen,m=e.isAuthenticated,b=function(e){var t=e.src,n=e.alt,i=e.avatar;return r.default.createElement(l.ListItemAvatar,{onClick:function(){return I("isAuthMenuOpen")}},r.default.createElement(l.Avatar,{src:t,alt:n},i))},g={icon:{color:d.palette.grey.A100,cursor:"pointer"},toolbar:f({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:d.spacing(1)},d.mixins.toolbar)};return r.default.createElement(l.Paper,{square:!0,elevation:3,sx:{backgroundColor:function(e){return"dark"===e.palette.mode?e.palette.background.default:e.palette.primary.dark},margin:0,padding:0}},y&&m&&r.default.createElement("div",{style:f({},g.toolbar)}),r.default.createElement(l.List,{sx:f({},m?{}:g.toolbar)},!y&&r.default.createElement(l.ListItem,{sx:f({color:function(e){return d.palette.grey.A100},cursor:"pointer"},d.mixins.toolbar)},m&&(_.photoURL?b({src:_.photoURL,alt:"user"}):b({avatar:_.displayName?_.displayName[0].toUpperCase():r.default.createElement(s.Person,null)})),r.default.createElement(l.ListItemSecondaryAction,null,r.default.createElement(l.IconButton,{onClick:function(){n("isDarkMode")}},i?r.default.createElement(s.BrightnessHigh,{sx:f({},g.icon)}):r.default.createElement(s.Brightness4,{sx:f({},g.icon)})),E&&r.default.createElement(r.default.Fragment,null,h&&r.default.createElement(l.IconButton,{onClick:function(){I("isMiniMode",!0),I("isMenuOpen",!1)}},r.default.createElement(s.ChromeReaderMode,{sx:f({},g.icon)})),r.default.createElement(l.IconButton,{color:"inherit",onClick:function(){I("isMenuOpen",!1)}},p?r.default.createElement(s.ChevronRight,{sx:f({},g.icon)}):r.default.createElement(s.ChevronLeft,{sx:f({},g.icon)}))," "))),m&&r.default.createElement(l.ListItem,{onClick:function(){I("isAuthMenuOpen")}},!S&&y&&E&&(_.photoURL?b({src:_.photoURL,alt:"user"}):b({avatar:_.displayName?_.displayName[0].toUpperCase():r.default.createElement(s.Person,null)})),!y&&r.default.createElement(l.ListItemText,{sx:{color:function(e){return d.palette.grey.A100},cursor:"pointer",marginLeft:!S&&E&&_.photoURL?7:void 0,textOverflow:"ellipsis"},secondaryTypographyProps:{color:function(e){return d.palette.grey.A100},width:80,textOverflow:"ellipsis"},primary:_.displayName,secondary:_.email}),S&&r.default.createElement(l.ListItemSecondaryAction,{onClick:function(){I("isAuthMenuOpen")}},r.default.createElement(l.IconButton,null,v?r.default.createElement(s.ArrowDropUp,{sx:f({},g.icon)}):r.default.createElement(s.ArrowDropDown,{sx:f({},g.icon)}))))))};t.default=p,e.exports=t.default},8892:function(e,t,n){t.__esModule=!0,t.default=void 0;var i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var i={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var o=r?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(i,u,o):i[u]=e[u]}i.default=e,n&&n.set(e,i);return i}(n(2791)),r=l(n(4350)),u=n(2240),o=n(8967),a=l(n(9675));function l(e){return e&&e.__esModule?e:{default:e}}function s(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},c.apply(this,arguments)}var f=function(e){var t=e.appConfig,n=e.children,l=e.persistKey,s=void 0===l?"menu":l,f=(t||{}).menu,p=f.initialAuthMenuOpen,M=f.initialMiniMode,d=f.initialMenuOpen,_=f.initialMobileMenuOpen,O=f.initialMiniSwitchVisibility,I=f.useWindowWatcher,E=JSON.parse(localStorage.getItem(s)),y=(0,i.useReducer)(a.default,c({isAuthMenuOpen:p,isMiniMode:M,isMenuOpen:d,isMobileMenuOpen:_,isMiniSwitchVisibility:O},E)),S=y[0],h=y[1],v={toggleThis:function(e,t){void 0===t&&(t=null),"isAuthMenuOpen"===e?h((0,o.setIsAuthMenuOpen)(null!==t?t:!S.isAuthMenuOpen)):"isMiniMode"===e?h((0,o.setIsMiniMode)(null!==t?t:!S.isMiniMode)):"isMenuOpen"===e?h((0,o.setIsMenuOpen)(null!==t?t:!S.isMenuOpen)):"isMobileMenuOpen"===e?h((0,o.setIsMobileMenuOpen)(null!==t?t:!S.isMobileMenuOpen)):"isMiniSwitchVisibility"===e&&h((0,o.setIsMiniSwitchVisibility)(null!==t?t:!S.isMiniSwitchVisibility))},isAuthMenuOpen:S.isAuthMenuOpen,isMiniMode:S.isMiniMode,isMenuOpen:S.isMenuOpen,isMobileMenuOpen:S.isMobileMenuOpen,isMiniSwitchVisibility:S.isMiniSwitchVisibility},m=(0,u.useMediaQuery)("(min-width:600px)");return(0,i.useEffect)((function(){try{localStorage.setItem(s,JSON.stringify(S))}catch(e){console.warn(e)}}),[S,s]),(0,i.useEffect)((function(){I&&(m||(v.setMenuOpen(!1),v.setMiniMode(!1)))}),[m,v,I]),i.default.createElement(r.default.Provider,{value:c({isDesktop:m},v)},n)};t.default=f,e.exports=t.default},1068:function(e,t,n){t.__esModule=!0,t.default=void 0,t.useMenu=function(){return(0,i.useContext)(r.default)},t.withMenu=void 0;var i=n(2791),r=a(n(4350)),u=a(n(8172));t.withMenu=u.default;var o=a(n(8892));function a(e){return e&&e.__esModule?e:{default:e}}t.default=o.default},8967:function(e,t,n){t.__esModule=!0,t.setIsAuthMenuOpen=function(e){return{type:i.SET_IS_AUTH_MENU_OPEN,payload:e}},t.setIsMenuOpen=function(e){return{type:i.SET_IS_MENU_OPEN,payload:e}},t.setIsMiniMode=function(e){return{type:i.SET_IS_MINI_MODE,payload:e}},t.setIsMiniSwitchVisibility=function(e){return{type:i.SET_IS_MINI_SWITCH_VISIBILITY,payload:e}},t.setIsMobileMenuOpen=function(e){return{type:i.SET_IS_MOBILE_MENU_OPEN,payload:e}};var i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var i={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var a=u?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(i,o,a):i[o]=e[o]}i.default=e,n&&n.set(e,i);return i}(n(1837));function r(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}},9675:function(e,t,n){t.__esModule=!0,t.default=function(e,t){void 0===e&&(e={});var n=t.type,r=t.payload;switch(n){case i.SET_IS_AUTH_MENU_OPEN:return u({},e,{isAuthMenuOpen:r});case i.SET_IS_MINI_MODE:return u({},e,{isMiniMode:r});case i.SET_IS_MENU_OPEN:return u({},e,{isMenuOpen:r});case i.SET_IS_MOBILE_MENU_OPEN:return u({},e,{isMobileMenuOpen:r});case i.SET_IS_MINI_SWITCH_VISIBILITY:return u({},e,{isMiniSwitchVisibility:r});default:return e}};var i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var i={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var a=u?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(i,o,a):i[o]=e[o]}i.default=e,n&&n.set(e,i);return i}(n(1837));function r(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},u.apply(this,arguments)}e.exports=t.default},1837:function(e,t){t.__esModule=!0,t.SET_IS_MOBILE_MENU_OPEN=t.SET_IS_MINI_SWITCH_VISIBILITY=t.SET_IS_MINI_MODE=t.SET_IS_MENU_OPEN=t.SET_IS_AUTH_MENU_OPEN=void 0;t.SET_IS_AUTH_MENU_OPEN="SET_IS_AUTH_MENU_OPEN";t.SET_IS_MINI_MODE="SET_IS_MINI_MODE";t.SET_IS_MENU_OPEN="SET_IS_MENU_OPEN";t.SET_IS_MOBILE_MENU_OPEN="SET_IS_MOBILE_MENU_OPEN";t.SET_IS_MINI_SWITCH_VISIBILITY="SET_IS_MINI_SWITCH_VISIBILITY"},8172:function(e,t,n){t.__esModule=!0,t.default=void 0;var i=u(n(4350)),r=u(n(2791));function u(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o.apply(this,arguments)}var a=function(e){return function(t){return r.default.createElement(i.default.Consumer,null,(function(n){return r.default.createElement(e,o({},n,t))}))}};t.default=a,e.exports=t.default}}]);
//# sourceMappingURL=225.4682acad.chunk.js.map