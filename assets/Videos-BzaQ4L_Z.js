const __vite__fileDeps=["./ImageLazyPreview-DN531AZu.js","./index-BzAesP18.js","./index-DjlRUb8J.css","./MyApp-BT42RXlf.js","./index-BTnmEbMG.js","./addEventListener-CkPiFDgs.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as p,ao as e,as as u}from"./index-BzAesP18.js";import{L as h,B as x,Z as f,_ as v}from"./MyApp-BT42RXlf.js";import{C as y}from"./Collection-l5L9kVvZ.js";import{g as w,a as t,b as d}from"./index-BSuCdqai.js";import{L as I}from"./index-DVzeoVpu.js";import"./index-CNrUWfY-.js";import"./file-download-B1cnWgpG.js";import"./index-B8hc64Bw.js";import"./Dropdown-BsSVWCvh.js";import"./PurePanel-C0glYyrq.js";import"./index-hZ7mSrJN.js";import"./index-4E84qZbL.js";import"./index-CE6uC9_s.js";import"./index-Bs2g5GpC.js";import"./addEventListener-CkPiFDgs.js";import"./index-BQ4GNSQK.js";import"./index-j7XYKrzj.js";import"./feeds-BWeWIWXE.js";import"./index-vuHwb1ab.js";import"./index-N1YzIWQQ.js";import"./responsiveObserver-M3rOl7kP.js";import"./useBreakpoint-BeBv5_Jn.js";import"./index-DrQ6OiyT.js";import"./index-CR3sDMFV.js";import"./index-B_jNc4zS.js";import"./index-BTnmEbMG.js";import"./index-BIvplhO6.js";import"./Pagination-i3Sva3_F.js";import"./row-D2AOJQKu.js";const b=p.lazy(()=>u(()=>import("./ImageLazyPreview-DN531AZu.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url));function Y({target:i}){const n=p.useCallback(async(o=[],s)=>{var m;return!(i!=null&&i.id)||!(i!=null&&i.type)?void 0:(s=s||((m=o==null?void 0:o[(o==null?void 0:o.length)-1])==null?void 0:m.cursor)||"",((i==null?void 0:i.type)===h.Group?await w({id:i==null?void 0:i.id,cursor:s}):await t({id:i==null?void 0:i.id,cursor:s})).videos)},[i]),l=p.useCallback(async o=>{if(!o.source){const s=await d(o.id);o.source=s.source}return{url:o.source,name:o.id+".mp4"}},[]),c=p.useCallback(o=>e.jsx(I.Item,{children:e.jsx(x.Ribbon,{text:o.length?f(o.length):null,children:e.jsx(b,{src:o.picture,width:200,height:200,style:{objectFit:"cover"},cacheId:"video."+o.id,getPreview:()=>o.source||d(o.id).then(s=>s.source),renderPreview:(s,r)=>({destroyOnClose:!0,imageRender:()=>e.jsx(v,{spinning:r,children:e.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:s,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null})})})}),[]);return e.jsx(y,{collectionName:(i==null?void 0:i.name)+" - Videos",fetchNext:n,renderItem:c,downloadItem:l,getItemCursor:o=>o.cursor,rowKey:o=>o.id})}export{Y as default};
