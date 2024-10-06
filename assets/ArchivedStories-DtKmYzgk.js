const __vite__fileDeps=["./ArchivedStoryViewer-BW4gx1lK.js","./index-Cu5DMrqP.js","./index-DfqnkV-X.css","./MyApp-CBJyifzj.js","./StoryViewers-v0rUOjtX.js","./Collection-gHxE2ssH.js","./index-CGIy8z5y.js","./file-download-CQflNR56.js","./index-BfGp5EFc.js","./Dropdown-4O0oXYv8.js","./PurePanel-Cc9k44PN.js","./index-BEDMcvkp.js","./index-VDeELPdW.js","./index-mZ6bkR5V.js","./index-B6wF2DLX.js","./EyeOutlined-FHe3ptwe.js","./SearchOutlined-BE8biauy.js","./index-Bsb2O4uF.js","./Pagination-ttRdgmts.js","./useBreakpoint-otqirn5h.js","./responsiveObserver-eHs-qAkp.js","./index-DhpzbMQc.js","./row-G-tErKJJ.js","./index-Mn7J1M2X.js","./stories-C86UFp90.js","./index-D-ReONQg.js","./index-CdtiqYN9.js","./VideoWithMuted-BbnuUaI6.js","./index-uKhnUYaa.js","./addEventListener-BX9_jEDV.js","./index-D3paQuS4.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as u,av as o,aA as S,aw as m,aN as _}from"./index-Cu5DMrqP.js";import{u as C,c as T,t as p,b as f,au as A,f as N,g as D,w as E,z as F,L as I}from"./MyApp-CBJyifzj.js";import{C as $}from"./Collection-gHxE2ssH.js";import{d as L,e as B,f as R}from"./stories-C86UFp90.js";import{L as V}from"./index-Bsb2O4uF.js";import{I as X}from"./index-uKhnUYaa.js";import{T as h}from"./index-B6wF2DLX.js";import{P as z}from"./index-DiK34m4R.js";import"./index-CGIy8z5y.js";import"./file-download-CQflNR56.js";import"./index-BfGp5EFc.js";import"./Dropdown-4O0oXYv8.js";import"./PurePanel-Cc9k44PN.js";import"./index-BEDMcvkp.js";import"./index-VDeELPdW.js";import"./index-mZ6bkR5V.js";import"./EyeOutlined-FHe3ptwe.js";import"./SearchOutlined-BE8biauy.js";import"./index-Mn7J1M2X.js";import"./Pagination-ttRdgmts.js";import"./useBreakpoint-otqirn5h.js";import"./responsiveObserver-eHs-qAkp.js";import"./index-DhpzbMQc.js";import"./row-G-tErKJJ.js";import"./addEventListener-BX9_jEDV.js";import"./index-CdtiqYN9.js";const K=u.lazy(()=>S(()=>import("./ArchivedStoryViewer-BW4gx1lK.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]),import.meta.url));function fe(){const{ti:r}=C(),{message:c,notification:y}=T();u.useEffect(()=>{p("ArchivedStories:onLoad")},[]);const x=async(e,n)=>{var t;return await L(n||((t=e==null?void 0:e[e.length-1])==null?void 0:t.cursor)||"")},g=async(e,n)=>{const i="ArchivedStories.deleteStory";p(i);const t=i+e.id;c.loading({key:t,content:r({en:"Deleting story...",vi:"Đang xóa story..."}),duration:0});const a=await R(e.id);return n(s=>_(s,l=>{const d=l.find(k=>k.id===e.id);return d&&(d.deleted=!0),l})),a?(c.success({key:t,content:r({en:"Story deleted!",vi:"Đã xóa story!"})}),!0):(c.error({key:t,content:r({en:"Failed to delete story!",vi:"Chưa xóa được story!"})}),!1)},v=async(e,n)=>{const i="ArchivedStories.deleteSelectedStories";p(i);let t=0,a=!1;for(let s=0;s<e.length&&!a;s++){const l=e[s];c.loading({key:i,content:o.jsxs(o.Fragment,{children:[r({en:"Deleting stories...",vi:"Đang xóa story..."})+` ${s+1}/${e.length}`,o.jsx("br",{}),o.jsx("i",{children:r({en:"Click to stop",vi:"Click để dừng"})})]}),duration:0,onClick:()=>{a=!0}}),await g(l,n)&&t++}c.destroy(i),y.open({type:"success",message:r({en:"Stories deleted!",vi:"Xóa story xong!"}),description:r({en:`Deleted ${t}/${e.length} stories!`,vi:`Đã xóa ${t}/${e.length} story!`})})},j=(e,n,i)=>{const t=e.deleted;return o.jsxs(V.Item,{className:"show-on-hover-trigger",children:[o.jsx(X,{src:e.thumbnail,style:{width:160,height:270,borderRadius:10,objectFit:"cover"},preview:t?!1:{destroyOnClose:!0,toolbarRender:()=>null,imageRender:()=>o.jsx(K,{story:e})}}),o.jsxs(f,{direction:"vertical",style:{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",position:"absolute",bottom:0,left:0,width:"100%",padding:"5px 10px",paddingTop:"50px",pointerEvents:"none"},children:[t&&o.jsx(h.Text,{style:{color:"red",fontWeight:"bold",backgroundColor:"#3339",padding:5,fontSize:"1.2em",width:"100%"},children:r({en:"DELETED",vi:"ĐÃ XOÁ"})}),o.jsxs(h.Text,{style:{color:"#ccc"},children:[o.jsxs("span",{children:[o.jsx("i",{className:"fa fa-eye"})," ",e.seen_count]}),o.jsx("br",{}),o.jsxs("span",{children:[o.jsx("i",{className:"fa fa-clock"})," ",A(new Date().getTime()-new Date(e.creation_time).getTime())]}),o.jsx("br",{}),N(new Date(e.creation_time),r({en:"en-US",vi:"vi-VN"}))]})]}),!t&&o.jsxs(f,{className:"show-on-hover-item",style:{position:"absolute",top:10,right:10},size:3,children:[o.jsx(z,{title:r({en:"Delete this story?",vi:"Xoá story này?"}),onConfirm:()=>g(e,i),children:o.jsx(m,{danger:!0,type:"default",icon:o.jsx("i",{className:"fa-solid fa-trash-can"})})}),o.jsx(m,{type:"default",icon:o.jsx("i",{className:"fa-solid fa-up-right-from-square"}),target:"_blank",href:D("stories/?card_id="+e.id)})]})]})},w=async e=>{const n="ArchivedStoryViewer.stories."+e.creation_time,i=E(n)||await B({creationTime:e.creation_time});F(n,i);const t=i.find(s=>s.id===e.id),a=I(new Date(e.creation_time));return[{url:(t==null?void 0:t.video)||(t==null?void 0:t.image)||"",name:a+(t!=null&&t.video?".mp4":".jpg")},{url:(t==null?void 0:t.image_background)||"",name:a+"_bg.jpg"}].filter(s=>s==null?void 0:s.url)},b=e=>o.jsx(m,{onClick:()=>{window.open("https://www.facebook.com/me/allactivity?log_filter=archivedstories","_blank")},icon:o.jsx("i",{className:"fa fa-external-link-alt"}),children:r({vi:"Xem trên Facebook",en:"View on Facebook"})},"view-fb");return o.jsx($,{collectionName:"Archived Stories",fetchNext:x,renderItem:j,downloadItem:w,headerButtons:b,getItemCursor:e=>e==null?void 0:e.cursor,rowKey:e=>e.id,downloadOptions:[{key:"delete-story",labelFn:e=>r({en:`🗑️ Delete ${e.length} story`,vi:`🗑️ Xoá ${e.length} story`}),onClick:v}]})}export{fe as default};
