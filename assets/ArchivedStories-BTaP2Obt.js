const __vite__fileDeps=["./ArchivedStoryViewer-eS4t0H73.js","./index-CYpLH5g_.js","./index-Gp9RWSdI.css","./MyApp-C_JP8LI6.js","./StoryViewers-BJJmWRo_.js","./Collection-DzMUx48F.js","./index-423Ncue-.js","./file-download-DoJL6rir.js","./index-CCeCpUmS.js","./Dropdown-C01ZSSkl.js","./PurePanel-oNlWaC93.js","./index-BUBnSZKO.js","./index-DXNQQjwE.js","./index-BuifVuaE.js","./TextArea-CxzCtomR.js","./addEventListener-B9GsE34w.js","./index-Bi_qGZtV.js","./index-DjBtHGH9.js","./Pagination-DY77cMXH.js","./useBreakpoint-Dni_odvQ.js","./responsiveObserver-AVMs_nQf.js","./row-adRy9scd.js","./index-DYJtd_HB.js","./stories-DMwUH1P-.js","./index-DMhAqJWf.js","./index-DMAJh8Zr.js","./index-Bci4n2cu.js","./index-BN8pdf5P.js","./index-laBmw7XI.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as c,ap as r,av as h,as as u}from"./index-CYpLH5g_.js";import{u as f,t as g,b as v,f as x,w,z as b,J as j}from"./MyApp-C_JP8LI6.js";import{C as y}from"./Collection-DzMUx48F.js";import{d as _,e as k}from"./stories-DMwUH1P-.js";import{L as S}from"./index-DjBtHGH9.js";import{I as A}from"./index-BN8pdf5P.js";import{T as C}from"./index-DMhAqJWf.js";import"./index-423Ncue-.js";import"./file-download-DoJL6rir.js";import"./index-CCeCpUmS.js";import"./Dropdown-C01ZSSkl.js";import"./PurePanel-oNlWaC93.js";import"./index-BUBnSZKO.js";import"./index-DXNQQjwE.js";import"./index-BuifVuaE.js";import"./TextArea-CxzCtomR.js";import"./addEventListener-B9GsE34w.js";import"./index-Bi_qGZtV.js";import"./index-DYJtd_HB.js";import"./Pagination-DY77cMXH.js";import"./useBreakpoint-Dni_odvQ.js";import"./responsiveObserver-AVMs_nQf.js";import"./row-adRy9scd.js";const T=c.lazy(()=>h(()=>import("./ArchivedStoryViewer-eS4t0H73.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]),import.meta.url));function Z(){const{ti:s}=f();c.useEffect(()=>{g("ArchivedStories:onLoad")},[]);const m=async(e,o)=>{var t;return await _(o||((t=e==null?void 0:e[e.length-1])==null?void 0:t.cursor)||"")},d=(e,o)=>r.jsxs(S.Item,{children:[r.jsx(A,{src:e.thumbnail,style:{width:160,height:270,borderRadius:10,objectFit:"cover"},preview:{destroyOnClose:!0,toolbarRender:()=>null,imageRender:()=>r.jsx(T,{story:e})}}),r.jsx(v,{direction:"vertical",style:{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",position:"absolute",bottom:0,left:0,width:"100%",padding:"5px 10px",paddingTop:"50px",pointerEvents:"none"},children:r.jsxs(C.Text,{style:{color:"#ccc"},children:[r.jsxs("span",{children:[r.jsx("i",{className:"fa fa-eye"})," ",e.seen_count]}),r.jsx("br",{}),x(new Date(e.creation_time),s({en:"en-US",vi:"vi-VN"}))]})})]}),p=async e=>{const o="ArchivedStoryViewer.stories."+e.creation_time,a=w(o)||await k({creationTime:e.creation_time});b(o,a);const t=a.find(i=>i.id===e.id),n=j(new Date(e.creation_time));return[{url:(t==null?void 0:t.video)||(t==null?void 0:t.image)||"",name:n+(t!=null&&t.video?".mp4":".jpg")},{url:(t==null?void 0:t.image_background)||"",name:n+"_bg.jpg"}].filter(i=>i==null?void 0:i.url)},l=e=>r.jsx(u,{onClick:()=>{window.open("https://www.facebook.com/me/allactivity?log_filter=archivedstories","_blank")},icon:r.jsx("i",{className:"fa fa-external-link-alt"}),children:s({vi:"Xem trên Facebook",en:"View on Facebook"})},"view-fb");return r.jsx(y,{collectionName:"Archived Stories",fetchNext:m,renderItem:d,downloadItem:p,headerButtons:l,getItemCursor:e=>e==null?void 0:e.cursor,rowKey:e=>e.id})}export{Z as default};
