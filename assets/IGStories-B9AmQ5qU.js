import{r as c,ao as i}from"./index-CRvEVTea.js";import{i as h}from"./icons-C74L0H_W.js";import{C as v}from"./Collection-DdkBumAB.js";import{f as y,g as x}from"./index-Bg-uxkef.js";import{a as j,P as _}from"./MyApp-CMaP2Sb_.js";import{L as b}from"./index-Ca-PWtTS.js";import{I as g}from"./index-CJIHXz_-.js";import{A as k}from"./index-BY0fAFGt.js";import"./index-BOjVh4nR.js";import"./file-download-DNZaHCKN.js";import"./index-C20GkxZm.js";import"./Dropdown-CwDNI70S.js";import"./PurePanel-D2b6DsEN.js";import"./index-BuegEcvQ.js";import"./index-DhqHC3Qt.js";import"./index-siwkbsPy.js";import"./TextArea-CIhCrYWI.js";import"./addEventListener-BNkLVAlq.js";import"./index-WuE-WRtK.js";import"./index-vuHwb1ab.js";import"./index-DT5p5SMb.js";import"./responsiveObserver-zyRHL_Wn.js";import"./useBreakpoint-CXECHXlA.js";import"./index-DBtBoJrM.js";import"./index-DMyWxpb4.js";import"./index-DDvvZCbM.js";import"./Pagination-CQHdhERb.js";import"./row-73W9qzy3.js";async function w(s){var d,e,m,l;const a=await y({fb_api_req_friendly_name:"PolarisStoriesV3ReelPageStandaloneDirectQuery",variables:{reel_ids_arr:[s]},doc_id:"8118053404899604"}),n=JSON.parse(a),r=((m=(e=(d=n==null?void 0:n.data)==null?void 0:d.xdt_api__v1__feed__reels_media)==null?void 0:e.reels_media)==null?void 0:m[0])||{};return console.log(n,r),((l=r==null?void 0:r.items)==null?void 0:l.map(o=>{var p,u,f;const t=(u=(p=o.story_music_stickers)==null?void 0:p[0])==null?void 0:u.music_asset_info;return{id:o.id,pk:o.pk,image:x((f=o.image_versions2)==null?void 0:f.candidates),video:x(o.video_versions),video_duration:o.video_duration||0,taken_at:(o.taken_at||0)*1e3,expiring_at:(o.expiring_at||0)*1e3,music:t?(t==null?void 0:t.title)+" - "+(t==null?void 0:t.display_artist):"",latest_reel_media:(r.latest_reel_media||0)*1e3,seen_at:(r.seen||0)*1e3,raw:o}}))||[]}function $({target:s}){const{ti:a}=j(),n=c.useCallback(async e=>s!=null&&s.id?await w(s.id):void 0,[s]),r=c.useCallback(e=>i.jsxs(b.Item,{children:[i.jsx(g,{src:e.image,width:200,height:330,style:{objectFit:"cover"},preview:e.video?{destroyOnClose:!0,imageRender:()=>i.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:e.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}:!0}),e.video&&i.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:h.IGVideo}),i.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 50%)",pointerEvents:"none"},children:i.jsxs("div",{style:{position:"absolute",bottom:15,left:15},children:[e.music&&i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fa-solid fa-music"})," ",e.music,i.jsx("br",{})]}),e.seen_at?i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fa-solid fa-eye"})," ",_(e.seen_at,a)]}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fa-solid fa-eye-slash"})," ",a({en:"Not seen",vi:"Chưa xem"})]}),i.jsx("br",{}),i.jsx("i",{className:"fa-solid fa-clock"})," ",_(e.taken_at,a)]})})]}),[]),d=c.useCallback((e,m)=>{const l=!!e.video;return{url:l?e.video:e.image,name:e.id+(l?".mp4":".jpg")}},[]);return i.jsx(v,{collectionName:(s==null?void 0:s.igName)+" - IG Stories",fetchNext:n,renderItem:r,downloadItem:d,rowKey:e=>e.id,once:!0,header:()=>i.jsx(k,{showIcon:!0,type:"info",message:(s==null?void 0:s.name)+a({en:" will not know you see this story",vi:" sẽ không biết bạn đã xem tin"})})})}export{$ as default};
