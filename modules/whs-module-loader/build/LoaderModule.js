!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.LoaderModule=t():e.LoaderModule=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t){e.exports=function(e){var t={},n=[];e=e||this,e.on=function(e,n,r){(t[e]=t[e]||[]).push([n,r])},e.off=function(e,r){e||(t={});for(var o=t[e]||n,i=o.length=r?o.length:0;i--;)r==o[i][0]&&o.splice(i,1)},e.emit=function(e){for(var r,o=t[e]||n,i=o.length>0?o.slice(0,o.length):o,u=0;r=i[u++];)r[0].apply(r[1],n.slice.call(arguments,1))}}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.LoaderModule=void 0;var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),s=function(e){return e&&e.__esModule?e:{default:e}}(c),f=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));e.promises={};for(var n=arguments.length,i=Array(n),u=0;u<n;u++)i[u]=arguments[u];return e.expecting=i,e.resolved=[],e}return i(t,e),u(t,[{key:"expect",value:function(e){this.expecting.push(e)}},{key:"resolve",value:function(e){return this.expecting.includes(e)&&(this.expecting=this.expecting.filter(function(t){return t!==e}),this.resolved.push(e)),this.emit("step",e),1===this.getProgress()&&this.emit("complete"),this}},{key:"promise",value:function(e,t){var n=this;return t.then(function(){return n.resolve(e)}),this.promises[e]=t,this.expect(e),t}},{key:"getProgress",value:function(){var e=this.expecting.length,t=this.resolved.length;return t/(e+t)}}]),t}(s.default);t.LoaderModule=f}])});