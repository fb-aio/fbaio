import{r as i,ap as t}from"./index-D-TwGz9N.js";import{i as d}from"./icons-DH7DKQTt.js";import{C as c}from"./Collection-An_oqZv4.js";import{a as l}from"./highlights-DTewGCmh.js";import{L as u}from"./index-DDBRtC0r.js";import{I as x}from"./index-CJjKWNBH.js";import"./index-VslQ8qV6.js";import"./file-download-onPpIa5t.js";import"./MyApp-Cejdv6ZL.js";import"./index-zQD9NEyF.js";import"./Dropdown-D1K-Vskr.js";import"./PurePanel-BDa0MmHH.js";import"./index-rbeP8vXY.js";import"./index-N_U1QgmY.js";import"./index-v3yv7FLt.js";import"./TextArea-CHJzE-9X.js";import"./addEventListener-BUvCU8-r.js";import"./index-BR7okoe6.js";import"./index-BJE3p2zb.js";import"./index-BHq4PaIz.js";import"./index-CEF-y8JS.js";import"./responsiveObserver-BiRBbfDg.js";import"./useBreakpoint-BhhYBtp1.js";import"./index-DlPa_58g.js";import"./index-C0NluypI.js";import"./index-HZR0K2_J.js";import"./index-DMA1r5xH.js";import"./index-BqZYeFdw.js";import"./Pagination-BDvKZw1u.js";import"./row-DnrFtQqy.js";function T({target:e,highlight:r}){const s=i.useCallback(async o=>r!=null&&r.id?await l(r.id):void 0,[r]),p=i.useCallback(o=>t.jsxs(u.Item,{children:[t.jsx(x,{src:o.image,width:200,height:330,style:{objectFit:"cover"},preview:o.video?{destroyOnClose:!0,imageRender:()=>t.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:o.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}:!0}),o.video&&t.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:d.IGVideo})]}),[]),a=i.useCallback((o,n)=>{const m=!!o.video;return{url:m?o.video:o.image,name:o.id+(m?".mp4":".jpg")}},[]);return t.jsx(c,{collectionName:(e==null?void 0:e.igName)+" - IG Highlight - "+r.title,fetchNext:s,renderItem:p,downloadItem:a,rowKey:o=>o.id,once:!0})}export{T as default};
