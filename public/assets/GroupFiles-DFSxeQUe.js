import{r as _,aA as s}from"./index-DjNgLHmn.js";import{C as I}from"./Collection-C9qKHU1X.js";import{C as T,D as F,u as S,S as k,T as v,B as E,K as N}from"./MyApp-DK69-3iP.js";import{L as G}from"./index-C3McVWj0.js";import{I as K}from"./index-E6wTmUh-.js";import{T as L}from"./index-B5jAeavt.js";import"./index-CAy62gIh.js";import"./file-download-BjnbICN-.js";import"./index-1UiE3Fo6.js";import"./Dropdown-T16hB0xb.js";import"./PurePanel-C1cPjrOv.js";import"./index-DRxPCiTp.js";import"./index-nfXIQ-n5.js";import"./EyeOutlined-CkbEv_yO.js";import"./SearchOutlined-DKaqJnTW.js";import"./index-kYucxU22.js";import"./Pagination-uHe4sqF_.js";import"./useBreakpoint-Dh19YETt.js";import"./responsiveObserver-CGsauEKo.js";import"./index-BdfMe-pS.js";import"./row-B78WAZFV.js";import"./addEventListener-D1m6mSJD.js";async function R({groupId:r="",cursor:a=""}){var o,l;const m=await T({fb_api_req_friendly_name:"GroupsCometFilesTabPaginationQuery",variables:{count:15,cursor:a,groupDocsFileName:null,groupID:r,orderby:"TIME_DESC",scale:1,id:r},doc_id:"24326962373618252"}),p=F(m),{edges:t=[],page_info:c={}}=((l=(o=p==null?void 0:p.data)==null?void 0:o.node)==null?void 0:l.group_docs_and_files)||{};return t.map(i=>{var u,w,f,x,h,y,d,b,j,C,e;return{download_url:(u=i==null?void 0:i.node)==null?void 0:u.download_url,name:(w=i==null?void 0:i.node)==null?void 0:w.name,post_url:(x=(f=i==null?void 0:i.node)==null?void 0:f.original_post)==null?void 0:x.url,creation_time:(y=(h=i==null?void 0:i.node)==null?void 0:h.original_post)==null?void 0:y.creation_time,icon:(b=(d=i==null?void 0:i.node)==null?void 0:d.icon)==null?void 0:b.uri,file_type:(j=i==null?void 0:i.node)==null?void 0:j.file_type,owners:(e=(C=i==null?void 0:i.node)==null?void 0:C.original_post)==null?void 0:e.actors.map(n=>({id:n==null?void 0:n.id,name:n==null?void 0:n.name,url:n==null?void 0:n.url})),cursor:c==null?void 0:c.end_cursor}})}function so({target:r}){const{ti:a}=S(),m=_.useCallback(async(o=[],l)=>{if(!(r!=null&&r.id)||!(r!=null&&r.type))return;const i=o==null?void 0:o[(o==null?void 0:o.length)-1];return await R({groupId:r==null?void 0:r.id,cursor:l||(i==null?void 0:i.cursor)||""})},[r]),p=_.useCallback(o=>s.jsx(G.Item,{children:s.jsxs(k,{direction:"vertical",align:"center",style:{minWidth:150},children:[s.jsx(v,{title:o.download_url?a({en:"Download",vi:"Tải xuống"}):a({en:"No download link",vi:"Không có link tải"}),children:s.jsx(k,{style:{padding:"10px"},children:s.jsx(E.Ribbon,{text:s.jsx("i",{className:"fa fa-times"}),color:"red",style:{display:o.download_url?"none":"block"},children:s.jsx(K,{src:o.icon,alt:o.name,width:70,height:70,style:{objectFit:"cover",borderRadius:"10px",cursor:"pointer"},preview:!1,onClick:()=>o.download_url&&window.open(o.download_url)})})})}),s.jsx(v,{title:a({en:"View post",vi:"Xem bài viết"}),placement:"bottom",children:s.jsx(L.Paragraph,{style:{maxWidth:"150px",wordWrap:"break-word"},onClick:()=>window.open(o.post_url),children:o.name})})]})}),[]),t=_.useCallback(async o=>({url:o.download_url,name:o.name}),[]),c=o=>o.cursor||"";return s.jsx(I,{collectionName:(r==null?void 0:r.name)+" - Files",fetchNext:m,renderItem:p,downloadItem:t,getItemCursor:c,rowKey:o=>o.name+o.creation_time,onSearch:(o,l)=>N(o,l.name)})}export{so as default};
