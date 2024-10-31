const __vite__fileDeps=["./MyTable-DKSYkrf0.js","./index-COYbw2nA.js","./index-DfqnkV-X.css","./MyApp-BqOFGx1Y.js","./index-CuRhIo_n.js","./Table-DgateH40.js","./index-C2DU9lVT.js","./addEventListener-D2Oj2EJ2.js","./index-ChQ8N6ec.js","./PurePanel-n6z--zP8.js","./SearchOutlined-_u8rvD7y.js","./index-AGmSUtxm.js","./index-Bc35wtjH.js","./Dropdown-C0xfjFGB.js","./useBreakpoint-DVIPjZl0.js","./responsiveObserver-BI3UFpZ1.js","./Pagination-C49DcUwG.js","./index-DJ37g3_M.js","./EyeOutlined-DDdMQV6J.js","./row-CTG_2Oza.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{aI as X,r as T,aA as t,aB as g,aF as Q,aS as K,aT as Z}from"./index-COYbw2nA.js";import{d as C}from"./dayjs.min-C21WNVQ5.js";import{d as ee,u as ne,g as V,t as v,b as j,f as E,T as x,c as L,L as te,i as M,o as ie,k as $,M as I,U as P}from"./MyApp-BqOFGx1Y.js";import{u as se}from"./useForceStop-DFQb9CGK.js";import{E as ae}from"./ExportButton-BAyamkJ_.js";import{g as re,U as u,a as oe,S as k,l as le,b as ce}from"./groups-BbLFj_Uw.js";import{A as de}from"./index-Dype70px.js";import{T as Y}from"./index-C2DU9lVT.js";import{R as ue}from"./row-CTG_2Oza.js";import{P as pe}from"./index-CPsmkz3r.js";import"./file-download-DzAs5kbr.js";import"./index-Bc35wtjH.js";import"./Dropdown-C0xfjFGB.js";import"./PurePanel-n6z--zP8.js";import"./responsiveObserver-BI3UFpZ1.js";import"./useBreakpoint-DVIPjZl0.js";import"./index-BuHq4CJC.js";const me=T.lazy(()=>Q(()=>import("./MyTable-DKSYkrf0.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]),import.meta.url));function Fe(){const{message:d,notification:f}=ee(),A=X(),{ti:i}=ne(),U=se(),[m,D]=V("Groups.data",[]),[B,F]=V("Groups.finished",!1),[w,R]=T.useState(!1),S=T.useRef(null);T.useEffect(()=>{B||O(!1)},[]);const O=async(e=!1)=>{var o;if(w&&!e)return;const n=U.start(),s=e?[]:[...m],l=new Set(s.map(a=>a.id)),c="Groups:onReload";v(c),R(!0),F(!1);try{for(const[a,r]of[[re,u.ADMIN],[oe,u.MEMBER]]){const p=s[s.length-1];let N=e?"":(p==null?void 0:p.userType)===r?p==null?void 0:p.cursor:"";for(;!n.value();){d.loading({key:c,content:i({en:"Loading groups...",vi:"Đang tải nhóm..."})+s.length,duration:0});const h=await a({cursor:N}),y=h==null?void 0:h.filter(G=>!l.has(G.id));if(h.forEach(G=>l.add(G.id)),!(y!=null&&y.length))break;s.push(...y),N=(o=s==null?void 0:s[(s==null?void 0:s.length)-1])==null?void 0:o.cursor,D([...s])}}d.success({key:c,content:(n.value()?i({en:"Load groups stopped ",vi:"Dừng tải nhóm "}):i({en:"Load groups completed ",vi:"Tải xong nhóm "}))+s.length}),F(!n.value())}catch(a){d.error({content:i({en:"Failed to load groups: ",vi:"Lỗi tải nhóm: "})+a.message})}finally{R(!1)}},H=async e=>{if(!await $()||!(e!=null&&e.length))return;const n="Groups:onClickLeaveSelectedGroups",s="Groups:onClickLeaveSelectedGroups:waiting";v(n);let l=!1,c=[];for(let o=0;o<e.length&&(d.destroy(s),d.loading({key:n,content:t.jsxs(t.Fragment,{children:[i({en:"Leaving groups... ",vi:"Đang rời nhóm... "})+(o+1)+"/"+e.length,t.jsx("br",{}),t.jsx("i",{children:i({en:"Click to stop",vi:"Bấm để dừng"})})]}),duration:0,onClick:()=>{d.loading({key:n,content:i({en:"Stopping...",vi:"Đang dừng..."}),duration:0}),l=!0}}),await b(e[o])&&c.push(e[o]),!l);o++)if(o<e.length-1){const r=P(2e3,5e3);d.loading({key:s,content:i({en:"Sleeping "+Math.round(r/1e3)+"s",vi:"Đang đợi "+Math.round(r/1e3)+"s"}),duration:0}),await I(r)}d.destroy(n),d.destroy(s),f.open({type:"success",duration:0,message:i({en:`Left ${c.length}/${e.length} groups`,vi:`Đã rời ${c.length}/${e.length} nhóm`}),description:t.jsx("ol",{style:{maxHeight:200,overflowY:"auto",whiteSpace:"pre-wrap"},children:c.map(o=>t.jsx("li",{children:t.jsx("a",{target:"_blank",href:M(o.id),children:o.name})},o.id))})})},b=async e=>{const n="Groups:onClickLeaveGroup";v(n),d.loading({key:n,content:i({en:"Leaving group... "+e.name,vi:"Đang rời nhóm..."+e.name}),duration:0});const s=await le(e.id);return s?(f.destroy(n),d.success({key:n,content:i({en:"Left group "+e.name,vi:"Đã rời nhóm "+e.name})}),D(l=>K(l,c=>{const o=c.findIndex(a=>a.id==e.id);return c[o].userType=u.NOT_JOINED,c}))):(d.destroy(n),f.open({type:"error",key:n,message:i({en:"Failed to leave group",vi:"Lỗi rời nhóm"}),description:e.name,duration:0,btn:t.jsxs(j,{children:[t.jsx(g,{type:"default",onClick:()=>b(e),children:i({en:"Retry",vi:"Thử lại"})}),t.jsx(g,{type:"primary",onClick:()=>window.open(M(e.id)),children:i({en:"View group",vi:"Xem nhóm"})})]})})),s},J=async e=>{var o,a;if(!await $())return;const n="Groups:onClickFindNoAdminGroups",s=n+":waiting";v(n),d.loading({key:n,duration:0,content:i({en:"Finding groups no admin... ",vi:"Đang tìm nhóm không có admin... "})});let l=[],c=!1;for(let r=0;r<e.length&&!c;r++){const p=e[r];if(d.loading({key:n,duration:0,content:t.jsxs(t.Fragment,{children:[i({en:"Checking group... ",vi:"Đang kiểm tra... "})+`${r+1}/${e.length}`,t.jsx("br",{}),p.name,t.jsx("br",{}),i({en:"Found ",vi:"Tìm thấy "})+l.length,t.jsx("br",{}),t.jsx("i",{children:i({en:"Click to stop",vi:"Bấm để dừng"})})]}),onClick:()=>{c=!0}}),(await ce(p.id)).adminCount===0&&(l.push(p),(a=(o=S.current)==null?void 0:o.setDataSelected)==null||a.call(o,[...l])),r<e.length-1){const h=P(2e3,5e3);d.loading({key:s,content:i({en:"Sleeping "+Math.round(h/1e3)+"s",vi:"Đang đợi "+Math.round(h/1e3)+"s"}),duration:0}),await I(h)}}d.destroy(n),d.destroy(s),f.open({type:"success",duration:0,message:i({en:`Found ${l.length}/${e.length} groups no admin`,vi:`Tìm thấy ${l.length}/${e.length} nhóm không có admin`}),description:t.jsx("ol",{style:{maxHeight:300,overflowY:"auto",whiteSpace:"pre-wrap"},children:l.map(r=>t.jsx("li",{children:t.jsx("a",{target:"_blank",href:M(r.id),children:r.name})},r.id))})})},W=e=>{A("/bulk-downloader",{state:{targetId:e.id,platform:Z.Facebook}})},z=e=>{var c,o;const n=e!=null&&e.length?[...e]:[...m],s=((c=n==null?void 0:n.map(a=>m.find(r=>r.id===a.id)))==null?void 0:c.filter(a=>a&&a.userType!==u.NOT_JOINED))||[],l=((o=n==null?void 0:n.map(a=>m.find(r=>r.id===a.id)))==null?void 0:o.filter(a=>a&&a.userType!==u.ADMIN))||[];return t.jsxs(t.Fragment,{children:[t.jsx(g,{type:"primary",icon:w?t.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):t.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:()=>O(!0),children:i({en:"Reload",vi:"Tải lại"})}),t.jsx(ae,{data:n,options:[{key:"id",label:".txt (group id)",prepareData:a=>({fileName:"your_groups_id"+C().format("YYYY-MM-DD-HHmmss")+".txt",data:a==null?void 0:a.map(r=>r.id).join(`
`)})},{key:"json",label:".json",prepareData:a=>({fileName:"your_groups"+C().format("YYYY-MM-DD-HHmmss")+".json",data:JSON.stringify(a==null?void 0:a.map(r=>({...r,last_visited:E(r.lastVisitedTime,i({en:"en-US",vi:"vi-VN"}))})),null,4)})},{key:"csv",label:".csv",prepareData:a=>({fileName:"your_groups"+C().format("YYYY-MM-DD-HHmmss")+".csv",data:ie(a)})}]}),t.jsx(x,{title:i({en:`Leave ${s.length} selected groups`,vi:`Rời ${s.length} nhóm được chọn`}),children:t.jsx(pe,{title:i({en:`Leave ${s.length} groups`,vi:`Rời ${s.length} nhóm`}),description:i({en:`Are your sure want to Leave ${s.length} groups?`,vi:`Bản có chãc muốn rời ${s.length} nhóm?`}),onConfirm:()=>H(s),okText:i({en:"Leave groups",vi:"Rời nhóm"}),cancelText:i({en:"No",vi:"Huỷ"}),children:t.jsx(g,{danger:!0,disabled:s.length<=0,icon:t.jsx("i",{className:"fa-regular fa-trash-can"}),children:s.length})})}),t.jsx(x,{title:i({en:`Find groups that have no admin in ${l.length} selected groups`,vi:`Tìm nhóm không có admin quản lý trong ${l.length} nhóm được chọn`}),children:t.jsx(g,{icon:t.jsx("i",{className:"fa-solid fa-user-large-slash"}),onClick:()=>J(l),disabled:l.length<=0,children:l.length})}),t.jsx(x,{title:i({en:"View on Facebook",vi:"Xem trên Facebook"}),children:t.jsx(g,{icon:t.jsx("i",{className:"fa-solid fa-external-link"}),onClick:()=>window.open("https://www.facebook.com/groups/joins","_blank")})})]})},_=e=>{switch(e){case u.MEMBER:return{color:"default",text:i({en:"Member",vi:"Thành viên"})};case u.ADMIN:return{color:"success",text:"Admin"};case u.NOT_JOINED:return{color:"error",text:i({en:"Left group",vi:"Đã rời nhóm"})};case u.PENDING:return{color:"warning",text:i({en:"Pending",vi:"Đang chờ"})};default:return{color:"default",text:"?"}}},q=[{title:"#",key:"index",dataIndex:"index"},{title:i({en:"Group",vi:"Nhóm"}),key:"group",dataIndex:"group",sorter:(e,n)=>e.name.localeCompare(n.name),render:(e,n,s)=>t.jsxs(j,{style:{maxWidth:400},align:"start",children:[t.jsx(de,{src:n.avatar,size:45}),t.jsxs(j,{direction:"vertical",size:0,children:[t.jsx(Y.Link,{href:n.url,target:"_blank",children:t.jsx("b",{children:n.name})}),t.jsx("span",{style:{opacity:.7},children:n.id})]})]})},{title:i({en:"Last visit",vi:"Lần xem gần nhất"}),key:"lastVisitedTime",dataIndex:"lastVisitedTime",sorter:(e,n)=>e.lastVisitedTime-n.lastVisitedTime,render:(e,n,s)=>E(n.lastVisitedTime,i({en:"en-US",vi:"vi-VN"})),align:"right"},{title:i({en:"Type",vi:"Loại"}),key:"type",dataIndex:"userType",render:(e,n,s)=>{const{color:l,text:c}=_(n.userType);return t.jsxs(t.Fragment,{children:[n.subspaceType==k.TOP_LEVEL_GROUP&&t.jsxs(t.Fragment,{children:[t.jsx(x,{title:i({en:"Your most interested group",vi:"Nhóm bạn quan tâm nhất"}),children:t.jsx(L,{color:"purple",children:"Top level"})}),t.jsx("br",{})]}),t.jsx(L,{color:l,children:c})]})},filters:[...Object.values(u).map(e=>{const{text:n}=_(e);return{text:n+" ("+m.filter(s=>s.userType==e).length+")",value:e}}),{text:"Top level ("+m.filter(e=>e.subspaceType==k.TOP_LEVEL_GROUP).length+")",value:k.TOP_LEVEL_GROUP}],onFilter:(e,n)=>e==k.TOP_LEVEL_GROUP?n.subspaceType==e:n.userType==e,align:"right"},{title:i({en:"Action",vi:"Hành động"}),key:"action",render:(e,n,s)=>t.jsxs(j.Compact,{style:{minWidth:30},children:[t.jsx(x,{title:i({en:"Bulk Downloader",vi:"Tải hàng loạt"}),children:t.jsx(g,{type:"default",onClick:()=>W(n),icon:t.jsx("i",{className:"fa-solid fa-download"})})}),n.userType!==u.NOT_JOINED?t.jsx(x,{title:i({en:"Leave group",vi:"Rời nhóm"}),children:t.jsx(g,{danger:!0,onClick:()=>b(n),icon:t.jsx("i",{className:"fa-regular fa-trash-can"})})}):null]}),align:"right"}];return t.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[t.jsxs(ue,{align:"middle",style:{margin:"16px"},children:[t.jsx(Y.Title,{level:3,style:{margin:0},children:i({en:"Groups manager",vi:"Quản lý nhóm"})}),t.jsx(L,{style:{marginLeft:"10px",fontWeight:"bold",color:"#888"},children:m.length})]}),t.jsx(me,{ref:S,data:[...m].sort((e,n)=>n.subspaceType.localeCompare(e.subspaceType)).map((e,n)=>({...e,index:n+1})),columns:q,renderTitle:z,size:"small",searchable:!0,selectable:!0,onSearchRow:(e,n)=>te(e,(n==null?void 0:n.name)+(n==null?void 0:n.id)+E(n==null?void 0:n.lastVisitedTime,i({en:"en-US",vi:"vi-VN"}))),keyExtractor:e=>e==null?void 0:e.id})]})}export{Fe as default};
