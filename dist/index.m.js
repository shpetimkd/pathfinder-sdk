import t from"isomorphic-unfetch";function r(){return r=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},r.apply(this,arguments)}function e(t,r){return e=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},e(t,r)}var o=/*#__PURE__*/function(t){function r(){return t.apply(this,arguments)||this}var o,n;return n=t,(o=r).prototype=Object.create(n.prototype),o.prototype.constructor=o,e(o,n),r.prototype.getPath=function(t){return this.request("/status",{method:"POST",body:JSON.stringify(t)})},r}(/*#__PURE__*/function(){function e(t){this.apiKey=void 0,this.baseUrl=void 0,this.apiKey=t.apiKey,this.baseUrl=t.baseUrl||"https://jsonplaceholder.typicode.com"}return e.prototype.request=function(e,o){var n=""+this.baseUrl+e,i=r({},o,{headers:{"Content-Type":"application/json","api-key":this.apiKey}});return t(n,i).then(function(t){if(t.ok)return t.json();throw new Error(t.statusText)})},e}()),n=function(t){this.pathFinder=void 0,this.pathFinder=new o(t)};export{n as Library};
