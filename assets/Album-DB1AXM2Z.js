const __vite__fileDeps=["./ImageLazyPreview-DOtxvlnf.js","./index-Cu5DMrqP.js","./index-DfqnkV-X.css","./MyApp-CBJyifzj.js","./index-uKhnUYaa.js","./EyeOutlined-FHe3ptwe.js","./addEventListener-BX9_jEDV.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as t,av as r,aw as f,aA as g}from"./index-Cu5DMrqP.js";import{C as I}from"./Collection-gHxE2ssH.js";import{$ as b,a0 as x,a7 as v,g as w}from"./MyApp-CBJyifzj.js";import{c as y,M as d}from"./albums-BRoSaXdm.js";import{g as p}from"./videos-BL3WRm-k.js";import{V as j}from"./VideoWithMuted-BbnuUaI6.js";import{L as _}from"./index-Bsb2O4uF.js";import{I as A}from"./index-uKhnUYaa.js";import"./index-CGIy8z5y.js";import"./file-download-CQflNR56.js";import"./index-BfGp5EFc.js";import"./Dropdown-4O0oXYv8.js";import"./PurePanel-Cc9k44PN.js";import"./index-BEDMcvkp.js";import"./index-VDeELPdW.js";import"./index-mZ6bkR5V.js";import"./index-B6wF2DLX.js";import"./EyeOutlined-FHe3ptwe.js";import"./SearchOutlined-BE8biauy.js";import"./index-Mn7J1M2X.js";import"./Pagination-ttRdgmts.js";import"./useBreakpoint-otqirn5h.js";import"./responsiveObserver-eHs-qAkp.js";import"./index-DhpzbMQc.js";import"./row-G-tErKJJ.js";import"./addEventListener-BX9_jEDV.js";const E=t.lazy(()=>g(()=>import("./ImageLazyPreview-DOtxvlnf.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url));function Z({target:i,albumId:l,album:a}){const s=l||a.id,c=t.useCallback(async(o=[],e)=>{var n;return s?await y({albumId:s,accessToken:await b(x.EAAB),fromId:e||((n=o[o.length-1])==null?void 0:n.id)||""}):void 0},[s]),u=t.useCallback(o=>r.jsxs(_.Item,{className:"show-on-hover-trigger",children:[o.type==d.IMAGE?r.jsx(A,{src:o.uri,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px"}}):r.jsx(E,{src:o.uri,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px"},cacheId:"album_video."+o.id,getPreview:()=>p(o.id).then(e=>e.source),renderPreview:(e,m)=>({destroyOnClose:!0,imageRender:()=>r.jsx(v,{spinning:m,children:r.jsx(j,{src:e,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null})}),r.jsx(f,{type:"default",icon:r.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:w(o.id)})]}),[]),h=t.useCallback(async o=>o.type==d.IMAGE?{url:o.uri,name:o.id+".jpg"}:{url:(await p(o.id)).source,name:o.id+".mp4"},[]);return r.jsx(I,{collectionName:(i==null?void 0:i.name)+" - Album "+a.name,fetchNext:c,renderItem:u,downloadItem:h,getItemCursor:o=>o.id,rowKey:o=>o.id})}export{Z as default};
