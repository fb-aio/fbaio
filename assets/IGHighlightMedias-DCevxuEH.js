import{r as i,ap as t}from"./index-BOet_9WV.js";import{i as d}from"./icons-FuTnxPpr.js";import{C as c}from"./Collection-DwiCb6PK.js";import{a as l}from"./highlights-DHsDY5wW.js";import{L as u}from"./index-CrRGSwSK.js";import{I as x}from"./index-CEXPLwB-.js";import"./index-CUERnRm9.js";import"./file-download-DVNTG-gp.js";import"./MyApp-CjYFd9zw.js";import"./index-1i3_uXMj.js";import"./Dropdown-y4Y8A-i9.js";import"./PurePanel-CuTvi9m1.js";import"./index-BzVYrbuN.js";import"./index-DVzyffHd.js";import"./index-CeQZxhjd.js";import"./TextArea-CM241X7f.js";import"./addEventListener-BoFyme10.js";import"./index-B3I_vVip.js";import"./index-PjUow3X2.js";import"./index-BT20aluq.js";import"./index-B6t6X2Jj.js";import"./responsiveObserver-CyO3TaPU.js";import"./useBreakpoint-vSNHfBfG.js";import"./index-CC9bN2Gw.js";import"./index-DiTf7hIK.js";import"./index-CssILSWz.js";import"./index-DnwdLqdc.js";import"./index-Di1vd0pH.js";import"./Pagination-BmcLOJBH.js";import"./row-ep240xy5.js";function T({target:e,highlight:r}){const s=i.useCallback(async o=>r!=null&&r.id?await l(r.id):void 0,[r]),p=i.useCallback(o=>t.jsxs(u.Item,{children:[t.jsx(x,{src:o.image,width:200,height:330,style:{objectFit:"cover"},preview:o.video?{destroyOnClose:!0,imageRender:()=>t.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:o.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}:!0}),o.video&&t.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:d.IGVideo})]}),[]),a=i.useCallback((o,n)=>{const m=!!o.video;return{url:m?o.video:o.image,name:o.id+(m?".mp4":".jpg")}},[]);return t.jsx(c,{collectionName:(e==null?void 0:e.igName)+" - IG Highlight - "+r.title,fetchNext:s,renderItem:p,downloadItem:a,rowKey:o=>o.id,once:!0})}export{T as default};