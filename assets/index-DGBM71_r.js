const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./MyTable-Cq7Jx-ZU.js","./index-Cc323tmk.js","./index-9SBFHPtm.css","./index-BW-3Mymk.js","./index-I4RQw55H.js","./MyApp-DaTURa7C.js","./index-BAOnGDsj.js","./PurePanel-Dk_aUIZi.js","./SearchOutlined-D7HYyH33.js","./Table-GWHt3cPG.js","./addEventListener-B_yQTNP2.js","./index-BAIy0Pdi.js","./index-BAiSCJnQ.js","./Dropdown-tWQs0LKH.js","./useBreakpoint-CeklF8Qr.js","./responsiveObserver-DA4txp13.js","./Pagination-yht7OtA3.js","./index-DbOL86PG.js","./EyeOutlined-BH3kyVaw.js","./row-BSrRzCbj.js"])))=>i.map(i=>d[i]);
import{b1 as ee,aH as ne,r as y,aJ as i,aL as m,b8 as ie,aS as te,b6 as C,b9 as ae,b5 as se,aC as le,bd as oe}from"./index-Cc323tmk.js";import{u as re}from"./useForceStop-B0EgBYwg.js";import{b as ce,d as V,t as j,S as v,a as N,g as P,T as x,B as de,f as ge}from"./MyApp-DaTURa7C.js";import{E as he}from"./ExportButton-Q9Eirms1.js";import{d as L}from"./dayjs.min-BaZ24gUj.js";import{g as ue,U as c,a as me,u as pe,b as xe,d as fe}from"./pages-BcnZ5oVc.js";import{I as W}from"./index-D3QWZW1f.js";import{T as U}from"./index-I4RQw55H.js";import{R as ve}from"./row-BSrRzCbj.js";import{P as E}from"./index-DfJmVxJz.js";import"./file-download-CuVx9A-Q.js";import"./index-BAiSCJnQ.js";import"./Dropdown-tWQs0LKH.js";import"./PurePanel-Dk_aUIZi.js";import"./EyeOutlined-BH3kyVaw.js";import"./addEventListener-B_yQTNP2.js";import"./responsiveObserver-DA4txp13.js";import"./index-CCJcEIq_.js";const ye=y.lazy(()=>te(()=>import("./MyTable-Cq7Jx-ZU.js").then(d=>d.a),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]),import.meta.url));function Ae(){const{message:d,notification:T}=ce(),K=ee(),{ti:t}=ne(),z=re(),[F,f]=V("Pages.data",[]),[q,B]=V("Pages.finished",!1),[$,M]=y.useState(!1),p=y.useMemo(()=>F.map((e,n)=>({...e,index:n+1})),[F]);y.useEffect(()=>{q||S(!1)},[]);const S=async(e=!1)=>{var u;if($&&!e)return;const n=z.start(),a=e?[]:[...p],o=new Set(a.map(g=>g.id)),l="Pages:onReload";j(l),M(!0),B(!1);try{d.loading({key:l,content:t({en:"Loading invited pages...",vi:"Đang tải trang được mời..."}),duration:0});const s=(await ue()).filter(h=>!o.has(h.id));s!=null&&s.length&&(a.push(...s),f([...a]));const r=a.filter(h=>h.userType!==c.INVITED).pop();let D=e?"":r==null?void 0:r.cursor;for(;!n.value();){d.loading({key:l,content:t({en:"Loading pages...",vi:"Đang tải trang..."})+a.length,duration:0});const h=await me(D),k=h==null?void 0:h.filter(w=>!o.has(w.id));if(h.forEach(w=>o.add(w.id)),!(k!=null&&k.length))break;a.push(...k),D=(u=a==null?void 0:a[(a==null?void 0:a.length)-1])==null?void 0:u.cursor,f([...a])}d.success({key:l,content:(n.value()?t({en:"Load pages stopped ",vi:"Dừng tải trang "}):t({en:"Load pages completed ",vi:"Tải xong trang "}))+a.length}),B(!n.value())}catch(g){d.error({content:t({en:"Failed to load pages: ",vi:"Lỗi tải trang: "})+g.message})}finally{M(!1)}},b=async({pages:e,key:n,actionFn:a,loadingText:o,successText:l})=>{if(!await ge()||!(e!=null&&e.length))return;const u=n+":waiting";j(n);let g=!1,s=[];for(let r=0;r<e.length&&(d.destroy(u),d.loading({key:n,content:i.jsxs(i.Fragment,{children:[o+(r+1)+"/"+e.length,i.jsx("br",{}),i.jsx("i",{children:t({en:"Click to stop",vi:"Bấm để dừng"})})]}),duration:0,onClick:()=>{d.loading({key:n,content:t({en:"Stopping...",vi:"Đang dừng..."}),duration:0}),g=!0}}),await a(e[r])&&s.push(e[r]),!g);r++)if(r<e.length-1){const h=oe(2e3,5e3);d.loading({key:u,content:t({en:"Sleeping "+Math.round(h/1e3)+"s",vi:"Đang đợi "+Math.round(h/1e3)+"s"}),duration:0}),await le(h)}d.destroy(n),d.destroy(u),T.open({type:"success",duration:0,message:l+`${s.length}/${e.length}`,description:i.jsx("ol",{style:{maxHeight:200,overflowY:"auto",whiteSpace:"pre-wrap"},children:s.map(r=>i.jsx("li",{children:i.jsx("a",{target:"_blank",href:P(r.id),children:r.name})},r.id))})})},I=async({record:e,key:n,actionFn:a,loadingText:o,successText:l,failedText:u,onSuccess:g})=>{j(n),d.loading({key:n,content:o,duration:0});const s=await a();return s?(T.destroy(n),d.success({key:n,content:l}),g==null||g()):(d.destroy(n),T.open({type:"error",key:n,message:u,description:e.name,duration:0,btn:i.jsxs(v,{children:[i.jsx(m,{type:"default",onClick:()=>a(),children:t({en:"Retry",vi:"Thử lại"})}),i.jsx(m,{type:"primary",onClick:()=>window.open(P(e.id)),children:t({en:"View page",vi:"Xem trang"})})]})})),s},J=async e=>{b({key:"Pages:onClickUnlikeSelectedPages",pages:e,actionFn:A,loadingText:t({en:"Unliking pages... ",vi:"Đang bỏ thích trang... "}),successText:t({en:"Unliked pages done: ",vi:"Bỏ thích trang xong: "})})},A=e=>I({record:e,key:"Pages:onClickUnlikePage",actionFn:()=>pe(e.id),loadingText:t({en:"Unliking page... ",vi:"Đang bỏ thích trang..."})+e.name,successText:t({en:"Unliked page ",vi:"Đã bỏ thích trang "})+e.name,failedText:t({en:"Failed to unlike page",vi:"Lỗi bỏ thích trang"}),onSuccess:()=>{f(n=>C(n,a=>{const o=a.findIndex(l=>l.id==e.id);return a[o].userType=c.UNLIKED,a}))}}),Q=async e=>{b({key:"Pages:onClickUnfollowSelectedPages",pages:e,actionFn:R,loadingText:t({en:"Unfollowing pages... ",vi:"Đang bỏ theo dõi trang... "}),successText:t({en:"Unfollowed pages done: ",vi:"Bỏ theo dõi trang xong: "})})},R=e=>I({record:e,key:"Pages:onClickUnfollowPage",actionFn:()=>xe(e.id),loadingText:t({en:"Unfollowing page... ",vi:"Đang bỏ theo dõi trang..."})+e.name,successText:t({en:"Unfollowed page ",vi:"Đã bỏ theo dõi trang "})+e.name,failedText:t({en:"Failed to unfollow page",vi:"Lỗi bỏ theo dõi trang"}),onSuccess:()=>{f(n=>C(n,a=>{const o=a.findIndex(l=>l.id==e.id);return a[o].userType=c.UNFOLLOWED,a}))}}),G=async e=>{b({key:"Pages:onClickDeclineSelectedInvites",pages:e,actionFn:Y,loadingText:t({en:"Removing invite... ",vi:"Đang từ chối lời mời... "}),successText:t({en:"Declined invites done: ",vi:"Từ chối lời mời xong: "})})},Y=async e=>I({record:e,key:"Pages:onClickDeclineInvite",actionFn:()=>fe(e.inviteId),loadingText:t({en:"Declining invite... ",vi:"Đang từ chối lời mời..."})+e.name,successText:t({en:"Declined invite ",vi:"Đã từ chối lời mời "})+e.name,failedText:t({en:"Failed to remove invite",vi:"Lỗi từ chối lời mời"}),onSuccess:()=>{f(n=>C(n,a=>{const o=a.findIndex(l=>l.id==e.id);return a[o].userType=c.DECLINED,a}))}}),X=e=>{K("/bulk-downloader",{state:{targetId:e.id,platform:ae.Facebook}})},Z=e=>{var u,g;const n=e!=null&&e.length?[...e]:[...p],a=((u=n==null?void 0:n.map(s=>p.find(r=>r.id===s.id)))==null?void 0:u.filter(s=>(s==null?void 0:s.userType)===c.LIKED||(s==null?void 0:s.userType)===c.ADMIN))||[],o=(a==null?void 0:a.filter(s=>s==null?void 0:s.canLike))||[],l=((g=n==null?void 0:n.map(s=>p.find(r=>r.id===s.id)))==null?void 0:g.filter(s=>(s==null?void 0:s.userType)===c.INVITED))||[];return i.jsxs(i.Fragment,{children:[i.jsx(x,{color:"red",title:t({en:"WARNING: Reload many times may cause temporarily blocked by facebook",vi:"LƯU Ý: Tải lại nhiều lần có thể bị facebook chặn tạm thời"}),children:i.jsx(m,{type:"primary",icon:$?i.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):i.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:()=>S(!0),children:t({en:"Reload",vi:"Tải lại"})})}),i.jsx(he,{data:n,options:[{key:"id",label:".txt (page id)",prepareData:s=>({fileName:"your_pages_id"+L().format("YYYY-MM-DD-HHmmss")+".txt",data:s==null?void 0:s.map(r=>r.id).join(`
`)})},{key:"json",label:".json",prepareData:s=>({fileName:"your_pages"+L().format("YYYY-MM-DD-HHmmss")+".json",data:JSON.stringify(s,null,4)})},{key:"csv",label:".csv",prepareData:s=>({fileName:"your_pages"+L().format("YYYY-MM-DD-HHmmss")+".csv",data:se(s)})}]}),i.jsx(x,{title:t({en:`Unlike ${o.length} selected pages`,vi:`Bỏ thích ${o.length} trang được chọn`}),children:i.jsx(E,{title:t({en:`Unlike ${o.length} pages`,vi:`Bỏ thích ${o.length} trang`}),description:t({en:`Are your sure want to unlike ${o.length} pages?`,vi:`Bản có chãc muốn bỏ thích ${o.length} trang?`}),onConfirm:()=>J(o),okText:t({en:"Unlike pages",vi:"Bỏ thích trang"}),cancelText:t({en:"No",vi:"Huỷ"}),children:i.jsx(m,{danger:!0,disabled:o.length<=0,icon:i.jsx("i",{className:"fa-solid fa-thumbs-down"}),children:o.length})})}),i.jsx(x,{title:t({en:`Unfollow ${a.length} selected pages`,vi:`Bỏ theo dõi ${a.length} trang được chọn`}),children:i.jsx(E,{title:t({en:`Unfollow ${a.length} pages`,vi:`Bỏ theo dõi ${a.length} trang`}),description:t({en:`Are your sure want to unfollow ${a.length} pages?`,vi:`Bản có chãc muốn bỏ theo dõi ${a.length} trang?`}),onConfirm:()=>Q(a),okText:t({en:"Yes",vi:"Có"}),cancelText:t({en:"No",vi:"Huỷ"}),children:i.jsx(m,{danger:!0,disabled:a.length<=0,icon:i.jsx("i",{className:"fa-solid fa-eye-slash"}),children:a.length})})}),l.length>0&&i.jsx(x,{title:t({en:`Decline ${l.length} selected invites`,vi:`Từ chối ${l.length} lời mời được chọn`}),children:i.jsx(E,{title:t({en:`Decline ${l.length} invites`,vi:`Từ chối ${l.length} lời mời`}),description:t({en:`Are your sure want to decline ${l.length} invites?`,vi:`Bản có chãc muốn từ chối ${l.length} lời mời?`}),onConfirm:()=>G(l),okText:t({en:"Yes",vi:"Có"}),cancelText:t({en:"No",vi:"Huỷ"}),children:i.jsx(m,{danger:!0,disabled:l.length<=0,icon:i.jsx("i",{className:"fa-solid fa-xmark"}),children:l.length})})}),i.jsx(x,{title:t({en:"Manage on Facebook",vi:"Quản lý trên Facebook"}),children:i.jsx(de,{count:t({en:"New",vi:"Mới"}),color:"purple",style:{color:"white"},children:i.jsx(m,{onClick:()=>{j("Pages:openManageOnFacebook"),window.open("https://www.facebook.com/me/allactivity?category_key=LIKEDINTERESTS","_blank")},icon:i.jsx("i",{className:"fa-solid fa-up-right-from-square"})})})})]})},H=e=>{switch(e){case c.ADMIN:return{color:"success",text:t({en:"Admin",vi:"Admin"})};case c.LIKED:return{color:"default",text:t({en:"Liked",vi:"Đã thích"})};case c.INVITED:return{color:"warning",text:t({en:"Invited",vi:"Lời mời"})};case c.DECLINED:return{color:"error",text:t({en:"Declined",vi:"Từ chối"})};case c.UNLIKED:return{color:"error",text:t({en:"Unliked",vi:"Bỏ thích"})};case c.UNFOLLOWED:return{color:"error",text:t({en:"Unfollowed",vi:"Bỏ theo dõi"})};default:return{color:"default",text:"?"}}},O=y.useMemo(()=>Array.from(p.map(e=>e.category).reduce((e,n)=>{let a=e.get(n)||0;return e.set(n,++a)},new Map).entries()).sort((e,n)=>n[1]-e[1]).map(([e,n])=>({text:e+" ("+n+")",value:e})),[p]),_=[{title:"#",key:"index",dataIndex:"index",sorter:(e,n)=>e.index-n.index,width:60},{title:t({en:"Image",vi:"Ảnh"}),key:"image",dataIndex:"image",render:(e,n,a)=>i.jsx(W,{src:n.image,width:50,height:50,style:{objectFit:"contain",borderRadius:5}})},{title:t({en:"Page",vi:"Trang"}),key:"name",dataIndex:"name",render:(e,n,a)=>i.jsxs(v,{direction:"vertical",size:0,style:{maxWidth:300},children:[i.jsx(U.Link,{href:n.url,target:"_blank",children:i.jsx("b",{children:n.name||"???"})}),i.jsx("span",{style:{opacity:.5},children:n.id})]}),sorter:(e,n)=>e.name.localeCompare(n.name)},{title:t({en:"Category",vi:"Danh mục"})+" ("+O.length+")",key:"category",dataIndex:"category",filters:O,onFilter:(e,n)=>n.category==e,filterSearch:!0},{title:t({en:"Type",vi:"Loại"}),key:"type",dataIndex:"userType",render:(e,n,a)=>{const{color:o,text:l}=H(n.userType);return n.inviterId?i.jsxs(v,{children:[i.jsx(N,{color:o,children:l}),i.jsx(W,{src:n.inviterAvatar,width:40,height:40,style:{borderRadius:5}}),i.jsxs(v,{direction:"vertical",size:0,children:[i.jsx(U.Link,{href:P(n.inviterId),target:"_blank",children:i.jsx("b",{children:n.inviterName})}),i.jsx("span",{style:{opacity:.5},children:n.inviterId})]})]}):i.jsx(N,{color:o,children:l})},filters:Object.values(c).map(e=>{const{text:n}=H(e);return{text:n+" ("+p.filter(a=>a.userType==e).length+")",value:e}}),onFilter:(e,n)=>n.userType==e,align:"left"},{title:t({en:"Action",vi:"Hành động"}),key:"action",render:(e,n,a)=>i.jsxs(v.Compact,{style:{minWidth:30},children:[n.userType===c.LIKED||n.userType===c.ADMIN?i.jsxs(i.Fragment,{children:[n.canLike?i.jsx(x,{title:t({en:"Unlike page",vi:"Bỏ thích"}),children:i.jsx(m,{onClick:()=>A(n),icon:i.jsx("i",{className:"fa-solid fa-thumbs-down"})})}):null,i.jsx(x,{title:t({en:"Unfollow page",vi:"Bỏ theo dõi"}),children:i.jsx(m,{onClick:()=>R(n),icon:i.jsx("i",{className:"fa-solid fa-eye-slash"})})})]}):null,n.userType===c.INVITED?i.jsx(x,{title:t({en:"Decline invite",vi:"Từ chối"}),children:i.jsx(m,{danger:!0,onClick:()=>Y(n),icon:i.jsx("i",{className:"fa-solid fa-xmark"})})}):null,i.jsx(x,{title:t({en:"Bulk Downloader",vi:"Tải hàng loạt"}),children:i.jsx(m,{type:"default",onClick:()=>X(n),icon:i.jsx("i",{className:"fa-solid fa-download"})})})]}),width:100,align:"right"}];return i.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[i.jsxs(ve,{align:"middle",style:{margin:"16px"},children:[i.jsx(U.Title,{level:3,style:{margin:0},children:t({en:"Pages manager",vi:"Quản lý trang"})}),i.jsx(N,{style:{marginLeft:"10px",fontWeight:"bold",color:"#888"},children:p.length})]}),i.jsx(ye,{data:p,columns:_.map((e,n)=>({...e,index:n})),renderTitle:Z,size:"small",searchable:!0,selectable:!0,onSearchRow:(e,n)=>ie(e,(n==null?void 0:n.name)+(n==null?void 0:n.id)),keyExtractor:e=>(e==null?void 0:e.id)+(e==null?void 0:e.userType)})]})}export{Ae as default};