import{aI as x,r as f,aA as e,aB as i,aU as g}from"./index-wZlHKvIC.js";import{u,t as l,O as y,L as b,T as n,B as j,b as w,ay as k}from"./MyApp-BoAWzGij.js";import{C as v}from"./Collection-D2fRTfTv.js";import S from"./RecentStoryViewer-Cuf5a0Cs.js";import{b as F,a as R}from"./stories-CDbqRXyD.js";import{A as B}from"./index-BrcBDEr3.js";import{L as N}from"./index-CX2aivbE.js";import{I as T}from"./index-BalxX6fZ.js";import{P as C}from"./index-BZVgmXPP.js";import{A as I}from"./index-dyO0wsFl.js";import{T as E}from"./index-Bv_gDArU.js";import"./index-C5zhxkfZ.js";import"./file-download-BQ7ExDj3.js";import"./index-DyxODtZq.js";import"./Dropdown-Ce6gRozi.js";import"./PurePanel-DZcz0OHg.js";import"./index-CiYw3fNR.js";import"./index-gNcxpNQ1.js";import"./TextArea-DZxd1cfF.js";import"./EyeOutlined-C0Xyk1pP.js";import"./SearchOutlined-d-cJSqkw.js";import"./index-kQEphdM5.js";import"./StoryViewers-BkJKeafN.js";import"./VideoWithMuted-Dgu0_O18.js";import"./Pagination-BCW-H6N6.js";import"./useBreakpoint-OUxgu0-V.js";import"./responsiveObserver-BoSTImBj.js";import"./index-znDtBKj-.js";import"./row-zII7X2E0.js";import"./addEventListener-DUkyYCb2.js";function ce(){const{ti:t}=u(),c=x();f.useEffect(()=>{l("RecentStories:onLoad")},[]);const m=o=>{c("/bulk-downloader",{state:{targetId:o,platform:g.Facebook}})},d=async(o,s)=>{var a;return await F(s||((a=o==null?void 0:o[o.length-1])==null?void 0:a.cursor)||"")},p=(o,s)=>e.jsx(N.Item,{children:e.jsxs(j.Ribbon,{text:o.stories.length,style:{opacity:o.stories.length>1?1:0},children:[e.jsx(T,{src:o.thumbnail,style:{width:160,height:270,borderRadius:10,objectFit:"cover"},preview:{destroyOnClose:!0,toolbarRender:()=>null,imageRender:()=>e.jsx(S,{story:o})}}),e.jsx("div",{style:{position:"absolute",top:10,left:10},children:e.jsxs(C,{title:o.seen?e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa-solid fa-eye"})," ",o.owner.name," ",t({en:" KNOW you saw",vi:" BIẾT bạn đã xem"})]}):o.owner.name,content:e.jsxs(w.Compact,{children:[e.jsx(n,{title:t({en:"Bulk downloader",vi:"Tải hàng loạt"}),placement:"bottom",children:e.jsx(i,{icon:e.jsx("i",{className:"fa-solid fa-download"}),onClick:()=>m(o.owner.id)})}),e.jsx(n,{title:t({en:"Open Facebook",vi:"Mở Facebook"}),placement:"bottom",children:e.jsx(i,{icon:e.jsx("i",{className:"fa-solid fa-external-link"}),onClick:()=>{window.open("https://fb.com/"+o.owner.id)}})})]}),children:[e.jsx(I,{src:o.owner.avatar,size:40,style:{borderWidth:4,borderColor:"#0866FF"}}),o.seen?e.jsx("i",{className:"fa-solid fa-eye fa-lg",style:{position:"absolute",bottom:0,right:0}}):null]})}),e.jsx("div",{style:{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",position:"absolute",bottom:0,left:0,padding:"5px 10px",width:"100%",paddingTop:"50px",pointerEvents:"none"},children:e.jsx(E.Text,{style:{color:"#eee"},children:o.owner.name})})]})}),h=async o=>(await R(o.bucket_id)).map((r,a)=>({name:k(o.owner.name)+(r.video?".mp4":".jpg"),url:r.video||r.image||r.thumbnail}));return e.jsx(v,{collectionName:"Recent Stories "+y(),fetchNext:d,renderItem:p,downloadItem:h,getItemCursor:o=>o==null?void 0:o.cursor,rowKey:o=>o.bucket_id,all:!0,onSearch:(o,s)=>b(o,s.owner.name),header:()=>e.jsx(B,{type:"info",message:e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa fa-eye-slash",style:{color:"gray"}})," ",t({en:"View stories anonymously - Friends won't know you've viewed their stories",vi:"Xem tin ẩn danh - Bạn bè sẽ không biết bạn đã xem tin của họ"})]})}),headerButtons:()=>e.jsx(e.Fragment,{children:e.jsx(n,{title:e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa fa-history"})," ",t({en:"Story feedback history",vi:"Lịch sử hoạt động trên Tin"})]}),children:e.jsx(i,{icon:e.jsx("i",{className:"fa-solid fa-up-right-from-square"}),onClick:()=>{l("RecentStories:clickHistory"),window.open("https://www.facebook.com/me/allactivity/?category_key=STORIESFEEDBACK","_blank")},children:t({en:"History",vi:"Lịch sử"})})})})})}export{ce as default};
