import{r as m,av as s,aw as h}from"./index-BZzsVo5e.js";import{D as _,av as c}from"./MyApp-DyLC-RHb.js";import{C as b}from"./Collection-5aMhuQAI.js";import{f as v,g as f,a as x}from"./index-YHj7Kfyb.js";import{V as j}from"./VideoWithMuted-C5AR9zlm.js";import{L as y}from"./index-C95i2ZXQ.js";import{I as w}from"./index-Dn2ePVUt.js";import"./index-Ur4nr8nl.js";import"./file-download-Dp--CWrA.js";import"./index-DK4sUwzQ.js";import"./Dropdown-DCm_2Ujr.js";import"./PurePanel-CP-xAv6_.js";import"./index-CLvvq23o.js";import"./index-CVKBU6wa.js";import"./index-CljnAMR0.js";import"./EyeOutlined-iKkuVyfy.js";import"./SearchOutlined-BIlkrEky.js";import"./index-CvIOFmQi.js";import"./videos-wHi_gaIy.js";import"./index-DnRFqO-f.js";import"./responsiveObserver-BtQ_ovyL.js";import"./useBreakpoint-CSe0XBg_.js";import"./index-CdUH9mDB.js";import"./index-BCnZL0D9.js";import"./index-meHAn_I6.js";import"./index-Cp7qG9Yr.js";import"./Pagination-CcHme1eM.js";import"./row-C4Sb7dtG.js";import"./addEventListener-C1thYwwy.js";async function g(r="",n=""){const l=await v({fb_api_req_friendly_name:"PolarisProfileReelsTabContentQuery_connection",variables:{after:n,before:null,data:{include_feed_video:!0,page_size:12,target_user_id:r},first:4,last:null},doc_id:"7845543455542541"}),a=JSON.parse(l);console.log("res ne",a);const{edges:o=[],page_info:e={}}=_(a);return o.map(i=>{var p,u,d;const t=((p=i==null?void 0:i.node)==null?void 0:p.media)||{};return{id:t.id,post_id:t==null?void 0:t.code,type:(u=i==null?void 0:i.node)==null?void 0:u.__typename,width:t.original_width,height:t.original_height,image:f((d=t.image_versions2)==null?void 0:d.candidates),video:f(t.video_versions),comment_count:t.comment_count,like_count:t.like_count,play_count:t.play_count,view_count:t.view_count,cursor:(i==null?void 0:i.cursor)||(e==null?void 0:e.end_cursor)}})}function $({target:r}){const n=m.useCallback(async(o=[],e)=>{var t;return r!=null&&r.id?await g(r.id,e||((t=o[o.length-1])==null?void 0:t.cursor)):void 0},[r]),l=m.useCallback(o=>s.jsxs(y.Item,{className:"show-on-hover-trigger",children:[s.jsx(w,{src:o.image,width:200,height:330,style:{objectFit:"cover",borderRadius:10},preview:{destroyOnClose:!0,imageRender:()=>s.jsx(j,{src:o.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}}),s.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 50%)",pointerEvents:"none"},children:s.jsxs("div",{style:{position:"absolute",bottom:15,left:15,fontWeight:"bold",fontSize:"1.1em"},children:[s.jsx("i",{className:"fa-solid fa-play"})," ",c(o.play_count),s.jsx("br",{}),s.jsx("i",{className:"fa-solid fa-heart"})," ",c(o.like_count),s.jsx("br",{}),s.jsx("i",{className:"fa-solid fa-message"})," ",c(o.comment_count)]})}),s.jsx(h,{type:"default",icon:s.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:x("p/"+o.post_id)})]}),[]),a=m.useCallback((o,e)=>{const i=!!o.video;return{url:i?o.video:o.image,name:o.id+(i?".mp4":".jpg")}},[]);return s.jsx(b,{collectionName:(r==null?void 0:r.igName)+" - IG Reels",fetchNext:n,renderItem:l,downloadItem:a,getItemCursor:o=>o.cursor||"",rowKey:o=>o.id})}export{$ as default};