const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./VideoViewer-BYtXnSlo.js","./index-HipiUIZt.js","./index-9SBFHPtm.css","./VideoWithMuted-C9SpA5nq.js","./MyApp-DZdkqri-.js"])))=>i.map(i=>d[i]);
import{r,aA as e,aB as h,aF as u}from"./index-HipiUIZt.js";import{V as a,B as f,ad as x,ae as b,h as t}from"./MyApp-DZdkqri-.js";import{C as v}from"./Collection-CjAvN-Dg.js";import{a as w,b as y,g as p}from"./videos-CGaIPM9_.js";import j from"./ImageLazyPreview-BprHOJoV.js";import{L as I}from"./index-CG0kWLDP.js";import"./index-Bz8Fq7gQ.js";import"./file-download-Cuk-jlvB.js";import"./index-Gylb7xBf.js";import"./Dropdown-DeFJS632.js";import"./PurePanel-Cbcjq9Xo.js";import"./index-C1c298CG.js";import"./index-BXQGgkAr.js";import"./index-DlpMpWNl.js";import"./EyeOutlined-obRfimbf.js";import"./SearchOutlined-14XyvQwP.js";import"./index-BFtDzNEH.js";import"./index-5399nTpC.js";import"./addEventListener-gTlQKK5a.js";import"./Pagination-CZmoovgH.js";import"./useBreakpoint-C97KHK4d.js";import"./responsiveObserver-C1_KMjaF.js";import"./index-CkOiaXnl.js";import"./row-DWl8JqcR.js";const V=r.lazy(()=>u(()=>import("./VideoViewer-BYtXnSlo.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url));function X({target:i}){const l=r.useCallback(async(o=[],s)=>{var m;return!(i!=null&&i.id)||!(i!=null&&i.type)?void 0:(s=s||((m=o==null?void 0:o[(o==null?void 0:o.length)-1])==null?void 0:m.cursor)||"",((i==null?void 0:i.type)===a.Group?await w({id:i==null?void 0:i.id,cursor:s}):await y({id:i==null?void 0:i.id,cursor:s})).videos)},[i]),n=r.useCallback(async o=>{if(!o.source){const s=await p(o.id);o.source=s.source}return{url:o.source,name:o.id+".mp4"}},[]),c=r.useCallback(o=>e.jsx(I.Item,{className:"show-on-hover-trigger",children:e.jsxs(f.Ribbon,{text:o.length?x(o.length):null,children:[e.jsx(j,{src:o.picture,width:200,height:200,style:{objectFit:"cover",borderRadius:10},cacheId:"video."+o.id,getPreview:()=>o.source||p(o.id),renderPreview:(s,d)=>({destroyOnClose:!0,imageRender:()=>e.jsx(b,{spinning:d,children:e.jsx(V,{info:s,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null})}),e.jsx(h,{type:"default",icon:e.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:t(o.id)})]})}),[]);return e.jsx(v,{collectionName:(i==null?void 0:i.name)+" - Videos",fetchNext:l,renderItem:c,downloadItem:n,getItemCursor:o=>o.cursor,rowKey:o=>o.id})}export{X as default};
