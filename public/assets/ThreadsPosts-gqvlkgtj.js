import{r as w,aA as s,aB as U}from"./index-3R_JtJsb.js";import{E as q,G as V,u as H,B as A,b as L,aw as g,_ as K,$ as O}from"./MyApp-JQUE_GR2.js";import{c as W,g as I,d as z}from"./index-BktfXSCV.js";import{i as D}from"./icons-D2bguHVA.js";import{C as X}from"./Collection-DamOsCLl.js";import{V as Y}from"./VideoWithMuted-DqOmSCok.js";import{S as G}from"./index-VOIeOoP7.js";import{L as R}from"./index-C5dKeoR1.js";import{I as $}from"./index-inKeTVLy.js";import"./videos-TTYwUFDf.js";import"./index-YQWpqAdI.js";import"./responsiveObserver-Dq9Qf6Na.js";import"./useBreakpoint-BXA0LJo3.js";import"./index-BC_FdJzP.js";import"./index-Cv7UAqlR.js";import"./PurePanel-VF3vvWUT.js";import"./index-ygOWKzxX.js";import"./EyeOutlined-BZEdheFG.js";import"./SearchOutlined-Ca3Sy7A7.js";import"./index-DF91lPpc.js";import"./Dropdown-oM9B5iRS.js";import"./Collapse-znvayjeK.js";import"./index-DLwfniMs.js";import"./index-SZPGZGt1.js";import"./file-download-Bj_1hdB4.js";import"./index-IRdmHQq1.js";import"./index-CIPjK0F6.js";import"./index-DDe2fcLx.js";import"./Pagination-Dzn8nF3u.js";import"./row-J4pRG6hx.js";import"./addEventListener-N7Kv3Mqq.js";function J(a,t){var m,f,d,j,r,_,c,l,u,i,p,h,y,x,C,T,k,N,P,S;const n=(f=(m=a==null?void 0:a.node)==null?void 0:m.thread_items)==null?void 0:f[0],e=((r=(j=(d=n==null?void 0:n.post)==null?void 0:d.text_post_app_info)==null?void 0:j.share_info)==null?void 0:r.reposted_post)||((l=(c=(_=n==null?void 0:n.post)==null?void 0:_.text_post_app_info)==null?void 0:c.share_info)==null?void 0:l.quoted_post)||(n==null?void 0:n.post);return{id:(u=a==null?void 0:a.node)==null?void 0:u.id,pk:e==null?void 0:e.pk,code:e==null?void 0:e.code,caption:(i=e==null?void 0:e.caption)==null?void 0:i.text,image:I((p=e==null?void 0:e.image_versions2)==null?void 0:p.candidates),video:I(e==null?void 0:e.video_versions),carousel:(h=e==null?void 0:e.carousel_media)==null?void 0:h.map(o=>{var b;return{id:o==null?void 0:o.id,pk:o==null?void 0:o.pk,code:o==null?void 0:o.code,accessibilityCaption:o==null?void 0:o.accessibility_caption,image:I((b=o==null?void 0:o.image_versions2)==null?void 0:b.candidates),video:I(o==null?void 0:o.video_versions),isCarouselItem:!0}}),audio:e==null?void 0:e.audio,createdTime:(e==null?void 0:e.taken_at)*1e3,mentions:(T=(C=(x=(y=e==null?void 0:e.text_post_app_info)==null?void 0:y.text_fragments)==null?void 0:x.fragments)==null?void 0:C.filter(o=>(o==null?void 0:o.fragment_type)==="mentrion"))==null?void 0:T.map(o=>{var b,E,F,Q;return{id:(E=(b=o==null?void 0:o.mention_fragment)==null?void 0:b.mentioned_user)==null?void 0:E.id,username:(Q=(F=o==null?void 0:o.mention_fragment)==null?void 0:F.mentioned_user)==null?void 0:Q.username,text:o==null?void 0:o.plaintext}}),likeCount:e==null?void 0:e.like_count,replyCount:(k=e==null?void 0:e.text_post_app_info)==null?void 0:k.direct_reply_count,repostCount:(N=e==null?void 0:e.text_post_app_info)==null?void 0:N.repost_count,quoteCount:(P=e==null?void 0:e.text_post_app_info)==null?void 0:P.quote_count,isGenAI:((S=e==null?void 0:e.gen_ai_detection_method)==null?void 0:S.detection_method)!="NONE",cursor:(a==null?void 0:a.cursor)||(t==null?void 0:t.end_cursor),raw:a}}var v=(a=>(a.Threads="Threads",a.Replies="Replies",a.Reposts="Reposts",a))(v||{});const B={Threads:{first:{name:"BarcelonaProfileThreadsTabQuery",doc_id:"8436285959793247"},withCursor:{name:"BarcelonaProfileThreadsTabRefetchableQuery",doc_id:"8921337961211543"}},Replies:{first:{name:"BarcelonaProfileRepliesTabQuery",doc_id:"8488857591189950"},withCursor:{name:"BarcelonaProfileRepliesTabRefetchableQuery",doc_id:"8562442443831413"}},Reposts:{first:{name:"BarcelonaProfileRepostsTabQuery",doc_id:"8425754140878176"},withCursor:{name:"BarcelonaProfileRepostsTabRefetchableQuery",doc_id:"9365308133484269"}}};async function Z(a="",t="",n="Threads"){let e;if(t){const d=await W({fb_api_req_friendly_name:B[n].withCursor.name,variables:{after:t,before:null,first:10,last:null,userID:a,__relay_internal__pv__BarcelonaIsLoggedInrelayprovider:!0,__relay_internal__pv__BarcelonaIsInlineReelsEnabledrelayprovider:!1,__relay_internal__pv__BarcelonaOptionalCookiesEnabledrelayprovider:!0,__relay_internal__pv__BarcelonaShowReshareCountrelayprovider:!1,__relay_internal__pv__BarcelonaQuotedPostUFIEnabledrelayprovider:!1,__relay_internal__pv__BarcelonaIsCrawlerrelayprovider:!1,__relay_internal__pv__BarcelonaShouldShowFediverseM075Featuresrelayprovider:!0},doc_id:B[n].withCursor.doc_id});e=q(d)}else{const d=await W({fb_api_req_friendly_name:B[n].first.name,variables:{userID:a,__relay_internal__pv__BarcelonaIsLoggedInrelayprovider:!0,__relay_internal__pv__BarcelonaIsInlineReelsEnabledrelayprovider:!1,__relay_internal__pv__BarcelonaOptionalCookiesEnabledrelayprovider:!0,__relay_internal__pv__BarcelonaShowReshareCountrelayprovider:!1,__relay_internal__pv__BarcelonaQuotedPostUFIEnabledrelayprovider:!1,__relay_internal__pv__BarcelonaIsCrawlerrelayprovider:!1,__relay_internal__pv__BarcelonaShouldShowFediverseM075Featuresrelayprovider:!0},doc_id:B[n].first.doc_id});e=q(d)}console.log(e);const{edges:m=[],page_info:f={}}=V(e);return m.map(d=>J(d,f))}const M={[v.Threads]:{en:"📝 Posts",vi:"📝 Posts"},[v.Replies]:{en:"💬 Replies",vi:"💬 Replies"},[v.Reposts]:{en:"🔁 Reposts",vi:"🔁 Reposts"}};function Pe({target:a}){const{ti:t}=H(),[n,e]=w.useState(v.Threads),m=w.useCallback(async(r=[],_)=>{var l;return a!=null&&a.id?await Z(a.id,_||((l=r[r.length-1])==null?void 0:l.cursor),n):void 0},[a,n]),f=w.useCallback((r,_)=>s.jsx(A,{count:t({en:"New",vi:"Mới"}),color:"purple",style:{color:"white"},children:s.jsx(G,{disabled:_,value:n,onChange:e,style:{width:"150px"},children:Object.entries(v).map(([c,l])=>s.jsx(G.Option,{value:l,children:t(M[l])},c))})}),[n,t]),d=w.useCallback(r=>{var i,p,h,y;const _=r.image||r.video||((i=r.carousel)==null?void 0:i.length),c="isCarouselItem"in r,l=c?null:s.jsx(U,{type:"default",icon:s.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:z("@"+(a==null?void 0:a.id)+"/post/"+r.code)}),u=c?null:s.jsxs(L,{direction:"vertical",size:0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",paddingTop:5,paddingLeft:10},children:[s.jsxs("span",{children:[s.jsx("i",{className:"fa fa-thumbs-up"})," ",g(r.likeCount)]}),s.jsxs("span",{children:[s.jsx("i",{className:"fa fa-comment"})," ",g(r.replyCount)]}),s.jsxs("span",{children:[s.jsx("i",{className:"fa fa-retweet"})," ",g(r.repostCount)]}),s.jsxs("span",{children:[s.jsx("i",{className:"fa fa-quote-left"})," ",g(r.quoteCount)]}),s.jsxs("span",{children:[s.jsx("i",{className:"fa fa-clock"})," ",K(new Date(r.createdTime))]})]});return _?s.jsxs(R.Item,{children:[s.jsxs("div",{className:"show-on-hover-trigger",children:[s.jsx($,{src:r.image,width:250,height:250,style:{objectFit:"cover",borderRadius:10},preview:r.video||(p=r.carousel)!=null&&p.length?{destroyOnClose:!0,imageRender:()=>{var x;return(x=r.carousel)!=null&&x.length?s.jsx(L,{style:{maxWidth:"90vw",maxHeight:"90vh",alignItems:"center",overflowY:"auto",overflowX:"hidden",backgroundColor:"#111",padding:20,borderRadius:10},children:s.jsx(R,{grid:{gutter:10},style:{width:"100%"},dataSource:r.carousel,renderItem:d,rowKey:C=>C.id})}):s.jsx(Y,{src:r.video,style:{maxWidth:"90vw",maxHeight:"90vh"}})},toolbarRender:()=>null}:void 0}),l]}),s.jsx("p",{style:{wordWrap:"break-word",maxWidth:250,padding:5},title:r.caption,children:O(r.caption,80)}),s.jsx("div",{style:{position:"absolute",top:10,right:10,pointerEvents:"none"},children:((h=r.carousel)==null?void 0:h.length)>0?s.jsxs(s.Fragment,{children:[s.jsx("span",{children:(y=r.carousel)==null?void 0:y.length}),D.IGCarousel]}):r.video?D.IGVideo:null}),u]}):s.jsx(R.Item,{children:s.jsxs("div",{className:"show-on-hover-trigger",children:[s.jsx("div",{style:{width:250,height:250,display:"flex",justifyContent:"center",alignItems:"center"},children:s.jsx("p",{style:{wordWrap:"break-word",padding:5},title:r.caption,children:O(r.caption,200)})}),l,u]})})},[]),j=w.useCallback((r,_)=>{var l,u;if(!r.video&&!r.image&&((l=r.carousel)==null?void 0:l.length)===0)return[];function c(i,p=""){const h=!!i.video;return{url:h?i.video:i.image,name:p+i.id+(h?".mp4":".jpg")}}return((u=r.carousel)==null?void 0:u.length)>0?r.carousel.map((i,p)=>c(i,p+"_")):c(r)},[]);return a!=null&&a.username?s.jsx(X,{collectionName:(a==null?void 0:a.username)+" - Threads "+t(M[n]),fetchNext:m,renderItem:d,downloadItem:j,headerButtons:f,getItemCursor:r=>r.cursor||"",rowKey:r=>r.id}):null}export{Pe as default};
