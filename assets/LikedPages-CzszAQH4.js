import{aq as o}from"./index-DOOTCcHC.js";import{a as d,y as h,o as p,S as u}from"./MyApp-C1Cge4LI.js";import{E as x}from"./ExportButton-CEb3qvuK.js";import{C as f}from"./Collection-J0vJyBVX.js";import{b as j}from"./pages-CVd4NfXn.js";import{A as k}from"./index-VkO8Bqyd.js";import{L as y}from"./index-DBKoNkzi.js";import{I as _}from"./index-BhyrVf84.js";import"./file-download-Dycc4scI.js";import"./index-9LEuxGJt.js";import"./Dropdown-uE1te4Kd.js";import"./PurePanel-qusS7nQi.js";import"./index-Cs-LNwoF.js";import"./useCacheState-Bvty8fNQ.js";import"./index-CCWRB7N3.js";import"./TextArea-D20a544N.js";import"./addEventListener-wLIjlol3.js";import"./Pagination-CV8j8exz.js";import"./useBreakpoint-DW8QQd81.js";import"./responsiveObserver-CeUCIo-a.js";import"./row-BE6NqmDN.js";function K({target:i}){const{ti:a}=d(),c=async(e=[],s)=>{var r;return i!=null&&i.id?await j({uid:i.id,cursor:s||((r=e[e.length-1])==null?void 0:r.cursor)}):void 0},t=e=>o.jsx(y.Item,{children:o.jsxs(u,{direction:"vertical",style:{maxWidth:150},children:[o.jsx(_,{src:e.image,style:{width:150,height:150,objectFit:"contain",borderRadius:10}}),o.jsxs("span",{style:{margin:0},children:[o.jsx("span",{style:{opacity:.7},children:e.id}),o.jsx("br",{}),o.jsx("a",{href:e.url,target:"_blank",children:o.jsx("b",{children:e.name})})]})]})});return o.jsx(f,{collectionName:(i==null?void 0:i.name)+" - Liked Pages",fetchNext:c,renderItem:t,getItemCursor:e=>e.cursor,rowKey:e=>e.id,showPagination:!0,all:!0,showSearch:!0,searchPlaceholder:e=>a({en:`Search in ${e.length} liked pages`,vi:`Tìm trong ${e.length} trang được thích`}),onSearch:(e,s)=>h(e,s.name+s.id),header:e=>{var n,r,l,m;const s=((n=e[0])==null?void 0:n.total)&&((r=e[0])==null?void 0:r.total)!==e.length;return o.jsx(k,{type:"success",showIcon:!0,message:a({en:`Liked ${e.length} public pages`+(s?` (in total ${(l=e[0])==null?void 0:l.total} likes)`:""),vi:`Đã thích ${e.length} trang công khai`+(s?` (trong tổng ${(m=e[0])==null?void 0:m.total} lượt thích)`:"")})})},headerButtons:e=>o.jsx(x,{data:e,options:[{key:"uid",label:".txt (pages id)",prepareData:s=>({fileName:(i==null?void 0:i.name)+"_liked_pages_id.txt",data:s.map(n=>n.id).join(`
`)})},{key:"id_name",label:".csv (page id+name)",prepareData:s=>({fileName:(i==null?void 0:i.name)+"_liked_pages_id_name.csv",data:p(s.map(n=>({id:n.id,name:n.name})))})},{key:"json",label:".json",prepareData:s=>({fileName:(i==null?void 0:i.name)+"_liked_pages.json",data:JSON.stringify(s,null,4)})},{key:"csv",label:".csv",prepareData:s=>({fileName:(i==null?void 0:i.name)+"_liked_pages.csv",data:p(s)})}]})})}export{K as default};