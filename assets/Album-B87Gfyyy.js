const __vite__fileDeps=["./ImageLazyPreview-Dqgcc2mf.js","./index-C9_cRoFB.js","./index-DjlRUb8J.css","./MyApp-BMCA0Nlb.js","./index-B6vGvh5v.js","./addEventListener-C2RtZKCw.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as t,ap as e,at as f}from"./index-C9_cRoFB.js";import{C as h}from"./Collection-BhbHjsLV.js";import{a0 as x,a1 as b,a3 as v}from"./MyApp-BMCA0Nlb.js";import{c as y,M as n}from"./albums-D5mC6Inf.js";import{b as d}from"./index-DIXC9Mtt.js";import{L as w}from"./index-C_GYcltR.js";import{I as _}from"./index-B6vGvh5v.js";import"./index-CAUsyDpG.js";import"./file-download-BtFRL-VC.js";import"./index-CN0ZZrsx.js";import"./Dropdown-BxbP1tIb.js";import"./PurePanel-CqK8cx_v.js";import"./index-iZDhel9k.js";import"./index-GjJt6RhL.js";import"./index-Cdt1jnWX.js";import"./TextArea-DfFagD_I.js";import"./addEventListener-C2RtZKCw.js";import"./index-BrLF9vdJ.js";import"./index-huXCxQBE.js";import"./index-DP4jYLT8.js";import"./responsiveObserver-CClhfmfb.js";import"./useBreakpoint-CKWWkqA_.js";import"./index-B6y_1zzE.js";import"./index-DYNNDrXc.js";import"./index-DmqYJ3xh.js";import"./index-EeAa2pfj.js";import"./index-DvmO2Ra_.js";import"./Pagination-C-k-Ophr.js";import"./row-DdtPlYPP.js";const g=t.lazy(()=>f(()=>import("./ImageLazyPreview-Dqgcc2mf.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url));function $({target:i,albumId:c,album:a}){const s=c||a.id,l=t.useCallback(async(r=[],o)=>{var p;return s?await y({albumId:s,accessToken:await x(b.EAAB),fromId:o||((p=r[r.length-1])==null?void 0:p.id)||""}):void 0},[s]),u=t.useCallback(r=>e.jsx(w.Item,{children:r.type==n.IMAGE?e.jsx(_,{src:r.uri,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px"}}):e.jsx(g,{src:r.uri,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px"},cacheId:"album_video."+r.id,getPreview:()=>d(r.id).then(o=>o.source),renderPreview:(o,m)=>({destroyOnClose:!0,imageRender:()=>e.jsx(v,{spinning:m,children:e.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:o,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null})})}),[]),I=t.useCallback(async r=>r.type==n.IMAGE?{url:r.uri,name:r.id+".jpg"}:{url:(await d(r.id)).source,name:r.id+".mp4"},[]);return e.jsx(h,{collectionName:(i==null?void 0:i.name)+" - Album "+a.name,fetchNext:l,renderItem:u,downloadItem:I,getItemCursor:r=>r.id,rowKey:r=>r.id})}export{$ as default};
