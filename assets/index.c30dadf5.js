var N=Object.defineProperty;var V=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var M=(t,e,o)=>e in t?N(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,L=(t,e)=>{for(var o in e||(e={}))H.call(e,o)&&M(t,o,e[o]);if(V)for(var o of V(e))K.call(e,o)&&M(t,o,e[o]);return t};import{c as R,r as h,o as i,a as l,b as a,d as _,w as C,e as f,F as g,i as S,g as j,f as B,h as z,j as v,v as y,k as b,t as w,p as D,l as O,m as I,n as c,q as $,u as x,s as A,x as T,y as P}from"./vendor.1f994e82.js";const E=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))d(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&d(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}};E();const F=R({state(){return{user:""}},mutations:{setName(t,e){t.user=e}}}),U={class:"fa"},q=f("Rooms"),J=f("Profile");function W(t,e,o,d,n,s){const r=h("router-link");return i(),l("ul",U,[a("li",null,[_(r,{to:"/"},{default:C(()=>[q]),_:1})]),a("li",null,[_(r,{to:"/profile"},{default:C(()=>[J]),_:1})])])}var m=(t,e)=>{const o=t.__vccOpts||t;for(const[d,n]of e)o[d]=n;return o};const G={};var Y=m(G,[["render",W]]);const Q={class:"fcc h-full"};function X(t,e,o,d,n,s){const r=h("TheNavbar"),u=h("router-view");return i(),l(g,null,[_(r,{class:"pb-4"}),a("div",Q,[_(u)])],64)}const Z={components:{TheNavbar:Y},mounted(){let t=localStorage.getItem("user");t?this.$store.commit("setName",t):this.$router.push("login")}};var ee=m(Z,[["render",X]]);const te={apiKey:"AIzaSyD8pkb9OsLYohxINl6WKVf5G9VjgFDKRHo",authDomain:"a-little-chat.firebaseapp.com",databaseURL:"https://a-little-chat-default-rtdb.europe-west1.firebasedatabase.app",projectId:"a-little-chat",storageBucket:"a-little-chat.appspot.com",messagingSenderId:"191360084622",appId:"1:191360084622:web:cc0b9e3dd41a09879377df"};S(te);const p=j(),k=t=>(D("data-v-39d16572"),t=t(),O(),t),se={key:0,class:"loader"},oe=k(()=>a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[a("path",{d:"M304 48C304 74.51 282.5 96 256 96C229.5 96 208 74.51 208 48C208 21.49 229.5 0 256 0C282.5 0 304 21.49 304 48zM304 464C304 490.5 282.5 512 256 512C229.5 512 208 490.5 208 464C208 437.5 229.5 416 256 416C282.5 416 304 437.5 304 464zM0 256C0 229.5 21.49 208 48 208C74.51 208 96 229.5 96 256C96 282.5 74.51 304 48 304C21.49 304 0 282.5 0 256zM512 256C512 282.5 490.5 304 464 304C437.5 304 416 282.5 416 256C416 229.5 437.5 208 464 208C490.5 208 512 229.5 512 256zM74.98 437C56.23 418.3 56.23 387.9 74.98 369.1C93.73 350.4 124.1 350.4 142.9 369.1C161.6 387.9 161.6 418.3 142.9 437C124.1 455.8 93.73 455.8 74.98 437V437zM142.9 142.9C124.1 161.6 93.73 161.6 74.98 142.9C56.24 124.1 56.24 93.73 74.98 74.98C93.73 56.23 124.1 56.23 142.9 74.98C161.6 93.73 161.6 124.1 142.9 142.9zM369.1 369.1C387.9 350.4 418.3 350.4 437 369.1C455.8 387.9 455.8 418.3 437 437C418.3 455.8 387.9 455.8 369.1 437C350.4 418.3 350.4 387.9 369.1 369.1V369.1z"})],-1)),re=[oe],ne={key:1,class:"relative fcc w-full h-full md:w-64"},ae={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},ie=k(()=>a("path",{d:"M352 192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H288V144C288 64.47 352.5 0 432 0C511.5 0 576 64.47 576 144V192C576 209.7 561.7 224 544 224C526.3 224 512 209.7 512 192V144C512 99.82 476.2 64 432 64C387.8 64 352 99.82 352 144V192z"},null,-1)),le=[ie],de={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},ue=k(()=>a("path",{d:"M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"},null,-1)),ce=[ue],pe={class:"w-full overflow-y-scroll"},me={class:"mb-2 bg-m4 text-m1 rounded-xl px-2 py-1"},_e={class:"text-xs font-bold text-blue-400 cursor-pointer"},he={class:"pl-2"};function fe(t,e,o,d,n,s){return t.isLoading?(i(),l("div",se,re)):(i(),l("div",ne,[s.user==t.roomInfo.user?(i(),l("div",{key:0,class:"lock",onClick:e[0]||(e[0]=(...r)=>s.handleLock&&s.handleLock(...r))},[t.roomInfo.private?(i(),l("svg",de,ce)):(i(),l("svg",ae,le))])):B("",!0),a("ul",pe,[(i(!0),l(g,null,z(t.messages,r=>(i(),l("li",me,[a("p",_e,w(r.user),1),a("p",he,w(r.text),1)]))),256))]),v(a("input",{class:"mt-auto w-full rounded pl-3 text-m1","onUpdate:modelValue":e[1]||(e[1]=r=>t.text=r),placeholder:"Type message...",onKeydown:e[2]||(e[2]=b((...r)=>s.sendMessage&&s.sendMessage(...r),["enter"]))},null,544),[[y,t.text]])]))}const Ce={data:()=>({roomInfo:{},text:"",messages:{},isLoading:!1}),computed:{user(){return this.$store.state.user},room(){return this.$route.params.roomID}},methods:{getMessages(){this.isLoading=!0,I(c(p,this.room),t=>{let e=t.val();this.roomInfo=e._info,this.messages=Object.keys(e).map(o=>L({},e[o])),this.messages.pop()}),this.isLoading=!1},sendMessage(){const t=$(c(p,this.room)).key,e={};e[`${t}`]={text:this.text,user:this.user},x(c(p,this.room),e),this.text=""},handleLock(){let t=this.roomInfo.private;x(c(p,this.room),{_info:{user:this.user,private:!t}})}},mounted(){this.getMessages()}};var ge=m(Ce,[["render",fe],["__scopeId","data-v-39d16572"]]);const ve={class:"flex"},ye=f("Name");function be(t,e,o,d,n,s){return i(),l("div",ve,[a("label",null,[ye,v(a("input",{class:"rounded pl-2 mx-2 text-m1","onUpdate:modelValue":e[0]||(e[0]=r=>t.name=r),placeholder:"Enter name"},null,512),[[y,t.name]])]),a("button",{class:"bg-m3 px-2 border border-black text-m1",onClick:e[1]||(e[1]=(...r)=>s.enter&&s.enter(...r)),onKeydown:e[2]||(e[2]=b((...r)=>s.enter&&s.enter(...r),["enter"]))},"Join",32)])}const we={data:()=>({name:""}),methods:{enter(){localStorage.setItem("user",this.name),this.$store.commit("setName",this.name),this.$router.push("/")}}};var $e=m(we,[["render",be]]);const xe={key:0,class:"loader"},ke=a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[a("path",{d:"M304 48C304 74.51 282.5 96 256 96C229.5 96 208 74.51 208 48C208 21.49 229.5 0 256 0C282.5 0 304 21.49 304 48zM304 464C304 490.5 282.5 512 256 512C229.5 512 208 490.5 208 464C208 437.5 229.5 416 256 416C282.5 416 304 437.5 304 464zM0 256C0 229.5 21.49 208 48 208C74.51 208 96 229.5 96 256C96 282.5 74.51 304 48 304C21.49 304 0 282.5 0 256zM512 256C512 282.5 490.5 304 464 304C437.5 304 416 282.5 416 256C416 229.5 437.5 208 464 208C490.5 208 512 229.5 512 256zM74.98 437C56.23 418.3 56.23 387.9 74.98 369.1C93.73 350.4 124.1 350.4 142.9 369.1C161.6 387.9 161.6 418.3 142.9 437C124.1 455.8 93.73 455.8 74.98 437V437zM142.9 142.9C124.1 161.6 93.73 161.6 74.98 142.9C56.24 124.1 56.24 93.73 74.98 74.98C93.73 56.23 124.1 56.23 142.9 74.98C161.6 93.73 161.6 124.1 142.9 142.9zM369.1 369.1C387.9 350.4 418.3 350.4 437 369.1C455.8 387.9 455.8 418.3 437 437C418.3 455.8 387.9 455.8 369.1 437C350.4 418.3 350.4 387.9 369.1 369.1V369.1z"})],-1),Ve=[ke],Me={key:1},Le={class:"mb-2"},ze={class:"mb-2"};function Ie(t,e,o,d,n,s){const r=h("router-link");return t.isLoading?(i(),l("div",xe,Ve)):(i(),l("ul",Me,[(i(!0),l(g,null,z(t.rooms,u=>(i(),l("li",Le,[_(r,{class:"py-2",to:u},{default:C(()=>[f(w(u),1)]),_:2},1032,["to"])]))),256)),a("li",ze,[a("button",{class:"bg-m2 text-m4 w-full rounded border font-bold",onClick:e[0]||(e[0]=(...u)=>s.createRoom&&s.createRoom(...u))},"Create")]),a("li",null,[v(a("input",{class:"pl-2 rounded text-m1",placeholder:"Join private room","onUpdate:modelValue":e[1]||(e[1]=u=>t.id=u),onKeydown:e[2]||(e[2]=b((...u)=>s.join&&s.join(...u),["enter"]))},null,544),[[y,t.id]])])]))}const Ne={data:()=>({rooms:[],id:"",isLoading:!1}),computed:{user(){return this.$store.state.user}},methods:{getRooms(){this.isLoading=!0,I(c(p),t=>{let e=t.val();this.rooms=Object.keys(e).filter(o=>e[o]._info.private==!1||e[o]._info.user==this.user)}),this.isLoading=!1},createRoom(){const t=$(c(p)).key,e={};e._info={user:this.user,private:!1};const o=$(c(p,t)).key;e[`${o}`]={text:"Hi",user:"Admin"},x(c(p,t),e)},join(){this.$router.push(this.id)}},mounted(){this.getRooms()}};var He=m(Ne,[["render",Ie]]);const Ke={};function Re(t,e,o,d,n,s){return i(),l("h1",null,"Profile Page")}var Se=m(Ke,[["render",Re]]);const je=[{path:"/",component:He},{path:"/login",component:$e},{path:"/profile",component:Se},{path:"/:roomID",component:ge}],Be=A({history:T(),routes:je});P(ee).use(Be).use(F).mount("#app");