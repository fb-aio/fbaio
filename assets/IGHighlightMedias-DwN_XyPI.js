import{r as i,av as t}from"./index-Cu5DMrqP.js";import{i as d}from"./icons-ntw3wiDN.js";import{C as c}from"./Collection-gHxE2ssH.js";import{a as l}from"./highlights-Ci16FGme.js";import{V as u}from"./VideoWithMuted-BbnuUaI6.js";import{L as x}from"./index-Bsb2O4uF.js";import{I as v}from"./index-uKhnUYaa.js";import"./index-CGIy8z5y.js";import"./file-download-CQflNR56.js";import"./MyApp-CBJyifzj.js";import"./index-BfGp5EFc.js";import"./Dropdown-4O0oXYv8.js";import"./PurePanel-Cc9k44PN.js";import"./index-BEDMcvkp.js";import"./index-VDeELPdW.js";import"./index-mZ6bkR5V.js";import"./index-B6wF2DLX.js";import"./EyeOutlined-FHe3ptwe.js";import"./SearchOutlined-BE8biauy.js";import"./index-Mn7J1M2X.js";import"./index-C5iJlWh7.js";import"./videos-BL3WRm-k.js";import"./index-D-ReONQg.js";import"./responsiveObserver-eHs-qAkp.js";import"./useBreakpoint-otqirn5h.js";import"./index-CdtiqYN9.js";import"./index-DJ_GMdhw.js";import"./index-DhpzbMQc.js";import"./index-D3paQuS4.js";import"./index-BHP5flst.js";import"./Pagination-ttRdgmts.js";import"./row-G-tErKJJ.js";import"./addEventListener-BX9_jEDV.js";function Z({target:e,highlight:r}){const s=i.useCallback(async o=>r!=null&&r.id?await l(r.id):void 0,[r]),p=i.useCallback(o=>t.jsxs(x.Item,{children:[t.jsx(v,{src:o.image,width:200,height:330,style:{objectFit:"cover",borderRadius:10},preview:o.video?{destroyOnClose:!0,imageRender:()=>t.jsx(u,{src:o.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}:!0}),o.video&&t.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:d.IGVideo})]}),[]),a=i.useCallback((o,n)=>{const m=!!o.video;return{url:m?o.video:o.image,name:o.id+(m?".mp4":".jpg")}},[]);return t.jsx(c,{collectionName:(e==null?void 0:e.igName)+" - IG Highlight - "+r.title,fetchNext:s,renderItem:p,downloadItem:a,rowKey:o=>o.id,once:!0})}export{Z as default};
