import{r as a,ao as r}from"./index-BMt573o-.js";import{g as x}from"./index-BI4bCzuI.js";import{S as v,X as f}from"./MyApp-BLkEK8ns.js";import{i as d}from"./icons-1Uu465eq.js";import{C as g}from"./Collection-DuS9D1Hp.js";import{L as m}from"./index-uCNz-wiX.js";import{I as j}from"./index-i0_W6a5o.js";import"./index-vuHwb1ab.js";import"./index-CkIzipHE.js";import"./responsiveObserver-CM3CahSI.js";import"./useBreakpoint-0JzhRh8U.js";import"./index-BhtLgFhi.js";import"./index-CaofCBLZ.js";import"./PurePanel-Bg4K3ok6.js";import"./index-doedE4_2.js";import"./TextArea-DzepTJRz.js";import"./index-BlKEKY5y.js";import"./addEventListener-BhaHb1jB.js";import"./index-B3EcHiRG.js";import"./Dropdown-BG45bl_n.js";import"./index-D5y86JOy.js";import"./index-Da_YExT1.js";import"./file-download-D-sQZCx2.js";import"./index-Dgnzabie.js";import"./Pagination-DZD632sX.js";import"./row-Baf01lgW.js";function J({target:t}){const u=a.useCallback(async(o=[],n)=>{var s;return t!=null&&t.id?await x(t.igName,n||((s=o[o.length-1])==null?void 0:s.cursor)):void 0},[t]),p=a.useCallback(o=>{var n,i,s;return r.jsxs(m.Item,{children:[r.jsx(j,{src:o.image,width:250,height:250,style:{objectFit:"cover"},preview:o.video||(n=o.carousel)!=null&&n.length?{destroyOnClose:!0,imageRender:()=>{var e;return(e=o.carousel)!=null&&e.length?r.jsx(v,{style:{maxWidth:"90vw",maxHeight:"90vh",alignItems:"center",overflowY:"auto",overflowX:"hidden"},children:r.jsx(m,{grid:{gutter:10},style:{width:"100%"},dataSource:o.carousel,renderItem:p,rowKey:l=>l.id})}):r.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:o.video,style:{maxWidth:"90vw",maxHeight:"90vh"}})},toolbarRender:()=>null}:void 0}),r.jsx("p",{style:{wordWrap:"break-word",maxWidth:250,padding:5},title:o.caption,children:f(o.caption,30)}),r.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:((i=o.carousel)==null?void 0:i.length)>0?r.jsxs(r.Fragment,{children:[r.jsx("span",{children:(s=o.carousel)==null?void 0:s.length}),d.IGCarousel]}):o.video?d.IGVideo:null})]})},[]),h=a.useCallback((o,n)=>{var s;function i(e,l=""){const c=!!e.video;return{url:c?e.video:e.image,name:l+e.id+(c?".mp4":".jpg")}}return((s=o.carousel)==null?void 0:s.length)>0?o.carousel.map((e,l)=>i(e,l+"_")):i(o)},[]);return r.jsx(g,{collectionName:(t==null?void 0:t.igName)+" - IG Posts",fetchNext:u,renderItem:p,downloadItem:h,getItemCursor:o=>o.cursor||"",rowKey:o=>o.id})}export{J as default};