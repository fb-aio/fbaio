import{r as e,ap as t}from"./index-CJaVbnGD.js";import{a4 as n}from"./MyApp-Cb3LUwKI.js";import{C as c}from"./Collection-BGAhcSWd.js";import{g as u,a as f}from"./highlights-NSCB5rfN.js";import{L as h}from"./index-CAcCQb4o.js";import{I as x}from"./index-VHYOultD.js";import"./index-CoAyLWga.js";import"./file-download-7sx46_tB.js";import"./index-hQNM_UWx.js";import"./Dropdown-CTVtteyU.js";import"./PurePanel-Df0o7vnK.js";import"./index-SqWg6UAW.js";import"./index-C5H87xLX.js";import"./index-DgW53vNp.js";import"./TextArea-B0sMUHr-.js";import"./addEventListener-BEy-bbbd.js";import"./index-DtyXO5qB.js";import"./index-C54r_VE-.js";import"./index-DqHcdW4p.js";import"./index-DP7XXFVh.js";import"./responsiveObserver-MUZjbimK.js";import"./useBreakpoint-yUZkuHJ4.js";import"./index-Dhpvm-u-.js";import"./index-DPBMs5SG.js";import"./index-C5UKu_rK.js";import"./index-Bdj1DtMt.js";import"./index-DreCSCQn.js";import"./Pagination-COU-Z0ho.js";import"./row-Cd28j6bi.js";function T({target:r,onOpenHighlight:s}){const p=e.useCallback(async(i=[])=>r!=null&&r.id?i.length?[]:await u(r.id):void 0,[r]),a=e.useCallback(i=>t.jsxs(h.Item,{children:[t.jsx(x,{src:i.cover,width:100,height:100,style:{objectFit:"cover",borderRadius:"50%",cursor:"pointer"},preview:!1,onClick:()=>{s==null||s(i)}}),t.jsx("a",{href:"https://www.instagram.com/stories/highlights/"+i.id.split(":")[1],target:"_blank",style:{display:"block",wordWrap:"break-word",maxWidth:100,padding:5,fontWeight:"bold",textAlign:"center",fontSize:"1em"},title:i.title,children:n(i.title,30)})]}),[]),l=e.useCallback(async(i,d)=>(await f(i.id)).map(o=>{const m=!!o.video;return{url:m?o.video:o.image,name:o.id+(m?".mp4":".jpg")}}),[]);return t.jsx(c,{collectionName:(r==null?void 0:r.igName)+" - IG Highlights",fetchNext:p,renderItem:a,downloadItem:l,rowKey:i=>i.id})}export{T as default};
