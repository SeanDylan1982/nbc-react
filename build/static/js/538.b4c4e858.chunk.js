(self.webpackChunknbc_react=self.webpackChunknbc_react||[]).push([[538],{8454:function(e){var t={animationIterationCount:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridColumn:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,stopOpacity:!0,strokeDashoffset:!0,strokeOpacity:!0,strokeWidth:!0};e.exports=function(e,r){return"number"!==typeof r||t[e]?r:r+"px"}},6356:function(e,t,r){var n=r(5165),i=r(2832),o={float:"cssFloat"},l=r(8454);function a(e,t,r){var a=o[t];if("undefined"===typeof a&&(a=function(e){var t=i(e),r=n(t);return o[t]=o[e]=o[r]=r,r}(t)),a){if(void 0===r)return e.style[a];e.style[a]=l(a,r)}}function u(){2===arguments.length?"string"===typeof arguments[1]?arguments[0].style.cssText=arguments[1]:function(e,t){for(var r in t)t.hasOwnProperty(r)&&a(e,r,t[r])}(arguments[0],arguments[1]):a(arguments[0],arguments[1],arguments[2])}e.exports=u,e.exports.set=u,e.exports.get=function(e,t){return Array.isArray(t)?t.reduce((function(t,r){return t[r]=a(e,r||""),t}),{}):a(e,t||"")}},7538:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=a(t);if(r&&r.has(e))return r.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=i?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(2791)),i=r(3889),o=r(5321),l=["forwardedRef"];function a(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}var c=function(e){var t=e.forwardedRef,r=void 0===t?function(){}:t,a=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,l),c=(0,o.useTheme)().isRTL,s=(0,n.useCallback)((function(e){r(e?e.view:null)}),[r]);return n.default.createElement(i.Scrollbars,u({hideTracksWhenNotNeeded:!0,ref:s,renderView:function(e){return c?n.default.createElement("div",u({},e,{style:u({},e.style,{marginLeft:e.style.marginRight,marginRight:0})})):n.default.createElement("div",u({},e,{style:u({},e.style)}))}},a))};t.default=c,e.exports=t.default},8872:function(e){(function(){var t,r,n,i,o,l;"undefined"!==typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!==typeof process&&null!==process&&process.hrtime?(e.exports=function(){return(t()-o)/1e6},r=process.hrtime,i=(t=function(){var e;return 1e9*(e=r())[0]+e[1]})(),l=1e9*process.uptime(),o=i-l):Date.now?(e.exports=function(){return Date.now()-n},n=Date.now()):(e.exports=function(){return(new Date).getTime()-n},n=(new Date).getTime())}).call(this)},5165:function(e){var t=null,r=["Webkit","Moz","O","ms"];e.exports=function(e){t||(t=document.createElement("div"));var n=t.style;if(e in n)return e;for(var i=e.charAt(0).toUpperCase()+e.slice(1),o=r.length;o>=0;o--){var l=r[o]+i;if(l in n)return l}return!1}},888:function(e,t,r){"use strict";var n=r(9047);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,r,i,o,l){if(l!==n){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return r.PropTypes=r,r}},2007:function(e,t,r){e.exports=r(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},5475:function(e,t,r){for(var n=r(8872),i="undefined"===typeof window?r.g:window,o=["moz","webkit"],l="AnimationFrame",a=i["request"+l],u=i["cancel"+l]||i["cancelRequest"+l],c=0;!a&&c<o.length;c++)a=i[o[c]+"Request"+l],u=i[o[c]+"Cancel"+l]||i[o[c]+"CancelRequest"+l];if(!a||!u){var s=0,d=0,h=[];a=function(e){if(0===h.length){var t=n(),r=Math.max(0,16.666666666666668-(t-s));s=r+t,setTimeout((function(){var e=h.slice(0);h.length=0;for(var t=function(){if(!e[r].cancelled)try{e[r].callback(s)}catch(t){setTimeout((function(){throw t}),0)}},r=0;r<e.length;r++)t()}),Math.round(r))}return h.push({handle:++d,callback:e,cancelled:!1}),d},u=function(e){for(var t=0;t<h.length;t++)h[t].handle===e&&(h[t].cancelled=!0)}}e.exports=function(e){return a.call(i,e)},e.exports.cancel=function(){u.apply(i,arguments)},e.exports.polyfill=function(e){e||(e=i),e.requestAnimationFrame=a,e.cancelAnimationFrame=u}},9501:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.renderViewDefault=function(e){return l.default.createElement("div",e)},t.renderTrackHorizontalDefault=function(e){var t=e.style,r=a(e,["style"]),i=n({},t,{right:2,bottom:2,left:2,borderRadius:3});return l.default.createElement("div",n({style:i},r))},t.renderTrackVerticalDefault=function(e){var t=e.style,r=a(e,["style"]),i=n({},t,{right:2,bottom:2,top:2,borderRadius:3});return l.default.createElement("div",n({style:i},r))},t.renderThumbHorizontalDefault=function(e){var t=e.style,r=a(e,["style"]),i=n({},t,{cursor:"pointer",borderRadius:"inherit",backgroundColor:"rgba(0,0,0,.2)"});return l.default.createElement("div",n({style:i},r))},t.renderThumbVerticalDefault=function(e){var t=e.style,r=a(e,["style"]),i=n({},t,{cursor:"pointer",borderRadius:"inherit",backgroundColor:"rgba(0,0,0,.2)"});return l.default.createElement("div",n({style:i},r))};var i,o=r(2791),l=(i=o)&&i.__esModule?i:{default:i};function a(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}},2839:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(5475),l=m(o),a=m(r(6356)),u=r(2791),c=m(r(2007)),s=m(r(5737)),d=m(r(8441)),h=m(r(7087)),f=m(r(5562)),v=m(r(6417)),p=r(2801),g=r(9501);function m(e){return e&&e.__esModule?e:{default:e}}var y=function(e){function t(e){var r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];var l=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(r=t.__proto__||Object.getPrototypeOf(t)).call.apply(r,[this,e].concat(i)));return l.getScrollLeft=l.getScrollLeft.bind(l),l.getScrollTop=l.getScrollTop.bind(l),l.getScrollWidth=l.getScrollWidth.bind(l),l.getScrollHeight=l.getScrollHeight.bind(l),l.getClientWidth=l.getClientWidth.bind(l),l.getClientHeight=l.getClientHeight.bind(l),l.getValues=l.getValues.bind(l),l.getThumbHorizontalWidth=l.getThumbHorizontalWidth.bind(l),l.getThumbVerticalHeight=l.getThumbVerticalHeight.bind(l),l.getScrollLeftForOffset=l.getScrollLeftForOffset.bind(l),l.getScrollTopForOffset=l.getScrollTopForOffset.bind(l),l.scrollLeft=l.scrollLeft.bind(l),l.scrollTop=l.scrollTop.bind(l),l.scrollToLeft=l.scrollToLeft.bind(l),l.scrollToTop=l.scrollToTop.bind(l),l.scrollToRight=l.scrollToRight.bind(l),l.scrollToBottom=l.scrollToBottom.bind(l),l.handleTrackMouseEnter=l.handleTrackMouseEnter.bind(l),l.handleTrackMouseLeave=l.handleTrackMouseLeave.bind(l),l.handleHorizontalTrackMouseDown=l.handleHorizontalTrackMouseDown.bind(l),l.handleVerticalTrackMouseDown=l.handleVerticalTrackMouseDown.bind(l),l.handleHorizontalThumbMouseDown=l.handleHorizontalThumbMouseDown.bind(l),l.handleVerticalThumbMouseDown=l.handleVerticalThumbMouseDown.bind(l),l.handleWindowResize=l.handleWindowResize.bind(l),l.handleScroll=l.handleScroll.bind(l),l.handleDrag=l.handleDrag.bind(l),l.handleDragEnd=l.handleDragEnd.bind(l),l.state={didMountUniversal:!1},l}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){this.addListeners(),this.update(),this.componentDidMountUniversal()}},{key:"componentDidMountUniversal",value:function(){this.props.universal&&this.setState({didMountUniversal:!0})}},{key:"componentDidUpdate",value:function(){this.update()}},{key:"componentWillUnmount",value:function(){this.removeListeners(),(0,o.cancel)(this.requestFrame),clearTimeout(this.hideTracksTimeout),clearInterval(this.detectScrollingInterval)}},{key:"getScrollLeft",value:function(){return this.view?this.view.scrollLeft:0}},{key:"getScrollTop",value:function(){return this.view?this.view.scrollTop:0}},{key:"getScrollWidth",value:function(){return this.view?this.view.scrollWidth:0}},{key:"getScrollHeight",value:function(){return this.view?this.view.scrollHeight:0}},{key:"getClientWidth",value:function(){return this.view?this.view.clientWidth:0}},{key:"getClientHeight",value:function(){return this.view?this.view.clientHeight:0}},{key:"getValues",value:function(){var e=this.view||{},t=e.scrollLeft,r=void 0===t?0:t,n=e.scrollTop,i=void 0===n?0:n,o=e.scrollWidth,l=void 0===o?0:o,a=e.scrollHeight,u=void 0===a?0:a,c=e.clientWidth,s=void 0===c?0:c,d=e.clientHeight,h=void 0===d?0:d;return{left:r/(l-s)||0,top:i/(u-h)||0,scrollLeft:r,scrollTop:i,scrollWidth:l,scrollHeight:u,clientWidth:s,clientHeight:h}}},{key:"getThumbHorizontalWidth",value:function(){var e=this.props,t=e.thumbSize,r=e.thumbMinSize,n=this.view,i=n.scrollWidth,o=n.clientWidth,l=(0,f.default)(this.trackHorizontal),a=Math.ceil(o/i*l);return l<=a?0:t||Math.max(a,r)}},{key:"getThumbVerticalHeight",value:function(){var e=this.props,t=e.thumbSize,r=e.thumbMinSize,n=this.view,i=n.scrollHeight,o=n.clientHeight,l=(0,v.default)(this.trackVertical),a=Math.ceil(o/i*l);return l<=a?0:t||Math.max(a,r)}},{key:"getScrollLeftForOffset",value:function(e){var t=this.view,r=t.scrollWidth,n=t.clientWidth;return e/((0,f.default)(this.trackHorizontal)-this.getThumbHorizontalWidth())*(r-n)}},{key:"getScrollTopForOffset",value:function(e){var t=this.view,r=t.scrollHeight,n=t.clientHeight;return e/((0,v.default)(this.trackVertical)-this.getThumbVerticalHeight())*(r-n)}},{key:"scrollLeft",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.view&&(this.view.scrollLeft=e)}},{key:"scrollTop",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.view&&(this.view.scrollTop=e)}},{key:"scrollToLeft",value:function(){this.view&&(this.view.scrollLeft=0)}},{key:"scrollToTop",value:function(){this.view&&(this.view.scrollTop=0)}},{key:"scrollToRight",value:function(){this.view&&(this.view.scrollLeft=this.view.scrollWidth)}},{key:"scrollToBottom",value:function(){this.view&&(this.view.scrollTop=this.view.scrollHeight)}},{key:"addListeners",value:function(){if("undefined"!==typeof document&&this.view){var e=this.view,t=this.trackHorizontal,r=this.trackVertical,n=this.thumbHorizontal,i=this.thumbVertical;e.addEventListener("scroll",this.handleScroll),(0,d.default)()&&(t.addEventListener("mouseenter",this.handleTrackMouseEnter),t.addEventListener("mouseleave",this.handleTrackMouseLeave),t.addEventListener("mousedown",this.handleHorizontalTrackMouseDown),r.addEventListener("mouseenter",this.handleTrackMouseEnter),r.addEventListener("mouseleave",this.handleTrackMouseLeave),r.addEventListener("mousedown",this.handleVerticalTrackMouseDown),n.addEventListener("mousedown",this.handleHorizontalThumbMouseDown),i.addEventListener("mousedown",this.handleVerticalThumbMouseDown),window.addEventListener("resize",this.handleWindowResize))}}},{key:"removeListeners",value:function(){if("undefined"!==typeof document&&this.view){var e=this.view,t=this.trackHorizontal,r=this.trackVertical,n=this.thumbHorizontal,i=this.thumbVertical;e.removeEventListener("scroll",this.handleScroll),(0,d.default)()&&(t.removeEventListener("mouseenter",this.handleTrackMouseEnter),t.removeEventListener("mouseleave",this.handleTrackMouseLeave),t.removeEventListener("mousedown",this.handleHorizontalTrackMouseDown),r.removeEventListener("mouseenter",this.handleTrackMouseEnter),r.removeEventListener("mouseleave",this.handleTrackMouseLeave),r.removeEventListener("mousedown",this.handleVerticalTrackMouseDown),n.removeEventListener("mousedown",this.handleHorizontalThumbMouseDown),i.removeEventListener("mousedown",this.handleVerticalThumbMouseDown),window.removeEventListener("resize",this.handleWindowResize),this.teardownDragging())}}},{key:"handleScroll",value:function(e){var t=this,r=this.props,n=r.onScroll,i=r.onScrollFrame;n&&n(e),this.update((function(e){var r=e.scrollLeft,n=e.scrollTop;t.viewScrollLeft=r,t.viewScrollTop=n,i&&i(e)})),this.detectScrolling()}},{key:"handleScrollStart",value:function(){var e=this.props.onScrollStart;e&&e(),this.handleScrollStartAutoHide()}},{key:"handleScrollStartAutoHide",value:function(){this.props.autoHide&&this.showTracks()}},{key:"handleScrollStop",value:function(){var e=this.props.onScrollStop;e&&e(),this.handleScrollStopAutoHide()}},{key:"handleScrollStopAutoHide",value:function(){this.props.autoHide&&this.hideTracks()}},{key:"handleWindowResize",value:function(){(0,d.default)(!1),this.forceUpdate()}},{key:"handleHorizontalTrackMouseDown",value:function(e){e.preventDefault();var t=e.target,r=e.clientX,n=t.getBoundingClientRect().left,i=this.getThumbHorizontalWidth(),o=Math.abs(n-r)-i/2;this.view.scrollLeft=this.getScrollLeftForOffset(o)}},{key:"handleVerticalTrackMouseDown",value:function(e){e.preventDefault();var t=e.target,r=e.clientY,n=t.getBoundingClientRect().top,i=this.getThumbVerticalHeight(),o=Math.abs(n-r)-i/2;this.view.scrollTop=this.getScrollTopForOffset(o)}},{key:"handleHorizontalThumbMouseDown",value:function(e){e.preventDefault(),this.handleDragStart(e);var t=e.target,r=e.clientX,n=t.offsetWidth,i=t.getBoundingClientRect().left;this.prevPageX=n-(r-i)}},{key:"handleVerticalThumbMouseDown",value:function(e){e.preventDefault(),this.handleDragStart(e);var t=e.target,r=e.clientY,n=t.offsetHeight,i=t.getBoundingClientRect().top;this.prevPageY=n-(r-i)}},{key:"setupDragging",value:function(){(0,a.default)(document.body,p.disableSelectStyle),document.addEventListener("mousemove",this.handleDrag),document.addEventListener("mouseup",this.handleDragEnd),document.onselectstart=h.default}},{key:"teardownDragging",value:function(){(0,a.default)(document.body,p.disableSelectStyleReset),document.removeEventListener("mousemove",this.handleDrag),document.removeEventListener("mouseup",this.handleDragEnd),document.onselectstart=void 0}},{key:"handleDragStart",value:function(e){this.dragging=!0,e.stopImmediatePropagation(),this.setupDragging()}},{key:"handleDrag",value:function(e){if(this.prevPageX){var t=e.clientX,r=-this.trackHorizontal.getBoundingClientRect().left+t-(this.getThumbHorizontalWidth()-this.prevPageX);this.view.scrollLeft=this.getScrollLeftForOffset(r)}if(this.prevPageY){var n=e.clientY,i=-this.trackVertical.getBoundingClientRect().top+n-(this.getThumbVerticalHeight()-this.prevPageY);this.view.scrollTop=this.getScrollTopForOffset(i)}return!1}},{key:"handleDragEnd",value:function(){this.dragging=!1,this.prevPageX=this.prevPageY=0,this.teardownDragging(),this.handleDragEndAutoHide()}},{key:"handleDragEndAutoHide",value:function(){this.props.autoHide&&this.hideTracks()}},{key:"handleTrackMouseEnter",value:function(){this.trackMouseOver=!0,this.handleTrackMouseEnterAutoHide()}},{key:"handleTrackMouseEnterAutoHide",value:function(){this.props.autoHide&&this.showTracks()}},{key:"handleTrackMouseLeave",value:function(){this.trackMouseOver=!1,this.handleTrackMouseLeaveAutoHide()}},{key:"handleTrackMouseLeaveAutoHide",value:function(){this.props.autoHide&&this.hideTracks()}},{key:"showTracks",value:function(){clearTimeout(this.hideTracksTimeout),(0,a.default)(this.trackHorizontal,{opacity:1}),(0,a.default)(this.trackVertical,{opacity:1})}},{key:"hideTracks",value:function(){var e=this;if(!this.dragging&&!this.scrolling&&!this.trackMouseOver){var t=this.props.autoHideTimeout;clearTimeout(this.hideTracksTimeout),this.hideTracksTimeout=setTimeout((function(){(0,a.default)(e.trackHorizontal,{opacity:0}),(0,a.default)(e.trackVertical,{opacity:0})}),t)}}},{key:"detectScrolling",value:function(){var e=this;this.scrolling||(this.scrolling=!0,this.handleScrollStart(),this.detectScrollingInterval=setInterval((function(){e.lastViewScrollLeft===e.viewScrollLeft&&e.lastViewScrollTop===e.viewScrollTop&&(clearInterval(e.detectScrollingInterval),e.scrolling=!1,e.handleScrollStop()),e.lastViewScrollLeft=e.viewScrollLeft,e.lastViewScrollTop=e.viewScrollTop}),100))}},{key:"raf",value:function(e){var t=this;this.requestFrame&&l.default.cancel(this.requestFrame),this.requestFrame=(0,l.default)((function(){t.requestFrame=void 0,e()}))}},{key:"update",value:function(e){var t=this;this.raf((function(){return t._update(e)}))}},{key:"_update",value:function(e){var t=this.props,r=t.onUpdate,n=t.hideTracksWhenNotNeeded,i=this.getValues();if((0,d.default)()){var o=i.scrollLeft,l=i.clientWidth,u=i.scrollWidth,c=(0,f.default)(this.trackHorizontal),s=this.getThumbHorizontalWidth(),h={width:s,transform:"translateX("+o/(u-l)*(c-s)+"px)"},p=i.scrollTop,g=i.clientHeight,m=i.scrollHeight,y=(0,v.default)(this.trackVertical),b=this.getThumbVerticalHeight(),T={height:b,transform:"translateY("+p/(m-g)*(y-b)+"px)"};if(n){var w={visibility:u>l?"visible":"hidden"},k={visibility:m>g?"visible":"hidden"};(0,a.default)(this.trackHorizontal,w),(0,a.default)(this.trackVertical,k)}(0,a.default)(this.thumbHorizontal,h),(0,a.default)(this.thumbVertical,T)}r&&r(i),"function"===typeof e&&e(i)}},{key:"render",value:function(){var e=this,t=(0,d.default)(),r=this.props,i=(r.onScroll,r.onScrollFrame,r.onScrollStart,r.onScrollStop,r.onUpdate,r.renderView),o=r.renderTrackHorizontal,l=r.renderTrackVertical,a=r.renderThumbHorizontal,c=r.renderThumbVertical,h=r.tagName,f=(r.hideTracksWhenNotNeeded,r.autoHide),v=(r.autoHideTimeout,r.autoHideDuration),g=(r.thumbSize,r.thumbMinSize,r.universal),m=r.autoHeight,y=r.autoHeightMin,b=r.autoHeightMax,T=r.style,w=r.children,k=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(r,["onScroll","onScrollFrame","onScrollStart","onScrollStop","onUpdate","renderView","renderTrackHorizontal","renderTrackVertical","renderThumbHorizontal","renderThumbVertical","tagName","hideTracksWhenNotNeeded","autoHide","autoHideTimeout","autoHideDuration","thumbSize","thumbMinSize","universal","autoHeight","autoHeightMin","autoHeightMax","style","children"]),S=this.state.didMountUniversal,H=n({},p.containerStyleDefault,m&&n({},p.containerStyleAutoHeight,{minHeight:y,maxHeight:b}),T),M=n({},p.viewStyleDefault,{marginRight:t?-t:0,marginBottom:t?-t:0},m&&n({},p.viewStyleAutoHeight,{minHeight:(0,s.default)(y)?"calc("+y+" + "+t+"px)":y+t,maxHeight:(0,s.default)(b)?"calc("+b+" + "+t+"px)":b+t}),m&&g&&!S&&{minHeight:y,maxHeight:b},g&&!S&&p.viewStyleUniversalInitial),D={transition:"opacity "+v+"ms",opacity:0},L=n({},p.trackHorizontalStyleDefault,f&&D,(!t||g&&!S)&&{display:"none"}),O=n({},p.trackVerticalStyleDefault,f&&D,(!t||g&&!S)&&{display:"none"});return(0,u.createElement)(h,n({},k,{style:H,ref:function(t){e.container=t}}),[(0,u.cloneElement)(i({style:M}),{key:"view",ref:function(t){e.view=t}},w),(0,u.cloneElement)(o({style:L}),{key:"trackHorizontal",ref:function(t){e.trackHorizontal=t}},(0,u.cloneElement)(a({style:p.thumbHorizontalStyleDefault}),{ref:function(t){e.thumbHorizontal=t}})),(0,u.cloneElement)(l({style:O}),{key:"trackVertical",ref:function(t){e.trackVertical=t}},(0,u.cloneElement)(c({style:p.thumbVerticalStyleDefault}),{ref:function(t){e.thumbVertical=t}}))])}}]),t}(u.Component);t.default=y,y.propTypes={onScroll:c.default.func,onScrollFrame:c.default.func,onScrollStart:c.default.func,onScrollStop:c.default.func,onUpdate:c.default.func,renderView:c.default.func,renderTrackHorizontal:c.default.func,renderTrackVertical:c.default.func,renderThumbHorizontal:c.default.func,renderThumbVertical:c.default.func,tagName:c.default.string,thumbSize:c.default.number,thumbMinSize:c.default.number,hideTracksWhenNotNeeded:c.default.bool,autoHide:c.default.bool,autoHideTimeout:c.default.number,autoHideDuration:c.default.number,autoHeight:c.default.bool,autoHeightMin:c.default.oneOfType([c.default.number,c.default.string]),autoHeightMax:c.default.oneOfType([c.default.number,c.default.string]),universal:c.default.bool,style:c.default.object,children:c.default.node},y.defaultProps={renderView:g.renderViewDefault,renderTrackHorizontal:g.renderTrackHorizontalDefault,renderTrackVertical:g.renderTrackVerticalDefault,renderThumbHorizontal:g.renderThumbHorizontalDefault,renderThumbVertical:g.renderThumbVerticalDefault,tagName:"div",thumbMinSize:30,hideTracksWhenNotNeeded:!1,autoHide:!1,autoHideTimeout:1e3,autoHideDuration:200,autoHeight:!1,autoHeightMin:0,autoHeightMax:200,universal:!1}},2801:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.containerStyleDefault={position:"relative",overflow:"hidden",width:"100%",height:"100%"},t.containerStyleAutoHeight={height:"auto"},t.viewStyleDefault={position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"scroll",WebkitOverflowScrolling:"touch"},t.viewStyleAutoHeight={position:"relative",top:void 0,left:void 0,right:void 0,bottom:void 0},t.viewStyleUniversalInitial={overflow:"hidden",marginRight:0,marginBottom:0},t.trackHorizontalStyleDefault={position:"absolute",height:6},t.trackVerticalStyleDefault={position:"absolute",width:6},t.thumbHorizontalStyleDefault={position:"relative",display:"block",height:"100%"},t.thumbVerticalStyleDefault={position:"relative",display:"block",width:"100%"},t.disableSelectStyle={userSelect:"none"},t.disableSelectStyleReset={userSelect:""}},3889:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Scrollbars=void 0;var n,i=r(2839),o=(n=i)&&n.__esModule?n:{default:n};t.default=o.default,t.Scrollbars=o.default},6417:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.clientHeight,r=getComputedStyle(e),n=r.paddingTop,i=r.paddingBottom;return t-parseFloat(n)-parseFloat(i)}},5562:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.clientWidth,r=getComputedStyle(e),n=r.paddingLeft,i=r.paddingRight;return t-parseFloat(n)-parseFloat(i)}},8441:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(e&&!1!==l)return l;if("undefined"!==typeof document){var t=document.createElement("div");(0,o.default)(t,{width:100,height:100,position:"absolute",top:-9999,overflow:"scroll",MsOverflowStyle:"scrollbar"}),document.body.appendChild(t),l=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}else l=0;return l||0};var n,i=r(6356),o=(n=i)&&n.__esModule?n:{default:n};var l=!1},5737:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return"string"===typeof e}},7087:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return!1}},2832:function(e,t,r){var n=r(3416);e.exports=function(e){return n(e).replace(/\s(\w)/g,(function(e,t){return t.toUpperCase()}))}},2726:function(e){e.exports=function(e){return t.test(e)?e.toLowerCase():r.test(e)?(function(e){return e.replace(i,(function(e,t){return t?" "+t:""}))}(e)||e).toLowerCase():n.test(e)?function(e){return e.replace(o,(function(e,t,r){return t+" "+r.toLowerCase().split("").join(" ")}))}(e).toLowerCase():e.toLowerCase()};var t=/\s/,r=/(_|-|\.|:)/,n=/([a-z][A-Z]|[A-Z][a-z])/;var i=/[\W_]+(.|$)/g;var o=/(.)([A-Z]+)/g},3416:function(e,t,r){var n=r(2726);e.exports=function(e){return n(e).replace(/[\W_]+(.|$)/g,(function(e,t){return t?" "+t:""})).trim()}}}]);
//# sourceMappingURL=538.b4c4e858.chunk.js.map