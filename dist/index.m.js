import t from"isomorphic-unfetch";function e(){return e=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},e.apply(this,arguments)}function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}var o=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}var o,n;return n=t,(o=e).prototype=Object.create(n.prototype),o.prototype.constructor=o,i(o,n),e.prototype.getPath=function(){return fetch("http://localhost:4000/status",{credentials:"include",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3MTIyMzY2MDMsImV4cCI6MTc0Mzc3MjYwMywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.ZeFIty-RmaR5jyo5zit8EJMaQ_8xevhr1w9tV5osb9M"}}).then(function(t){return t.json()})},e}(/*#__PURE__*/function(){function i(t){this.apiKey=void 0,this.baseUrl=void 0,this.apiKey=t.apiKey,this.baseUrl=t.baseUrl||"https://jsonplaceholder.typicode.com"}return i.prototype.request=function(i,o){var n=""+this.baseUrl+i,r=e({},o,{headers:{"Content-Type":"application/json","api-key":this.apiKey}});return t(n,r).then(function(t){if(t.ok)return t.json();throw new Error(t.statusText)})},i}()),n=function(t){this.pathFinder=void 0,this.pathFinder=new o(t)};export{n as Library};
