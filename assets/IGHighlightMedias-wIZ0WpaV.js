import{r as i,ar as t}from"./index-Cmqd91YY.js";import{i as d}from"./icons-Cwkkwnq6.js";import{C as c}from"./Collection-BCk7naTj.js";import{a as l}from"./highlights-DoXoOhbW.js";import{L as u}from"./index-DZo1b7iv.js";import{I as x}from"./index-DdGpSnc2.js";import"./index-A0fhuegc.js";import"./file-download-D1YJKzn9.js";import"./MyApp-DRRPEL9l.js";import"./index-BjbB-wWo.js";import"./Dropdown-BHlvavTd.js";import"./PurePanel-xNFr0YFk.js";import"./index-CUB3rmyf.js";import"./index-BqZ2uixW.js";import"./index-CgW1d8K7.js";import"./index-D3aiqZFe.js";import"./addEventListener-BYgyKPu4.js";import"./index-ujjXXsdy.js";import"./index-B3xfp5TG.js";import"./index-vNnxb7fY.js";import"./index-DlM808Ss.js";import"./responsiveObserver-fq9mpNxW.js";import"./useBreakpoint-B_5HwmKp.js";import"./index-CG1NIG2B.js";import"./index-CxpSHEjv.js";import"./index-DFIc3FSH.js";import"./index-BJpa6wL-.js";import"./Pagination-q-zkKcxi.js";import"./row-b1TI5kE3.js";function S({target:e,highlight:r}){const s=i.useCallback(async o=>r!=null&&r.id?await l(r.id):void 0,[r]),p=i.useCallback(o=>t.jsxs(u.Item,{children:[t.jsx(x,{src:o.image,width:200,height:330,style:{objectFit:"cover"},preview:o.video?{destroyOnClose:!0,imageRender:()=>t.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:o.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}:!0}),o.video&&t.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:d.IGVideo})]}),[]),a=i.useCallback((o,n)=>{const m=!!o.video;return{url:m?o.video:o.image,name:o.id+(m?".mp4":".jpg")}},[]);return t.jsx(c,{collectionName:(e==null?void 0:e.igName)+" - IG Highlight - "+r.title,fetchNext:s,renderItem:p,downloadItem:a,rowKey:o=>o.id,once:!0})}export{S as default};
