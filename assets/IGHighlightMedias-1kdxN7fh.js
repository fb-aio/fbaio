import{r as i,av as t}from"./index-DYL9mGRk.js";import{i as d}from"./icons-LqzAKWUB.js";import{C as c}from"./Collection-Cynkg5cH.js";import{a as l}from"./highlights-DnudtUDg.js";import{V as u}from"./VideoWithMuted-CpoKlLPp.js";import{L as x}from"./index-C7kSB3_N.js";import{I as v}from"./index-YJnDJyza.js";import"./index-jXD-uTg2.js";import"./file-download-LORRQMXp.js";import"./MyApp-CY91n_UU.js";import"./index-mtlhtjeL.js";import"./Dropdown-DpGZ-54l.js";import"./PurePanel-D2NXTZJr.js";import"./index-CLojzUjG.js";import"./index-ChQriLID.js";import"./index-CQ3mEa-C.js";import"./EyeOutlined-Bo--TrFD.js";import"./SearchOutlined-kCsLe9-_.js";import"./index-BAnf6eLO.js";import"./index-CrWrK3-0.js";import"./videos-D122vxfG.js";import"./index-wa6PYU7D.js";import"./responsiveObserver-BnIQ_d1A.js";import"./useBreakpoint-C8WlvIiC.js";import"./index-AXqc-_Av.js";import"./index-CPiUW4dB.js";import"./index-zo2HiSlX.js";import"./index-CgJ96nV-.js";import"./Pagination-Bg_a53Jb.js";import"./row-CxkJK_hv.js";import"./addEventListener-BL59v1cY.js";function X({target:e,highlight:r}){const s=i.useCallback(async o=>r!=null&&r.id?await l(r.id):void 0,[r]),p=i.useCallback(o=>t.jsxs(x.Item,{children:[t.jsx(v,{src:o.image,width:200,height:330,style:{objectFit:"cover",borderRadius:10},preview:o.video?{destroyOnClose:!0,imageRender:()=>t.jsx(u,{src:o.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}:!0}),o.video&&t.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:d.IGVideo})]}),[]),a=i.useCallback((o,n)=>{const m=!!o.video;return{url:m?o.video:o.image,name:o.id+(m?".mp4":".jpg")}},[]);return t.jsx(c,{collectionName:(e==null?void 0:e.igName)+" - IG Highlight - "+r.title,fetchNext:s,renderItem:p,downloadItem:a,rowKey:o=>o.id,once:!0})}export{X as default};