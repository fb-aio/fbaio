import{r as i,ao as t}from"./index-C1pekiB7.js";import{i as d}from"./icons-GhNG3-CD.js";import{C as c}from"./Collection-2akqf-I0.js";import{a as l}from"./highlights-Bo3bMsjj.js";import{L as u}from"./index-CSuZ62th.js";import{I as x}from"./index-BsVIpen_.js";import"./index-0WeH8Kh1.js";import"./file-download-C79DYXIX.js";import"./MyApp-DHZBWk3g.js";import"./index-DJ1MjIfG.js";import"./Dropdown-DhbQGZwC.js";import"./PurePanel-7jumZd3s.js";import"./index-DdaUWPj3.js";import"./index-Dj0s5z81.js";import"./index-BMAJmxux.js";import"./index-ClQ9Vihz.js";import"./addEventListener-Cd1OVrhX.js";import"./index-BB6LtTnD.js";import"./index-BjVqNke4.js";import"./index-ZEurf5L2.js";import"./feeds-CLwE593K.js";import"./index-vuHwb1ab.js";import"./index-Dx1q5BAg.js";import"./responsiveObserver-tC68hhBd.js";import"./useBreakpoint-5B4P724y.js";import"./index-5yZFuqmY.js";import"./index-R58MCjeV.js";import"./index-CT5yJvnA.js";import"./index-Cj3H7hFZ.js";import"./Pagination-BdZO7ArY.js";import"./row-BSIm3rht.js";function U({target:e,highlight:r}){const s=i.useCallback(async o=>r!=null&&r.id?await l(r.id):void 0,[r]),p=i.useCallback(o=>t.jsxs(u.Item,{children:[t.jsx(x,{src:o.image,width:200,height:330,style:{objectFit:"cover"},preview:o.video?{destroyOnClose:!0,imageRender:()=>t.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:o.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}:!0}),o.video&&t.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:d.IGVideo})]}),[]),a=i.useCallback((o,n)=>{const m=!!o.video;return{url:m?o.video:o.image,name:o.id+(m?".mp4":".jpg")}},[]);return t.jsx(c,{collectionName:(e==null?void 0:e.igName)+" - IG Highlight - "+r.title,fetchNext:s,renderItem:p,downloadItem:a,rowKey:o=>o.id,once:!0})}export{U as default};
