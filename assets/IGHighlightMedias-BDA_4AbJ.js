import{r as t,aq as e}from"./index-CiUWOVnT.js";import{c as m}from"./index-Z5j_B86I.js";import{i as l}from"./icons-Cc4vCZva.js";import{C as c}from"./Collection-fxTUuqUk.js";import{L as u}from"./index-qNPDJF4G.js";import{I as f}from"./index-DYhqHgnY.js";import"./MyApp-CSAMsYNo.js";import"./useCacheState-CshvC5SH.js";import"./index-vuHwb1ab.js";import"./index-BWqB_tOj.js";import"./responsiveObserver-eRqqnUkT.js";import"./useBreakpoint-Biy8e67G.js";import"./index-DG5rzQVh.js";import"./index-FgHtABFg.js";import"./PurePanel-CL192Gbs.js";import"./index-DPtMTd6b.js";import"./TextArea-C8RwuKiT.js";import"./addEventListener-CO-NmIOH.js";import"./index-Brb7sCmS.js";import"./Dropdown-CqPGcrkc.js";import"./index-CqtZplwK.js";import"./index-DFs1S1fI.js";import"./file-download-BQLzY1By.js";import"./index-DI0YYMRi.js";import"./Pagination-CsZDPWiE.js";import"./row-CD2JDyM7.js";function J({target:i,highlight:r}){t.useEffect(()=>{m(r.id)},[r]);const p=t.useCallback(async o=>r!=null&&r.id?o!=null&&o.length?[]:await m(r.id):void 0,[r]),n=t.useCallback(o=>e.jsxs(u.Item,{children:[e.jsx(f,{src:o.image,width:200,height:330,style:{objectFit:"cover"},preview:o.video?{destroyOnClose:!0,imageRender:()=>e.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:o.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}:!0}),o.video&&e.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:l.IGVideo})]}),[]),d=t.useCallback((o,a)=>{const s=!!o.video;return{url:s?o.video:o.image,name:o.id+(s?".mp4":".jpg")}},[]);return e.jsx(c,{collectionName:(i==null?void 0:i.igName)+" - IG Highlight - "+r.title,fetchNext:p,renderItem:n,downloadItem:d,rowKey:o=>o.id})}export{J as default};
