import{r as s,o as u,c as f,w as e,a as t,b as h,d as m,p as R,e as S,f as j,u as N,g,h as I,i as L,F as $,t as y,j as V,k as B,l as D,m as F,E as T,n as q,q as H,s as z}from"./vendor.e6e287b6.js";const M=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function l(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=l(n);fetch(n.href,o)}};M();var x=(_,c)=>{const l=_.__vccOpts||_;for(const[a,n]of c)l[a]=n;return l};const W={};function K(_,c){const l=s("router-view");return u(),f(l)}var Z=x(W,[["render",K]]);function G(_){return"i"+_.replace(/[A-Z]/g,c=>"-"+c.toLowerCase())}const J="modulepreload",O={},Q="./",E=function(c,l){return!l||l.length===0?c():Promise.all(l.map(a=>{if(a=`${Q}${a}`,a in O)return;O[a]=!0;const n=a.endsWith(".css"),o=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${o}`))return;const r=document.createElement("link");if(r.rel=n?"stylesheet":J,n||(r.as="script",r.crossOrigin=""),r.href=a,document.head.appendChild(r),n)return new Promise((p,d)=>{r.addEventListener("load",p),r.addEventListener("error",d)})})).then(()=>c())};const U={},X=_=>(R("data-v-28d141f4"),_=_(),S(),_),Y={class:"image_slot"},ee={class:"mobile"},te=m("\u5546\u5BB6\u7BA1\u7406\u5E73\u53F0"),ne={class:"el-dropdown-link"},oe=X(()=>h("span",{class:"mobile"},"\u5E97\u94FA\u540D\u79F0",-1)),re=m("Action 1"),se=m("Action 2"),ae=m("Action 3"),ce=m("Action 4"),_e=m("Action 5");function le(_,c){const l=s("i-picture"),a=s("el-icon"),n=s("el-image"),o=s("el-link"),r=s("el-col"),p=s("i-arrow-down"),d=s("el-dropdown-item"),b=s("el-dropdown-menu"),k=s("el-dropdown"),A=s("el-row");return u(),f(A,{class:"row",justify:"space-between"},{default:e(()=>[t(r,{class:"flex_start",span:12},{default:e(()=>[t(n,{src:"/src/assets/appIcon.png",style:{width:"50px",height:"50px"}},{error:e(()=>[h("div",Y,[t(a,{size:"50"},{default:e(()=>[t(l)]),_:1})])]),_:1}),h("div",ee,[t(o,{class:"title",type:"primary"},{default:e(()=>[te]),_:1})])]),_:1}),t(r,{class:"flex_end",span:12},{default:e(()=>[t(k,null,{dropdown:e(()=>[t(b,null,{default:e(()=>[t(d,null,{default:e(()=>[re]),_:1}),t(d,null,{default:e(()=>[se]),_:1}),t(d,null,{default:e(()=>[ae]),_:1}),t(d,{disabled:""},{default:e(()=>[ce]),_:1}),t(d,{divided:""},{default:e(()=>[_e]),_:1})]),_:1})]),default:e(()=>[h("span",ne,[oe,t(a,{class:"el-icon--right"},{default:e(()=>[t(p)]),_:1})])]),_:1})]),_:1})]),_:1})}var de=x(U,[["render",le],["__scopeId","data-v-28d141f4"]]);const ie={setup(_){const c=j(()=>{const o=N();return o.path=="/home"?"/":o.path}),l=(o,r)=>`${o.path}/${r.path}`,a=(o,r)=>{console.log(o,r)},n=(o,r)=>{console.log(o,r)};return(o,r)=>{const p=s("el-menu-item"),d=s("router-link"),b=s("el-sub-menu"),k=s("el-menu"),A=s("el-scrollbar");return u(),f(A,{height:"calc(100vh - 50px)"},{default:e(()=>[t(k,{"default-active":L(c),"active-text-color":"#ffd04b",onOpen:a,onClose:n},{default:e(()=>[(u(!0),g($,null,I(L(P),i=>(u(),g($,{key:i.path},[i.hasOwnProperty("children")&&i.children.length>1?(u(),f(b,{key:0,index:i.path},{title:e(()=>[h("span",null,y(i.name)+" -- "+y(i.path),1)]),default:e(()=>[(u(!0),g($,null,I(i.children,w=>(u(),f(d,{to:l(i,w),key:l(i,w)},{default:e(()=>[t(p,{index:l(i,w)},{default:e(()=>[m(y(w.meta.name),1)]),_:2},1032,["index"])]),_:2},1032,["to"]))),128))]),_:2},1032,["index"])):(u(),f(d,{key:1,to:i.path},{default:e(()=>[t(p,{index:i.path},{default:e(()=>[m(y(i.name)+" -- "+y(i.path),1)]),_:2},1032,["index"])]),_:2},1032,["to"]))],64))),128))]),_:1},8,["default-active"])]),_:1})}}};var ue=x(ie,[["__scopeId","data-v-4248eb66"]]);const pe={},me={class:"flex_center"};function fe(_,c){return u(),g("div",me,"\u7248\u6743")}var he=x(pe,[["render",fe],["__scopeId","data-v-6fd42997"]]);const ve={class:"wrap"},ge={setup(_){return(c,l)=>{const a=s("el-header"),n=s("el-aside"),o=s("router-view"),r=s("el-main"),p=s("el-footer"),d=s("el-container");return u(),g("div",null,[t(d,null,{default:e(()=>[t(a,{height:"50px"},{default:e(()=>[t(de)]),_:1}),t(d,null,{default:e(()=>[t(n,{width:"180px"},{default:e(()=>[t(ue)]),_:1}),t(d,null,{default:e(()=>[t(r,null,{default:e(()=>[h("div",ve,[t(o)])]),_:1}),t(p,{height:"50px"},{default:e(()=>[t(he)]),_:1})]),_:1})]),_:1})]),_:1})])}}};var C=x(ge,[["__scopeId","data-v-7da9eb52"]]);const ye={path:"/goods",component:C,redirect:"/goods/manage",name:"\u5546\u54C1\u7BA1\u7406",children:[{path:"manage",component:()=>E(()=>import("./manage.6918c27e.js"),["statics/manage.6918c27e.js","statics/vendor.e6e287b6.js"]),meta:{name:"\u7BA1\u7406\u5546\u54C11"}},{path:"test",component:()=>E(()=>import("./manage.6918c27e.js"),["statics/manage.6918c27e.js","statics/vendor.e6e287b6.js"]),meta:{name:"\u7BA1\u7406\u5546\u54C12"}}]},P=[{path:"/",component:C,redirect:"/home",name:"\u9996\u9875",children:[{path:"home",component:()=>E(()=>import("./index.69adc1f0.js"),["statics/index.69adc1f0.js","statics/index.b01961ba.css","statics/vendor.e6e287b6.js"]),meta:{name:"\u9996\u9875"}}]},ye],xe=V({scrollBehavior:()=>({left:0,top:0}),history:B(),routes:P}),we={state:{name:"\u6211\u662Fname"},mutations:{},actions:{}},be=D({modules:{user:we}}),v=F(Z);for(let[_,c]of Object.entries(T))v.component(G(_),c);v.use(xe);v.use(be);v.use(q,H);v.use(z,{size:"mini"});v.mount("#app");export{x as _};