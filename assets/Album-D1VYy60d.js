const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ImageLazyPreview-hazOSm2h.js","./index-CoQJRaJc.js","./index-9SBFHPtm.css","./MyApp-Bv9Tdnls.js","./index-Bj3GCUdB.js","./EyeOutlined-DejzCPTC.js","./addEventListener-DX7qo22b.js"])))=>i.map(i=>d[i]);
import{r as t,aI as r,aK as f,aR as I}from"./index-CoQJRaJc.js";import{C as g}from"./Collection-BVhabgIs.js";import{J as b,K as x,U as v,g as y}from"./MyApp-Bv9Tdnls.js";import{c as w,M as d}from"./albums-La7A-VVa.js";import{g as p}from"./videos-CJOpMINz.js";import{V as j}from"./VideoWithMuted-DXlmFkOH.js";import{L as _}from"./index-sWf0LZaq.js";import{I as A}from"./index-Bj3GCUdB.js";import"./index-D7UuqngZ.js";import"./file-download-DKe_qcqb.js";import"./index-COS5Gceu.js";import"./Dropdown-Bj4U19VQ.js";import"./PurePanel-VaRXbwml.js";import"./index-CDSOXTpM.js";import"./index-CTvHyNJT.js";import"./index-BPzTw2po.js";import"./EyeOutlined-DejzCPTC.js";import"./SearchOutlined-Dgb3bpoU.js";import"./index-BYe4KJYd.js";import"./Pagination-Cwe0FwRT.js";import"./useBreakpoint-B8GBnQUj.js";import"./responsiveObserver-DSyUYFE2.js";import"./index-Clc9XjzJ.js";import"./row-CgfofOIW.js";import"./addEventListener-DX7qo22b.js";const E=t.lazy(()=>I(()=>import("./ImageLazyPreview-hazOSm2h.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url));function Z({target:i,albumId:l,album:a}){const s=l||a.id,c=t.useCallback(async(o=[],e)=>{var n;return s?await w({albumId:s,accessToken:await b(x.EAAB),fromId:e||((n=o[o.length-1])==null?void 0:n.id)||""}):void 0},[s]),u=t.useCallback(o=>r.jsxs(_.Item,{className:"show-on-hover-trigger",children:[o.type==d.IMAGE?r.jsx(A,{src:o.uri,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px"}}):r.jsx(E,{src:o.uri,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px"},cacheId:"album_video."+o.id,getPreview:()=>p(o.id).then(e=>e.source),renderPreview:(e,m)=>({destroyOnClose:!0,imageRender:()=>r.jsx(v,{spinning:m,children:r.jsx(j,{src:e,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null})}),r.jsx(f,{type:"default",icon:r.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:y(o.id)})]}),[]),h=t.useCallback(async o=>o.type==d.IMAGE?{url:o.uri,name:o.id+".jpg"}:{url:(await p(o.id)).source,name:o.id+".mp4"},[]);return r.jsx(g,{collectionName:(i==null?void 0:i.name)+" - Album "+a.name,fetchNext:c,renderItem:u,downloadItem:h,getItemCursor:o=>o.id,rowKey:o=>o.id})}export{Z as default};