const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./VideoViewer-hCP5C7ch.js","./index-CoQJRaJc.js","./index-9SBFHPtm.css","./VideoWithMuted-DXlmFkOH.js","./MyApp-Bv9Tdnls.js"])))=>i.map(i=>d[i]);
import{r,aI as e,bT as u,aK as h,aR as f}from"./index-CoQJRaJc.js";import{C as a}from"./Collection-BVhabgIs.js";import{D as x,B as b,U as t,g as v}from"./MyApp-Bv9Tdnls.js";import{a as w,b as y,g as p}from"./videos-CJOpMINz.js";import I from"./ImageLazyPreview-hazOSm2h.js";import{L as j}from"./index-sWf0LZaq.js";import"./index-D7UuqngZ.js";import"./file-download-DKe_qcqb.js";import"./index-COS5Gceu.js";import"./Dropdown-Bj4U19VQ.js";import"./PurePanel-VaRXbwml.js";import"./index-CDSOXTpM.js";import"./index-CTvHyNJT.js";import"./index-BPzTw2po.js";import"./EyeOutlined-DejzCPTC.js";import"./SearchOutlined-Dgb3bpoU.js";import"./index-BYe4KJYd.js";import"./index-Bj3GCUdB.js";import"./addEventListener-DX7qo22b.js";import"./Pagination-Cwe0FwRT.js";import"./useBreakpoint-B8GBnQUj.js";import"./responsiveObserver-DSyUYFE2.js";import"./index-Clc9XjzJ.js";import"./row-CgfofOIW.js";const V=r.lazy(()=>f(()=>import("./VideoViewer-hCP5C7ch.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url));function X({target:i}){const l=r.useCallback(async(o=[],s)=>{var d;return!(i!=null&&i.id)||!(i!=null&&i.type)?void 0:(s=s||((d=o==null?void 0:o[(o==null?void 0:o.length)-1])==null?void 0:d.cursor)||"",((i==null?void 0:i.type)===x.Group?await w({id:i==null?void 0:i.id,cursor:s}):await y({id:i==null?void 0:i.id,cursor:s})).videos)},[i]),n=r.useCallback(async o=>{if(!o.source){const s=await p(o.id);o.source=s.source}return{url:o.source,name:o.id+".mp4"}},[]),c=r.useCallback(o=>e.jsx(j.Item,{className:"show-on-hover-trigger",children:e.jsxs(b.Ribbon,{text:o.length?u(o.length):null,children:[e.jsx(I,{src:o.picture,width:200,height:200,style:{objectFit:"cover",borderRadius:10},cacheId:"video."+o.id,getPreview:()=>o.source||p(o.id),renderPreview:(s,m)=>({destroyOnClose:!0,imageRender:()=>e.jsx(t,{spinning:m,children:e.jsx(V,{info:s,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null})}),e.jsx(h,{type:"default",icon:e.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:v(o.id)})]})}),[]);return e.jsx(a,{collectionName:(i==null?void 0:i.name)+" - Videos",fetchNext:l,renderItem:c,downloadItem:n,getItemCursor:o=>o.cursor,rowKey:o=>o.id})}export{X as default};