import{r as p,av as r,aw as b}from"./index-Dzcc8K07.js";import{u as x,P as u,a4 as w,a5 as y,b as d,B as j,e as k,g as C,I as v}from"./MyApp-D1WOfSlj.js";import{C as T}from"./Collection-C4VfyKN_.js";import{g as E,a as A,b as N}from"./albums-CKmXv3FH.js";import{A as S}from"./index-CS0kfIky.js";import{L as I}from"./index-DWJcrypV.js";import{I as g}from"./index-DPH1mxFh.js";import{T as B}from"./index-BUnY58xT.js";import"./index-QOSATsuu.js";import"./file-download-BXV0wufp.js";import"./index-CQYHdOdy.js";import"./Dropdown-MoCNgOM6.js";import"./PurePanel-DZZhCY3W.js";import"./index-B-vFib4n.js";import"./index-CRIV1okd.js";import"./index-DGdXI8Jq.js";import"./EyeOutlined-DcYuTysj.js";import"./SearchOutlined-xcriaWC0.js";import"./index-CKuvfmMH.js";import"./Pagination-iwjKpyzq.js";import"./useBreakpoint-DIX-8B3S.js";import"./responsiveObserver-DO9fXIIn.js";import"./index-DnU1HSIU.js";import"./row-B1gkseQS.js";import"./addEventListener-D4Q8lJPW.js";function ro({target:s,onOpenAlbum:e}){const{ti:m}=x(),h=p.useCallback(async(o=[])=>{var c;if(!(s!=null&&s.id)||!(s!=null&&s.type))return;const i=o==null?void 0:o[(o==null?void 0:o.length)-1];if(s.type!==u.Group)return(await E({id:s==null?void 0:s.id,accessToken:await w(y.EAAB),fromId:(i==null?void 0:i.id)||""})).albums;const n=s.type===u.Group?await A({groupId:s.id,cursor:i==null?void 0:i.cursor}):await N({uid:s.id,cursor:i==null?void 0:i.cursor});if((c=n.albums)!=null&&c.length){let a=new Set(o.map(l=>l.id));return n.albums.filter(l=>!a.has(l.id))}return[]},[s]),t=p.useCallback(()=>r.jsx(d,{children:r.jsx(S,{showIcon:!0,type:"info",message:m({en:"Click any album to view photos",vi:"Click album bất kỳ để xem ảnh"})})}),[m]),f=p.useCallback(o=>r.jsx(I.Item,{children:r.jsxs(d,{direction:"vertical",children:[r.jsx(j.Ribbon,{text:k(o.count),children:r.jsxs("div",{className:"show-on-hover-trigger",children:[r.jsx(g,{src:o.picture,alt:o.name,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px",cursor:"pointer"},preview:!1,onClick:()=>{e==null||e(o)}}),r.jsx(b,{type:"default",icon:r.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:C(o.id)})]})}),r.jsx(B.Paragraph,{style:{maxWidth:"150px",wordWrap:"break-word"},onClick:()=>window.open(o.link),children:o.name})]})}),[]);return r.jsx(T,{collectionName:(s==null?void 0:s.name)+" - Albums",fetchNext:h,renderItem:f,rowKey:o=>o.id,header:t,searchPlaceholder:o=>m({en:`Search in ${o==null?void 0:o.length} albums...`,vi:`Tìm trong ${o.length} albums...`}),onSearch:(o,i)=>v(o,i.name)})}export{ro as default};