import{r as c,ap as i}from"./index-DTuD-gIZ.js";import{i as h}from"./icons-BRnCUKbM.js";import{C as v}from"./Collection-C7y85cPw.js";import{u as y,Z as x}from"./MyApp-DtkI4uVN.js";import{f as j,c as _}from"./index-CTIViboB.js";import{L as b}from"./index-1ym4-CGc.js";import{I as g}from"./index-CEjM6kgT.js";import{A as k}from"./index-CJfXeNnw.js";import"./index-DR1hYV1u.js";import"./file-download-BxyMbgCF.js";import"./index-YK4cqQAU.js";import"./Dropdown-WJci-lrt.js";import"./PurePanel-DTld5f7k.js";import"./index-DQHvppe9.js";import"./index-Dfr6ccrC.js";import"./index-BSvqTJ67.js";import"./TextArea-DczNLlkO.js";import"./addEventListener-BR1Ua7IP.js";import"./index-CN34XEQ3.js";import"./index-wrcCNw01.js";import"./index-cMZkzR7Z.js";import"./responsiveObserver-B7hb1Qq-.js";import"./useBreakpoint-VJPzTbg_.js";import"./index-BaCXpj60.js";import"./index-CeJUsa8-.js";import"./index-zp-XfHau.js";import"./index-B4uCDt1_.js";import"./Pagination-Dz0gbM3B.js";import"./row-DyEezz8y.js";async function w(s){var m,e,d,l;const a=await j({fb_api_req_friendly_name:"PolarisStoriesV3ReelPageStandaloneDirectQuery",variables:{reel_ids_arr:[s]},doc_id:"8118053404899604"}),n=JSON.parse(a),r=((d=(e=(m=n==null?void 0:n.data)==null?void 0:m.xdt_api__v1__feed__reels_media)==null?void 0:e.reels_media)==null?void 0:d[0])||{};return console.log(n,r),((l=r==null?void 0:r.items)==null?void 0:l.map(o=>{var p,u,f;const t=(u=(p=o.story_music_stickers)==null?void 0:p[0])==null?void 0:u.music_asset_info;return{id:o.id,pk:o.pk,image:_((f=o.image_versions2)==null?void 0:f.candidates),video:_(o.video_versions),video_duration:o.video_duration||0,taken_at:(o.taken_at||0)*1e3,expiring_at:(o.expiring_at||0)*1e3,music:t?(t==null?void 0:t.title)+" - "+(t==null?void 0:t.display_artist):"",latest_reel_media:(r.latest_reel_media||0)*1e3,seen_at:(r.seen||0)*1e3,raw:o}}))||[]}function ee({target:s}){const{ti:a}=y(),n=c.useCallback(async e=>s!=null&&s.id?await w(s.id):void 0,[s]),r=c.useCallback(e=>i.jsxs(b.Item,{children:[i.jsx(g,{src:e.image,width:200,height:330,style:{objectFit:"cover"},preview:e.video?{destroyOnClose:!0,imageRender:()=>i.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:e.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}:!0}),e.video&&i.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:h.IGVideo}),i.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 50%)",pointerEvents:"none"},children:i.jsxs("div",{style:{position:"absolute",bottom:15,left:15},children:[e.music&&i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fa-solid fa-music"})," ",e.music,i.jsx("br",{})]}),e.seen_at?i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fa-solid fa-eye"})," ",x(e.seen_at,a)]}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fa-solid fa-eye-slash"})," ",a({en:"Not seen",vi:"Chưa xem"})]}),i.jsx("br",{}),i.jsx("i",{className:"fa-solid fa-clock"})," ",x(e.taken_at,a)]})})]}),[]),m=c.useCallback((e,d)=>{const l=!!e.video;return{url:l?e.video:e.image,name:e.id+(l?".mp4":".jpg")}},[]);return i.jsx(v,{collectionName:(s==null?void 0:s.igName)+" - IG Stories",fetchNext:n,renderItem:r,downloadItem:m,rowKey:e=>e.id,once:!0,header:()=>i.jsx(k,{showIcon:!0,type:"info",message:(s==null?void 0:s.name)+a({en:" will not know you see this story",vi:" sẽ không biết bạn đã xem tin"})})})}export{ee as default};