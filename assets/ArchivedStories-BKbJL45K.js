const __vite__fileDeps=["./ArchivedStoryViewer-DhE_eoy2.js","./index-CRvEVTea.js","./index-BM_p-30O.css","./MyApp-CMaP2Sb_.js","./StoryViewers-DLgEhKig.js","./Collection-DdkBumAB.js","./index-BOjVh4nR.js","./file-download-DNZaHCKN.js","./index-C20GkxZm.js","./Dropdown-CwDNI70S.js","./PurePanel-D2b6DsEN.js","./index-BuegEcvQ.js","./index-DhqHC3Qt.js","./index-siwkbsPy.js","./TextArea-CIhCrYWI.js","./addEventListener-BNkLVAlq.js","./index-WuE-WRtK.js","./index-Ca-PWtTS.js","./Pagination-CQHdhERb.js","./useBreakpoint-CXECHXlA.js","./responsiveObserver-zyRHL_Wn.js","./row-73W9qzy3.js","./stories-p3SVi38H.js","./index-DxcYCtgG.js","./styleChecker-CUhFKhR_.js","./index-DT5p5SMb.js","./index-DBtBoJrM.js","./index-CJIHXz_-.js","./index-DDvvZCbM.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as c,ao as o,as as h,ap as f}from"./index-CRvEVTea.js";import{a as g,t as u,S as v,f as x,q as w,w as b,ad as j}from"./MyApp-CMaP2Sb_.js";import{C as y}from"./Collection-DdkBumAB.js";import{d as _,e as S}from"./stories-p3SVi38H.js";import{L as k}from"./index-Ca-PWtTS.js";import{I as A}from"./index-CJIHXz_-.js";import{T as C}from"./index-DxcYCtgG.js";import"./index-BOjVh4nR.js";import"./file-download-DNZaHCKN.js";import"./index-C20GkxZm.js";import"./Dropdown-CwDNI70S.js";import"./PurePanel-D2b6DsEN.js";import"./index-BuegEcvQ.js";import"./index-DhqHC3Qt.js";import"./index-siwkbsPy.js";import"./TextArea-CIhCrYWI.js";import"./addEventListener-BNkLVAlq.js";import"./index-WuE-WRtK.js";import"./Pagination-CQHdhERb.js";import"./useBreakpoint-CXECHXlA.js";import"./responsiveObserver-zyRHL_Wn.js";import"./row-73W9qzy3.js";import"./styleChecker-CUhFKhR_.js";const T=c.lazy(()=>h(()=>import("./ArchivedStoryViewer-DhE_eoy2.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]),import.meta.url));function Z(){const{ti:s}=g();c.useEffect(()=>{u("ArchivedStories:onLoad")},[]);const m=async(e,r)=>{var t;return await _(r||((t=e==null?void 0:e[e.length-1])==null?void 0:t.cursor)||"")},d=(e,r)=>o.jsxs(k.Item,{children:[o.jsx(A,{src:e.thumbnail,style:{width:160,height:270,borderRadius:10,objectFit:"cover"},preview:{destroyOnClose:!0,toolbarRender:()=>null,imageRender:()=>o.jsx(T,{story:e})}}),o.jsx(v,{direction:"vertical",style:{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",position:"absolute",bottom:0,left:0,width:"100%",padding:"5px 10px",paddingTop:"50px",pointerEvents:"none"},children:o.jsxs(C.Text,{style:{color:"#ccc"},children:[o.jsxs("span",{children:[o.jsx("i",{className:"fa fa-eye"})," ",e.seen_count]}),o.jsx("br",{}),x(new Date(e.creation_time),s({en:"en-US",vi:"vi-VN"}))]})})]}),p=async e=>{const r="ArchivedStoryViewer.stories."+e.creation_time,a=w(r)||await S({creationTime:e.creation_time});b(r,a);const t=a.find(i=>i.id===e.id),n=j(new Date(e.creation_time));return[{url:(t==null?void 0:t.video)||(t==null?void 0:t.image)||"",name:n+(t!=null&&t.video?".mp4":".jpg")},{url:(t==null?void 0:t.image_background)||"",name:n+"_bg.jpg"}].filter(i=>i==null?void 0:i.url)},l=e=>o.jsx(f,{onClick:()=>{window.open("https://www.facebook.com/me/allactivity?log_filter=archivedstories","_blank")},icon:o.jsx("i",{className:"fa fa-external-link-alt"}),children:s({vi:"Xem trên Facebook",en:"View on Facebook"})},"view-fb");return o.jsx(y,{collectionName:"Archived Stories",fetchNext:m,renderItem:d,downloadItem:p,headerButtons:l,getItemCursor:e=>e==null?void 0:e.cursor,rowKey:e=>e.id})}export{Z as default};
