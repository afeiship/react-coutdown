!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("prop-types"),require("react"),require("classnames"),require("noop"),require("react-dom"),require("object-assign")):"function"==typeof define&&define.amd?define(["prop-types","react","classnames","noop","react-dom","object-assign"],e):"object"==typeof exports?exports.BoilerplateReactComponent=e(require("prop-types"),require("react"),require("classnames"),require("noop"),require("react-dom"),require("object-assign")):t.BoilerplateReactComponent=e(t["prop-types"],t.react,t.classnames,t.noop,t["react-dom"],t["object-assign"])}(window,function(t,e,n,r,o,u){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e){t.exports=n},function(t,e){t.exports=r},function(t,e){t.exports=o},function(t,e){t.exports=u},function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),u=(n(4),n(0)),a=n.n(u),i=n(2),s=n.n(i),c=n(3),p=n.n(c);n(5);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function y(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},u=Object.keys(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t,e,n){return e&&h(t.prototype,e),n&&h(t,n),t}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var g=function(t){function e(t){var n,r,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,(n=!(o=b(e).call(this,t))||"object"!==f(o)&&"function"!=typeof o?d(r):o).state={value:t.start},n.countdown=n.countdown.bind(d(n)),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(e,r["Component"]),v(e,[{key:"value",get:function(){return this.state.value}},{key:"boundary",get:function(){var t=this.props;return t.step+t.end}},{key:"paused",get:function(){return"pause"===this.props.status}}]),v(e,[{key:"componentWillReceiveProps",value:function(t){var e=t.status;e!==this.props.status&&this[e]()}},{key:"componentDidMount",value:function(){this[this.props.status]()}},{key:"init",value:function(){var t=this.props.start;this.change(t,"init")}},{key:"pause",value:function(){this.setState({status:"pause"})}},{key:"restart",value:function(){clearInterval(this.timer),this.value===this.boundary&&this.init()}},{key:"count",value:function(){var t=this.props.interval;this.restart(),this.timer=setInterval(this.countdown,t)}},{key:"countdown",value:function(){var t=this.props,e=t.step,n=t.end;if(!this.paused){var r=this.value,o=r+e;r===n?this.done():this.change(o,"count")}}},{key:"done",value:function(){clearInterval(this.timer),this.change(this.boundary,"done")}},{key:"change",value:function(t,e){var n=this.props.onChange,r={value:t};this.setState(r,function(){r.status=e,n({target:r})})}},{key:"render",value:function(){var t=this.props,e=t.className,n=(t.status,t.start,t.end,t.step,t.interval,t.onChange,y(t,["className","status","start","end","step","interval","onChange"])),r=this.state.value;return o.a.createElement("span",l({className:s()("react-countdown",e)},n),r)}}]),e}();g.displayName="react-countdown",g.propTypes={className:a.a.string,status:a.a.oneOf(["init","pause","count","done"]),start:a.a.number,end:a.a.number,step:a.a.number,interval:a.a.number,onChange:a.a.func},g.defaultProps={status:"init",start:5,end:1,step:-1,interval:1e3,onChange:p.a};e.default=g}])});