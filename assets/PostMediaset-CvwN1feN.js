const __vite__fileDeps=["./ImageLazyPreview-AFOk0-b2.js","./index-Dzcc8K07.js","./index-DfqnkV-X.css","./MyApp-D1WOfSlj.js","./index-DPH1mxFh.js","./EyeOutlined-DcYuTysj.js","./addEventListener-D4Q8lJPW.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as u,av as o,aw as j,aA as y}from"./index-Dzcc8K07.js";import{C as b}from"./Collection-C4VfyKN_.js";import{g as c}from"./videos-TDi6z9p7.js";import{u as g,c as P,d as l,as as V,E as _,g as k,b as L,at as E,ac as I}from"./MyApp-D1WOfSlj.js";import{i as C}from"./icons-BXXgRn1O.js";import{V as M}from"./VideoWithMuted-KV8aJDvY.js";import{A as N}from"./index-CS0kfIky.js";import{L as F}from"./index-DWJcrypV.js";import"./index-QOSATsuu.js";import"./file-download-BXV0wufp.js";import"./index-CQYHdOdy.js";import"./Dropdown-MoCNgOM6.js";import"./PurePanel-DZZhCY3W.js";import"./index-B-vFib4n.js";import"./index-CRIV1okd.js";import"./index-DGdXI8Jq.js";import"./index-BUnY58xT.js";import"./EyeOutlined-DcYuTysj.js";import"./SearchOutlined-xcriaWC0.js";import"./index-CKuvfmMH.js";import"./Pagination-iwjKpyzq.js";import"./useBreakpoint-DIX-8B3S.js";import"./responsiveObserver-DO9fXIIn.js";import"./index-DnU1HSIU.js";import"./row-B1gkseQS.js";const R=u.lazy(()=>y(()=>import("./ImageLazyPreview-AFOk0-b2.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url));function ai({target:e,postId:n}){const{ti:r}=g(),{message:p}=P(),[t,h]=l("PostMediaset."+n+".mediaset_token",null),[f,d]=l("PostMediaset."+n+".loading",!1);u.useEffect(()=>{e!=null&&e.id&&n&&(d(!0),V(e==null?void 0:e.id,n).then(i=>{console.log(i);const s=_(i,"mediaset_token");if(!s)throw new Error("No mediaset token found");h(s)}).catch(i=>{p.error({content:r({en:"Fail to load post content ",vi:"Lỗi tải dữ liệu bài post "})+i.message})}).finally(()=>{d(!1)}))},[n]);const v=async(i=[],s)=>{var m;if(!(e!=null&&e.id)||!t)return;const a=s||((m=i[i.length-1])==null?void 0:m.cursor);return await E(t,a)},x=i=>o.jsxs(F.Item,{style:{position:"relative"},children:[o.jsx(R,{src:i.image,width:200/i.height*i.width,height:200,style:{objectFit:"cover",borderRadius:10},cacheId:"mediaset."+i.id,getPreview:async()=>i.isVideo?(await c(i.id)).source:i.image,renderPreview:i.isVideo?(s,a)=>({destroyOnClose:!0,imageRender:()=>o.jsx(I,{spinning:a,children:o.jsx(M,{src:s,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null}):void 0}),i.isVideo&&o.jsx("div",{style:{position:"absolute",top:10,right:10},children:C.IGVideo})]}),w=async i=>{if(i.isVideo){const s=await c(i.id);return{name:i.id+".mp4",url:s.source}}return{name:i.id+".jpg",url:i.image}};return o.jsx(b,{collectionName:(e==null?void 0:e.name)+" - Post media - "+n,fetchNext:v,renderItem:x,downloadItem:w,getItemCursor:i=>i.cursor,rowKey:i=>i.id,stop:!(e!=null&&e.id)||!t,headerButtons:()=>o.jsx(j,{href:k(n),target:"_blank",icon:o.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"}),children:r({en:"View post",vi:"Xem bài viết"})}),header:()=>f?o.jsxs(L,{children:[o.jsx("i",{className:"fa-solid fa-spinner fa-spin"})," ",r({en:"Loading post content...",vi:"Đang tải nội dung bài viết..."})]}):t?null:o.jsx(N,{type:"error",showIcon:!0,message:r({en:"This post not contain multiple medias",vi:"Bài viết này không chứa nhiều ảnh/video"})})})}export{ai as default};