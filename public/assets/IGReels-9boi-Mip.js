import{r as m,aA as s,aB as h}from"./index-wZlHKvIC.js";import{E as _,G as b,ax as c}from"./MyApp-BoAWzGij.js";import{C as x}from"./Collection-D2fRTfTv.js";import{f as v,g as f,a as j}from"./index-cFY5g6rF.js";import{V as y}from"./VideoWithMuted-Dgu0_O18.js";import{L as w}from"./index-CX2aivbE.js";import{I}from"./index-BalxX6fZ.js";import"./index-C5zhxkfZ.js";import"./file-download-BQ7ExDj3.js";import"./index-DyxODtZq.js";import"./Dropdown-Ce6gRozi.js";import"./PurePanel-DZcz0OHg.js";import"./index-CiYw3fNR.js";import"./index-gNcxpNQ1.js";import"./TextArea-DZxd1cfF.js";import"./EyeOutlined-C0Xyk1pP.js";import"./SearchOutlined-d-cJSqkw.js";import"./index-kQEphdM5.js";import"./videos-DkW-nbfg.js";import"./index-dyO0wsFl.js";import"./responsiveObserver-BoSTImBj.js";import"./useBreakpoint-OUxgu0-V.js";import"./index-BZVgmXPP.js";import"./index-Bv_gDArU.js";import"./index-znDtBKj-.js";import"./index-BBoLG4o3.js";import"./Collapse-ZcyPyKqg.js";import"./index-BrcBDEr3.js";import"./Pagination-BCW-H6N6.js";import"./row-zII7X2E0.js";import"./addEventListener-DUkyYCb2.js";async function g(i="",n=""){const l=await v({fb_api_req_friendly_name:"PolarisProfileReelsTabContentQuery_connection",variables:{after:n,before:null,data:{include_feed_video:!0,page_size:12,target_user_id:i},first:4,last:null},doc_id:"7845543455542541"}),a=_(l);console.log("res ne",a);const{edges:o=[],page_info:e={}}=b(a);return o.map(r=>{var p,u,d;const t=((p=r==null?void 0:r.node)==null?void 0:p.media)||{};return{id:t.id,post_id:t==null?void 0:t.code,type:(u=r==null?void 0:r.node)==null?void 0:u.__typename,width:t.original_width,height:t.original_height,image:f((d=t.image_versions2)==null?void 0:d.candidates),video:f(t.video_versions),comment_count:t.comment_count,like_count:t.like_count,play_count:t.play_count,view_count:t.view_count,cursor:(r==null?void 0:r.cursor)||(e==null?void 0:e.end_cursor),raw:r}})}function ro({target:i}){const n=m.useCallback(async(o=[],e)=>{var t;return i!=null&&i.id?await g(i.id,e||((t=o[o.length-1])==null?void 0:t.cursor)):void 0},[i]),l=m.useCallback(o=>s.jsxs(w.Item,{className:"show-on-hover-trigger",children:[s.jsx(I,{src:o.image,width:200,height:330,style:{objectFit:"cover",borderRadius:10},preview:{destroyOnClose:!0,imageRender:()=>s.jsx(y,{src:o.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}}),s.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 50%)",pointerEvents:"none"},children:s.jsxs("div",{style:{position:"absolute",bottom:15,left:15,fontWeight:"bold",fontSize:"1.1em"},children:[s.jsx("i",{className:"fa-solid fa-play"})," ",c(o.play_count),s.jsx("br",{}),s.jsx("i",{className:"fa-solid fa-heart"})," ",c(o.like_count),s.jsx("br",{}),s.jsx("i",{className:"fa-solid fa-message"})," ",c(o.comment_count)]})}),s.jsx(h,{type:"default",icon:s.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:j("p/"+o.post_id)})]}),[]),a=m.useCallback((o,e)=>{const r=!!o.video;return{url:r?o.video:o.image,name:o.id+(r?".mp4":".jpg")}},[]);return s.jsx(x,{collectionName:(i==null?void 0:i.username)+" - IG Reels",fetchNext:n,renderItem:l,downloadItem:a,getItemCursor:o=>o.cursor||"",rowKey:o=>o.id})}export{ro as default};
