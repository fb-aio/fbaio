import{r as B,an as s,ao as N,aH as G}from"./index-Ch3SQZYM.js";import{x as O,y as V,u as Z,a as ee,b as S,t as A,D as H,S as D,d as ne,f as J,C as te,T as j,g as ie,H as se}from"./MyApp-BxasvTfg.js";import re from"./MyTable-Cx70RIz5.js";import{u as ce}from"./useForceStop-DuoF0JMk.js";import{A as ae}from"./index-BQnDyKr_.js";import{I as oe}from"./index-BH1GPZzs.js";import{T as le}from"./index-DdLXzTdq.js";import{R as de}from"./row-BlQN8LEk.js";import{T as ue}from"./index-CXMf6RbK.js";import{R as W}from"./index-C_9rVwkb.js";import{P as $}from"./index-CNUWJfUV.js";import"./addEventListener-CXWrbDGZ.js";import"./index-CKYerQ9t.js";import"./PurePanel-DJziKDnP.js";import"./index-CE1W9nXU.js";import"./index-CUH9Hbhm.js";import"./index-DwZMrCFQ.js";import"./Dropdown-CqkVLm1l.js";import"./useBreakpoint-BXjY32dr.js";import"./responsiveObserver-BK_a0ip3.js";import"./Pagination-B6unX1vy.js";import"./index-CYv9_VMY.js";import"./index-BfMZK5uK.js";var a=(e=>(e.INCOMING_REQUEST="INCOMING_REQUEST",e.OUTGOING_REQUEST="OUTGOING_REQUEST",e.DECLINED="DECLINED",e.ACCEPTED="ACCEPTED",e.CANCELED="CANCELED",e))(a||{});async function ge(e=""){const o=await O({fb_api_req_friendly_name:"FriendingCometFriendRequestsGridPaginationQuery",variables:{count:20,cursor:e,scale:2},doc_id:"5073444706045886"}),l=JSON.parse(o),{edges:h=[],page_info:d={}}=V(l)||{};return h.map((t,C)=>{var p,E,_,k,q,R,v,y;return{id:(p=t==null?void 0:t.node)==null?void 0:p.id,name:(E=t==null?void 0:t.node)==null?void 0:E.name,avatar:(k=(_=t==null?void 0:t.node)==null?void 0:_.profile_picture)==null?void 0:k.uri,url:(q=t==null?void 0:t.node)==null?void 0:q.url,desc:(v=(R=t==null?void 0:t.node)==null?void 0:R.social_context)==null?void 0:v.text,seen:t==null?void 0:t.is_seen,time:((t==null?void 0:t.time)||0)*1e3,type:(y=t==null?void 0:t.node)==null?void 0:y.friendship_status,cursor:t==null?void 0:t.cursor}})}async function he(e=""){const o=await O({fb_api_req_friendly_name:"FriendingCometOutgoingRequestsDialogPaginationQuery",variables:{count:10,cursor:e,scale:2},doc_id:"4420916318007844"}),l=JSON.parse(o),{edges:h=[],page_info:d={}}=V(l)||{};return h.map((t,C)=>{var p,E,_,k,q,R,v,y;return{id:(p=t==null?void 0:t.node)==null?void 0:p.id,name:(E=t==null?void 0:t.node)==null?void 0:E.name,avatar:(k=(_=t==null?void 0:t.node)==null?void 0:_.profile_picture)==null?void 0:k.uri,url:(q=t==null?void 0:t.node)==null?void 0:q.url,desc:(v=(R=t==null?void 0:t.node)==null?void 0:R.social_context)==null?void 0:v.text,seen:t==null?void 0:t.is_seen,time:((t==null?void 0:t.time)||0)*1e3,type:(y=t==null?void 0:t.node)==null?void 0:y.friendship_status,cursor:t==null?void 0:t.cursor}})}async function me(e=""){var h,d,t;const o=await O({variables:{input:{friend_requester_id:e,source:"friends_tab",actor_id:"me"},scale:2,refresh_num:0},doc_id:"4189738374386264"}),l=JSON.parse(o);return((t=(d=(h=l==null?void 0:l.data)==null?void 0:h.friend_request_delete)==null?void 0:d.friend_requester)==null?void 0:t.id)==e}async function fe(e=""){var h,d,t;const o=await O({variables:{input:{friend_requester_id:e,source:"friends_tab",actor_id:"me"},scale:2,refresh_num:0},doc_id:"3750307704981867"}),l=JSON.parse(o);return((t=(d=(h=l==null?void 0:l.data)==null?void 0:h.friend_request_accept)==null?void 0:d.friend_requester)==null?void 0:t.id)==e}async function pe(e=""){var h,d,t;const o=await O({fb_api_req_friendly_name:"FriendingCometFriendRequestCancelMutation",variables:{input:{attribution_id_v2:"FriendingCometFriendRequestsRoot.react,comet.friending.friendrequests,unexpected,1724509964587,135627,2356318349,,;FriendingCometRoot.react,comet.friending,tap_bookmark,1724509961317,200700,2356318349,,",cancelled_friend_requestee_id:e,friending_channel:"MANAGE_OUTGOING_REQUESTS",actor_id:"me"},scale:2},doc_id:"5247084515315799"}),l=JSON.parse(o);return((t=(d=(h=l==null?void 0:l.data)==null?void 0:h.friend_request_cancel)==null?void 0:d.cancelled_friend_requestee)==null?void 0:t.id)==e}const b={[a.INCOMING_REQUEST]:{vi:"Đã nhận",en:"Incoming",color:"default",icon:"fa-solid fa-arrow-turn-down"},[a.OUTGOING_REQUEST]:{vi:"Đã gửi",en:"Outgoing",color:"default",icon:"fa-solid fa-arrow-turn-up"},[a.DECLINED]:{vi:"Đã từ chối",en:"Declined",color:"error",icon:"fa-solid fa-xmark"},[a.ACCEPTED]:{vi:"Đã chấp nhận",en:"Accepted",color:"success",icon:"fa-solid fa-check"},[a.CANCELED]:{vi:"Đã huỷ",en:"Canceled",color:"error",icon:"fa-solid fa-xmark"}};function Qe(){const{ti:e}=Z(),{message:o,notification:l}=ee(),h=ce(),[d,t]=S("FriendRequestType",a.INCOMING_REQUEST),[C,p]=S("FriendRequests.data",[]),[E,_]=S("FriendRequests.finished",!1),[k,q]=S("FriendRequests.loading",!1),R=B.useMemo(()=>C.filter(n=>n.type===d).map((n,i)=>({...n,recent:i})),[C,d]);B.useEffect(()=>{E||v(!1)},[d,E]);const v=async(n=!1)=>{const i=n?[]:C,r=h.start(),c="FriendRequests:onReload";A(c);const u=[a.INCOMING_REQUEST,a.OUTGOING_REQUEST].map(async x=>{var f;const m=b[x],T=c+x;try{const F=i.filter(g=>g.type===x),I=F[F.length-1];let U=F.length,P=n?"":I==null?void 0:I.cursor;const Y=x===a.INCOMING_REQUEST?ge:he;for(;!r.value();){o.loading({key:T,content:e({en:`Loading ${m.en} friend requests...`,vi:`Đang tải yêu cầu kết bạn ${m.vi}...`})+U,duration:0});const g=await Y(P);if(!(g!=null&&g.length))break;U+=g==null?void 0:g.length,P=(f=g==null?void 0:g[(g==null?void 0:g.length)-1])==null?void 0:f.cursor,p(K=>[...K,...g]),await H(1e3)}o.success({key:T,content:e({en:"Loaded friend requests "+m.en+": ",vi:"Tải xong yêu cầu kết bạn "+m.vi+": "})+U})}catch(F){l.open({type:"error",message:e({en:"Failed to load friend requests "+m.en+": ",vi:"Lỗi tải yêu cầu kết bạn "+m.vi+": "}),description:F.message})}});q(!0),_(!1),await Promise.all(u),q(!1),_(!r.value())},y=async({data:n,key:i,actionFn:r,loadingText:c,successText:u})=>{if(!(n!=null&&n.length))return;const x=i+":waiting";A(i);let m=!1,T=[];for(let f=0;f<n.length&&(o.destroy(x),o.loading({key:i,content:s.jsxs(s.Fragment,{children:[c+(f+1)+"/"+n.length,s.jsx("br",{}),s.jsx("i",{children:e({en:"Click to stop",vi:"Bấm để dừng"})})]}),duration:0,onClick:()=>{o.loading({key:i,content:e({en:"Stopping...",vi:"Đang dừng..."}),duration:0}),m=!0}}),await r(n[f])&&T.push(n[f]),!m);f++)if(f<n.length-1){const I=se(2e3,5e3);o.loading({key:x,content:e({en:"Sleeping "+Math.round(I/1e3)+"s",vi:"Đang đợi "+Math.round(I/1e3)+"s"}),duration:0}),await H(I)}o.destroy(i),o.destroy(x),l.open({type:"success",duration:0,message:u+`${T.length}/${n.length}`,description:s.jsx("ol",{style:{maxHeight:200,overflowY:"auto",whiteSpace:"pre-wrap"},children:T.map(f=>s.jsx("li",{children:s.jsx("a",{target:"_blank",href:ie(f.id),children:f.name})},f.id))})})},w=async({key:n,record:i,loadingText:r,successText:c,failedText:u,action:x,onSuccess:m})=>{A(n);try{if(o.loading({key:n,content:r+i.name,duration:0}),await x())return m==null||m(),o.success({key:n,content:c+i.name}),!0;throw new Error("Facebook response error")}catch(T){return o.destroy(n),l.open({type:"error",message:u+i.name,description:T.message}),!1}finally{}},Q=n=>w({key:"FriendRequests:onClickDeclineFriendRequest",record:n,loadingText:e({en:"Declining friend request...",vi:"Đang từ chối yêu cầu kết bạn..."}),successText:e({en:"Declined friend request ",vi:"Từ chối yêu cầu thành công "}),failedText:e({en:"Failed to decline friend request: ",vi:"Lỗi từ chối yêu cầu kết bạn: "}),action:()=>me(n.id),onSuccess:()=>{p(i=>G(i,r=>{const c=r.findIndex(u=>u.id===n.id);return c>=0&&(r[c].type=a.DECLINED),r}))}}),L=n=>w({key:"FriendRequests:onClickAcceptFriendRequest",record:n,loadingText:e({en:"Accepting friend request...",vi:"Đang đồng ý yêu cầu kết bạn..."}),successText:e({en:"Accepted friend request ",vi:"Đã đồng ý yêu cầu kết bạn "}),failedText:e({en:"Failed to accept friend request: ",vi:"Lỗi đồng ý yêu cầu kết bạn: "}),action:()=>fe(n.id),onSuccess:()=>{p(i=>G(i,r=>{const c=r.findIndex(u=>u.id===n.id);return c>=0&&(r[c].type=a.ACCEPTED),r}))}}),M=n=>w({key:"FriendRequests:onClickCancelOutgoingRequest",record:n,loadingText:e({en:"Canceling friend request...",vi:"Đang thu hồi yêu cầu kết bạn..."}),successText:e({en:"canceled friend request ",vi:"Đã thu hồi yêu cầu kết bạn "}),failedText:e({en:"Failed to cancel friend request: ",vi:"Lỗi thu hồi yêu cầu kết bạn: "}),action:()=>pe(n.id),onSuccess:()=>{p(i=>G(i,r=>{const c=r.findIndex(u=>u.id===n.id);return c>=0&&(r[c].type=a.CANCELED),r}))}}),z=n=>{const i=n!=null&&n.length?[...n]:[...C],r=i.filter(u=>u.type===a.INCOMING_REQUEST),c=i.filter(u=>u.type===a.OUTGOING_REQUEST);return s.jsxs(s.Fragment,{children:[s.jsx(N,{type:"primary",icon:k?s.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):s.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:()=>v(!0),children:e({en:"Reload",vi:"Tải lại"})}),d===a.INCOMING_REQUEST?s.jsxs(D.Compact,{children:[s.jsx(j,{title:e({en:`Accept ${r.length} selected incoming requests`,vi:`Đồng ý ${r.length} lời mời đang chọn`}),children:s.jsx($,{title:e({en:`Accept ${r.length} selected incoming requests`,vi:`Đồng ý ${r.length} lời mời đang chọn`}),description:e({en:`Are your sure want to accept ${r.length} incoming requests?`,vi:`Bản có chãc muốn đồng ý ${r.length} lời mời?`}),onConfirm:()=>y({data:r,key:"FriendRequests:onClickAcceptSelectedIncomingFriendRequests",actionFn:L,loadingText:e({en:"Accepting incoming requests...",vi:"Đang đồng ý lời mời..."}),successText:e({en:"Accepted incoming requests done: ",vi:"Đồng ý lời mời xong: "})}),okText:e({en:"Accept",vi:"Đồng ý"}),cancelText:e({en:"No",vi:"Huỷ"}),children:s.jsx(N,{disabled:r.length<=0,icon:s.jsx("i",{className:"fa-solid fa-check"}),children:r.length})})}),s.jsx(j,{title:e({en:`Decline ${r.length} selected incoming requests`,vi:`Từ chối ${r.length} lời mời đang chọn`}),children:s.jsx($,{title:e({en:`Decline ${r.length} selected incoming requests`,vi:`Từ chối ${r.length} lời mời đang chọn`}),description:e({en:`Are your sure want to decline ${r.length} incoming requests?`,vi:`Bản có chãc muốn từ chối ${r.length} lời mời?`}),onConfirm:()=>y({data:r,key:"FriendRequests:onClickDeclineSelectedIncomingFriendRequests",actionFn:Q,loadingText:e({en:"Declining incoming requests...",vi:"Đang từ chối lời mời..."}),successText:e({en:"Declined incoming requests done: ",vi:"Từ chối lời mời xong: "})}),okText:e({en:"Decline",vi:"Từ chối"}),cancelText:e({en:"No",vi:"Huỷ"}),children:s.jsx(N,{danger:!0,disabled:r.length<=0,icon:s.jsx("i",{className:"fa-regular fa-trash-can"}),children:r.length})})})]}):s.jsx(s.Fragment,{children:s.jsx(j,{title:e({en:`Cancel ${c.length} selected outgoing requests`,vi:`Thu hồi ${c.length} yêu cầu đang chọn`}),children:s.jsx($,{title:e({en:`Cancel ${c.length} selected outgoing requests`,vi:`Thu hồi ${c.length} yêu cầu đang chọn`}),description:e({en:`Are your sure want to cancel ${c.length} outgoing requests?`,vi:`Bản có chãc muốn thu hồi ${c.length} yêu cầu?`}),onConfirm:()=>y({data:c,key:"FriendRequests:onClickCancelSelectedOutgoingFriendRequests",actionFn:M,loadingText:e({en:"Canceling outgoing requests...",vi:"Đang thu hồi yêu cầu..."}),successText:e({en:"Declined requests done: ",vi:"Thu hồi yêu cầu xong: "})}),okText:e({en:"Cancel",vi:"Thu hồi"}),cancelText:e({en:"No",vi:"Huỷ"}),children:s.jsx(N,{danger:!0,disabled:c.length<=0,icon:s.jsx("i",{className:"fa-regular fa-trash-can"}),children:c.length})})})}),s.jsx(j,{title:e({en:"View on Facebook",vi:"Xem trên Facebook"}),children:s.jsx(N,{icon:s.jsx("i",{className:"fa-solid fa-external-link"}),onClick:()=>window.open("https://www.facebook.com/friends/requests","_blank")})})]})},X=[{title:"#",key:"recent",dataIndex:"recent",render:(n,i,r)=>i.recent+1,sorter:(n,i)=>n.recent-i.recent,width:50},{title:e({en:"Name",vi:"Tên"}),key:"name",dataIndex:"name",sorter:(n,i)=>(n.name||"").localeCompare(i.name||""),render:(n,i,r)=>s.jsxs(D,{align:"center",style:{maxWidth:300},children:[s.jsx(ae,{shape:"square",src:s.jsx(oe,{src:ne(i.id),fallback:i.avatar}),size:50}),s.jsx("a",{href:i.url,target:"_blank",style:{marginLeft:"10px"},children:s.jsx("b",{children:i.name})})]})},{title:e({en:"Description",vi:"Mô tả"}),key:"desc",dataIndex:"desc",sorter:(n,i)=>(n.desc||"").localeCompare(i.desc||""),render:(n,i,r)=>s.jsx("p",{style:{maxWidth:150,minWidth:100},children:i.desc}),width:"auto"},{title:e({en:"Time",vi:"Thời gian"}),key:"time",dataIndex:"time",sorter:(n,i)=>n.time-i.time,render:(n,i,r)=>J(i.time,e({en:"en-US",vi:"vi-VN"}))||"-",onSearch:(n,i)=>te(n,J(i,e({en:"en-US",vi:"vi-VN"}))),align:"right",width:180},{title:e({en:"Status",vi:"Trạng thái"}),key:"type",dataIndex:"type",filters:(d===a.INCOMING_REQUEST?[a.INCOMING_REQUEST,a.ACCEPTED,a.DECLINED]:[a.OUTGOING_REQUEST,a.CANCELED]).map(n=>{const i=b[n],r=C.filter(c=>c.type===n).length;return{text:e(i)+` (${r})`,value:n}}),onFilter:(n,i)=>i.type===n,render:(n,i,r)=>{const c=b[i.type];return s.jsx(le,{color:c==null?void 0:c.color,children:e(c)})},align:"right"},{title:e({en:"Action",vi:"Hành động"}),key:"action",dataIndex:"action",render:(n,i,r)=>i.type===a.INCOMING_REQUEST?s.jsxs(D.Compact,{children:[s.jsx(j,{title:e({en:"Accept",vi:"Đồng ý"}),children:s.jsx(N,{onClick:()=>L(i),icon:s.jsx("i",{className:"fa-solid fa-check"})})}),s.jsx(j,{title:e({en:"Decline",vi:"Từ chối"}),children:s.jsx(N,{danger:!0,onClick:()=>Q(i),icon:s.jsx("i",{className:"fa-solid fa-trash-can"})})})]}):i.type===a.OUTGOING_REQUEST?s.jsx(D.Compact,{children:s.jsx(j,{title:e({en:"Cancel",vi:"Thu hồi"}),children:s.jsx(N,{danger:!0,onClick:()=>M(i),icon:s.jsx("i",{className:"fa-solid fa-trash-can"})})})}):null,align:"right",width:100}];return s.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[s.jsx(de,{align:"middle",style:{margin:"16px"},children:s.jsx(ue.Title,{level:3,style:{margin:0},children:e({en:"Friend Requests",vi:"Lời mời kết bạn"})})}),s.jsx(W.Group,{defaultValue:d,buttonStyle:"solid",style:{marginBottom:10},children:[a.INCOMING_REQUEST,a.OUTGOING_REQUEST].map(n=>s.jsxs(W.Button,{value:n,onClick:()=>{t(n)},children:[s.jsx("i",{className:b[n].icon})," ",`${e(b[n])} ${C.filter(i=>i.type===n).length}`]},n))}),s.jsx(re,{data:R,columns:X,renderTitle:z,size:"small",searchable:!0,selectable:!0,keyExtractor:n=>n.id})]})}export{Qe as default};
