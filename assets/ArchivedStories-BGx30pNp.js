const __vite__fileDeps=["./ArchivedStoryViewer-Dra9yoQf.js","./index-CJaVbnGD.js","./index-Gp9RWSdI.css","./MyApp-Cb3LUwKI.js","./StoryViewers-B3lAovEH.js","./Collection-BGAhcSWd.js","./index-CoAyLWga.js","./file-download-7sx46_tB.js","./index-hQNM_UWx.js","./Dropdown-CTVtteyU.js","./PurePanel-Df0o7vnK.js","./index-SqWg6UAW.js","./index-C5H87xLX.js","./index-DgW53vNp.js","./TextArea-B0sMUHr-.js","./addEventListener-BEy-bbbd.js","./index-DtyXO5qB.js","./index-CAcCQb4o.js","./Pagination-COU-Z0ho.js","./useBreakpoint-yUZkuHJ4.js","./responsiveObserver-MUZjbimK.js","./row-Cd28j6bi.js","./index-C54r_VE-.js","./stories-D4adCv-z.js","./index-Bdj1DtMt.js","./index-DP7XXFVh.js","./index-Dhpvm-u-.js","./index-VHYOultD.js","./index-C5UKu_rK.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as c,ap as r,av as h,as as u}from"./index-CJaVbnGD.js";import{u as f,t as g,b as v,f as x,w,z as b,J as j}from"./MyApp-Cb3LUwKI.js";import{C as y}from"./Collection-BGAhcSWd.js";import{d as _,e as k}from"./stories-D4adCv-z.js";import{L as S}from"./index-CAcCQb4o.js";import{I as A}from"./index-VHYOultD.js";import{T as C}from"./index-Bdj1DtMt.js";import"./index-CoAyLWga.js";import"./file-download-7sx46_tB.js";import"./index-hQNM_UWx.js";import"./Dropdown-CTVtteyU.js";import"./PurePanel-Df0o7vnK.js";import"./index-SqWg6UAW.js";import"./index-C5H87xLX.js";import"./index-DgW53vNp.js";import"./TextArea-B0sMUHr-.js";import"./addEventListener-BEy-bbbd.js";import"./index-DtyXO5qB.js";import"./index-C54r_VE-.js";import"./Pagination-COU-Z0ho.js";import"./useBreakpoint-yUZkuHJ4.js";import"./responsiveObserver-MUZjbimK.js";import"./row-Cd28j6bi.js";const T=c.lazy(()=>h(()=>import("./ArchivedStoryViewer-Dra9yoQf.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]),import.meta.url));function Z(){const{ti:s}=f();c.useEffect(()=>{g("ArchivedStories:onLoad")},[]);const m=async(e,o)=>{var t;return await _(o||((t=e==null?void 0:e[e.length-1])==null?void 0:t.cursor)||"")},d=(e,o)=>r.jsxs(S.Item,{children:[r.jsx(A,{src:e.thumbnail,style:{width:160,height:270,borderRadius:10,objectFit:"cover"},preview:{destroyOnClose:!0,toolbarRender:()=>null,imageRender:()=>r.jsx(T,{story:e})}}),r.jsx(v,{direction:"vertical",style:{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",position:"absolute",bottom:0,left:0,width:"100%",padding:"5px 10px",paddingTop:"50px",pointerEvents:"none"},children:r.jsxs(C.Text,{style:{color:"#ccc"},children:[r.jsxs("span",{children:[r.jsx("i",{className:"fa fa-eye"})," ",e.seen_count]}),r.jsx("br",{}),x(new Date(e.creation_time),s({en:"en-US",vi:"vi-VN"}))]})})]}),p=async e=>{const o="ArchivedStoryViewer.stories."+e.creation_time,a=w(o)||await k({creationTime:e.creation_time});b(o,a);const t=a.find(i=>i.id===e.id),n=j(new Date(e.creation_time));return[{url:(t==null?void 0:t.video)||(t==null?void 0:t.image)||"",name:n+(t!=null&&t.video?".mp4":".jpg")},{url:(t==null?void 0:t.image_background)||"",name:n+"_bg.jpg"}].filter(i=>i==null?void 0:i.url)},l=e=>r.jsx(u,{onClick:()=>{window.open("https://www.facebook.com/me/allactivity?log_filter=archivedstories","_blank")},icon:r.jsx("i",{className:"fa fa-external-link-alt"}),children:s({vi:"Xem trên Facebook",en:"View on Facebook"})},"view-fb");return r.jsx(y,{collectionName:"Archived Stories",fetchNext:m,renderItem:d,downloadItem:p,headerButtons:l,getItemCursor:e=>e==null?void 0:e.cursor,rowKey:e=>e.id})}export{Z as default};