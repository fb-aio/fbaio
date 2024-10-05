import{at as _,ap as I,aq as C,r as m,av as e,aw as j}from"./index-C0GZV8r4.js";import{u as F,d as v,b as n,f as L,g as E,h as U}from"./MyApp-5UuG5Alv.js";import{S as $}from"./StoryViewers-DG8H_gUD.js";import{e as z}from"./stories-BAoNFOKF.js";import{V as B}from"./VideoWithMuted-BYhYz8Pu.js";import{T as r}from"./index-CbZxyvQY.js";import{I as p}from"./index-DqYBXEs5.js";import{A as D}from"./index-CRcIzT1K.js";import{T as M}from"./index-CAxkHnSi.js";import"./Collection-DFbTstJo.js";import"./index-Ca7rCt7M.js";import"./file-download-BJF8e5Y0.js";import"./index-BFuDaB_r.js";import"./Dropdown-B7RIYLpN.js";import"./PurePanel-DK31J58S.js";import"./index-DBY2_SRc.js";import"./index-5vdqXesG.js";import"./index-D8nKmtSx.js";import"./addEventListener-D-0G3yIj.js";import"./index-B5sA0xfq.js";import"./index-ChuHj_qb.js";import"./Pagination-Bqljqj6K.js";import"./useBreakpoint-Bu9dHjAK.js";import"./row-DKHVyfQS.js";import"./index-9AWtuJYp.js";import"./index-CEX1fess.js";function pe({story:l}){const{ti:d}=F(),{message:y}=_.useApp(),f=I(C.darkMode),[o,b]=v("ArchivedStoryViewer.stories."+l.creation_time,[]),[c,x]=v("ArchivedStoryViewer.viewingIndex."+l.id,0),[u,g]=m.useState(!1),t=o[c]||o[0],w=t?Object.values(t.viewer_count).reduce((i,s)=>i+s,0):0,T=t?t.reactions.reduce((i,s)=>i+s.count,0):0,A=c<o.length-1,k=c>0,S=o.length===0&&!u,h=m.useRef(!1);m.useEffect(()=>{!(o!=null&&o.length)&&l.creation_time&&!h.current&&(g(!0),h.current=!0,z({creationTime:l.creation_time}).then(i=>{if(i){const s=i.findIndex(V=>V.id===l.id);b(i),x(s)}}).catch(i=>y.error(d({en:"Error: ",vi:"Lỗi: "}))+i.message).finally(()=>{g(!1),h.current=!1}))},[]);const a={height:"70vh",width:"calc(70vh * 9 / 16)"},N=m.useRef(null),R=t?[{key:"story",label:e.jsxs(r.Text,{children:[e.jsx("i",{className:"fa fa-play"})," Play"]}),children:e.jsxs(n,{direction:"vertical",style:{position:"relative"},children:[t.video?e.jsx(B,{src:t.video,style:{...a,borderRadius:10,objectFit:"contain"}}):t.image_background?e.jsxs(n,{direction:"vertical",style:{position:"relative"},children:[e.jsx(p,{src:t.image_background,preview:!1,style:{...a,borderRadius:10,objectFit:"contain"}}),e.jsx(p,{src:t.image,style:{...a,borderRadius:10,objectFit:"contain",position:"absolute",bottom:0,left:0,transform:"translate(-50%, 0)",opacity:.5}})]}):e.jsx(p,{src:t.image,style:{...a,borderRadius:10,objectFit:"contain"}}),e.jsx(n,{direction:"vertical",align:"start",style:{background:"linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",position:"absolute",top:0,left:0,padding:10,width:"100%",paddingBottom:"50px",borderRadius:10},children:[t.comment_count?{icon:e.jsx("i",{className:"fa-solid fa-message"}),text:t.comment_count}:null,t.music?{icon:e.jsx("i",{className:"fa-solid fa-music"}),text:t.music}:null].filter(Boolean).map((i,s)=>i&&e.jsxs(r.Text,{style:{color:"#eee",textAlign:"left"},children:[i.icon," ",i.text]},"story-statistic-"+s))})]})},{key:"viewer",label:e.jsxs(r.Text,{children:[e.jsx("i",{className:"fa fa-eye"})," ",w," "]}),children:e.jsxs(n,{direction:"vertical",style:{...a,width:450,overflowY:"auto",overflowX:"hidden",textAlign:"left",position:"relative"},children:[e.jsxs(r.Text,{children:[d({en:"Views",vi:"Lượt xem"}),":"]}),e.jsx("ul",{children:Object.entries(t.viewer_count).map(([i,s])=>e.jsx("li",{children:e.jsxs(r.Text,{style:{color:"#eee"},children:[i,": ",s]})},"story-viewer-"+i))}),e.jsx(n,{direction:"horizontal",style:{display:"flex",padding:10,alignItems:"center"},children:e.jsxs(r.Text,{style:{textDecoration:"underline"},children:[d({en:"Created date",vi:"Ngày đăng"}),e.jsx(r.Text,{style:{position:"absolute",right:10},children:L(new Date(t.created_at),d({en:"en-US",vi:"vi-VN"}))})]})}),e.jsx($,{storyId:t.id,initialViewers:t.viewers})]})},{key:"reactions",label:e.jsxs(r.Text,{children:[e.jsx("i",{className:"fa fa-heart"})," ",T," "]}),children:e.jsxs(n,{direction:"vertical",style:{overflowY:"auto",...a},align:"start",children:[e.jsxs(r.Text,{children:[d({en:"Reactions",vi:"Lượt thích"}),":"]}),t.reactions.map((i,s)=>e.jsxs(r.Link,{href:E(i.uid),style:{padding:"0 5px 5px",display:"block"},target:"_blank",children:[e.jsx(D,{src:U(i.uid,50),size:35}),e.jsx(r.Text,{style:{color:"#eee",textAlign:"left"},children:` ${i.count} ${i.reactions}`},"story-reaction-"+s)]},"story-reaction-"+s))]})}]:[];return e.jsxs(n,{direction:"vertical",style:{maxHeight:"100vh",overflowY:"auto",overflowX:"hidden",minWidth:a.width,minHeight:a.height,background:f?"#222":"#eee",color:f?"white":"#111",padding:10,borderRadius:10},ref:N,children:[e.jsxs(r.Text,{children:["Archived Story Viewer"," ",u?e.jsx("i",{className:"fa fa-spinner fa-spin"}):`(${c+1}/${o.length})`]}),S&&e.jsx("div",{children:"No data"}),t&&e.jsxs(n,{children:[e.jsx(j,{disabled:!k,onClick:()=>{x(c-1)},children:e.jsx("i",{className:"fa fa-chevron-left"})}),e.jsx(M,{defaultActiveKey:"story",items:R}),e.jsx(j,{disabled:!A,onClick:()=>{x(c+1)},children:e.jsx("i",{className:"fa fa-chevron-right"})})]})]})}export{pe as default};
