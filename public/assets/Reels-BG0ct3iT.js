const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./VideoViewer-Px180xGm.js","./index-DjNgLHmn.js","./index-9SBFHPtm.css","./VideoWithMuted-DHRpANba.js","./MyApp-DK69-3iP.js","./ImageLazyPreview-CFVionfI.js","./index-E6wTmUh-.js","./EyeOutlined-CkbEv_yO.js","./addEventListener-D1m6mSJD.js"])))=>i.map(i=>d[i]);
import{r as l,aA as s,aB as h,aF as m}from"./index-DjNgLHmn.js";import{u,S as r,ae as f,h as x,at as g,ad as j,U as v,K as w,f as y}from"./MyApp-DK69-3iP.js";import{C as b}from"./Collection-C9qKHU1X.js";import{g as _}from"./reels-5jYTl98U.js";import{g as N}from"./videos-DABF11rT.js";import{L as R}from"./index-C3McVWj0.js";import{T as I}from"./index-B5jAeavt.js";import"./index-CAy62gIh.js";import"./file-download-BjnbICN-.js";import"./index-1UiE3Fo6.js";import"./Dropdown-T16hB0xb.js";import"./PurePanel-C1cPjrOv.js";import"./index-DRxPCiTp.js";import"./index-nfXIQ-n5.js";import"./EyeOutlined-CkbEv_yO.js";import"./SearchOutlined-DKaqJnTW.js";import"./index-kYucxU22.js";import"./Pagination-uHe4sqF_.js";import"./useBreakpoint-Dh19YETt.js";import"./responsiveObserver-CGsauEKo.js";import"./index-BdfMe-pS.js";import"./row-B78WAZFV.js";const k=l.lazy(()=>m(()=>import("./VideoViewer-Px180xGm.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),C=l.lazy(()=>m(()=>import("./ImageLazyPreview-CFVionfI.js"),__vite__mapDeps([5,1,2,4,6,7,8]),import.meta.url));function Y({target:o}){const{ti:n}=u(),c=l.useCallback(async(e=[],i)=>{var t;return!(o!=null&&o.id)||!(o!=null&&o.type)?void 0:(i=i||((t=e==null?void 0:e[(e==null?void 0:e.length)-1])==null?void 0:t.cursor)||"",await _({id:o.id,cursor:i}))},[o]),d=l.useCallback(async e=>({url:e.source,name:e.id+".mp4"}),[]),p=l.useCallback(e=>s.jsx(R.Item,{children:s.jsxs(r,{direction:"vertical",children:[s.jsxs("div",{className:"show-on-hover-trigger",children:[s.jsx(C,{src:e.thumbnail,width:200,height:300,style:{objectFit:"cover",borderRadius:10},cacheId:"reels."+e.id,getPreview:()=>e.source||N(e.id).then(i=>(console.log(i),i.source)),renderPreview:(i,a)=>({destroyOnClose:!0,imageRender:()=>s.jsx(f,{spinning:a,children:s.jsx(k,{info:e,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null})}),s.jsx(h,{type:"default",icon:s.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:x(e.id)})]}),s.jsx(I.Paragraph,{style:{maxWidth:"150px",wordWrap:"break-word"},onClick:()=>window.open(e.url),children:g(e.description,100)}),s.jsxs(r,{direction:"vertical",size:1,style:{position:"absolute",top:0,left:0,padding:10,paddingBottom:50,width:"100%",background:"linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",pointerEvents:"none"},children:[s.jsxs(r,{children:[s.jsx("i",{className:"fa-regular fa-eye"}),e.viewCount]}),s.jsxs(r,{children:[s.jsx("i",{className:"fa-solid fa-film"}),e.length?j(e.length):null]}),s.jsxs(r,{children:[s.jsx("i",{className:"fa-regular fa-clock"}),v(e.created_time)]}),e.music?s.jsxs(r,{align:"start",size:4,children:[s.jsx("i",{className:"fa-solid fa-music"})," ",e.music]}):null]})]})}),[]);return s.jsx(b,{collectionName:(o==null?void 0:o.name)+" - Reels",fetchNext:c,renderItem:p,downloadItem:d,getItemCursor:e=>e.cursor,rowKey:e=>e.id,searchPlaceholder:e=>n({en:`Seach in ${e==null?void 0:e.length} Reels`,vi:`Tìm kiếm trong ${e==null?void 0:e.length} Reels`}),onSearch:(e,i)=>w(e,i.description+i.music+y(i.created_time,n({en:"en-US",vi:"vi-VN"})))})}export{Y as default};
