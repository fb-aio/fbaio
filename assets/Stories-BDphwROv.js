const __vite__fileDeps=["./RecentStoryViewer-DC__JWqq.js","./index-ByGmV8wY.js","./index-8IR6ngH_.css","./stories-B-YzL2Xu.js","./MyApp-Cf4CvXy6.js","./StoryViewers-ULRzUy3u.js","./Collection-Bma6J-H2.js","./index-ByQEONc7.js","./file-download-DWpNkdW1.js","./index-CA_CSnEN.js","./Dropdown-1utTObuE.js","./PurePanel-BK6FE9J4.js","./index-CTwdTgyj.js","./index-CAwe5p4m.js","./index-C6JBQopa.js","./TextArea-DScjjSy-.js","./addEventListener-Bhq-MnRc.js","./index-BvybQ130.js","./index-Dy3wdtHH.js","./Pagination-D0T4RzoK.js","./useBreakpoint-DggrOhr0.js","./responsiveObserver-BKXjylYU.js","./row-BEmum6s0.js","./index-FATJf7Rf.js","./index-B8vL0BIN.js","./index-TtFCHt-Z.js","./index-DmSTfwAr.js","./index-BPTgN8dl.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{ap as i,r as d,au as u}from"./index-ByGmV8wY.js";import{u as y,b as h,w as x,T as f,$ as b}from"./MyApp-Cf4CvXy6.js";import{C as w}from"./Collection-Bma6J-H2.js";import{i as j}from"./icons-8opWgytk.js";import{g as v,a as I}from"./stories-B-YzL2Xu.js";import{A as k}from"./index-_Y4w2-Re.js";import{L as T}from"./index-Dy3wdtHH.js";import{I as _}from"./index-BPTgN8dl.js";import{T as c}from"./index-B8vL0BIN.js";import"./index-ByQEONc7.js";import"./file-download-DWpNkdW1.js";import"./index-CA_CSnEN.js";import"./Dropdown-1utTObuE.js";import"./PurePanel-BK6FE9J4.js";import"./index-CTwdTgyj.js";import"./index-CAwe5p4m.js";import"./index-C6JBQopa.js";import"./TextArea-DScjjSy-.js";import"./addEventListener-Bhq-MnRc.js";import"./index-BvybQ130.js";import"./index-FATJf7Rf.js";import"./Pagination-D0T4RzoK.js";import"./useBreakpoint-DggrOhr0.js";import"./responsiveObserver-BKXjylYU.js";import"./row-BEmum6s0.js";const S=d.lazy(()=>u(()=>import("./RecentStoryViewer-DC__JWqq.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]),import.meta.url));function g({target:e}){const{ti:s}=y(),t=(e==null?void 0:e.name)+" - Stories",a=async(o=[],n)=>{if(!(e!=null&&e.id))return;const{bucketId:r,firstStoryId:l}=await v(e==null?void 0:e.id);return!r||!l?[]:await I(r)},m=(o,n)=>{const r=o.seen?i.jsx("span",{children:"👀"}):i.jsx("i",{className:"fa fa-eye-slash",style:{color:"gray"}});return i.jsx(T.Item,{children:i.jsxs(h,{direction:"vertical",style:{position:"relative"},children:[i.jsx(_,{src:o.thumbnail,fallback:o.image,style:{width:160,height:270,borderRadius:10,objectFit:"cover"},preview:{destroyOnClose:!0,imageRender:()=>i.jsx(S,{story:{bucket_id:o.bucket_id,owner:e},bucketsData:x("Collection.data."+t)||[],index:n}),toolbarRender:()=>null}}),i.jsx(f,{placement:"bottom",title:i.jsxs(i.Fragment,{children:[r," ",e==null?void 0:e.name,o.seen?s({en:" KNOWS you saw",vi:" BIẾT bạn đã xem"}):s({en:" DOESN'T know you saw",vi:" KHÔNG biết bạn đã xem"})]}),children:i.jsxs(c.Text,{children:[r," ",b(o.creation_time*1e3,s)," ",s({vi:"trước",en:"ago"}),i.jsx("br",{}),o.react_count," reactions ",o.reaction]})}),o.caption&&i.jsx(c.Text,{children:o.caption}),o.video&&i.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:j.IGVideo})]})})},p=async(o,n)=>({name:o.id+(o.video?".mp4":".jpg"),url:o.video||o.image});return i.jsx(w,{collectionName:t,fetchNext:a,renderItem:m,downloadItem:p,rowKey:o=>o.id,once:!0,header:o=>i.jsx(k,{showIcon:!0,type:"info",message:(e==null?void 0:e.name)+(o!=null&&o.length?s({en:" will not know you see this story",vi:" sẽ không biết bạn đã xem tin"}):s({en:" has no story today",vi:" không có tin nào hôm nay"}))})})}export{g as default};
