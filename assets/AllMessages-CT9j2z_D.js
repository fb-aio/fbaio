const __vite__fileDeps=["./MyTable-D6bcg-Y4.js","./index-CiqHonqG.js","./index-DfqnkV-X.css","./MyApp-BK3WXPWS.js","./index-DRam9FhS.js","./Table-Dgi73Th1.js","./index-TKSdDrE6.js","./addEventListener-Cumd2fTL.js","./index-L5dzJf2_.js","./PurePanel-C7vt4FTg.js","./SearchOutlined-BQr2Q1Wv.js","./index-DEc60f7A.js","./index-B64Bnvgx.js","./Dropdown-X8gX3BUB.js","./useBreakpoint-Bdeh8Df6.js","./responsiveObserver-BzL1esFn.js","./Pagination-D4ptuC4f.js","./index-Mh2hjKM_.js","./EyeOutlined-Cz7AFRl_.js","./row-DCFVYepe.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{aD as _,ap as S,aq as V,r as k,av as t,aA as W,aw as h}from"./index-CiqHonqG.js";import{c as $,u as J,e as Q,t as y,g as A,T as g,h as Z,b as j,i as ee,o as I,B as ne,j as F}from"./MyApp-BK3WXPWS.js";import{E as te}from"./ExportButton-NusP-Dmm.js";import{g as ie,a as ae,s as se}from"./messages-Da-VK2CF.js";import{f as oe}from"./file-download-wwe2wnqN.js";import{d as le}from"./dayjs.min-EEo42VO9.js";import{R as L}from"./row-DCFVYepe.js";import{T as E}from"./index-G8Zz082d.js";import{T as re}from"./index-TKSdDrE6.js";import{D as ce}from"./index-B64Bnvgx.js";import{A as f}from"./index-DzP0FUvd.js";import{I as G}from"./index-Dr8g8EMa.js";import"./responsiveObserver-BzL1esFn.js";import"./Dropdown-X8gX3BUB.js";import"./PurePanel-C7vt4FTg.js";import"./useBreakpoint-Bdeh8Df6.js";import"./index-DJqpF4WD.js";import"./EyeOutlined-Cz7AFRl_.js";import"./addEventListener-Cumd2fTL.js";const de=k.lazy(()=>W(()=>import("./MyTable-D6bcg-Y4.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]),import.meta.url)),{Title:R}=re,U=l=>{const u=new Set;return l.map(i=>i.isGroup?i.participants.map(m=>({uid:m.id,name:m.name})):{uid:i.id,name:i.name}).flat().forEach(({uid:i,name:m})=>{u.has(i)||u.add({uid:i,name:m})}),Array.from(u.values())};function q(l){return l.name=="-no data-"||l.name=="Người dùng Facebook"}function Ie(){const{message:l,notification:u}=$(),{ti:i}=J(),m=_(),p=S(V.profile)??{},[r,B]=Q("AllMessages.data",[]),[w,C]=k.useState(!1);k.useEffect(()=>{r!=null&&r.length||b()},[]);const b=()=>{if(w)return;const e="AllMessages:onClickReload";y(e),l.loading({key:e,duration:0,content:i({en:"Fetching messages...",vi:"Đang tải tin nhắn"})}),C(!0),ie().then(n=>{if(console.log(n),!(n!=null&&n.length))return l.error({key:e,content:i({en:"No data to show",vi:"Không có dữ liệu"})});B(n),l.success({key:e,content:i({en:"Fetch messages completed",vi:"Tải xong tin nhắn"})})}).catch(n=>{l.error({key:e,content:i({en:"Failed to fetch messages",vi:"Lỗi tải tin nhắn"})+": "+n.message}),console.log(n)}).finally(()=>{C(!1)})},H=e=>{console.log(e)},P=e=>()=>{var n,a,s,o;y("AllMessages:onClickFirstMessages"),m("/messages/first",{state:{threadId:e.id||((a=(n=e==null?void 0:e.participants)==null?void 0:n[0])==null?void 0:a.id),threadName:e.name||((o=(s=e==null?void 0:e.participants)==null?void 0:s[0])==null?void 0:o.name)}})},z=async e=>{if(!await F())return;y("AllMessages:onClickDownloadMultipleThreads");for(let a of e)if(await T(a))break},T=async e=>{if(!await F())return;const n="AllMessages:onClickDownloadThread";y(n);const a=e.name,s=n+e.id;l.loading({key:s,duration:0,content:i({en:"Downloading messages...",vi:"Đang tải tin nhắn..."})+a});let o=!1;const d=await ae({threadId:e.id,checkStopFn:()=>o,progressCallback:x=>{l.loading({key:s,duration:0,content:t.jsxs(t.Fragment,{children:[i({en:"Downloading messages... ",vi:"Đang tải tin nhắn... "})+a,t.jsx("br",{}),x.length,i({en:" messages",vi:" tin nhắn"}),t.jsx("br",{}),le(x[0].time).format("YYYY-MM-DD HH:mm:ss"),t.jsx("br",{}),t.jsx("i",{children:i({en:"Click to stop",vi:"Bấm để dừng"})})]}),onClick:()=>{l.loading({key:s,duration:0,content:i({en:"Stopping...",vi:"Đang dừng..."})}),o=!0}})}});l.destroy(s),u.open({type:"success",duration:0,message:i(o?{en:"Download stopped: ",vi:"Đã dừng tải: "}:{en:"Download completed: ",vi:"Tải xong: "})+a,description:d.length+i({en:" messages",vi:" tin nhắn"})});const v=se({threadId:e.id||"",threadName:a,myUid:(p==null?void 0:p.uid)||"",msgs:d});return oe(v,a+".html"),o},Y=(e,n,a)=>{var s,o,d,v,x,D,N,M;return t.jsxs(L,{align:"middle",children:[n.isGroup?t.jsx(ce,{arrow:!0,overlayStyle:{maxHeight:"350px",overflow:"auto",border:"1px dashed gray",borderRadius:"5px"},menu:{items:[{key:"-1",type:"group",label:t.jsx(R,{level:5,style:{textAlign:"center"},children:i({en:`${(s=n.participants)==null?void 0:s.length} members`,vi:`${(o=n.participants)==null?void 0:o.length} thành viên`})})},{type:"divider"},...((v=(d=n.participants)==null?void 0:d.map)==null?void 0:v.call(d,c=>({key:c.id,label:t.jsx("b",{children:c.name}),icon:t.jsx(f,{shape:"square",src:c.avatar}),onClick:()=>window.open(Z(c.id))})))||[]]},children:t.jsx(j,{children:n.image?t.jsx(f,{shape:"square",size:40,src:t.jsx(G,{src:n.image})}):t.jsx(f.Group,{max:{count:5},children:n.participants.filter(c=>c.id!=(p==null?void 0:p.id)).map(c=>t.jsx(f,{src:c.avatar},c.id))})})}):t.jsx(f,{shape:"square",size:40,src:t.jsx(G,{src:n.image||ee((D=(x=n.participants)==null?void 0:x[0])==null?void 0:D.id),fallback:(M=(N=n.participants)==null?void 0:N[0])==null?void 0:M.avatar})}),t.jsx("a",{href:n.url,target:"_blank",style:{marginLeft:"10px"},children:t.jsx("b",{children:n.name})})]})},K=(e,n,a)=>t.jsxs(j.Compact,{children:[t.jsx(g,{title:i({en:"First messages",vi:"Tin nhắn đầu tiên"}),children:t.jsx(h,{type:"primary",icon:t.jsx("i",{className:"fa-solid fa-clock-rotate-left"}),onClick:P(n)})}),t.jsx(g,{title:i({en:"Download messages",vi:"Tải cuộc trò chuyện"}),children:t.jsx(h,{type:"primary",icon:t.jsx("i",{className:"fa-solid fa-download"}),onClick:()=>T(n)})}),t.jsx(g,{title:i({en:"Delete (Coming soon)",vi:"Xoá (Sắp có)"}),children:t.jsx(h,{danger:!0,disabled:!0,icon:t.jsx("i",{className:"fa-solid fa-trash"})})})]}),O=[{title:"#",key:"recent",dataIndex:"recent",sorter:(e,n)=>e.recent-n.recent,render:(e,n,a)=>n.recent+1,width:70,align:"center",headerAlign:"center"},{title:i({en:"Name",vi:"Tên"}),dataIndex:"name",key:"name",sorter:(e,n)=>e.name.localeCompare(n.name),render:Y,filters:[{text:i({en:"Inactive (",vi:"Không hoạt động ("})+r.filter(q).length+")",value:"inactive"}],onFilter:(e,n)=>e=="inactive"?q(n):!0,onSearch:(e,n,a)=>{let s=e.toLowerCase();return a.name.toLocaleLowerCase().includes(s)||a.participants.some(o=>o.name.toLocaleLowerCase().includes(s))},width:"auto"},{title:"Id",dataIndex:"id",key:"id",sorter:(e,n)=>e.id>n.id,onSearch:(e,n,a)=>{let s=e.toLowerCase();return a.id.includes(s)||a.participants.some(o=>o.id.includes(s))},width:150},{title:i({en:"Messages",vi:"Tin nhắn"}),dataIndex:"count",key:"count",sorter:(e,n)=>e.count-n.count,render:(e,n,a)=>A(n.count),width:100,align:"right"},{title:i({en:"Members",vi:"Nguời"}),dataIndex:"participants",key:"participants",sorter:(e,n)=>e.participants.length-n.participants.length,render:(e,n,a)=>A(n.participants.length),width:100,align:"right"},{title:i({en:"Type",vi:"Loại"}),dataIndex:"type",key:"type",render:(e,n,a)=>n.isGroup?i({en:"Group",vi:"Nhóm"}):i({en:"Personal",vi:"Cá nhân"}),filters:[{text:i({en:"Group (",vi:"Nhóm ("})+r.filter(e=>e.isGroup).length+")",value:!0},{text:i({en:"Personal (",vi:"Cá nhân ("})+r.filter(e=>!e.isGroup).length+")",value:!1}],onFilter:(e,n)=>n.isGroup==e,width:100,align:"right"},{title:i({en:"Action",vi:"Hành động"}),dataIndex:"action",key:"download",render:K,width:150,align:"right"}],X=e=>t.jsxs(t.Fragment,{children:[t.jsx(h,{type:"primary",icon:w?t.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):t.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:b,children:i({en:"Reload",vi:"Tải lại"})}),t.jsx(te,{data:e.length?e:r,options:[{key:"uid",label:".txt (uid)",prepareData:n=>({fileName:"messages_uid.txt",data:U(n).map(a=>a.uid).join(`
`)})},{key:"uid_name",label:".csv (uid+name)",prepareData:n=>({fileName:"messages_uid_name.csv",data:I(U(n))})},{key:"json",label:".json",prepareData:n=>({fileName:"messages.json",data:JSON.stringify(n,null,2)})},{key:"csv",label:".csv",prepareData:n=>({fileName:"messages.csv",data:I(n.map(a=>({...a,participants:a.participants.map(s=>s.name).join(", "),participantIds:a.participants.map(s=>s.id).join(", ")})))})}]}),t.jsxs(j.Compact,{children:[t.jsx(g,{title:i({en:"Delete selected (Coming soon)",vi:"Xoá lựa chọn (Sắp có)"}),children:t.jsx(h,{danger:!0,disabled:!0,icon:t.jsx("i",{className:"fa-solid fa-trash-can"}),onClick:()=>H(e),children:i({en:"Delete",vi:"Xoá"})+(e.length?" "+e.length:"")})}),t.jsx(ne,{color:"purple",style:{color:"white"},count:i({en:"New",vi:"Mới"}),children:t.jsx(g,{title:e.length?i({en:"Download "+e.length+" messages",vi:"Tải "+e.length+" cuộc trò chuyện"}):i({en:"Select messages to download",vi:"Chọn cuộc trò chuyện để tải"}),children:t.jsxs(h,{disabled:!(e!=null&&e.length),icon:t.jsx("i",{className:"fa-solid fa-download"}),onClick:()=>z(e),children:[i({en:"Download ",vi:"Tải "})," ",e.length||""]})})})]})]});return t.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[t.jsxs(L,{align:"middle",style:{margin:"16px"},children:[t.jsx(R,{level:3,style:{margin:0},children:i({en:"Messages manager",vi:"Quản lý tin nhắn"})}),t.jsx(E,{style:{marginLeft:"10px",fontWeight:"bold",color:"#888"},children:r.length}),t.jsx(g,{title:i({en:'Can only view messages that not have "End to end encryption" (e2ee)',vi:'Chỉ có thể xem tin nhắn không bị "Mã hoá đầu cuối" (e2ee)'}),children:t.jsx(E,{color:"orange",icon:t.jsx("i",{className:"fa-solid fa-lock-open"}),children:" "+i({en:"Only none e2ee",vi:"Không bị mã hoá đầu cuối"})})})]}),t.jsx(de,{data:r,columns:O,size:"small",searchable:!0,selectable:!0,keyExtractor:e=>e==null?void 0:e.id,style:{flex:1,maxHeight:"100%"},renderTitle:X})]})}export{Ie as default};
