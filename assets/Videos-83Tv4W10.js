const __vite__fileDeps=["./ImageLazyPreview-CRgfNFL5.js","./index-BV7BOtUW.js","./index-8IR6ngH_.css","./MyApp-CHWTk_HF.js","./index-B9j6d4Oc.js","./addEventListener-BVjuC8P4.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as p,ap as e,au as u}from"./index-BV7BOtUW.js";import{O as h,B as x,a2 as f,a3 as v}from"./MyApp-CHWTk_HF.js";import{C as y}from"./Collection-DZNvBgSy.js";import{g as w,a as I,b as d}from"./index-C1YSI4Oh.js";import{L as b}from"./index-CgjXSKoY.js";import"./index-fMrL3t-s.js";import"./file-download-laaiaAEt.js";import"./index-CqdJ9riu.js";import"./Dropdown-DvETB7jP.js";import"./PurePanel-B12AbYNI.js";import"./index-DNaVfb9U.js";import"./index-hbpMQsOJ.js";import"./index-69VuqYoW.js";import"./TextArea-BANm4LYv.js";import"./addEventListener-BVjuC8P4.js";import"./index-AmKdz0FO.js";import"./index-Dz0mdOoQ.js";import"./index-DHflsqXu.js";import"./responsiveObserver-BXwCoo-4.js";import"./useBreakpoint-BhXKtWvL.js";import"./index-CGDp76QN.js";import"./index-Df6J2Y4E.js";import"./index-DKDnEhVZ.js";import"./index-B9j6d4Oc.js";import"./index-HifDUoMS.js";import"./index-D-kaUICY.js";import"./Pagination-rs5pQK36.js";import"./row-DXKR4W-w.js";const j=p.lazy(()=>u(()=>import("./ImageLazyPreview-CRgfNFL5.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url));function Y({target:i}){const n=p.useCallback(async(o=[],s)=>{var m;return!(i!=null&&i.id)||!(i!=null&&i.type)?void 0:(s=s||((m=o==null?void 0:o[(o==null?void 0:o.length)-1])==null?void 0:m.cursor)||"",((i==null?void 0:i.type)===h.Group?await w({id:i==null?void 0:i.id,cursor:s}):await I({id:i==null?void 0:i.id,cursor:s})).videos)},[i]),l=p.useCallback(async o=>{if(!o.source){const s=await d(o.id);o.source=s.source}return{url:o.source,name:o.id+".mp4"}},[]),c=p.useCallback(o=>e.jsx(b.Item,{children:e.jsx(x.Ribbon,{text:o.length?f(o.length):null,children:e.jsx(j,{src:o.picture,width:200,height:200,style:{objectFit:"cover"},cacheId:"video."+o.id,getPreview:()=>o.source||d(o.id).then(s=>s.source),renderPreview:(s,r)=>({destroyOnClose:!0,imageRender:()=>e.jsx(v,{spinning:r,children:e.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:s,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null})})})}),[]);return e.jsx(y,{collectionName:(i==null?void 0:i.name)+" - Videos",fetchNext:n,renderItem:c,downloadItem:l,getItemCursor:o=>o.cursor,rowKey:o=>o.id})}export{Y as default};