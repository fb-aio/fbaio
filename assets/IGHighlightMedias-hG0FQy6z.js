import{r as i,ap as t}from"./index-0Hfk5MSk.js";import{i as d}from"./icons-mvVXwz20.js";import{C as c}from"./Collection-C7vh2HF7.js";import{a as l}from"./highlights-CZfAN8Bc.js";import{L as u}from"./index-DjV4MP3T.js";import{I as x}from"./index-2O_IWflz.js";import"./index-Cts8JKb9.js";import"./file-download-Wy78YboV.js";import"./MyApp-DTETyBe6.js";import"./index-CWpWVvCJ.js";import"./Dropdown-Cnla9tw7.js";import"./PurePanel-CGRBYuiW.js";import"./index-JimT2myi.js";import"./index-Dj5V5m4q.js";import"./index-FIK-C6O0.js";import"./TextArea-CXV8JlWF.js";import"./addEventListener-Kn4HSJDj.js";import"./index-B-KW5qe7.js";import"./index-CvI0A7R2.js";import"./index-iMpW4-O_.js";import"./feeds-CQjIvqMs.js";import"./index-DW0fsHWP.js";import"./responsiveObserver-S6dSCmEt.js";import"./useBreakpoint-ZZ7hYbru.js";import"./index-CpWu6WTX.js";import"./index-BB6UVlLk.js";import"./index-Bwq3NRi4.js";import"./index-DNp0j0IV.js";import"./index--8D5sjlR.js";import"./Pagination-DwpAiUYs.js";import"./row-3XdnsCGd.js";function U({target:e,highlight:r}){const s=i.useCallback(async o=>r!=null&&r.id?await l(r.id):void 0,[r]),p=i.useCallback(o=>t.jsxs(u.Item,{children:[t.jsx(x,{src:o.image,width:200,height:330,style:{objectFit:"cover"},preview:o.video?{destroyOnClose:!0,imageRender:()=>t.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:o.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}:!0}),o.video&&t.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:d.IGVideo})]}),[]),a=i.useCallback((o,n)=>{const m=!!o.video;return{url:m?o.video:o.image,name:o.id+(m?".mp4":".jpg")}},[]);return t.jsx(c,{collectionName:(e==null?void 0:e.igName)+" - IG Highlight - "+r.title,fetchNext:s,renderItem:p,downloadItem:a,rowKey:o=>o.id,once:!0})}export{U as default};
