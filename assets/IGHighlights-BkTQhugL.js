import{r as e,ar as t}from"./index-BMyuObdO.js";import{a7 as n}from"./MyApp-CIOfTwJw.js";import{C as c}from"./Collection-mJRNlwQT.js";import{g as u,a as f}from"./highlights-fq3m50cB.js";import{L as h}from"./index-BIVbQZmB.js";import{I as x}from"./index-B6Fsbq1o.js";import"./index-DBmigc9r.js";import"./file-download-B9IWrMaY.js";import"./index-NJSF5PH1.js";import"./Dropdown-tas4I0bP.js";import"./PurePanel-DQJC-DMk.js";import"./index-Ca2hj0h8.js";import"./index-toMHYDV0.js";import"./index-B8bbcs-q.js";import"./index-CTnwZgWp.js";import"./addEventListener-lxefO61D.js";import"./index-CCn1OFS3.js";import"./index-Dn2DQkyO.js";import"./index-BxKdYS7A.js";import"./index-BQT7z3C8.js";import"./responsiveObserver-CmpGC2F4.js";import"./useBreakpoint-DsaGC9Dp.js";import"./index-fAP62-KX.js";import"./index-BezmfSvf.js";import"./index-ByJuuTE0.js";import"./index-CXWj1xGA.js";import"./Pagination-CBDsRBgw.js";import"./row-Cn0VLpf-.js";function Q({target:r,onOpenHighlight:s}){const a=e.useCallback(async(i=[])=>r!=null&&r.id?i.length?[]:await u(r.id):void 0,[r]),p=e.useCallback(i=>t.jsxs(h.Item,{children:[t.jsx(x,{src:i.cover,width:100,height:100,style:{objectFit:"cover",borderRadius:"50%",cursor:"pointer"},preview:!1,onClick:()=>{s==null||s(i)}}),t.jsx("a",{href:"https://www.instagram.com/stories/highlights/"+i.id.split(":")[1],target:"_blank",style:{display:"block",wordWrap:"break-word",maxWidth:100,padding:5,fontWeight:"bold",textAlign:"center",fontSize:"1em"},title:i.title,children:n(i.title,30)})]}),[]),l=e.useCallback(async(i,d)=>(await f(i.id)).map(o=>{const m=!!o.video;return{url:m?o.video:o.image,name:o.id+(m?".mp4":".jpg")}}),[]);return t.jsx(c,{collectionName:(r==null?void 0:r.igName)+" - IG Highlights",fetchNext:a,renderItem:p,downloadItem:l,rowKey:i=>i.id})}export{Q as default};
