window.__require=function t(e,o,r){function n(i,u){if(!o[i]){if(!e[i]){var l=i.split("/");if(l=l[l.length-1],!e[l]){var p="function"==typeof __require&&__require;if(!u&&p)return p(l,!0);if(c)return c(l,!0);throw new Error("Cannot find module '"+i+"'")}i=l}var f=o[i]={exports:{}};e[i][0].call(f.exports,function(t){return n(e[i][1][t]||t)},f,f.exports,t,e,o,r)}return o[i].exports}for(var c="function"==typeof __require&&__require,i=0;i<r.length;i++)n(r[i]);return n}({CurrencySdk:[function(t,e,o){"use strict";cc._RF.push(e,"50ecf0XvxJHeJuesm+P7eRp","CurrencySdk"),Object.defineProperty(o,"__esModule",{value:!0});var r=function(){function t(){}return t.getFormattedCreditString=function(t,e){void 0===e&&(e=!1);var o=parseFloat(t.toFixed(10)),r=(o.toString(),{minimumFractionDigits:e?0:2,maximumFractionDigits:e?0:2,style:"decimal"});return o.toLocaleString(void 0,r)},t.getThinCreditString=function(t,e){if(void 0===e&&(e=!1),t>-1e3&&t<1e3)return this.getFormattedCreditString(t,e);var o=Math.trunc(t),r="",n=!1;o<0&&(n=!0,o*=-1),o>=1e3&&o<1e6&&(o/=1e3,r="K"),o>=1e6&&o<1e9&&(o/=1e6,r="M"),o>=1e9&&o<1e12&&(o/=1e9,r="B"),o>=1e12&&(o/=1e12,r="T");var c=new RegExp("(\\d+\\.\\d{3})(\\d)"),i=o.toString().match(c),u=(o=i?parseFloat(i[1]):o).toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:3,style:"decimal"});return n&&(u="-"+u),u+r},t}();o.default=r,cc._RF.pop()},{}],Helloworld:[function(t,e,o){"use strict";cc._RF.push(e,"fd824YEXhlMX5qpqRkAbtFi","Helloworld");var r,n=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var u=t.length-1;u>=0;u--)(n=t[u])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=t("./CurrencySdk"),u=cc._decorator,l=u.ccclass,p=(u.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.start=function(){console.log(i.default.getFormattedCreditString(100000.235,!0))},e.prototype.onInboxClick=function(){console.log("Inbox button click")},c([l],e)}(cc.Component));o.default=p,cc._RF.pop()},{"./CurrencySdk":"CurrencySdk"}],NewSdk:[function(t,e,o){"use strict";cc._RF.push(e,"89dbcRrawlKS54zMqpOFzH/","NewSdk");var r,n=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var u=t.length-1;u>=0;u--)(n=t[u])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,u=i.ccclass,l=(i.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.custom1=function(){console.log("custom1 called")},e.prototype.custom2=function(){console.log("custom2 called")},e.prototype.custom3=function(){console.log("custom3 called")},c([u],e)}(cc.Component));o.default=l,cc._RF.pop()},{}]},{},["CurrencySdk","Helloworld","NewSdk"]);