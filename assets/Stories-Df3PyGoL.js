const __vite__fileDeps=["./RecentStoryViewer-CYRxlVcv.js","./index-Dtcmp6JY.js","./index-CKPZ9v0x.css","./stories-DZ4COB9R.js","./MyApp-kb2kLbdm.js","./StoryViewers-DzyFy0RW.js","./Collection-6KaBV5vS.js","./index-C9OcZAjD.js","./file-download-D0pOs_wu.js","./index-DNTQT7gA.js","./Dropdown-CC556hNY.js","./PurePanel-DOe6UZy0.js","./index-BBtJNEHe.js","./index-BXlTncM9.js","./index-DZsyOE7S.js","./index-2mBF6Cjd.js","./addEventListener-DKefG3W_.js","./index-Dk3A3vwr.js","./index-uq76Aye9.js","./Pagination-Bvmy2umP.js","./useBreakpoint-tPbU-N1e.js","./row-DazFjwcO.js","./index-5bSgvpJQ.js","./index-B-BpTNJ8.js","./index-C2IP6V-E.js","./index-DpAHl3Pf.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{av as i,r as d,aA as u}from"./index-Dtcmp6JY.js";import{u as y,b as h,w as x,T as f,a2 as b}from"./MyApp-kb2kLbdm.js";import{C as w}from"./Collection-6KaBV5vS.js";import{i as j}from"./icons-BSngMM9L.js";import{g as v,a as I}from"./stories-DZ4COB9R.js";import{A as k}from"./index-DqdNzZ8h.js";import{L as T}from"./index-uq76Aye9.js";import{I as _}from"./index-DpAHl3Pf.js";import{T as c}from"./index-2mBF6Cjd.js";import"./index-C9OcZAjD.js";import"./file-download-D0pOs_wu.js";import"./index-DNTQT7gA.js";import"./Dropdown-CC556hNY.js";import"./PurePanel-DOe6UZy0.js";import"./index-BBtJNEHe.js";import"./index-BXlTncM9.js";import"./index-DZsyOE7S.js";import"./addEventListener-DKefG3W_.js";import"./index-Dk3A3vwr.js";import"./index-5bSgvpJQ.js";import"./Pagination-Bvmy2umP.js";import"./useBreakpoint-tPbU-N1e.js";import"./row-DazFjwcO.js";const S=d.lazy(()=>u(()=>import("./RecentStoryViewer-CYRxlVcv.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]),import.meta.url));function Z({target:e}){const{ti:s}=y(),t=(e==null?void 0:e.name)+" - Stories",a=async(o=[],r)=>{if(!(e!=null&&e.id))return;const{bucketId:n,firstStoryId:p}=await v(e==null?void 0:e.id);return!n||!p?[]:await I(n)},m=(o,r)=>{const n=o.seen?i.jsx("span",{children:"👀"}):i.jsx("i",{className:"fa fa-eye-slash",style:{color:"gray"}});return i.jsx(T.Item,{children:i.jsxs(h,{direction:"vertical",style:{position:"relative"},children:[i.jsx(_,{src:o.thumbnail,fallback:o.image,style:{width:160,height:270,borderRadius:10,objectFit:"cover"},preview:{destroyOnClose:!0,imageRender:()=>i.jsx(S,{story:{bucket_id:o.bucket_id,owner:e},bucketsData:x("Collection.data."+t)||[],index:r}),toolbarRender:()=>null}}),i.jsx(f,{placement:"bottom",title:i.jsxs(i.Fragment,{children:[n," ",e==null?void 0:e.name,o.seen?s({en:" KNOWS you saw",vi:" BIẾT bạn đã xem"}):s({en:" DOESN'T know you saw",vi:" KHÔNG biết bạn đã xem"})]}),children:i.jsxs(c.Text,{children:[n," ",b(o.creation_time*1e3,s)," ",s({vi:"trước",en:"ago"}),i.jsx("br",{}),o.react_count," reactions ",o.reaction]})}),o.caption&&i.jsx(c.Text,{children:o.caption}),o.video&&i.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:j.IGVideo})]})})},l=async(o,r)=>({name:o.id+(o.video?".mp4":".jpg"),url:o.video||o.image});return i.jsx(w,{collectionName:t,fetchNext:a,renderItem:m,downloadItem:l,rowKey:o=>o.id,once:!0,header:o=>i.jsx(k,{showIcon:!0,type:"info",message:(e==null?void 0:e.name)+(o!=null&&o.length?s({en:" will not know you see this story",vi:" sẽ không biết bạn đã xem tin"}):s({en:" has no story today",vi:" không có tin nào hôm nay"}))})})}export{Z as default};
