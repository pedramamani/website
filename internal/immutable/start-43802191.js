var Ke=Object.defineProperty;var Je=(r,e,n)=>e in r?Ke(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n;var fe=(r,e,n)=>(Je(r,typeof e!="symbol"?e+"":e,n),n);import{n as ue,s as qe,S as We,i as He,a as Fe,e as I,c as Ge,b as q,g as F,t as T,d as G,f as D,h as C,j as Ye,k as Me,o as _e,l as Xe,m as Ze,p as Qe,q as de,r as J,u as xe,v as et,w as tt,x as z,y as x,z as B,A as K,B as Oe}from"./chunks/index-4d7fc7be.js";const M=[];function we(r,e=ue){let n;const s=new Set;function a(i){if(qe(r,i)&&(r=i,n)){const c=!M.length;for(const l of s)l[1](),M.push(l,r);if(c){for(let l=0;l<M.length;l+=2)M[l][0](M[l+1]);M.length=0}}}function u(i){a(i(r))}function t(i,c=ue){const l=[i,c];return s.add(l),s.size===1&&(n=e(a)||ue),i(r),()=>{s.delete(l),s.size===0&&(n(),n=null)}}return{set:a,update:u,subscribe:t}}class ne{constructor(e,n){fe(this,"name","HttpError");fe(this,"stack");this.status=e,this.message=n!=null?n:`Error: ${e}`}toString(){return this.message}}class Pe{constructor(e,n){this.status=e,this.location=n}}function nt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function rt(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}class at extends URL{get hash(){throw new Error("url.hash is inaccessible from load. Consider accessing hash from the page store within the script tag of your component.")}}let Ue="",ze="";function st(r){Ue=r.base,ze=r.assets||Ue}function Ie(r){let e=r.baseURI;if(!e){const n=r.getElementsByTagName("base");e=n.length?n[0].href:r.URL}return e}function me(){return{x:pageXOffset,y:pageYOffset}}function Te(r){return r.composedPath().find(n=>n instanceof Node&&n.nodeName.toUpperCase()==="A")}function De(r){return r instanceof SVGAElement?new URL(r.href.baseVal,document.baseURI):new URL(r.href)}function je(r){const e=we(r);let n=!0;function s(){n=!0,e.update(t=>t)}function a(t){n=!1,e.set(t)}function u(t){let i;return e.subscribe(c=>{(i===void 0||n&&c!==i)&&t(i=c)})}return{notify:s,set:a,subscribe:u}}function it(){const{set:r,subscribe:e}=we(!1);let n;async function s(){clearTimeout(n);const a=await fetch(`${ze}/internal/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(a.ok){const{version:u}=await a.json(),t=u!=="1661536181549";return t&&(r(!0),clearTimeout(n)),t}else throw new Error(`Version check failed: ${a.status}`)}return{subscribe:e,check:s}}function ot(r){let e=5381,n=r.length;if(typeof r=="string")for(;n;)e=e*33^r.charCodeAt(--n);else for(;n;)e=e*33^r[--n];return(e>>>0).toString(36)}const ge=window.fetch;function ct(r,e){let s=`script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(typeof r=="string"?r:r.url)}]`;e&&typeof e.body=="string"&&(s+=`[sveltekit\\:data-body="${ot(e.body)}"]`);const a=document.querySelector(s);if(a&&a.textContent){const{body:u,...t}=JSON.parse(a.textContent);return Promise.resolve(new Response(u,t))}return ge(r,e)}const lt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function ft(r){const e=[],n=[];let s=!0;return{pattern:r===""?/^\/$/:new RegExp(`^${decodeURIComponent(r).split(/(?:@[a-zA-Z0-9_-]+)?(?:\/|$)/).map((u,t,i)=>{const c=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(u);if(c)return e.push(c[1]),n.push(c[2]),"(?:/(.*))?";const l=t===i.length-1;return u&&"/"+u.split(/\[(.+?)\]/).map((m,S)=>{if(S%2){const O=lt.exec(m);if(!O)throw new Error(`Invalid param: ${m}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,$,W,P]=O;return e.push(W),n.push(P),$?"(.*?)":"([^/]+?)"}return l&&m.includes(".")&&(s=!1),m.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${s?"/?":""}$`),names:e,types:n}}function ut(r,e,n,s){const a={};for(let u=0;u<e.length;u+=1){const t=e[u],i=n[u],c=r[u+1]||"";if(i){const l=s[i];if(!l)throw new Error(`Missing "${i}" param matcher`);if(!l(c))return}a[t]=c}return a}function dt(r,e,n){return Object.entries(e).map(([s,[a,u,t,i]])=>{const{pattern:c,names:l,types:m}=ft(s),S={id:s,exec:O=>{const $=c.exec(O);if($)return ut($,l,m,n)},errors:a.map(O=>r[O]),layouts:u.map(O=>r[O]),leaf:r[t],uses_server_data:!!i};return S.errors.length=S.layouts.length=Math.max(S.errors.length,S.layouts.length),S})}function pt(r,e){return new ne(r,e)}function ht(r){let e,n,s;var a=r[0][0];function u(t){return{props:{data:t[1],errors:t[4]}}}return a&&(e=new a(u(r))),{c(){e&&z(e.$$.fragment),n=I()},l(t){e&&x(e.$$.fragment,t),n=I()},m(t,i){e&&B(e,t,i),q(t,n,i),s=!0},p(t,i){const c={};if(i&2&&(c.data=t[1]),i&16&&(c.errors=t[4]),a!==(a=t[0][0])){if(e){F();const l=e;T(l.$$.fragment,1,0,()=>{K(l,1)}),G()}a?(e=new a(u(t)),z(e.$$.fragment),D(e.$$.fragment,1),B(e,n.parentNode,n)):e=null}else a&&e.$set(c)},i(t){s||(e&&D(e.$$.fragment,t),s=!0)},o(t){e&&T(e.$$.fragment,t),s=!1},d(t){t&&C(n),e&&K(e,t)}}}function _t(r){let e,n,s;var a=r[0][0];function u(t){return{props:{data:t[1],$$slots:{default:[bt]},$$scope:{ctx:t}}}}return a&&(e=new a(u(r))),{c(){e&&z(e.$$.fragment),n=I()},l(t){e&&x(e.$$.fragment,t),n=I()},m(t,i){e&&B(e,t,i),q(t,n,i),s=!0},p(t,i){const c={};if(i&2&&(c.data=t[1]),i&1053&&(c.$$scope={dirty:i,ctx:t}),a!==(a=t[0][0])){if(e){F();const l=e;T(l.$$.fragment,1,0,()=>{K(l,1)}),G()}a?(e=new a(u(t)),z(e.$$.fragment),D(e.$$.fragment,1),B(e,n.parentNode,n)):e=null}else a&&e.$set(c)},i(t){s||(e&&D(e.$$.fragment,t),s=!0)},o(t){e&&T(e.$$.fragment,t),s=!1},d(t){t&&C(n),e&&K(e,t)}}}function mt(r){let e,n,s;var a=r[0][1];function u(t){return{props:{data:t[2],errors:t[4]}}}return a&&(e=new a(u(r))),{c(){e&&z(e.$$.fragment),n=I()},l(t){e&&x(e.$$.fragment,t),n=I()},m(t,i){e&&B(e,t,i),q(t,n,i),s=!0},p(t,i){const c={};if(i&4&&(c.data=t[2]),i&16&&(c.errors=t[4]),a!==(a=t[0][1])){if(e){F();const l=e;T(l.$$.fragment,1,0,()=>{K(l,1)}),G()}a?(e=new a(u(t)),z(e.$$.fragment),D(e.$$.fragment,1),B(e,n.parentNode,n)):e=null}else a&&e.$set(c)},i(t){s||(e&&D(e.$$.fragment,t),s=!0)},o(t){e&&T(e.$$.fragment,t),s=!1},d(t){t&&C(n),e&&K(e,t)}}}function gt(r){let e,n,s;var a=r[0][1];function u(t){return{props:{data:t[2],$$slots:{default:[wt]},$$scope:{ctx:t}}}}return a&&(e=new a(u(r))),{c(){e&&z(e.$$.fragment),n=I()},l(t){e&&x(e.$$.fragment,t),n=I()},m(t,i){e&&B(e,t,i),q(t,n,i),s=!0},p(t,i){const c={};if(i&4&&(c.data=t[2]),i&1033&&(c.$$scope={dirty:i,ctx:t}),a!==(a=t[0][1])){if(e){F();const l=e;T(l.$$.fragment,1,0,()=>{K(l,1)}),G()}a?(e=new a(u(t)),z(e.$$.fragment),D(e.$$.fragment,1),B(e,n.parentNode,n)):e=null}else a&&e.$set(c)},i(t){s||(e&&D(e.$$.fragment,t),s=!0)},o(t){e&&T(e.$$.fragment,t),s=!1},d(t){t&&C(n),e&&K(e,t)}}}function wt(r){let e,n,s;var a=r[0][2];function u(t){return{props:{data:t[3]}}}return a&&(e=new a(u(r))),{c(){e&&z(e.$$.fragment),n=I()},l(t){e&&x(e.$$.fragment,t),n=I()},m(t,i){e&&B(e,t,i),q(t,n,i),s=!0},p(t,i){const c={};if(i&8&&(c.data=t[3]),a!==(a=t[0][2])){if(e){F();const l=e;T(l.$$.fragment,1,0,()=>{K(l,1)}),G()}a?(e=new a(u(t)),z(e.$$.fragment),D(e.$$.fragment,1),B(e,n.parentNode,n)):e=null}else a&&e.$set(c)},i(t){s||(e&&D(e.$$.fragment,t),s=!0)},o(t){e&&T(e.$$.fragment,t),s=!1},d(t){t&&C(n),e&&K(e,t)}}}function bt(r){let e,n,s,a;const u=[gt,mt],t=[];function i(c,l){return c[0][2]?0:1}return e=i(r),n=t[e]=u[e](r),{c(){n.c(),s=I()},l(c){n.l(c),s=I()},m(c,l){t[e].m(c,l),q(c,s,l),a=!0},p(c,l){let m=e;e=i(c),e===m?t[e].p(c,l):(F(),T(t[m],1,1,()=>{t[m]=null}),G(),n=t[e],n?n.p(c,l):(n=t[e]=u[e](c),n.c()),D(n,1),n.m(s.parentNode,s))},i(c){a||(D(n),a=!0)},o(c){T(n),a=!1},d(c){t[e].d(c),c&&C(s)}}}function Ve(r){let e,n=r[6]&&Ne(r);return{c(){e=Xe("div"),n&&n.c(),this.h()},l(s){e=Ze(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var a=Qe(e);n&&n.l(a),a.forEach(C),this.h()},h(){de(e,"id","svelte-announcer"),de(e,"aria-live","assertive"),de(e,"aria-atomic","true"),J(e,"position","absolute"),J(e,"left","0"),J(e,"top","0"),J(e,"clip","rect(0 0 0 0)"),J(e,"clip-path","inset(50%)"),J(e,"overflow","hidden"),J(e,"white-space","nowrap"),J(e,"width","1px"),J(e,"height","1px")},m(s,a){q(s,e,a),n&&n.m(e,null)},p(s,a){s[6]?n?n.p(s,a):(n=Ne(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&C(e),n&&n.d()}}}function Ne(r){let e;return{c(){e=xe(r[7])},l(n){e=et(n,r[7])},m(n,s){q(n,e,s)},p(n,s){s&128&&tt(e,n[7])},d(n){n&&C(e)}}}function vt(r){let e,n,s,a,u;const t=[_t,ht],i=[];function c(m,S){return m[0][1]?0:1}e=c(r),n=i[e]=t[e](r);let l=r[5]&&Ve(r);return{c(){n.c(),s=Fe(),l&&l.c(),a=I()},l(m){n.l(m),s=Ge(m),l&&l.l(m),a=I()},m(m,S){i[e].m(m,S),q(m,s,S),l&&l.m(m,S),q(m,a,S),u=!0},p(m,[S]){let O=e;e=c(m),e===O?i[e].p(m,S):(F(),T(i[O],1,1,()=>{i[O]=null}),G(),n=i[e],n?n.p(m,S):(n=i[e]=t[e](m),n.c()),D(n,1),n.m(s.parentNode,s)),m[5]?l?l.p(m,S):(l=Ve(m),l.c(),l.m(a.parentNode,a)):l&&(l.d(1),l=null)},i(m){u||(D(n),u=!0)},o(m){T(n),u=!1},d(m){i[e].d(m),m&&C(s),l&&l.d(m),m&&C(a)}}}function yt(r,e,n){let{stores:s}=e,{page:a}=e,{components:u}=e,{data_0:t=null}=e,{data_1:i=null}=e,{data_2:c=null}=e,{errors:l}=e;Ye("__svelte__",s),Me(s.page.notify);let m=!1,S=!1,O=null;return _e(()=>{const $=s.page.subscribe(()=>{m&&(n(6,S=!0),n(7,O=document.title||"untitled page"))});return n(5,m=!0),$}),r.$$set=$=>{"stores"in $&&n(8,s=$.stores),"page"in $&&n(9,a=$.page),"components"in $&&n(0,u=$.components),"data_0"in $&&n(1,t=$.data_0),"data_1"in $&&n(2,i=$.data_1),"data_2"in $&&n(3,c=$.data_2),"errors"in $&&n(4,l=$.errors)},r.$$.update=()=>{r.$$.dirty&768&&s.page.set(a)},[u,t,i,c,l,m,S,O,s,a]}class kt extends We{constructor(e){super(),He(this,e,yt,vt,qe,{stores:8,page:9,components:0,data_0:1,data_1:2,data_2:3,errors:4})}}const Et=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),$t=function(r,e){return new URL(r,e).href},Ce={},N=function(e,n,s){return!n||n.length===0?e():Promise.all(n.map(a=>{if(a=$t(a,s),a in Ce)return;Ce[a]=!0;const u=a.endsWith(".css"),t=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${t}`))return;const i=document.createElement("link");if(i.rel=u?"stylesheet":Et,u||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),u)return new Promise((c,l)=>{i.addEventListener("load",c),i.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>e())},Rt={},re=[()=>N(()=>import("./chunks/0-fb15d339.js"),["chunks\\0-fb15d339.js","components\\pages\\_layout.svelte-8456d9cb.js","assets\\+layout-110d69f4.css","chunks\\index-4d7fc7be.js","chunks\\app-8726a21a.js"],import.meta.url),()=>N(()=>import("./chunks/1-d53adc15.js"),["chunks\\1-d53adc15.js","components\\pages\\_error.svelte-b23a584d.js","chunks\\index-4d7fc7be.js"],import.meta.url),()=>N(()=>import("./chunks/2-58eea842.js"),["chunks\\2-58eea842.js","components\\pages\\_page.svelte-00a83d6a.js","assets\\+page-78efcd51.css","chunks\\index-4d7fc7be.js","chunks\\app-8726a21a.js","chunks\\TitleBar-3261831c.js","assets\\TitleBar-8b77de5a.css"],import.meta.url),()=>N(()=>import("./chunks/3-eaf56021.js"),["chunks\\3-eaf56021.js","components\\pages\\0158\\_page.svelte-540bbb4c.js","assets\\+page-5a8abd54.css","chunks\\index-4d7fc7be.js","chunks\\Page-2c14fe4d.js","assets\\Page-cab2f371.css","chunks\\app-8726a21a.js","chunks\\TitleBar-3261831c.js","assets\\TitleBar-8b77de5a.css"],import.meta.url),()=>N(()=>import("./chunks/4-ed788741.js"),["chunks\\4-ed788741.js","components\\pages\\1512\\_page.svelte-7d99d8d0.js","chunks\\index-4d7fc7be.js","chunks\\Page-2c14fe4d.js","assets\\Page-cab2f371.css","chunks\\app-8726a21a.js","chunks\\TitleBar-3261831c.js","assets\\TitleBar-8b77de5a.css"],import.meta.url),()=>N(()=>import("./chunks/5-5b1680d9.js"),["chunks\\5-5b1680d9.js","components\\pages\\2365\\_page.svelte-e5be6161.js","chunks\\index-4d7fc7be.js","chunks\\Page-2c14fe4d.js","assets\\Page-cab2f371.css","chunks\\app-8726a21a.js","chunks\\TitleBar-3261831c.js","assets\\TitleBar-8b77de5a.css"],import.meta.url),()=>N(()=>import("./chunks/6-27b39adf.js"),["chunks\\6-27b39adf.js","components\\pages\\6234\\_page.svelte-d0a78ccc.js","chunks\\index-4d7fc7be.js","chunks\\Page-2c14fe4d.js","assets\\Page-cab2f371.css","chunks\\app-8726a21a.js","chunks\\TitleBar-3261831c.js","assets\\TitleBar-8b77de5a.css"],import.meta.url),()=>N(()=>import("./chunks/7-7d07bfab.js"),["chunks\\7-7d07bfab.js","components\\pages\\7102\\_page.svelte-a4b4beef.js","chunks\\index-4d7fc7be.js","chunks\\Page-2c14fe4d.js","assets\\Page-cab2f371.css","chunks\\app-8726a21a.js","chunks\\TitleBar-3261831c.js","assets\\TitleBar-8b77de5a.css"],import.meta.url),()=>N(()=>import("./chunks/8-1f9f87dc.js"),["chunks\\8-1f9f87dc.js","components\\pages\\7453\\_page.svelte-17d0b24f.js","chunks\\index-4d7fc7be.js","chunks\\Page-2c14fe4d.js","assets\\Page-cab2f371.css","chunks\\app-8726a21a.js","chunks\\TitleBar-3261831c.js","assets\\TitleBar-8b77de5a.css"],import.meta.url),()=>N(()=>import("./chunks/9-1415991c.js"),["chunks\\9-1415991c.js","components\\pages\\7546\\_page.svelte-8d6eff00.js","chunks\\index-4d7fc7be.js","chunks\\Page-2c14fe4d.js","assets\\Page-cab2f371.css","chunks\\app-8726a21a.js","chunks\\TitleBar-3261831c.js","assets\\TitleBar-8b77de5a.css"],import.meta.url),()=>N(()=>import("./chunks/10-4c25101e.js"),["chunks\\10-4c25101e.js","components\\pages\\8518\\_page.svelte-51faa544.js","assets\\+page-bb94431a.css","chunks\\index-4d7fc7be.js","chunks\\Page-2c14fe4d.js","assets\\Page-cab2f371.css","chunks\\app-8726a21a.js","chunks\\TitleBar-3261831c.js","assets\\TitleBar-8b77de5a.css"],import.meta.url)],Lt={"":[[1],[0],2],"0158":[[1],[0],3],1512:[[1],[0],4],2365:[[1],[0],5],6234:[[1],[0],6],7102:[[1],[0],7],7453:[[1],[0],8],7546:[[1],[0],9],8518:[[1],[0],10]},Be="sveltekit:scroll",H="sveltekit:index",pe=dt(re,Lt,Rt),St=re[0](),At=re[1]();let Q={};try{Q=JSON.parse(sessionStorage[Be])}catch{}function he(r){Q[r]=me()}function Ot({target:r,base:e,trailing_slash:n}){var Le;const s=[],a={url:je({}),page:je({}),navigating:we(null),updated:it()},u={id:null,promise:null},t={before_navigate:[],after_navigate:[]};let i={branch:[],error:null,session_id:0,url:null},c=!1,l=!0,m=!1,S=1,O=null,$,W=!0,P=(Le=history.state)==null?void 0:Le[H];P||(P=Date.now(),history.replaceState({...history.state,[H]:P},"",location.href));const ae=Q[P];ae&&(history.scrollRestoration="manual",scrollTo(ae.x,ae.y));let se=!1,ie,be;async function ve(o,{noscroll:h=!1,replaceState:g=!1,keepfocus:f=!1,state:d={}},k){if(typeof o=="string"&&(o=new URL(o,Ie(document))),W)return ce({url:o,scroll:h?me():null,keepfocus:f,redirect_chain:k,details:{state:d,replaceState:g},accepted:()=>{},blocked:()=>{}});await X(o)}async function ye(o){const h=Re(o);if(!h)throw new Error("Attempted to prefetch a URL that does not belong to this app");return u.promise=$e(h),u.id=h.id,u.promise}async function ke(o,h,g,f){var b,A,R;const d=Re(o),k=be={};let _=d&&await $e(d);if(!_&&o.origin===location.origin&&o.pathname===location.pathname&&(_=await te({status:404,error:new Error(`Not found: ${o.pathname}`),url:o,routeId:null})),!_)return await X(o),!1;if(o=(d==null?void 0:d.url)||o,be!==k)return!1;if(s.length=0,_.type==="redirect")if(h.length>10||h.includes(o.pathname))_=await te({status:500,error:new Error("Redirect loop"),url:o,routeId:null});else return W?ve(new URL(_.location,o).href,{},[...h,o.pathname]):await X(new URL(_.location,location.href)),!1;else((A=(b=_.props)==null?void 0:b.page)==null?void 0:A.status)>=400&&await a.updated.check()&&await X(o);if(m=!0,g&&g.details){const{details:L}=g,y=L.replaceState?0:1;L.state[H]=P+=y,history[L.replaceState?"replaceState":"pushState"](L.state,"",o)}if(c?(i=_.state,_.props.page&&(_.props.page.url=o),$.$set(_.props)):Ee(_),g){const{scroll:L,keepfocus:y}=g;if(!y){const w=document.body,p=w.getAttribute("tabindex");w.tabIndex=-1,w.focus({preventScroll:!0}),setTimeout(()=>{var v;(v=getSelection())==null||v.removeAllRanges()}),p!==null?w.setAttribute("tabindex",p):w.removeAttribute("tabindex")}if(await Oe(),l){const w=o.hash&&document.getElementById(o.hash.slice(1));L?scrollTo(L.x,L.y):w?w.scrollIntoView():scrollTo(0,0)}}else await Oe();u.promise=null,u.id=null,l=!0,_.props.page&&(ie=_.props.page);const E=_.state.branch[_.state.branch.length-1];W=((R=E==null?void 0:E.node.shared)==null?void 0:R.router)!==!1,f&&f(),m=!1}function Ee(o){i=o.state;const h=document.querySelector("style[data-sveltekit]");if(h&&h.remove(),ie=o.props.page,$=new kt({target:r,props:{...o.props,stores:a},hydrate:!0}),W){const g={from:null,to:new URL(location.href)};t.after_navigate.forEach(f=>f(g))}c=!0}async function ee({url:o,params:h,branch:g,status:f,error:d,routeId:k,validation_errors:_}){const E=g.filter(Boolean),b={type:"loaded",state:{url:o,params:h,branch:g,error:d,session_id:S},props:{components:E.map(y=>y.node.component),errors:_}};let A={},R=!1;for(let y=0;y<E.length;y+=1)A={...A,...E[y].data},(R||!i.branch.some(w=>w===E[y]))&&(b.props[`data_${y}`]=A,R=!0);if(!i.url||o.href!==i.url.href||i.error!==d||R){b.props.page={error:d,params:h,routeId:k,status:f,url:o,data:A};const y=(w,p)=>{Object.defineProperty(b.props.page,w,{get:()=>{throw new Error(`$page.${w} has been replaced by $page.url.${p}`)}})};y("origin","origin"),y("path","pathname"),y("query","searchParams")}return b}async function oe({node:o,parent:h,url:g,params:f,routeId:d,server_data:k}){var L,y;const _={params:new Set,url:!1,dependencies:new Set,parent:!1};function E(...w){for(const p of w){const{href:v}=new URL(p,g);_.dependencies.add(v)}}let b=null;o.server&&(_.dependencies.add(g.href),_.url=!0);const A={};for(const w in f)Object.defineProperty(A,w,{get(){return _.params.add(w),f[w]},enumerable:!0});const R=new at(g);if((L=o.shared)!=null&&L.load){const w={routeId:d,params:A,data:k,get url(){return _.url=!0,R},async fetch(p,v){let U;typeof p=="string"?U=p:(U=p.url,v={body:p.method==="GET"||p.method==="HEAD"?void 0:await p.blob(),cache:p.cache,credentials:p.credentials,headers:p.headers,integrity:p.integrity,keepalive:p.keepalive,method:p.method,mode:p.mode,redirect:p.redirect,referrer:p.referrer,referrerPolicy:p.referrerPolicy,signal:p.signal,...v});const j=new URL(U,g).href;return E(j),c?ge(j,v):ct(U,v)},setHeaders:()=>{},depends:E,get parent(){return _.parent=!0,h},get props(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},get session(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},get stuff(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")}};b=(y=await o.shared.load.call(null,w))!=null?y:null}return{node:o,data:b||k,uses:_}}async function $e({id:o,url:h,params:g,route:f}){if(u.id===o&&u.promise)return u.promise;const{errors:d,layouts:k,leaf:_}=f,E=i.url&&{url:o!==i.url.pathname+i.url.search,params:Object.keys(g).filter(p=>i.params[p]!==g[p])};[...d,...k,_].forEach(p=>p==null?void 0:p().catch(()=>{}));const b=[...k,_],A=[];for(let p=0;p<b.length;p++)if(!b[p])A.push(!1);else{const v=i.branch[p],U=!v||E.url&&v.uses.url||E.params.some(j=>v.uses.params.has(j))||Array.from(v.uses.dependencies).some(j=>s.some(Z=>Z(j)))||v.uses.parent&&A.includes(!0);A.push(U)}let R=null;if(f.uses_server_data){try{const p=await ge(`${h.pathname}${h.pathname.endsWith("/")?"":"/"}__data.json${h.search}`);if(R=await p.json(),!p.ok)throw R}catch{throw new Error("TODO render fallback error page")}if(R.type==="redirect")return R}const L=R==null?void 0:R.nodes,y=b.map(async(p,v)=>Promise.resolve().then(async()=>{var Y;if(!p)return;const U=await p(),j=i.branch[v];if(A[v]||!j||U!==j.node){const V=L==null?void 0:L[v];if(V!=null&&V.status)throw pt(V.status,V.message);if(V!=null&&V.error)throw V.error;return await oe({node:U,url:h,params:g,routeId:f.id,parent:async()=>{var Ae;const Se={};for(let le=0;le<v;le+=1)Object.assign(Se,(Ae=await y[le])==null?void 0:Ae.data);return Se},server_data:(Y=V==null?void 0:V.data)!=null?Y:null})}else return j}));for(const p of y)p.catch(()=>{});const w=[];for(let p=0;p<b.length;p+=1)if(b[p])try{w.push(await y[p])}catch(v){const U=v;if(U instanceof Pe)return{type:"redirect",location:U.location};const j=v instanceof ne?v.status:500;for(;p--;)if(d[p]){let Z,Y=p;for(;!w[Y];)Y-=1;try{return Z={node:await d[p](),data:{},uses:{params:new Set,url:!1,dependencies:new Set,parent:!1}},await ee({url:h,params:g,branch:w.slice(0,Y+1).concat(Z),status:j,error:U,routeId:f.id})}catch{continue}}return await te({status:j,error:U,url:h,routeId:f.id})}else w.push(void 0);return await ee({url:h,params:g,branch:w,status:200,error:null,routeId:f.id})}async function te({status:o,error:h,url:g,routeId:f}){const d={},k=await oe({node:await St,url:g,params:d,routeId:f,parent:()=>Promise.resolve({}),server_data:null}),_={node:await At,data:null,uses:{params:new Set,url:!1,dependencies:new Set,parent:!1}};return await ee({url:g,params:d,branch:[k,_],status:o,error:h,routeId:f})}function Re(o){if(o.origin!==location.origin||!o.pathname.startsWith(e))return;const h=decodeURI(o.pathname.slice(e.length)||"/");for(const g of pe){const f=g.exec(h);if(f){const d=new URL(o.origin+nt(o.pathname,n)+o.search+o.hash);return{id:d.pathname+d.search,route:g,params:rt(f),url:d}}}}async function ce({url:o,scroll:h,keepfocus:g,redirect_chain:f,details:d,accepted:k,blocked:_}){const E=i.url;let b=!1;const A={from:E,to:o,cancel:()=>b=!0};if(t.before_navigate.forEach(R=>R(A)),b){_();return}he(P),k(),c&&a.navigating.set({from:i.url,to:o}),await ke(o,f,{scroll:h,keepfocus:g,details:d},()=>{const R={from:E,to:o};t.after_navigate.forEach(L=>L(R)),a.navigating.set(null)})}function X(o){return location.href=o.href,new Promise(()=>{})}return{after_navigate:o=>{_e(()=>(t.after_navigate.push(o),()=>{const h=t.after_navigate.indexOf(o);t.after_navigate.splice(h,1)}))},before_navigate:o=>{_e(()=>(t.before_navigate.push(o),()=>{const h=t.before_navigate.indexOf(o);t.before_navigate.splice(h,1)}))},disable_scroll_handling:()=>{(m||!c)&&(l=!1)},goto:(o,h={})=>ve(o,h,[]),invalidate:o=>{if(o===void 0){for(const h of i.branch)h==null||h.uses.dependencies.add("");s.push(()=>!0)}else if(typeof o=="function")s.push(o);else{const{href:h}=new URL(o,location.href);s.push(g=>g===h)}return O||(O=Promise.resolve().then(async()=>{await ke(new URL(location.href),[]),O=null})),O},prefetch:async o=>{const h=new URL(o,Ie(document));await ye(h)},prefetch_routes:async o=>{const g=(o?pe.filter(f=>o.some(d=>f.exec(d))):pe).map(f=>Promise.all([...f.layouts,f.leaf].map(d=>d==null?void 0:d())));await Promise.all(g)},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",f=>{let d=!1;const k={from:i.url,to:null,cancel:()=>d=!0};t.before_navigate.forEach(_=>_(k)),d?(f.preventDefault(),f.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){he(P);try{sessionStorage[Be]=JSON.stringify(Q)}catch{}}});const o=f=>{const d=Te(f);d&&d.href&&d.hasAttribute("sveltekit:prefetch")&&ye(De(d))};let h;const g=f=>{clearTimeout(h),h=setTimeout(()=>{var d;(d=f.target)==null||d.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",o),addEventListener("mousemove",g),addEventListener("sveltekit:trigger_prefetch",o),addEventListener("click",f=>{if(!W||f.button||f.which!==1||f.metaKey||f.ctrlKey||f.shiftKey||f.altKey||f.defaultPrevented)return;const d=Te(f);if(!d||!d.href)return;const k=d instanceof SVGAElement,_=De(d);if(!k&&!(_.protocol==="https:"||_.protocol==="http:"))return;const E=(d.getAttribute("rel")||"").split(/\s+/);if(d.hasAttribute("download")||E.includes("external")||d.hasAttribute("sveltekit:reload")||(k?d.target.baseVal:d.target))return;const[b,A]=_.href.split("#");if(A!==void 0&&b===location.href.split("#")[0]){se=!0,he(P),a.page.set({...ie,url:_}),a.page.notify();return}ce({url:_,scroll:d.hasAttribute("sveltekit:noscroll")?me():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:_.href===location.href},accepted:()=>f.preventDefault(),blocked:()=>f.preventDefault()})}),addEventListener("popstate",f=>{if(f.state&&W){if(f.state[H]===P)return;ce({url:new URL(location.href),scroll:Q[f.state[H]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{P=f.state[H]},blocked:()=>{const d=P-f.state[H];history.go(d)}})}}),addEventListener("hashchange",()=>{se&&(se=!1,history.replaceState({...history.state,[H]:++P},"",location.href))});for(const f of document.querySelectorAll("link"))f.rel==="icon"&&(f.href=f.href);addEventListener("pageshow",f=>{f.persisted&&a.navigating.set(null)})},_hydrate:async({status:o,error:h,node_ids:g,params:f,routeId:d})=>{const k=new URL(location.href);let _;try{const E=(L,y)=>{const w=document.querySelector(`script[sveltekit\\:data-type="${L}"]`);return w!=null&&w.textContent?JSON.parse(w.textContent):y},b=E("server_data",[]),A=E("validation_errors",void 0),R=g.map(async(L,y)=>{var w;return oe({node:await re[L](),url:k,params:f,routeId:d,parent:async()=>{const p={};for(let v=0;v<y;v+=1)Object.assign(p,(await R[v]).data);return p},server_data:(w=b[y])!=null?w:null})});_=await ee({url:k,params:f,branch:await Promise.all(R),status:o,error:h!=null&&h.__is_http_error?new ne(h.status,h.message):h,validation_errors:A,routeId:d})}catch(E){const b=E;if(b instanceof Pe){await X(new URL(E.location,location.href));return}_=await te({status:b instanceof ne?b.status:500,error:b,url:k,routeId:d})}Ee(_)}}}function Pt(r){r.client}function Tt(r){}async function Dt({paths:r,target:e,route:n,spa:s,trailing_slash:a,hydrate:u}){const t=Ot({target:e,base:r.base,trailing_slash:a});Pt({client:t}),st(r),u&&await t._hydrate(u),n&&(s&&t.goto(location.href,{replaceState:!0}),t._start_router()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{Tt as set_public_env,Dt as start};
