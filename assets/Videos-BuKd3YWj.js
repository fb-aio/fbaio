const __vite__fileDeps=["./ImageLazyPreview-B8VsK8Xb.js","./index-CJaVbnGD.js","./index-Gp9RWSdI.css","./MyApp-Cb3LUwKI.js","./index-VHYOultD.js","./addEventListener-BEy-bbbd.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as p,ap as e,av as u}from"./index-CJaVbnGD.js";import{O as h,B as x,a2 as f,a3 as v}from"./MyApp-Cb3LUwKI.js";import{C as y}from"./Collection-BGAhcSWd.js";import{g as w,a as I,b as d}from"./index-DqHcdW4p.js";import{L as b}from"./index-CAcCQb4o.js";import"./index-CoAyLWga.js";import"./file-download-7sx46_tB.js";import"./index-hQNM_UWx.js";import"./Dropdown-CTVtteyU.js";import"./PurePanel-Df0o7vnK.js";import"./index-SqWg6UAW.js";import"./index-C5H87xLX.js";import"./index-DgW53vNp.js";import"./TextArea-B0sMUHr-.js";import"./addEventListener-BEy-bbbd.js";import"./index-DtyXO5qB.js";import"./index-C54r_VE-.js";import"./index-DP7XXFVh.js";import"./responsiveObserver-MUZjbimK.js";import"./useBreakpoint-yUZkuHJ4.js";import"./index-Dhpvm-u-.js";import"./index-DPBMs5SG.js";import"./index-C5UKu_rK.js";import"./index-VHYOultD.js";import"./index-Bdj1DtMt.js";import"./index-DreCSCQn.js";import"./Pagination-COU-Z0ho.js";import"./row-Cd28j6bi.js";const j=p.lazy(()=>u(()=>import("./ImageLazyPreview-B8VsK8Xb.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url));function Y({target:i}){const n=p.useCallback(async(o=[],s)=>{var m;return!(i!=null&&i.id)||!(i!=null&&i.type)?void 0:(s=s||((m=o==null?void 0:o[(o==null?void 0:o.length)-1])==null?void 0:m.cursor)||"",((i==null?void 0:i.type)===h.Group?await w({id:i==null?void 0:i.id,cursor:s}):await I({id:i==null?void 0:i.id,cursor:s})).videos)},[i]),l=p.useCallback(async o=>{if(!o.source){const s=await d(o.id);o.source=s.source}return{url:o.source,name:o.id+".mp4"}},[]),c=p.useCallback(o=>e.jsx(b.Item,{children:e.jsx(x.Ribbon,{text:o.length?f(o.length):null,children:e.jsx(j,{src:o.picture,width:200,height:200,style:{objectFit:"cover"},cacheId:"video."+o.id,getPreview:()=>o.source||d(o.id).then(s=>s.source),renderPreview:(s,r)=>({destroyOnClose:!0,imageRender:()=>e.jsx(v,{spinning:r,children:e.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:s,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null})})})}),[]);return e.jsx(y,{collectionName:(i==null?void 0:i.name)+" - Videos",fetchNext:n,renderItem:c,downloadItem:l,getItemCursor:o=>o.cursor,rowKey:o=>o.id})}export{Y as default};
