import{r as i,av as t}from"./index-BK9qCNpo.js";import{i as d}from"./icons-BVw7EDDs.js";import{C as c}from"./Collection-D0Dg0GEE.js";import{a as l}from"./highlights-Cq6NhJxu.js";import{V as u}from"./VideoWithMuted-CKoAOdOp.js";import{L as x}from"./index-CO1rU5K-.js";import{I as v}from"./index-Dl6g14zv.js";import"./index-DYv1WOvT.js";import"./file-download-Bl6_Kgkl.js";import"./MyApp-KprBrH59.js";import"./index-B0ThorHi.js";import"./Dropdown-kJvbiFmn.js";import"./PurePanel-D-acr7dq.js";import"./index-CzVMtVNG.js";import"./index-DkFoMYKp.js";import"./index-BS-lKpfp.js";import"./index-BLfDZMhm.js";import"./EyeOutlined-Bg3r5MgD.js";import"./SearchOutlined-D9fOO97r.js";import"./index-BJV2RKZs.js";import"./index-BpV7PMvH.js";import"./videos-CghAk2Rd.js";import"./index-yQHEoVUJ.js";import"./responsiveObserver-iFkZEcCe.js";import"./useBreakpoint-BPhYmOEZ.js";import"./index-D6AoPl_a.js";import"./index-fvVy-agd.js";import"./index-DHeOvKpk.js";import"./index-_gaFFdK4.js";import"./index-DL9hAwRK.js";import"./Pagination-BsADF-XU.js";import"./row-Ddbct3SU.js";import"./addEventListener-DkVO5My1.js";function Z({target:e,highlight:r}){const s=i.useCallback(async o=>r!=null&&r.id?await l(r.id):void 0,[r]),p=i.useCallback(o=>t.jsxs(x.Item,{children:[t.jsx(v,{src:o.image,width:200,height:330,style:{objectFit:"cover",borderRadius:10},preview:o.video?{destroyOnClose:!0,imageRender:()=>t.jsx(u,{src:o.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}:!0}),o.video&&t.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:d.IGVideo})]}),[]),a=i.useCallback((o,n)=>{const m=!!o.video;return{url:m?o.video:o.image,name:o.id+(m?".mp4":".jpg")}},[]);return t.jsx(c,{collectionName:(e==null?void 0:e.igName)+" - IG Highlight - "+r.title,fetchNext:s,renderItem:p,downloadItem:a,rowKey:o=>o.id,once:!0})}export{Z as default};
