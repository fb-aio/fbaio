import{ap as o}from"./index-DTuD-gIZ.js";import{u as d,E as h,o as p,a as u}from"./MyApp-DtkI4uVN.js";import{E as x}from"./ExportButton-BXg5_Usq.js";import{C as f}from"./Collection-C7y85cPw.js";import{c as j}from"./pages-CfSEMfV6.js";import{A as k}from"./index-CJfXeNnw.js";import{L as y}from"./index-1ym4-CGc.js";import{I as _}from"./index-CEjM6kgT.js";import"./file-download-BxyMbgCF.js";import"./index-YK4cqQAU.js";import"./Dropdown-WJci-lrt.js";import"./PurePanel-DTld5f7k.js";import"./index-DR1hYV1u.js";import"./index-DQHvppe9.js";import"./index-Dfr6ccrC.js";import"./index-BSvqTJ67.js";import"./TextArea-DczNLlkO.js";import"./addEventListener-BR1Ua7IP.js";import"./index-CN34XEQ3.js";import"./index-wrcCNw01.js";import"./Pagination-Dz0gbM3B.js";import"./useBreakpoint-VJPzTbg_.js";import"./responsiveObserver-B7hb1Qq-.js";import"./row-DyEezz8y.js";function z({target:i}){const{ti:a}=d(),t=async(e=[],s)=>{var r;return i!=null&&i.id?await j({uid:i.id,cursor:s||((r=e[e.length-1])==null?void 0:r.cursor)}):void 0},c=e=>o.jsx(y.Item,{children:o.jsxs(u,{direction:"vertical",style:{maxWidth:150},children:[o.jsx(_,{src:e.image,style:{width:150,height:150,objectFit:"contain",borderRadius:10}}),o.jsxs("span",{style:{margin:0},children:[o.jsx("span",{style:{opacity:.7},children:e.id}),o.jsx("br",{}),o.jsx("a",{href:e.url,target:"_blank",children:o.jsx("b",{children:e.name})})]})]})});return o.jsx(f,{collectionName:(i==null?void 0:i.name)+" - Liked Pages",fetchNext:t,renderItem:c,getItemCursor:e=>e.cursor,rowKey:e=>e.id,showPagination:!0,all:!0,searchPlaceholder:e=>a({en:`Search in ${e.length} liked pages`,vi:`Tìm trong ${e.length} trang được thích`}),onSearch:(e,s)=>h(e,s.name+s.id),header:e=>{var n,r,m,l;const s=((n=e[0])==null?void 0:n.total)&&((r=e[0])==null?void 0:r.total)!==e.length;return o.jsx(k,{type:"success",showIcon:!0,message:a({en:`Liked ${e.length} public pages`+(s?` (in total ${(m=e[0])==null?void 0:m.total} likes)`:""),vi:`Đã thích ${e.length} trang công khai`+(s?` (trong tổng ${(l=e[0])==null?void 0:l.total} lượt thích)`:"")})})},headerButtons:e=>o.jsx(x,{data:e,options:[{key:"uid",label:".txt (pages id)",prepareData:s=>({fileName:(i==null?void 0:i.name)+"_liked_pages_id.txt",data:s.map(n=>n.id).join(`
`)})},{key:"id_name",label:".csv (page id+name)",prepareData:s=>({fileName:(i==null?void 0:i.name)+"_liked_pages_id_name.csv",data:p(s.map(n=>({id:n.id,name:n.name})))})},{key:"json",label:".json",prepareData:s=>({fileName:(i==null?void 0:i.name)+"_liked_pages.json",data:JSON.stringify(s,null,4)})},{key:"csv",label:".csv",prepareData:s=>({fileName:(i==null?void 0:i.name)+"_liked_pages.csv",data:p(s)})}]})})}export{z as default};