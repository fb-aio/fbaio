import{r as j,aA as s,aB as v}from"./index-DGXuJl_5.js";import{ab as M,ac as D,G as L,ad as O,D as F,u as $,c as U,e as T,t as b,S as k,i as J,h as S,_ as P,f as K,T as z,B as H,o as V,b as g,j as q}from"./MyApp-BTjZXjRC.js";import G from"./MyTable-VWfBvJIp.js";import{E as W}from"./ExportButton-ZpB5LWdA.js";import{I as X}from"./index-BG5yV4nJ.js";import"./index-DCIqEnZw.js";import"./Table-DY1deguA.js";import"./index-B8i6zKA-.js";import"./addEventListener-bRmKcpqr.js";import"./index-CAZnNmrj.js";import"./PurePanel-DekyV9B5.js";import"./SearchOutlined-CI_ZrtE4.js";import"./index-BwIkOsVU.js";import"./index-Duqu3BL-.js";import"./Dropdown-DH2HMtcV.js";import"./useBreakpoint-DlWz2FRW.js";import"./responsiveObserver-DIcUK0CI.js";import"./Pagination-BVuH_0aH.js";import"./index-C9XD3lfW.js";import"./EyeOutlined-Dwq_qoAP.js";import"./row-DcNUtb4I.js";import"./file-download-27lf93lY.js";async function _(e,o=""){var r;const h=await M(D.EAAB),a=await L(`https://graph.facebook.com/v12.0/${e}/tagged?fields=from,id,message,created_time`+(o?`&after=${o}`:"")+`&access_token=${h}`);O(a);const t=F(a);return console.log(t),((r=t==null?void 0:t.data)==null?void 0:r.map(c=>{var u,x,y,p;return{id:c.id,message:c.message,created_time:c.created_time,from:{id:(u=c.from)==null?void 0:u.id,name:(x=c.from)==null?void 0:x.name},cursor:(p=(y=t==null?void 0:t.paging)==null?void 0:y.cursors)==null?void 0:p.after}}))||[]}async function Y(e){const o=".",h=btoa(JSON.stringify({"rp_author:0":JSON.stringify({name:"author",args:e}),"recent_posts:0":JSON.stringify({name:"recent_posts",args:""})})),a=`https://www.facebook.com/search/posts/?q=${encodeURI(o)}&filters=${encodeURI(h)}`;window.open(a,"_blank")}function wn({target:e}){const{ti:o}=$(),{message:h}=U(),[a,t]=T("Tagged."+(e==null?void 0:e.id),[]),[r,c]=T("Tagged.loading."+(e==null?void 0:e.id),!1),[u,x]=T("Tagged.loadMore."+(e==null?void 0:e.id),!1),[y,p]=j.useState(!0);j.useEffect(()=>{C()},[e==null?void 0:e.id]);const N=j.useRef(e==null?void 0:e.id),w=j.useRef(!1),C=(i=!1)=>{if(!(e!=null&&e.id)||r||w.current)return;const n=N.current!==(e==null?void 0:e.id);!i&&a.length&&!n||(N.current=e==null?void 0:e.id,b("Tagged:onClickReload"),c(!0),w.current=!0,_(e.id).then(l=>{console.log(l),t(l),p(!0)}).finally(()=>{w.current=!1,c(!1)}))},A=async()=>{var i;!(e!=null&&e.id)||u||await q()&&(b("Tagged:onClickLoadMore"),x(!0),_(e.id,(i=a[a.length-1])==null?void 0:i.cursor).then(n=>{const l=new Set(a.map(d=>d.id)),m=n.filter(d=>!l.has(d.id));m.length?(t(d=>[...d,...m]),p(!0)):(h.info(o({en:"No more data",vi:"Không còn dữ liệu"})),p(!1))}).finally(()=>x(!1)))},R=()=>s.jsxs(k,{children:[s.jsxs(k.Compact,{children:[s.jsx(v,{type:"primary",icon:s.jsx("i",{className:"fa-solid fa-rotate-right"}),loading:r,disabled:u,onClick:()=>C(!0),children:o({en:"Reload",vi:"Tải lại"})}),s.jsx(v,{icon:s.jsx("i",{className:"fa-solid fa-play"}),loading:u,disabled:!y||r,onClick:A,children:o(y?{en:"Load more",vi:"Tải thêm"}:{en:"No more data",vi:"Không còn dữ liệu"})})]}),s.jsx(W,{data:a,options:[{key:"json",label:".json",prepareData:i=>({fileName:(e==null?void 0:e.name)+"_tagged.json",data:JSON.stringify(i,null,4)})},{key:"csv",label:".csv",prepareData:i=>({fileName:(e==null?void 0:e.name)+"_tagged.csv",data:V(i.map(n=>{var l,m;return{...n,from:(l=n.from)==null?void 0:l.id,fromName:(m=n.from)==null?void 0:m.name}}))})}]}),s.jsx(g,{color:"red",children:(a==null?void 0:a.length)+" "+o({en:"Tagged",vi:"Lượt tag"})})]}),B=[{title:"#",key:"index",dataIndex:"index"},{title:o({en:"Owner",vi:"Người tag"}),key:"from",dataIndex:"from",render:(i,n,l)=>{var m,d,f,I,E;return(m=n==null?void 0:n.from)!=null&&m.id?s.jsxs(k,{children:[s.jsx(X,{src:J((d=n==null?void 0:n.from)==null?void 0:d.id),style:{width:45,height:45,borderRadius:5}}),s.jsxs(k,{direction:"vertical",size:0,children:[s.jsx("a",{href:S((f=n==null?void 0:n.from)==null?void 0:f.id),target:"_blank",rel:"noreferrer",children:s.jsx("b",{children:(I=n==null?void 0:n.from)==null?void 0:I.name})}),s.jsx("span",{style:{opacity:.5},children:(E=n==null?void 0:n.from)==null?void 0:E.id})]})]}):o({en:"Anonymous",vi:"Ẩn danh"})},filters:Array.from(new Set(a==null?void 0:a.map(i=>{var n;return(n=i.from)==null?void 0:n.id}))).map(i=>{var l,m;const n=a.filter(d=>{var f;return((f=d.from)==null?void 0:f.id)===i});return{value:i||"",text:(((m=(l=n==null?void 0:n[0])==null?void 0:l.from)==null?void 0:m.name)||o({en:"Anonymous",vi:"Ẩn danh"}))+` (${n==null?void 0:n.length})`,count:n==null?void 0:n.length}}).sort((i,n)=>n.count-i.count),onFilter:(i,n)=>{var l;return((l=n.from)==null?void 0:l.id)==i},width:300},{title:o({en:"Content",vi:"Nội dung"}),key:"message",dataIndex:"message",render:(i,n,l)=>{var m,d,f;return s.jsx("div",{style:{wordBreak:"break-word",maxWidth:400},children:((f=((m=n==null?void 0:n.message)==null?void 0:m.length)>200?((d=n==null?void 0:n.message)==null?void 0:d.substring(0,200))+"...":n==null?void 0:n.message)==null?void 0:f.replace(e==null?void 0:e.name,""))||(e==null?void 0:e.name)})}},{title:o({en:"Created at",vi:"Thời gian"}),key:"created_time",dataIndex:"created_time",render:(i,n,l)=>s.jsxs("span",{children:[P(new Date(i))," - ",K(new Date(i))]})},{title:o({en:"Action",vi:"Hành động"}),key:"action",dataIndex:"action",render:(i,n,l)=>s.jsx(z,{title:o({en:"View post",vi:"Xem bài viết"}),children:s.jsx(v,{target:"_blank",href:S(n==null?void 0:n.id),icon:s.jsx("i",{className:"fa-solid fa-external-link"})})}),width:100}];return s.jsxs("div",{children:[s.jsx(k,{style:{width:"100%",alignItems:"center",justifyContent:"center",marginBottom:10},direction:"vertical",children:s.jsx(H,{count:o({en:"New",vi:"Mới"}),style:{color:"white"},color:"purple",children:s.jsx(v,{icon:s.jsx("i",{className:"fa-solid fa-search"}),onClick:()=>{b("BulkDownloader:Tagged:FindAllPosts"),Y((e==null?void 0:e.id)||"")},children:o({en:"Find all posts of ",vi:"Tìm mọi bài viết của "})+(e==null?void 0:e.name)+"?"})})}),s.jsx(G,{data:a.map((i,n)=>({...i,index:n+1})),columns:B,searchable:!0,keyExtractor:i=>i==null?void 0:i.id,size:"small",renderTitle:R})]})}export{wn as default};
