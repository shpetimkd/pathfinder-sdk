import t from"isomorphic-unfetch";function e(){return e=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},e.apply(this,arguments)}class r{constructor(t){this.apiKey=void 0,this.baseUrl=void 0,this.apiKey=t.apiKey,this.baseUrl=t.baseUrl||"https://jsonplaceholder.typicode.com"}request(r,s){const i=`${this.baseUrl}${r}`,n=e({},s,{headers:{"Content-Type":"application/json","api-key":this.apiKey}});return t(i,n).then(t=>{if(t.ok)return t.json();throw new Error(t.statusText)})}}class s extends r{getPath(t){return t}}class i{constructor(t){this.pathFinder=void 0,this.pathFinder=new s(t)}}export{i as Library};
