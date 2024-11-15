import{u as E,p as P,r as C,s as V,q,v as A,x as $,g as I,y as N,z as W,A as L,m as J,B as G,C as X,D as Q,E as Y,F as v,G as Z,o as z,c as F,d as ee,a as te,H as re,I as se,t as ae}from"./DYUchrT7.js";const U=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function ne(s,a){a?a={...U,...a}:a=U;const r=j(a);return r.dispatch(s),r.toString()}const ie=Object.freeze(["prototype","__proto__","constructor"]);function j(s){let a="",r=new Map;const t=e=>{a+=e};return{toString(){return a},getContext(){return r},dispatch(e){return s.replacer&&(e=s.replacer(e)),this[e===null?"null":typeof e](e)},object(e){if(e&&typeof e.toJSON=="function")return this.object(e.toJSON());const n=Object.prototype.toString.call(e);let i="";const h=n.length;h<10?i="unknown:["+n+"]":i=n.slice(8,h-1),i=i.toLowerCase();let c=null;if((c=r.get(e))===void 0)r.set(e,r.size);else return this.dispatch("[CIRCULAR:"+c+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(e))return t("buffer:"),t(e.toString("utf8"));if(i!=="object"&&i!=="function"&&i!=="asyncfunction")this[i]?this[i](e):s.ignoreUnknown||this.unkown(e,i);else{let f=Object.keys(e);s.unorderedObjects&&(f=f.sort());let d=[];s.respectType!==!1&&!H(e)&&(d=ie),s.excludeKeys&&(f=f.filter(l=>!s.excludeKeys(l)),d=d.filter(l=>!s.excludeKeys(l))),t("object:"+(f.length+d.length)+":");const o=l=>{this.dispatch(l),t(":"),s.excludeValues||this.dispatch(e[l]),t(",")};for(const l of f)o(l);for(const l of d)o(l)}},array(e,n){if(n=n===void 0?s.unorderedArrays!==!1:n,t("array:"+e.length+":"),!n||e.length<=1){for(const c of e)this.dispatch(c);return}const i=new Map,h=e.map(c=>{const f=j(s);f.dispatch(c);for(const[d,o]of f.getContext())i.set(d,o);return f.toString()});return r=i,h.sort(),this.array(h,!1)},date(e){return t("date:"+e.toJSON())},symbol(e){return t("symbol:"+e.toString())},unkown(e,n){if(t(n),!!e&&(t(":"),e&&typeof e.entries=="function"))return this.array(Array.from(e.entries()),!0)},error(e){return t("error:"+e.toString())},boolean(e){return t("bool:"+e)},string(e){t("string:"+e.length+":"),t(e)},function(e){t("fn:"),H(e)?this.dispatch("[native]"):this.dispatch(e.toString()),s.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(e.name)),s.respectFunctionProperties&&this.object(e)},number(e){return t("number:"+e)},xml(e){return t("xml:"+e.toString())},null(){return t("Null")},undefined(){return t("Undefined")},regexp(e){return t("regex:"+e.toString())},uint8array(e){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},uint8clampedarray(e){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},int8array(e){return t("int8array:"),this.dispatch(Array.prototype.slice.call(e))},uint16array(e){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},int16array(e){return t("int16array:"),this.dispatch(Array.prototype.slice.call(e))},uint32array(e){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},int32array(e){return t("int32array:"),this.dispatch(Array.prototype.slice.call(e))},float32array(e){return t("float32array:"),this.dispatch(Array.prototype.slice.call(e))},float64array(e){return t("float64array:"),this.dispatch(Array.prototype.slice.call(e))},arraybuffer(e){return t("arraybuffer:"),this.dispatch(new Uint8Array(e))},url(e){return t("url:"+e.toString())},map(e){t("map:");const n=[...e];return this.array(n,s.unorderedSets!==!1)},set(e){t("set:");const n=[...e];return this.array(n,s.unorderedSets!==!1)},file(e){return t("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},blob(){if(s.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return t("domwindow")},bigint(e){return t("bigint:"+e.toString())},process(){return t("process")},timer(){return t("timer")},pipe(){return t("pipe")},tcp(){return t("tcp")},udp(){return t("udp")},tty(){return t("tty")},statwatcher(){return t("statwatcher")},securecontext(){return t("securecontext")},connection(){return t("connection")},zlib(){return t("zlib")},context(){return t("context")},nodescript(){return t("nodescript")},httpparser(){return t("httpparser")},dataview(){return t("dataview")},signal(){return t("signal")},fsevent(){return t("fsevent")},tlswrap(){return t("tlswrap")}}}const K="[native code] }",oe=K.length;function H(s){return typeof s!="function"?!1:Function.prototype.toString.call(s).slice(-oe)===K}var ce=Object.defineProperty,le=(s,a,r)=>a in s?ce(s,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[a]=r,x=(s,a,r)=>(le(s,typeof a!="symbol"?a+"":a,r),r);class _{constructor(a,r){x(this,"words"),x(this,"sigBytes"),a=this.words=a||[],this.sigBytes=r===void 0?a.length*4:r}toString(a){return(a||ue).stringify(this)}concat(a){if(this.clamp(),this.sigBytes%4)for(let r=0;r<a.sigBytes;r++){const t=a.words[r>>>2]>>>24-r%4*8&255;this.words[this.sigBytes+r>>>2]|=t<<24-(this.sigBytes+r)%4*8}else for(let r=0;r<a.sigBytes;r+=4)this.words[this.sigBytes+r>>>2]=a.words[r>>>2];return this.sigBytes+=a.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new _([...this.words])}}const ue={stringify(s){const a=[];for(let r=0;r<s.sigBytes;r++){const t=s.words[r>>>2]>>>24-r%4*8&255;a.push((t>>>4).toString(16),(t&15).toString(16))}return a.join("")}},fe={stringify(s){const a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=[];for(let t=0;t<s.sigBytes;t+=3){const e=s.words[t>>>2]>>>24-t%4*8&255,n=s.words[t+1>>>2]>>>24-(t+1)%4*8&255,i=s.words[t+2>>>2]>>>24-(t+2)%4*8&255,h=e<<16|n<<8|i;for(let c=0;c<4&&t*8+c*6<s.sigBytes*8;c++)r.push(a.charAt(h>>>6*(3-c)&63))}return r.join("")}},de={parse(s){const a=s.length,r=[];for(let t=0;t<a;t++)r[t>>>2]|=(s.charCodeAt(t)&255)<<24-t%4*8;return new _(r,a)}},he={parse(s){return de.parse(unescape(encodeURIComponent(s)))}};class ye{constructor(){x(this,"_data",new _),x(this,"_nDataBytes",0),x(this,"_minBufferSize",0),x(this,"blockSize",512/32)}reset(){this._data=new _,this._nDataBytes=0}_append(a){typeof a=="string"&&(a=he.parse(a)),this._data.concat(a),this._nDataBytes+=a.sigBytes}_doProcessBlock(a,r){}_process(a){let r,t=this._data.sigBytes/(this.blockSize*4);a?t=Math.ceil(t):t=Math.max((t|0)-this._minBufferSize,0);const e=t*this.blockSize,n=Math.min(e*4,this._data.sigBytes);if(e){for(let i=0;i<e;i+=this.blockSize)this._doProcessBlock(this._data.words,i);r=this._data.words.splice(0,e),this._data.sigBytes-=n}return new _(r,n)}}class pe extends ye{update(a){return this._append(a),this._process(),this}finalize(a){a&&this._append(a)}}var ge=Object.defineProperty,me=(s,a,r)=>a in s?ge(s,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[a]=r,_e=(s,a,r)=>(me(s,a+"",r),r);const T=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],be=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],w=[];class we extends pe{constructor(){super(...arguments),_e(this,"_hash",new _([...T]))}reset(){super.reset(),this._hash=new _([...T])}_doProcessBlock(a,r){const t=this._hash.words;let e=t[0],n=t[1],i=t[2],h=t[3],c=t[4],f=t[5],d=t[6],o=t[7];for(let l=0;l<64;l++){if(l<16)w[l]=a[r+l]|0;else{const u=w[l-15],b=(u<<25|u>>>7)^(u<<14|u>>>18)^u>>>3,g=w[l-2],k=(g<<15|g>>>17)^(g<<13|g>>>19)^g>>>10;w[l]=b+w[l-7]+k+w[l-16]}const B=c&f^~c&d,D=e&n^e&i^n&i,S=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22),y=(c<<26|c>>>6)^(c<<21|c>>>11)^(c<<7|c>>>25),m=o+y+B+be[l]+w[l],p=S+D;o=d,d=f,f=c,c=h+m|0,h=i,i=n,n=e,e=m+p|0}t[0]=t[0]+e|0,t[1]=t[1]+n|0,t[2]=t[2]+i|0,t[3]=t[3]+h|0,t[4]=t[4]+c|0,t[5]=t[5]+f|0,t[6]=t[6]+d|0,t[7]=t[7]+o|0}finalize(a){super.finalize(a);const r=this._nDataBytes*8,t=this._data.sigBytes*8;return this._data.words[t>>>5]|=128<<24-t%32,this._data.words[(t+64>>>9<<4)+14]=Math.floor(r/4294967296),this._data.words[(t+64>>>9<<4)+15]=r,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function ve(s){return new we().finalize(s).toString(fe)}function Be(s,a={}){const r=typeof s=="string"?s:ne(s,a);return ve(r).slice(0,10)}const De=s=>s==="defer"||s===!1;function Se(...s){var S;const a=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(a);let[r,t,e={}]=s;if(typeof r!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof t!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const n=E(),i=t,h=()=>P.value,c=()=>n.isHydrating?n.payload.data[r]:n.static.data[r];e.server=e.server??!0,e.default=e.default??h,e.getCachedData=e.getCachedData??c,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0,e.deep=e.deep??P.deep,e.dedupe=e.dedupe??"cancel";const f=e.getCachedData(r,n),d=f!=null;if(!n._asyncData[r]||!e.immediate){(S=n.payload._errors)[r]??(S[r]=P.errorValue);const y=e.deep?C:V;n._asyncData[r]={data:y(d?f:e.default()),pending:C(!d),error:q(n.payload._errors,r),status:C("idle"),_default:e.default}}const o={...n._asyncData[r]};delete o._default,o.refresh=o.execute=(y={})=>{if(n._asyncDataPromises[r]){if(De(y.dedupe??e.dedupe))return n._asyncDataPromises[r];n._asyncDataPromises[r].cancelled=!0}if(y._initial||n.isHydrating&&y._initial!==!1){const p=y._initial?f:e.getCachedData(r,n);if(p!=null)return Promise.resolve(p)}o.pending.value=!0,o.status.value="pending";const m=new Promise((p,u)=>{try{p(i(n))}catch(b){u(b)}}).then(async p=>{if(m.cancelled)return n._asyncDataPromises[r];let u=p;e.transform&&(u=await e.transform(p)),e.pick&&(u=xe(u,e.pick)),n.payload.data[r]=u,o.data.value=u,o.error.value=P.errorValue,o.status.value="success"}).catch(p=>{if(m.cancelled)return n._asyncDataPromises[r];o.error.value=W(p),o.data.value=L(e.default()),o.status.value="error"}).finally(()=>{m.cancelled||(o.pending.value=!1,delete n._asyncDataPromises[r])});return n._asyncDataPromises[r]=m,n._asyncDataPromises[r]},o.clear=()=>Pe(n,r);const l=()=>o.refresh({_initial:!0}),B=e.server!==!1&&n.payload.serverRendered;{const y=J();if(y&&!y._nuxtOnBeforeMountCbs){y._nuxtOnBeforeMountCbs=[];const u=y._nuxtOnBeforeMountCbs;A(()=>{u.forEach(b=>{b()}),u.splice(0,u.length)}),$(()=>u.splice(0,u.length))}B&&n.isHydrating&&(o.error.value||f!=null)?(o.pending.value=!1,o.status.value=o.error.value?"error":"success"):y&&(n.payload.serverRendered&&n.isHydrating||e.lazy)&&e.immediate?y._nuxtOnBeforeMountCbs.push(l):e.immediate&&l();const m=G();if(e.watch){const u=I(e.watch,()=>o.refresh());m&&N(u)}const p=n.hook("app:data:refresh",async u=>{(!u||u.includes(r))&&await o.refresh()});m&&N(p)}const D=Promise.resolve(n._asyncDataPromises[r]).then(()=>o);return Object.assign(D,o),D}function Pe(s,a){a in s.payload.data&&(s.payload.data[a]=void 0),a in s.payload._errors&&(s.payload._errors[a]=P.errorValue),s._asyncData[a]&&(s._asyncData[a].data.value=void 0,s._asyncData[a].error.value=P.errorValue,s._asyncData[a].pending.value=!1,s._asyncData[a].status.value="idle"),a in s._asyncDataPromises&&(s._asyncDataPromises[a]&&(s._asyncDataPromises[a].cancelled=!0),s._asyncDataPromises[a]=void 0)}function xe(s,a){const r={};for(const t of a)r[t]=s[t];return r}function Ce(s,a,r){const[t={},e]=[{},a],n=X(()=>v(s)),i=t.key||Be([e,typeof n.value=="string"?n.value:"",...Oe(t)]);if(!i||typeof i!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+i);const h=i===e?"$f"+i:i;if(!t.baseURL&&typeof n.value=="string"&&n.value[0]==="/"&&n.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:c,lazy:f,default:d,transform:o,pick:l,watch:B,immediate:D,getCachedData:S,deep:y,dedupe:m,...p}=t,u=Q({...Y,...p,cache:typeof t.cache=="boolean"?void 0:t.cache}),b={server:c,lazy:f,default:d,transform:o,pick:l,immediate:D,getCachedData:S,deep:y,dedupe:m,watch:B===!1?[]:[u,n,...B||[]]};let g;return Se(h,()=>{var M;(M=g==null?void 0:g.abort)==null||M.call(g,"Request aborted as another request to the same endpoint was initiated."),g=typeof AbortController<"u"?new AbortController:{};const R=v(t.timeout);let O;return R&&(O=setTimeout(()=>g.abort("Request aborted due to timeout."),R),g.signal.onabort=()=>clearTimeout(O)),(t.$fetch||globalThis.$fetch)(n.value,{signal:g.signal,...u}).finally(()=>{clearTimeout(O)})},b)}function Oe(s){var r;const a=[((r=v(s.method))==null?void 0:r.toUpperCase())||"GET",v(s.baseURL)];for(const t of[s.params||s.query]){const e=v(t);if(!e)continue;const n={};for(const[i,h]of Object.entries(e))n[v(i)]=v(h);a.push(n)}return a}const ke=Z({__name:"APIfunctions",setup(s){const a=C([]),{data:r,pending:t,refresh:e,execute:n,error:i,status:h}=Ce("https://data.taipei/api/v1/dataset/36847f3f-deff-4183-a5bb-800737591de5?scope=resourceAquire","$7Ff5Xh2AnM");return console.log(r.value),a.value=r.value,(c,f)=>(z(),F("div",null,[f[0]||(f[0]=ee(" Page: APIfunctions ")),te("ul",null,[(z(!0),F(re,null,se(L(a),(d,o)=>(z(),F("li",{key:o},ae(d),1))),128))])]))}});export{ke as default};
