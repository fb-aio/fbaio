const __vite__fileDeps=["./ImageLazyPreview-C-11-MGA.js","./index-BMyuObdO.js","./index-DMsVN2Hl.css","./MyApp-CIOfTwJw.js","./index-B6Fsbq1o.js","./addEventListener-lxefO61D.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as t,ar as r,ax as V}from"./index-BMyuObdO.js";import{A as z,u as O,b as o,a6 as W,a7 as U,a5 as q,f as A,I as M}from"./MyApp-CIOfTwJw.js";import{C as Q}from"./Collection-mJRNlwQT.js";import{b as _}from"./index-BxKdYS7A.js";import{L as $}from"./index-BIVbQZmB.js";import{T as B}from"./index-CTnwZgWp.js";import"./index-DBmigc9r.js";import"./file-download-B9IWrMaY.js";import"./index-NJSF5PH1.js";import"./Dropdown-tas4I0bP.js";import"./PurePanel-DQJC-DMk.js";import"./index-Ca2hj0h8.js";import"./index-toMHYDV0.js";import"./index-B8bbcs-q.js";import"./addEventListener-lxefO61D.js";import"./index-CCn1OFS3.js";import"./index-Dn2DQkyO.js";import"./index-BQT7z3C8.js";import"./responsiveObserver-CmpGC2F4.js";import"./useBreakpoint-DsaGC9Dp.js";import"./index-fAP62-KX.js";import"./index-BezmfSvf.js";import"./index-ByJuuTE0.js";import"./index-B6Fsbq1o.js";import"./index-CXWj1xGA.js";import"./Pagination-CBDsRBgw.js";import"./row-Cn0VLpf-.js";async function F({id:n="",cursor:a=""}){var s,u,m;const p=await z({fb_api_req_friendly_name:"ProfileCometAppCollectionReelsRendererPaginationQuery",variables:{count:10,cursor:a,feedLocation:"COMET_MEDIA_VIEWER",feedbackSource:65,focusCommentID:null,renderLocation:null,scale:1,useDefaultActor:!0,id:btoa("app_collection:"+n+":168684841768375:260")},doc_id:"7821270511254925"}),c=JSON.parse(((s=p==null?void 0:p.split(`
`))==null?void 0:s[0])||"{}"),{edges:d=[],page_info:i={}}=((m=(u=c==null?void 0:c.data)==null?void 0:u.node)==null?void 0:m.aggregated_fb_shorts)||{};return d.map(e=>{var h,b,f,y,w,j,k,C,v,I,R,x,S,E,P,N,L,T;const l=((b=(h=e==null?void 0:e.profile_reel_node)==null?void 0:h.node)==null?void 0:b.short_form_video_context)||{};return{id:((w=(y=(f=e==null?void 0:e.profile_reel_node)==null?void 0:f.node)==null?void 0:y.video)==null?void 0:w.id)||atob((j=e==null?void 0:e.profile_reel_node)==null?void 0:j.id).split(":").pop(),created_time:(((C=(k=e==null?void 0:e.profile_reel_node)==null?void 0:k.node)==null?void 0:C.creation_time)||0)*1e3,description:(R=(I=(v=e==null?void 0:e.profile_reel_node)==null?void 0:v.node)==null?void 0:I.message)==null?void 0:R.text,viewCount:l==null?void 0:l.play_count_reduced,source:((x=l==null?void 0:l.playback_video)==null?void 0:x.browser_native_hd_url)||((S=l==null?void 0:l.playback_video)==null?void 0:S.browser_native_sd_url),height:(E=l==null?void 0:l.playback_video)==null?void 0:E.height,width:(P=l==null?void 0:l.playback_video)==null?void 0:P.width,thumbnail:(L=(N=l==null?void 0:l.playback_video)==null?void 0:N.image)==null?void 0:L.uri,url:l==null?void 0:l.shareable_url,length:(T=l==null?void 0:l.playback_video)==null?void 0:T.length_in_second,cursor:(e==null?void 0:e.cursor)||i.end_cursor,music:l==null?void 0:l.track_title}})}const G=t.lazy(()=>V(()=>import("./ImageLazyPreview-C-11-MGA.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url));function ji({target:n}){const{ti:a}=O(),p=t.useCallback(async(i=[],s)=>{var m;return!(n!=null&&n.id)||!(n!=null&&n.type)?void 0:(s=s||((m=i==null?void 0:i[(i==null?void 0:i.length)-1])==null?void 0:m.cursor)||"",await F({id:n.id,cursor:s}))},[n]),c=t.useCallback(async i=>({url:i.source,name:i.id+".mp4"}),[]),d=t.useCallback(i=>r.jsx($.Item,{children:r.jsxs(o,{direction:"vertical",children:[r.jsx(G,{src:i.thumbnail,width:200,height:300,style:{objectFit:"cover"},cacheId:"reels."+i.id,getPreview:()=>i.source||_(i.id).then(s=>(console.log(s),s.source)),renderPreview:(s,u)=>({destroyOnClose:!0,imageRender:()=>r.jsx(W,{spinning:u,children:r.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:s,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null})}),r.jsx(B.Paragraph,{style:{maxWidth:"150px",wordWrap:"break-word"},onClick:()=>window.open(i.url),children:U(i.description,100)}),r.jsxs(o,{direction:"vertical",size:1,style:{position:"absolute",top:0,left:0,padding:10,paddingBottom:50,width:"100%",background:"linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",pointerEvents:"none"},children:[r.jsxs(o,{children:[r.jsx("i",{className:"fa-regular fa-eye"}),i.viewCount]}),r.jsxs(o,{children:[r.jsx("i",{className:"fa-solid fa-film"}),i.length?q(i.length):null]}),r.jsxs(o,{children:[r.jsx("i",{className:"fa-regular fa-clock"}),A(i.created_time,a({en:"en-US",vi:"vi-VN"}))]}),i.music?r.jsxs(o,{align:"start",size:4,children:[r.jsx("i",{className:"fa-solid fa-music"})," ",i.music]}):null]})]})}),[]);return r.jsx(Q,{collectionName:(n==null?void 0:n.name)+" - Reels",fetchNext:p,renderItem:d,downloadItem:c,getItemCursor:i=>i.cursor,rowKey:i=>i.id,searchPlaceholder:i=>a({en:`Seach in ${i==null?void 0:i.length} Reels`,vi:`Tìm kiếm trong ${i==null?void 0:i.length} Reels`}),onSearch:(i,s)=>M(i,s.description+s.music+A(s.created_time,a({en:"en-US",vi:"vi-VN"})))})}export{ji as default};
