const __vite__fileDeps=["./ImageLazyPreview-_g3s7kgy.js","./index-C1pekiB7.js","./index-DjlRUb8J.css","./MyApp-DHZBWk3g.js","./index-BsVIpen_.js","./addEventListener-Cd1OVrhX.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as p,ao as e,as as u}from"./index-C1pekiB7.js";import{J as h,B as x,X as f,Y as v}from"./MyApp-DHZBWk3g.js";import{C as y}from"./Collection-2akqf-I0.js";import{g as w,a as t,b as d}from"./index-ZEurf5L2.js";import{L as I}from"./index-CSuZ62th.js";import"./index-0WeH8Kh1.js";import"./file-download-C79DYXIX.js";import"./index-DJ1MjIfG.js";import"./Dropdown-DhbQGZwC.js";import"./PurePanel-7jumZd3s.js";import"./index-DdaUWPj3.js";import"./index-Dj0s5z81.js";import"./index-BMAJmxux.js";import"./index-ClQ9Vihz.js";import"./addEventListener-Cd1OVrhX.js";import"./index-BB6LtTnD.js";import"./index-BjVqNke4.js";import"./feeds-CLwE593K.js";import"./index-vuHwb1ab.js";import"./index-Dx1q5BAg.js";import"./responsiveObserver-tC68hhBd.js";import"./useBreakpoint-5B4P724y.js";import"./index-5yZFuqmY.js";import"./index-R58MCjeV.js";import"./index-CT5yJvnA.js";import"./index-BsVIpen_.js";import"./index-Cj3H7hFZ.js";import"./Pagination-BdZO7ArY.js";import"./row-BSIm3rht.js";const b=p.lazy(()=>u(()=>import("./ImageLazyPreview-_g3s7kgy.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url));function Z({target:i}){const n=p.useCallback(async(o=[],s)=>{var m;return!(i!=null&&i.id)||!(i!=null&&i.type)?void 0:(s=s||((m=o==null?void 0:o[(o==null?void 0:o.length)-1])==null?void 0:m.cursor)||"",((i==null?void 0:i.type)===h.Group?await w({id:i==null?void 0:i.id,cursor:s}):await t({id:i==null?void 0:i.id,cursor:s})).videos)},[i]),l=p.useCallback(async o=>{if(!o.source){const s=await d(o.id);o.source=s.source}return{url:o.source,name:o.id+".mp4"}},[]),c=p.useCallback(o=>e.jsx(I.Item,{children:e.jsx(x.Ribbon,{text:o.length?f(o.length):null,children:e.jsx(b,{src:o.picture,width:200,height:200,style:{objectFit:"cover"},cacheId:"video."+o.id,getPreview:()=>o.source||d(o.id).then(s=>s.source),renderPreview:(s,r)=>({destroyOnClose:!0,imageRender:()=>e.jsx(v,{spinning:r,children:e.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:s,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null})})})}),[]);return e.jsx(y,{collectionName:(i==null?void 0:i.name)+" - Videos",fetchNext:n,renderItem:c,downloadItem:l,getItemCursor:o=>o.cursor,rowKey:o=>o.id})}export{Z as default};
