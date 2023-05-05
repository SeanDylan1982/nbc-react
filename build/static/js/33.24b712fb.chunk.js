"use strict";(self.webpackChunknbc_react=self.webpackChunknbc_react||[]).push([[33],{8033:function(e,t,n){n.r(t);var a=n(5849),o=n(7043),l=(n(2791),n(3539)),r=n(4994),i=n(184);t.default=function(){var e=(0,l.Z)(),t=(0,r.k5)(),n=t.openDialog,u=t.setProcessing;return(0,i.jsxs)(o.default,{pageTitle:e.formatMessage({id:"dialog_demo",defaultMessage:"Dialog demo"}),children:[(0,i.jsx)("br",{}),(0,i.jsx)(a.Z,{onClick:function(){n({title:e.formatMessage({id:"dialog_title",defaultMessage:"Dialog title"}),message:e.formatMessage({id:"dialog_message",defaultMessage:'Dialog message. You can put as much text as you want here. Ask a question or show a warning before deleting something. You can also set the action text to something like "YES, Delete" and run that action by passing a "handleAction" prop. This receives a "handleClose" callback with which you can close the dialog when your action is done.'}),action:e.formatMessage({id:"dialog_action",defaultMessage:"YES, Delete"}),handleAction:function(e){u(!0),console.log("Doing some async stuff"),setTimeout((function(){console.log("finished async stuff"),e()}),3e3)}})},children:"OPEN DIALOG"})]})}},1038:function(e,t,n){t.__esModule=!0,t.default=void 0;var a,o=(a=n(2791))&&a.__esModule?a:{default:a},l=n(460),r=n(5376),i=n(2650),u=["isProcessing","isOpen","id","message","title","action","handleAction","handleClose"];function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}var c=o.default.forwardRef((function(e,t){return o.default.createElement(i.Slide,s({direction:"up"},e,{ref:t}))})),f=function(e){var t=e.isProcessing,n=void 0!==t&&t,a=e.isOpen,f=void 0!==a&&a,d=(e.id,e.message),g=void 0===d?"":d,p=e.title,v=void 0===p?"":p,h=e.action,m=void 0===h?"":h,y=e.handleAction,b=void 0===y?function(){}:y,O=e.handleClose,_=void 0===O?function(){}:O,M=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,u),C=(0,l.useIntl)(),w=(0,r.useTheme)(),k=(0,i.useMediaQuery)(w.breakpoints.down("sm"));return o.default.createElement(i.Dialog,s({fullScreen:k,open:f,onClose:_,TransitionComponent:c,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},M),o.default.createElement(i.DialogTitle,{id:"alert-dialog-title"},v),o.default.createElement(i.DialogContent,null,o.default.createElement(i.DialogContentText,{id:"alert-dialog-description"},g)),o.default.createElement(i.DialogActions,null,o.default.createElement(i.Button,{onClick:_,color:"primary"},C.formatMessage({id:"cancel",defaultMessage:"Cancel"})),o.default.createElement(i.Button,{disabled:n,onClick:function(){b(_)},color:"secondary"},m)))};t.default=f,e.exports=t.default},2549:function(e,t,n){var a;t.__esModule=!0,t.default=t.Context=void 0;var o=((a=n(2791))&&a.__esModule?a:{default:a}).default.createContext(null);t.Context=o;var l=o;t.default=l},2613:function(e,t,n){t.__esModule=!0,t.default=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=i(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var r=o?Object.getOwnPropertyDescriptor(e,l):null;r&&(r.get||r.set)?Object.defineProperty(a,l,r):a[l]=e[l]}a.default=e,n&&n.set(e,a);return a}(n(2791)),o=r(n(2549)),l=r(n(1038));function r(e){return e&&e.__esModule?e:{default:e}}function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}var s=function(e){var t=e.children,n=(0,a.useState)({isOpen:!1}),r=n[0],i=n[1],s=(0,a.useState)(!1),c=s[0],f=s[1],d=function(){i({isOpen:!1})};return a.default.createElement(o.default.Provider,{value:{openDialog:function(e){i(u({isOpen:!0},e))},closeDialog:d,setProcessing:function(e){f(e)}}},a.default.createElement(a.Fragment,null,t,a.default.createElement(l.default,u({handleClose:d,isProcessing:c},r))))};t.default=s,e.exports=t.default},4994:function(e,t,n){t.k5=function(){return(0,a.useContext)(o.default)};var a=n(2791),o=l(n(2549));function l(e){return e&&e.__esModule?e:{default:e}}l(n(8326)).default,l(n(2613)).default},8326:function(e,t,n){t.__esModule=!0,t.default=void 0;var a=l(n(2549)),o=l(n(2791));function l(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}var i=function(e){return function(t){return o.default.createElement(a.default.Consumer,null,(function(n){return o.default.createElement(e,r({},n,t))}))}};t.default=i,e.exports=t.default}}]);
//# sourceMappingURL=33.24b712fb.chunk.js.map