import{aA as i,r as B,aB as I}from"./index-COYbw2nA.js";import{D as O,E as A,G as z,P as W,I as ee,u as te,d as ne,k as $,t as V,U as ae,M as ie,g as P,b as H,j as se,L as J,c as K,T as D,o as X,i as Y}from"./MyApp-BqOFGx1Y.js";import re from"./MyTable-DKSYkrf0.js";import{E as ce}from"./ExportButton-BAyamkJ_.js";import{A as de}from"./index-Dype70px.js";import{I as ue}from"./index-BaGFYROl.js";import{R as fe}from"./row-CTG_2Oza.js";import{T as ge}from"./index-C2DU9lVT.js";import"./index-CuRhIo_n.js";import"./Table-DgateH40.js";import"./addEventListener-D2Oj2EJ2.js";import"./index-ChQ8N6ec.js";import"./PurePanel-n6z--zP8.js";import"./SearchOutlined-_u8rvD7y.js";import"./index-AGmSUtxm.js";import"./index-Bc35wtjH.js";import"./Dropdown-C0xfjFGB.js";import"./useBreakpoint-DVIPjZl0.js";import"./responsiveObserver-BI3UFpZ1.js";import"./Pagination-C49DcUwG.js";import"./index-DJ37g3_M.js";import"./EyeOutlined-DDdMQV6J.js";import"./file-download-DzAs5kbr.js";import"./index-BuHq4CJC.js";var oe=(n=>(n.USER="User",n.PAGE="Page",n.GROUP="Group",n))(oe||{}),j=(n=>(n.FOLLOWING="Following",n.UNFOLLOWED="UnFollowed",n))(j||{});const Z={Following:{en:"Following",vi:"Đang theo dõi"},UnFollowed:{en:"Unfollowed",vi:"Đã bỏ theo dõi"}};async function pe(n=""){const r=await O({fb_api_req_friendly_name:"CometFeedPreferencesUnfollowProfileGridRefetchQuery",variables:{after_cursor:n,included_types:["USER","PAGE","GROUP"],no_memorialized_profiles:null,num_profiles:30,profile_picture_scale:2,query_substring:""},doc_id:"5699463850111622"}),f=A(r),{edges:E=[],page_info:_={}}=z(f);return E.map(a=>{var d,g,F,x,m,h;return{type:(d=a.node)==null?void 0:d.__typename,status:"Following",id:(g=a.node)==null?void 0:g.id,name:(F=a.node)==null?void 0:F.name,avatar:(m=(x=a.node)==null?void 0:x.profile_picture)==null?void 0:m.uri,url:(h=a.node)==null?void 0:h.url,cursor:a.cursor}})}async function me(n){const r=n.type==="Group"?await O({fb_api_req_friendly_name:"CommitGroupSubscribeStatusSubscribeMutation",variables:{input:{subscribe_location:"FEED_SETTINGS",group_id:n.id,actor_id:await W()}},doc_id:"4771392912988139"}):await O({fb_api_req_friendly_name:"CommitActorSubscribeStatusSubscribeMutation",variables:{input:{subscribe_location:"FEED_SETTINGS",subscribee_id:n.id,actor_id:await W()}},doc_id:"7750648234952596"}),f=A(r);return console.log(f),ee(f,"id",!0)===n.id}async function he(n){const r=n.type==="Group"?await O({fb_api_req_friendly_name:"CommitGroupSubscribeStatusUnsubscribeMutation",variables:{input:{subscribe_location:"FEED_SETTINGS",group_id:n.id,actor_id:await W()}},doc_id:"4841019119329325"}):await O({fb_api_req_friendly_name:"CommitActorSubscribeStatusUnsubscribeMutation",variables:{input:{subscribe_location:"FEED_SETTINGS",unsubscribee_id:n.id,actor_id:await W()}},doc_id:"7531739850199826"}),f=A(r);return console.log(f),ee(f,"id",!0)===n.id}async function we(n=""){var d,g,F,x,m,h;const r=await W();if(!n){const l=await O({fb_api_req_friendly_name:"ProfileCometTopAppSectionQuery",variables:{collectionToken:btoa("app_collection:"+r+":2356318349:33"),feedbackSource:65,feedLocation:"COMET_MEDIA_VIEWER",scale:1,sectionToken:btoa("app_section:"+r+":2356318349"),userID:r,__relay_internal__pv__CometUFIReactionsEnableShortNamerelayprovider:!1,__relay_internal__pv__FBReelsMediaFooter_comet_enable_reels_ads_gkrelayprovider:!1},doc_id:"8449649991761948"}),u=A(l),p=(h=(m=(x=(F=(g=(d=u==null?void 0:u.data)==null?void 0:d.node)==null?void 0:g.all_collections)==null?void 0:F.nodes)==null?void 0:x.find(o=>(o==null?void 0:o.id)&&atob(o.id).includes("2356318349:33")))==null?void 0:m.style_renderer)==null?void 0:h.collection;console.log(u);const{edges:k=[],page_info:w={}}=z(p);if(k.length>0)return k.map(o=>{var y,b,L,C,T,S,M,q,e;return{type:(b=(y=o==null?void 0:o.node)==null?void 0:y.node)==null?void 0:b.__typename,status:"Following",id:(C=(L=o==null?void 0:o.node)==null?void 0:L.node)==null?void 0:C.id,name:(S=(T=o==null?void 0:o.node)==null?void 0:T.title)==null?void 0:S.text,avatar:(q=(M=o==null?void 0:o.node)==null?void 0:M.image)==null?void 0:q.uri,url:(e=o==null?void 0:o.node)==null?void 0:e.url,cursor:w.end_cursor||o.cursor,isFavorite:!1}})}const f=await O({fb_api_req_friendly_name:"ProfileCometAppCollectionListRendererPaginationQuery",variables:{count:8,cursor:n,scale:1,search:null,id:btoa("app_collection:"+r+":2356318349:33")},doc_id:"8710009249031910"}),E=A(f);console.log(E);const{edges:_=[],page_info:a={}}=z(E);return _.map(l=>{var u,p,k,w,o,y,b,L,C,T,S;return{type:(p=(u=l==null?void 0:l.node)==null?void 0:u.node)==null?void 0:p.__typename,status:"Following",id:(w=(k=l==null?void 0:l.node)==null?void 0:k.node)==null?void 0:w.id,name:(y=(o=l==null?void 0:l.node)==null?void 0:o.title)==null?void 0:y.text,avatar:(L=(b=l==null?void 0:l.node)==null?void 0:b.image)==null?void 0:L.uri,url:(C=l==null?void 0:l.node)==null?void 0:C.url,cursor:a.end_cursor||l.cursor,isFavorite:!1,desc:((S=(T=l==null?void 0:l.node)==null?void 0:T.subtitle_text)==null?void 0:S.text)||""}})}function _e(){const{ti:n}=te(),{message:r,notification:f}=ne();return{onClickBulkActions:async({data:a,key:d,actionFn:g,loadingText:F,successText:x,successDesc:m,successDescItem:h,waitTime:l=[2e3,5e3],requireVIP:u=!0})=>{if(u&&!await $()||!(a!=null&&a.length))return;const p=d+":waiting";V(d);let k=!1,w=[];for(let o=0;o<a.length&&(r.destroy(p),r.loading({key:d,content:i.jsxs(i.Fragment,{children:[F(a[o],o,a)+" ("+(o+1)+"/"+a.length+")",i.jsx("br",{}),i.jsx("i",{children:n({en:"Click to stop",vi:"Bấm để dừng"})})]}),duration:0,onClick:()=>{r.loading({key:d,content:n({en:"Stopping...",vi:"Đang dừng..."}),duration:0}),k=!0}}),await g(a[o])&&w.push(a[o]),!k);o++)if(l&&o<a.length-1){const b=ae(l[0]||l,l[1]||l);r.loading({key:p,content:n({en:"Sleeping "+Math.round(b/1e3)+"s",vi:"Đang đợi "+Math.round(b/1e3)+"s"}),duration:0}),await ie(b)}r.destroy(d),r.destroy(p),f.open({type:"success",duration:0,message:x(w,a),description:h?i.jsx("ol",{style:{maxHeight:200,overflowY:"auto",whiteSpace:"pre-wrap"},children:w.map((o,y)=>i.jsx("li",{children:h(o)},y))}):m==null?void 0:m(w,a)})},onClickAction:async({key:a,id:d,record:g,loadingText:F,successText:x,failedText:m,actionFn:h,onSuccess:l,requireVIP:u=!1})=>{if(u&&!await $())return!1;V(a),a+=":"+d;try{if(r.loading({key:a,content:F(g),duration:0}),await h())return l==null||l(),r.success({key:a,content:x(g)}),!0;throw new Error("Facebook response error")}catch(p){return r.destroy(a),f.open({type:"error",message:m(g),description:p.message}),!1}finally{}}}}function Pe(){const{ti:n}=te(),{message:r}=ne(),{onClickAction:f,onClickBulkActions:E}=_e(),[_,a]=P("Follows.data",[]),[d,g]=B.useState(!1),[F,x]=P("Follows.loadingFollowBulk",!1),[m,h]=P("Follows.loadingUnFollowBulk",!1),[l,u]=P("Follows.loadingRecord",{}),[p,k]=B.useMemo(()=>[_.filter(e=>e.status===j.FOLLOWING),_.filter(e=>e.status===j.UNFOLLOWED)],[_]),w=B.useRef(null);B.useEffect(()=>{y()},[]);const o=B.useRef(!1),y=async(e=!1)=>{if(o.current||d)return;o.current=!0;const t="Follows:onReload";r.loading({key:t,content:n({en:"Loading following...",vi:"Đang tải người bạn theo dõi..."}),duration:0}),g(!0);const s=e?[]:_,c=new Set(s.map(v=>v.id));for(const[v,N]of[[pe,n({en:"Loading following (option 1)... ",vi:"Đang tải người theo dõi (cách 1)... "})],[we,n({en:"Loading following (option 2)... ",vi:"Đang tải người theo dõi (cách 2)... "})]]){let G="";for(;;){const U=await v(G);if(!(U!=null&&U.length))break;let Q=!1;for(let R of U)c.has(R.id)||(s.push(R),c.add(R.id),Q=!0);if(!Q)break;a([...s.map((R,le)=>({...R,i:le+1}))]),G=U[U.length-1].cursor,r.loading({key:t,content:N+s.length,duration:0}),await ie(300)}}r.success({key:t,content:n({en:"Finish loading follows: ",vi:"Tải xong danh sách theo dõi: "})+s.length}),g(!1),o.current=!1},b=(e,t)=>{var c,v;a(N=>{const G=N.find(U=>U.id===e.id);return G?(G.status=t,[...N]):N});const s=(c=w.current)==null?void 0:c.getDataSelected();s&&((v=w.current)==null||v.setDataSelected(s.filter(N=>N.id!==e.id)))},L=e=>(u({...l,[e.id]:!0}),f({record:e,id:e.id,key:"Follows:onClickFollow",actionFn:()=>me(e),loadingText:()=>n({en:"Following...",vi:"Đang theo dõi..."})+" "+e.name,successText:()=>n({en:"Followed",vi:"Đã theo dõi"})+" "+e.name,failedText:()=>n({en:"Failed to follow",vi:"Lỗi theo dõi"})+" "+e.name,onSuccess:()=>{u({...l,[e.id]:!1}),b(e,j.FOLLOWING)}})),C=e=>(u({...l,[e.id]:!0}),f({record:e,id:e.id,key:"Follows:onClickUnFollow",actionFn:()=>he(e),loadingText:()=>n({en:"Unfollowing...",vi:"Đang bỏ theo dõi..."})+" "+e.name,successText:()=>n({en:"Unfollowed",vi:"Đã bỏ theo dõi"})+" "+e.name,failedText:()=>n({en:"Failed to unfollow",vi:"Lỗi bỏ theo dõi"})+" "+e.name,onSuccess:()=>{u({...l,[e.id]:!1}),b(e,j.UNFOLLOWED)}})),T=e=>{h(!0),E({data:e,key:"Follows:onClickUnFollowBulk",actionFn:t=>C(t),loadingText:t=>n({en:"Unfollowing...",vi:"Đang bỏ theo dõi..."})+t.name,successText:(t,s)=>n({en:"Unfollow finished: ",vi:"Đã bỏ theo dõi xong: "})+`${t.length} / ${s.length}`,successDescItem:t=>i.jsx("a",{target:"_blank",href:Y(t.id),children:t.name}),waitTime:300}).finally(()=>{h(!1)})},S=e=>{x(!0),E({data:e,key:"Follows:onClickFollowBulk",actionFn:t=>L(t),loadingText:t=>n({en:"Following...",vi:"Đang theo dõi..."})+t.name,successText:(t,s)=>n({en:"Follow finished: ",vi:"Đã theo dõi xong: "})+` ${t.length} / ${s.length}`,successDescItem:t=>i.jsx("a",{target:"_blank",href:Y(t.id),children:t.name}),waitTime:300}).finally(()=>{x(!1)})},M=e=>{const t=e.length?e.filter(c=>c.status===j.FOLLOWING):p,s=e.length?e.filter(c=>c.status===j.UNFOLLOWED):k;return i.jsxs(i.Fragment,{children:[i.jsx(I,{type:"primary",icon:d?i.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):i.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:()=>y(!0),children:n({en:"Reload",vi:"Tải lại"})}),i.jsx(ce,{data:e.length?e:p,options:[{key:"uid",label:".txt (uid)",prepareData:c=>({fileName:"followings_uid.txt",data:c.map(v=>v.id).join(`
`)})},{key:"uid_name",label:".csv (uid+name)",prepareData:c=>({fileName:"followings_uid_name.csv",data:X(c.map(v=>({uid:v.id,name:v.name})))})},{key:"json",label:".json",prepareData:c=>({fileName:"followings.json",data:JSON.stringify(c,null,2)})},{key:"csv",label:".csv",prepareData:c=>({fileName:"followings.csv",data:X(c)})}]}),i.jsx(D,{title:n({en:"Unfollow "+t.length+" selected",vi:"Bỏ theo dõi "+t.length+" người đang chọn"}),children:i.jsx(I,{type:"default",danger:!0,icon:i.jsx("i",{className:"fa-solid fa-trash"}),disabled:t.length===0,loading:m,onClick:()=>T(t),children:n({en:"Unfollow",vi:"Bỏ theo dõi"})+" "+t.length})}),i.jsx(D,{title:n({en:"Follow "+s.length+" selected",vi:"Theo dõi "+s.length+" người đang chọn"}),children:i.jsx(I,{type:"default",icon:i.jsx("i",{className:"fa-solid fa-plus"}),disabled:s.length===0,loading:F,onClick:()=>S(s),children:n({en:"Follow",vi:"Theo dõi"})+" "+s.length})}),i.jsx(D,{title:n({en:"View on Facebook",vi:"Xem trên Facebook"}),children:i.jsx(I,{type:"default",icon:i.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"}),onClick:()=>window.open("https://www.facebook.com/me/following","_blank")})})]})},q=[{title:"#",dataIndex:"i",width:50,sorter:(e,t)=>e.i-t.i},{title:n({en:"Name",vi:"Tên"}),key:"name",dataIndex:"name",sorter:(e,t)=>(e.name||"").localeCompare(t.name||""),render:(e,t,s)=>i.jsxs(H,{align:"center",style:{maxWidth:400},children:[i.jsx(de,{shape:"square",src:i.jsx(ue,{src:se(t.id),fallback:t.avatar}),size:50}),i.jsxs(H,{direction:"vertical",style:{marginLeft:"10px"},size:0,children:[i.jsx("a",{href:t.url,target:"_blank",children:i.jsx("b",{children:t.name})}),i.jsx("span",{style:{opacity:.5},children:t.id})]})]}),onSearch:(e,t,s)=>J(e,s.name)||J(e,s.id),width:"auto"},{title:n({en:"Desc",vi:"Mô tả"}),key:"desc",dataIndex:"desc",render:(e,t,s)=>i.jsx("p",{style:{maxWidth:300,minWidth:50},children:e}),sorter:(e,t)=>(e.desc||"").localeCompare(t.desc||"")},{title:n({en:"Type",vi:"Loại"}),key:"type",dataIndex:"type",filters:Object.entries(oe).map(([e,t])=>({text:t+" ("+_.filter(s=>s.type===t).length+")",value:t})),onFilter:(e,t)=>t.type===e,width:120},{title:n({en:"Status",vi:"Trạng thái"}),key:"status",dataIndex:"status",render:(e,t,s)=>{const c=n(Z[t.status]);return t.status===j.UNFOLLOWED?i.jsx(K,{color:"error",children:c}):c},filters:Object.entries(Z).map(([e,t])=>({text:n(t)+" ("+_.filter(s=>s.status===e).length+")",value:e})),onFilter:(e,t)=>t.status===e,width:150},{title:n({en:"Action",vi:"Hành động"}),key:"action",dataIndex:"action",render:(e,t,s)=>t.status===j.FOLLOWING?i.jsx(D,{title:n({en:"UnFollow",vi:"Bỏ theo dõi"}),mouseEnterDelay:.5,children:i.jsx(I,{danger:!0,type:"default",icon:i.jsx("i",{className:"fa-solid fa-trash"}),onClick:()=>C(t),loading:l[t.id]})}):i.jsx(D,{title:n({en:"Follow",vi:"Theo dõi"}),mouseEnterDelay:.5,children:i.jsx(I,{type:"text",onClick:()=>L(t),icon:i.jsx("i",{className:"fa-regular fa-square-plus fa-xl"}),loading:l[t.id]})}),align:"right",width:100}];return i.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[i.jsxs(fe,{align:"middle",style:{margin:"16px"},children:[i.jsx(ge.Title,{level:3,style:{margin:0},children:n({en:"Following",vi:"Đang theo dõi"})}),i.jsx(K,{style:{marginLeft:"10px",fontWeight:"bold",color:"#888"},children:_.filter(e=>e.status===j.FOLLOWING).length})]}),i.jsx(re,{ref:w,data:_,columns:q,renderTitle:M,size:"small",searchable:!0,selectable:!0,keyExtractor:e=>e==null?void 0:e.id})]})}export{Pe as default};
