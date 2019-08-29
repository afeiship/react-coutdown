!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("prop-types"),require("react"),require("noop"),require("react-dom"),require("classnames"),require("object-assign")):"function"==typeof define&&define.amd?define(["prop-types","react","noop","react-dom","classnames","object-assign"],t):"object"==typeof exports?exports.BoilerplateReactComponent=t(require("prop-types"),require("react"),require("noop"),require("react-dom"),require("classnames"),require("object-assign")):e.BoilerplateReactComponent=t(e["prop-types"],e.react,e.noop,e["react-dom"],e.classnames,e["object-assign"])}(window,function(e,t,n,r,o,u){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t){e.exports=u},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),u=(n(3),n(0)),i=n.n(u),a=(n(4),n(2)),s=n.n(a);n(5);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=y(t).call(this,e))||"object"!==c(o)&&"function"!=typeof o?b(r):o).state={value:e.start},n.countdown=n.countdown.bind(b(n)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,r["Component"]),v(t,[{key:"value",get:function(){return this.state.value}},{key:"boundary",get:function(){var e=this.props;return e.step+e.end}},{key:"paused",get:function(){return"pause"===this.props.status}}]),v(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.status;t!==this.props.status&&this[t]()}},{key:"componentDidMount",value:function(){this[this.props.status]()}},{key:"init",value:function(){var e=this.props.start;this.change(e,"init")}},{key:"pause",value:function(){this.setState({status:"pause"})}},{key:"reset",value:function(){clearInterval(this.timer),this.value<=this.boundary&&this.init()}},{key:"count",value:function(){var e=this.props.interval;this.reset(),this.timer=setInterval(this.countdown,e)}},{key:"countdown",value:function(){var e=this.props,t=e.step,n=e.end;if(!this.paused){var r=this.value,o=r+t;r<=n?this.done():this.change(o,"count")}}},{key:"done",value:function(){clearInterval(this.timer),this.change(this.boundary,"done")}},{key:"change",value:function(e,t){var n=this.props.onChange,r={value:e};this.setState(r,function(){r.status=t,n({target:r})})}},{key:"render",value:function(){var e=this.props,t=e.nodeName,n=e.virtual,r=(e.status,e.start,e.end,e.step,e.interval,e.onChange,l(e,["nodeName","virtual","status","start","end","step","interval","onChange"])),u=this.state.value,i=n?o.a.Fragment:t;return o.a.createElement(i,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach(function(t){f(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({children:u},r))}}]),t}();m.displayName="react-countdown",m.propTypes={className:i.a.string,nodeName:i.a.any,virtual:i.a.bool,status:i.a.oneOf(["init","pause","count","done"]),start:i.a.number,end:i.a.number,step:i.a.number,interval:i.a.number,onChange:i.a.func},m.defaultProps={nodeName:"span",status:"init",start:5,end:1,step:-1,interval:1e3,onChange:s.a};t.default=m}])});