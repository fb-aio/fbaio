import{aG as u,aZ as f,r as g,aI as e,aF as b,bf as y,aK as a,cm as w,bg as j}from"./index-DX7e3EX-.js";import{C as k}from"./Collection-DHYGLq6C.js";import v from"./RecentStoryViewer-FslFMixY.js";import{t as l,T as i,B as c,S as F}from"./MyApp-DsQhmCw_.js";import{b as R,a as S}from"./stories-f-vD4rjR.js";import{A as N}from"./index-Cp6tT5Ul.js";import{L as T}from"./index-CNiVMrHl.js";import{I}from"./index-BuMqwWrG.js";import{P as B}from"./index-DfTN2Nud.js";import{A as C}from"./index-B5meuGV4.js";import{T as E}from"./index-ovOV5J2z.js";import"./index-DVsd4bHh.js";import"./file-download-DbEKv77y.js";import"./index-CT7Pxvlk.js";import"./Dropdown-DHY89eZ6.js";import"./PurePanel-CrHDJq7-.js";import"./index-BR54RbR0.js";import"./index-DqL514As.js";import"./EyeOutlined-doPhaJPr.js";import"./SearchOutlined-DeDkIuiA.js";import"./index-D_94nZQH.js";import"./StoryViewers-CMY7kCDM.js";import"./VideoWithMuted-DoL-Ld20.js";import"./Pagination-DJKH-2sc.js";import"./useBreakpoint-Cf7NoSo5.js";import"./responsiveObserver-Bzlqtgls.js";import"./index-CW7Y_FGE.js";import"./row-DNu_gVg4.js";import"./addEventListener-C8HCOjYU.js";function le(){const{ti:t}=u(),m=f();g.useEffect(()=>{l("RecentStories:onLoad")},[]);const d=o=>{m("/bulk-downloader",{state:{targetId:o,platform:j.Facebook}})},p=async(o,r)=>{var n;return await R(r||((n=o==null?void 0:o[o.length-1])==null?void 0:n.cursor)||"")},h=(o,r)=>e.jsx(T.Item,{children:e.jsxs(c.Ribbon,{text:o.stories.length,style:{opacity:o.stories.length>1?1:0},children:[e.jsx(I,{src:o.thumbnail,style:{width:160,height:270,borderRadius:10,objectFit:"cover"},preview:{destroyOnClose:!0,toolbarRender:()=>null,imageRender:()=>e.jsx(v,{story:o})}}),e.jsx("div",{style:{position:"absolute",top:10,left:10},children:e.jsxs(B,{title:o.seen?e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-eye"})," ",o.owner.name," ",t({en:" KNOW you saw",vi:" BIẾT bạn đã xem"})]}):o.owner.name,content:e.jsxs(F.Compact,{children:[e.jsx(i,{title:t({en:"Bulk downloader",vi:"Tải hàng loạt"}),placement:"bottom",children:e.jsx(a,{icon:e.jsx("i",{className:"fa-solid fa-download"}),onClick:()=>d(o.owner.id)})}),e.jsx(i,{title:t({en:"Open Facebook",vi:"Mở Facebook"}),placement:"bottom",children:e.jsx(a,{icon:e.jsx("i",{className:"fa-solid fa-external-link"}),onClick:()=>{window.open("https://fb.com/"+o.owner.id)}})})]}),children:[e.jsx(C,{src:o.owner.avatar,size:40,style:{borderWidth:4,borderColor:"#0866FF"}}),o.seen?e.jsx("i",{className:"fa-solid fa-eye fa-lg",style:{position:"absolute",bottom:0,right:0}}):null]})}),e.jsx("div",{style:{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",position:"absolute",bottom:0,left:0,padding:"5px 10px",width:"100%",paddingTop:"50px",pointerEvents:"none"},children:e.jsx(E.Text,{style:{color:"#eee"},children:o.owner.name})})]})}),x=async o=>(await S(o.bucket_id)).map((s,n)=>({name:w(o.owner.name)+(s.video?".mp4":".jpg"),url:s.video||s.image||s.thumbnail}));return e.jsx(k,{collectionName:"Recent Stories "+b(),fetchNext:p,renderItem:h,downloadItem:x,getItemCursor:o=>o==null?void 0:o.cursor,rowKey:o=>o.bucket_id,all:!0,onSearch:(o,r)=>y(o,r.owner.name),header:()=>e.jsx(N,{type:"info",message:e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa fa-eye-slash",style:{color:"gray"}})," ",t({en:"View stories anonymously - Friends won't know you've viewed their stories",vi:"Xem tin ẩn danh - Bạn bè sẽ không biết bạn đã xem tin của họ"})]})}),headerButtons:()=>e.jsx(e.Fragment,{children:e.jsx(i,{title:e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa fa-history"})," ",t({en:"Undo your reactions on Facebook story",vi:"Thu hồi cảm xúc đã thả trên Facebook story"})]}),children:e.jsx(c,{count:t({en:"New",vi:"Mới"}),style:{zIndex:1,color:"white"},color:"purple",children:e.jsx(a,{icon:e.jsx("i",{className:"fa-solid fa-up-right-from-square"}),onClick:()=>{l("RecentStories:clickHistory"),window.open("https://www.facebook.com/me/allactivity/?category_key=STORIESFEEDBACK","_blank")},children:t({en:"Remove reactions",vi:"Thu hồi cảm xúc"})})})})})})}export{le as default};
