import{r as i,av as t}from"./index-BzHjJZ6J.js";import{i as d}from"./icons-CNx5S1nY.js";import{C as c}from"./Collection-ByG1P6_c.js";import{a as l}from"./highlights-Tf3QvPQ8.js";import{L as u}from"./index-CDYyC9gD.js";import{I as v}from"./index-isaRSNRL.js";import"./index-CjOrqomX.js";import"./file-download-wydYP9pK.js";import"./MyApp-P_ZAPtxc.js";import"./index-CJ9N7clN.js";import"./Dropdown-Dgn2-KTF.js";import"./PurePanel-nLO0RZ46.js";import"./index-CzUkjAGb.js";import"./index-Cd_NWbNz.js";import"./index-DM0pvvLI.js";import"./index-CxjRYcOo.js";import"./addEventListener-CYR6kZcj.js";import"./index-C3yQlH26.js";import"./index-CKkwT6fB.js";import"./index-BTUpxhrV.js";import"./index-B3hIcIR4.js";import"./useBreakpoint-1TxoALFb.js";import"./index-Cfi9UxPj.js";import"./index-BNHfpCXa.js";import"./index-BSxkTIuz.js";import"./index-DDkJ4-4M.js";import"./Pagination-PNe0cuUg.js";import"./row-CrtjfzA9.js";function Q({target:e,highlight:r}){const m=i.useCallback(async o=>r!=null&&r.id?await l(r.id):void 0,[r]),p=i.useCallback(o=>t.jsxs(u.Item,{children:[t.jsx(v,{src:o.image,width:200,height:330,style:{objectFit:"cover"},preview:o.video?{destroyOnClose:!0,imageRender:()=>t.jsx("video",{autoPlay:!0,controls:!0,loop:!0,src:o.video,style:{maxWidth:"90vw",maxHeight:"90vh"}}),toolbarRender:()=>null}:!0}),o.video&&t.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:d.IGVideo})]}),[]),a=i.useCallback((o,n)=>{const s=!!o.video;return{url:s?o.video:o.image,name:o.id+(s?".mp4":".jpg")}},[]);return t.jsx(c,{collectionName:(e==null?void 0:e.igName)+" - IG Highlight - "+r.title,fetchNext:m,renderItem:p,downloadItem:a,rowKey:o=>o.id,once:!0})}export{Q as default};
