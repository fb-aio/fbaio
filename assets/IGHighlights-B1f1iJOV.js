import{r as e,ao as o}from"./index-BxRYHkJL.js";import{b as c,c as d}from"./index-DRORVKGn.js";import{X as u}from"./MyApp-CGWVdzbp.js";import{C as f}from"./Collection-CbKhGYuO.js";import{L as h}from"./index-C2GEfaBB.js";import{I as x}from"./index-f3p4BMYt.js";import"./index-vuHwb1ab.js";import"./index-C7yc-wjO.js";import"./responsiveObserver-Bww-Putd.js";import"./useBreakpoint-Co9vvPf3.js";import"./index-DhrJbGgQ.js";import"./index-DCPkfEUU.js";import"./PurePanel-D3AplRC1.js";import"./index-BkjL2z4l.js";import"./TextArea-DDMcUY6-.js";import"./index-BleIcAv9.js";import"./addEventListener-D9lzm36l.js";import"./index-tg5MvOd_.js";import"./Dropdown-CKjT4yVf.js";import"./index-mwe-kUQz.js";import"./index-CNJa16Vi.js";import"./file-download-p-Hf9z5I.js";import"./index-Dg4mo5SE.js";import"./Pagination-BlzlBET0.js";import"./row-CwCBDuov.js";function D({target:r,onOpenHighlight:s}){const a=e.useCallback(async(i=[])=>r!=null&&r.id?i.length?[]:await c(r.id):void 0,[r]),p=e.useCallback(i=>o.jsxs(h.Item,{children:[o.jsx(x,{src:i.cover,width:100,height:100,style:{objectFit:"cover",borderRadius:"50%",cursor:"pointer"},preview:!1,onClick:()=>{s==null||s(i)}}),o.jsx("a",{href:"https://www.instagram.com/stories/highlights/"+i.id.split(":")[1],target:"_blank",style:{display:"block",wordWrap:"break-word",maxWidth:100,padding:5,fontWeight:"bold",textAlign:"center",fontSize:"1em"},title:i.title,children:u(i.title,30)})]}),[]),l=e.useCallback(async(i,n)=>(await d(i.id)).map(t=>{const m=!!t.video;return{url:m?t.video:t.image,name:t.id+(m?".mp4":".jpg")}}),[]);return o.jsx(f,{collectionName:(r==null?void 0:r.igName)+" - IG Highlights",fetchNext:a,renderItem:p,downloadItem:l,rowKey:i=>i.id})}export{D as default};
