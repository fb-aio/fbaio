import{r as m,aA as t,aB as d}from"./index-DjNgLHmn.js";import{at as h}from"./MyApp-DK69-3iP.js";import{C as u}from"./Collection-C9qKHU1X.js";import{g as f,a as x}from"./highlights-CTXcR4LY.js";import{c as g}from"./core-C-d6rfXn.js";import{L as w}from"./index-C3McVWj0.js";import{I as b}from"./index-E6wTmUh-.js";import"./index-CAy62gIh.js";import"./file-download-BjnbICN-.js";import"./index-1UiE3Fo6.js";import"./Dropdown-T16hB0xb.js";import"./PurePanel-C1cPjrOv.js";import"./index-DRxPCiTp.js";import"./index-nfXIQ-n5.js";import"./index-B5jAeavt.js";import"./EyeOutlined-CkbEv_yO.js";import"./SearchOutlined-DKaqJnTW.js";import"./index-kYucxU22.js";import"./Pagination-uHe4sqF_.js";import"./useBreakpoint-Dh19YETt.js";import"./responsiveObserver-CGsauEKo.js";import"./index-BdfMe-pS.js";import"./row-B78WAZFV.js";import"./addEventListener-D1m6mSJD.js";function H({target:r,onOpenHighlight:e}){const p=m.useCallback(async(i=[])=>r!=null&&r.id?i.length?[]:await f(r.id):void 0,[r]),n=m.useCallback(i=>{var o,a;return t.jsxs(w.Item,{className:"show-on-hover-trigger",children:[t.jsx(b,{src:i.cover,width:100,height:100,style:{objectFit:"cover",borderRadius:"50%",cursor:"pointer"},preview:!1,onClick:()=>{e==null||e(i)}}),t.jsx("a",{href:"https://www.instagram.com/stories/highlights/"+i.id.split(":")[1],target:"_blank",style:{display:"block",wordWrap:"break-word",maxWidth:100,padding:5,fontWeight:"bold",textAlign:"center",fontSize:"1em"},title:i.title,children:h(i.title,30)}),t.jsx(d,{type:"default",icon:t.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",top:0,right:0},className:"show-on-hover-item",target:"_blank",href:g("stories/highlights/"+((a=(o=i.id)==null?void 0:o.split(":"))==null?void 0:a[1]))})]})},[]),c=m.useCallback(async(i,o)=>(await x(i.id)).map(s=>{const l=!!s.video;return{url:l?s.video:s.image,name:s.id+(l?".mp4":".jpg")}}),[]);return t.jsx(u,{collectionName:(r==null?void 0:r.username)+" - IG Highlights",fetchNext:p,renderItem:n,downloadItem:c,rowKey:i=>i.id})}export{H as default};
