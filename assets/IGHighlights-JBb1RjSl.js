import{r as e,ap as t}from"./index-D-TwGz9N.js";import{a2 as n}from"./MyApp-Cejdv6ZL.js";import{C as c}from"./Collection-An_oqZv4.js";import{g as u,a as f}from"./highlights-DTewGCmh.js";import{L as h}from"./index-DDBRtC0r.js";import{I as x}from"./index-CJjKWNBH.js";import"./index-VslQ8qV6.js";import"./file-download-onPpIa5t.js";import"./index-zQD9NEyF.js";import"./Dropdown-D1K-Vskr.js";import"./PurePanel-BDa0MmHH.js";import"./index-rbeP8vXY.js";import"./index-N_U1QgmY.js";import"./index-v3yv7FLt.js";import"./TextArea-CHJzE-9X.js";import"./addEventListener-BUvCU8-r.js";import"./index-BR7okoe6.js";import"./index-BJE3p2zb.js";import"./index-BHq4PaIz.js";import"./index-CEF-y8JS.js";import"./responsiveObserver-BiRBbfDg.js";import"./useBreakpoint-BhhYBtp1.js";import"./index-DlPa_58g.js";import"./index-C0NluypI.js";import"./index-HZR0K2_J.js";import"./index-DMA1r5xH.js";import"./index-BqZYeFdw.js";import"./Pagination-BDvKZw1u.js";import"./row-DnrFtQqy.js";function T({target:r,onOpenHighlight:s}){const p=e.useCallback(async(i=[])=>r!=null&&r.id?i.length?[]:await u(r.id):void 0,[r]),a=e.useCallback(i=>t.jsxs(h.Item,{children:[t.jsx(x,{src:i.cover,width:100,height:100,style:{objectFit:"cover",borderRadius:"50%",cursor:"pointer"},preview:!1,onClick:()=>{s==null||s(i)}}),t.jsx("a",{href:"https://www.instagram.com/stories/highlights/"+i.id.split(":")[1],target:"_blank",style:{display:"block",wordWrap:"break-word",maxWidth:100,padding:5,fontWeight:"bold",textAlign:"center",fontSize:"1em"},title:i.title,children:n(i.title,30)})]}),[]),l=e.useCallback(async(i,d)=>(await f(i.id)).map(o=>{const m=!!o.video;return{url:m?o.video:o.image,name:o.id+(m?".mp4":".jpg")}}),[]);return t.jsx(c,{collectionName:(r==null?void 0:r.igName)+" - IG Highlights",fetchNext:p,renderItem:a,downloadItem:l,rowKey:i=>i.id})}export{T as default};
