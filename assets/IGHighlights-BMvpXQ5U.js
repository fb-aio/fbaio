import{r as e,ar as t}from"./index-uQ-4bckE.js";import{a7 as n}from"./MyApp-Dea_f9Ec.js";import{C as c}from"./Collection-CPCM19eT.js";import{g as u,a as f}from"./highlights-CmMkeWh8.js";import{L as h}from"./index-B33L7y1K.js";import{I as x}from"./index-C8G9byCU.js";import"./index-CFrVL7BV.js";import"./file-download-COC0VS4M.js";import"./index-pKMdBif8.js";import"./Dropdown-Z0CG7-IL.js";import"./PurePanel-Ddg11r_4.js";import"./index-DM60k94P.js";import"./index-CrC_uMi3.js";import"./index-C_iPmrIa.js";import"./index-BEYyIv2R.js";import"./addEventListener-BlMTG88c.js";import"./index-DyQaJHWy.js";import"./index-CImNkr2g.js";import"./index-DPIaBQKQ.js";import"./index-MwNWAYZV.js";import"./responsiveObserver-sfPxq9Vd.js";import"./useBreakpoint-CSQ_VzM4.js";import"./index-DAiOW5Ie.js";import"./index-BQUxQCcR.js";import"./index-D3_Y-Hj6.js";import"./index-BJp_QOfU.js";import"./Pagination-DPPFQzmS.js";import"./row-CZZdOBqT.js";function Q({target:r,onOpenHighlight:s}){const a=e.useCallback(async(i=[])=>r!=null&&r.id?i.length?[]:await u(r.id):void 0,[r]),p=e.useCallback(i=>t.jsxs(h.Item,{children:[t.jsx(x,{src:i.cover,width:100,height:100,style:{objectFit:"cover",borderRadius:"50%",cursor:"pointer"},preview:!1,onClick:()=>{s==null||s(i)}}),t.jsx("a",{href:"https://www.instagram.com/stories/highlights/"+i.id.split(":")[1],target:"_blank",style:{display:"block",wordWrap:"break-word",maxWidth:100,padding:5,fontWeight:"bold",textAlign:"center",fontSize:"1em"},title:i.title,children:n(i.title,30)})]}),[]),l=e.useCallback(async(i,d)=>(await f(i.id)).map(o=>{const m=!!o.video;return{url:m?o.video:o.image,name:o.id+(m?".mp4":".jpg")}}),[]);return t.jsx(c,{collectionName:(r==null?void 0:r.igName)+" - IG Highlights",fetchNext:a,renderItem:p,downloadItem:l,rowKey:i=>i.id})}export{Q as default};
