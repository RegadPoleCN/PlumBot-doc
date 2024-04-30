const V=Object.entries,et=Object.fromEntries,st="ENTRIES",L="KEYS",T="VALUES",_="";class D{set;_type;_path;constructor(t,s){const n=t._tree,o=Array.from(n.keys());this.set=t,this._type=s,this._path=o.length>0?[{node:n,keys:o}]:[]}next(){const t=this.dive();return this.backtrack(),t}dive(){if(this._path.length===0)return{done:!0,value:void 0};const{node:t,keys:s}=E(this._path);if(E(s)===_)return{done:!1,value:this.result()};const n=t.get(E(s));return this._path.push({node:n,keys:Array.from(n.keys())}),this.dive()}backtrack(){if(this._path.length===0)return;const t=E(this._path).keys;t.pop(),!(t.length>0)&&(this._path.pop(),this.backtrack())}key(){return this.set._prefix+this._path.map(({keys:t})=>E(t)).filter(t=>t!==_).join("")}value(){return E(this._path).node.get(_)}result(){switch(this._type){case T:return this.value();case L:return this.key();default:return[this.key(),this.value()]}}[Symbol.iterator](){return this}}const E=e=>e[e.length-1],nt=(e,t,s)=>{const n=new Map;if(t===void 0)return n;const o=t.length+1,u=o+s,i=new Uint8Array(u*o).fill(s+1);for(let r=0;r<o;++r)i[r]=r;for(let r=1;r<u;++r)i[r*o]=r;return R(e,t,s,n,i,1,o,""),n},R=(e,t,s,n,o,u,i,r)=>{const d=u*i;t:for(const c of e.keys())if(c===_){const a=o[d-1];a<=s&&n.set(r,[e.get(c),a])}else{let a=u;for(let h=0;h<c.length;++h,++a){const g=c[h],m=i*a,p=m-i;let l=o[m];const f=Math.max(0,a-s-1),y=Math.min(i-1,a+s);for(let F=f;F<y;++F){const v=g!==t[F],z=o[p+F]+ +v,A=o[p+F+1]+1,w=o[m+F]+1,j=o[m+F+1]=Math.min(z,A,w);j<l&&(l=j)}if(l>s)continue t}R(e.get(c),t,s,n,o,a,i,r+c)}};class C{_tree;_prefix;_size=void 0;constructor(t=new Map,s=""){this._tree=t,this._prefix=s}atPrefix(t){if(!t.startsWith(this._prefix))throw new Error("Mismatched prefix");const[s,n]=x(this._tree,t.slice(this._prefix.length));if(s===void 0){const[o,u]=O(n);for(const i of o.keys())if(i!==_&&i.startsWith(u)){const r=new Map;return r.set(i.slice(u.length),o.get(i)),new C(r,t)}}return new C(s,t)}clear(){this._size=void 0,this._tree.clear()}delete(t){return this._size=void 0,ot(this._tree,t)}entries(){return new D(this,st)}forEach(t){for(const[s,n]of this)t(s,n,this)}fuzzyGet(t,s){return nt(this._tree,t,s)}get(t){const s=k(this._tree,t);return s!==void 0?s.get(_):void 0}has(t){const s=k(this._tree,t);return s!==void 0&&s.has(_)}keys(){return new D(this,L)}set(t,s){if(typeof t!="string")throw new Error("key must be a string");return this._size=void 0,I(this._tree,t).set(_,s),this}get size(){if(this._size)return this._size;this._size=0;const t=this.entries();for(;!t.next().done;)this._size+=1;return this._size}update(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=I(this._tree,t);return n.set(_,s(n.get(_))),this}fetch(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=I(this._tree,t);let o=n.get(_);return o===void 0&&n.set(_,o=s()),o}values(){return new D(this,T)}[Symbol.iterator](){return this.entries()}static from(t){const s=new C;for(const[n,o]of t)s.set(n,o);return s}static fromObject(t){return C.from(Object.entries(t))}}const x=(e,t,s=[])=>{if(t.length===0||e==null)return[e,s];for(const n of e.keys())if(n!==_&&t.startsWith(n))return s.push([e,n]),x(e.get(n),t.slice(n.length),s);return s.push([e,t]),x(void 0,"",s)},k=(e,t)=>{if(t.length===0||e==null)return e;for(const s of e.keys())if(s!==_&&t.startsWith(s))return k(e.get(s),t.slice(s.length))},I=(e,t)=>{const s=t.length;t:for(let n=0;e&&n<s;){for(const u of e.keys())if(u!==_&&t[n]===u[0]){const i=Math.min(s-n,u.length);let r=1;for(;r<i&&t[n+r]===u[r];)++r;const d=e.get(u);if(r===u.length)e=d;else{const c=new Map;c.set(u.slice(r),d),e.set(t.slice(n,n+r),c),e.delete(u),e=c}n+=r;continue t}const o=new Map;return e.set(t.slice(n),o),o}return e},ot=(e,t)=>{const[s,n]=x(e,t);if(s!==void 0){if(s.delete(_),s.size===0)W(n);else if(s.size===1){const[o,u]=s.entries().next().value;q(n,o,u)}}},W=e=>{if(e.length===0)return;const[t,s]=O(e);if(t.delete(s),t.size===0)W(e.slice(0,-1));else if(t.size===1){const[n,o]=t.entries().next().value;n!==_&&q(e.slice(0,-1),n,o)}},q=(e,t,s)=>{if(e.length===0)return;const[n,o]=O(e);n.set(o+t,s),n.delete(o)},O=e=>e[e.length-1],ut=(e,t)=>{const s=e._idToShortId.get(t);if(s!=null)return e._storedFields.get(s)},it=/[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u,M="or",$="and",rt="and_not",ct=(e,t)=>{e.includes(t)||e.push(t)},N=(e,t)=>{for(const s of t)e.includes(s)||e.push(s)},P=({score:e},{score:t})=>t-e,lt=()=>new Map,b=e=>{const t=new Map;for(const s of Object.keys(e))t.set(parseInt(s,10),e[s]);return t},G=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0,ht={[M]:(e,t)=>{for(const s of t.keys()){const n=e.get(s);if(n==null)e.set(s,t.get(s));else{const{score:o,terms:u,match:i}=t.get(s);n.score=n.score+o,n.match=Object.assign(n.match,i),N(n.terms,u)}}return e},[$]:(e,t)=>{const s=new Map;for(const n of t.keys()){const o=e.get(n);if(o==null)continue;const{score:u,terms:i,match:r}=t.get(n);N(o.terms,i),s.set(n,{score:o.score+u,terms:o.terms,match:Object.assign(o.match,r)})}return s},[rt]:(e,t)=>{for(const s of t.keys())e.delete(s);return e}},dt=(e,t,s,n,o,u)=>{const{k:i,b:r,d}=u;return Math.log(1+(s-t+.5)/(t+.5))*(d+e*(i+1)/(e+i*(1-r+r*n/o)))},at=e=>(t,s,n)=>{const o=typeof e.fuzzy=="function"?e.fuzzy(t,s,n):e.fuzzy||!1,u=typeof e.prefix=="function"?e.prefix(t,s,n):e.prefix===!0;return{term:t,fuzzy:o,prefix:u}},H=(e,t,s,n)=>{for(const o of Object.keys(e._fieldIds))if(e._fieldIds[o]===s){e._options.logger("warn",`SlimSearch: document with ID ${e._documentIds.get(t)} has changed before removal: term "${n}" was not present in field "${o}". Removing a document after it has changed can corrupt the index!`,"version_conflict");return}},ft=(e,t,s,n)=>{if(!e._index.has(n)){H(e,s,t,n);return}const o=e._index.fetch(n,lt),u=o.get(t);u==null||u.get(s)==null?H(e,s,t,n):u.get(s)<=1?u.size<=1?o.delete(t):u.delete(s):u.set(s,u.get(s)-1),e._index.get(n).size===0&&e._index.delete(n)},gt={k:1.2,b:.7,d:.5},mt={idField:"id",extractField:(e,t)=>e[t],tokenize:e=>e.split(it),processTerm:e=>e.toLowerCase(),fields:void 0,searchOptions:void 0,storeFields:[],logger:(e,t)=>{typeof console?.[e]=="function"&&console[e](t)},autoVacuum:!0},J={combineWith:M,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:gt},pt={combineWith:$,prefix:(e,t,s)=>t===s.length-1},Ft={batchSize:1e3,batchWait:10},U={minDirtFactor:.1,minDirtCount:20},_t={...Ft,...U},K=Symbol("*"),yt=(e,t)=>{const s=new Map,n={...e._options.searchOptions,...t};for(const[o,u]of e._documentIds){const i=n.boostDocument?n.boostDocument(u,"",e._storedFields.get(o)):1;s.set(o,{score:i,terms:[],match:{}})}return s},X=(e,t=M)=>{if(e.length===0)return new Map;const s=t.toLowerCase(),n=ht[s];if(!n)throw new Error(`Invalid combination operator: ${t}`);return e.reduce(n)||new Map},S=(e,t,s,n,o,u,i,r,d=new Map)=>{if(o==null)return d;for(const c of Object.keys(u)){const a=u[c],h=e._fieldIds[c],g=o.get(h);if(g==null)continue;let m=g.size;const p=e._avgFieldLength[h];for(const l of g.keys()){if(!e._documentIds.has(l)){ft(e,h,l,s),m-=1;continue}const f=i?i(e._documentIds.get(l),s,e._storedFields.get(l)):1;if(!f)continue;const y=g.get(l),F=e._fieldLength.get(l)[h],v=dt(y,m,e._documentCount,F,p,r),z=n*a*f*v,A=d.get(l);if(A){A.score+=z,ct(A.terms,t);const w=G(A.match,s);w?w.push(c):A.match[s]=[c]}else d.set(l,{score:z,terms:[t],match:{[s]:[c]}})}}return d},At=(e,t,s)=>{const n={...e._options.searchOptions,...s},o=(n.fields||e._options.fields).reduce((l,f)=>({...l,[f]:G(n.boost,f)||1}),{}),{boostDocument:u,weights:i,maxFuzzy:r,bm25:d}=n,{fuzzy:c,prefix:a}={...J.weights,...i},h=e._index.get(t.term),g=S(e,t.term,t.term,1,h,o,u,d);let m,p;if(t.prefix&&(m=e._index.atPrefix(t.term)),t.fuzzy){const l=t.fuzzy===!0?.2:t.fuzzy,f=l<1?Math.min(r,Math.round(t.term.length*l)):l;f&&(p=e._index.fuzzyGet(t.term,f))}if(m)for(const[l,f]of m){const y=l.length-t.term.length;if(!y)continue;p?.delete(l);const F=a*l.length/(l.length+.3*y);S(e,t.term,l,F,f,o,u,d,g)}if(p)for(const l of p.keys()){const[f,y]=p.get(l);if(!y)continue;const F=c*l.length/(l.length+y);S(e,t.term,l,F,f,o,u,d,g)}return g},Y=(e,t,s={})=>{if(t===K)return yt(e,s);if(typeof t!="string"){const a={...s,...t,queries:void 0},h=t.queries.map(g=>Y(e,g,a));return X(h,a.combineWith)}const{tokenize:n,processTerm:o,searchOptions:u}=e._options,i={tokenize:n,processTerm:o,...u,...s},{tokenize:r,processTerm:d}=i,c=r(t).flatMap(a=>d(a)).filter(a=>!!a).map(at(i)).map(a=>At(e,a,i));return X(c,i.combineWith)},Q=(e,t,s={})=>{const n=Y(e,t,s),o=[];for(const[u,{score:i,terms:r,match:d}]of n){const c=r.length||1,a={id:e._documentIds.get(u),score:i*c,terms:Object.keys(d),queryTerms:r,match:d};Object.assign(a,e._storedFields.get(u)),(s.filter==null||s.filter(a))&&o.push(a)}return t===K&&s.boostDocument==null&&e._options.searchOptions.boostDocument==null||o.sort(P),o},Ct=(e,t,s={})=>{s={...e._options.autoSuggestOptions,...s};const n=new Map;for(const{score:u,terms:i}of Q(e,t,s)){const r=i.join(" "),d=n.get(r);d!=null?(d.score+=u,d.count+=1):n.set(r,{score:u,terms:i,count:1})}const o=[];for(const[u,{score:i,terms:r,count:d}]of n)o.push({suggestion:u,terms:r,score:i/d});return o.sort(P),o};class Et{_options;_index;_documentCount;_documentIds;_idToShortId;_fieldIds;_fieldLength;_avgFieldLength;_nextId;_storedFields;_dirtCount;_currentVacuum;_enqueuedVacuum;_enqueuedVacuumConditions;constructor(t){if(t?.fields==null)throw new Error('SlimSearch: option "fields" must be provided');const s=t.autoVacuum==null||t.autoVacuum===!0?_t:t.autoVacuum;this._options={...mt,...t,autoVacuum:s,searchOptions:{...J,...t.searchOptions||{}},autoSuggestOptions:{...pt,...t.autoSuggestOptions||{}}},this._index=new C,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=U,this.addFields(this._options.fields)}get isVacuuming(){return this._currentVacuum!=null}get dirtCount(){return this._dirtCount}get dirtFactor(){return this._dirtCount/(1+this._documentCount+this._dirtCount)}get documentCount(){return this._documentCount}get termCount(){return this._index.size}toJSON(){const t=[];for(const[s,n]of this._index){const o={};for(const[u,i]of n)o[u]=Object.fromEntries(i);t.push([s,o])}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:t,serializationVersion:2}}addFields(t){for(let s=0;s<t.length;s++)this._fieldIds[t[s]]=s}}const zt=({index:e,documentCount:t,nextId:s,documentIds:n,fieldIds:o,fieldLength:u,averageFieldLength:i,storedFields:r,dirtCount:d,serializationVersion:c},a)=>{if(c!==1&&c!==2)throw new Error("SlimSearch: cannot deserialize an index created with an incompatible version");const h=new Et(a);h._documentCount=t,h._nextId=s,h._documentIds=b(n),h._idToShortId=new Map,h._fieldIds=o,h._fieldLength=b(u),h._avgFieldLength=i,h._storedFields=b(r),h._dirtCount=d||0,h._index=new C;for(const[g,m]of h._documentIds)h._idToShortId.set(m,g);for(const[g,m]of e){const p=new Map;for(const l of Object.keys(m)){let f=m[l];c===1&&(f=f.ds),p.set(parseInt(l,10),b(f))}h._index.set(g,p)}return h},B=(e,t)=>{const s=e.toLowerCase(),n=t.toLowerCase(),o=[];let u=0,i=0;const r=(c,a=!1)=>{let h="";i===0?h=c.length>20?`… ${c.slice(-20)}`:c:a?h=c.length+i>100?`${c.slice(0,100-i)}… `:c:h=c.length>20?`${c.slice(0,20)} … ${c.slice(-20)}`:c,h&&o.push(h),i+=h.length,a||(o.push(["mark",t]),i+=t.length,i>=100&&o.push(" …"))};let d=s.indexOf(n,u);if(d===-1)return null;for(;d>=0;){const c=d+n.length;if(r(e.slice(u,d)),u=c,i>100)break;d=s.indexOf(n,u)}return i<100&&r(e.slice(u),!0),o},wt=(e,t)=>t.contents.reduce((s,[,n])=>s+n,0)-e.contents.reduce((s,[,n])=>s+n,0),xt=(e,t)=>Math.max(...t.contents.map(([,s])=>s))-Math.max(...e.contents.map(([,s])=>s)),Z=(e,t,s={})=>{const n={};return Q(t,e,{boost:{h:2,t:1,c:4},prefix:!0,...s}).forEach(o=>{const{id:u,terms:i,score:r}=o,d=u.includes("@"),c=u.includes("#"),[a,h]=u.split(/[#@]/),g=Number(a),m=i.sort((l,f)=>l.length-f.length).filter((l,f)=>i.slice(f+1).every(y=>!y.includes(l))),{contents:p}=n[g]??={title:"",contents:[]};if(d)p.push([{type:"customField",id:g,index:h,display:m.map(l=>o.c.map(f=>B(f,l))).flat().filter(l=>l!==null)},r]);else{const l=m.map(f=>B(o.h,f)).filter(f=>f!==null);if(l.length&&p.push([{type:c?"heading":"title",id:g,...c&&{anchor:h},display:l},r]),"t"in o)for(const f of o.t){const y=m.map(F=>B(f,F)).filter(F=>F!==null);y.length&&p.push([{type:"text",id:g,...c&&{anchor:h},display:y},r])}}}),V(n).sort(([,o],[,u])=>"max"==="total"?wt(o,u):xt(o,u)).map(([o,{title:u,contents:i}])=>{if(!u){const r=ut(t,o);r&&(u=r.h)}return{title:u,contents:i.map(([r])=>r)}})},tt=(e,t,s={})=>{const n=Ct(t,e,{fuzzy:.2,maxFuzzy:3,...s}).map(({suggestion:o})=>o);return e.includes(" ")?n:n.filter(o=>!o.includes(" "))},bt=et(V(JSON.parse("{\"/\":{\"documentCount\":55,\"nextId\":55,\"documentIds\":{\"0\":\"0\",\"1\":\"1\",\"2\":\"1@0\",\"3\":\"1@1\",\"4\":\"2\",\"5\":\"2@0\",\"6\":\"2@1\",\"7\":\"3\",\"8\":\"3@0\",\"9\":\"3@1\",\"10\":\"4\",\"11\":\"4#markdown-introduction\",\"12\":\"4#markdown-config\",\"13\":\"4#markdown-extension\",\"14\":\"4#vuepress-enhancement\",\"15\":\"4#theme-enhancement\",\"16\":\"4#hint-box\",\"17\":\"4#tabs\",\"18\":\"4#code-tabs\",\"19\":\"4#superscript-and-subscript\",\"20\":\"4#align\",\"21\":\"4#attrs\",\"22\":\"4#footnote\",\"23\":\"4#mark\",\"24\":\"4#tasklist\",\"25\":\"4#image-enhancement\",\"26\":\"4#component\",\"27\":\"4#include-files\",\"28\":\"4#stylize\",\"29\":\"4#tex\",\"30\":\"4#chart-js\",\"31\":\"4@0\",\"32\":\"4@1\",\"33\":\"5\",\"34\":\"5#page-title\",\"35\":\"5#page-information\",\"36\":\"5#page-content\",\"37\":\"5#components\",\"38\":\"5@0\",\"39\":\"5@1\",\"40\":\"6\",\"41\":\"6@0\",\"42\":\"7\",\"43\":\"7#highlight-features\",\"44\":\"7#bar\",\"45\":\"7#foo\",\"46\":\"8\",\"47\":\"9\",\"48\":\"9#introduction\",\"49\":\"9#details\",\"50\":\"10\",\"51\":\"11\",\"52\":\"11#introduction\",\"53\":\"11#details\",\"54\":\"12\"},\"fieldIds\":{\"h\":0,\"t\":1,\"c\":2},\"fieldLength\":{\"0\":[2,42],\"1\":[4,40],\"2\":[null,null,1],\"3\":[null,null,1],\"4\":[2,10],\"5\":[null,null,1],\"6\":[null,null,1],\"7\":[1,44],\"8\":[null,null,1],\"9\":[null,null,1],\"10\":[2,32],\"11\":[2,19],\"12\":[2,26],\"13\":[2,18],\"14\":[2,16],\"15\":[2,18],\"16\":[2,24],\"17\":[1,2],\"18\":[2,2],\"19\":[3,4],\"20\":[1,8],\"21\":[1,6],\"22\":[1,7],\"23\":[1,7],\"24\":[1,6],\"25\":[2,8],\"26\":[1,2],\"27\":[2,2],\"28\":[1,10],\"29\":[1,26],\"30\":[2],\"31\":[null,null,1],\"32\":[null,null,1],\"33\":[2,10],\"34\":[2,20],\"35\":[2,27],\"36\":[2,30],\"37\":[1,29],\"38\":[null,null,1],\"39\":[null,null,3],\"40\":[2],\"41\":[null,null,1],\"42\":[1],\"43\":[2],\"44\":[1,2],\"45\":[1,2],\"46\":[1,4],\"47\":[2],\"48\":[1,5],\"49\":[1,2],\"50\":[1,4],\"51\":[2],\"52\":[1,5],\"53\":[1,2],\"54\":[1,3]},\"averageFieldLength\":[1.7516177970855182,17.60906795376197,0.7999020820449391],\"storedFields\":{\"0\":{\"h\":\"Project home\",\"t\":[\"This is an example of a project homepage. You can place your main content here.\",\"To use this layout, you need to set home: true in the page front matter.\",\"For related descriptions of configuration items, please see Project HomePage Layout Config.\"]},\"1\":{\"h\":\"Disabling layout and features\",\"t\":[\"You can disable some function and layout on the page by setting the Frontmatter of the page.\",\"This page is an demo that disables the following features:\",\"Navbar\",\"Sidebar\",\"Breadcrumb\",\"Page information\",\"Contributors\",\"Edit link\",\"Update time\",\"Prev/Next link\",\"Comment\",\"Footer\",\"Back to top button\"]},\"2\":{\"c\":[\"Guide\"]},\"3\":{\"c\":[\"disable\"]},\"4\":{\"h\":\"Encryption Article\",\"t\":[\"The actual article content.\",\"Paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text.\",\"Paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text.\"]},\"5\":{\"c\":[\"Guide\"]},\"6\":{\"c\":[\"encryption\"]},\"7\":{\"h\":\"Layout\",\"t\":[\"The layout contains:\",\"Navbar\",\"Sidebar\",\"Footer\",\"Also each page can contain:\",\"BreadCrumb\",\"Title and information\",\"TOC (Table of Contents)\",\"Meta information including update time and contributors\",\"Comments\",\"The theme also has the following elements:\",\"Darkmode button\",\"Back to top button\",\"Print button\",\"You can customize them in theme options and page frontmatter.\"]},\"8\":{\"c\":[\"Guide\"]},\"9\":{\"c\":[\"Layout\"]},\"10\":{\"h\":\"Markdown Enhance\",\"t\":[\"VuePress basically generate pages from Markdown files. So you can use it to generate documentation or blog sites easily.\",\"You should create and write Markdown files, so that VuePress can convert them to different pages according to file structure.\"]},\"11\":{\"h\":\"Markdown Introduction\",\"t\":[\"If you are a new learner and don't know how to write Markdown, please read Markdown Intro and Markdown Demo.\"]},\"12\":{\"h\":\"Markdown Config\",\"t\":[\"VuePress introduce configuration for each markdown page using Frontmatter.\",\"相关信息\",\"Frontmatter is a important concept in VuePress. If you don't know it, you need to read Frontmatter Introduction.\"]},\"13\":{\"h\":\"Markdown Extension\",\"t\":[\"The Markdown content in VuePress will be parsed by markdown-it, which supports syntax extensions via markdown-it plugins.\"]},\"14\":{\"h\":\"VuePress Enhancement\",\"t\":[\"To enrich document writing, VuePress has extended Markdown syntax.\",\"For these extensions, please read Markdown extensions in VuePress.\"]},\"15\":{\"h\":\"Theme Enhancement\",\"t\":[\"By using vuepress-plugin-md-enhance, the theme extends more Markdown syntax and provides richer writing functions.\"]},\"16\":{\"h\":\"Hint box\",\"t\":[\"Safely use {{ variable }} in Markdown.\",\"Custom Title\",\"A custom information container with code, link.\",\"const a = 1; \",\"Custom Title\",\"A custom tip container\",\"Custom Title\",\"A custom warning container\",\"Custom Title\",\"A custom caution container\",\"Custom Title\",\"A custom details container\",\"View Detail\"]},\"17\":{\"h\":\"Tabs\",\"t\":[\"View Detail\"]},\"18\":{\"h\":\"Code Tabs\",\"t\":[\"View Detail\"]},\"19\":{\"h\":\"Superscript and Subscript\",\"t\":[\"19th H2O\",\"View Detail\"]},\"20\":{\"h\":\"Align\",\"t\":[\"::: center\",\"I am center\",\":::\",\"::: right\",\"I am right align\",\":::\",\"View Detail\"]},\"21\":{\"h\":\"Attrs\",\"t\":[\"A word{#word} having id.\",\"View Detail\"]},\"22\":{\"h\":\"Footnote\",\"t\":[\"This text has footnote[1].\",\"View Detail\"]},\"23\":{\"h\":\"Mark\",\"t\":[\"You can mark ==important words== .\",\"View Detail\"]},\"24\":{\"h\":\"Tasklist\",\"t\":[\" Plan A\",\" Plan B\",\"View Detail\"]},\"25\":{\"h\":\"Image Enhancement\",\"t\":[\"Support setting color scheme and size\",\"View Detail\"]},\"26\":{\"h\":\"Component\",\"t\":[\"View Detail\"]},\"27\":{\"h\":\"Include files\",\"t\":[\"View Detail\"]},\"28\":{\"h\":\"Stylize\",\"t\":[\"Donate Mr.Hope a cup of coffee. Recommended\",\"View Detail\"]},\"29\":{\"h\":\"Tex\",\"t\":[\"$$ \\\\frac {\\\\partial^r} {\\\\partial \\\\omega^r} \\\\left(\\\\frac {y^{\\\\omega}} {\\\\omega}\\\\right) = \\\\left(\\\\frac {y^{\\\\omega}} {\\\\omega}\\\\right) \\\\left{(\\\\log y)^r + \\\\sum_{i=1}^r \\\\frac {(-1)^i r \\\\cdots (r-i+1) (\\\\log y)^{r-i}} {\\\\omega^i} \\\\right} $$\",\"View Detail\"]},\"30\":{\"h\":\"Chart.js\"},\"31\":{\"c\":[\"Guide\"]},\"32\":{\"c\":[\"Markdown\"]},\"33\":{\"h\":\"Page Config\",\"t\":[\"Content before more comment is regarded as page excerpt.\"]},\"34\":{\"h\":\"Page Title\",\"t\":[\"The first H1 title in Markdown will be regarded as page title.\",\"You can also set title in Markdown's Frontmatter:\",\"--- title: Page Title --- \"]},\"35\":{\"h\":\"Page Information\",\"t\":[\"You can set page information in Markdown's Frontmatter.\",\"The author is Ms.Hope.\",\"The writing date is January 1, 2020\",\"Category is \\\"Guide\\\"\",\"Tags are \\\"Page Config\\\" and \\\"Guide\\\"\"]},\"36\":{\"h\":\"Page Content\",\"t\":[\"You are free to write your Markdown here.\",\"Assets\",\"You can place images besides your Markdown files nd use relative links.\",\"For images in .vuepress/public directory, please use absolute links (i.e.: starting with /).\"]},\"37\":{\"h\":\"Components\",\"t\":[\"Each markdown page is converted into a Vue component, which means you can use Vue syntax in Markdown:\",\"{{ 1 + 1 }}\",\"{{ i }}\",\"You can also create and import your own components.\"]},\"38\":{\"c\":[\"Guide\"]},\"39\":{\"c\":[\"Page config\",\"Guide\"]},\"40\":{\"h\":\"Features demo\"},\"41\":{\"c\":[\"Guide\"]},\"42\":{\"h\":\"Guide\"},\"43\":{\"h\":\"Highlight Features\"},\"44\":{\"h\":\"Bar\",\"t\":[\"baz\",\"...\"]},\"45\":{\"h\":\"Foo\",\"t\":[\"ray\",\"...\"]},\"46\":{\"h\":\"Baz\",\"t\":[\"Feature details here.\"]},\"47\":{\"h\":\"Bar feature\"},\"48\":{\"h\":\"Introduction\",\"t\":[\"We support bar feature, ...\"]},\"49\":{\"h\":\"Details\",\"t\":[\"baz\",\"...\"]},\"50\":{\"h\":\"Ray\",\"t\":[\"Feature details here.\"]},\"51\":{\"h\":\"Foo feature\"},\"52\":{\"h\":\"Introduction\",\"t\":[\"We support foo feature, ...\"]},\"53\":{\"h\":\"Details\",\"t\":[\"ray\",\"...\"]},\"54\":{\"h\":\"\",\"t\":[\"404 Not Found\"]}},\"dirtCount\":0,\"index\":[[\"404\",{\"1\":{\"54\":1}}],[\"january\",{\"1\":{\"35\":1}}],[\"js\",{\"0\":{\"30\":1}}],[\"^\",{\"1\":{\"29\":1}}],[\"^i\",{\"1\":{\"29\":1}}],[\"^r\",{\"1\":{\"29\":2}}],[\"+\",{\"1\":{\"29\":1,\"37\":1}}],[\"y\",{\"1\":{\"29\":2}}],[\"y^\",{\"1\":{\"29\":2}}],[\"your\",{\"1\":{\"0\":1,\"36\":2,\"37\":1}}],[\"you\",{\"1\":{\"0\":2,\"1\":1,\"7\":1,\"10\":2,\"11\":1,\"12\":2,\"23\":1,\"34\":1,\"35\":1,\"36\":2,\"37\":2}}],[\"$$\",{\"1\":{\"29\":2}}],[\"==important\",{\"1\":{\"23\":1}}],[\"=\",{\"1\":{\"16\":1,\"29\":1}}],[\"ray\",{\"0\":{\"50\":1},\"1\":{\"45\":1,\"53\":1}}],[\"r\",{\"1\":{\"29\":3}}],[\"right\",{\"1\":{\"20\":2,\"29\":3}}],[\"richer\",{\"1\":{\"15\":1}}],[\"relative\",{\"1\":{\"36\":1}}],[\"related\",{\"1\":{\"0\":1}}],[\"regarded\",{\"1\":{\"33\":1,\"34\":1}}],[\"recommended\",{\"1\":{\"28\":1}}],[\"read\",{\"1\":{\"11\":1,\"12\":1,\"14\":1}}],[\"vue\",{\"1\":{\"37\":2}}],[\"vuepress\",{\"0\":{\"14\":1},\"1\":{\"10\":2,\"12\":2,\"13\":1,\"14\":2,\"15\":1,\"36\":1}}],[\"view\",{\"1\":{\"16\":1,\"17\":1,\"18\":1,\"19\":1,\"20\":1,\"21\":1,\"22\":1,\"23\":1,\"24\":1,\"25\":1,\"26\":1,\"27\":1,\"28\":1,\"29\":1}}],[\"via\",{\"1\":{\"13\":1}}],[\"variable\",{\"1\":{\"16\":1}}],[\"we\",{\"1\":{\"48\":1,\"52\":1}}],[\"words==\",{\"1\":{\"23\":1}}],[\"word\",{\"1\":{\"21\":2}}],[\"warning\",{\"1\":{\"16\":1}}],[\"with\",{\"1\":{\"16\":1,\"36\":1}}],[\"will\",{\"1\":{\"13\":1,\"34\":1}}],[\"writing\",{\"1\":{\"14\":1,\"15\":1,\"35\":1}}],[\"write\",{\"1\":{\"10\":1,\"11\":1,\"36\":1}}],[\"which\",{\"1\":{\"13\":1,\"37\":1}}],[\"相关信息\",{\"1\":{\"12\":1}}],[\"know\",{\"1\":{\"11\":1,\"12\":1}}],[\"generate\",{\"1\":{\"10\":2}}],[\"guide\",{\"0\":{\"42\":1},\"1\":{\"35\":2},\"2\":{\"2\":1,\"5\":1,\"8\":1,\"31\":1,\"38\":1,\"39\":1,\"41\":1}}],[\"means\",{\"1\":{\"37\":1}}],[\"meta\",{\"1\":{\"7\":1}}],[\"ms\",{\"1\":{\"35\":1}}],[\"mr\",{\"1\":{\"28\":1}}],[\"more\",{\"1\":{\"15\":1,\"33\":1}}],[\"md\",{\"1\":{\"15\":1}}],[\"mark\",{\"0\":{\"23\":1},\"1\":{\"23\":1}}],[\"markdown\",{\"0\":{\"10\":1,\"11\":1,\"12\":1,\"13\":1},\"1\":{\"10\":2,\"11\":3,\"12\":1,\"13\":3,\"14\":2,\"15\":1,\"16\":1,\"34\":2,\"35\":1,\"36\":2,\"37\":2},\"2\":{\"32\":1}}],[\"matter\",{\"1\":{\"0\":1}}],[\"main\",{\"1\":{\"0\":1}}],[\"2020\",{\"1\":{\"35\":1}}],[\"2\",{\"1\":{\"4\":14}}],[\"19th\",{\"1\":{\"19\":1}}],[\"1\",{\"1\":{\"4\":12,\"16\":1,\"22\":1,\"29\":1,\"35\":1,\"37\":2}}],[\"using\",{\"1\":{\"12\":1,\"15\":1}}],[\"use\",{\"1\":{\"0\":1,\"10\":1,\"16\":1,\"36\":2,\"37\":1}}],[\"update\",{\"1\":{\"1\":1,\"7\":1}}],[\"log\",{\"1\":{\"29\":2}}],[\"left\",{\"1\":{\"29\":3}}],[\"learner\",{\"1\":{\"11\":1}}],[\"links\",{\"1\":{\"36\":2}}],[\"link\",{\"1\":{\"1\":2,\"16\":1}}],[\"layout\",{\"0\":{\"1\":1,\"7\":1},\"1\":{\"0\":2,\"1\":1,\"7\":1},\"2\":{\"9\":1}}],[\"e\",{\"1\":{\"36\":1}}],[\"excerpt\",{\"1\":{\"33\":1}}],[\"extends\",{\"1\":{\"15\":1}}],[\"extended\",{\"1\":{\"14\":1}}],[\"extensions\",{\"1\":{\"13\":1,\"14\":2}}],[\"extension\",{\"0\":{\"13\":1}}],[\"example\",{\"1\":{\"0\":1}}],[\"easily\",{\"1\":{\"10\":1}}],[\"each\",{\"1\":{\"7\":1,\"12\":1,\"37\":1}}],[\"enrich\",{\"1\":{\"14\":1}}],[\"enhancement\",{\"0\":{\"14\":1,\"15\":1,\"25\":1}}],[\"enhance\",{\"0\":{\"10\":1},\"1\":{\"15\":1}}],[\"encryption\",{\"0\":{\"4\":1},\"2\":{\"6\":1}}],[\"elements\",{\"1\":{\"7\":1}}],[\"edit\",{\"1\":{\"1\":1}}],[\"b\",{\"1\":{\"24\":1}}],[\"box\",{\"0\":{\"16\":1}}],[\"besides\",{\"1\":{\"36\":1}}],[\"before\",{\"1\":{\"33\":1}}],[\"be\",{\"1\":{\"13\":1,\"34\":1}}],[\"blog\",{\"1\":{\"10\":1}}],[\"baz\",{\"0\":{\"46\":1},\"1\":{\"44\":1,\"49\":1}}],[\"bar\",{\"0\":{\"44\":1,\"47\":1},\"1\":{\"48\":1}}],[\"basically\",{\"1\":{\"10\":1}}],[\"back\",{\"1\":{\"1\":1,\"7\":1}}],[\"button\",{\"1\":{\"1\":1,\"7\":3}}],[\"breadcrumb\",{\"1\":{\"1\":1,\"7\":1}}],[\"by\",{\"1\":{\"1\":1,\"13\":1,\"15\":1}}],[\"not\",{\"1\":{\"54\":1}}],[\"nd\",{\"1\":{\"36\":1}}],[\"new\",{\"1\":{\"11\":1}}],[\"next\",{\"1\":{\"1\":1}}],[\"need\",{\"1\":{\"0\":1,\"12\":1}}],[\"navbar\",{\"1\":{\"1\":1,\"7\":1}}],[\"own\",{\"1\":{\"37\":1}}],[\"omega^i\",{\"1\":{\"29\":1}}],[\"omega^r\",{\"1\":{\"29\":1}}],[\"omega\",{\"1\":{\"29\":4}}],[\"or\",{\"1\":{\"10\":1}}],[\"options\",{\"1\":{\"7\":1}}],[\"on\",{\"1\":{\"1\":1}}],[\"of\",{\"1\":{\"0\":2,\"1\":1,\"7\":1,\"28\":1}}],[\"s\",{\"1\":{\"34\":1,\"35\":1}}],[\"starting\",{\"1\":{\"36\":1}}],[\"stylize\",{\"0\":{\"28\":1}}],[\"structure\",{\"1\":{\"10\":1}}],[\"scheme\",{\"1\":{\"25\":1}}],[\"sum\",{\"1\":{\"29\":1}}],[\"subscript\",{\"0\":{\"19\":1}}],[\"support\",{\"1\":{\"25\":1,\"48\":1,\"52\":1}}],[\"supports\",{\"1\":{\"13\":1}}],[\"superscript\",{\"0\":{\"19\":1}}],[\"safely\",{\"1\":{\"16\":1}}],[\"syntax\",{\"1\":{\"13\":1,\"14\":1,\"15\":1,\"37\":1}}],[\"should\",{\"1\":{\"10\":1}}],[\"size\",{\"1\":{\"25\":1}}],[\"sites\",{\"1\":{\"10\":1}}],[\"sidebar\",{\"1\":{\"1\":1,\"7\":1}}],[\"so\",{\"1\":{\"10\":2}}],[\"some\",{\"1\":{\"1\":1}}],[\"see\",{\"1\":{\"0\":1}}],[\"setting\",{\"1\":{\"1\":1,\"25\":1}}],[\"set\",{\"1\":{\"0\":1,\"34\":1,\"35\":1}}],[\"date\",{\"1\":{\"35\":1}}],[\"darkmode\",{\"1\":{\"7\":1}}],[\"document\",{\"1\":{\"14\":1}}],[\"documentation\",{\"1\":{\"10\":1}}],[\"donate\",{\"1\":{\"28\":1}}],[\"don\",{\"1\":{\"11\":1,\"12\":1}}],[\"directory\",{\"1\":{\"36\":1}}],[\"different\",{\"1\":{\"10\":1}}],[\"disables\",{\"1\":{\"1\":1}}],[\"disable\",{\"1\":{\"1\":1},\"2\":{\"3\":1}}],[\"disabling\",{\"0\":{\"1\":1}}],[\"detail\",{\"1\":{\"16\":1,\"17\":1,\"18\":1,\"19\":1,\"20\":1,\"21\":1,\"22\":1,\"23\":1,\"24\":1,\"25\":1,\"26\":1,\"27\":1,\"28\":1,\"29\":1}}],[\"details\",{\"0\":{\"49\":1,\"53\":1},\"1\":{\"16\":1,\"46\":1,\"50\":1}}],[\"demo\",{\"0\":{\"40\":1},\"1\":{\"1\":1,\"11\":1}}],[\"descriptions\",{\"1\":{\"0\":1}}],[\"feature\",{\"0\":{\"47\":1,\"51\":1},\"1\":{\"46\":1,\"48\":1,\"50\":1,\"52\":1}}],[\"features\",{\"0\":{\"1\":1,\"40\":1,\"43\":1},\"1\":{\"1\":1}}],[\"first\",{\"1\":{\"34\":1}}],[\"file\",{\"1\":{\"10\":1}}],[\"files\",{\"0\":{\"27\":1},\"1\":{\"10\":2,\"36\":1}}],[\"free\",{\"1\":{\"36\":1}}],[\"frac\",{\"1\":{\"29\":4}}],[\"from\",{\"1\":{\"10\":1}}],[\"frontmatter\",{\"1\":{\"1\":1,\"7\":1,\"12\":3,\"34\":1,\"35\":1}}],[\"front\",{\"1\":{\"0\":1}}],[\"found\",{\"1\":{\"54\":1}}],[\"foo\",{\"0\":{\"45\":1,\"51\":1},\"1\":{\"52\":1}}],[\"footnote\",{\"0\":{\"22\":1},\"1\":{\"22\":1}}],[\"footer\",{\"1\":{\"1\":1,\"7\":1}}],[\"following\",{\"1\":{\"1\":1,\"7\":1}}],[\"for\",{\"1\":{\"0\":1,\"12\":1,\"14\":1,\"36\":1}}],[\"functions\",{\"1\":{\"15\":1}}],[\"function\",{\"1\":{\"1\":1}}],[\"i+1\",{\"1\":{\"29\":1}}],[\"i=1\",{\"1\":{\"29\":1}}],[\"import\",{\"1\":{\"37\":1}}],[\"important\",{\"1\":{\"12\":1}}],[\"images\",{\"1\":{\"36\":2}}],[\"image\",{\"0\":{\"25\":1}}],[\"id\",{\"1\":{\"21\":1}}],[\"i\",{\"1\":{\"20\":2,\"29\":1,\"36\":1,\"37\":1}}],[\"if\",{\"1\":{\"11\":1,\"12\":1}}],[\"it\",{\"1\":{\"10\":1,\"12\":1,\"13\":2}}],[\"items\",{\"1\":{\"0\":1}}],[\"into\",{\"1\":{\"37\":1}}],[\"introduce\",{\"1\":{\"12\":1}}],[\"introduction\",{\"0\":{\"11\":1,\"48\":1,\"52\":1},\"1\":{\"12\":1}}],[\"intro\",{\"1\":{\"11\":1}}],[\"include\",{\"0\":{\"27\":1}}],[\"including\",{\"1\":{\"7\":1}}],[\"information\",{\"0\":{\"35\":1},\"1\":{\"1\":1,\"7\":2,\"16\":1,\"35\":1}}],[\"in\",{\"1\":{\"0\":1,\"7\":1,\"12\":1,\"13\":1,\"14\":1,\"16\":1,\"34\":2,\"35\":1,\"36\":1,\"37\":1}}],[\"is\",{\"1\":{\"0\":1,\"1\":1,\"12\":1,\"33\":1,\"35\":3,\"37\":1}}],[\"tex\",{\"0\":{\"29\":1}}],[\"text\",{\"1\":{\"4\":26,\"22\":1}}],[\"tags\",{\"1\":{\"35\":1}}],[\"tasklist\",{\"0\":{\"24\":1}}],[\"tabs\",{\"0\":{\"17\":1,\"18\":1}}],[\"table\",{\"1\":{\"7\":1}}],[\"t\",{\"1\":{\"11\":1,\"12\":1}}],[\"tip\",{\"1\":{\"16\":1}}],[\"title\",{\"0\":{\"34\":1},\"1\":{\"7\":1,\"16\":5,\"34\":5}}],[\"time\",{\"1\":{\"1\":1,\"7\":1}}],[\"that\",{\"1\":{\"1\":1,\"10\":1}}],[\"these\",{\"1\":{\"14\":1}}],[\"them\",{\"1\":{\"7\":1,\"10\":1}}],[\"theme\",{\"0\":{\"15\":1},\"1\":{\"7\":2,\"15\":1}}],[\"the\",{\"1\":{\"0\":1,\"1\":4,\"4\":1,\"7\":3,\"13\":1,\"15\":1,\"34\":1,\"35\":2}}],[\"this\",{\"1\":{\"0\":2,\"1\":1,\"22\":1}}],[\"true\",{\"1\":{\"0\":1}}],[\"toc\",{\"1\":{\"7\":1}}],[\"top\",{\"1\":{\"1\":1,\"7\":1}}],[\"to\",{\"1\":{\"0\":2,\"1\":1,\"7\":1,\"10\":3,\"11\":1,\"12\":1,\"14\":1,\"36\":1}}],[\"highlight\",{\"0\":{\"43\":1}}],[\"hint\",{\"0\":{\"16\":1}}],[\"h1\",{\"1\":{\"34\":1}}],[\"having\",{\"1\":{\"21\":1}}],[\"has\",{\"1\":{\"7\":1,\"14\":1,\"22\":1}}],[\"h2o\",{\"1\":{\"19\":1}}],[\"hope\",{\"1\":{\"28\":1,\"35\":1}}],[\"how\",{\"1\":{\"11\":1}}],[\"homepage\",{\"1\":{\"0\":2}}],[\"home\",{\"0\":{\"0\":1},\"1\":{\"0\":1}}],[\"here\",{\"1\":{\"0\":1,\"36\":1,\"46\":1,\"50\":1}}],[\"chart\",{\"0\":{\"30\":1}}],[\"cdots\",{\"1\":{\"29\":1}}],[\"cup\",{\"1\":{\"28\":1}}],[\"custom\",{\"1\":{\"16\":10}}],[\"customize\",{\"1\":{\"7\":1}}],[\"center\",{\"1\":{\"20\":2}}],[\"category\",{\"1\":{\"35\":1}}],[\"caution\",{\"1\":{\"16\":1}}],[\"can\",{\"1\":{\"0\":1,\"1\":1,\"7\":2,\"10\":2,\"23\":1,\"34\":1,\"35\":1,\"36\":1,\"37\":2}}],[\"create\",{\"1\":{\"10\":1,\"37\":1}}],[\"coffee\",{\"1\":{\"28\":1}}],[\"components\",{\"0\":{\"37\":1},\"1\":{\"37\":1}}],[\"component\",{\"0\":{\"26\":1},\"1\":{\"37\":1}}],[\"comments\",{\"1\":{\"7\":1}}],[\"comment\",{\"1\":{\"1\":1,\"33\":1}}],[\"color\",{\"1\":{\"25\":1}}],[\"code\",{\"0\":{\"18\":1},\"1\":{\"16\":1}}],[\"const\",{\"1\":{\"16\":1}}],[\"concept\",{\"1\":{\"12\":1}}],[\"converted\",{\"1\":{\"37\":1}}],[\"convert\",{\"1\":{\"10\":1}}],[\"container\",{\"1\":{\"16\":5}}],[\"contain\",{\"1\":{\"7\":1}}],[\"contains\",{\"1\":{\"7\":1}}],[\"contributors\",{\"1\":{\"1\":1,\"7\":1}}],[\"contents\",{\"1\":{\"7\":1}}],[\"content\",{\"0\":{\"36\":1},\"1\":{\"0\":1,\"4\":1,\"13\":1,\"33\":1}}],[\"config\",{\"0\":{\"12\":1,\"33\":1},\"1\":{\"0\":1,\"35\":1},\"2\":{\"39\":1}}],[\"configuration\",{\"1\":{\"0\":1,\"12\":1}}],[\"public\",{\"1\":{\"36\":1}}],[\"partial\",{\"1\":{\"29\":1}}],[\"partial^r\",{\"1\":{\"29\":1}}],[\"parsed\",{\"1\":{\"13\":1}}],[\"paragraph\",{\"1\":{\"4\":26}}],[\"pages\",{\"1\":{\"10\":2}}],[\"page\",{\"0\":{\"33\":1,\"34\":1,\"35\":1,\"36\":1},\"1\":{\"0\":1,\"1\":4,\"7\":2,\"12\":1,\"33\":1,\"34\":2,\"35\":2,\"37\":1},\"2\":{\"39\":1}}],[\"provides\",{\"1\":{\"15\":1}}],[\"project\",{\"0\":{\"0\":1},\"1\":{\"0\":2}}],[\"print\",{\"1\":{\"7\":1}}],[\"prev\",{\"1\":{\"1\":1}}],[\"plan\",{\"1\":{\"24\":2}}],[\"place\",{\"1\":{\"0\":1,\"36\":1}}],[\"plugin\",{\"1\":{\"15\":1}}],[\"plugins\",{\"1\":{\"13\":1}}],[\"please\",{\"1\":{\"0\":1,\"11\":1,\"14\":1,\"36\":1}}],[\"absolute\",{\"1\":{\"36\":1}}],[\"author\",{\"1\":{\"35\":1}}],[\"assets\",{\"1\":{\"36\":1}}],[\"as\",{\"1\":{\"33\":1,\"34\":1}}],[\"attrs\",{\"0\":{\"21\":1}}],[\"am\",{\"1\":{\"20\":2}}],[\"align\",{\"0\":{\"20\":1},\"1\":{\"20\":1}}],[\"also\",{\"1\":{\"7\":2,\"34\":1,\"37\":1}}],[\"are\",{\"1\":{\"11\":1,\"35\":1,\"36\":1}}],[\"article\",{\"0\":{\"4\":1},\"1\":{\"4\":1}}],[\"according\",{\"1\":{\"10\":1}}],[\"actual\",{\"1\":{\"4\":1}}],[\"a\",{\"1\":{\"0\":1,\"11\":1,\"12\":1,\"16\":6,\"21\":1,\"24\":1,\"28\":1,\"37\":1}}],[\"and\",{\"0\":{\"1\":1,\"19\":1},\"1\":{\"1\":1,\"7\":3,\"10\":1,\"11\":2,\"15\":1,\"25\":1,\"35\":1,\"37\":1}}],[\"an\",{\"1\":{\"0\":1,\"1\":1}}]],\"serializationVersion\":2}}")).map(([e,t])=>[e,zt(t,{fields:["h","t","c"],storeFields:["h","t","c"]})]));self.onmessage=({data:{type:e="all",query:t,locale:s,options:n,id:o}})=>{const u=bt[s];e==="suggest"?self.postMessage([e,o,tt(t,u,n)]):e==="search"?self.postMessage([e,o,Z(t,u,n)]):self.postMessage({suggestions:[e,o,tt(t,u,n)],results:[e,o,Z(t,u,n)]})};
//# sourceMappingURL=index.js.map
