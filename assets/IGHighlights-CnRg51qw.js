import{r as m,av as t,aw as c}from"./index-BZzsVo5e.js";import{ae as h}from"./MyApp-DyLC-RHb.js";import{C as f}from"./Collection-5aMhuQAI.js";import{g as u,a as g}from"./highlights-BaWFsRYf.js";import{a as w}from"./index-YHj7Kfyb.js";import{L as x}from"./index-C95i2ZXQ.js";import{I as b}from"./index-Dn2ePVUt.js";import"./index-Ur4nr8nl.js";import"./file-download-Dp--CWrA.js";import"./index-DK4sUwzQ.js";import"./Dropdown-DCm_2Ujr.js";import"./PurePanel-CP-xAv6_.js";import"./index-CLvvq23o.js";import"./index-CVKBU6wa.js";import"./index-CljnAMR0.js";import"./EyeOutlined-iKkuVyfy.js";import"./SearchOutlined-BIlkrEky.js";import"./index-CvIOFmQi.js";import"./videos-wHi_gaIy.js";import"./index-DnRFqO-f.js";import"./responsiveObserver-BtQ_ovyL.js";import"./useBreakpoint-CSe0XBg_.js";import"./index-CdUH9mDB.js";import"./index-BCnZL0D9.js";import"./index-meHAn_I6.js";import"./index-Cp7qG9Yr.js";import"./Pagination-CcHme1eM.js";import"./row-C4Sb7dtG.js";import"./addEventListener-C1thYwwy.js";function X({target:r,onOpenHighlight:e}){const l=m.useCallback(async(i=[])=>r!=null&&r.id?i.length?[]:await u(r.id):void 0,[r]),n=m.useCallback(i=>{var o,a;return t.jsxs(x.Item,{className:"show-on-hover-trigger",children:[t.jsx(b,{src:i.cover,width:100,height:100,style:{objectFit:"cover",borderRadius:"50%",cursor:"pointer"},preview:!1,onClick:()=>{e==null||e(i)}}),t.jsx("a",{href:"https://www.instagram.com/stories/highlights/"+i.id.split(":")[1],target:"_blank",style:{display:"block",wordWrap:"break-word",maxWidth:100,padding:5,fontWeight:"bold",textAlign:"center",fontSize:"1em"},title:i.title,children:h(i.title,30)}),t.jsx(c,{type:"default",icon:t.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",top:0,right:0},className:"show-on-hover-item",target:"_blank",href:w("stories/highlights/"+((a=(o=i.id)==null?void 0:o.split(":"))==null?void 0:a[1]))})]})},[]),d=m.useCallback(async(i,o)=>(await g(i.id)).map(s=>{const p=!!s.video;return{url:p?s.video:s.image,name:s.id+(p?".mp4":".jpg")}}),[]);return t.jsx(f,{collectionName:(r==null?void 0:r.igName)+" - IG Highlights",fetchNext:l,renderItem:n,downloadItem:d,rowKey:i=>i.id})}export{X as default};