import{r as p,av as r,aw as b}from"./index-Cu5DMrqP.js";import{u as x,P as u,$ as w,a0 as y,b as d,B as j,e as k,g as C,I as v}from"./MyApp-CBJyifzj.js";import{C as T}from"./Collection-gHxE2ssH.js";import{g as E,a as A,b as N}from"./albums-BRoSaXdm.js";import{A as S}from"./index-BHP5flst.js";import{L as I}from"./index-Bsb2O4uF.js";import{I as g}from"./index-uKhnUYaa.js";import{T as B}from"./index-B6wF2DLX.js";import"./index-CGIy8z5y.js";import"./file-download-CQflNR56.js";import"./index-BfGp5EFc.js";import"./Dropdown-4O0oXYv8.js";import"./PurePanel-Cc9k44PN.js";import"./index-BEDMcvkp.js";import"./index-VDeELPdW.js";import"./index-mZ6bkR5V.js";import"./EyeOutlined-FHe3ptwe.js";import"./SearchOutlined-BE8biauy.js";import"./index-Mn7J1M2X.js";import"./Pagination-ttRdgmts.js";import"./useBreakpoint-otqirn5h.js";import"./responsiveObserver-eHs-qAkp.js";import"./index-DhpzbMQc.js";import"./row-G-tErKJJ.js";import"./addEventListener-BX9_jEDV.js";function ro({target:s,onOpenAlbum:e}){const{ti:m}=x(),h=p.useCallback(async(o=[])=>{var c;if(!(s!=null&&s.id)||!(s!=null&&s.type))return;const i=o==null?void 0:o[(o==null?void 0:o.length)-1];if(s.type!==u.Group)return(await E({id:s==null?void 0:s.id,accessToken:await w(y.EAAB),fromId:(i==null?void 0:i.id)||""})).albums;const n=s.type===u.Group?await A({groupId:s.id,cursor:i==null?void 0:i.cursor}):await N({uid:s.id,cursor:i==null?void 0:i.cursor});if((c=n.albums)!=null&&c.length){let a=new Set(o.map(l=>l.id));return n.albums.filter(l=>!a.has(l.id))}return[]},[s]),t=p.useCallback(()=>r.jsx(d,{children:r.jsx(S,{showIcon:!0,type:"info",message:m({en:"Click any album to view photos",vi:"Click album bất kỳ để xem ảnh"})})}),[m]),f=p.useCallback(o=>r.jsx(I.Item,{children:r.jsxs(d,{direction:"vertical",children:[r.jsx(j.Ribbon,{text:k(o.count),children:r.jsxs("div",{className:"show-on-hover-trigger",children:[r.jsx(g,{src:o.picture,alt:o.name,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px",cursor:"pointer"},preview:!1,onClick:()=>{e==null||e(o)}}),r.jsx(b,{type:"default",icon:r.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:C(o.id)})]})}),r.jsx(B.Paragraph,{style:{maxWidth:"150px",wordWrap:"break-word"},onClick:()=>window.open(o.link),children:o.name})]})}),[]);return r.jsx(T,{collectionName:(s==null?void 0:s.name)+" - Albums",fetchNext:h,renderItem:f,rowKey:o=>o.id,header:t,searchPlaceholder:o=>m({en:`Search in ${o==null?void 0:o.length} albums...`,vi:`Tìm trong ${o.length} albums...`}),onSearch:(o,i)=>v(o,i.name)})}export{ro as default};
