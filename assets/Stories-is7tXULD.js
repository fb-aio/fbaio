const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./RecentStoryViewer-Bp1bohcK.js","./index-CKHJa6H8.js","./index-9SBFHPtm.css","./stories-B3k_LoJU.js","./MyApp-DmnFYXMb.js","./StoryViewers-hCCeDZe9.js","./Collection-aQM3HCB9.js","./index-D9yJ61K3.js","./file-download-C5xyVAi3.js","./index-DhvFX8qt.js","./Dropdown-rGtWKJHe.js","./PurePanel-CqHXrOsk.js","./index-BjmMRE_R.js","./index-CeMuHsOx.js","./index-C6-fmtr1.js","./EyeOutlined-CgV8UoEr.js","./SearchOutlined-CdQkKFhK.js","./index-NNF54mwi.js","./Pagination-C-O9TTNX.js","./useBreakpoint-CY4yI6XJ.js","./responsiveObserver-CXhvU71l.js","./index-Cb3stYbZ.js","./row-nvkmIBbn.js","./index-DGHuNzgt.js","./index-Cuge2M-s.js","./index-gQU3uxHK.js","./VideoWithMuted-kDLduKat.js","./index-D6_9vR6G.js","./addEventListener-CyIGRBLo.js"])))=>i.map(i=>d[i]);
import{aG as d,aI as s,r as u,aR as h,ba as y,aK as x}from"./index-CKHJa6H8.js";import{C as f}from"./Collection-aQM3HCB9.js";import{i as b}from"./icons-BfNdBY4c.js";import{S as j,f as w,T as v,g as I}from"./MyApp-DmnFYXMb.js";import{g as k,a as _}from"./stories-B3k_LoJU.js";import{A as S}from"./index-BZcv6KUq.js";import{L as T}from"./index-NNF54mwi.js";import{I as N}from"./index-D6_9vR6G.js";import{T as a}from"./index-C6-fmtr1.js";import"./index-D9yJ61K3.js";import"./file-download-C5xyVAi3.js";import"./index-DhvFX8qt.js";import"./Dropdown-rGtWKJHe.js";import"./PurePanel-CqHXrOsk.js";import"./index-BjmMRE_R.js";import"./index-CeMuHsOx.js";import"./EyeOutlined-CgV8UoEr.js";import"./SearchOutlined-CdQkKFhK.js";import"./index-DGHuNzgt.js";import"./Pagination-C-O9TTNX.js";import"./useBreakpoint-CY4yI6XJ.js";import"./responsiveObserver-CXhvU71l.js";import"./index-Cb3stYbZ.js";import"./row-nvkmIBbn.js";import"./addEventListener-CyIGRBLo.js";const R=u.lazy(()=>h(()=>import("./RecentStoryViewer-Bp1bohcK.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]),import.meta.url));function so({target:e}){const{ti:i}=d(),t=(e==null?void 0:e.name)+" - Stories",c=async(o=[],n)=>{if(!(e!=null&&e.id))return;const{bucketId:r,firstStoryId:p}=await k(e==null?void 0:e.id);return!r||!p?[]:await _(r)},m=(o,n)=>{const r=o.seen?s.jsx("span",{children:"👀"}):s.jsx("i",{className:"fa fa-eye-slash",style:{color:"gray"}});return s.jsxs(T.Item,{className:"show-on-hover-trigger",children:[s.jsxs(j,{direction:"vertical",style:{position:"relative"},children:[s.jsx(N,{src:o.thumbnail,fallback:o.image,style:{width:200,height:330,borderRadius:10,objectFit:"cover"},preview:{destroyOnClose:!0,imageRender:()=>s.jsx(R,{story:{bucket_id:o.bucket_id,owner:e},bucketsData:w("Collection.data."+t)||[],index:n}),toolbarRender:()=>null}}),s.jsx(v,{placement:"bottom",title:s.jsxs(s.Fragment,{children:[r," ",e==null?void 0:e.name,o.seen?i({en:" KNOWS you saw",vi:" BIẾT bạn đã xem"}):i({en:" DOESN'T know you saw",vi:" KHÔNG biết bạn đã xem"})]}),children:s.jsxs(a.Text,{children:[r," ",y(o.creation_time*1e3)," ",i({vi:"trước",en:"ago"}),s.jsx("br",{}),o.react_count," reactions ",o.reaction]})}),o.caption&&s.jsx(a.Text,{children:o.caption}),o.video&&s.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:b.IGVideo})]}),s.jsx(x,{type:"default",icon:s.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:I("/stories/"+o.bucket_id+"/"+o.id)})]})},l=async(o,n)=>({name:o.id+(o.video?".mp4":".jpg"),url:o.video||o.image});return s.jsx(f,{collectionName:t,fetchNext:c,renderItem:m,downloadItem:l,rowKey:o=>o.id,once:!0,header:o=>s.jsx(S,{showIcon:!0,type:"info",message:(e==null?void 0:e.name)+(o!=null&&o.length?i({en:" will not know you see this story",vi:" sẽ không biết bạn đã xem tin"}):i({en:" has no story today",vi:" không có tin nào hôm nay"}))})})}export{so as default};