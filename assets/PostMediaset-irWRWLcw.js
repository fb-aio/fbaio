const __vite__fileDeps=["./ImageLazyPreview-BOuhWYcS.js","./index-h64fTVCJ.js","./index-CoXXEmlS.css","./MyApp-Iz2a2mnC.js","./index-vc_WNkqj.js","./addEventListener-Bnmz50pq.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as p,ap as e,aq as w,at as y}from"./index-h64fTVCJ.js";import{C as b}from"./Collection-nriHXea0.js";import{b as c}from"./index-CTNyvbIx.js";import{u as P,c as g,d as l,aj as _,E as k,g as L,b as V,ak as E,a3 as I}from"./MyApp-Iz2a2mnC.js";import{i as C}from"./icons-BODxYlbE.js";import{A as N}from"./index-CwK4ezJ9.js";import{L as F}from"./index-C_VZ7ca8.js";import"./index-DTM8Ra-c.js";import"./file-download-BUlS8PM-.js";import"./index-cegUwTsE.js";import"./Dropdown-HK8y7biz.js";import"./PurePanel-BEi6C-ox.js";import"./index-mghPbgRX.js";import"./index-BCru20Bi.js";import"./index-JvDIuWrR.js";import"./TextArea-DW-PX6E3.js";import"./addEventListener-Bnmz50pq.js";import"./index-ByeGQeh5.js";import"./index-CSjS-Dow.js";import"./index-BueB79Mz.js";import"./responsiveObserver-B4Zl6Knl.js";import"./useBreakpoint-Dp4tQ2Ci.js";import"./index-DEWUAEHR.js";import"./index-DfrkTGpB.js";import"./index-DXHiVBON.js";import"./index-vc_WNkqj.js";import"./index-BqJEOitH.js";import"./Pagination-BIvRPhu6.js";import"./row-DKmy2T3q.js";const M=p.lazy(()=>y(()=>import("./ImageLazyPreview-BOuhWYcS.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url));function lo({target:i,postId:n}){const{ti:r}=P(),{message:u}=g(),[t,h]=l("PostMediaset."+n+".mediaset_token",null),[f,d]=l("PostMediaset."+n+".loading",!1);p.useEffect(()=>{i!=null&&i.id&&n&&(d(!0),_(i==null?void 0:i.id,n).then(o=>{console.log(o);const s=k(o,"mediaset_token");if(!s)throw new Error("No mediaset token found");h(s)}).catch(o=>{u.error({content:r({en:"Fail to load post content ",vi:"Lỗi tải dữ liệu bài post "})+o.message})}).finally(()=>{d(!1)}))},[n]);const v=async(o=[],s)=>{var m;if(!(i!=null&&i.id)||!t)return;const a=s||((m=o[o.length-1])==null?void 0:m.cursor);return await E(t,a)},x=o=>e.jsxs(F.Item,{style:{position:"relative"},children:[e.jsx(M,{src:o.image,width:200/o.height*o.width,height:200,style:{objectFit:"cover",borderRadius:10},cacheId:"mediaset."+o.id,getPreview:async()=>o.isVideo?(await c(o.id)).source:o.image,renderPreview:o.isVideo?(s,a)=>({destroyOnClose:!0,imageRender:()=>e.jsx(I,{spinning:a,children:e.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:s,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null}):void 0}),o.isVideo&&e.jsx("div",{style:{position:"absolute",top:10,right:10},children:C.IGVideo})]}),j=async o=>{if(o.isVideo){const s=await c(o.id);return{name:o.id+".mp4",url:s.source}}return{name:o.id+".jpg",url:o.image}};return e.jsx(b,{collectionName:(i==null?void 0:i.name)+" - Post media - "+n,fetchNext:v,renderItem:x,downloadItem:j,getItemCursor:o=>o.cursor,rowKey:o=>o.id,stop:!(i!=null&&i.id)||!t,headerButtons:()=>e.jsx(w,{href:L(n),target:"_blank",icon:e.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"}),children:r({en:"View post",vi:"Xem bài viết"})}),header:()=>f?e.jsxs(V,{children:[e.jsx("i",{className:"fa-solid fa-spinner fa-spin"})," ",r({en:"Loading post content...",vi:"Đang tải nội dung bài viết..."})]}):t?null:e.jsx(N,{type:"error",showIcon:!0,message:r({en:"This post not contain multiple medias",vi:"Bài viết này không chứa nhiều ảnh/video"})})})}export{lo as default};