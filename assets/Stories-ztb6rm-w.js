const __vite__fileDeps=["./RecentStoryViewer-6oZ0n7Z9.js","./index-BZzsVo5e.js","./index-DfqnkV-X.css","./stories-CdKGNOoQ.js","./MyApp-DyLC-RHb.js","./StoryViewers-BBBMUhK_.js","./Collection-5aMhuQAI.js","./index-Ur4nr8nl.js","./file-download-Dp--CWrA.js","./index-DK4sUwzQ.js","./Dropdown-DCm_2Ujr.js","./PurePanel-CP-xAv6_.js","./index-CLvvq23o.js","./index-CVKBU6wa.js","./index-CljnAMR0.js","./EyeOutlined-iKkuVyfy.js","./SearchOutlined-BIlkrEky.js","./index-C95i2ZXQ.js","./Pagination-CcHme1eM.js","./useBreakpoint-CSe0XBg_.js","./responsiveObserver-BtQ_ovyL.js","./index-BCnZL0D9.js","./row-C4Sb7dtG.js","./index-CvIOFmQi.js","./index-DnRFqO-f.js","./index-CdUH9mDB.js","./VideoWithMuted-C5AR9zlm.js","./index-Dn2ePVUt.js","./addEventListener-C1thYwwy.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{av as s,r as d,aA as u,aw as h}from"./index-BZzsVo5e.js";import{u as y,b as x,x as f,T as b,a7 as w,h as j}from"./MyApp-DyLC-RHb.js";import{C as v}from"./Collection-5aMhuQAI.js";import{i as I}from"./icons-61-r-JJA.js";import{g as k,a as _}from"./stories-CdKGNOoQ.js";import{A as T}from"./index-Cp7qG9Yr.js";import{L as N}from"./index-C95i2ZXQ.js";import{I as S}from"./index-Dn2ePVUt.js";import{T as a}from"./index-CljnAMR0.js";import"./index-Ur4nr8nl.js";import"./file-download-Dp--CWrA.js";import"./index-DK4sUwzQ.js";import"./Dropdown-DCm_2Ujr.js";import"./PurePanel-CP-xAv6_.js";import"./index-CLvvq23o.js";import"./index-CVKBU6wa.js";import"./EyeOutlined-iKkuVyfy.js";import"./SearchOutlined-BIlkrEky.js";import"./index-CvIOFmQi.js";import"./Pagination-CcHme1eM.js";import"./useBreakpoint-CSe0XBg_.js";import"./responsiveObserver-BtQ_ovyL.js";import"./index-BCnZL0D9.js";import"./row-C4Sb7dtG.js";import"./addEventListener-C1thYwwy.js";const C=d.lazy(()=>u(()=>import("./RecentStoryViewer-6oZ0n7Z9.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]),import.meta.url));function so({target:e}){const{ti:i}=y(),t=(e==null?void 0:e.name)+" - Stories",c=async(o=[],n)=>{if(!(e!=null&&e.id))return;const{bucketId:r,firstStoryId:p}=await k(e==null?void 0:e.id);return!r||!p?[]:await _(r)},m=(o,n)=>{const r=o.seen?s.jsx("span",{children:"👀"}):s.jsx("i",{className:"fa fa-eye-slash",style:{color:"gray"}});return s.jsxs(N.Item,{className:"show-on-hover-trigger",children:[s.jsxs(x,{direction:"vertical",style:{position:"relative"},children:[s.jsx(S,{src:o.thumbnail,fallback:o.image,style:{width:200,height:330,borderRadius:10,objectFit:"cover"},preview:{destroyOnClose:!0,imageRender:()=>s.jsx(C,{story:{bucket_id:o.bucket_id,owner:e},bucketsData:f("Collection.data."+t)||[],index:n}),toolbarRender:()=>null}}),s.jsx(b,{placement:"bottom",title:s.jsxs(s.Fragment,{children:[r," ",e==null?void 0:e.name,o.seen?i({en:" KNOWS you saw",vi:" BIẾT bạn đã xem"}):i({en:" DOESN'T know you saw",vi:" KHÔNG biết bạn đã xem"})]}),children:s.jsxs(a.Text,{children:[r," ",w(o.creation_time*1e3)," ",i({vi:"trước",en:"ago"}),s.jsx("br",{}),o.react_count," reactions ",o.reaction]})}),o.caption&&s.jsx(a.Text,{children:o.caption}),o.video&&s.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:I.IGVideo})]}),s.jsx(h,{type:"default",icon:s.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:j("/stories/"+o.bucket_id+"/"+o.id)})]})},l=async(o,n)=>({name:o.id+(o.video?".mp4":".jpg"),url:o.video||o.image});return s.jsx(v,{collectionName:t,fetchNext:c,renderItem:m,downloadItem:l,rowKey:o=>o.id,once:!0,header:o=>s.jsx(T,{showIcon:!0,type:"info",message:(e==null?void 0:e.name)+(o!=null&&o.length?i({en:" will not know you see this story",vi:" sẽ không biết bạn đã xem tin"}):i({en:" has no story today",vi:" không có tin nào hôm nay"}))})})}export{so as default};