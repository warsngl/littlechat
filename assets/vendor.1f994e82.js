function Li(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const wh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ih=Li(wh);function il(t){return!!t||t===""}function Fi(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Te(s)?Rh(s):Fi(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Te(t))return t;if(ye(t))return t}}const Th=/;(?![^(]*\))/g,Sh=/:(.+)/;function Rh(t){const e={};return t.split(Th).forEach(n=>{if(n){const s=n.split(Sh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ui(t){let e="";if(Te(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const s=Ui(t[n]);s&&(e+=s+" ")}else if(ye(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Fv=t=>t==null?"":W(t)||ye(t)&&(t.toString===cl||!B(t.toString))?JSON.stringify(t,rl,2):String(t),rl=(t,e)=>e&&e.__v_isRef?rl(t,e.value):cn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:ol(e)?{[`Set(${e.size})`]:[...e.values()]}:ye(e)&&!W(e)&&!al(e)?String(e):e,se={},ln=[],Qe=()=>{},Nh=()=>!1,xh=/^on[^a-z]/,Ss=t=>xh.test(t),Wi=t=>t.startsWith("onUpdate:"),xe=Object.assign,Hi=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ah=Object.prototype.hasOwnProperty,Q=(t,e)=>Ah.call(t,e),W=Array.isArray,cn=t=>Rs(t)==="[object Map]",ol=t=>Rs(t)==="[object Set]",B=t=>typeof t=="function",Te=t=>typeof t=="string",Bi=t=>typeof t=="symbol",ye=t=>t!==null&&typeof t=="object",ll=t=>ye(t)&&B(t.then)&&B(t.catch),cl=Object.prototype.toString,Rs=t=>cl.call(t),Ph=t=>Rs(t).slice(8,-1),al=t=>Rs(t)==="[object Object]",$i=t=>Te(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ns=Li(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Oh=/-(\w)/g,it=xs(t=>t.replace(Oh,(e,n)=>n?n.toUpperCase():"")),kh=/\B([A-Z])/g,Pt=xs(t=>t.replace(kh,"-$1").toLowerCase()),As=xs(t=>t.charAt(0).toUpperCase()+t.slice(1)),ji=xs(t=>t?`on${As(t)}`:""),Gn=(t,e)=>!Object.is(t,e),Ps=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Os=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Vi=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ul;const Mh=()=>ul||(ul=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Ot;const ks=[];class Dh{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Ot&&(this.parent=Ot,this.index=(Ot.scopes||(Ot.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(ks.push(this),Ot=this)}off(){this.active&&(ks.pop(),Ot=ks[ks.length-1])}stop(e){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function Lh(t,e){e=e||Ot,e&&e.active&&e.effects.push(t)}const Gi=t=>{const e=new Set(t);return e.w=0,e.n=0,e},hl=t=>(t.w&vt)>0,fl=t=>(t.n&vt)>0,Fh=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=vt},Uh=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];hl(i)&&!fl(i)?i.delete(t):e[n++]=i,i.w&=~vt,i.n&=~vt}e.length=n}},qi=new WeakMap;let qn=0,vt=1;const zi=30,zn=[];let kt;const Mt=Symbol(""),Ki=Symbol("");class Yi{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],Lh(this,s)}run(){if(!this.active)return this.fn();if(!zn.includes(this))try{return zn.push(kt=this),Wh(),vt=1<<++qn,qn<=zi?Fh(this):dl(this),this.fn()}finally{qn<=zi&&Uh(this),vt=1<<--qn,Dt(),zn.pop();const e=zn.length;kt=e>0?zn[e-1]:void 0}}stop(){this.active&&(dl(this),this.onStop&&this.onStop(),this.active=!1)}}function dl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let an=!0;const Qi=[];function un(){Qi.push(an),an=!1}function Wh(){Qi.push(an),an=!0}function Dt(){const t=Qi.pop();an=t===void 0?!0:t}function He(t,e,n){if(!pl())return;let s=qi.get(t);s||qi.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Gi()),_l(i)}function pl(){return an&&kt!==void 0}function _l(t,e){let n=!1;qn<=zi?fl(t)||(t.n|=vt,n=!hl(t)):n=!t.has(kt),n&&(t.add(kt),kt.deps.push(t))}function ft(t,e,n,s,i,r){const o=qi.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&W(t))o.forEach((c,a)=>{(a==="length"||a>=s)&&l.push(c)});else switch(n!==void 0&&l.push(o.get(n)),e){case"add":W(t)?$i(n)&&l.push(o.get("length")):(l.push(o.get(Mt)),cn(t)&&l.push(o.get(Ki)));break;case"delete":W(t)||(l.push(o.get(Mt)),cn(t)&&l.push(o.get(Ki)));break;case"set":cn(t)&&l.push(o.get(Mt));break}if(l.length===1)l[0]&&Xi(l[0]);else{const c=[];for(const a of l)a&&c.push(...a);Xi(Gi(c))}}function Xi(t,e){for(const n of W(t)?t:[...t])(n!==kt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Hh=Li("__proto__,__v_isRef,__isVue"),gl=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Bi)),Bh=Ji(),$h=Ji(!1,!0),jh=Ji(!0),ml=Vh();function Vh(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=X(this);for(let r=0,o=this.length;r<o;r++)He(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(X)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){un();const s=X(this)[e].apply(this,n);return Dt(),s}}),t}function Ji(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_raw"&&r===(t?e?lf:Sl:e?Tl:Il).get(s))return s;const o=W(s);if(!t&&o&&Q(ml,i))return Reflect.get(ml,i,r);const l=Reflect.get(s,i,r);return(Bi(i)?gl.has(i):Hh(i))||(t||He(s,"get",i),e)?l:Pe(l)?!o||!$i(i)?l.value:l:ye(l)?t?Rl(l):hn(l):l}}const Gh=yl(),qh=yl(!0);function yl(t=!1){return function(n,s,i,r){let o=n[s];if(!t&&!nr(i)&&(i=X(i),o=X(o),!W(n)&&Pe(o)&&!Pe(i)))return o.value=i,!0;const l=W(n)&&$i(s)?Number(s)<n.length:Q(n,s),c=Reflect.set(n,s,i,r);return n===X(r)&&(l?Gn(i,o)&&ft(n,"set",s,i):ft(n,"add",s,i)),c}}function zh(t,e){const n=Q(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&ft(t,"delete",e,void 0),s}function Kh(t,e){const n=Reflect.has(t,e);return(!Bi(e)||!gl.has(e))&&He(t,"has",e),n}function Yh(t){return He(t,"iterate",W(t)?"length":Mt),Reflect.ownKeys(t)}const vl={get:Bh,set:Gh,deleteProperty:zh,has:Kh,ownKeys:Yh},Qh={get:jh,set(t,e){return!0},deleteProperty(t,e){return!0}},Xh=xe({},vl,{get:$h,set:qh}),Zi=t=>t,Ms=t=>Reflect.getPrototypeOf(t);function Ds(t,e,n=!1,s=!1){t=t.__v_raw;const i=X(t),r=X(e);e!==r&&!n&&He(i,"get",e),!n&&He(i,"get",r);const{has:o}=Ms(i),l=s?Zi:n?sr:Kn;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function Ls(t,e=!1){const n=this.__v_raw,s=X(n),i=X(t);return t!==i&&!e&&He(s,"has",t),!e&&He(s,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function Fs(t,e=!1){return t=t.__v_raw,!e&&He(X(t),"iterate",Mt),Reflect.get(t,"size",t)}function Cl(t){t=X(t);const e=X(this);return Ms(e).has.call(e,t)||(e.add(t),ft(e,"add",t,t)),this}function El(t,e){e=X(e);const n=X(this),{has:s,get:i}=Ms(n);let r=s.call(n,t);r||(t=X(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Gn(e,o)&&ft(n,"set",t,e):ft(n,"add",t,e),this}function bl(t){const e=X(this),{has:n,get:s}=Ms(e);let i=n.call(e,t);i||(t=X(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&ft(e,"delete",t,void 0),r}function wl(){const t=X(this),e=t.size!==0,n=t.clear();return e&&ft(t,"clear",void 0,void 0),n}function Us(t,e){return function(s,i){const r=this,o=r.__v_raw,l=X(o),c=e?Zi:t?sr:Kn;return!t&&He(l,"iterate",Mt),o.forEach((a,u)=>s.call(i,c(a),c(u),r))}}function Ws(t,e,n){return function(...s){const i=this.__v_raw,r=X(i),o=cn(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,a=i[t](...s),u=n?Zi:e?sr:Kn;return!e&&He(r,"iterate",c?Ki:Mt),{next(){const{value:h,done:f}=a.next();return f?{value:h,done:f}:{value:l?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Ct(t){return function(...e){return t==="delete"?!1:this}}function Jh(){const t={get(r){return Ds(this,r)},get size(){return Fs(this)},has:Ls,add:Cl,set:El,delete:bl,clear:wl,forEach:Us(!1,!1)},e={get(r){return Ds(this,r,!1,!0)},get size(){return Fs(this)},has:Ls,add:Cl,set:El,delete:bl,clear:wl,forEach:Us(!1,!0)},n={get(r){return Ds(this,r,!0)},get size(){return Fs(this,!0)},has(r){return Ls.call(this,r,!0)},add:Ct("add"),set:Ct("set"),delete:Ct("delete"),clear:Ct("clear"),forEach:Us(!0,!1)},s={get(r){return Ds(this,r,!0,!0)},get size(){return Fs(this,!0)},has(r){return Ls.call(this,r,!0)},add:Ct("add"),set:Ct("set"),delete:Ct("delete"),clear:Ct("clear"),forEach:Us(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Ws(r,!1,!1),n[r]=Ws(r,!0,!1),e[r]=Ws(r,!1,!0),s[r]=Ws(r,!0,!0)}),[t,n,e,s]}const[Zh,ef,tf,nf]=Jh();function er(t,e){const n=e?t?nf:tf:t?ef:Zh;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Q(n,i)&&i in s?n:s,i,r)}const sf={get:er(!1,!1)},rf={get:er(!1,!0)},of={get:er(!0,!1)},Il=new WeakMap,Tl=new WeakMap,Sl=new WeakMap,lf=new WeakMap;function cf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function af(t){return t.__v_skip||!Object.isExtensible(t)?0:cf(Ph(t))}function hn(t){return t&&t.__v_isReadonly?t:tr(t,!1,vl,sf,Il)}function uf(t){return tr(t,!1,Xh,rf,Tl)}function Rl(t){return tr(t,!0,Qh,of,Sl)}function tr(t,e,n,s,i){if(!ye(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=af(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function fn(t){return nr(t)?fn(t.__v_raw):!!(t&&t.__v_isReactive)}function nr(t){return!!(t&&t.__v_isReadonly)}function Nl(t){return fn(t)||nr(t)}function X(t){const e=t&&t.__v_raw;return e?X(e):t}function xl(t){return Os(t,"__v_skip",!0),t}const Kn=t=>ye(t)?hn(t):t,sr=t=>ye(t)?Rl(t):t;function Al(t){pl()&&(t=X(t),t.dep||(t.dep=Gi()),_l(t.dep))}function Pl(t,e){t=X(t),t.dep&&Xi(t.dep)}function Pe(t){return Boolean(t&&t.__v_isRef===!0)}function hf(t){return Ol(t,!1)}function ff(t){return Ol(t,!0)}function Ol(t,e){return Pe(t)?t:new df(t,e)}class df{constructor(e,n){this._shallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:X(e),this._value=n?e:Kn(e)}get value(){return Al(this),this._value}set value(e){e=this._shallow?e:X(e),Gn(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:Kn(e),Pl(this))}}function Yn(t){return Pe(t)?t.value:t}const pf={get:(t,e,n)=>Yn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Pe(i)&&!Pe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function kl(t){return fn(t)?t:new Proxy(t,pf)}class _f{constructor(e,n,s){this._setter=n,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new Yi(e,()=>{this._dirty||(this._dirty=!0,Pl(this))}),this.__v_isReadonly=s}get value(){const e=X(this);return Al(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function rt(t,e){let n,s;const i=B(t);return i?(n=t,s=Qe):(n=t.get,s=t.set),new _f(n,s,i||!s)}Promise.resolve();function gf(t,e,...n){const s=t.vnode.props||se;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||se;f?i=n.map(_=>_.trim()):h&&(i=n.map(Vi))}let l,c=s[l=ji(e)]||s[l=ji(it(e))];!c&&r&&(c=s[l=ji(Pt(e))]),c&&ze(c,t,6,i);const a=s[l+"Once"];if(a){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,ze(a,t,6,i)}}function Ml(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!B(t)){const c=a=>{const u=Ml(a,e,!0);u&&(l=!0,xe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(s.set(t,null),null):(W(r)?r.forEach(c=>o[c]=null):xe(o,r),s.set(t,o),o)}function ir(t,e){return!t||!Ss(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,Pt(e))||Q(t,e))}let Ge=null,Hs=null;function Bs(t){const e=Ge;return Ge=t,Hs=t&&t.type.__scopeId||null,e}function Uv(t){Hs=t}function Wv(){Hs=null}function mf(t,e=Ge,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&lc(-1);const r=Bs(e),o=t(...i);return Bs(r),s._d&&lc(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function rr(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:c,emit:a,render:u,renderCache:h,data:f,setupState:_,ctx:m,inheritAttrs:N}=t;let S,A;const L=Bs(t);try{if(n.shapeFlag&4){const z=i||s;S=ct(u.call(z,z,h,r,_,f,m)),A=c}else{const z=e;S=ct(z.length>1?z(r,{attrs:c,slots:l,emit:a}):z(r,null)),A=e.props?c:yf(c)}}catch(z){Qn.length=0,Xs(z,t,1),S=Be(lt)}let q=S;if(A&&N!==!1){const z=Object.keys(A),{shapeFlag:_e}=q;z.length&&_e&(1|6)&&(o&&z.some(Wi)&&(A=vf(A,o)),q=dn(q,A))}return n.dirs&&(q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&(q.transition=n.transition),S=q,Bs(L),S}const yf=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ss(n))&&((e||(e={}))[n]=t[n]);return e},vf=(t,e)=>{const n={};for(const s in t)(!Wi(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Cf(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,a=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Dl(s,o,a):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!ir(a,f))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Dl(s,o,a):!0:!!o;return!1}function Dl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!ir(n,r))return!0}return!1}function Ef({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const bf=t=>t.__isSuspense;function wf(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):wd(t)}function $s(t,e){if(ve){let n=ve.provides;const s=ve.parent&&ve.parent.provides;s===n&&(n=ve.provides=Object.create(s)),n[t]=e}}function Et(t,e,n=!1){const s=ve||Ge;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&B(e)?e.call(s.proxy):e}}function If(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Bl(()=>{t.isMounted=!0}),$l(()=>{t.isUnmounting=!0}),t}const qe=[Function,Array],Tf={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:qe,onEnter:qe,onAfterEnter:qe,onEnterCancelled:qe,onBeforeLeave:qe,onLeave:qe,onAfterLeave:qe,onLeaveCancelled:qe,onBeforeAppear:qe,onAppear:qe,onAfterAppear:qe,onAppearCancelled:qe},setup(t,{slots:e}){const n=fd(),s=If();let i;return()=>{const r=e.default&&Ul(e.default(),!0);if(!r||!r.length)return;const o=X(t),{mode:l}=o,c=r[0];if(s.isLeaving)return lr(c);const a=Fl(c);if(!a)return lr(c);const u=or(a,o,s,n);cr(a,u);const h=n.subTree,f=h&&Fl(h);let _=!1;const{getTransitionKey:m}=a.type;if(m){const N=m();i===void 0?i=N:N!==i&&(i=N,_=!0)}if(f&&f.type!==lt&&(!Ht(a,f)||_)){const N=or(f,o,s,n);if(cr(f,N),l==="out-in")return s.isLeaving=!0,N.afterLeave=()=>{s.isLeaving=!1,n.update()},lr(c);l==="in-out"&&a.type!==lt&&(N.delayLeave=(S,A,L)=>{const q=Ll(s,f);q[String(f.key)]=f,S._leaveCb=()=>{A(),S._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=L})}return c}}},Sf=Tf;function Ll(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function or(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:a,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:_,onLeaveCancelled:m,onBeforeAppear:N,onAppear:S,onAfterAppear:A,onAppearCancelled:L}=e,q=String(t.key),z=Ll(n,t),_e=(K,ge)=>{K&&ze(K,s,9,ge)},Ie={mode:r,persisted:o,beforeEnter(K){let ge=l;if(!n.isMounted)if(i)ge=N||l;else return;K._leaveCb&&K._leaveCb(!0);const fe=z[q];fe&&Ht(t,fe)&&fe.el._leaveCb&&fe.el._leaveCb(),_e(ge,[K])},enter(K){let ge=c,fe=a,Me=u;if(!n.isMounted)if(i)ge=S||c,fe=A||a,Me=L||u;else return;let Ne=!1;const Ae=K._enterCb=yt=>{Ne||(Ne=!0,yt?_e(Me,[K]):_e(fe,[K]),Ie.delayedLeave&&Ie.delayedLeave(),K._enterCb=void 0)};ge?(ge(K,Ae),ge.length<=1&&Ae()):Ae()},leave(K,ge){const fe=String(t.key);if(K._enterCb&&K._enterCb(!0),n.isUnmounting)return ge();_e(h,[K]);let Me=!1;const Ne=K._leaveCb=Ae=>{Me||(Me=!0,ge(),Ae?_e(m,[K]):_e(_,[K]),K._leaveCb=void 0,z[fe]===t&&delete z[fe])};z[fe]=t,f?(f(K,Ne),f.length<=1&&Ne()):Ne()},clone(K){return or(K,e,n,s)}};return Ie}function lr(t){if(js(t))return t=dn(t),t.children=null,t}function Fl(t){return js(t)?t.children?t.children[0]:void 0:t}function cr(t,e){t.shapeFlag&6&&t.component?cr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ul(t,e=!1){let n=[],s=0;for(let i=0;i<t.length;i++){const r=t[i];r.type===ot?(r.patchFlag&128&&s++,n=n.concat(Ul(r.children,e))):(e||r.type!==lt)&&n.push(r)}if(s>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function Wl(t){return B(t)?{setup:t,name:t.name}:t}const ar=t=>!!t.type.__asyncLoader,js=t=>t.type.__isKeepAlive;function Rf(t,e){Hl(t,"a",e)}function Nf(t,e){Hl(t,"da",e)}function Hl(t,e,n=ve){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Vs(e,s,n),n){let i=n.parent;for(;i&&i.parent;)js(i.parent.vnode)&&xf(s,e,n,i),i=i.parent}}function xf(t,e,n,s){const i=Vs(e,t,s,!0);jl(()=>{Hi(s[e],i)},n)}function Vs(t,e,n=ve,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;un(),pn(n);const l=ze(e,n,t,o);return Bt(),Dt(),l});return s?i.unshift(r):i.push(r),r}}const dt=t=>(e,n=ve)=>(!Qs||t==="sp")&&Vs(t,e,n),Af=dt("bm"),Bl=dt("m"),Pf=dt("bu"),Of=dt("u"),$l=dt("bum"),jl=dt("um"),kf=dt("sp"),Mf=dt("rtg"),Df=dt("rtc");function Lf(t,e=ve){Vs("ec",t,e)}let ur=!0;function Ff(t){const e=ql(t),n=t.proxy,s=t.ctx;ur=!1,e.beforeCreate&&Vl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:a,created:u,beforeMount:h,mounted:f,beforeUpdate:_,updated:m,activated:N,deactivated:S,beforeDestroy:A,beforeUnmount:L,destroyed:q,unmounted:z,render:_e,renderTracked:Ie,renderTriggered:K,errorCaptured:ge,serverPrefetch:fe,expose:Me,inheritAttrs:Ne,components:Ae,directives:yt,filters:nn}=e;if(a&&Uf(a,s,null,t.appContext.config.unwrapInjectedRef),o)for(const re in o){const ee=o[re];B(ee)&&(s[re]=ee.bind(n))}if(i){const re=i.call(n,n);ye(re)&&(t.data=hn(re))}if(ur=!0,r)for(const re in r){const ee=r[re],je=B(ee)?ee.bind(n,n):B(ee.get)?ee.get.bind(n,n):Qe,rn=!B(ee)&&B(ee.set)?ee.set.bind(n):Qe,ht=rt({get:je,set:rn});Object.defineProperty(s,re,{enumerable:!0,configurable:!0,get:()=>ht.value,set:nt=>ht.value=nt})}if(l)for(const re in l)Gl(l[re],s,n,re);if(c){const re=B(c)?c.call(n):c;Reflect.ownKeys(re).forEach(ee=>{$s(ee,re[ee])})}u&&Vl(u,t,"c");function me(re,ee){W(ee)?ee.forEach(je=>re(je.bind(n))):ee&&re(ee.bind(n))}if(me(Af,h),me(Bl,f),me(Pf,_),me(Of,m),me(Rf,N),me(Nf,S),me(Lf,ge),me(Df,Ie),me(Mf,K),me($l,L),me(jl,z),me(kf,fe),W(Me))if(Me.length){const re=t.exposed||(t.exposed={});Me.forEach(ee=>{Object.defineProperty(re,ee,{get:()=>n[ee],set:je=>n[ee]=je})})}else t.exposed||(t.exposed={});_e&&t.render===Qe&&(t.render=_e),Ne!=null&&(t.inheritAttrs=Ne),Ae&&(t.components=Ae),yt&&(t.directives=yt)}function Uf(t,e,n=Qe,s=!1){W(t)&&(t=hr(t));for(const i in t){const r=t[i];let o;ye(r)?"default"in r?o=Et(r.from||i,r.default,!0):o=Et(r.from||i):o=Et(r),Pe(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[i]=o}}function Vl(t,e,n){ze(W(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Gl(t,e,n,s){const i=s.includes(".")?Ic(n,s):()=>n[s];if(Te(t)){const r=e[t];B(r)&&mn(i,r)}else if(B(t))mn(i,t.bind(n));else if(ye(t))if(W(t))t.forEach(r=>Gl(r,e,n,s));else{const r=B(t.handler)?t.handler.bind(n):e[t.handler];B(r)&&mn(i,r,t)}}function ql(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(a=>Gs(c,a,o,!0)),Gs(c,e,o)),r.set(e,c),c}function Gs(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Gs(t,r,n,!0),i&&i.forEach(o=>Gs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Wf[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Wf={data:zl,props:Lt,emits:Lt,methods:Lt,computed:Lt,beforeCreate:Oe,created:Oe,beforeMount:Oe,mounted:Oe,beforeUpdate:Oe,updated:Oe,beforeDestroy:Oe,beforeUnmount:Oe,destroyed:Oe,unmounted:Oe,activated:Oe,deactivated:Oe,errorCaptured:Oe,serverPrefetch:Oe,components:Lt,directives:Lt,watch:Bf,provide:zl,inject:Hf};function zl(t,e){return e?t?function(){return xe(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function Hf(t,e){return Lt(hr(t),hr(e))}function hr(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Oe(t,e){return t?[...new Set([].concat(t,e))]:e}function Lt(t,e){return t?xe(xe(Object.create(null),t),e):e}function Bf(t,e){if(!t)return e;if(!e)return t;const n=xe(Object.create(null),t);for(const s in e)n[s]=Oe(t[s],e[s]);return n}function $f(t,e,n,s=!1){const i={},r={};Os(r,zs,1),t.propsDefaults=Object.create(null),Kl(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:uf(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function jf(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=X(i),[c]=t.propsOptions;let a=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];const _=e[f];if(c)if(Q(r,f))_!==r[f]&&(r[f]=_,a=!0);else{const m=it(f);i[m]=fr(c,l,m,_,t,!1)}else _!==r[f]&&(r[f]=_,a=!0)}}}else{Kl(t,e,i,r)&&(a=!0);let u;for(const h in l)(!e||!Q(e,h)&&((u=Pt(h))===h||!Q(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=fr(c,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!Q(e,h))&&(delete r[h],a=!0)}a&&ft(t,"set","$attrs")}function Kl(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Ns(c))continue;const a=e[c];let u;i&&Q(i,u=it(c))?!r||!r.includes(u)?n[u]=a:(l||(l={}))[u]=a:ir(t.emitsOptions,c)||(!(c in s)||a!==s[c])&&(s[c]=a,o=!0)}if(r){const c=X(n),a=l||se;for(let u=0;u<r.length;u++){const h=r[u];n[h]=fr(i,c,h,a[h],t,!Q(a,h))}}return o}function fr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=Q(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&B(c)){const{propsDefaults:a}=i;n in a?s=a[n]:(pn(i),s=a[n]=c.call(null,e),Bt())}else s=c}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===Pt(n))&&(s=!0))}return s}function Yl(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!B(t)){const u=h=>{c=!0;const[f,_]=Yl(h,e,!0);xe(o,f),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return s.set(t,ln),ln;if(W(r))for(let u=0;u<r.length;u++){const h=it(r[u]);Ql(h)&&(o[h]=se)}else if(r)for(const u in r){const h=it(u);if(Ql(h)){const f=r[u],_=o[h]=W(f)||B(f)?{type:f}:f;if(_){const m=Zl(Boolean,_.type),N=Zl(String,_.type);_[0]=m>-1,_[1]=N<0||m<N,(m>-1||Q(_,"default"))&&l.push(h)}}}const a=[o,l];return s.set(t,a),a}function Ql(t){return t[0]!=="$"}function Xl(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Jl(t,e){return Xl(t)===Xl(e)}function Zl(t,e){return W(e)?e.findIndex(n=>Jl(n,t)):B(e)&&Jl(e,t)?0:-1}const ec=t=>t[0]==="_"||t==="$stable",dr=t=>W(t)?t.map(ct):[ct(t)],Vf=(t,e,n)=>{const s=mf((...i)=>dr(e(...i)),n);return s._c=!1,s},tc=(t,e,n)=>{const s=t._ctx;for(const i in t){if(ec(i))continue;const r=t[i];if(B(r))e[i]=Vf(i,r,s);else if(r!=null){const o=dr(r);e[i]=()=>o}}},nc=(t,e)=>{const n=dr(e);t.slots.default=()=>n},Gf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=X(e),Os(e,"_",n)):tc(e,t.slots={})}else t.slots={},e&&nc(t,e);Os(t.slots,zs,1)},qf=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=se;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(xe(i,e),!n&&l===1&&delete i._):(r=!e.$stable,tc(e,i)),o=e}else e&&(nc(t,e),o={default:1});if(r)for(const l in i)!ec(l)&&!(l in o)&&delete i[l]};function Hv(t,e){const n=Ge;if(n===null)return t;const s=n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,l,c,a=se]=e[r];B(o)&&(o={mounted:o,updated:o}),o.deep&&$t(l),i.push({dir:o,instance:s,value:l,oldValue:void 0,arg:c,modifiers:a})}return t}function Ft(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(un(),ze(c,n,8,[t.el,l,t,e]),Dt())}}function sc(){return{app:null,config:{isNativeTag:Nh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zf=0;function Kf(t,e){return function(s,i=null){i!=null&&!ye(i)&&(i=null);const r=sc(),o=new Set;let l=!1;const c=r.app={_uid:zf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Td,get config(){return r.config},set config(a){},use(a,...u){return o.has(a)||(a&&B(a.install)?(o.add(a),a.install(c,...u)):B(a)&&(o.add(a),a(c,...u))),c},mixin(a){return r.mixins.includes(a)||r.mixins.push(a),c},component(a,u){return u?(r.components[a]=u,c):r.components[a]},directive(a,u){return u?(r.directives[a]=u,c):r.directives[a]},mount(a,u,h){if(!l){const f=Be(s,i);return f.appContext=r,u&&e?e(f,a):t(f,a,h),l=!0,c._container=a,a.__vue_app__=c,Cr(f.component)||f.component.proxy}},unmount(){l&&(t(null,c._container),delete c._container.__vue_app__)},provide(a,u){return r.provides[a]=u,c}};return c}}function pr(t,e,n,s,i=!1){if(W(t)){t.forEach((f,_)=>pr(f,e&&(W(e)?e[_]:e),n,s,i));return}if(ar(s)&&!i)return;const r=s.shapeFlag&4?Cr(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:c}=t,a=e&&e.r,u=l.refs===se?l.refs={}:l.refs,h=l.setupState;if(a!=null&&a!==c&&(Te(a)?(u[a]=null,Q(h,a)&&(h[a]=null)):Pe(a)&&(a.value=null)),B(c))wt(c,l,12,[o,u]);else{const f=Te(c),_=Pe(c);if(f||_){const m=()=>{if(t.f){const N=f?u[c]:c.value;i?W(N)&&Hi(N,r):W(N)?N.includes(r)||N.push(r):f?u[c]=[r]:(c.value=[r],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,Q(h,c)&&(h[c]=o)):Pe(c)&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,De(m,n)):m()}}}const De=wf;function Yf(t){return Qf(t)}function Qf(t,e){const n=Mh();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:a,setElementText:u,parentNode:h,nextSibling:f,setScopeId:_=Qe,cloneNode:m,insertStaticContent:N}=t,S=(d,p,g,C=null,v=null,I=null,x=!1,w=null,T=!!p.dynamicChildren)=>{if(d===p)return;d&&!Ht(d,p)&&(C=k(d),Ve(d,v,I,!0),d=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:E,ref:M,shapeFlag:P}=p;switch(E){case _r:A(d,p,g,C);break;case lt:L(d,p,g,C);break;case gr:d==null&&q(p,g,C,x);break;case ot:yt(d,p,g,C,v,I,x,w,T);break;default:P&1?Ie(d,p,g,C,v,I,x,w,T):P&6?nn(d,p,g,C,v,I,x,w,T):(P&64||P&128)&&E.process(d,p,g,C,v,I,x,w,T,oe)}M!=null&&v&&pr(M,d&&d.ref,I,p||d,!p)},A=(d,p,g,C)=>{if(d==null)s(p.el=l(p.children),g,C);else{const v=p.el=d.el;p.children!==d.children&&a(v,p.children)}},L=(d,p,g,C)=>{d==null?s(p.el=c(p.children||""),g,C):p.el=d.el},q=(d,p,g,C)=>{[d.el,d.anchor]=N(d.children,p,g,C)},z=({el:d,anchor:p},g,C)=>{let v;for(;d&&d!==p;)v=f(d),s(d,g,C),d=v;s(p,g,C)},_e=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=f(d),i(d),d=g;i(p)},Ie=(d,p,g,C,v,I,x,w,T)=>{x=x||p.type==="svg",d==null?K(p,g,C,v,I,x,w,T):Me(d,p,v,I,x,w,T)},K=(d,p,g,C,v,I,x,w)=>{let T,E;const{type:M,props:P,shapeFlag:D,transition:U,patchFlag:Y,dirs:he}=d;if(d.el&&m!==void 0&&Y===-1)T=d.el=m(d.el);else{if(T=d.el=o(d.type,I,P&&P.is,P),D&8?u(T,d.children):D&16&&fe(d.children,T,null,C,v,I&&M!=="foreignObject",x,w),he&&Ft(d,null,C,"created"),P){for(const ue in P)ue!=="value"&&!Ns(ue)&&r(T,ue,null,P[ue],I,d.children,C,v,R);"value"in P&&r(T,"value",null,P.value),(E=P.onVnodeBeforeMount)&&at(E,C,d)}ge(T,d,d.scopeId,x,C)}he&&Ft(d,null,C,"beforeMount");const ne=(!v||v&&!v.pendingBranch)&&U&&!U.persisted;ne&&U.beforeEnter(T),s(T,p,g),((E=P&&P.onVnodeMounted)||ne||he)&&De(()=>{E&&at(E,C,d),ne&&U.enter(T),he&&Ft(d,null,C,"mounted")},v)},ge=(d,p,g,C,v)=>{if(g&&_(d,g),C)for(let I=0;I<C.length;I++)_(d,C[I]);if(v){let I=v.subTree;if(p===I){const x=v.vnode;ge(d,x,x.scopeId,x.slotScopeIds,v.parent)}}},fe=(d,p,g,C,v,I,x,w,T=0)=>{for(let E=T;E<d.length;E++){const M=d[E]=w?bt(d[E]):ct(d[E]);S(null,M,p,g,C,v,I,x,w)}},Me=(d,p,g,C,v,I,x)=>{const w=p.el=d.el;let{patchFlag:T,dynamicChildren:E,dirs:M}=p;T|=d.patchFlag&16;const P=d.props||se,D=p.props||se;let U;g&&Ut(g,!1),(U=D.onVnodeBeforeUpdate)&&at(U,g,p,d),M&&Ft(p,d,g,"beforeUpdate"),g&&Ut(g,!0);const Y=v&&p.type!=="foreignObject";if(E?Ne(d.dynamicChildren,E,w,g,C,Y,I):x||je(d,p,w,null,g,C,Y,I,!1),T>0){if(T&16)Ae(w,p,P,D,g,C,v);else if(T&2&&P.class!==D.class&&r(w,"class",null,D.class,v),T&4&&r(w,"style",P.style,D.style,v),T&8){const he=p.dynamicProps;for(let ne=0;ne<he.length;ne++){const ue=he[ne],Ye=P[ue],on=D[ue];(on!==Ye||ue==="value")&&r(w,ue,Ye,on,v,d.children,g,C,R)}}T&1&&d.children!==p.children&&u(w,p.children)}else!x&&E==null&&Ae(w,p,P,D,g,C,v);((U=D.onVnodeUpdated)||M)&&De(()=>{U&&at(U,g,p,d),M&&Ft(p,d,g,"updated")},C)},Ne=(d,p,g,C,v,I,x)=>{for(let w=0;w<p.length;w++){const T=d[w],E=p[w],M=T.el&&(T.type===ot||!Ht(T,E)||T.shapeFlag&(6|64))?h(T.el):g;S(T,E,M,null,C,v,I,x,!0)}},Ae=(d,p,g,C,v,I,x)=>{if(g!==C){for(const w in C){if(Ns(w))continue;const T=C[w],E=g[w];T!==E&&w!=="value"&&r(d,w,E,T,x,p.children,v,I,R)}if(g!==se)for(const w in g)!Ns(w)&&!(w in C)&&r(d,w,g[w],null,x,p.children,v,I,R);"value"in C&&r(d,"value",g.value,C.value)}},yt=(d,p,g,C,v,I,x,w,T)=>{const E=p.el=d?d.el:l(""),M=p.anchor=d?d.anchor:l("");let{patchFlag:P,dynamicChildren:D,slotScopeIds:U}=p;U&&(w=w?w.concat(U):U),d==null?(s(E,g,C),s(M,g,C),fe(p.children,g,M,v,I,x,w,T)):P>0&&P&64&&D&&d.dynamicChildren?(Ne(d.dynamicChildren,D,g,v,I,x,w),(p.key!=null||v&&p===v.subTree)&&ic(d,p,!0)):je(d,p,g,M,v,I,x,w,T)},nn=(d,p,g,C,v,I,x,w,T)=>{p.slotScopeIds=w,d==null?p.shapeFlag&512?v.ctx.activate(p,g,C,x,T):sn(p,g,C,v,I,x,T):me(d,p,T)},sn=(d,p,g,C,v,I,x)=>{const w=d.component=hd(d,C,v);if(js(d)&&(w.ctx.renderer=oe),dd(w),w.asyncDep){if(v&&v.registerDep(w,re),!d.el){const T=w.subTree=Be(lt);L(null,T,p,g)}return}re(w,d,p,g,v,I,x)},me=(d,p,g)=>{const C=p.component=d.component;if(Cf(d,p,g))if(C.asyncDep&&!C.asyncResolved){ee(C,p,g);return}else C.next=p,Ed(C.update),C.update();else p.component=d.component,p.el=d.el,C.vnode=p},re=(d,p,g,C,v,I,x)=>{const w=()=>{if(d.isMounted){let{next:M,bu:P,u:D,parent:U,vnode:Y}=d,he=M,ne;Ut(d,!1),M?(M.el=Y.el,ee(d,M,x)):M=Y,P&&Ps(P),(ne=M.props&&M.props.onVnodeBeforeUpdate)&&at(ne,U,M,Y),Ut(d,!0);const ue=rr(d),Ye=d.subTree;d.subTree=ue,S(Ye,ue,h(Ye.el),k(Ye),d,v,I),M.el=ue.el,he===null&&Ef(d,ue.el),D&&De(D,v),(ne=M.props&&M.props.onVnodeUpdated)&&De(()=>at(ne,U,M,Y),v)}else{let M;const{el:P,props:D}=p,{bm:U,m:Y,parent:he}=d,ne=ar(p);if(Ut(d,!1),U&&Ps(U),!ne&&(M=D&&D.onVnodeBeforeMount)&&at(M,he,p),Ut(d,!0),P&&H){const ue=()=>{d.subTree=rr(d),H(P,d.subTree,d,v,null)};ne?p.type.__asyncLoader().then(()=>!d.isUnmounted&&ue()):ue()}else{const ue=d.subTree=rr(d);S(null,ue,g,C,d,v,I),p.el=ue.el}if(Y&&De(Y,v),!ne&&(M=D&&D.onVnodeMounted)){const ue=p;De(()=>at(M,he,ue),v)}p.shapeFlag&256&&d.a&&De(d.a,v),d.isMounted=!0,p=g=C=null}},T=d.effect=new Yi(w,()=>mc(d.update),d.scope),E=d.update=T.run.bind(T);E.id=d.uid,Ut(d,!0),E()},ee=(d,p,g)=>{p.component=d;const C=d.vnode.props;d.vnode=p,d.next=null,jf(d,p.props,C,g),qf(d,p.children,g),un(),Ir(void 0,d.update),Dt()},je=(d,p,g,C,v,I,x,w,T=!1)=>{const E=d&&d.children,M=d?d.shapeFlag:0,P=p.children,{patchFlag:D,shapeFlag:U}=p;if(D>0){if(D&128){ht(E,P,g,C,v,I,x,w,T);return}else if(D&256){rn(E,P,g,C,v,I,x,w,T);return}}U&8?(M&16&&R(E,v,I),P!==E&&u(g,P)):M&16?U&16?ht(E,P,g,C,v,I,x,w,T):R(E,v,I,!0):(M&8&&u(g,""),U&16&&fe(P,g,C,v,I,x,w,T))},rn=(d,p,g,C,v,I,x,w,T)=>{d=d||ln,p=p||ln;const E=d.length,M=p.length,P=Math.min(E,M);let D;for(D=0;D<P;D++){const U=p[D]=T?bt(p[D]):ct(p[D]);S(d[D],U,g,null,v,I,x,w,T)}E>M?R(d,v,I,!0,!1,P):fe(p,g,C,v,I,x,w,T,P)},ht=(d,p,g,C,v,I,x,w,T)=>{let E=0;const M=p.length;let P=d.length-1,D=M-1;for(;E<=P&&E<=D;){const U=d[E],Y=p[E]=T?bt(p[E]):ct(p[E]);if(Ht(U,Y))S(U,Y,g,null,v,I,x,w,T);else break;E++}for(;E<=P&&E<=D;){const U=d[P],Y=p[D]=T?bt(p[D]):ct(p[D]);if(Ht(U,Y))S(U,Y,g,null,v,I,x,w,T);else break;P--,D--}if(E>P){if(E<=D){const U=D+1,Y=U<M?p[U].el:C;for(;E<=D;)S(null,p[E]=T?bt(p[E]):ct(p[E]),g,Y,v,I,x,w,T),E++}}else if(E>D)for(;E<=P;)Ve(d[E],v,I,!0),E++;else{const U=E,Y=E,he=new Map;for(E=Y;E<=D;E++){const We=p[E]=T?bt(p[E]):ct(p[E]);We.key!=null&&he.set(We.key,E)}let ne,ue=0;const Ye=D-Y+1;let on=!1,tl=0;const Vn=new Array(Ye);for(E=0;E<Ye;E++)Vn[E]=0;for(E=U;E<=P;E++){const We=d[E];if(ue>=Ye){Ve(We,v,I,!0);continue}let st;if(We.key!=null)st=he.get(We.key);else for(ne=Y;ne<=D;ne++)if(Vn[ne-Y]===0&&Ht(We,p[ne])){st=ne;break}st===void 0?Ve(We,v,I,!0):(Vn[st-Y]=E+1,st>=tl?tl=st:on=!0,S(We,p[st],g,null,v,I,x,w,T),ue++)}const nl=on?Xf(Vn):ln;for(ne=nl.length-1,E=Ye-1;E>=0;E--){const We=Y+E,st=p[We],sl=We+1<M?p[We+1].el:C;Vn[E]===0?S(null,st,g,sl,v,I,x,w,T):on&&(ne<0||E!==nl[ne]?nt(st,g,sl,2):ne--)}}},nt=(d,p,g,C,v=null)=>{const{el:I,type:x,transition:w,children:T,shapeFlag:E}=d;if(E&6){nt(d.component.subTree,p,g,C);return}if(E&128){d.suspense.move(p,g,C);return}if(E&64){x.move(d,p,g,oe);return}if(x===ot){s(I,p,g);for(let P=0;P<T.length;P++)nt(T[P],p,g,C);s(d.anchor,p,g);return}if(x===gr){z(d,p,g);return}if(C!==2&&E&1&&w)if(C===0)w.beforeEnter(I),s(I,p,g),De(()=>w.enter(I),v);else{const{leave:P,delayLeave:D,afterLeave:U}=w,Y=()=>s(I,p,g),he=()=>{P(I,()=>{Y(),U&&U()})};D?D(I,Y,he):he()}else s(I,p,g)},Ve=(d,p,g,C=!1,v=!1)=>{const{type:I,props:x,ref:w,children:T,dynamicChildren:E,shapeFlag:M,patchFlag:P,dirs:D}=d;if(w!=null&&pr(w,null,g,d,!0),M&256){p.ctx.deactivate(d);return}const U=M&1&&D,Y=!ar(d);let he;if(Y&&(he=x&&x.onVnodeBeforeUnmount)&&at(he,p,d),M&6)O(d.component,g,C);else{if(M&128){d.suspense.unmount(g,C);return}U&&Ft(d,null,p,"beforeUnmount"),M&64?d.type.remove(d,p,g,v,oe,C):E&&(I!==ot||P>0&&P&64)?R(E,p,g,!1,!0):(I===ot&&P&(128|256)||!v&&M&16)&&R(T,p,g),C&&Di(d)}(Y&&(he=x&&x.onVnodeUnmounted)||U)&&De(()=>{he&&at(he,p,d),U&&Ft(d,null,p,"unmounted")},g)},Di=d=>{const{type:p,el:g,anchor:C,transition:v}=d;if(p===ot){y(g,C);return}if(p===gr){_e(d);return}const I=()=>{i(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:x,delayLeave:w}=v,T=()=>x(g,I);w?w(d.el,I,T):T()}else I()},y=(d,p)=>{let g;for(;d!==p;)g=f(d),i(d),d=g;i(p)},O=(d,p,g)=>{const{bum:C,scope:v,update:I,subTree:x,um:w}=d;C&&Ps(C),v.stop(),I&&(I.active=!1,Ve(x,d,p,g)),w&&De(w,p),De(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},R=(d,p,g,C=!1,v=!1,I=0)=>{for(let x=I;x<d.length;x++)Ve(d[x],p,g,C,v)},k=d=>d.shapeFlag&6?k(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),te=(d,p,g)=>{d==null?p._vnode&&Ve(p._vnode,null,null,!0):S(p._vnode||null,d,p,null,null,null,g),Cc(),p._vnode=d},oe={p:S,um:Ve,m:nt,r:Di,mt:sn,mc:fe,pc:je,pbc:Ne,n:k,o:t};let V,H;return e&&([V,H]=e(oe)),{render:te,hydrate:V,createApp:Kf(te,V)}}function Ut({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ic(t,e,n=!1){const s=t.children,i=e.children;if(W(s)&&W(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=bt(i[r]),l.el=o.el),n||ic(o,l))}}function Xf(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const a=t[s];if(a!==0){if(i=n[n.length-1],t[i]<a){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<a?r=l+1:o=l;a<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Jf=t=>t.__isTeleport,rc="components";function Bv(t,e){return ed(rc,t,!0,e)||t}const Zf=Symbol();function ed(t,e,n=!0,s=!1){const i=Ge||ve;if(i){const r=i.type;if(t===rc){const l=md(r);if(l&&(l===e||l===it(e)||l===As(it(e))))return r}const o=oc(i[t]||r[t],e)||oc(i.appContext[t],e);return!o&&s?r:o}}function oc(t,e){return t&&(t[e]||t[it(e)]||t[As(it(e))])}const ot=Symbol(void 0),_r=Symbol(void 0),lt=Symbol(void 0),gr=Symbol(void 0),Qn=[];let Wt=null;function td(t=!1){Qn.push(Wt=t?null:[])}function nd(){Qn.pop(),Wt=Qn[Qn.length-1]||null}let qs=1;function lc(t){qs+=t}function cc(t){return t.dynamicChildren=qs>0?Wt||ln:null,nd(),qs>0&&Wt&&Wt.push(t),t}function $v(t,e,n,s,i,r){return cc(uc(t,e,n,s,i,r,!0))}function sd(t,e,n,s,i){return cc(Be(t,e,n,s,i,!0))}function mr(t){return t?t.__v_isVNode===!0:!1}function Ht(t,e){return t.type===e.type&&t.key===e.key}const zs="__vInternal",ac=({key:t})=>t!=null?t:null,Ks=({ref:t,ref_key:e,ref_for:n})=>t!=null?Te(t)||Pe(t)||B(t)?{i:Ge,r:t,k:e,f:!!n}:t:null;function uc(t,e=null,n=null,s=0,i=null,r=t===ot?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ac(e),ref:e&&Ks(e),scopeId:Hs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return l?(yr(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=Te(n)?8:16),qs>0&&!o&&Wt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Wt.push(c),c}const Be=id;function id(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Zf)&&(t=lt),mr(t)){const l=dn(t,e,!0);return n&&yr(l,n),l}if(yd(t)&&(t=t.__vccOpts),e){e=rd(e);let{class:l,style:c}=e;l&&!Te(l)&&(e.class=Ui(l)),ye(c)&&(Nl(c)&&!W(c)&&(c=xe({},c)),e.style=Fi(c))}const o=Te(t)?1:bf(t)?128:Jf(t)?64:ye(t)?4:B(t)?2:0;return uc(t,e,n,s,i,o,r,!0)}function rd(t){return t?Nl(t)||zs in t?xe({},t):t:null}function dn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?ld(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&ac(l),ref:e&&e.ref?n&&i?W(i)?i.concat(Ks(e)):[i,Ks(e)]:Ks(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ot?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&dn(t.ssContent),ssFallback:t.ssFallback&&dn(t.ssFallback),el:t.el,anchor:t.anchor}}function od(t=" ",e=0){return Be(_r,null,t,e)}function jv(t="",e=!1){return e?(td(),sd(lt,null,t)):Be(lt,null,t)}function ct(t){return t==null||typeof t=="boolean"?Be(lt):W(t)?Be(ot,null,t.slice()):typeof t=="object"?bt(t):Be(_r,null,String(t))}function bt(t){return t.el===null||t.memo?t:dn(t)}function yr(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(s&(1|64)){const i=e.default;i&&(i._c&&(i._d=!1),yr(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(zs in e)?e._ctx=Ge:i===3&&Ge&&(Ge.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:Ge},n=32):(e=String(e),s&64?(n=16,e=[od(e)]):n=8);t.children=e,t.shapeFlag|=n}function ld(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Ui([e.class,s.class]));else if(i==="style")e.style=Fi([e.style,s.style]);else if(Ss(i)){const r=e[i],o=s[i];r!==o&&!(W(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function at(t,e,n,s=null){ze(t,e,7,[n,s])}function Vv(t,e,n,s){let i;const r=n&&n[s];if(W(t)||Te(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(ye(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const a=o[l];i[l]=e(t[a],a,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}const vr=t=>t?hc(t)?Cr(t)||t.proxy:vr(t.parent):null,Ys=xe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>vr(t.parent),$root:t=>vr(t.root),$emit:t=>t.emit,$options:t=>ql(t),$forceUpdate:t=>()=>mc(t.update),$nextTick:t=>gc.bind(t.proxy),$watch:t=>Id.bind(t)}),cd={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let a;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(s!==se&&Q(s,e))return o[e]=1,s[e];if(i!==se&&Q(i,e))return o[e]=2,i[e];if((a=t.propsOptions[0])&&Q(a,e))return o[e]=3,r[e];if(n!==se&&Q(n,e))return o[e]=4,n[e];ur&&(o[e]=0)}}const u=Ys[e];let h,f;if(u)return e==="$attrs"&&He(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==se&&Q(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,Q(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;if(i!==se&&Q(i,e))i[e]=n;else if(s!==se&&Q(s,e))s[e]=n;else if(Q(t.props,e))return!1;return e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==se&&Q(t,o)||e!==se&&Q(e,o)||(l=r[0])&&Q(l,o)||Q(s,o)||Q(Ys,o)||Q(i.config.globalProperties,o)}},ad=sc();let ud=0;function hd(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||ad,r={uid:ud++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Dh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yl(s,i),emitsOptions:Ml(s,i),emit:null,emitted:null,propsDefaults:se,inheritAttrs:s.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=gf.bind(null,r),t.ce&&t.ce(r),r}let ve=null;const fd=()=>ve||Ge,pn=t=>{ve=t,t.scope.on()},Bt=()=>{ve&&ve.scope.off(),ve=null};function hc(t){return t.vnode.shapeFlag&4}let Qs=!1;function dd(t,e=!1){Qs=e;const{props:n,children:s}=t.vnode,i=hc(t);$f(t,n,i,e),Gf(t,s);const r=i?pd(t,e):void 0;return Qs=!1,r}function pd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=xl(new Proxy(t.ctx,cd));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?gd(t):null;pn(t),un();const r=wt(s,t,0,[t.props,i]);if(Dt(),Bt(),ll(r)){if(r.then(Bt,Bt),e)return r.then(o=>{fc(t,o,e)}).catch(o=>{Xs(o,t,0)});t.asyncDep=r}else fc(t,r,e)}else pc(t,e)}function fc(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ye(e)&&(t.setupState=kl(e)),pc(t,n)}let dc;function pc(t,e,n){const s=t.type;if(!t.render){if(!e&&dc&&!s.render){const i=s.template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=s,a=xe(xe({isCustomElement:r,delimiters:l},o),c);s.render=dc(i,a)}}t.render=s.render||Qe}pn(t),un(),Ff(t),Dt(),Bt()}function _d(t){return new Proxy(t.attrs,{get(e,n){return He(t,"get","$attrs"),e[n]}})}function gd(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=_d(t))},slots:t.slots,emit:t.emit,expose:e}}function Cr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(kl(xl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ys)return Ys[n](t)}}))}function md(t){return B(t)&&t.displayName||t.name}function yd(t){return B(t)&&"__vccOpts"in t}function wt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Xs(r,e,n)}return i}function ze(t,e,n,s){if(B(t)){const r=wt(t,e,n,s);return r&&ll(r)&&r.catch(o=>{Xs(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(ze(t[r],e,n,s));return i}function Xs(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const a=r.ec;if(a){for(let u=0;u<a.length;u++)if(a[u](t,o,l)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){wt(c,null,10,[t,o,l]);return}}vd(t,n,i,s)}function vd(t,e,n,s=!0){console.error(t)}let Js=!1,Er=!1;const $e=[];let pt=0;const Xn=[];let Jn=null,_n=0;const Zn=[];let It=null,gn=0;const _c=Promise.resolve();let br=null,wr=null;function gc(t){const e=br||_c;return t?e.then(this?t.bind(this):t):e}function Cd(t){let e=pt+1,n=$e.length;for(;e<n;){const s=e+n>>>1;es($e[s])<t?e=s+1:n=s}return e}function mc(t){(!$e.length||!$e.includes(t,Js&&t.allowRecurse?pt+1:pt))&&t!==wr&&(t.id==null?$e.push(t):$e.splice(Cd(t.id),0,t),yc())}function yc(){!Js&&!Er&&(Er=!0,br=_c.then(Ec))}function Ed(t){const e=$e.indexOf(t);e>pt&&$e.splice(e,1)}function vc(t,e,n,s){W(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),yc()}function bd(t){vc(t,Jn,Xn,_n)}function wd(t){vc(t,It,Zn,gn)}function Ir(t,e=null){if(Xn.length){for(wr=e,Jn=[...new Set(Xn)],Xn.length=0,_n=0;_n<Jn.length;_n++)Jn[_n]();Jn=null,_n=0,wr=null,Ir(t,e)}}function Cc(t){if(Zn.length){const e=[...new Set(Zn)];if(Zn.length=0,It){It.push(...e);return}for(It=e,It.sort((n,s)=>es(n)-es(s)),gn=0;gn<It.length;gn++)It[gn]();It=null,gn=0}}const es=t=>t.id==null?1/0:t.id;function Ec(t){Er=!1,Js=!0,Ir(t),$e.sort((n,s)=>es(n)-es(s));const e=Qe;try{for(pt=0;pt<$e.length;pt++){const n=$e[pt];n&&n.active!==!1&&wt(n,null,14)}}finally{pt=0,$e.length=0,Cc(),Js=!1,br=null,($e.length||Xn.length||Zn.length)&&Ec(t)}}const bc={};function mn(t,e,n){return wc(t,e,n)}function wc(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=se){const l=ve;let c,a=!1,u=!1;if(Pe(t)?(c=()=>t.value,a=!!t._shallow):fn(t)?(c=()=>t,s=!0):W(t)?(u=!0,a=t.some(fn),c=()=>t.map(A=>{if(Pe(A))return A.value;if(fn(A))return $t(A);if(B(A))return wt(A,l,2)})):B(t)?e?c=()=>wt(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),ze(t,l,3,[f])}:c=Qe,e&&s){const A=c;c=()=>$t(A())}let h,f=A=>{h=S.onStop=()=>{wt(A,l,4)}};if(Qs)return f=Qe,e?n&&ze(e,l,3,[c(),u?[]:void 0,f]):c(),Qe;let _=u?[]:bc;const m=()=>{if(!!S.active)if(e){const A=S.run();(s||a||(u?A.some((L,q)=>Gn(L,_[q])):Gn(A,_)))&&(h&&h(),ze(e,l,3,[A,_===bc?void 0:_,f]),_=A)}else S.run()};m.allowRecurse=!!e;let N;i==="sync"?N=m:i==="post"?N=()=>De(m,l&&l.suspense):N=()=>{!l||l.isMounted?bd(m):m()};const S=new Yi(c,N);return e?n?m():_=S.run():i==="post"?De(S.run.bind(S),l&&l.suspense):S.run(),()=>{S.stop(),l&&l.scope&&Hi(l.scope.effects,S)}}function Id(t,e,n){const s=this.proxy,i=Te(t)?t.includes(".")?Ic(s,t):()=>s[t]:t.bind(s,s);let r;B(e)?r=e:(r=e.handler,n=e);const o=ve;pn(this);const l=wc(i,r.bind(s),n);return o?pn(o):Bt(),l}function Ic(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function $t(t,e){if(!ye(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Pe(t))$t(t.value,e);else if(W(t))for(let n=0;n<t.length;n++)$t(t[n],e);else if(ol(t)||cn(t))t.forEach(n=>{$t(n,e)});else if(al(t))for(const n in t)$t(t[n],e);return t}function Tc(t,e,n){const s=arguments.length;return s===2?ye(e)&&!W(e)?mr(e)?Be(t,null,[e]):Be(t,e):Be(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&mr(n)&&(n=[n]),Be(t,e,n))}const Td="3.2.26",Sd="http://www.w3.org/2000/svg",yn=typeof document!="undefined"?document:null,Sc=new Map,Rd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?yn.createElementNS(Sd,t):yn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>yn.createTextNode(t),createComment:t=>yn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>yn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s){const i=n?n.previousSibling:e.lastChild;let r=Sc.get(t);if(!r){const o=yn.createElement("template");if(o.innerHTML=s?`<svg>${t}</svg>`:t,r=o.content,s){const l=r.firstChild;for(;l.firstChild;)r.appendChild(l.firstChild);r.removeChild(l)}Sc.set(t,r)}return e.insertBefore(r.cloneNode(!0),n),[i?i.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Nd(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function xd(t,e,n){const s=t.style,i=Te(n);if(n&&!i){for(const r in n)Tr(s,r,n[r]);if(e&&!Te(e))for(const r in e)n[r]==null&&Tr(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Rc=/\s*!important$/;function Tr(t,e,n){if(W(n))n.forEach(s=>Tr(t,e,s));else if(e.startsWith("--"))t.setProperty(e,n);else{const s=Ad(t,e);Rc.test(n)?t.setProperty(Pt(s),n.replace(Rc,""),"important"):t[s]=n}}const Nc=["Webkit","Moz","ms"],Sr={};function Ad(t,e){const n=Sr[e];if(n)return n;let s=it(e);if(s!=="filter"&&s in t)return Sr[e]=s;s=As(s);for(let i=0;i<Nc.length;i++){const r=Nc[i]+s;if(r in t)return Sr[e]=r}return e}const xc="http://www.w3.org/1999/xlink";function Pd(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(xc,e.slice(6,e.length)):t.setAttributeNS(xc,e,n);else{const r=Ih(e);n==null||r&&!il(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Od(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const l=typeof t[e];if(l==="boolean"){t[e]=il(n);return}else if(n==null&&l==="string"){t[e]="",t.removeAttribute(e);return}else if(l==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let Zs=Date.now,Ac=!1;if(typeof window!="undefined"){Zs()>document.createEvent("Event").timeStamp&&(Zs=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);Ac=!!(t&&Number(t[1])<=53)}let Rr=0;const kd=Promise.resolve(),Md=()=>{Rr=0},Dd=()=>Rr||(kd.then(Md),Rr=Zs());function vn(t,e,n,s){t.addEventListener(e,n,s)}function Ld(t,e,n,s){t.removeEventListener(e,n,s)}function Fd(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=Ud(e);if(s){const a=r[e]=Wd(s,i);vn(t,l,a,c)}else o&&(Ld(t,l,o,c),r[e]=void 0)}}const Pc=/(?:Once|Passive|Capture)$/;function Ud(t){let e;if(Pc.test(t)){e={};let n;for(;n=t.match(Pc);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Pt(t.slice(2)),e]}function Wd(t,e){const n=s=>{const i=s.timeStamp||Zs();(Ac||i>=n.attached-1)&&ze(Hd(s,n.value),e,5,[s])};return n.value=t,n.attached=Dd(),n}function Hd(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s(i))}else return e}const Oc=/^on[a-z]/,Bd=(t,e,n,s,i=!1,r,o,l,c)=>{e==="class"?Nd(t,s,i):e==="style"?xd(t,n,s):Ss(e)?Wi(e)||Fd(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$d(t,e,s,i))?Od(t,e,s,r,o,l,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Pd(t,e,s,i))};function $d(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Oc.test(e)&&B(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Oc.test(e)&&Te(n)?!1:e in t}const jd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Sf.props;const kc=t=>{const e=t.props["onUpdate:modelValue"];return W(e)?n=>Ps(e,n):e};function Vd(t){t.target.composing=!0}function Mc(t){const e=t.target;e.composing&&(e.composing=!1,Gd(e,"input"))}function Gd(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const Gv={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=kc(i);const r=s||i.props&&i.props.type==="number";vn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n?l=l.trim():r&&(l=Vi(l)),t._assign(l)}),n&&vn(t,"change",()=>{t.value=t.value.trim()}),e||(vn(t,"compositionstart",Vd),vn(t,"compositionend",Mc),vn(t,"change",Mc))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=kc(r),t.composing||document.activeElement===t&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&Vi(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},qd={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},qv=(t,e)=>n=>{if(!("key"in n))return;const s=Pt(n.key);if(e.some(i=>i===s||qd[i]===s))return t(n)},zd=xe({patchProp:Bd},Rd);let Dc;function Kd(){return Dc||(Dc=Yf(zd))}const zv=(...t)=>{const e=Kd().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Yd(s);if(!i)return;const r=e._component;!B(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Yd(t){return Te(t)?document.querySelector(t):t}function Qd(){return Lc().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Lc(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const Xd=typeof Proxy=="function",Jd="devtools-plugin:setup",Zd="plugin:settings:set";class ep{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const s={};if(e.settings)for(const o in e.settings){const l=e.settings[o];s[o]=l.defaultValue}const i=`__vue-devtools-plugin-settings__${e.id}`;let r=Object.assign({},s);try{const o=localStorage.getItem(i),l=JSON.parse(o);Object.assign(r,l)}catch{}this.fallbacks={getSettings(){return r},setSettings(o){try{localStorage.setItem(i,JSON.stringify(o))}catch{}r=o}},n&&n.on(Zd,(o,l)=>{o===this.plugin.id&&this.fallbacks.setSettings(l)}),this.proxiedOn=new Proxy({},{get:(o,l)=>this.target?this.target.on[l]:(...c)=>{this.onQueue.push({method:l,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,l)=>this.target?this.target[l]:l==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(l)?(...c)=>(this.targetQueue.push({method:l,args:c,resolve:()=>{}}),this.fallbacks[l](...c)):(...c)=>new Promise(a=>{this.targetQueue.push({method:l,args:c,resolve:a})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function tp(t,e){const n=Lc(),s=Qd(),i=Xd&&t.enableEarlyProxy;if(s&&(n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(Jd,t,e);else{const r=i?new ep(t,s):null;(n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:t,setupFn:e,proxy:r}),r&&e(r.proxiedTarget)}}/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const Fc=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Cn=t=>Fc?Symbol(t):"_vr_"+t,np=Cn("rvlm"),Uc=Cn("rvd"),Nr=Cn("r"),Wc=Cn("rl"),xr=Cn("rvl"),En=typeof window!="undefined";function sp(t){return t.__esModule||Fc&&t[Symbol.toStringTag]==="Module"}const ie=Object.assign;function Ar(t,e){const n={};for(const s in e){const i=e[s];n[s]=Array.isArray(i)?i.map(t):t(i)}return n}const ts=()=>{},ip=/\/$/,rp=t=>t.replace(ip,"");function Pr(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("?"),c=e.indexOf("#",l>-1?l:0);return l>-1&&(s=e.slice(0,l),r=e.slice(l+1,c>-1?c:e.length),i=t(r)),c>-1&&(s=s||e.slice(0,c),o=e.slice(c,e.length)),s=ap(s!=null?s:e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function op(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Hc(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function lp(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&bn(e.matched[s],n.matched[i])&&Bc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function bn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Bc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!cp(t[n],e[n]))return!1;return!0}function cp(t,e){return Array.isArray(t)?$c(t,e):Array.isArray(e)?$c(e,t):t===e}function $c(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function ap(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],!(i===1||o==="."))if(o==="..")i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var ns;(function(t){t.pop="pop",t.push="push"})(ns||(ns={}));var ss;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ss||(ss={}));function up(t){if(!t)if(En){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),rp(t)}const hp=/^[^#]+#/;function fp(t,e){return t.replace(hp,"#")+e}function dp(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const ei=()=>({left:window.pageXOffset,top:window.pageYOffset});function pp(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=dp(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function jc(t,e){return(history.state?history.state.position-e:-1)+t}const Or=new Map;function _p(t,e){Or.set(t,e)}function gp(t){const e=Or.get(t);return Or.delete(t),e}let mp=()=>location.protocol+"//"+location.host;function Vc(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let l=i.includes(t.slice(r))?t.slice(r).length:1,c=i.slice(l);return c[0]!=="/"&&(c="/"+c),Hc(c,"")}return Hc(n,t)+s+i}function yp(t,e,n,s){let i=[],r=[],o=null;const l=({state:f})=>{const _=Vc(t,location),m=n.value,N=e.value;let S=0;if(f){if(n.value=_,e.value=f,o&&o===m){o=null;return}S=N?f.position-N.position:0}else s(_);i.forEach(A=>{A(n.value,m,{delta:S,type:ns.pop,direction:S?S>0?ss.forward:ss.back:ss.unknown})})};function c(){o=n.value}function a(f){i.push(f);const _=()=>{const m=i.indexOf(f);m>-1&&i.splice(m,1)};return r.push(_),_}function u(){const{history:f}=window;!f.state||f.replaceState(ie({},f.state,{scroll:ei()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:a,destroy:h}}function Gc(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?ei():null}}function vp(t){const{history:e,location:n}=window,s={value:Vc(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,a,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:mp()+t+c;try{e[u?"replaceState":"pushState"](a,"",f),i.value=a}catch(_){console.error(_),n[u?"replace":"assign"](f)}}function o(c,a){const u=ie({},e.state,Gc(i.value.back,c,i.value.forward,!0),a,{position:i.value.position});r(c,u,!0),s.value=c}function l(c,a){const u=ie({},i.value,e.state,{forward:c,scroll:ei()});r(u.current,u,!0);const h=ie({},Gc(s.value,c,null),{position:u.position+1},a);r(c,h,!1),s.value=c}return{location:s,state:i,push:l,replace:o}}function Cp(t){t=up(t);const e=vp(t),n=yp(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ie({location:"",base:t,go:s,createHref:fp.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function Kv(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Cp(t)}function Ep(t){return typeof t=="string"||t&&typeof t=="object"}function qc(t){return typeof t=="string"||typeof t=="symbol"}const Tt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},zc=Cn("nf");var Kc;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Kc||(Kc={}));function wn(t,e){return ie(new Error,{type:t,[zc]:!0},e)}function jt(t,e){return t instanceof Error&&zc in t&&(e==null||!!(t.type&e))}const Yc="[^/]+?",bp={sensitive:!1,strict:!1,start:!0,end:!0},wp=/[.+*?^${}()[\]/\\]/g;function Ip(t,e){const n=ie({},bp,e),s=[];let i=n.start?"^":"";const r=[];for(const a of t){const u=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let h=0;h<a.length;h++){const f=a[h];let _=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(wp,"\\$&"),_+=40;else if(f.type===1){const{value:m,repeatable:N,optional:S,regexp:A}=f;r.push({name:m,repeatable:N,optional:S});const L=A||Yc;if(L!==Yc){_+=10;try{new RegExp(`(${L})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${m}" (${L}): `+z.message)}}let q=N?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;h||(q=S&&a.length<2?`(?:/${q})`:"/"+q),S&&(q+="?"),i+=q,_+=20,S&&(_+=-8),N&&(_+=-20),L===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const a=s.length-1;s[a][s[a].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(a){const u=a.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const _=u[f]||"",m=r[f-1];h[m.name]=_&&m.repeatable?_.split("/"):_}return h}function c(a){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of f)if(_.type===0)u+=_.value;else if(_.type===1){const{value:m,repeatable:N,optional:S}=_,A=m in a?a[m]:"";if(Array.isArray(A)&&!N)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const L=Array.isArray(A)?A.join("/"):A;if(!L)if(S)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=L}}return u}return{re:o,score:s,keys:r,parse:l,stringify:c}}function Tp(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Sp(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=Tp(s[n],i[n]);if(r)return r;n++}return i.length-s.length}const Rp={type:0,value:""},Np=/[a-zA-Z0-9_]/;function xp(t){if(!t)return[[]];if(t==="/")return[[Rp]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${a}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,c,a="",u="";function h(){!a||(n===0?r.push({type:0,value:a}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${a}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:a,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),a="")}function f(){a+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(a&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:Np.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${a}"`),h(),o(),i}function Ap(t,e,n){const s=Ip(xp(t.path),n),i=ie(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Pp(t,e){const n=[],s=new Map;e=Xc({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,f){const _=!f,m=kp(u);m.aliasOf=f&&f.record;const N=Xc(e,u),S=[m];if("alias"in u){const q=typeof u.alias=="string"?[u.alias]:u.alias;for(const z of q)S.push(ie({},m,{components:f?f.record.components:m.components,path:z,aliasOf:f?f.record:m}))}let A,L;for(const q of S){const{path:z}=q;if(h&&z[0]!=="/"){const _e=h.record.path,Ie=_e[_e.length-1]==="/"?"":"/";q.path=h.record.path+(z&&Ie+z)}if(A=Ap(q,h,N),f?f.alias.push(A):(L=L||A,L!==A&&L.alias.push(A),_&&u.name&&!Qc(A)&&o(u.name)),"children"in m){const _e=m.children;for(let Ie=0;Ie<_e.length;Ie++)r(_e[Ie],A,f&&f.children[Ie])}f=f||A,c(A)}return L?()=>{o(L)}:ts}function o(u){if(qc(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function l(){return n}function c(u){let h=0;for(;h<n.length&&Sp(u,n[h])>=0;)h++;n.splice(h,0,u),u.record.name&&!Qc(u)&&s.set(u.record.name,u)}function a(u,h){let f,_={},m,N;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw wn(1,{location:u});N=f.record.name,_=ie(Op(h.params,f.keys.filter(L=>!L.optional).map(L=>L.name)),u.params),m=f.stringify(_)}else if("path"in u)m=u.path,f=n.find(L=>L.re.test(m)),f&&(_=f.parse(m),N=f.record.name);else{if(f=h.name?s.get(h.name):n.find(L=>L.re.test(h.path)),!f)throw wn(1,{location:u,currentLocation:h});N=f.record.name,_=ie({},h.params,u.params),m=f.stringify(_)}const S=[];let A=f;for(;A;)S.unshift(A.record),A=A.parent;return{name:N,path:m,params:_,matched:S,meta:Dp(S)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:a,removeRoute:o,getRoutes:l,getRecordMatcher:i}}function Op(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function kp(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Mp(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function Mp(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Qc(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Dp(t){return t.reduce((e,n)=>ie(e,n.meta),{})}function Xc(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}const Jc=/#/g,Lp=/&/g,Fp=/\//g,Up=/=/g,Wp=/\?/g,Zc=/\+/g,Hp=/%5B/g,Bp=/%5D/g,ea=/%5E/g,$p=/%60/g,ta=/%7B/g,jp=/%7C/g,na=/%7D/g,Vp=/%20/g;function kr(t){return encodeURI(""+t).replace(jp,"|").replace(Hp,"[").replace(Bp,"]")}function Gp(t){return kr(t).replace(ta,"{").replace(na,"}").replace(ea,"^")}function Mr(t){return kr(t).replace(Zc,"%2B").replace(Vp,"+").replace(Jc,"%23").replace(Lp,"%26").replace($p,"`").replace(ta,"{").replace(na,"}").replace(ea,"^")}function qp(t){return Mr(t).replace(Up,"%3D")}function zp(t){return kr(t).replace(Jc,"%23").replace(Wp,"%3F")}function Kp(t){return t==null?"":zp(t).replace(Fp,"%2F")}function ti(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Yp(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Zc," "),o=r.indexOf("="),l=ti(o<0?r:r.slice(0,o)),c=o<0?null:ti(r.slice(o+1));if(l in e){let a=e[l];Array.isArray(a)||(a=e[l]=[a]),a.push(c)}else e[l]=c}return e}function sa(t){let e="";for(let n in t){const s=t[n];if(n=qp(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(s)?s.map(r=>r&&Mr(r)):[s&&Mr(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function Qp(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Array.isArray(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}function is(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function St(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,l)=>{const c=h=>{h===!1?l(wn(4,{from:n,to:e})):h instanceof Error?l(h):Ep(h)?l(wn(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},a=t.call(s&&s.instances[i],e,n,c);let u=Promise.resolve(a);t.length<3&&(u=u.then(c)),u.catch(h=>l(h))})}function Dr(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let l=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(Xp(l)){const a=(l.__vccOpts||l)[e];a&&i.push(St(a,n,s,r,o))}else{let c=l();i.push(()=>c.then(a=>{if(!a)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=sp(a)?a.default:a;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&St(f,n,s,r,o)()}))}}return i}function Xp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ia(t){const e=Et(Nr),n=Et(Wc),s=rt(()=>e.resolve(Yn(t.to))),i=rt(()=>{const{matched:c}=s.value,{length:a}=c,u=c[a-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(bn.bind(null,u));if(f>-1)return f;const _=ra(c[a-2]);return a>1&&ra(u)===_&&h[h.length-1].path!==_?h.findIndex(bn.bind(null,c[a-2])):f}),r=rt(()=>i.value>-1&&t_(n.params,s.value.params)),o=rt(()=>i.value>-1&&i.value===n.matched.length-1&&Bc(n.params,s.value.params));function l(c={}){return e_(c)?e[Yn(t.replace)?"replace":"push"](Yn(t.to)).catch(ts):Promise.resolve()}return{route:s,href:rt(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}const Jp=Wl({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ia,setup(t,{slots:e}){const n=hn(ia(t)),{options:s}=Et(Nr),i=rt(()=>({[oa(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[oa(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Tc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),Zp=Jp;function e_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function t_(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Array.isArray(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function ra(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const oa=(t,e,n)=>t!=null?t:e!=null?e:n,n_=Wl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const s=Et(xr),i=rt(()=>t.route||s.value),r=Et(Uc,0),o=rt(()=>i.value.matched[r]);$s(Uc,r+1),$s(np,o),$s(xr,i);const l=hf();return mn(()=>[l.value,o.value,t.name],([c,a,u],[h,f,_])=>{a&&(a.instances[u]=c,f&&f!==a&&c&&c===h&&(a.leaveGuards.size||(a.leaveGuards=f.leaveGuards),a.updateGuards.size||(a.updateGuards=f.updateGuards))),c&&a&&(!f||!bn(a,f)||!h)&&(a.enterCallbacks[u]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=i.value,a=o.value,u=a&&a.components[t.name],h=t.name;if(!u)return la(n.default,{Component:u,route:c});const f=a.props[t.name],_=f?f===!0?c.params:typeof f=="function"?f(c):f:null,N=Tc(u,ie({},_,e,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(a.instances[h]=null)},ref:l}));return la(n.default,{Component:N,route:c})||N}}});function la(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const s_=n_;function Yv(t){const e=Pp(t.routes,t),n=t.parseQuery||Yp,s=t.stringifyQuery||sa,i=t.history,r=is(),o=is(),l=is(),c=ff(Tt);let a=Tt;En&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ar.bind(null,y=>""+y),h=Ar.bind(null,Kp),f=Ar.bind(null,ti);function _(y,O){let R,k;return qc(y)?(R=e.getRecordMatcher(y),k=O):k=y,e.addRoute(k,R)}function m(y){const O=e.getRecordMatcher(y);O&&e.removeRoute(O)}function N(){return e.getRoutes().map(y=>y.record)}function S(y){return!!e.getRecordMatcher(y)}function A(y,O){if(O=ie({},O||c.value),typeof y=="string"){const H=Pr(n,y,O.path),d=e.resolve({path:H.path},O),p=i.createHref(H.fullPath);return ie(H,d,{params:f(d.params),hash:ti(H.hash),redirectedFrom:void 0,href:p})}let R;if("path"in y)R=ie({},y,{path:Pr(n,y.path,O.path).path});else{const H=ie({},y.params);for(const d in H)H[d]==null&&delete H[d];R=ie({},y,{params:h(y.params)}),O.params=h(O.params)}const k=e.resolve(R,O),te=y.hash||"";k.params=u(f(k.params));const oe=op(s,ie({},y,{hash:Gp(te),path:k.path})),V=i.createHref(oe);return ie({fullPath:oe,hash:te,query:s===sa?Qp(y.query):y.query||{}},k,{redirectedFrom:void 0,href:V})}function L(y){return typeof y=="string"?Pr(n,y,c.value.path):ie({},y)}function q(y,O){if(a!==y)return wn(8,{from:O,to:y})}function z(y){return K(y)}function _e(y){return z(ie(L(y),{replace:!0}))}function Ie(y){const O=y.matched[y.matched.length-1];if(O&&O.redirect){const{redirect:R}=O;let k=typeof R=="function"?R(y):R;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=L(k):{path:k},k.params={}),ie({query:y.query,hash:y.hash,params:y.params},k)}}function K(y,O){const R=a=A(y),k=c.value,te=y.state,oe=y.force,V=y.replace===!0,H=Ie(R);if(H)return K(ie(L(H),{state:te,force:oe,replace:V}),O||R);const d=R;d.redirectedFrom=O;let p;return!oe&&lp(s,k,R)&&(p=wn(16,{to:d,from:k}),rn(k,k,!0,!1)),(p?Promise.resolve(p):fe(d,k)).catch(g=>jt(g)?g:re(g,d,k)).then(g=>{if(g){if(jt(g,2))return K(ie(L(g.to),{state:te,force:oe,replace:V}),O||d)}else g=Ne(d,k,!0,V,te);return Me(d,k,g),g})}function ge(y,O){const R=q(y,O);return R?Promise.reject(R):Promise.resolve()}function fe(y,O){let R;const[k,te,oe]=i_(y,O);R=Dr(k.reverse(),"beforeRouteLeave",y,O);for(const H of k)H.leaveGuards.forEach(d=>{R.push(St(d,y,O))});const V=ge.bind(null,y,O);return R.push(V),In(R).then(()=>{R=[];for(const H of r.list())R.push(St(H,y,O));return R.push(V),In(R)}).then(()=>{R=Dr(te,"beforeRouteUpdate",y,O);for(const H of te)H.updateGuards.forEach(d=>{R.push(St(d,y,O))});return R.push(V),In(R)}).then(()=>{R=[];for(const H of y.matched)if(H.beforeEnter&&!O.matched.includes(H))if(Array.isArray(H.beforeEnter))for(const d of H.beforeEnter)R.push(St(d,y,O));else R.push(St(H.beforeEnter,y,O));return R.push(V),In(R)}).then(()=>(y.matched.forEach(H=>H.enterCallbacks={}),R=Dr(oe,"beforeRouteEnter",y,O),R.push(V),In(R))).then(()=>{R=[];for(const H of o.list())R.push(St(H,y,O));return R.push(V),In(R)}).catch(H=>jt(H,8)?H:Promise.reject(H))}function Me(y,O,R){for(const k of l.list())k(y,O,R)}function Ne(y,O,R,k,te){const oe=q(y,O);if(oe)return oe;const V=O===Tt,H=En?history.state:{};R&&(k||V?i.replace(y.fullPath,ie({scroll:V&&H&&H.scroll},te)):i.push(y.fullPath,te)),c.value=y,rn(y,O,R,V),je()}let Ae;function yt(){Ae=i.listen((y,O,R)=>{const k=A(y),te=Ie(k);if(te){K(ie(te,{replace:!0}),k).catch(ts);return}a=k;const oe=c.value;En&&_p(jc(oe.fullPath,R.delta),ei()),fe(k,oe).catch(V=>jt(V,4|8)?V:jt(V,2)?(K(V.to,k).then(H=>{jt(H,4|16)&&!R.delta&&R.type===ns.pop&&i.go(-1,!1)}).catch(ts),Promise.reject()):(R.delta&&i.go(-R.delta,!1),re(V,k,oe))).then(V=>{V=V||Ne(k,oe,!1),V&&(R.delta?i.go(-R.delta,!1):R.type===ns.pop&&jt(V,4|16)&&i.go(-1,!1)),Me(k,oe,V)}).catch(ts)})}let nn=is(),sn=is(),me;function re(y,O,R){je(y);const k=sn.list();return k.length?k.forEach(te=>te(y,O,R)):console.error(y),Promise.reject(y)}function ee(){return me&&c.value!==Tt?Promise.resolve():new Promise((y,O)=>{nn.add([y,O])})}function je(y){me||(me=!0,yt(),nn.list().forEach(([O,R])=>y?R(y):O()),nn.reset())}function rn(y,O,R,k){const{scrollBehavior:te}=t;if(!En||!te)return Promise.resolve();const oe=!R&&gp(jc(y.fullPath,0))||(k||!R)&&history.state&&history.state.scroll||null;return gc().then(()=>te(y,O,oe)).then(V=>V&&pp(V)).catch(V=>re(V,y,O))}const ht=y=>i.go(y);let nt;const Ve=new Set;return{currentRoute:c,addRoute:_,removeRoute:m,hasRoute:S,getRoutes:N,resolve:A,options:t,push:z,replace:_e,go:ht,back:()=>ht(-1),forward:()=>ht(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:sn.add,isReady:ee,install(y){const O=this;y.component("RouterLink",Zp),y.component("RouterView",s_),y.config.globalProperties.$router=O,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Yn(c)}),En&&!nt&&c.value===Tt&&(nt=!0,z(i.location).catch(te=>{}));const R={};for(const te in Tt)R[te]=rt(()=>c.value[te]);y.provide(Nr,O),y.provide(Wc,hn(R)),y.provide(xr,c);const k=y.unmount;Ve.add(y),y.unmount=function(){Ve.delete(y),Ve.size<1&&(a=Tt,Ae&&Ae(),c.value=Tt,nt=!1,me=!1),k()}}}}function In(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function i_(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(a=>bn(a,l))?s.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(a=>bn(a,c))||i.push(c))}return[n,s,i]}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var r_="store";function Tn(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function o_(t){return t!==null&&typeof t=="object"}function l_(t){return t&&typeof t.then=="function"}function c_(t,e){return function(){return t(e)}}function ca(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var s=e.indexOf(t);s>-1&&e.splice(s,1)}}function aa(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;ni(t,n,[],t._modules.root,!0),Lr(t,n,e)}function Lr(t,e,n){var s=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,r={};Tn(i,function(o,l){r[l]=c_(o,t),Object.defineProperty(t.getters,l,{get:function(){return r[l]()},enumerable:!0})}),t._state=hn({data:e}),t.strict&&d_(t),s&&n&&t._withCommit(function(){s.data=null})}function ni(t,e,n,s,i){var r=!n.length,o=t._modules.getNamespace(n);if(s.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=s),!r&&!i){var l=Fr(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){l[c]=s.state})}var a=s.context=a_(t,o,n);s.forEachMutation(function(u,h){var f=o+h;u_(t,f,u,a)}),s.forEachAction(function(u,h){var f=u.root?h:o+h,_=u.handler||u;h_(t,f,_,a)}),s.forEachGetter(function(u,h){var f=o+h;f_(t,f,u,a)}),s.forEachChild(function(u,h){ni(t,e,n.concat(h),u,i)})}function a_(t,e,n){var s=e==="",i={dispatch:s?t.dispatch:function(r,o,l){var c=si(r,o,l),a=c.payload,u=c.options,h=c.type;return(!u||!u.root)&&(h=e+h),t.dispatch(h,a)},commit:s?t.commit:function(r,o,l){var c=si(r,o,l),a=c.payload,u=c.options,h=c.type;(!u||!u.root)&&(h=e+h),t.commit(h,a,u)}};return Object.defineProperties(i,{getters:{get:s?function(){return t.getters}:function(){return ua(t,e)}},state:{get:function(){return Fr(t.state,n)}}}),i}function ua(t,e){if(!t._makeLocalGettersCache[e]){var n={},s=e.length;Object.keys(t.getters).forEach(function(i){if(i.slice(0,s)===e){var r=i.slice(s);Object.defineProperty(n,r,{get:function(){return t.getters[i]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function u_(t,e,n,s){var i=t._mutations[e]||(t._mutations[e]=[]);i.push(function(o){n.call(t,s.state,o)})}function h_(t,e,n,s){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(o){var l=n.call(t,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:t.getters,rootState:t.state},o);return l_(l)||(l=Promise.resolve(l)),t._devtoolHook?l.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):l})}function f_(t,e,n,s){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(r){return n(s.state,s.getters,r.state,r.getters)})}function d_(t){mn(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Fr(t,e){return e.reduce(function(n,s){return n[s]},t)}function si(t,e,n){return o_(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var p_="vuex bindings",ha="vuex:mutations",Ur="vuex:actions",Sn="vuex",__=0;function g_(t,e){tp({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[p_]},function(n){n.addTimelineLayer({id:ha,label:"Vuex Mutations",color:fa}),n.addTimelineLayer({id:Ur,label:"Vuex Actions",color:fa}),n.addInspector({id:Sn,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(s){if(s.app===t&&s.inspectorId===Sn)if(s.filter){var i=[];ga(i,e._modules.root,s.filter,""),s.rootNodes=i}else s.rootNodes=[_a(e._modules.root,"")]}),n.on.getInspectorState(function(s){if(s.app===t&&s.inspectorId===Sn){var i=s.nodeId;ua(e,i),s.state=v_(E_(e._modules,i),i==="root"?e.getters:e._makeLocalGettersCache,i)}}),n.on.editInspectorState(function(s){if(s.app===t&&s.inspectorId===Sn){var i=s.nodeId,r=s.path;i!=="root"&&(r=i.split("/").filter(Boolean).concat(r)),e._withCommit(function(){s.set(e._state.data,r,s.state.value)})}}),e.subscribe(function(s,i){var r={};s.payload&&(r.payload=s.payload),r.state=i,n.notifyComponentUpdate(),n.sendInspectorTree(Sn),n.sendInspectorState(Sn),n.addTimelineEvent({layerId:ha,event:{time:Date.now(),title:s.type,data:r}})}),e.subscribeAction({before:function(s,i){var r={};s.payload&&(r.payload=s.payload),s._id=__++,s._time=Date.now(),r.state=i,n.addTimelineEvent({layerId:Ur,event:{time:s._time,title:s.type,groupId:s._id,subtitle:"start",data:r}})},after:function(s,i){var r={},o=Date.now()-s._time;r.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},s.payload&&(r.payload=s.payload),r.state=i,n.addTimelineEvent({layerId:Ur,event:{time:Date.now(),title:s.type,groupId:s._id,subtitle:"end",data:r}})}})})}var fa=8702998,m_=6710886,y_=16777215,da={label:"namespaced",textColor:y_,backgroundColor:m_};function pa(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function _a(t,e){return{id:e||"root",label:pa(e),tags:t.namespaced?[da]:[],children:Object.keys(t._children).map(function(n){return _a(t._children[n],e+n+"/")})}}function ga(t,e,n,s){s.includes(n)&&t.push({id:s||"root",label:s.endsWith("/")?s.slice(0,s.length-1):s||"Root",tags:e.namespaced?[da]:[]}),Object.keys(e._children).forEach(function(i){ga(t,e._children[i],n,s+i+"/")})}function v_(t,e,n){e=n==="root"?e:e[n];var s=Object.keys(e),i={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(s.length){var r=C_(e);i.getters=Object.keys(r).map(function(o){return{key:o.endsWith("/")?pa(o):o,editable:!1,value:Wr(function(){return r[o]})}})}return i}function C_(t){var e={};return Object.keys(t).forEach(function(n){var s=n.split("/");if(s.length>1){var i=e,r=s.pop();s.forEach(function(o){i[o]||(i[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),i=i[o]._custom.value}),i[r]=Wr(function(){return t[n]})}else e[n]=Wr(function(){return t[n]})}),e}function E_(t,e){var n=e.split("/").filter(function(s){return s});return n.reduce(function(s,i,r){var o=s[i];if(!o)throw new Error('Missing module "'+i+'" for path "'+e+'".');return r===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Wr(t){try{return t()}catch(e){return e}}var Xe=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var s=e.state;this.state=(typeof s=="function"?s():s)||{}},ma={namespaced:{configurable:!0}};ma.namespaced.get=function(){return!!this._rawModule.namespaced};Xe.prototype.addChild=function(e,n){this._children[e]=n};Xe.prototype.removeChild=function(e){delete this._children[e]};Xe.prototype.getChild=function(e){return this._children[e]};Xe.prototype.hasChild=function(e){return e in this._children};Xe.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Xe.prototype.forEachChild=function(e){Tn(this._children,e)};Xe.prototype.forEachGetter=function(e){this._rawModule.getters&&Tn(this._rawModule.getters,e)};Xe.prototype.forEachAction=function(e){this._rawModule.actions&&Tn(this._rawModule.actions,e)};Xe.prototype.forEachMutation=function(e){this._rawModule.mutations&&Tn(this._rawModule.mutations,e)};Object.defineProperties(Xe.prototype,ma);var Vt=function(e){this.register([],e,!1)};Vt.prototype.get=function(e){return e.reduce(function(n,s){return n.getChild(s)},this.root)};Vt.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(s,i){return n=n.getChild(i),s+(n.namespaced?i+"/":"")},"")};Vt.prototype.update=function(e){ya([],this.root,e)};Vt.prototype.register=function(e,n,s){var i=this;s===void 0&&(s=!0);var r=new Xe(n,s);if(e.length===0)this.root=r;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],r)}n.modules&&Tn(n.modules,function(l,c){i.register(e.concat(c),l,s)})};Vt.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1],i=n.getChild(s);!i||!i.runtime||n.removeChild(s)};Vt.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1];return n?n.hasChild(s):!1};function ya(t,e,n){if(e.update(n),n.modules)for(var s in n.modules){if(!e.getChild(s))return;ya(t.concat(s),e.getChild(s),n.modules[s])}}function Qv(t){return new Le(t)}var Le=function(e){var n=this;e===void 0&&(e={});var s=e.plugins;s===void 0&&(s=[]);var i=e.strict;i===void 0&&(i=!1);var r=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Vt(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=r;var o=this,l=this,c=l.dispatch,a=l.commit;this.dispatch=function(f,_){return c.call(o,f,_)},this.commit=function(f,_,m){return a.call(o,f,_,m)},this.strict=i;var u=this._modules.root.state;ni(this,u,[],this._modules.root),Lr(this,u),s.forEach(function(h){return h(n)})},Hr={state:{configurable:!0}};Le.prototype.install=function(e,n){e.provide(n||r_,this),e.config.globalProperties.$store=this;var s=this._devtools!==void 0?this._devtools:!1;s&&g_(e,this)};Hr.state.get=function(){return this._state.data};Hr.state.set=function(t){};Le.prototype.commit=function(e,n,s){var i=this,r=si(e,n,s),o=r.type,l=r.payload,c={type:o,payload:l},a=this._mutations[o];!a||(this._withCommit(function(){a.forEach(function(h){h(l)})}),this._subscribers.slice().forEach(function(u){return u(c,i.state)}))};Le.prototype.dispatch=function(e,n){var s=this,i=si(e,n),r=i.type,o=i.payload,l={type:r,payload:o},c=this._actions[r];if(!!c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(l,s.state)})}catch{}var a=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,h){a.then(function(f){try{s._actionSubscribers.filter(function(_){return _.after}).forEach(function(_){return _.after(l,s.state)})}catch{}u(f)},function(f){try{s._actionSubscribers.filter(function(_){return _.error}).forEach(function(_){return _.error(l,s.state,f)})}catch{}h(f)})})}};Le.prototype.subscribe=function(e,n){return ca(e,this._subscribers,n)};Le.prototype.subscribeAction=function(e,n){var s=typeof e=="function"?{before:e}:e;return ca(s,this._actionSubscribers,n)};Le.prototype.watch=function(e,n,s){var i=this;return mn(function(){return e(i.state,i.getters)},n,Object.assign({},s))};Le.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};Le.prototype.registerModule=function(e,n,s){s===void 0&&(s={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),ni(this,this.state,e,this._modules.get(e),s.preserveState),Lr(this,this.state)};Le.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var s=Fr(n.state,e.slice(0,-1));delete s[e[e.length-1]]}),aa(this)};Le.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};Le.prototype.hotUpdate=function(e){this._modules.update(e),aa(this,!0)};Le.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(Le.prototype,Hr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=function(t,e){if(!t)throw Rn(e)},Rn=function(t){return new Error("Firebase Database ("+va.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)==55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)==56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},b_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Br={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,a=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let f=(l&15)<<2|a>>6,_=a&63;c||(_=64,o||(f=64)),s.push(n[u],n[h],n[f],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ca(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):b_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const a=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||a==null||h==null)throw Error();const f=r<<2|l>>4;if(s.push(f),a!==64){const _=l<<4&240|a>>2;if(s.push(_),h!==64){const m=a<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},w_=function(t){const e=Ca(t);return Br.encodeByteArray(e,!0)},Ea=function(t){try{return Br.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(t){return ba(void 0,t)}function ba(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!T_(n)||(t[n]=ba(t[n],e[n]));return t}function T_(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wa(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(S_())}function R_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ia(){return va.NODE_ADMIN===!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_="FirebaseError";class $r extends Error{constructor(e,n,s){super(n);this.code=e,this.customData=s,this.name=N_,Object.setPrototypeOf(this,$r.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ta.prototype.create)}}class Ta{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?x_(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new $r(i,l,s)}}function x_(t,e){return t.replace(A_,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const A_=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(t){return JSON.parse(t)}function Ce(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=os(Ea(r[0])||""),n=os(Ea(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},P_=function(t){const e=Sa(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},O_=function(t){const e=Sa(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Nn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ra(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ii(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function jr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Na(r)&&Na(o)){if(!jr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Na(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],a,u;for(let h=0;h<80;h++){h<40?h<20?(a=l^r&(o^l),u=1518500249):(a=r^o^l,u=1859775393):h<60?(a=r&o|l&(r|o),u=2400959708):(a=r^o^l,u=3395469782);const f=(i<<5|i>>>27)+a+c+u+s[h]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function ri(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,b(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},oi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(t){return t&&t._delegate?t._delegate:t}class li{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new rs;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(U_(e))try{this.getOrInitializeService({instanceIdentifier:Gt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Gt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gt){return this.instances.has(e)}getOptions(e=Gt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:F_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Gt){return this.component?this.component.multipleInstances?e:Gt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function F_(t){return t===Gt?void 0:t}function U_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new L_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const H_={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},B_=le.INFO,$_={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},j_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=$_[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xa{constructor(e){this.name=e,this._logLevel=B_,this._logHandler=j_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?H_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(G_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function G_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vr="@firebase/app",Aa="0.7.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=new xa("@firebase/app"),q_="@firebase/app-compat",z_="@firebase/analytics-compat",K_="@firebase/analytics",Y_="@firebase/app-check-compat",Q_="@firebase/app-check",X_="@firebase/auth",J_="@firebase/auth-compat",Z_="@firebase/database",eg="@firebase/database-compat",tg="@firebase/functions",ng="@firebase/functions-compat",sg="@firebase/installations",ig="@firebase/installations-compat",rg="@firebase/messaging",og="@firebase/messaging-compat",lg="@firebase/performance",cg="@firebase/performance-compat",ag="@firebase/remote-config",ug="@firebase/remote-config-compat",hg="@firebase/storage",fg="@firebase/storage-compat",dg="@firebase/firestore",pg="@firebase/firestore-compat",_g="firebase",gg="9.6.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa="[DEFAULT]",mg={[Vr]:"fire-core",[q_]:"fire-core-compat",[K_]:"fire-analytics",[z_]:"fire-analytics-compat",[Q_]:"fire-app-check",[Y_]:"fire-app-check-compat",[X_]:"fire-auth",[J_]:"fire-auth-compat",[Z_]:"fire-rtdb",[eg]:"fire-rtdb-compat",[tg]:"fire-fn",[ng]:"fire-fn-compat",[sg]:"fire-iid",[ig]:"fire-iid-compat",[rg]:"fire-fcm",[og]:"fire-fcm-compat",[lg]:"fire-perf",[cg]:"fire-perf-compat",[ag]:"fire-rc",[ug]:"fire-rc-compat",[hg]:"fire-gcs",[fg]:"fire-gcs-compat",[dg]:"fire-fst",[pg]:"fire-fst-compat","fire-js":"fire-js",[_g]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=new Map,qr=new Map;function yg(t,e){try{t.container.addComponent(e)}catch(n){Gr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zr(t){const e=t.name;if(qr.has(e))return Gr.debug(`There were multiple attempts to register component ${e}.`),!1;qr.set(e,t);for(const n of ci.values())yg(n,t);return!0}function vg(t,e){return t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},ai=new Ta("app","Firebase",Cg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new li("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ai.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg=gg;function Xv(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Pa,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw ai.create("bad-app-name",{appName:String(s)});const i=ci.get(s);if(i){if(jr(t,i.options)&&jr(n,i.config))return i;throw ai.create("duplicate-app",{appName:s})}const r=new W_(s);for(const l of qr.values())r.addComponent(l);const o=new Eg(t,n,r);return ci.set(s,o),o}function wg(t=Pa){const e=ci.get(t);if(!e)throw ai.create("no-app",{appName:t});return e}function xn(t,e,n){var s;let i=(s=mg[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gr.warn(l.join(" "));return}zr(new li(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(t){zr(new li("platform-logger",e=>new V_(e),"PRIVATE")),xn(Vr,Aa,t),xn(Vr,Aa,"esm2017"),xn("fire-js","")}Ig("");var Tg="firebase",Sg="9.6.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xn(Tg,Sg,"app");const Oa="@firebase/database",ka="0.12.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ma="";function Rg(t){Ma=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ce(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:os(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ut(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Ng(e)}}catch{}return new xg},qt=Da("localStorage"),Kr=Da("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new xa("@firebase/database"),Ag=function(){let t=1;return function(){return t++}}(),La=function(t){const e=D_(t),n=new M_;n.update(e);const s=n.digest();return Br.encodeByteArray(s)},cs=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=cs.apply(null,s):typeof s=="object"?e+=Ce(s):e+=s,e+=" "}return e};let zt=null,Fa=!0;const Pg=function(t,e){b(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(An.logLevel=le.VERBOSE,zt=An.log.bind(An),e&&Kr.set("logging_enabled",!0)):typeof t=="function"?zt=t:(zt=null,Kr.remove("logging_enabled"))},Se=function(...t){if(Fa===!0&&(Fa=!1,zt===null&&Kr.get("logging_enabled")===!0&&Pg(!0)),zt){const e=cs.apply(null,t);zt(e)}},as=function(t){return function(...e){Se(t,...e)}},Yr=function(...t){const e="FIREBASE INTERNAL ERROR: "+cs(...t);An.error(e)},Kt=function(...t){const e=`FIREBASE FATAL ERROR: ${cs(...t)}`;throw An.error(e),new Error(e)},ke=function(...t){const e="FIREBASE WARNING: "+cs(...t);An.warn(e)},Og=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ke("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Qr=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},kg=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Pn="[MIN_NAME]",Yt="[MAX_NAME]",Qt=function(t,e){if(t===e)return 0;if(t===Pn||e===Yt)return-1;if(e===Pn||t===Yt)return 1;{const n=Ha(t),s=Ha(e);return n!==null?s!==null?n-s==0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Mg=function(t,e){return t===e?0:t<e?-1:1},us=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ce(e))},Xr=function(t){if(typeof t!="object"||t===null)return Ce(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ce(e[s]),n+=":",n+=Xr(t[e[s]]);return n+="}",n},Ua=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Re(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Wa=function(t){b(!Qr(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,c;t===0?(r=0,o=0,i=1/t==-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const a=[];for(c=n;c;c-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(i?1:0),a.reverse();const u=a.join("");let h="";for(c=0;c<64;c+=8){let f=parseInt(u.substr(c,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},Dg=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Lg=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Fg(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Ug=new RegExp("^-?(0*)\\d{1,10}$"),Wg=-2147483648,Hg=2147483647,Ha=function(t){if(Ug.test(t)){const e=Number(t);if(e>=Wg&&e<=Hg)return e}return null},On=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ke("Exception was thrown by user callback.",n),e},Math.floor(0))}},Bg=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},hs=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ke(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Se("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ke(e)}}class Jr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Jr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr="5",Ba="v",$a="s",ja="r",Va="f",Ga=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,qa="ls",Vg="p",eo="ac",za="websocket",Ka="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e,n,s,i,r=!1,o="",l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=qt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&qt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function qg(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Ya(t,e,n){b(typeof e=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let s;if(e===za)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ka)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);qg(t)&&(n.ns=t.namespace);const i=[];return Re(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(){this.counters_={}}incrementCounter(e,n=1){ut(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return I_(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to={},no={};function so(t){const e=t.toString();return to[e]||(to[e]=new zg),to[e]}function Kg(t,e){const n=t.toString();return no[n]||(no[n]=e()),no[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&On(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa="start",Qg="close",Xg="pLPCommand",Jg="pRTLPCB",Xa="id",Ja="pw",Za="ser",Zg="cb",em="seg",tm="ts",nm="d",sm="dframe",eu=1870,tu=30,im=eu-tu,rm=25e3,om=3e4;class kn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=as(e),this.stats_=so(n),this.urlFn=c=>(this.appCheckToken&&(c[eo]=this.appCheckToken),Ya(n,Ka,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Yg(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(om)),kg(()=>{if(this.isClosed_)return;this.scriptTagHolder=new io((...r)=>{const[o,l,c,a,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Qa)this.id=l,this.password=c;else if(o===Qg)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Qa]="t",s[Za]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Zg]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Ba]=Zr,this.transportSessionId&&(s[$a]=this.transportSessionId),this.lastSessionId&&(s[qa]=this.lastSessionId),this.applicationId&&(s[Vg]=this.applicationId),this.appCheckToken&&(s[eo]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&Ga.test(location.hostname)&&(s[ja]=Va);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){kn.forceAllow_=!0}static forceDisallow(){kn.forceDisallow_=!0}static isAvailable(){return kn.forceAllow_?!0:!kn.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!Dg()&&!Lg()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=w_(n),i=Ua(s,im);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[sm]="t",s[Xa]=e,s[Ja]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ce(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class io{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ag(),window[Xg+this.uniqueCallbackIdentifier]=e,window[Jg+this.uniqueCallbackIdentifier]=n,this.myIFrame=io.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,"javascript:".length)==="javascript:"){const l=document.domain;r='<script>document.domain="'+l+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Se("frame writing exception"),l.stack&&Se(l.stack),Se(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Se("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Xa]=this.myID,e[Ja]=this.myPW,e[Za]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+tu+s.length<=eu;){const o=this.pendingSegs.shift();s=s+"&"+em+i+"="+o.seg+"&"+tm+i+"="+o.ts+"&"+nm+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(rm)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Se("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm=16384,cm=45e3;let ui=null;typeof MozWebSocket!="undefined"?ui=MozWebSocket:typeof WebSocket!="undefined"&&(ui=WebSocket);class Je{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=as(this.connId),this.stats_=so(n),this.connURL=Je.connectionURL_(n,o,l,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i){const r={};return r[Ba]=Zr,typeof location!="undefined"&&location.hostname&&Ga.test(location.hostname)&&(r[ja]=Va),n&&(r[$a]=n),s&&(r[qa]=s),i&&(r[eo]=i),Ya(e,za,r)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,qt.set("previous_websocket_failure",!0);try{if(!Ia()){const s={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new ui(this.connURL,[],s)}}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Je.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ui!==null&&!Je.forceDisallow_}static previouslyFailed(){return qt.isInMemoryStorage||qt.get("previous_websocket_failure")===!0}markConnectionHealthy(){qt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=os(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ua(n,lm);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(cm))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Je.responsesRequiredToBeHealthy=2;Je.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[kn,Je]}initTransports_(e){const n=Je&&Je.isAvailable();let s=n&&!Je.previouslyFailed();if(e.webSocketOnly&&(n||ke("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Je];else{const i=this.transports_=[];for(const r of ro.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am=6e4,um=5e3,hm=10*1024,fm=100*1024,oo="t",nu="d",dm="s",su="r",pm="e",iu="o",ru="a",ou="n",lu="p",_m="h";class gm{constructor(e,n,s,i,r,o,l,c,a,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=a,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=as("c:"+this.id+":"),this.transportManager_=new ro(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=hs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>fm?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>hm?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(oo in e){const n=e[oo];n===ru?this.upgradeIfSecondaryHealthy_():n===su?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===iu&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=us("t",e),s=us("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:lu,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ru,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ou,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=us("t",e),s=us("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=us(oo,e);if(nu in e){const s=e[nu];if(n===_m)this.onHandshake_(s);else if(n===ou){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===dm?this.onConnectionShutdown_(s):n===su?this.onReset_(s):n===pm?Yr("Server Error: "+s):n===iu?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Yr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Zr!==s&&ke("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),hs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(am))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):hs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(um))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:lu,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(qt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){b(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends au{constructor(){super(["online"]);this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!wa()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new hi}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu=32,hu=768;class Z{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function J(){return new Z("")}function $(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Rt(t){return t.pieces_.length-t.pieceNum_}function ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Z(t.pieces_,e)}function lo(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function mm(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function fs(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function fu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Z(e,0)}function de(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Z)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Z(n,0)}function G(t){return t.pieceNum_>=t.pieces_.length}function Fe(t,e){const n=$(t),s=$(e);if(n===null)return e;if(n===s)return Fe(ce(t),ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ym(t,e){const n=fs(t,0),s=fs(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=Qt(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function co(t,e){if(Rt(t)!==Rt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ke(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Rt(t)>Rt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class vm{constructor(e,n){this.errorPrefix_=n,this.parts_=fs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=oi(this.parts_[s]);du(this)}}function Cm(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=oi(e),du(t)}function Em(t){const e=t.parts_.pop();t.byteLength_-=oi(e),t.parts_.length>0&&(t.byteLength_-=1)}function du(t){if(t.byteLength_>hu)throw new Error(t.errorPrefix_+"has a key path longer than "+hu+" bytes ("+t.byteLength_+").");if(t.parts_.length>uu)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+uu+") or object contains a cycle "+Xt(t))}function Xt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao extends au{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new ao}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=1e3,bm=60*5*1e3,wm=3*1e3,pu=30*1e3,Im=1.3,Tm=3e4,Sm="server_kill",_u=3;class _t extends cu{constructor(e,n,s,i,r,o,l,c){super();if(this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=_t.nextPersistentConnectionId_++,this.log_=as("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ds,this.maxReconnectDelay_=bm,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Ia())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ao.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&hi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ce(r)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new rs,s={p:e._path.toString(),q:e._queryObject},i={action:"g",request:s,onComplete:o=>{const l=o.d;o.s==="ok"?(this.onDataUpdate_(s.p,l,!1,null),n.resolve(l)):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[r];o===void 0||i!==o||(delete this.outstandingGets_[r],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),n.reject(new Error("Client is offline.")))},wm),this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,a=l.s;_t.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),a!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(a,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ut(e,"w")){const s=Nn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ke(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||O_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=pu)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=P_(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ce(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Yr("Unrecognized action received from server: "+Ce(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ds,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ds,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Tm&&(this.reconnectDelay_=ds),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Im)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+_t.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},a=function(h){b(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:c,sendRequest:a};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Se("getToken() completed but was canceled"):(Se("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new gm(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{ke(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(Sm)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&ke(h),c())}}}interrupt(e){Se("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Se("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ra(this.interruptReasons_)&&(this.reconnectDelay_=ds,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Xr(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Z(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Se("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=_u&&(this.reconnectDelay_=pu,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Se("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=_u&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ma.replace(/\./g,"-")]=1,wa()?e["framework.cordova"]=1:R_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=hi.getInstance().currentlyOnline();return Ra(this.interruptReasons_)&&e}}_t.nextPersistentConnectionId_=0;_t.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new j(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new j(Pn,e),i=new j(Pn,n);return this.compare(s,i)!==0}minPost(){return j.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let di;class gu extends fi{static get __EMPTY_NODE(){return di}static set __EMPTY_NODE(e){di=e}compare(e,n){return Qt(e.name,n.name)}isDefinedOn(e){throw Rn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return j.MIN}maxPost(){return new j(Yt,di)}makePost(e,n){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,di)}toString(){return".key"}}const Mn=new gu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ee{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:Ee.RED,this.left=i!=null?i:Ue.EMPTY_NODE,this.right=r!=null?r:Ue.EMPTY_NODE}copy(e,n,s,i,r){return new Ee(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ue.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ue.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ee.RED=!0;Ee.BLACK=!1;class Rm{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ee(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ue{constructor(e,n=Ue.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ue(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ee.BLACK,null,null))}remove(e){return new Ue(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ee.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new pi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new pi(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new pi(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new pi(this.root_,null,this.comparator_,!0,e)}}Ue.EMPTY_NODE=new Rm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(t,e){return Qt(t.name,e.name)}function uo(t,e){return Qt(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ho;function xm(t){ho=t}const mu=function(t){return typeof t=="number"?"number:"+Wa(t):"string:"+t},yu=function(t){if(t.isLeafNode()){const e=t.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ut(e,".sv"),"Priority must be a string or number.")}else b(t===ho||t.isEmpty(),"priority of unexpected type.");b(t===ho||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vu;class be{constructor(e,n=be.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),yu(this.priorityNode_)}static set __childrenNodeConstructor(e){vu=e}static get __childrenNodeConstructor(){return vu}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new be(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:be.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:$(e)===".priority"?this.priorityNode_:be.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:be.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=$(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(b(s!==".priority"||Rt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,be.__childrenNodeConstructor.EMPTY_NODE.updateChild(ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+mu(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Wa(this.value_):e+=this.value_,this.lazyHash_=La(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===be.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof be.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=be.VALUE_TYPE_ORDER.indexOf(n),r=be.VALUE_TYPE_ORDER.indexOf(s);return b(i>=0,"Unknown leaf type: "+n),b(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}be.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cu,Eu;function Am(t){Cu=t}function Pm(t){Eu=t}class Om extends fi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Qt(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return j.MIN}maxPost(){return new j(Yt,new be("[PRIORITY-POST]",Eu))}makePost(e,n){const s=Cu(e);return new j(n,new be("[PRIORITY-POST]",s))}toString(){return".priority"}}const pe=new Om;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km=Math.log(2);class Mm{constructor(e){const n=r=>parseInt(Math.log(r)/km,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const _i=function(t,e,n,s){t.sort(e);const i=function(c,a){const u=a-c;let h,f;if(u===0)return null;if(u===1)return h=t[c],f=n?n(h):h,new Ee(f,h.node,Ee.BLACK,null,null);{const _=parseInt(u/2,10)+c,m=i(c,_),N=i(_+1,a);return h=t[_],f=n?n(h):h,new Ee(f,h.node,Ee.BLACK,m,N)}},r=function(c){let a=null,u=null,h=t.length;const f=function(m,N){const S=h-m,A=h;h-=m;const L=i(S+1,A),q=t[S],z=n?n(q):q;_(new Ee(z,q.node,N,null,L))},_=function(m){a?(a.left=m,a=m):(u=m,a=m)};for(let m=0;m<c.count;++m){const N=c.nextBitIsOne(),S=Math.pow(2,c.count-(m+1));N?f(S,Ee.BLACK):(f(S,Ee.BLACK),f(S,Ee.RED))}return u},o=new Mm(t.length),l=r(o);return new Ue(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fo;const Dn={};class gt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return b(Dn&&pe,"ChildrenNode.ts has not been loaded"),fo=fo||new gt({".priority":Dn},{".priority":pe}),fo}get(e){const n=Nn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ue?n:null}hasIndex(e){return ut(this.indexSet_,e.toString())}addIndex(e,n){b(e!==Mn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(j.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=_i(s,e.getCompare()):l=Dn;const c=e.toString(),a=Object.assign({},this.indexSet_);a[c]=e;const u=Object.assign({},this.indexes_);return u[c]=l,new gt(u,a)}addToIndexes(e,n){const s=ii(this.indexes_,(i,r)=>{const o=Nn(this.indexSet_,r);if(b(o,"Missing index implementation for "+r),i===Dn)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(j.Wrap);let a=c.getNext();for(;a;)a.name!==e.name&&l.push(a),a=c.getNext();return l.push(e),_i(l,o.getCompare())}else return Dn;else{const l=n.get(e.name);let c=i;return l&&(c=c.remove(new j(e.name,l))),c.insert(e,e.node)}});return new gt(s,this.indexSet_)}removeFromIndexes(e,n){const s=ii(this.indexes_,i=>{if(i===Dn)return i;{const r=n.get(e.name);return r?i.remove(new j(e.name,r)):i}});return new gt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ps;class F{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&yu(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ps||(ps=new F(new Ue(uo),null,gt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ps}updatePriority(e){return this.children_.isEmpty()?this:new F(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ps:n}}getChild(e){const n=$(e);return n===null?this:this.getImmediateChild(n).getChild(ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(b(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new j(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?ps:this.priorityNode_;return new F(i,o,r)}}updateChild(e,n){const s=$(e);if(s===null)return n;{b($(e)!==".priority"||Rt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ce(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(pe,(o,l)=>{n[o]=l.val(e),s++,r&&F.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+mu(this.getPriority().val())+":"),this.forEachChild(pe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":La(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new j(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new j(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new j(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,j.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===_s?-1:0}withIndex(e){if(e===Mn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new F(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Mn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(pe),i=n.getIterator(pe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Mn?null:this.indexMap_.get(e.toString())}}F.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Dm extends F{constructor(){super(new Ue(uo),F.EMPTY_NODE,gt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return F.EMPTY_NODE}isEmpty(){return!1}}const _s=new Dm;Object.defineProperties(j,{MIN:{value:new j(Pn,F.EMPTY_NODE)},MAX:{value:new j(Yt,_s)}});gu.__EMPTY_NODE=F.EMPTY_NODE;be.__childrenNodeConstructor=F;xm(_s);Pm(_s);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm=!0;function we(t,e=null){if(t===null)return F.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new be(n,we(e))}if(!(t instanceof Array)&&Lm){const n=[];let s=!1;if(Re(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=we(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new j(o,c)))}}),n.length===0)return F.EMPTY_NODE;const r=_i(n,Nm,o=>o.name,uo);if(s){const o=_i(n,pe.getCompare());return new F(r,we(e),new gt({".priority":o},{".priority":pe}))}else return new F(r,we(e),gt.Default)}else{let n=F.EMPTY_NODE;return Re(t,(s,i)=>{if(ut(t,s)&&s.substring(0,1)!=="."){const r=we(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(we(e))}}Am(we);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm extends fi{constructor(e){super();this.indexPath_=e,b(!G(e)&&$(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Qt(e.name,n.name):r}makePost(e,n){const s=we(e),i=F.EMPTY_NODE.updateChild(this.indexPath_,s);return new j(n,i)}maxPost(){const e=F.EMPTY_NODE.updateChild(this.indexPath_,_s);return new j(Yt,e)}toString(){return fs(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um extends fi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Qt(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,n){const s=we(e);return new j(n,s)}toString(){return".value"}}const Wm=new Um;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Hm=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=bu.charAt(n%64),n=Math.floor(n/64);b(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=bu.charAt(e[i]);return b(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(t){return{type:"value",snapshotNode:t}}function Ln(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function gs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ms(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Bm(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(gs(n,l)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Ln(n,s)):o.trackChildChange(ms(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(pe,(i,r)=>{n.hasChild(i)||s.trackChildChange(gs(i,r))}),n.isLeafNode()||n.forEachChild(pe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ms(i,r,o))}else s.trackChildChange(Ln(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?F.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e){this.indexedFilter_=new po(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ys.getStartPost_(e),this.endPost_=ys.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,s,i,r,o){return this.matches(new j(n,s))||(s=F.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=F.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(F.EMPTY_NODE);const r=this;return n.forEachChild(pe,(o,l)=>{r.matches(new j(o,l))||(i=i.updateImmediateChild(o,F.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e){this.rangedFilter_=new ys(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new j(n,s))||(s=F.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=F.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=F.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();let c;if(this.reverse_?c=this.index_.compare(this.rangedFilter_.getStartPost(),l)<=0:c=this.index_.compare(l,this.rangedFilter_.getEndPost())<=0,c)i=i.updateImmediateChild(l.name,l.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(F.EMPTY_NODE);let r,o,l,c;if(this.reverse_){c=i.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();l=(f,_)=>h(_,f)}else c=i.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),l=this.index_.getCompare();let a=0,u=!1;for(;c.hasNext();){const h=c.getNext();!u&&l(r,h)<=0&&(u=!0),u&&a<this.limit_&&l(h,o)<=0?a++:i=i.updateImmediateChild(h.name,F.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,_)=>h(_,f)}else o=this.index_.getCompare();const l=e;b(l.numChildren()===this.limit_,"");const c=new j(n,s),a=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(l.hasChild(n)){const h=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,a,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,c);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(ms(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(gs(n,h));const N=l.updateImmediateChild(n,F.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Ln(f.name,f.node)),N.updateImmediateChild(f.name,f.node)):N}}else return s.isEmpty()?e:u&&o(a,c)>=0?(r!=null&&(r.trackChildChange(gs(a.name,a.node)),r.trackChildChange(Ln(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(a.name,F.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=pe}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Pn}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Yt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===pe}copy(){const e=new _o;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function jm(t){return t.loadsAllData()?new po(t.getIndex()):t.hasLimit()?new $m(t):new ys(t)}function Iu(t){const e={};if(t.isDefault())return e;let n;return t.index_===pe?n="$priority":t.index_===Wm?n="$value":t.index_===Mn?n="$key":(b(t.index_ instanceof Fm,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ce(n),t.startSet_&&(e.startAt=Ce(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+Ce(t.indexStartName_))),t.endSet_&&(e.endAt=Ce(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+Ce(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Tu(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==pe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends cu{constructor(e,n,s,i){super();this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=as("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=gi.getListenId_(e,s),l={};this.listens_[o]=l;const c=Iu(e._queryParams);this.restRequest_(r+".json",c,(a,u)=>{let h=u;if(a===404&&(h=null,a=null),a===null&&this.onDataUpdate_(r,h,!1,s),Nn(this.listens_,o)===l){let f;a?a===401?f="permission_denied":f="rest_error:"+a:f="ok",i(f,null)}})}unlisten(e,n){const s=gi.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Iu(e._queryParams),s=e._path.toString(),i=new rs;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+k_(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=os(l.responseText)}catch{ke("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&ke("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(){this.rootNode_=F.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(){return{value:null,children:new Map}}function Su(t,e,n){if(G(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=$(e);t.children.has(s)||t.children.set(s,mi());const i=t.children.get(s);e=ce(e),Su(i,e,n)}}function go(t,e,n){t.value!==null?n(e,t.value):Gm(t,(s,i)=>{const r=new Z(e.toString()+"/"+s);go(i,r,n)})}function Gm(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Re(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru=10*1e3,zm=30*1e3,Km=5*60*1e3;class Ym{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new qm(e);const s=Ru+(zm-Ru)*Math.random();hs(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Re(e,(i,r)=>{r>0&&ut(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),hs(this.reportStats_.bind(this),Math.floor(Math.random()*2*Km))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ze;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ze||(Ze={}));function mo(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function yo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function vo(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Ze.ACK_USER_WRITE,this.source=mo()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Z(e));return new yi(J(),n,this.revert)}}else return b($(this.path)===e,"operationForChild called for unrelated child."),new yi(ce(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n){this.source=e,this.path=n,this.type=Ze.LISTEN_COMPLETE}operationForChild(e){return G(this.path)?new vs(this.source,J()):new vs(this.source,ce(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Ze.OVERWRITE}operationForChild(e){return G(this.path)?new Jt(this.source,J(),this.snap.getImmediateChild(e)):new Jt(this.source,ce(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Ze.MERGE}operationForChild(e){if(G(this.path)){const n=this.children.subtree(new Z(e));return n.isEmpty()?null:n.value?new Jt(this.source,J(),n.value):new Fn(this.source,J(),n)}else return b($(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Fn(this.source,ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(G(e))return this.isFullyInitialized()&&!this.filtered_;const n=$(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Xm(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Bm(o.childName,o.snapshotNode))}),Cs(t,i,"child_removed",e,s,n),Cs(t,i,"child_added",e,s,n),Cs(t,i,"child_moved",r,s,n),Cs(t,i,"child_changed",e,s,n),Cs(t,i,"value",e,s,n),i}function Cs(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,c)=>Zm(t,l,c)),o.forEach(l=>{const c=Jm(t,l,r);i.forEach(a=>{a.respondsTo(l.type)&&e.push(a.createEvent(c,t.query_))})})}function Jm(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Zm(t,e,n){if(e.childName==null||n.childName==null)throw Rn("Should only compare child_ events.");const s=new j(e.childName,e.snapshotNode),i=new j(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t,e){return{eventCache:t,serverCache:e}}function Es(t,e,n,s){return vi(new Zt(e,n,s),t.serverCache)}function Nu(t,e,n,s){return vi(t.eventCache,new Zt(e,n,s))}function Co(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function en(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eo;const ey=()=>(Eo||(Eo=new Ue(Mg)),Eo);class ae{constructor(e,n=ey()){this.value=e,this.children=n}static fromObject(e){let n=new ae(null);return Re(e,(s,i)=>{n=n.set(new Z(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:J(),value:this.value};if(G(e))return null;{const s=$(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ce(e),n);return r!=null?{path:de(new Z(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const n=$(e),s=this.children.get(n);return s!==null?s.subtree(ce(e)):new ae(null)}}set(e,n){if(G(e))return new ae(n,this.children);{const s=$(e),r=(this.children.get(s)||new ae(null)).set(ce(e),n),o=this.children.insert(s,r);return new ae(this.value,o)}}remove(e){if(G(e))return this.children.isEmpty()?new ae(null):new ae(null,this.children);{const n=$(e),s=this.children.get(n);if(s){const i=s.remove(ce(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ae(null):new ae(this.value,r)}else return this}}get(e){if(G(e))return this.value;{const n=$(e),s=this.children.get(n);return s?s.get(ce(e)):null}}setTree(e,n){if(G(e))return n;{const s=$(e),r=(this.children.get(s)||new ae(null)).setTree(ce(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ae(this.value,o)}}fold(e){return this.fold_(J(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(de(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,J(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(G(e))return null;{const r=$(e),o=this.children.get(r);return o?o.findOnPath_(ce(e),de(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,J(),n)}foreachOnPath_(e,n,s){if(G(e))return this;{this.value&&s(n,this.value);const i=$(e),r=this.children.get(i);return r?r.foreachOnPath_(ce(e),de(n,i),s):new ae(null)}}foreach(e){this.foreach_(J(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(de(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.writeTree_=e}static empty(){return new et(new ae(null))}}function bs(t,e,n){if(G(e))return new et(new ae(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Fe(i,e);return r=r.updateChild(o,n),new et(t.writeTree_.set(i,r))}else{const i=new ae(n),r=t.writeTree_.setTree(e,i);return new et(r)}}}function bo(t,e,n){let s=t;return Re(n,(i,r)=>{s=bs(s,de(e,i),r)}),s}function xu(t,e){if(G(e))return et.empty();{const n=t.writeTree_.setTree(e,new ae(null));return new et(n)}}function wo(t,e){return tn(t,e)!=null}function tn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Fe(n.path,e)):null}function Au(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(pe,(s,i)=>{e.push(new j(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new j(s,i.value))}),e}function Nt(t,e){if(G(e))return t;{const n=tn(t,e);return n!=null?new et(new ae(n)):new et(t.writeTree_.subtree(e))}}function Io(t){return t.writeTree_.isEmpty()}function Un(t,e){return Pu(J(),t.writeTree_,e)}function Pu(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(b(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Pu(de(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(de(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(t,e){return Lu(e,t)}function ty(t,e,n,s,i){b(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=bs(t.visibleWrites,e,n)),t.lastWriteId=s}function ny(t,e,n,s){b(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=bo(t.visibleWrites,e,n),t.lastWriteId=s}function sy(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function iy(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);b(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&ry(l,s.path)?i=!1:Ke(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return oy(t),!0;if(s.snap)t.visibleWrites=xu(t.visibleWrites,s.path);else{const l=s.children;Re(l,c=>{t.visibleWrites=xu(t.visibleWrites,de(s.path,c))})}return!0}else return!1}function ry(t,e){if(t.snap)return Ke(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ke(de(t.path,n),e))return!0;return!1}function oy(t){t.visibleWrites=Ou(t.allWrites,ly,J()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function ly(t){return t.visible}function Ou(t,e,n){let s=et.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Ke(n,o)?(l=Fe(n,o),s=bs(s,l,r.snap)):Ke(o,n)&&(l=Fe(o,n),s=bs(s,J(),r.snap.getChild(l)));else if(r.children){if(Ke(n,o))l=Fe(n,o),s=bo(s,l,r.children);else if(Ke(o,n))if(l=Fe(o,n),G(l))s=bo(s,J(),r.children);else{const c=Nn(r.children,$(l));if(c){const a=c.getChild(ce(l));s=bs(s,J(),a)}}}else throw Rn("WriteRecord should have .snap or .children")}}return s}function ku(t,e,n,s,i){if(!s&&!i){const r=tn(t.visibleWrites,e);if(r!=null)return r;{const o=Nt(t.visibleWrites,e);if(Io(o))return n;if(n==null&&!wo(o,J()))return null;{const l=n||F.EMPTY_NODE;return Un(o,l)}}}else{const r=Nt(t.visibleWrites,e);if(!i&&Io(r))return n;if(!i&&n==null&&!wo(r,J()))return null;{const o=function(a){return(a.visible||i)&&(!s||!~s.indexOf(a.writeId))&&(Ke(a.path,e)||Ke(e,a.path))},l=Ou(t.allWrites,o,e),c=n||F.EMPTY_NODE;return Un(l,c)}}}function cy(t,e,n){let s=F.EMPTY_NODE;const i=tn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(pe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Nt(t.visibleWrites,e);return n.forEachChild(pe,(o,l)=>{const c=Un(Nt(r,new Z(o)),l);s=s.updateImmediateChild(o,c)}),Au(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Nt(t.visibleWrites,e);return Au(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function ay(t,e,n,s,i){b(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=de(e,n);if(wo(t.visibleWrites,r))return null;{const o=Nt(t.visibleWrites,r);return Io(o)?i.getChild(n):Un(o,i.getChild(n))}}function uy(t,e,n,s){const i=de(e,n),r=tn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Nt(t.visibleWrites,i);return Un(o,s.getNode().getImmediateChild(n))}else return null}function hy(t,e){return tn(t.visibleWrites,e)}function fy(t,e,n,s,i,r,o){let l;const c=Nt(t.visibleWrites,e),a=tn(c,J());if(a!=null)l=a;else if(n!=null)l=Un(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=f.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=f.getNext();return u}else return[]}function dy(){return{visibleWrites:et.empty(),allWrites:[],lastWriteId:-1}}function Ci(t,e,n,s){return ku(t.writeTree,t.treePath,e,n,s)}function So(t,e){return cy(t.writeTree,t.treePath,e)}function Mu(t,e,n,s){return ay(t.writeTree,t.treePath,e,n,s)}function Ei(t,e){return hy(t.writeTree,de(t.treePath,e))}function py(t,e,n,s,i,r){return fy(t.writeTree,t.treePath,e,n,s,i,r)}function Ro(t,e,n){return uy(t.writeTree,t.treePath,e,n)}function Du(t,e){return Lu(de(t.treePath,e),t.writeTree)}function Lu(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,ms(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,gs(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Ln(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,ms(s,e.snapshotNode,i.oldSnap));else throw Rn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Fu=new gy;class No{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Zt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ro(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:en(this.viewCache_),r=py(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(t){return{filter:t}}function yy(t,e){b(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function vy(t,e,n,s,i){const r=new _y;let o,l;if(n.type===Ze.OVERWRITE){const a=n;a.source.fromUser?o=xo(t,e,a.path,a.snap,s,i,r):(b(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered()&&!G(a.path),o=bi(t,e,a.path,a.snap,s,i,l,r))}else if(n.type===Ze.MERGE){const a=n;a.source.fromUser?o=Ey(t,e,a.path,a.children,s,i,r):(b(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered(),o=Ao(t,e,a.path,a.children,s,i,l,r))}else if(n.type===Ze.ACK_USER_WRITE){const a=n;a.revert?o=Iy(t,e,a.path,s,i,r):o=by(t,e,a.path,a.affectedTree,s,i,r)}else if(n.type===Ze.LISTEN_COMPLETE)o=wy(t,e,n.path,s,r);else throw Rn("Unknown operation type: "+n.type);const c=r.getChanges();return Cy(e,o,c),{viewCache:o,changes:c}}function Cy(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Co(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(wu(Co(e)))}}function Uu(t,e,n,s,i,r){const o=e.eventCache;if(Ei(s,n)!=null)return e;{let l,c;if(G(n))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const a=en(e),u=a instanceof F?a:F.EMPTY_NODE,h=So(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const a=Ci(s,en(e));l=t.filter.updateFullNode(e.eventCache.getNode(),a,r)}else{const a=$(n);if(a===".priority"){b(Rt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=Mu(s,n,u,c);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=ce(n);let h;if(o.isCompleteForChild(a)){c=e.serverCache.getNode();const f=Mu(s,n,o.getNode(),c);f!=null?h=o.getNode().getImmediateChild(a).updateChild(u,f):h=o.getNode().getImmediateChild(a)}else h=Ro(s,a,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),a,h,u,i,r):l=o.getNode()}}return Es(e,l,o.isFullyInitialized()||G(n),t.filter.filtersNodes())}}function bi(t,e,n,s,i,r,o,l){const c=e.serverCache;let a;const u=o?t.filter:t.filter.getIndexedFilter();if(G(n))a=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const _=c.getNode().updateChild(n,s);a=u.updateFullNode(c.getNode(),_,null)}else{const _=$(n);if(!c.isCompleteForPath(n)&&Rt(n)>1)return e;const m=ce(n),S=c.getNode().getImmediateChild(_).updateChild(m,s);_===".priority"?a=u.updatePriority(c.getNode(),S):a=u.updateChild(c.getNode(),_,S,m,Fu,null)}const h=Nu(e,a,c.isFullyInitialized()||G(n),u.filtersNodes()),f=new No(i,h,r);return Uu(t,h,n,i,f,l)}function xo(t,e,n,s,i,r,o){const l=e.eventCache;let c,a;const u=new No(i,e,r);if(G(n))a=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Es(e,a,!0,t.filter.filtersNodes());else{const h=$(n);if(h===".priority")a=t.filter.updatePriority(e.eventCache.getNode(),s),c=Es(e,a,l.isFullyInitialized(),l.isFiltered());else{const f=ce(n),_=l.getNode().getImmediateChild(h);let m;if(G(f))m=s;else{const N=u.getCompleteChild(h);N!=null?lo(f)===".priority"&&N.getChild(fu(f)).isEmpty()?m=N:m=N.updateChild(f,s):m=F.EMPTY_NODE}if(_.equals(m))c=e;else{const N=t.filter.updateChild(l.getNode(),h,m,f,u,o);c=Es(e,N,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Wu(t,e){return t.eventCache.isCompleteForChild(e)}function Ey(t,e,n,s,i,r,o){let l=e;return s.foreach((c,a)=>{const u=de(n,c);Wu(e,$(u))&&(l=xo(t,l,u,a,i,r,o))}),s.foreach((c,a)=>{const u=de(n,c);Wu(e,$(u))||(l=xo(t,l,u,a,i,r,o))}),l}function Hu(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ao(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,a;G(n)?a=s:a=new ae(null).setTree(n,s);const u=e.serverCache.getNode();return a.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),m=Hu(t,_,f);c=bi(t,c,new Z(h),m,i,r,o,l)}}),a.children.inorderTraversal((h,f)=>{const _=!e.serverCache.isCompleteForChild(h)&&f.value===void 0;if(!u.hasChild(h)&&!_){const m=e.serverCache.getNode().getImmediateChild(h),N=Hu(t,m,f);c=bi(t,c,new Z(h),N,i,r,o,l)}}),c}function by(t,e,n,s,i,r,o){if(Ei(i,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(G(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return bi(t,e,n,c.getNode().getChild(n),i,r,l,o);if(G(n)){let a=new ae(null);return c.getNode().forEachChild(Mn,(u,h)=>{a=a.set(new Z(u),h)}),Ao(t,e,n,a,i,r,l,o)}else return e}else{let a=new ae(null);return s.foreach((u,h)=>{const f=de(n,u);c.isCompleteForPath(f)&&(a=a.set(u,c.getNode().getChild(f)))}),Ao(t,e,n,a,i,r,l,o)}}function wy(t,e,n,s,i){const r=e.serverCache,o=Nu(e,r.getNode(),r.isFullyInitialized()||G(n),r.isFiltered());return Uu(t,o,n,s,Fu,i)}function Iy(t,e,n,s,i,r){let o;if(Ei(s,n)!=null)return e;{const l=new No(s,e,i),c=e.eventCache.getNode();let a;if(G(n)||$(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ci(s,en(e));else{const h=e.serverCache.getNode();b(h instanceof F,"serverChildren would be complete if leaf node"),u=So(s,h)}u=u,a=t.filter.updateFullNode(c,u,r)}else{const u=$(n);let h=Ro(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?a=t.filter.updateChild(c,u,h,ce(n),l,r):e.eventCache.getNode().hasChild(u)?a=t.filter.updateChild(c,u,F.EMPTY_NODE,ce(n),l,r):a=c,a.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ci(s,en(e)),o.isLeafNode()&&(a=t.filter.updateFullNode(a,o,r)))}return o=e.serverCache.isFullyInitialized()||Ei(s,J())!=null,Es(e,a,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new po(s.getIndex()),r=jm(s);this.processor_=my(r);const o=n.serverCache,l=n.eventCache,c=i.updateFullNode(F.EMPTY_NODE,o.getNode(),null),a=r.updateFullNode(F.EMPTY_NODE,l.getNode(),null),u=new Zt(c,o.isFullyInitialized(),i.filtersNodes()),h=new Zt(a,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=vi(h,u),this.eventGenerator_=new Qm(this.query_)}get query(){return this.query_}}function Sy(t){return t.viewCache_.serverCache.getNode()}function Ry(t,e){const n=en(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!G(e)&&!n.getImmediateChild($(e)).isEmpty())?n.getChild(e):null}function Bu(t){return t.eventRegistrations_.length===0}function Ny(t,e){t.eventRegistrations_.push(e)}function $u(t,e,n){const s=[];if(n){b(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function ju(t,e,n,s){e.type===Ze.MERGE&&e.source.queryId!==null&&(b(en(t.viewCache_),"We should always have a full cache before handling merges"),b(Co(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=vy(t.processor_,i,e,n,s);return yy(t.processor_,r.viewCache),b(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Vu(t,r.changes,r.viewCache.eventCache.getNode(),null)}function xy(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(pe,(r,o)=>{s.push(Ln(r,o))}),n.isFullyInitialized()&&s.push(wu(n.getNode())),Vu(t,s,n.getNode(),e)}function Vu(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Xm(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wi;class Ay{constructor(){this.views=new Map}}function Py(t){b(!wi,"__referenceConstructor has already been defined"),wi=t}function Oy(){return b(wi,"Reference.ts has not been loaded"),wi}function ky(t){return t.views.size===0}function Po(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return b(r!=null,"SyncTree gave us an op for an invalid query."),ju(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(ju(o,e,n,s));return r}}function My(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=Ci(n,i?s:null),c=!1;l?c=!0:s instanceof F?(l=So(n,s),c=!1):(l=F.EMPTY_NODE,c=!1);const a=vi(new Zt(l,c,!1),new Zt(s,i,!1));return new Ty(e,a)}return o}function Dy(t,e,n,s,i,r){const o=My(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Ny(o,n),xy(o,n)}function Ly(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=xt(t);if(i==="default")for(const[c,a]of t.views.entries())o=o.concat($u(a,n,s)),Bu(a)&&(t.views.delete(c),a.query._queryParams.loadsAllData()||r.push(a.query));else{const c=t.views.get(i);c&&(o=o.concat($u(c,n,s)),Bu(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return l&&!xt(t)&&r.push(new(Oy())(e._repo,e._path)),{removed:r,events:o}}function Gu(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Wn(t,e){let n=null;for(const s of t.views.values())n=n||Ry(s,e);return n}function qu(t,e){if(e._queryParams.loadsAllData())return Ii(t);{const s=e._queryIdentifier;return t.views.get(s)}}function zu(t,e){return qu(t,e)!=null}function xt(t){return Ii(t)!=null}function Ii(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ti;function Fy(t){b(!Ti,"__referenceConstructor has already been defined"),Ti=t}function Uy(){return b(Ti,"Reference.ts has not been loaded"),Ti}let Wy=1;class Ku{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ae(null),this.pendingWriteTree_=dy(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Yu(t,e,n,s,i){return ty(t.pendingWriteTree_,e,n,s,i),i?Hn(t,new Jt(mo(),e,n)):[]}function Hy(t,e,n,s){ny(t.pendingWriteTree_,e,n,s);const i=ae.fromObject(n);return Hn(t,new Fn(mo(),e,i))}function At(t,e,n=!1){const s=sy(t.pendingWriteTree_,e);if(iy(t.pendingWriteTree_,e)){let r=new ae(null);return s.snap!=null?r=r.set(J(),!0):Re(s.children,o=>{r=r.set(new Z(o),!0)}),Hn(t,new yi(s.path,r,n))}else return[]}function Si(t,e,n){return Hn(t,new Jt(yo(),e,n))}function By(t,e,n){const s=ae.fromObject(n);return Hn(t,new Fn(yo(),e,s))}function $y(t,e){return Hn(t,new vs(yo(),e))}function jy(t,e,n){const s=Mo(t,n);if(s){const i=Do(s),r=i.path,o=i.queryId,l=Fe(r,e),c=new vs(vo(o),l);return Lo(t,r,c)}else return[]}function Oo(t,e,n,s){const i=e._path,r=t.syncPointTree_.get(i);let o=[];if(r&&(e._queryIdentifier==="default"||zu(r,e))){const l=Ly(r,e,n,s);ky(r)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const c=l.removed;o=l.events;const a=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(i,(h,f)=>xt(f));if(a&&!u){const h=t.syncPointTree_.subtree(i);if(!h.isEmpty()){const f=qy(h);for(let _=0;_<f.length;++_){const m=f[_],N=m.query,S=Zu(t,m);t.listenProvider_.startListening(ws(N),Ri(t,N),S.hashFn,S.onComplete)}}}if(!u&&c.length>0&&!s)if(a){const h=null;t.listenProvider_.stopListening(ws(e),h)}else c.forEach(h=>{const f=t.queryToTagMap.get(Ni(h));t.listenProvider_.stopListening(ws(h),f)});zy(t,c)}return o}function Vy(t,e,n,s){const i=Mo(t,s);if(i!=null){const r=Do(i),o=r.path,l=r.queryId,c=Fe(o,e),a=new Jt(vo(l),c,n);return Lo(t,o,a)}else return[]}function Gy(t,e,n,s){const i=Mo(t,s);if(i){const r=Do(i),o=r.path,l=r.queryId,c=Fe(o,e),a=ae.fromObject(n),u=new Fn(vo(l),c,a);return Lo(t,o,u)}else return[]}function Qu(t,e,n){const s=e._path;let i=null,r=!1;t.syncPointTree_.foreachOnPath(s,(h,f)=>{const _=Fe(h,s);i=i||Wn(f,_),r=r||xt(f)});let o=t.syncPointTree_.get(s);o?(r=r||xt(o),i=i||Wn(o,J())):(o=new Ay,t.syncPointTree_=t.syncPointTree_.set(s,o));let l;i!=null?l=!0:(l=!1,i=F.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((f,_)=>{const m=Wn(_,J());m&&(i=i.updateImmediateChild(f,m))}));const c=zu(o,e);if(!c&&!e._queryParams.loadsAllData()){const h=Ni(e);b(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=Ky();t.queryToTagMap.set(h,f),t.tagToQueryMap.set(f,h)}const a=To(t.pendingWriteTree_,s);let u=Dy(o,e,n,a,i,l);if(!c&&!r){const h=qu(o,e);u=u.concat(Yy(t,e,h))}return u}function ko(t,e,n){const s=!0,i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=Fe(o,e),a=Wn(l,c);if(a)return a});return ku(i,e,r,n,s)}function Hn(t,e){return Xu(e,t.syncPointTree_,null,To(t.pendingWriteTree_,J()))}function Xu(t,e,n,s){if(G(t.path))return Ju(t,e,n,s);{const i=e.get(J());n==null&&i!=null&&(n=Wn(i,J()));let r=[];const o=$(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const a=n?n.getImmediateChild(o):null,u=Du(s,o);r=r.concat(Xu(l,c,a,u))}return i&&(r=r.concat(Po(i,t,s,n))),r}}function Ju(t,e,n,s){const i=e.get(J());n==null&&i!=null&&(n=Wn(i,J()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,a=Du(s,o),u=t.operationForChild(o);u&&(r=r.concat(Ju(u,l,c,a)))}),i&&(r=r.concat(Po(i,t,s,n))),r}function Zu(t,e){const n=e.query,s=Ri(t,n);return{hashFn:()=>(Sy(e)||F.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?jy(t,n._path,s):$y(t,n._path);{const r=Fg(i,n);return Oo(t,n,null,r)}}}}function Ri(t,e){const n=Ni(e);return t.queryToTagMap.get(n)}function Ni(t){return t._path.toString()+"$"+t._queryIdentifier}function Mo(t,e){return t.tagToQueryMap.get(e)}function Do(t){const e=t.indexOf("$");return b(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Z(t.substr(0,e))}}function Lo(t,e,n){const s=t.syncPointTree_.get(e);b(s,"Missing sync point for query tag that we're tracking");const i=To(t.pendingWriteTree_,e);return Po(s,n,i,null)}function qy(t){return t.fold((e,n,s)=>{if(n&&xt(n))return[Ii(n)];{let i=[];return n&&(i=Gu(n)),Re(s,(r,o)=>{i=i.concat(o)}),i}})}function ws(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Uy())(t._repo,t._path):t}function zy(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Ni(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Ky(){return Wy++}function Yy(t,e,n){const s=e._path,i=Ri(t,e),r=Zu(t,n),o=t.listenProvider_.startListening(ws(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)b(!xt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((a,u,h)=>{if(!G(a)&&u&&xt(u))return[Ii(u).query];{let f=[];return u&&(f=f.concat(Gu(u).map(_=>_.query))),Re(h,(_,m)=>{f=f.concat(m)}),f}});for(let a=0;a<c.length;++a){const u=c[a];t.listenProvider_.stopListening(ws(u),Ri(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Fo(n)}node(){return this.node_}}class Uo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=de(this.path_,e);return new Uo(this.syncTree_,n)}node(){return ko(this.syncTree_,this.path_)}}const Qy=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},eh=function(t,e,n){if(!t||typeof t!="object")return t;if(b(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Xy(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Jy(t[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Xy=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+t)}},Jy=function(t,e,n){t.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&b(!1,"Unexpected increment value: "+s);const i=e.node();if(b(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},th=function(t,e,n,s){return Wo(e,new Uo(n,t),s)},nh=function(t,e,n){return Wo(t,new Fo(e),n)};function Wo(t,e,n){const s=t.getPriority().val(),i=eh(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=eh(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new be(l,we(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new be(i))),o.forEachChild(pe,(l,c)=>{const a=Wo(c,e.getImmediateChild(l),n);a!==c&&(r=r.updateImmediateChild(l,a))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Bo(t,e){let n=e instanceof Z?e:new Z(e),s=t,i=$(n);for(;i!==null;){const r=Nn(s.node.children,i)||{children:{},childCount:0};s=new Ho(i,s,r),n=ce(n),i=$(n)}return s}function Bn(t){return t.node.value}function sh(t,e){t.node.value=e,$o(t)}function ih(t){return t.node.childCount>0}function Zy(t){return Bn(t)===void 0&&!ih(t)}function xi(t,e){Re(t.node.children,(n,s)=>{e(new Ho(n,t,s))})}function rh(t,e,n,s){n&&!s&&e(t),xi(t,i=>{rh(i,e,!0,s)}),n&&s&&e(t)}function ev(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Is(t){return new Z(t.parent===null?t.name:Is(t.parent)+"/"+t.name)}function $o(t){t.parent!==null&&tv(t.parent,t.name,t)}function tv(t,e,n){const s=Zy(n),i=ut(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,$o(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,$o(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv=/[\[\].#$\/\u0000-\u001F\u007F]/,sv=/[\[\].#$\u0000-\u001F\u007F]/,jo=10*1024*1024,Vo=function(t){return typeof t=="string"&&t.length!==0&&!nv.test(t)},oh=function(t){return typeof t=="string"&&t.length!==0&&!sv.test(t)},iv=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),oh(t)},rv=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Qr(t)||t&&typeof t=="object"&&ut(t,".sv")},lh=function(t,e,n,s){s&&e===void 0||Ai(ri(t,"value"),e,n)},Ai=function(t,e,n){const s=n instanceof Z?new vm(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Xt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Xt(s)+" with contents = "+e.toString());if(Qr(e))throw new Error(t+"contains "+e.toString()+" "+Xt(s));if(typeof e=="string"&&e.length>jo/3&&oi(e)>jo)throw new Error(t+"contains a string greater than "+jo+" utf8 bytes "+Xt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Re(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Vo(o)))throw new Error(t+" contains an invalid key ("+o+") "+Xt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Cm(s,o),Ai(t,l,s),Em(s)}),i&&r)throw new Error(t+' contains ".value" child '+Xt(s)+" in addition to actual children.")}},ov=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=fs(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Vo(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(ym);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&Ke(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},lv=function(t,e,n,s){if(s&&e===void 0)return;const i=ri(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Re(e,(o,l)=>{const c=new Z(o);if(Ai(i,l,de(n,c)),lo(c)===".priority"&&!rv(l))throw new Error(i+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(c)}),ov(i,r)},ch=function(t,e,n,s){if(!(s&&n===void 0)&&!oh(n))throw new Error(ri(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},cv=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ch(t,e,n,s)},ah=function(t,e){if($(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},av=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Vo(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!iv(n))throw new Error(ri(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Pi(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!co(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function uh(t,e,n){Pi(t,n),hh(t,s=>co(s,e))}function tt(t,e,n){Pi(t,n),hh(t,s=>Ke(s,e)||Ke(e,s))}function hh(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(hv(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function hv(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();zt&&Se("event: "+n.toString()),On(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv="repo_interrupt",dv=25;class pv{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new uv,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=mi(),this.transactionQueueTree_=new Ho,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function _v(t,e,n){if(t.stats_=so(t.repoInfo_),t.forceRestClient_||Bg())t.server_=new gi(t.repoInfo_,(s,i,r,o)=>{dh(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ph(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ce(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new _t(t.repoInfo_,e,(s,i,r,o)=>{dh(t,s,i,r,o)},s=>{ph(t,s)},s=>{gv(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Kg(t.repoInfo_,()=>new Ym(t.stats_,t.server_)),t.infoData_=new Vm,t.infoSyncTree_=new Ku({startListening:(s,i,r,o)=>{let l=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(l=Si(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Go(t,"connected",!1),t.serverSyncTree_=new Ku({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,c)=>{const a=o(l,c);tt(t.eventQueue_,s._path,a)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function fh(t){const n=t.infoData_.getNode(new Z(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Oi(t){return Qy({timestamp:fh(t)})}function dh(t,e,n,s,i){t.dataUpdateCount++;const r=new Z(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=ii(n,a=>we(a));o=Gy(t.serverSyncTree_,r,c,i)}else{const c=we(n);o=Vy(t.serverSyncTree_,r,c,i)}else if(s){const c=ii(n,a=>we(a));o=By(t.serverSyncTree_,r,c)}else{const c=we(n);o=Si(t.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=$n(t,r)),tt(t.eventQueue_,l,o)}function ph(t,e){Go(t,"connected",e),e===!1&&vv(t)}function gv(t,e){Re(e,(n,s)=>{Go(t,n,s)})}function Go(t,e,n){const s=new Z("/.info/"+e),i=we(n);t.infoData_.updateSnapshot(s,i);const r=Si(t.infoSyncTree_,s,i);tt(t.eventQueue_,s,r)}function qo(t){return t.nextWriteId_++}function mv(t,e,n,s,i){ki(t,"set",{path:e.toString(),value:n,priority:s});const r=Oi(t),o=we(n,s),l=ko(t.serverSyncTree_,e),c=nh(o,l,r),a=qo(t),u=Yu(t.serverSyncTree_,e,c,a,!0);Pi(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const m=f==="ok";m||ke("set at "+e+" failed: "+f);const N=At(t.serverSyncTree_,a,!m);tt(t.eventQueue_,e,N),zo(t,i,f,_)});const h=Yo(t,e);$n(t,h),tt(t.eventQueue_,h,[])}function yv(t,e,n,s){ki(t,"update",{path:e.toString(),value:n});let i=!0;const r=Oi(t),o={};if(Re(n,(l,c)=>{i=!1,o[l]=th(de(e,l),we(c),t.serverSyncTree_,r)}),i)Se("update() called with empty data.  Don't do anything."),zo(t,s,"ok",void 0);else{const l=qo(t),c=Hy(t.serverSyncTree_,e,o,l);Pi(t.eventQueue_,c),t.server_.merge(e.toString(),n,(a,u)=>{const h=a==="ok";h||ke("update at "+e+" failed: "+a);const f=At(t.serverSyncTree_,l,!h),_=f.length>0?$n(t,e):e;tt(t.eventQueue_,_,f),zo(t,s,a,u)}),Re(n,a=>{const u=Yo(t,de(e,a));$n(t,u)}),tt(t.eventQueue_,e,[])}}function vv(t){ki(t,"onDisconnectEvents");const e=Oi(t),n=mi();go(t.onDisconnect_,J(),(i,r)=>{const o=th(i,r,t.serverSyncTree_,e);Su(n,i,o)});let s=[];go(n,J(),(i,r)=>{s=s.concat(Si(t.serverSyncTree_,i,r));const o=Yo(t,i);$n(t,o)}),t.onDisconnect_=mi(),tt(t.eventQueue_,J(),s)}function Cv(t,e,n){let s;$(e._path)===".info"?s=Qu(t.infoSyncTree_,e,n):s=Qu(t.serverSyncTree_,e,n),uh(t.eventQueue_,e._path,s)}function _h(t,e,n){let s;$(e._path)===".info"?s=Oo(t.infoSyncTree_,e,n):s=Oo(t.serverSyncTree_,e,n),uh(t.eventQueue_,e._path,s)}function Ev(t){t.persistentConnection_&&t.persistentConnection_.interrupt(fv)}function ki(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Se(n,...e)}function zo(t,e,n,s){e&&On(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function gh(t,e,n){return ko(t.serverSyncTree_,e,n)||F.EMPTY_NODE}function Ko(t,e=t.transactionQueueTree_){if(e||Mi(t,e),Bn(e)){const n=yh(t,e);b(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&bv(t,Is(e),n)}else ih(e)&&xi(e,n=>{Ko(t,n)})}function bv(t,e,n){const s=n.map(a=>a.currentWriteId),i=gh(t,e,s);let r=i;const o=i.hash();for(let a=0;a<n.length;a++){const u=n[a];b(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Fe(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;t.server_.put(c.toString(),l,a=>{ki(t,"transaction put response",{path:c.toString(),status:a});let u=[];if(a==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(At(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Mi(t,Bo(t.transactionQueueTree_,e)),Ko(t,t.transactionQueueTree_),tt(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)On(h[f])}else{if(a==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{ke("transaction at "+c.toString()+" failed: "+a);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=a}$n(t,e)}},o)}function $n(t,e){const n=mh(t,e),s=Is(n),i=yh(t,n);return wv(t,i,s),s}function wv(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],a=Fe(n,c.path);let u=!1,h;if(b(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(At(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=dv)u=!0,h="maxretry",i=i.concat(At(t.serverSyncTree_,c.currentWriteId,!0));else{const f=gh(t,c.path,o);c.currentInputSnapshot=f;const _=e[l].update(f.val());if(_!==void 0){Ai("transaction failed: Data returned ",_,c.path);let m=we(_);typeof _=="object"&&_!=null&&ut(_,".priority")||(m=m.updatePriority(f.getPriority()));const S=c.currentWriteId,A=Oi(t),L=nh(m,f,A);c.currentOutputSnapshotRaw=m,c.currentOutputSnapshotResolved=L,c.currentWriteId=qo(t),o.splice(o.indexOf(S),1),i=i.concat(Yu(t.serverSyncTree_,c.path,L,c.currentWriteId,c.applyLocally)),i=i.concat(At(t.serverSyncTree_,S,!0))}else u=!0,h="nodata",i=i.concat(At(t.serverSyncTree_,c.currentWriteId,!0))}tt(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}Mi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)On(s[l]);Ko(t,t.transactionQueueTree_)}function mh(t,e){let n,s=t.transactionQueueTree_;for(n=$(e);n!==null&&Bn(s)===void 0;)s=Bo(s,n),e=ce(e),n=$(e);return s}function yh(t,e){const n=[];return vh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function vh(t,e,n){const s=Bn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);xi(e,i=>{vh(t,i,n)})}function Mi(t,e){const n=Bn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,sh(e,n.length>0?n:void 0)}xi(e,s=>{Mi(t,s)})}function Yo(t,e){const n=Is(mh(t,e)),s=Bo(t.transactionQueueTree_,e);return ev(s,i=>{Qo(t,i)}),Qo(t,s),rh(s,i=>{Qo(t,i)}),n}function Qo(t,e){const n=Bn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(b(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(b(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(At(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?sh(e,void 0):n.length=r+1,tt(t.eventQueue_,Is(e),i);for(let o=0;o<s.length;o++)On(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Tv(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ke(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ch=function(t,e){const n=Sv(t),s=n.namespace;n.domain==="firebase.com"&&Kt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Kt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Og();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Gg(n.host,n.secure,s,e,i,"",s!==n.subdomain),path:new Z(n.pathString)}},Sv=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",c=443;if(typeof t=="string"){let a=t.indexOf("//");a>=0&&(l=t.substring(0,a-1),t=t.substring(a+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=Iv(t.substring(u,h)));const f=Tv(t.substring(Math.min(t.length,h)));a=e.indexOf(":"),a>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(a+1),10)):a=e.length;const _=e.slice(0,a);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ce(this.snapshot.exportVal())}}class bh{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return G(this._path)?null:lo(this._path)}get ref(){return new mt(this._repo,this._path)}get _queryIdentifier(){const e=Tu(this._queryParams),n=Xr(e);return n==="{}"?"default":n}get _queryObject(){return Tu(this._queryParams)}isEqual(e){if(e=ls(e),!(e instanceof Xo))return!1;const n=this._repo===e._repo,s=co(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+mm(this._path)}}class mt extends Xo{constructor(e,n){super(e,n,new _o,!1)}get parent(){const e=fu(this._path);return e===null?null:new mt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ts{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Z(e),s=jn(this.ref,e);return new Ts(this._node.getChild(n),s,pe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Ts(i,jn(this.ref,s),pe)))}hasChild(e){const n=new Z(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Jv(t,e){return t=ls(t),t._checkNotDeleted("ref"),e!==void 0?jn(t._root,e):t._root}function jn(t,e){return t=ls(t),$(t._path)===null?cv("child","path",e,!1):ch("child","path",e,!1),new mt(t._repo,de(t._path,e))}function Zv(t,e){t=ls(t),ah("push",t._path),lh("push",e,t._path,!0);const n=fh(t._repo),s=Hm(n),i=jn(t,s),r=jn(t,s);let o;return e!=null?o=Nv(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Nv(t,e){t=ls(t),ah("set",t._path),lh("set",e,t._path,!1);const n=new rs;return mv(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function eC(t,e){lv("update",e,t._path,!1);const n=new rs;return yv(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class Jo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Eh("value",this,new Ts(e.snapshotNode,new mt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new bh(this,e,n):null}matches(e){return e instanceof Jo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Zo{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new bh(this,e,n):null}createEvent(e,n){b(e.childName!=null,"Child events should have a childName.");const s=jn(new mt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Eh(e.type,this,new Ts(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Zo?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function xv(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=n,a=(u,h)=>{_h(t._repo,t,l),c(u,h)};a.userCallback=n.userCallback,a.context=n.context,n=a}const o=new Rv(n,r||void 0),l=e==="value"?new Jo(o):new Zo(e,o);return Cv(t._repo,t,l),()=>_h(t._repo,t,l)}function tC(t,e,n,s){return xv(t,"value",e,n,s)}Py(mt);Fy(mt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av="FIREBASE_DATABASE_EMULATOR_HOST",el={};let Pv=!1;function Ov(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Kt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Se("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ch(r,i),l=o.repoInfo,c,a;typeof process!="undefined"&&(a=process.env[Av]),a?(c=!0,r=`http://${a}?ns=${l.namespace}`,o=Ch(r,i),l=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new Jr(Jr.OWNER):new jg(t.name,t.options,e);av("Invalid Firebase Database URL",o),G(o.path)||Kt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Mv(l,t,u,new $g(t.name,n));return new Dv(h,t)}function kv(t,e){const n=el[e];(!n||n[t.key]!==t)&&Kt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Ev(t),delete n[t.key]}function Mv(t,e,n,s){let i=el[e.name];i||(i={},el[e.name]=i);let r=i[t.toURLString()];return r&&Kt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new pv(t,Pv,n,s),i[t.toURLString()]=r,r}class Dv{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(_v(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new mt(this._repo,J())),this._rootInternal}_delete(){return this._rootInternal!==null&&(kv(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Kt("Cannot call "+e+" on a deleted database.")}}function nC(t=wg(),e){return vg(t,"database").getImmediate({identifier:e})}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(t){Rg(bg),zr(new li("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Ov(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),xn(Oa,ka,t),xn(Oa,ka,"esm2017")}_t.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};_t.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Lv();export{ot as F,$v as a,uc as b,Qv as c,Be as d,od as e,jv as f,nC as g,Vv as h,Xv as i,Hv as j,qv as k,Wv as l,tC as m,Jv as n,td as o,Uv as p,Zv as q,Bv as r,Yv as s,Fv as t,eC as u,Gv as v,mf as w,Kv as x,zv as y};
