import{r as m,av as i,aw as h}from"./index-C0GZV8r4.js";import{C as _,ap as c}from"./MyApp-5UuG5Alv.js";import{C as b}from"./Collection-DFbTstJo.js";import{f as v,c as f,d as x}from"./index-irdfsVlN.js";import{V as j}from"./VideoWithMuted-BYhYz8Pu.js";import{L as y}from"./index-ChuHj_qb.js";import{I as w}from"./index-DqYBXEs5.js";import"./index-Ca7rCt7M.js";import"./file-download-BJF8e5Y0.js";import"./index-BFuDaB_r.js";import"./Dropdown-B7RIYLpN.js";import"./PurePanel-DK31J58S.js";import"./index-DBY2_SRc.js";import"./index-5vdqXesG.js";import"./index-D8nKmtSx.js";import"./index-CbZxyvQY.js";import"./addEventListener-D-0G3yIj.js";import"./index-B5sA0xfq.js";import"./index-9AWtuJYp.js";import"./index-CRcIzT1K.js";import"./useBreakpoint-Bu9dHjAK.js";import"./index-CEX1fess.js";import"./index-CPOtpTXx.js";import"./index-CAxkHnSi.js";import"./index-D_rV-K7J.js";import"./Pagination-Bqljqj6K.js";import"./row-DKHVyfQS.js";async function g(r="",n=""){const l=await v({fb_api_req_friendly_name:"PolarisProfileReelsTabContentQuery_connection",variables:{after:n,before:null,data:{include_feed_video:!0,page_size:12,target_user_id:r},first:4,last:null},doc_id:"7845543455542541"}),a=JSON.parse(l);console.log("res ne",a);const{edges:o=[],page_info:e={}}=_(a);return o.map(s=>{var p,u,d;const t=((p=s==null?void 0:s.node)==null?void 0:p.media)||{};return{id:t.id,post_id:t==null?void 0:t.code,type:(u=s==null?void 0:s.node)==null?void 0:u.__typename,width:t.original_width,height:t.original_height,image:f((d=t.image_versions2)==null?void 0:d.candidates),video:f(t.video_versions),comment_count:t.comment_count,like_count:t.like_count,play_count:t.play_count,view_count:t.view_count,cursor:(s==null?void 0:s.cursor)||(e==null?void 0:e.end_cursor)}})}function Y({target:r}){const n=m.useCallback(async(o=[],e)=>{var t;return r!=null&&r.id?await g(r.id,e||((t=o[o.length-1])==null?void 0:t.cursor)):void 0},[r]),l=m.useCallback(o=>i.jsxs(y.Item,{className:"show-on-hover-trigger",children:[i.jsx(w,{src:o.image,width:200,height:330,style:{objectFit:"cover",borderRadius:10},preview:{destroyOnClose:!0,imageRender:()=>i.jsx(j,{src:o.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}}),i.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 50%)",pointerEvents:"none"},children:i.jsxs("div",{style:{position:"absolute",bottom:15,left:15,fontWeight:"bold",fontSize:"1.1em"},children:[i.jsx("i",{className:"fa-solid fa-play"})," ",c(o.play_count),i.jsx("br",{}),i.jsx("i",{className:"fa-solid fa-heart"})," ",c(o.like_count),i.jsx("br",{}),i.jsx("i",{className:"fa-solid fa-message"})," ",c(o.comment_count)]})}),i.jsx(h,{type:"default",icon:i.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:x("p/"+o.post_id)})]}),[]),a=m.useCallback((o,e)=>{const s=!!o.video;return{url:s?o.video:o.image,name:o.id+(s?".mp4":".jpg")}},[]);return i.jsx(b,{collectionName:(r==null?void 0:r.igName)+" - IG Reels",fetchNext:n,renderItem:l,downloadItem:a,getItemCursor:o=>o.cursor||"",rowKey:o=>o.id})}export{Y as default};
