import{r as i,ao as t}from"./index-BzAesP18.js";import{i as d}from"./icons-SG479QKD.js";import{C as c}from"./Collection-l5L9kVvZ.js";import{a as l}from"./highlights-1w2VR1Mg.js";import{L as u}from"./index-DVzeoVpu.js";import{I as x}from"./index-BTnmEbMG.js";import"./index-CNrUWfY-.js";import"./file-download-B1cnWgpG.js";import"./MyApp-BT42RXlf.js";import"./index-B8hc64Bw.js";import"./Dropdown-BsSVWCvh.js";import"./PurePanel-C0glYyrq.js";import"./index-hZ7mSrJN.js";import"./index-4E84qZbL.js";import"./index-CE6uC9_s.js";import"./index-Bs2g5GpC.js";import"./addEventListener-CkPiFDgs.js";import"./index-BQ4GNSQK.js";import"./index-j7XYKrzj.js";import"./index-BSuCdqai.js";import"./feeds-BWeWIWXE.js";import"./index-vuHwb1ab.js";import"./index-N1YzIWQQ.js";import"./responsiveObserver-M3rOl7kP.js";import"./useBreakpoint-BeBv5_Jn.js";import"./index-DrQ6OiyT.js";import"./index-CR3sDMFV.js";import"./index-B_jNc4zS.js";import"./index-BIvplhO6.js";import"./Pagination-i3Sva3_F.js";import"./row-D2AOJQKu.js";function U({target:e,highlight:r}){const s=i.useCallback(async o=>r!=null&&r.id?await l(r.id):void 0,[r]),p=i.useCallback(o=>t.jsxs(u.Item,{children:[t.jsx(x,{src:o.image,width:200,height:330,style:{objectFit:"cover"},preview:o.video?{destroyOnClose:!0,imageRender:()=>t.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:o.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}:!0}),o.video&&t.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:d.IGVideo})]}),[]),a=i.useCallback((o,n)=>{const m=!!o.video;return{url:m?o.video:o.image,name:o.id+(m?".mp4":".jpg")}},[]);return t.jsx(c,{collectionName:(e==null?void 0:e.igName)+" - IG Highlight - "+r.title,fetchNext:s,renderItem:p,downloadItem:a,rowKey:o=>o.id,once:!0})}export{U as default};
