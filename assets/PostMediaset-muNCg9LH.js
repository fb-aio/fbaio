const __vite__fileDeps=["./ImageLazyPreview-B8VsK8Xb.js","./index-CJaVbnGD.js","./index-Gp9RWSdI.css","./MyApp-Cb3LUwKI.js","./index-VHYOultD.js","./addEventListener-BEy-bbbd.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as p,ap as e,as as w,av as y}from"./index-CJaVbnGD.js";import{C as b}from"./Collection-BGAhcSWd.js";import{b as c}from"./index-DqHcdW4p.js";import{u as P,c as g,d as l,aj as _,E as k,g as L,b as V,ak as E,a3 as I}from"./MyApp-Cb3LUwKI.js";import{i as C}from"./icons-CeqTZO2C.js";import{A as N}from"./index-DreCSCQn.js";import{L as F}from"./index-CAcCQb4o.js";import"./index-CoAyLWga.js";import"./file-download-7sx46_tB.js";import"./index-hQNM_UWx.js";import"./Dropdown-CTVtteyU.js";import"./PurePanel-Df0o7vnK.js";import"./index-SqWg6UAW.js";import"./index-C5H87xLX.js";import"./index-DgW53vNp.js";import"./TextArea-B0sMUHr-.js";import"./addEventListener-BEy-bbbd.js";import"./index-DtyXO5qB.js";import"./index-C54r_VE-.js";import"./index-DP7XXFVh.js";import"./responsiveObserver-MUZjbimK.js";import"./useBreakpoint-yUZkuHJ4.js";import"./index-Dhpvm-u-.js";import"./index-DPBMs5SG.js";import"./index-C5UKu_rK.js";import"./index-VHYOultD.js";import"./index-Bdj1DtMt.js";import"./Pagination-COU-Z0ho.js";import"./row-Cd28j6bi.js";const M=p.lazy(()=>y(()=>import("./ImageLazyPreview-B8VsK8Xb.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url));function lo({target:i,postId:n}){const{ti:r}=P(),{message:u}=g(),[t,h]=l("PostMediaset."+n+".mediaset_token",null),[f,d]=l("PostMediaset."+n+".loading",!1);p.useEffect(()=>{i!=null&&i.id&&n&&(d(!0),_(i==null?void 0:i.id,n).then(o=>{console.log(o);const s=k(o,"mediaset_token");if(!s)throw new Error("No mediaset token found");h(s)}).catch(o=>{u.error({content:r({en:"Fail to load post content ",vi:"Lỗi tải dữ liệu bài post "})+o.message})}).finally(()=>{d(!1)}))},[n]);const v=async(o=[],s)=>{var m;if(!(i!=null&&i.id)||!t)return;const a=s||((m=o[o.length-1])==null?void 0:m.cursor);return await E(t,a)},x=o=>e.jsxs(F.Item,{style:{position:"relative"},children:[e.jsx(M,{src:o.image,width:200/o.height*o.width,height:200,style:{objectFit:"cover",borderRadius:10},cacheId:"mediaset."+o.id,getPreview:async()=>o.isVideo?(await c(o.id)).source:o.image,renderPreview:o.isVideo?(s,a)=>({destroyOnClose:!0,imageRender:()=>e.jsx(I,{spinning:a,children:e.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:s,style:{maxWidth:"90vw",maxHeight:"90vh"}})}),toolbarRender:()=>null}):void 0}),o.isVideo&&e.jsx("div",{style:{position:"absolute",top:10,right:10},children:C.IGVideo})]}),j=async o=>{if(o.isVideo){const s=await c(o.id);return{name:o.id+".mp4",url:s.source}}return{name:o.id+".jpg",url:o.image}};return e.jsx(b,{collectionName:(i==null?void 0:i.name)+" - Post media - "+n,fetchNext:v,renderItem:x,downloadItem:j,getItemCursor:o=>o.cursor,rowKey:o=>o.id,stop:!(i!=null&&i.id)||!t,headerButtons:()=>e.jsx(w,{href:L(n),target:"_blank",icon:e.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"}),children:r({en:"View post",vi:"Xem bài viết"})}),header:()=>f?e.jsxs(V,{children:[e.jsx("i",{className:"fa-solid fa-spinner fa-spin"})," ",r({en:"Loading post content...",vi:"Đang tải nội dung bài viết..."})]}):t?null:e.jsx(N,{type:"error",showIcon:!0,message:r({en:"This post not contain multiple medias",vi:"Bài viết này không chứa nhiều ảnh/video"})})})}export{lo as default};