import{r as t,aq as r}from"./index-DZq1ok_b.js";import{c as m}from"./index-B33tJY4C.js";import{i as l}from"./icons-C3IC9sb1.js";import{C as c}from"./Collection-CKV1O1AC.js";import{L as u}from"./index-C3rBz5zW.js";import{I as f}from"./index-TDywAIi7.js";import"./MyApp-CBIbyOZV.js";import"./index-vuHwb1ab.js";import"./index-m1GRNwKH.js";import"./responsiveObserver--kAze77D.js";import"./useBreakpoint-BgUFWS1N.js";import"./index-DzaeKqOr.js";import"./index-BOtZY2Ko.js";import"./PurePanel-kx9P-EL3.js";import"./index-vnHoBXQR.js";import"./TextArea-DIqVzU-6.js";import"./addEventListener-_dEcRPRe.js";import"./index-nwebD0jg.js";import"./Dropdown-DiGkJP4Q.js";import"./index-yy88MFSS.js";import"./index-QTtKLhkZ.js";import"./file-download-Lyxl57z8.js";import"./index-2FsRLRqw.js";import"./Pagination-DHFcKdUh.js";import"./row-DZWJ4Tpz.js";function B({target:i,highlight:e}){t.useEffect(()=>{m(e.id)},[e]);const p=t.useCallback(async o=>e!=null&&e.id?o!=null&&o.length?[]:await m(e.id):void 0,[e]),n=t.useCallback(o=>r.jsxs(u.Item,{children:[r.jsx(f,{src:o.image,width:200,height:330,style:{objectFit:"cover"},preview:o.video?{destroyOnClose:!0,imageRender:()=>r.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:o.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}:!0}),o.video&&r.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:l.IGVideo})]}),[]),d=t.useCallback((o,a)=>{const s=!!o.video;return{url:s?o.video:o.image,name:o.id+(s?".mp4":".jpg")}},[]);return r.jsx(c,{collectionName:(i==null?void 0:i.igName)+" - IG Highlight - "+e.title,fetchNext:p,renderItem:n,downloadItem:d,rowKey:o=>o.id})}export{B as default};
