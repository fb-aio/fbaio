import{r as m,av as t,aw as c}from"./index-C0GZV8r4.js";import{a8 as h}from"./MyApp-5UuG5Alv.js";import{C as f}from"./Collection-DFbTstJo.js";import{g as u,a as g}from"./highlights-Te_HRa5k.js";import{d as w}from"./index-irdfsVlN.js";import{L as x}from"./index-ChuHj_qb.js";import{I as b}from"./index-DqYBXEs5.js";import"./index-Ca7rCt7M.js";import"./file-download-BJF8e5Y0.js";import"./index-BFuDaB_r.js";import"./Dropdown-B7RIYLpN.js";import"./PurePanel-DK31J58S.js";import"./index-DBY2_SRc.js";import"./index-5vdqXesG.js";import"./index-D8nKmtSx.js";import"./index-CbZxyvQY.js";import"./addEventListener-D-0G3yIj.js";import"./index-B5sA0xfq.js";import"./index-9AWtuJYp.js";import"./index-CRcIzT1K.js";import"./useBreakpoint-Bu9dHjAK.js";import"./index-CEX1fess.js";import"./index-CPOtpTXx.js";import"./index-CAxkHnSi.js";import"./index-D_rV-K7J.js";import"./Pagination-Bqljqj6K.js";import"./row-DKHVyfQS.js";function Q({target:r,onOpenHighlight:e}){const p=m.useCallback(async(i=[])=>r!=null&&r.id?i.length?[]:await u(r.id):void 0,[r]),n=m.useCallback(i=>{var o,a;return t.jsxs(x.Item,{className:"show-on-hover-trigger",children:[t.jsx(b,{src:i.cover,width:100,height:100,style:{objectFit:"cover",borderRadius:"50%",cursor:"pointer"},preview:!1,onClick:()=>{e==null||e(i)}}),t.jsx("a",{href:"https://www.instagram.com/stories/highlights/"+i.id.split(":")[1],target:"_blank",style:{display:"block",wordWrap:"break-word",maxWidth:100,padding:5,fontWeight:"bold",textAlign:"center",fontSize:"1em"},title:i.title,children:h(i.title,30)}),t.jsx(c,{type:"default",icon:t.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",top:0,right:0},className:"show-on-hover-item",target:"_blank",href:w("stories/highlights/"+((a=(o=i.id)==null?void 0:o.split(":"))==null?void 0:a[1]))})]})},[]),d=m.useCallback(async(i,o)=>(await g(i.id)).map(s=>{const l=!!s.video;return{url:l?s.video:s.image,name:s.id+(l?".mp4":".jpg")}}),[]);return t.jsx(f,{collectionName:(r==null?void 0:r.igName)+" - IG Highlights",fetchNext:p,renderItem:n,downloadItem:d,rowKey:i=>i.id})}export{Q as default};
