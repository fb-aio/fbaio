import{r as B,av as s,aw as N,aN as G}from"./index-Ca9Ij2Ii.js";import{C as S,D as W,u as Z,c as ee,e as w,t as A,K as J,b,i as ne,f as H,J as te,T as I,j as ie,h as se,P as re}from"./MyApp-DP4nbOTL.js";import ce from"./MyTable-DipQZpzd.js";import{u as ae}from"./useForceStop-BYPhpPDq.js";import{A as oe}from"./index-CbadxFCE.js";import{I as le}from"./index-CDqkLnXU.js";import{T as de}from"./index-Bca-wyLo.js";import{R as ue}from"./row-Idvkr20y.js";import{T as ge}from"./index-Bp_WXm_j.js";import{R as V}from"./Table-CciHv49S.js";import{P as $}from"./index-CF3xO-wO.js";import"./index-GsWKzg3t.js";import"./index-DhI8JDdu.js";import"./EyeOutlined-BlWbTefJ.js";import"./SearchOutlined-nKR7EQvI.js";import"./responsiveObserver-B7mdKSqD.js";import"./useBreakpoint-Cpozr9tT.js";import"./index-BTqkAlKi.js";import"./addEventListener-CF3ryuRY.js";import"./index-DrGuAvuu.js";import"./PurePanel-BSOzWqZG.js";import"./index-2S1A2AHt.js";import"./index-DQ8WVb2V.js";import"./Dropdown-BXdBkk-W.js";import"./Pagination-DZWFy3Df.js";var a=(e=>(e.INCOMING_REQUEST="INCOMING_REQUEST",e.OUTGOING_REQUEST="OUTGOING_REQUEST",e.DECLINED="DECLINED",e.ACCEPTED="ACCEPTED",e.CANCELED="CANCELED",e))(a||{});async function he(e=""){const o=await S({fb_api_req_friendly_name:"FriendingCometFriendRequestsGridPaginationQuery",variables:{count:20,cursor:e,scale:2},doc_id:"5073444706045886"}),l=JSON.parse(o),{edges:h=[],page_info:d={}}=W(l);return h.map((t,C)=>{var p,E,_,k,q,R,v,y;return{id:(p=t==null?void 0:t.node)==null?void 0:p.id,name:(E=t==null?void 0:t.node)==null?void 0:E.name,avatar:(k=(_=t==null?void 0:t.node)==null?void 0:_.profile_picture)==null?void 0:k.uri,url:(q=t==null?void 0:t.node)==null?void 0:q.url,desc:(v=(R=t==null?void 0:t.node)==null?void 0:R.social_context)==null?void 0:v.text,seen:t==null?void 0:t.is_seen,time:((t==null?void 0:t.time)||0)*1e3,type:(y=t==null?void 0:t.node)==null?void 0:y.friendship_status,cursor:t==null?void 0:t.cursor}})}async function me(e=""){const o=await S({fb_api_req_friendly_name:"FriendingCometOutgoingRequestsDialogPaginationQuery",variables:{count:10,cursor:e,scale:2},doc_id:"4420916318007844"}),l=JSON.parse(o),{edges:h=[],page_info:d={}}=W(l);return h.map((t,C)=>{var p,E,_,k,q,R,v,y;return{id:(p=t==null?void 0:t.node)==null?void 0:p.id,name:(E=t==null?void 0:t.node)==null?void 0:E.name,avatar:(k=(_=t==null?void 0:t.node)==null?void 0:_.profile_picture)==null?void 0:k.uri,url:(q=t==null?void 0:t.node)==null?void 0:q.url,desc:(v=(R=t==null?void 0:t.node)==null?void 0:R.social_context)==null?void 0:v.text,seen:t==null?void 0:t.is_seen,time:((t==null?void 0:t.time)||0)*1e3,type:(y=t==null?void 0:t.node)==null?void 0:y.friendship_status,cursor:t==null?void 0:t.cursor}})}async function fe(e=""){var h,d,t;const o=await S({variables:{input:{friend_requester_id:e,source:"friends_tab",actor_id:"me"},scale:2,refresh_num:0},doc_id:"4189738374386264"}),l=JSON.parse(o);return((t=(d=(h=l==null?void 0:l.data)==null?void 0:h.friend_request_delete)==null?void 0:d.friend_requester)==null?void 0:t.id)==e}async function pe(e=""){var h,d,t;const o=await S({variables:{input:{friend_requester_id:e,source:"friends_tab",actor_id:"me"},scale:2,refresh_num:0},doc_id:"3750307704981867"}),l=JSON.parse(o);return((t=(d=(h=l==null?void 0:l.data)==null?void 0:h.friend_request_accept)==null?void 0:d.friend_requester)==null?void 0:t.id)==e}async function xe(e=""){var h,d,t;const o=await S({fb_api_req_friendly_name:"FriendingCometFriendRequestCancelMutation",variables:{input:{attribution_id_v2:"FriendingCometFriendRequestsRoot.react,comet.friending.friendrequests,unexpected,1724509964587,135627,2356318349,,;FriendingCometRoot.react,comet.friending,tap_bookmark,1724509961317,200700,2356318349,,",cancelled_friend_requestee_id:e,friending_channel:"MANAGE_OUTGOING_REQUESTS",actor_id:"me"},scale:2},doc_id:"5247084515315799"}),l=JSON.parse(o);return((t=(d=(h=l==null?void 0:l.data)==null?void 0:h.friend_request_cancel)==null?void 0:d.cancelled_friend_requestee)==null?void 0:t.id)==e}const O={[a.INCOMING_REQUEST]:{vi:"Đã nhận",en:"Incoming",color:"default",icon:"fa-solid fa-arrow-turn-down"},[a.OUTGOING_REQUEST]:{vi:"Đã gửi",en:"Outgoing",color:"default",icon:"fa-solid fa-arrow-turn-up"},[a.DECLINED]:{vi:"Đã từ chối",en:"Declined",color:"error",icon:"fa-solid fa-xmark"},[a.ACCEPTED]:{vi:"Đã chấp nhận",en:"Accepted",color:"success",icon:"fa-solid fa-check"},[a.CANCELED]:{vi:"Đã huỷ",en:"Canceled",color:"error",icon:"fa-solid fa-xmark"}};function Pe(){const{ti:e}=Z(),{message:o,notification:l}=ee(),h=ae(),[d,t]=w("FriendRequestType",a.INCOMING_REQUEST),[C,p]=w("FriendRequests.data",[]),[E,_]=w("FriendRequests.finished",!1),[k,q]=w("FriendRequests.loading",!1),R=B.useMemo(()=>C.filter(n=>n.type===d).map((n,i)=>({...n,recent:i})),[C,d]);B.useEffect(()=>{E||v(!1)},[d,E]);const v=async(n=!1)=>{const i=n?[]:C,r=h.start(),c="FriendRequests:onReload";A(c);const u=[a.INCOMING_REQUEST,a.OUTGOING_REQUEST].map(async x=>{var f;const m=O[x],T=c+x;try{const F=i.filter(g=>g.type===x),j=F[F.length-1];let U=F.length,P=n?"":j==null?void 0:j.cursor;const X=x===a.INCOMING_REQUEST?he:me;for(;!r.value();){o.loading({key:T,content:e({en:`Loading ${m.en} friend requests...`,vi:`Đang tải yêu cầu kết bạn ${m.vi}...`})+U,duration:0});const g=await X(P);if(!(g!=null&&g.length))break;U+=g==null?void 0:g.length,P=(f=g==null?void 0:g[(g==null?void 0:g.length)-1])==null?void 0:f.cursor,p(Y=>[...Y,...g]),await J(1e3)}o.success({key:T,content:e({en:"Loaded friend requests "+m.en+": ",vi:"Tải xong yêu cầu kết bạn "+m.vi+": "})+U})}catch(F){l.open({type:"error",message:e({en:"Failed to load friend requests "+m.en+": ",vi:"Lỗi tải yêu cầu kết bạn "+m.vi+": "}),description:F.message})}});q(!0),_(!1),await Promise.all(u),q(!1),_(!r.value())},y=async({data:n,key:i,actionFn:r,loadingText:c,successText:u})=>{if(!await ie()||!(n!=null&&n.length))return;const x=i+":waiting";A(i);let m=!1,T=[];for(let f=0;f<n.length&&(o.destroy(x),o.loading({key:i,content:s.jsxs(s.Fragment,{children:[c+(f+1)+"/"+n.length,s.jsx("br",{}),s.jsx("i",{children:e({en:"Click to stop",vi:"Bấm để dừng"})})]}),duration:0,onClick:()=>{o.loading({key:i,content:e({en:"Stopping...",vi:"Đang dừng..."}),duration:0}),m=!0}}),await r(n[f])&&T.push(n[f]),!m);f++)if(f<n.length-1){const j=re(2e3,5e3);o.loading({key:x,content:e({en:"Sleeping "+Math.round(j/1e3)+"s",vi:"Đang đợi "+Math.round(j/1e3)+"s"}),duration:0}),await J(j)}o.destroy(i),o.destroy(x),l.open({type:"success",duration:0,message:u+`${T.length}/${n.length}`,description:s.jsx("ol",{style:{maxHeight:200,overflowY:"auto",whiteSpace:"pre-wrap"},children:T.map(f=>s.jsx("li",{children:s.jsx("a",{target:"_blank",href:se(f.id),children:f.name})},f.id))})})},D=async({key:n,record:i,loadingText:r,successText:c,failedText:u,action:x,onSuccess:m})=>{A(n);try{if(o.loading({key:n,content:r+i.name,duration:0}),await x())return m==null||m(),o.success({key:n,content:c+i.name}),!0;throw new Error("Facebook response error")}catch(T){return o.destroy(n),l.open({type:"error",message:u+i.name,description:T.message}),!1}finally{}},Q=n=>D({key:"FriendRequests:onClickDeclineFriendRequest",record:n,loadingText:e({en:"Declining friend request...",vi:"Đang từ chối yêu cầu kết bạn..."}),successText:e({en:"Declined friend request ",vi:"Từ chối yêu cầu thành công "}),failedText:e({en:"Failed to decline friend request: ",vi:"Lỗi từ chối yêu cầu kết bạn: "}),action:()=>fe(n.id),onSuccess:()=>{p(i=>G(i,r=>{const c=r.findIndex(u=>u.id===n.id);return c>=0&&(r[c].type=a.DECLINED),r}))}}),L=n=>D({key:"FriendRequests:onClickAcceptFriendRequest",record:n,loadingText:e({en:"Accepting friend request...",vi:"Đang đồng ý yêu cầu kết bạn..."}),successText:e({en:"Accepted friend request ",vi:"Đã đồng ý yêu cầu kết bạn "}),failedText:e({en:"Failed to accept friend request: ",vi:"Lỗi đồng ý yêu cầu kết bạn: "}),action:()=>pe(n.id),onSuccess:()=>{p(i=>G(i,r=>{const c=r.findIndex(u=>u.id===n.id);return c>=0&&(r[c].type=a.ACCEPTED),r}))}}),M=n=>D({key:"FriendRequests:onClickCancelOutgoingRequest",record:n,loadingText:e({en:"Canceling friend request...",vi:"Đang thu hồi yêu cầu kết bạn..."}),successText:e({en:"canceled friend request ",vi:"Đã thu hồi yêu cầu kết bạn "}),failedText:e({en:"Failed to cancel friend request: ",vi:"Lỗi thu hồi yêu cầu kết bạn: "}),action:()=>xe(n.id),onSuccess:()=>{p(i=>G(i,r=>{const c=r.findIndex(u=>u.id===n.id);return c>=0&&(r[c].type=a.CANCELED),r}))}}),z=n=>{const i=n!=null&&n.length?[...n]:[...C],r=i.filter(u=>u.type===a.INCOMING_REQUEST),c=i.filter(u=>u.type===a.OUTGOING_REQUEST);return s.jsxs(s.Fragment,{children:[s.jsx(N,{type:"primary",icon:k?s.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):s.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:()=>v(!0),children:e({en:"Reload",vi:"Tải lại"})}),d===a.INCOMING_REQUEST?s.jsxs(b.Compact,{children:[s.jsx(I,{title:e({en:`Accept ${r.length} selected incoming requests`,vi:`Đồng ý ${r.length} lời mời đang chọn`}),children:s.jsx($,{title:e({en:`Accept ${r.length} selected incoming requests`,vi:`Đồng ý ${r.length} lời mời đang chọn`}),description:e({en:`Are your sure want to accept ${r.length} incoming requests?`,vi:`Bản có chãc muốn đồng ý ${r.length} lời mời?`}),onConfirm:()=>y({data:r,key:"FriendRequests:onClickAcceptSelectedIncomingFriendRequests",actionFn:L,loadingText:e({en:"Accepting incoming requests...",vi:"Đang đồng ý lời mời..."}),successText:e({en:"Accepted incoming requests done: ",vi:"Đồng ý lời mời xong: "})}),okText:e({en:"Accept",vi:"Đồng ý"}),cancelText:e({en:"No",vi:"Huỷ"}),children:s.jsx(N,{disabled:r.length<=0,icon:s.jsx("i",{className:"fa-solid fa-check"}),children:r.length})})}),s.jsx(I,{title:e({en:`Decline ${r.length} selected incoming requests`,vi:`Từ chối ${r.length} lời mời đang chọn`}),children:s.jsx($,{title:e({en:`Decline ${r.length} selected incoming requests`,vi:`Từ chối ${r.length} lời mời đang chọn`}),description:e({en:`Are your sure want to decline ${r.length} incoming requests?`,vi:`Bản có chãc muốn từ chối ${r.length} lời mời?`}),onConfirm:()=>y({data:r,key:"FriendRequests:onClickDeclineSelectedIncomingFriendRequests",actionFn:Q,loadingText:e({en:"Declining incoming requests...",vi:"Đang từ chối lời mời..."}),successText:e({en:"Declined incoming requests done: ",vi:"Từ chối lời mời xong: "})}),okText:e({en:"Decline",vi:"Từ chối"}),cancelText:e({en:"No",vi:"Huỷ"}),children:s.jsx(N,{danger:!0,disabled:r.length<=0,icon:s.jsx("i",{className:"fa-regular fa-trash-can"}),children:r.length})})})]}):s.jsx(s.Fragment,{children:s.jsx(I,{title:e({en:`Cancel ${c.length} selected outgoing requests`,vi:`Thu hồi ${c.length} yêu cầu đang chọn`}),children:s.jsx($,{title:e({en:`Cancel ${c.length} selected outgoing requests`,vi:`Thu hồi ${c.length} yêu cầu đang chọn`}),description:e({en:`Are your sure want to cancel ${c.length} outgoing requests?`,vi:`Bản có chãc muốn thu hồi ${c.length} yêu cầu?`}),onConfirm:()=>y({data:c,key:"FriendRequests:onClickCancelSelectedOutgoingFriendRequests",actionFn:M,loadingText:e({en:"Canceling outgoing requests...",vi:"Đang thu hồi yêu cầu..."}),successText:e({en:"Declined requests done: ",vi:"Thu hồi yêu cầu xong: "})}),okText:e({en:"Cancel",vi:"Thu hồi"}),cancelText:e({en:"No",vi:"Huỷ"}),children:s.jsx(N,{danger:!0,disabled:c.length<=0,icon:s.jsx("i",{className:"fa-regular fa-trash-can"}),children:c.length})})})}),s.jsx(I,{title:e({en:"View on Facebook",vi:"Xem trên Facebook"}),children:s.jsx(N,{icon:s.jsx("i",{className:"fa-solid fa-external-link"}),onClick:()=>window.open("https://www.facebook.com/friends/requests","_blank")})})]})},K=[{title:"#",key:"recent",dataIndex:"recent",render:(n,i,r)=>i.recent+1,sorter:(n,i)=>n.recent-i.recent,width:50},{title:e({en:"Name",vi:"Tên"}),key:"name",dataIndex:"name",sorter:(n,i)=>(n.name||"").localeCompare(i.name||""),render:(n,i,r)=>s.jsxs(b,{align:"center",style:{maxWidth:300},children:[s.jsx(oe,{shape:"square",src:s.jsx(le,{src:ne(i.id),fallback:i.avatar}),size:50}),s.jsxs(b,{direction:"vertical",style:{marginLeft:"10px"},size:0,children:[s.jsx("a",{href:i.url,target:"_blank",children:s.jsx("b",{children:i.name})}),s.jsx("span",{style:{opacity:.5},children:i.id})]})]})},{title:e({en:"Description",vi:"Mô tả"}),key:"desc",dataIndex:"desc",sorter:(n,i)=>(n.desc||"").localeCompare(i.desc||""),render:(n,i,r)=>s.jsx("p",{style:{maxWidth:150,minWidth:100},children:i.desc}),width:"auto"},{title:e({en:"Time",vi:"Thời gian"}),key:"time",dataIndex:"time",sorter:(n,i)=>n.time-i.time,render:(n,i,r)=>H(i.time,e({en:"en-US",vi:"vi-VN"}))||"-",onSearch:(n,i)=>te(n,H(i,e({en:"en-US",vi:"vi-VN"}))),align:"right",width:180},{title:e({en:"Status",vi:"Trạng thái"}),key:"type",dataIndex:"type",filters:(d===a.INCOMING_REQUEST?[a.INCOMING_REQUEST,a.ACCEPTED,a.DECLINED]:[a.OUTGOING_REQUEST,a.CANCELED]).map(n=>{const i=O[n],r=C.filter(c=>c.type===n).length;return{text:e(i)+` (${r})`,value:n}}),onFilter:(n,i)=>i.type===n,render:(n,i,r)=>{const c=O[i.type];return s.jsx(de,{color:c==null?void 0:c.color,children:e(c)})},align:"right"},{title:e({en:"Action",vi:"Hành động"}),key:"action",dataIndex:"action",render:(n,i,r)=>i.type===a.INCOMING_REQUEST?s.jsxs(b.Compact,{children:[s.jsx(I,{title:e({en:"Accept",vi:"Đồng ý"}),children:s.jsx(N,{onClick:()=>L(i),icon:s.jsx("i",{className:"fa-solid fa-check"})})}),s.jsx(I,{title:e({en:"Decline",vi:"Từ chối"}),children:s.jsx(N,{danger:!0,onClick:()=>Q(i),icon:s.jsx("i",{className:"fa-solid fa-trash-can"})})})]}):i.type===a.OUTGOING_REQUEST?s.jsx(b.Compact,{children:s.jsx(I,{title:e({en:"Cancel",vi:"Thu hồi"}),children:s.jsx(N,{danger:!0,onClick:()=>M(i),icon:s.jsx("i",{className:"fa-solid fa-trash-can"})})})}):null,align:"right",width:100}];return s.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[s.jsx(ue,{align:"middle",style:{margin:"16px"},children:s.jsx(ge.Title,{level:3,style:{margin:0},children:e({en:"Friend Requests",vi:"Lời mời kết bạn"})})}),s.jsx(V.Group,{defaultValue:d,buttonStyle:"solid",style:{marginBottom:10},children:[a.INCOMING_REQUEST,a.OUTGOING_REQUEST].map(n=>s.jsxs(V.Button,{value:n,onClick:()=>{t(n)},children:[s.jsx("i",{className:O[n].icon})," ",`${e(O[n])} ${C.filter(i=>i.type===n).length}`]},n))}),s.jsx(ce,{data:R,columns:K,renderTitle:z,size:"small",searchable:!0,selectable:!0,keyExtractor:n=>n.id})]})}export{Pe as default};