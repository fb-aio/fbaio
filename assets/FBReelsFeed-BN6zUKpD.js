import{aG as x,b0 as f,r as u,aI as o,bT as b,bk as j,aK as n,bj as l,ci as v}from"./index-CoQJRaJc.js";import{a as y}from"./reels-DBc_lXHu.js";import{C as w}from"./Collection-BVhabgIs.js";import{t as k,S as i,T as d,g as F}from"./MyApp-Bv9Tdnls.js";import N from"./VideoViewer-hCP5C7ch.js";import{A as R}from"./index-DFyPa7aH.js";import{L as I}from"./index-sWf0LZaq.js";import{I as T}from"./index-Bj3GCUdB.js";import{T as c}from"./index-BPzTw2po.js";import{A as _}from"./index-CBkycUE1.js";import"./videos-CJOpMINz.js";import"./index-D7UuqngZ.js";import"./file-download-DKe_qcqb.js";import"./index-COS5Gceu.js";import"./Dropdown-Bj4U19VQ.js";import"./PurePanel-VaRXbwml.js";import"./index-CDSOXTpM.js";import"./index-CTvHyNJT.js";import"./EyeOutlined-DejzCPTC.js";import"./SearchOutlined-Dgb3bpoU.js";import"./index-BYe4KJYd.js";import"./VideoWithMuted-DXlmFkOH.js";import"./Pagination-Cwe0FwRT.js";import"./useBreakpoint-B8GBnQUj.js";import"./responsiveObserver-DSyUYFE2.js";import"./index-Clc9XjzJ.js";import"./row-CgfofOIW.js";import"./addEventListener-DX7qo22b.js";import"./index-C28RxxTI.js";function te(){const{ti:t}=x(),p=f();u.useEffect(()=>{k("FBReelsFeed:onLoad")},[]);const m=async(e,r)=>{var a;return await y({cursor:r||((a=e==null?void 0:e[e.length-1])==null?void 0:a.cursor)||""})},g=(e,r)=>o.jsx(I.Item,{children:o.jsxs("div",{className:"show-on-hover-trigger",children:[o.jsxs("div",{style:{position:"relative"},children:[o.jsx(T,{src:e.video.thumbnail,style:{width:200,height:300,borderRadius:10,objectFit:"cover"},preview:{destroyOnClose:!0,toolbarRender:()=>null,imageRender:()=>o.jsx(N,{info:e.video})}}),o.jsxs("div",{style:{color:"#eee",background:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",position:"absolute",bottom:0,left:0,padding:"5px 10px",width:"100%",paddingTop:"50px",pointerEvents:"none",display:"flex",flexDirection:"column"},children:[o.jsxs(i,{children:[o.jsx("i",{className:"fa-solid fa-film"}),b(e.video.length/1e3)]}),o.jsxs(i,{children:[o.jsx("i",{className:"fa-regular fa-clock"}),j(e.video.created_time)]})]}),o.jsxs(i,{className:"show-on-hover-item",direction:"horizontal",style:{position:"absolute",bottom:10,right:10},size:3,children:[o.jsx(d,{title:t({en:"Open in Bulk Downloader",vi:"Mở trong Tải hàng loạt"}),children:o.jsx(n,{icon:o.jsx("i",{className:"fa-solid fa-search"}),onClick:()=>{const s=!!e.owner.ig_username;p("/bulk-downloader",{state:{targetId:s?e.owner.ig_username:e.owner.id,platform:s?l.Instagram:l.Facebook}})}})}),o.jsx(n,{icon:o.jsx("i",{className:"fa-solid fa-up-right-from-square"}),target:"_blank",href:F(e.video.id)})]})]}),o.jsx("div",{style:{width:200,display:"flex",flexDirection:"column"},children:o.jsx(d,{title:e.translated_caption||e.caption,children:o.jsx(c.Text,{children:v(e.caption,80)})})}),o.jsxs("div",{style:{position:"absolute",top:5,left:5,right:5,display:"flex"},children:[o.jsxs("div",{style:{position:"relative",height:40},children:[o.jsx(_,{onClick:()=>window.open(e.owner.url,"_blank"),src:e.owner.avatar,size:40,style:{borderWidth:2,borderColor:"#0866FF",marginRight:3,cursor:"pointer"}}),e.owner.ig_username&&o.jsx("i",{className:"fa-brands fa-instagram fa-lg",style:{position:"absolute",bottom:3,right:3}})]}),o.jsx("div",{style:{display:"inline-block",background:"#1119",padding:"3px 5px",borderRadius:5,pointerEvents:"none",alignSelf:"center",flex:1},children:o.jsx(c.Text,{style:{color:"#eee",fontWeight:"bold"},children:e.owner.name||e.owner.ig_username})})]})]})}),h=async(e,r)=>({name:e.video.id+".mp4",url:e.video.source});return o.jsx(w,{collectionName:"FBReelsFeed",fetchNext:m,renderItem:g,downloadItem:h,getItemCursor:e=>e==null?void 0:e.cursor,rowKey:e=>e.id,header:()=>o.jsx(R,{type:"info",message:o.jsxs(o.Fragment,{children:[o.jsx("i",{className:"fa fa-eye-slash",style:{color:"gray"}})," ",t({en:"Watch all Reels without being tracked by Facebook",vi:"Lướt Reels ẩn danh - Không bị Facebook theo dõi"})]})})})}export{te as default};