import{r as a,aq as r}from"./index-DOOTCcHC.js";import{g as x}from"./index-BVDgm17l.js";import{S as v,Q as f}from"./MyApp-C1Cge4LI.js";import{i as d}from"./icons-CFbfSnRt.js";import{C as g}from"./Collection-J0vJyBVX.js";import{L as m}from"./index-DBKoNkzi.js";import{I as j}from"./index-BhyrVf84.js";import"./useCacheState-Bvty8fNQ.js";import"./index-vuHwb1ab.js";import"./index-CbAUgUyr.js";import"./responsiveObserver-CeUCIo-a.js";import"./useBreakpoint-DW8QQd81.js";import"./index-sMO--aLY.js";import"./index-Bc98y0DP.js";import"./PurePanel-qusS7nQi.js";import"./index-CCWRB7N3.js";import"./TextArea-D20a544N.js";import"./addEventListener-wLIjlol3.js";import"./index-Ca7Kc3Y2.js";import"./Dropdown-uE1te4Kd.js";import"./index-VkO8Bqyd.js";import"./index-Cs-LNwoF.js";import"./file-download-Dycc4scI.js";import"./index-9LEuxGJt.js";import"./Pagination-CV8j8exz.js";import"./row-BE6NqmDN.js";function B({target:t}){const u=a.useCallback(async(o=[],n)=>{var s;return t!=null&&t.id?await x(t.igName,n||((s=o[o.length-1])==null?void 0:s.cursor)):void 0},[t]),p=a.useCallback(o=>{var n,i,s;return r.jsxs(m.Item,{children:[r.jsx(j,{src:o.image,width:250,height:250,style:{objectFit:"cover"},preview:o.video||(n=o.carousel)!=null&&n.length?{destroyOnClose:!0,imageRender:()=>{var e;return(e=o.carousel)!=null&&e.length?r.jsx(v,{style:{maxWidth:"90vw",maxHeight:"90vh",alignItems:"center",overflowY:"auto",overflowX:"hidden"},children:r.jsx(m,{grid:{gutter:10},style:{width:"100%"},dataSource:o.carousel,renderItem:p,rowKey:l=>l.id})}):r.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:o.video,style:{maxWidth:"90vw",maxHeight:"90vh"}})},toolbarRender:()=>null}:void 0}),r.jsx("p",{style:{wordWrap:"break-word",maxWidth:250,padding:5},title:o.caption,children:f(o.caption,30)}),r.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:((i=o.carousel)==null?void 0:i.length)>0?r.jsxs(r.Fragment,{children:[r.jsx("span",{children:(s=o.carousel)==null?void 0:s.length}),d.IGCarousel]}):o.video?d.IGVideo:null})]})},[]),h=a.useCallback((o,n)=>{var s;function i(e,l=""){const c=!!e.video;return{url:c?e.video:e.image,name:l+e.id+(c?".mp4":".jpg")}}return((s=o.carousel)==null?void 0:s.length)>0?o.carousel.map((e,l)=>i(e,l+"_")):i(o)},[]);return r.jsx(g,{collectionName:(t==null?void 0:t.igName)+" - IG Posts",fetchNext:u,renderItem:p,downloadItem:h,getItemCursor:o=>o.cursor||"",rowKey:o=>o.id})}export{B as default};