import{r as _,ap as s}from"./index-BOet_9WV.js";import{C as I}from"./Collection-DwiCb6PK.js";import{A as T,u as F,b as e,T as v,B as N,G as E}from"./MyApp-CjYFd9zw.js";import{L as G}from"./index-CrRGSwSK.js";import{I as S}from"./index-CEXPLwB-.js";import{T as L}from"./index-DnwdLqdc.js";import"./index-CUERnRm9.js";import"./file-download-DVNTG-gp.js";import"./index-1i3_uXMj.js";import"./Dropdown-y4Y8A-i9.js";import"./PurePanel-CuTvi9m1.js";import"./index-BzVYrbuN.js";import"./index-DVzyffHd.js";import"./index-CeQZxhjd.js";import"./TextArea-CM241X7f.js";import"./addEventListener-BoFyme10.js";import"./index-B3I_vVip.js";import"./index-PjUow3X2.js";import"./Pagination-BmcLOJBH.js";import"./useBreakpoint-vSNHfBfG.js";import"./responsiveObserver-CyO3TaPU.js";import"./row-ep240xy5.js";async function R({groupId:r="",cursor:p=""}){var o,l;const m=await T({fb_api_req_friendly_name:"GroupsCometFilesTabPaginationQuery",variables:{count:15,cursor:p,groupDocsFileName:null,groupID:r,orderby:"TIME_DESC",scale:1,id:r},doc_id:"24326962373618252"}),a=JSON.parse(m),{edges:t=[],page_info:c={}}=((l=(o=a==null?void 0:a.data)==null?void 0:o.node)==null?void 0:l.group_docs_and_files)||{};return t.map(i=>{var u,w,x,f,h,y,d,b,j,C,k;return{download_url:(u=i==null?void 0:i.node)==null?void 0:u.download_url,name:(w=i==null?void 0:i.node)==null?void 0:w.name,post_url:(f=(x=i==null?void 0:i.node)==null?void 0:x.original_post)==null?void 0:f.url,creation_time:(y=(h=i==null?void 0:i.node)==null?void 0:h.original_post)==null?void 0:y.creation_time,icon:(b=(d=i==null?void 0:i.node)==null?void 0:d.icon)==null?void 0:b.uri,file_type:(j=i==null?void 0:i.node)==null?void 0:j.file_type,owners:(k=(C=i==null?void 0:i.node)==null?void 0:C.original_post)==null?void 0:k.actors.map(n=>({id:n==null?void 0:n.id,name:n==null?void 0:n.name,url:n==null?void 0:n.url})),cursor:c==null?void 0:c.end_cursor}})}function ro({target:r}){const{ti:p}=F(),m=_.useCallback(async(o=[],l)=>{if(!(r!=null&&r.id)||!(r!=null&&r.type))return;const i=o==null?void 0:o[(o==null?void 0:o.length)-1];return await R({groupId:r==null?void 0:r.id,cursor:l||(i==null?void 0:i.cursor)||""})},[r]),a=_.useCallback(o=>s.jsx(G.Item,{children:s.jsxs(e,{direction:"vertical",align:"center",style:{minWidth:150},children:[s.jsx(v,{title:o.download_url?p({en:"Download",vi:"Tải xuống"}):p({en:"No download link",vi:"Không có link tải"}),children:s.jsx(e,{style:{padding:"10px"},children:s.jsx(N.Ribbon,{text:s.jsx("i",{className:"fa fa-times"}),color:"red",style:{display:o.download_url?"none":"block"},children:s.jsx(S,{src:o.icon,alt:o.name,width:70,height:70,style:{objectFit:"cover",borderRadius:"10px",cursor:"pointer"},preview:!1,onClick:()=>o.download_url&&window.open(o.download_url)})})})}),s.jsx(v,{title:p({en:"View post",vi:"Xem bài viết"}),placement:"bottom",children:s.jsx(L.Paragraph,{style:{maxWidth:"150px",wordWrap:"break-word"},onClick:()=>window.open(o.post_url),children:o.name})})]})}),[]),t=_.useCallback(async o=>({url:o.download_url,name:o.name}),[]),c=o=>o.cursor||"";return s.jsx(I,{collectionName:(r==null?void 0:r.name)+" - Files",fetchNext:m,renderItem:a,downloadItem:t,getItemCursor:c,rowKey:o=>o.name+o.creation_time,onSearch:(o,l)=>E(o,l.name)})}export{ro as default};