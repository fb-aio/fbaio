const __vite__fileDeps=["./ImageLazyPreview-to2tVplK.js","./index-0Hfk5MSk.js","./index-DjlRUb8J.css","./MyApp-DTETyBe6.js","./index-2O_IWflz.js","./addEventListener-Kn4HSJDj.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as p,ap as e,at as u}from"./index-0Hfk5MSk.js";import{N as h,B as x,$ as f,a0 as v}from"./MyApp-DTETyBe6.js";import{C as y}from"./Collection-C7vh2HF7.js";import{g as t,a as w,b as d}from"./index-iMpW4-O_.js";import{L as I}from"./index-DjV4MP3T.js";import"./index-Cts8JKb9.js";import"./file-download-Wy78YboV.js";import"./index-CWpWVvCJ.js";import"./Dropdown-Cnla9tw7.js";import"./PurePanel-CGRBYuiW.js";import"./index-JimT2myi.js";import"./index-Dj5V5m4q.js";import"./index-FIK-C6O0.js";import"./TextArea-CXV8JlWF.js";import"./addEventListener-Kn4HSJDj.js";import"./index-B-KW5qe7.js";import"./index-CvI0A7R2.js";import"./feeds-CQjIvqMs.js";import"./index-DW0fsHWP.js";import"./responsiveObserver-S6dSCmEt.js";import"./useBreakpoint-ZZ7hYbru.js";import"./index-CpWu6WTX.js";import"./index-BB6UVlLk.js";import"./index-Bwq3NRi4.js";import"./index-2O_IWflz.js";import"./index-DNp0j0IV.js";import"./index--8D5sjlR.js";import"./Pagination-DwpAiUYs.js";import"./row-3XdnsCGd.js";const b=p.lazy(()=>u(()=>import("./ImageLazyPreview-to2tVplK.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url));function Y({target:i}){const n=p.useCallback(async(o=[],s)=>{var m;return!(i!=null&&i.id)||!(i!=null&&i.type)?void 0:(s=s||((m=o==null?void 0:o[(o==null?void 0:o.length)-1])==null?void 0:m.cursor)||"",((i==null?void 0:i.type)===h.Group?await t({id:i==null?void 0:i.id,cursor:s}):await w({id:i==null?void 0:i.id,cursor:s})).videos)},[i]),l=p.useCallback(async o=>{if(!o.source){const s=await d(o.id);o.source=s.source}return{url:o.source,name:o.id+".mp4"}},[]),c=p.useCallback(o=>e.jsx(I.Item,{children:e.jsx(x.Ribbon,{text:o.length?f(o.length):null,children:e.jsx(b,{src:o.picture,width:200,height:200,style:{objectFit:"cover"},cacheId:"video."+o.id,getPreview:()=>o.source||d(o.id).then(s=>s.source),renderPreview:(s,r)=>({destroyOnClose:!0,imageRender:()=>e.jsx(v,{spinning:r,children:e.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:s,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null})})})}),[]);return e.jsx(y,{collectionName:(i==null?void 0:i.name)+" - Videos",fetchNext:n,renderItem:c,downloadItem:l,getItemCursor:o=>o.cursor,rowKey:o=>o.id})}export{Y as default};
