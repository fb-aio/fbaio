import{ao as o}from"./index-CPo4srtR.js";import{a as d,C as h,o as p,S as u}from"./MyApp-DM0tH3OB.js";import{E as x}from"./ExportButton-D5F6frgv.js";import{C as f}from"./Collection-CwtNmXc8.js";import{c as j}from"./pages-BzsMjL9k.js";import{A as k}from"./index-BWKlVk5I.js";import{L as y}from"./index-CwtQzYNQ.js";import{I as _}from"./index-D3X1BVvP.js";import"./file-download-CLyzYqAl.js";import"./index-DDLVWXn_.js";import"./Dropdown-D02Vb68h.js";import"./PurePanel-Ux3vADbr.js";import"./index-DmuWoIj2.js";import"./index-CGKz0B1Y.js";import"./index-D_rcyr9I.js";import"./index-B36Wm4Om.js";import"./TextArea-CmgGZwb8.js";import"./addEventListener-CyUJwPli.js";import"./index-CjkvbNRA.js";import"./index-Cm4P1bLB.js";import"./Pagination-DU7WbbIE.js";import"./useBreakpoint-C0CG1VVa.js";import"./responsiveObserver-DFa44coF.js";import"./row-CxtJL-XF.js";function z({target:i}){const{ti:a}=d(),t=async(e=[],s)=>{var r;return i!=null&&i.id?await j({uid:i.id,cursor:s||((r=e[e.length-1])==null?void 0:r.cursor)}):void 0},c=e=>o.jsx(y.Item,{children:o.jsxs(u,{direction:"vertical",style:{maxWidth:150},children:[o.jsx(_,{src:e.image,style:{width:150,height:150,objectFit:"contain",borderRadius:10}}),o.jsxs("span",{style:{margin:0},children:[o.jsx("span",{style:{opacity:.7},children:e.id}),o.jsx("br",{}),o.jsx("a",{href:e.url,target:"_blank",children:o.jsx("b",{children:e.name})})]})]})});return o.jsx(f,{collectionName:(i==null?void 0:i.name)+" - Liked Pages",fetchNext:t,renderItem:c,getItemCursor:e=>e.cursor,rowKey:e=>e.id,showPagination:!0,all:!0,searchPlaceholder:e=>a({en:`Search in ${e.length} liked pages`,vi:`Tìm trong ${e.length} trang được thích`}),onSearch:(e,s)=>h(e,s.name+s.id),header:e=>{var n,r,m,l;const s=((n=e[0])==null?void 0:n.total)&&((r=e[0])==null?void 0:r.total)!==e.length;return o.jsx(k,{type:"success",showIcon:!0,message:a({en:`Liked ${e.length} public pages`+(s?` (in total ${(m=e[0])==null?void 0:m.total} likes)`:""),vi:`Đã thích ${e.length} trang công khai`+(s?` (trong tổng ${(l=e[0])==null?void 0:l.total} lượt thích)`:"")})})},headerButtons:e=>o.jsx(x,{data:e,options:[{key:"uid",label:".txt (pages id)",prepareData:s=>({fileName:(i==null?void 0:i.name)+"_liked_pages_id.txt",data:s.map(n=>n.id).join(`
`)})},{key:"id_name",label:".csv (page id+name)",prepareData:s=>({fileName:(i==null?void 0:i.name)+"_liked_pages_id_name.csv",data:p(s.map(n=>({id:n.id,name:n.name})))})},{key:"json",label:".json",prepareData:s=>({fileName:(i==null?void 0:i.name)+"_liked_pages.json",data:JSON.stringify(s,null,4)})},{key:"csv",label:".csv",prepareData:s=>({fileName:(i==null?void 0:i.name)+"_liked_pages.csv",data:p(s)})}]})})}export{z as default};
