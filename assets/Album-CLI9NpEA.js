const __vite__fileDeps=["./ImageLazyPreview-DCCkbig0.js","./index-Ch3SQZYM.js","./index-DjlRUb8J.css","./MyApp-BxasvTfg.js","./index-BH1GPZzs.js","./addEventListener-CXWrbDGZ.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as t,an as e,ar as f}from"./index-Ch3SQZYM.js";import{C as h}from"./Collection-CU7cWgfb.js";import{L as x,M as b,Z as v}from"./MyApp-BxasvTfg.js";import{c as y,M as p}from"./albums-CRNDNpjg.js";import{b as d}from"./index-D0ppyJZi.js";import{L as w}from"./index-CM6-1-7e.js";import{I as _}from"./index-BH1GPZzs.js";import"./index-B6CxwFCm.js";import"./file-download-oYh-7Uq5.js";import"./sweetalert2.all-BrOwh365.js";import"./index-DwZMrCFQ.js";import"./Dropdown-CqkVLm1l.js";import"./PurePanel-DJziKDnP.js";import"./index-CE1W9nXU.js";import"./index-CUH9Hbhm.js";import"./index-CYv9_VMY.js";import"./index-CXMf6RbK.js";import"./addEventListener-CXWrbDGZ.js";import"./index-CKYerQ9t.js";import"./index-BeLVDyfe.js";import"./feeds-DTi1dSMb.js";import"./index-BQnDyKr_.js";import"./responsiveObserver-BK_a0ip3.js";import"./useBreakpoint-BXjY32dr.js";import"./index-BfMZK5uK.js";import"./index-C_9rVwkb.js";import"./index-BupQCRXI.js";import"./index-DZk8ZEaa.js";import"./Pagination-B6unX1vy.js";import"./row-BlQN8LEk.js";const g=t.lazy(()=>f(()=>import("./ImageLazyPreview-DCCkbig0.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url));function rr({target:i,albumId:c,album:m}){const s=c||m.id,l=t.useCallback(async(r=[],o)=>{var n;return s?await y({albumId:s,accessToken:await x(b.EAAB),fromId:o||((n=r[r.length-1])==null?void 0:n.id)||""}):void 0},[s]),u=t.useCallback(r=>e.jsx(w.Item,{children:r.type==p.IMAGE?e.jsx(_,{src:r.uri,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px"}}):e.jsx(g,{src:r.uri,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px"},cacheId:"album_video."+r.id,getPreview:()=>d(r.id).then(o=>o.source),renderPreview:(o,a)=>({destroyOnClose:!0,imageRender:()=>e.jsx(v,{spinning:a,children:e.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:o,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null})})}),[]),I=t.useCallback(async r=>r.type==p.IMAGE?{url:r.uri,name:r.id+".jpg"}:{url:(await d(r.id)).source,name:r.id+".mp4"},[]);return e.jsx(h,{collectionName:(i==null?void 0:i.name)+" - Album "+m.name,fetchNext:l,renderItem:u,downloadItem:I,getItemCursor:r=>r.id,rowKey:r=>r.id})}export{rr as default};
