import{r as i,ao as t}from"./index-CCfKz_oT.js";import{i as d}from"./icons-Q9qm5nOW.js";import{C as c}from"./Collection-C_I_LpgA.js";import{a as l}from"./highlights-BlVcNCYs.js";import{L as u}from"./index-BDdjzTAi.js";import{I as x}from"./index-Hj-lKCnz.js";import"./index-Djms9Xly.js";import"./file-download-CgOSCqiU.js";import"./MyApp-B1qRT6WQ.js";import"./index-Bud0akQU.js";import"./Dropdown-Bo-JhRkI.js";import"./PurePanel-BI7rUu8x.js";import"./index-DOUV9GAF.js";import"./index-BFRJjYS9.js";import"./index-CC-F51kS.js";import"./TextArea-Cs1N929r.js";import"./addEventListener--TAsDliT.js";import"./index-CrWHF4PJ.js";import"./index-SmuyLC5b.js";import"./index-vuHwb1ab.js";import"./index-DUYvQItk.js";import"./responsiveObserver-amYYf774.js";import"./useBreakpoint-DG55c3XM.js";import"./index-DQEjv6_b.js";import"./index-DBSnBoOX.js";import"./index-C5fMXfFN.js";import"./index-Cfai5I4T.js";import"./Pagination-BU6JYbRe.js";import"./row-DczJeMRu.js";function S({target:e,highlight:r}){const s=i.useCallback(async o=>r!=null&&r.id?await l(r.id):void 0,[r]),p=i.useCallback(o=>t.jsxs(u.Item,{children:[t.jsx(x,{src:o.image,width:200,height:330,style:{objectFit:"cover"},preview:o.video?{destroyOnClose:!0,imageRender:()=>t.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:o.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}:!0}),o.video&&t.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:d.IGVideo})]}),[]),a=i.useCallback((o,n)=>{const m=!!o.video;return{url:m?o.video:o.image,name:o.id+(m?".mp4":".jpg")}},[]);return t.jsx(c,{collectionName:(e==null?void 0:e.igName)+" - IG Highlight - "+r.title,fetchNext:s,renderItem:p,downloadItem:a,rowKey:o=>o.id,once:!0})}export{S as default};
