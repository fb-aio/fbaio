const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ImageLazyPreview-CF5ZuvJr.js","./index-DX7e3EX-.js","./index-9SBFHPtm.css","./MyApp-DsQhmCw_.js","./index-BuMqwWrG.js","./EyeOutlined-doPhaJPr.js","./addEventListener-C8HCOjYU.js"])))=>i.map(i=>d[i]);
import{aG as j,r as u,bd as y,aI as o,aK as b,aR as g}from"./index-DX7e3EX-.js";import{C as P}from"./Collection-DHYGLq6C.js";import{g as c}from"./videos-DZYm19yE.js";import{b as V,c as l,a2 as _,g as k,S as I,a3 as L,U as C}from"./MyApp-DsQhmCw_.js";import{i as E}from"./icons-Dy8Pin0D.js";import{V as M}from"./VideoWithMuted-DoL-Ld20.js";import{A as N}from"./index-Cp6tT5Ul.js";import{L as R}from"./index-CNiVMrHl.js";import"./index-DVsd4bHh.js";import"./file-download-DbEKv77y.js";import"./index-CT7Pxvlk.js";import"./Dropdown-DHY89eZ6.js";import"./PurePanel-CrHDJq7-.js";import"./index-BR54RbR0.js";import"./index-DqL514As.js";import"./index-ovOV5J2z.js";import"./EyeOutlined-doPhaJPr.js";import"./SearchOutlined-DeDkIuiA.js";import"./index-D_94nZQH.js";import"./Pagination-DJKH-2sc.js";import"./useBreakpoint-Cf7NoSo5.js";import"./responsiveObserver-Bzlqtgls.js";import"./index-CW7Y_FGE.js";import"./row-DNu_gVg4.js";const F=u.lazy(()=>g(()=>import("./ImageLazyPreview-CF5ZuvJr.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url));function ti({target:e,postId:n}){const{ti:r}=j(),{message:p}=V(),[t,h]=l("PostMediaset."+n+".mediaset_token",null),[f,d]=l("PostMediaset."+n+".loading",!1);u.useEffect(()=>{e!=null&&e.id&&n&&(d(!0),_(e==null?void 0:e.id,n).then(i=>{console.log(i);const s=y(i,"mediaset_token");if(!s)throw new Error("No mediaset token found");h(s)}).catch(i=>{p.error({content:r({en:"Fail to load post content ",vi:"Lỗi tải dữ liệu bài post "})+i.message})}).finally(()=>{d(!1)}))},[n]);const v=async(i=[],s)=>{var m;if(!(e!=null&&e.id)||!t)return;const a=s||((m=i[i.length-1])==null?void 0:m.cursor);return await L(t,a)},x=i=>o.jsxs(R.Item,{style:{position:"relative"},children:[o.jsx(F,{src:i.image,width:200/i.height*i.width,height:200,style:{objectFit:"cover",borderRadius:10},cacheId:"mediaset."+i.id,getPreview:async()=>i.isVideo?(await c(i.id)).source:i.image,renderPreview:i.isVideo?(s,a)=>({destroyOnClose:!0,imageRender:()=>o.jsx(C,{spinning:a,children:o.jsx(M,{src:s,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null}):void 0}),i.isVideo&&o.jsx("div",{style:{position:"absolute",top:10,right:10},children:E.IGVideo})]}),w=async i=>{if(i.isVideo){const s=await c(i.id);return{name:i.id+".mp4",url:s.source}}return{name:i.id+".jpg",url:i.image}};return o.jsx(P,{collectionName:(e==null?void 0:e.name)+" - Post media - "+n,fetchNext:v,renderItem:x,downloadItem:w,getItemCursor:i=>i.cursor,rowKey:i=>i.id,stop:!(e!=null&&e.id)||!t,headerButtons:()=>o.jsx(b,{href:k(n),target:"_blank",icon:o.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"}),children:r({en:"View post",vi:"Xem bài viết"})}),header:()=>f?o.jsxs(I,{children:[o.jsx("i",{className:"fa-solid fa-spinner fa-spin"})," ",r({en:"Loading post content...",vi:"Đang tải nội dung bài viết..."})]}):t?null:o.jsx(N,{type:"error",showIcon:!0,message:r({en:"This post not contain multiple medias",vi:"Bài viết này không chứa nhiều ảnh/video"})})})}export{ti as default};
