import t from"isomorphic-unfetch";import e from"axios";function o(){return o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},o.apply(this,arguments)}class r{constructor(t){this.apiKey=void 0,this.baseUrl=void 0,this.apiKey=t.apiKey,this.baseUrl=t.baseUrl||"https://jsonplaceholder.typicode.com"}request(e,r){const a=`${this.baseUrl}${e}`,s=o({},r,{headers:{"Content-Type":"application/json","api-key":this.apiKey}});return t(a,s).then(t=>{if(t.ok)return t.json();throw new Error(t.statusText)})}}class a extends r{getPath(){e.get("http://localhost:4000/status",{headers:{Cookie:"cookie1=value; cookie2=value; cookie3=value;"}}).then(t=>{console.log(t)})}async fetchData(t,o){try{const{cookies:r}=o||{};return(await e.get(`http://localhost:4000/${t}`,{headers:{Authorization:"Bearer somebearertoken",Cookie:r}})).data}catch(t){throw console.error("Error fetching data:",t),t}}}class s{constructor(t){this.pathFinder=void 0,this.pathFinder=new a(t)}}export{s as Library};
