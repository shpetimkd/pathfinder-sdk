function t(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var e=/*#__PURE__*/t(require("isomorphic-unfetch"));function r(){return r=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},r.apply(this,arguments)}function n(t,e){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},n(t,e)}var o=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}var r,o;return o=t,(r=e).prototype=Object.create(o.prototype),r.prototype.constructor=r,n(r,o),e.prototype.getPath=function(){return fetch("http://localhost:4000/status",{credentials:"include"}).then(function(t){return t.json()})},e}(/*#__PURE__*/function(){function t(t){this.apiKey=void 0,this.baseUrl=void 0,this.apiKey=t.apiKey,this.baseUrl=t.baseUrl||"https://jsonplaceholder.typicode.com"}return t.prototype.request=function(t,n){var o=""+this.baseUrl+t,i=r({},n,{headers:{"Content-Type":"application/json","api-key":this.apiKey}});return e.default(o,i).then(function(t){if(t.ok)return t.json();throw new Error(t.statusText)})},t}());exports.Library=function(t){this.pathFinder=void 0,this.pathFinder=new o(t)};
