const __vite__fileDeps=["./ImageLazyPreview-C9f6JY04.js","./index-Dwpma3vX.js","./index-CKPZ9v0x.css","./MyApp-CaAHD_sl.js","./index-BAmkjU4S.js","./addEventListener-CAhr9VRf.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as t,av as s,aA as V}from"./index-Dwpma3vX.js";import{A as z,u as O,b as o,a7 as W,a8 as U,a6 as q,f as T,I as M}from"./MyApp-CaAHD_sl.js";import{C as Q}from"./Collection-Duhytgd6.js";import{b as _}from"./index-BgrGtRJv.js";import{L as $}from"./index-B1-l0GI_.js";import{T as B}from"./index-CnpxtjSf.js";import"./index-qYag26Fr.js";import"./file-download-BEwLUfs_.js";import"./index-CjRY1w1B.js";import"./Dropdown-Cy_5j5G7.js";import"./PurePanel-lbpTE9yy.js";import"./index-QNqn8XPT.js";import"./index-C3vKAcCx.js";import"./index-D-uzMAVF.js";import"./addEventListener-CAhr9VRf.js";import"./index-yv7_mBYm.js";import"./index-O5-mSQhR.js";import"./index-BnLGuCJ5.js";import"./useBreakpoint-B5KK-xwT.js";import"./index-D6d6ZTml.js";import"./index-3FZft9mY.js";import"./index-CKqW8jTq.js";import"./index-BAmkjU4S.js";import"./index-CHPm_ATI.js";import"./Pagination-CDlhp95V.js";import"./row-BHiT-vw1.js";async function F({id:n="",cursor:a=""}){var r,u,m;const p=await z({fb_api_req_friendly_name:"ProfileCometAppCollectionReelsRendererPaginationQuery",variables:{count:10,cursor:a,feedLocation:"COMET_MEDIA_VIEWER",feedbackSource:65,focusCommentID:null,renderLocation:null,scale:1,useDefaultActor:!0,id:btoa("app_collection:"+n+":168684841768375:260")},doc_id:"7821270511254925"}),c=JSON.parse(((r=p==null?void 0:p.split(`
`))==null?void 0:r[0])||"{}"),{edges:d=[],page_info:i={}}=((m=(u=c==null?void 0:c.data)==null?void 0:u.node)==null?void 0:m.aggregated_fb_shorts)||{};return d.map(e=>{var h,b,f,y,w,j,k,v,C,I,R,S,x,E,P,N,L,A;const l=((b=(h=e==null?void 0:e.profile_reel_node)==null?void 0:h.node)==null?void 0:b.short_form_video_context)||{};return{id:((w=(y=(f=e==null?void 0:e.profile_reel_node)==null?void 0:f.node)==null?void 0:y.video)==null?void 0:w.id)||atob((j=e==null?void 0:e.profile_reel_node)==null?void 0:j.id).split(":").pop(),created_time:(((v=(k=e==null?void 0:e.profile_reel_node)==null?void 0:k.node)==null?void 0:v.creation_time)||0)*1e3,description:(R=(I=(C=e==null?void 0:e.profile_reel_node)==null?void 0:C.node)==null?void 0:I.message)==null?void 0:R.text,viewCount:l==null?void 0:l.play_count_reduced,source:((S=l==null?void 0:l.playback_video)==null?void 0:S.browser_native_hd_url)||((x=l==null?void 0:l.playback_video)==null?void 0:x.browser_native_sd_url),height:(E=l==null?void 0:l.playback_video)==null?void 0:E.height,width:(P=l==null?void 0:l.playback_video)==null?void 0:P.width,thumbnail:(L=(N=l==null?void 0:l.playback_video)==null?void 0:N.image)==null?void 0:L.uri,url:l==null?void 0:l.shareable_url,length:(A=l==null?void 0:l.playback_video)==null?void 0:A.length_in_second,cursor:(e==null?void 0:e.cursor)||i.end_cursor,music:l==null?void 0:l.track_title}})}const G=t.lazy(()=>V(()=>import("./ImageLazyPreview-C9f6JY04.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url));function wi({target:n}){const{ti:a}=O(),p=t.useCallback(async(i=[],r)=>{var m;return!(n!=null&&n.id)||!(n!=null&&n.type)?void 0:(r=r||((m=i==null?void 0:i[(i==null?void 0:i.length)-1])==null?void 0:m.cursor)||"",await F({id:n.id,cursor:r}))},[n]),c=t.useCallback(async i=>({url:i.source,name:i.id+".mp4"}),[]),d=t.useCallback(i=>s.jsx($.Item,{children:s.jsxs(o,{direction:"vertical",children:[s.jsx(G,{src:i.thumbnail,width:200,height:300,style:{objectFit:"cover"},cacheId:"reels."+i.id,getPreview:()=>i.source||_(i.id).then(r=>(console.log(r),r.source)),renderPreview:(r,u)=>({destroyOnClose:!0,imageRender:()=>s.jsx(W,{spinning:u,children:s.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:r,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null})}),s.jsx(B.Paragraph,{style:{maxWidth:"150px",wordWrap:"break-word"},onClick:()=>window.open(i.url),children:U(i.description,100)}),s.jsxs(o,{direction:"vertical",size:1,style:{position:"absolute",top:0,left:0,padding:10,paddingBottom:50,width:"100%",background:"linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",pointerEvents:"none"},children:[s.jsxs(o,{children:[s.jsx("i",{className:"fa-regular fa-eye"}),i.viewCount]}),s.jsxs(o,{children:[s.jsx("i",{className:"fa-solid fa-film"}),i.length?q(i.length):null]}),s.jsxs(o,{children:[s.jsx("i",{className:"fa-regular fa-clock"}),T(i.created_time,a({en:"en-US",vi:"vi-VN"}))]}),i.music?s.jsxs(o,{align:"start",size:4,children:[s.jsx("i",{className:"fa-solid fa-music"})," ",i.music]}):null]})]})}),[]);return s.jsx(Q,{collectionName:(n==null?void 0:n.name)+" - Reels",fetchNext:p,renderItem:d,downloadItem:c,getItemCursor:i=>i.cursor,rowKey:i=>i.id,searchPlaceholder:i=>a({en:`Seach in ${i==null?void 0:i.length} Reels`,vi:`Tìm kiếm trong ${i==null?void 0:i.length} Reels`}),onSearch:(i,r)=>M(i,r.description+r.music+T(r.created_time,a({en:"en-US",vi:"vi-VN"})))})}export{wi as default};