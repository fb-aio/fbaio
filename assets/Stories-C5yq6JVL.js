const __vite__fileDeps=["./RecentStoryViewer-UZCwVGd0.js","./index-DYL9mGRk.js","./index-DfqnkV-X.css","./stories-k3u8P7E8.js","./MyApp-CY91n_UU.js","./StoryViewers-DeO2L6Pi.js","./Collection-Cynkg5cH.js","./index-jXD-uTg2.js","./file-download-LORRQMXp.js","./index-mtlhtjeL.js","./Dropdown-DpGZ-54l.js","./PurePanel-D2NXTZJr.js","./index-CLojzUjG.js","./index-ChQriLID.js","./index-CQ3mEa-C.js","./EyeOutlined-Bo--TrFD.js","./SearchOutlined-kCsLe9-_.js","./index-C7kSB3_N.js","./Pagination-Bg_a53Jb.js","./useBreakpoint-C8WlvIiC.js","./responsiveObserver-BnIQ_d1A.js","./index-CPiUW4dB.js","./row-CxkJK_hv.js","./index-BAnf6eLO.js","./index-wa6PYU7D.js","./index-AXqc-_Av.js","./VideoWithMuted-CpoKlLPp.js","./index-YJnDJyza.js","./addEventListener-BL59v1cY.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{av as s,r as d,aA as u,aw as h}from"./index-DYL9mGRk.js";import{u as y,b as x,w as f,T as b,a6 as w,g as j}from"./MyApp-CY91n_UU.js";import{C as v}from"./Collection-Cynkg5cH.js";import{i as I}from"./icons-LqzAKWUB.js";import{g as k,a as _}from"./stories-k3u8P7E8.js";import{A as T}from"./index-CgJ96nV-.js";import{L as N}from"./index-C7kSB3_N.js";import{I as S}from"./index-YJnDJyza.js";import{T as a}from"./index-CQ3mEa-C.js";import"./index-jXD-uTg2.js";import"./file-download-LORRQMXp.js";import"./index-mtlhtjeL.js";import"./Dropdown-DpGZ-54l.js";import"./PurePanel-D2NXTZJr.js";import"./index-CLojzUjG.js";import"./index-ChQriLID.js";import"./EyeOutlined-Bo--TrFD.js";import"./SearchOutlined-kCsLe9-_.js";import"./index-BAnf6eLO.js";import"./Pagination-Bg_a53Jb.js";import"./useBreakpoint-C8WlvIiC.js";import"./responsiveObserver-BnIQ_d1A.js";import"./index-CPiUW4dB.js";import"./row-CxkJK_hv.js";import"./addEventListener-BL59v1cY.js";const C=d.lazy(()=>u(()=>import("./RecentStoryViewer-UZCwVGd0.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]),import.meta.url));function so({target:e}){const{ti:i}=y(),t=(e==null?void 0:e.name)+" - Stories",c=async(o=[],n)=>{if(!(e!=null&&e.id))return;const{bucketId:r,firstStoryId:p}=await k(e==null?void 0:e.id);return!r||!p?[]:await _(r)},m=(o,n)=>{const r=o.seen?s.jsx("span",{children:"👀"}):s.jsx("i",{className:"fa fa-eye-slash",style:{color:"gray"}});return s.jsxs(N.Item,{className:"show-on-hover-trigger",children:[s.jsxs(x,{direction:"vertical",style:{position:"relative"},children:[s.jsx(S,{src:o.thumbnail,fallback:o.image,style:{width:200,height:330,borderRadius:10,objectFit:"cover"},preview:{destroyOnClose:!0,imageRender:()=>s.jsx(C,{story:{bucket_id:o.bucket_id,owner:e},bucketsData:f("Collection.data."+t)||[],index:n}),toolbarRender:()=>null}}),s.jsx(b,{placement:"bottom",title:s.jsxs(s.Fragment,{children:[r," ",e==null?void 0:e.name,o.seen?i({en:" KNOWS you saw",vi:" BIẾT bạn đã xem"}):i({en:" DOESN'T know you saw",vi:" KHÔNG biết bạn đã xem"})]}),children:s.jsxs(a.Text,{children:[r," ",w(o.creation_time*1e3)," ",i({vi:"trước",en:"ago"}),s.jsx("br",{}),o.react_count," reactions ",o.reaction]})}),o.caption&&s.jsx(a.Text,{children:o.caption}),o.video&&s.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:I.IGVideo})]}),s.jsx(h,{type:"default",icon:s.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:j("/stories/"+o.bucket_id+"/"+o.id)})]})},l=async(o,n)=>({name:o.id+(o.video?".mp4":".jpg"),url:o.video||o.image});return s.jsx(v,{collectionName:t,fetchNext:c,renderItem:m,downloadItem:l,rowKey:o=>o.id,once:!0,header:o=>s.jsx(T,{showIcon:!0,type:"info",message:(e==null?void 0:e.name)+(o!=null&&o.length?i({en:" will not know you see this story",vi:" sẽ không biết bạn đã xem tin"}):i({en:" has no story today",vi:" không có tin nào hôm nay"}))})})}export{so as default};