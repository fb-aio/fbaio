import{r as i,av as t}from"./index-pIYkJH0y.js";import{i as d}from"./icons-AcrMxMEp.js";import{C as c}from"./Collection-BpTZAvqs.js";import{a as l}from"./highlights-Dz7a09lv.js";import{V as u}from"./VideoWithMuted-BcPxdNd5.js";import{L as x}from"./index-BoBP2xiU.js";import{I as v}from"./index-Cgnl15ZF.js";import"./index-CRVY8JmG.js";import"./file-download-CTAkT808.js";import"./MyApp-B1cJNkHL.js";import"./index-BQ2IX7F4.js";import"./Dropdown-a0ij7Zil.js";import"./PurePanel-pXY6Fxuq.js";import"./index-DTu7_Xfb.js";import"./index-DVpbZc3g.js";import"./index-CnpTBv20.js";import"./index-CHcpZIV-.js";import"./EyeOutlined-DfcPFUXt.js";import"./SearchOutlined-C3yLFxaZ.js";import"./index-BiBrutaZ.js";import"./index-BAS_NvYp.js";import"./videos-BYXOZrmx.js";import"./index-CipfH2DW.js";import"./responsiveObserver-Dm79JWst.js";import"./useBreakpoint-BW8SwTJR.js";import"./index-C9sdPJJg.js";import"./index-oogB43UJ.js";import"./index-CMEARgE6.js";import"./index-BSMRY7p4.js";import"./index-CwX0Hdjh.js";import"./Pagination-Cvn_of7Q.js";import"./row-1gecwwBX.js";import"./addEventListener-SsrfmUG-.js";function Z({target:e,highlight:r}){const s=i.useCallback(async o=>r!=null&&r.id?await l(r.id):void 0,[r]),p=i.useCallback(o=>t.jsxs(x.Item,{children:[t.jsx(v,{src:o.image,width:200,height:330,style:{objectFit:"cover",borderRadius:10},preview:o.video?{destroyOnClose:!0,imageRender:()=>t.jsx(u,{src:o.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}:!0}),o.video&&t.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:d.IGVideo})]}),[]),a=i.useCallback((o,n)=>{const m=!!o.video;return{url:m?o.video:o.image,name:o.id+(m?".mp4":".jpg")}},[]);return t.jsx(c,{collectionName:(e==null?void 0:e.igName)+" - IG Highlight - "+r.title,fetchNext:s,renderItem:p,downloadItem:a,rowKey:o=>o.id,once:!0})}export{Z as default};
