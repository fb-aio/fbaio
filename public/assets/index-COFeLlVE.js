import{r as G,aA as o,aB as I}from"./index-DjNgLHmn.js";import{C as O,D as W,E as z,O as A,H as Y,u as te,c as ie,e as P,L as oe,S as H,i as ne,K,b as V,T as B,o as $,h as J}from"./MyApp-DK69-3iP.js";import ae from"./MyTable-D3EUnK_T.js";import{E as le}from"./ExportButton-DUkf_neG.js";import{u as se}from"./useAction-DnwuTQjV.js";import{A as re}from"./index-B19EW_zH.js";import{I as de}from"./index-E6wTmUh-.js";import{R as ce}from"./row-B78WAZFV.js";import{T as ue}from"./index-B5jAeavt.js";import"./index-CAy62gIh.js";import"./Table-CkM3Pabb.js";import"./addEventListener-D1m6mSJD.js";import"./index-BdfMe-pS.js";import"./PurePanel-C1cPjrOv.js";import"./SearchOutlined-DKaqJnTW.js";import"./index-DRxPCiTp.js";import"./index-1UiE3Fo6.js";import"./Dropdown-T16hB0xb.js";import"./useBreakpoint-Dh19YETt.js";import"./responsiveObserver-CGsauEKo.js";import"./Pagination-uHe4sqF_.js";import"./index-nfXIQ-n5.js";import"./EyeOutlined-CkbEv_yO.js";import"./file-download-BjnbICN-.js";import"./index-BTt_EacU.js";var Z=(i=>(i.USER="User",i.PAGE="Page",i.GROUP="Group",i))(Z||{}),m=(i=>(i.FOLLOWING="Following",i.UNFOLLOWED="UnFollowed",i))(m||{});const X={Following:{en:"Following",vi:"Đang theo dõi"},UnFollowed:{en:"Unfollowed",vi:"Đã bỏ theo dõi"}};async function fe(i=""){const r=await O({fb_api_req_friendly_name:"CometFeedPreferencesUnfollowProfileGridRefetchQuery",variables:{after_cursor:i,included_types:["USER","PAGE","GROUP"],no_memorialized_profiles:null,num_profiles:30,profile_picture_scale:2,query_substring:""},doc_id:"5699463850111622"}),d=W(r),{edges:j=[],page_info:u={}}=z(d);return j.map(f=>{var p,h,T,w,L,_;return{type:(p=f.node)==null?void 0:p.__typename,status:"Following",id:(h=f.node)==null?void 0:h.id,name:(T=f.node)==null?void 0:T.name,avatar:(L=(w=f.node)==null?void 0:w.profile_picture)==null?void 0:L.uri,url:(_=f.node)==null?void 0:_.url,cursor:f.cursor}})}async function ge(i){const r=i.type==="Group"?await O({fb_api_req_friendly_name:"CommitGroupSubscribeStatusSubscribeMutation",variables:{input:{subscribe_location:"FEED_SETTINGS",group_id:i.id,actor_id:await A()}},doc_id:"4771392912988139"}):await O({fb_api_req_friendly_name:"CommitActorSubscribeStatusSubscribeMutation",variables:{input:{subscribe_location:"FEED_SETTINGS",subscribee_id:i.id,actor_id:await A()}},doc_id:"7750648234952596"}),d=W(r);return console.log(d),Y(d,"id",!0)===i.id}async function me(i){const r=i.type==="Group"?await O({fb_api_req_friendly_name:"CommitGroupSubscribeStatusUnsubscribeMutation",variables:{input:{subscribe_location:"FEED_SETTINGS",group_id:i.id,actor_id:await A()}},doc_id:"4841019119329325"}):await O({fb_api_req_friendly_name:"CommitActorSubscribeStatusUnsubscribeMutation",variables:{input:{subscribe_location:"FEED_SETTINGS",unsubscribee_id:i.id,actor_id:await A()}},doc_id:"7531739850199826"}),d=W(r);return console.log(d),Y(d,"id",!0)===i.id}async function pe(i=""){var p,h,T,w,L,_;const r=await A();if(!i){const n=await O({fb_api_req_friendly_name:"ProfileCometTopAppSectionQuery",variables:{collectionToken:btoa("app_collection:"+r+":2356318349:33"),feedbackSource:65,feedLocation:"COMET_MEDIA_VIEWER",scale:1,sectionToken:btoa("app_section:"+r+":2356318349"),userID:r,__relay_internal__pv__CometUFIReactionsEnableShortNamerelayprovider:!1,__relay_internal__pv__FBReelsMediaFooter_comet_enable_reels_ads_gkrelayprovider:!1},doc_id:"8449649991761948"}),c=W(n),E=(_=(L=(w=(T=(h=(p=c==null?void 0:c.data)==null?void 0:p.node)==null?void 0:h.all_collections)==null?void 0:T.nodes)==null?void 0:w.find(a=>(a==null?void 0:a.id)&&atob(a.id).includes("2356318349:33")))==null?void 0:L.style_renderer)==null?void 0:_.collection;console.log(c);const{edges:U=[],page_info:b={}}=z(E);if(U.length>0)return U.map(a=>{var x,F,y,v,S,C,q,M,e;return{type:(F=(x=a==null?void 0:a.node)==null?void 0:x.node)==null?void 0:F.__typename,status:"Following",id:(v=(y=a==null?void 0:a.node)==null?void 0:y.node)==null?void 0:v.id,name:(C=(S=a==null?void 0:a.node)==null?void 0:S.title)==null?void 0:C.text,avatar:(M=(q=a==null?void 0:a.node)==null?void 0:q.image)==null?void 0:M.uri,url:(e=a==null?void 0:a.node)==null?void 0:e.url,cursor:b.end_cursor||a.cursor,isFavorite:!1}})}const d=await O({fb_api_req_friendly_name:"ProfileCometAppCollectionListRendererPaginationQuery",variables:{count:8,cursor:i,scale:1,search:null,id:btoa("app_collection:"+r+":2356318349:33")},doc_id:"8710009249031910"}),j=W(d);console.log(j);const{edges:u=[],page_info:f={}}=z(j);return u.map(n=>{var c,E,U,b,a,x,F,y,v,S,C;return{type:(E=(c=n==null?void 0:n.node)==null?void 0:c.node)==null?void 0:E.__typename,status:"Following",id:(b=(U=n==null?void 0:n.node)==null?void 0:U.node)==null?void 0:b.id,name:(x=(a=n==null?void 0:n.node)==null?void 0:a.title)==null?void 0:x.text,avatar:(y=(F=n==null?void 0:n.node)==null?void 0:F.image)==null?void 0:y.uri,url:(v=n==null?void 0:n.node)==null?void 0:v.url,cursor:f.end_cursor||n.cursor,isFavorite:!1,desc:((C=(S=n==null?void 0:n.node)==null?void 0:S.subtitle_text)==null?void 0:C.text)||""}})}function qe(){const{ti:i}=te(),{message:r}=ie(),{onClickAction:d,onClickBulkActions:j}=se(),[u,f]=P("Follows.data",[]),[p,h]=G.useState(!1),[T,w]=P("Follows.loadingFollowBulk",!1),[L,_]=P("Follows.loadingUnFollowBulk",!1),[n,c]=P("Follows.loadingRecord",{}),[E,U]=G.useMemo(()=>[u.filter(e=>e.status===m.FOLLOWING),u.filter(e=>e.status===m.UNFOLLOWED)],[u]),b=G.useRef(null);G.useEffect(()=>{x()},[]);const a=G.useRef(!1),x=async(e=!1)=>{if(a.current||p)return;a.current=!0;const t="Follows:onReload";r.loading({key:t,content:i({en:"Loading following...",vi:"Đang tải người bạn theo dõi..."}),duration:0}),h(!0);const l=e?[]:u,s=new Set(l.map(g=>g.id));for(const[g,N]of[[fe,i({en:"Loading following (option 1)... ",vi:"Đang tải người theo dõi (cách 1)... "})],[pe,i({en:"Loading following (option 2)... ",vi:"Đang tải người theo dõi (cách 2)... "})]]){let D="";for(;;){const k=await g(D);if(!(k!=null&&k.length))break;let Q=!1;for(let R of k)s.has(R.id)||(l.push(R),s.add(R.id),Q=!0);if(!Q)break;f([...l.map((R,ee)=>({...R,i:ee+1}))]),D=k[k.length-1].cursor,r.loading({key:t,content:N+l.length,duration:0}),await oe(300)}}r.success({key:t,content:i({en:"Finish loading follows: ",vi:"Tải xong danh sách theo dõi: "})+l.length}),h(!1),a.current=!1},F=(e,t)=>{var s,g;f(N=>{const D=N.find(k=>k.id===e.id);return D?(D.status=t,[...N]):N});const l=(s=b.current)==null?void 0:s.getDataSelected();l&&((g=b.current)==null||g.setDataSelected(l.filter(N=>N.id!==e.id)))},y=e=>(c({...n,[e.id]:!0}),d({record:e,id:e.id,key:"Follows:onClickFollow",actionFn:()=>ge(e),loadingText:()=>i({en:"Following...",vi:"Đang theo dõi..."})+" "+e.name,successText:()=>i({en:"Followed",vi:"Đã theo dõi"})+" "+e.name,failedText:()=>i({en:"Failed to follow",vi:"Lỗi theo dõi"})+" "+e.name,onSuccess:()=>{c({...n,[e.id]:!1}),F(e,m.FOLLOWING)}})),v=e=>(c({...n,[e.id]:!0}),d({record:e,id:e.id,key:"Follows:onClickUnFollow",actionFn:()=>me(e),loadingText:()=>i({en:"Unfollowing...",vi:"Đang bỏ theo dõi..."})+" "+e.name,successText:()=>i({en:"Unfollowed",vi:"Đã bỏ theo dõi"})+" "+e.name,failedText:()=>i({en:"Failed to unfollow",vi:"Lỗi bỏ theo dõi"})+" "+e.name,onSuccess:()=>{c({...n,[e.id]:!1}),F(e,m.UNFOLLOWED)}})),S=e=>{_(!0),j({data:e,key:"Follows:onClickUnFollowBulk",actionFn:v,loadingText:t=>i({en:"Unfollowing...",vi:"Đang bỏ theo dõi..."})+t.name,successText:(t,l)=>i({en:"Unfollow finished",vi:"Đã bỏ theo dõi xong"}),successDescItem:t=>o.jsx("a",{target:"_blank",href:J(t.id),children:t.name}),waitTime:300}).finally(()=>{_(!1)})},C=e=>{w(!0),j({data:e,key:"Follows:onClickFollowBulk",actionFn:t=>y(t),loadingText:t=>i({en:"Following...",vi:"Đang theo dõi..."})+t.name,successText:(t,l)=>i({en:"Follow finished: ",vi:"Đã theo dõi xong: "})+` ${t.length} / ${l.length}`,successDescItem:t=>o.jsx("a",{target:"_blank",href:J(t.id),children:t.name}),waitTime:300}).finally(()=>{w(!1)})},q=e=>{const t=e.length?e.filter(s=>s.status===m.FOLLOWING):E,l=e.length?e.filter(s=>s.status===m.UNFOLLOWED):U;return o.jsxs(o.Fragment,{children:[o.jsx(I,{type:"primary",icon:p?o.jsx("i",{className:"fa-solid fa-rotate-right fa-spin"}):o.jsx("i",{className:"fa-solid fa-rotate-right"}),onClick:()=>x(!0),children:i({en:"Reload",vi:"Tải lại"})}),o.jsx(le,{data:e.length?e:E,options:[{key:"uid",label:".txt (uid)",prepareData:s=>({fileName:"followings_uid.txt",data:s.map(g=>g.id).join(`
`)})},{key:"uid_name",label:".csv (uid+name)",prepareData:s=>({fileName:"followings_uid_name.csv",data:$(s.map(g=>({uid:g.id,name:g.name})))})},{key:"json",label:".json",prepareData:s=>({fileName:"followings.json",data:JSON.stringify(s,null,2)})},{key:"csv",label:".csv",prepareData:s=>({fileName:"followings.csv",data:$(s)})}]}),o.jsx(B,{title:i({en:"Unfollow "+t.length+" selected",vi:"Bỏ theo dõi "+t.length+" người đang chọn"}),children:o.jsx(I,{type:"default",danger:!0,icon:o.jsx("i",{className:"fa-solid fa-trash"}),disabled:t.length===0,loading:L,onClick:()=>S(t),children:i({en:"Unfollow",vi:"Bỏ theo dõi"})+" "+t.length})}),o.jsx(B,{title:i({en:"Follow "+l.length+" selected",vi:"Theo dõi "+l.length+" người đang chọn"}),children:o.jsx(I,{type:"default",icon:o.jsx("i",{className:"fa-solid fa-plus"}),disabled:l.length===0,loading:T,onClick:()=>C(l),children:i({en:"Follow",vi:"Theo dõi"})+" "+l.length})}),o.jsx(B,{title:i({en:"View on Facebook",vi:"Xem trên Facebook"}),children:o.jsx(I,{type:"default",icon:o.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"}),onClick:()=>window.open("https://www.facebook.com/me/following","_blank")})})]})},M=[{title:"#",dataIndex:"i",width:50,sorter:(e,t)=>e.i-t.i},{title:i({en:"Name",vi:"Tên"}),key:"name",dataIndex:"name",sorter:(e,t)=>(e.name||"").localeCompare(t.name||""),render:(e,t,l)=>o.jsxs(H,{align:"center",style:{maxWidth:400},children:[o.jsx(re,{shape:"square",src:o.jsx(de,{src:ne(t.id),fallback:t.avatar}),size:50}),o.jsxs(H,{direction:"vertical",style:{marginLeft:"10px"},size:0,children:[o.jsx("a",{href:t.url,target:"_blank",children:o.jsx("b",{children:t.name})}),o.jsx("span",{style:{opacity:.5},children:t.id})]})]}),onSearch:(e,t,l)=>K(e,l.name)||K(e,l.id),width:"auto"},{title:i({en:"Desc",vi:"Mô tả"}),key:"desc",dataIndex:"desc",render:(e,t,l)=>o.jsx("p",{style:{maxWidth:300,minWidth:50},children:e}),sorter:(e,t)=>(e.desc||"").localeCompare(t.desc||"")},{title:i({en:"Type",vi:"Loại"}),key:"type",dataIndex:"type",filters:Object.entries(Z).map(([e,t])=>({text:t+" ("+u.filter(l=>l.type===t).length+")",value:t})),onFilter:(e,t)=>t.type===e,width:120},{title:i({en:"Status",vi:"Trạng thái"}),key:"status",dataIndex:"status",render:(e,t,l)=>{const s=i(X[t.status]);return t.status===m.UNFOLLOWED?o.jsx(V,{color:"error",children:s}):s},filters:Object.entries(X).map(([e,t])=>({text:i(t)+" ("+u.filter(l=>l.status===e).length+")",value:e})),onFilter:(e,t)=>t.status===e,width:150},{title:i({en:"Action",vi:"Hành động"}),key:"action",dataIndex:"action",render:(e,t,l)=>t.status===m.FOLLOWING?o.jsx(B,{title:i({en:"UnFollow",vi:"Bỏ theo dõi"}),mouseEnterDelay:.5,children:o.jsx(I,{danger:!0,type:"default",icon:o.jsx("i",{className:"fa-solid fa-trash"}),onClick:()=>v(t),loading:n[t.id]})}):o.jsx(B,{title:i({en:"Follow",vi:"Theo dõi"}),mouseEnterDelay:.5,children:o.jsx(I,{type:"text",onClick:()=>y(t),icon:o.jsx("i",{className:"fa-regular fa-square-plus fa-xl"}),loading:n[t.id]})}),align:"right",width:100}];return o.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},children:[o.jsxs(ce,{align:"middle",style:{margin:"16px"},children:[o.jsx(ue.Title,{level:3,style:{margin:0},children:i({en:"Following",vi:"Đang theo dõi"})}),o.jsx(V,{style:{marginLeft:"10px",fontWeight:"bold",color:"#888"},children:u.filter(e=>e.status===m.FOLLOWING).length})]}),o.jsx(ae,{ref:b,data:u,columns:M,renderTitle:q,size:"small",searchable:!0,selectable:!0,keyExtractor:e=>e==null?void 0:e.id})]})}export{qe as default};
