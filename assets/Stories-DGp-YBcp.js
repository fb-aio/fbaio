const __vite__fileDeps=["./RecentStoryViewer-CNhy8kQd.js","./index-D-TwGz9N.js","./index-DjlRUb8J.css","./stories-Dt9ubB1P.js","./MyApp-Cejdv6ZL.js","./StoryViewers-Cm4MUX61.js","./Collection-An_oqZv4.js","./index-VslQ8qV6.js","./file-download-onPpIa5t.js","./index-zQD9NEyF.js","./Dropdown-D1K-Vskr.js","./PurePanel-BDa0MmHH.js","./index-rbeP8vXY.js","./index-N_U1QgmY.js","./index-v3yv7FLt.js","./TextArea-CHJzE-9X.js","./addEventListener-BUvCU8-r.js","./index-BR7okoe6.js","./index-DDBRtC0r.js","./Pagination-BDvKZw1u.js","./useBreakpoint-BhhYBtp1.js","./responsiveObserver-BiRBbfDg.js","./row-DnrFtQqy.js","./index-BJE3p2zb.js","./index-DMA1r5xH.js","./index-CEF-y8JS.js","./index-DlPa_58g.js","./index-CJjKWNBH.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{ap as i,r as d,at as u}from"./index-D-TwGz9N.js";import{u as y,a as h,q as x,T as f,Z as b}from"./MyApp-Cejdv6ZL.js";import{C as j}from"./Collection-An_oqZv4.js";import{i as w}from"./icons-DH7DKQTt.js";import{g as v,a as I}from"./stories-Dt9ubB1P.js";import{A as k}from"./index-BqZYeFdw.js";import{L as T}from"./index-DDBRtC0r.js";import{I as _}from"./index-CJjKWNBH.js";import{T as c}from"./index-DMA1r5xH.js";import"./index-VslQ8qV6.js";import"./file-download-onPpIa5t.js";import"./index-zQD9NEyF.js";import"./Dropdown-D1K-Vskr.js";import"./PurePanel-BDa0MmHH.js";import"./index-rbeP8vXY.js";import"./index-N_U1QgmY.js";import"./index-v3yv7FLt.js";import"./TextArea-CHJzE-9X.js";import"./addEventListener-BUvCU8-r.js";import"./index-BR7okoe6.js";import"./index-BJE3p2zb.js";import"./Pagination-BDvKZw1u.js";import"./useBreakpoint-BhhYBtp1.js";import"./responsiveObserver-BiRBbfDg.js";import"./row-DnrFtQqy.js";const S=d.lazy(()=>u(()=>import("./RecentStoryViewer-CNhy8kQd.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]),import.meta.url));function g({target:e}){const{ti:s}=y(),t=(e==null?void 0:e.name)+" - Stories",a=async(o=[],n)=>{if(!(e!=null&&e.id))return;const{bucketId:r,firstStoryId:l}=await v(e==null?void 0:e.id);return!r||!l?[]:await I(r)},m=(o,n)=>{const r=o.seen?i.jsx("span",{children:"👀"}):i.jsx("i",{className:"fa fa-eye-slash",style:{color:"gray"}});return i.jsx(T.Item,{children:i.jsxs(h,{direction:"vertical",style:{position:"relative"},children:[i.jsx(_,{src:o.thumbnail,fallback:o.image,style:{width:160,height:270,borderRadius:10,objectFit:"cover"},preview:{destroyOnClose:!0,imageRender:()=>i.jsx(S,{story:{bucket_id:o.bucket_id,owner:e},bucketsData:x("Collection.data."+t)||[],index:n}),toolbarRender:()=>null}}),i.jsx(f,{placement:"bottom",title:i.jsxs(i.Fragment,{children:[r," ",e==null?void 0:e.name,o.seen?s({en:" KNOWS you saw",vi:" BIẾT bạn đã xem"}):s({en:" DOESN'T know you saw",vi:" KHÔNG biết bạn đã xem"})]}),children:i.jsxs(c.Text,{children:[r," ",b(o.creation_time*1e3,s)," ",s({vi:"trước",en:"ago"}),i.jsx("br",{}),o.react_count," reactions ",o.reaction]})}),o.caption&&i.jsx(c.Text,{children:o.caption}),o.video&&i.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:w.IGVideo})]})})},p=async(o,n)=>({name:o.id+(o.video?".mp4":".jpg"),url:o.video||o.image});return i.jsx(j,{collectionName:t,fetchNext:a,renderItem:m,downloadItem:p,rowKey:o=>o.id,once:!0,header:o=>i.jsx(k,{showIcon:!0,type:"info",message:(e==null?void 0:e.name)+(o!=null&&o.length?s({en:" will not know you see this story",vi:" sẽ không biết bạn đã xem tin"}):s({en:" has no story today",vi:" không có tin nào hôm nay"}))})})}export{g as default};
