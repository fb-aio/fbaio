const __vite__fileDeps=["./ImageLazyPreview-DOtxvlnf.js","./index-Cu5DMrqP.js","./index-DfqnkV-X.css","./MyApp-CBJyifzj.js","./index-uKhnUYaa.js","./EyeOutlined-FHe3ptwe.js","./addEventListener-BX9_jEDV.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as y,av as u,aw as j,aA as k}from"./index-Cu5DMrqP.js";import{C as F}from"./Collection-gHxE2ssH.js";import{A as R,u as T,P,B as U,g as W}from"./MyApp-CBJyifzj.js";import{S as M}from"./index-DhpzbMQc.js";import{L as B}from"./index-Bsb2O4uF.js";import"./index-CGIy8z5y.js";import"./file-download-CQflNR56.js";import"./index-BfGp5EFc.js";import"./Dropdown-4O0oXYv8.js";import"./PurePanel-Cc9k44PN.js";import"./index-BEDMcvkp.js";import"./index-VDeELPdW.js";import"./index-mZ6bkR5V.js";import"./index-B6wF2DLX.js";import"./EyeOutlined-FHe3ptwe.js";import"./SearchOutlined-BE8biauy.js";import"./index-Mn7J1M2X.js";import"./Pagination-ttRdgmts.js";import"./useBreakpoint-otqirn5h.js";import"./responsiveObserver-eHs-qAkp.js";import"./row-G-tErKJJ.js";var d=(i=>(i.OWNER="5",i.TAGGED="4",i))(d||{});async function Q({id:i,count:l=8,cursor:n="",type:a="5"}){var s,t;const c=await R({doc_id:"4820192058049838",fb_api_caller_class:"RelayModern",fb_api_req_friendly_name:"ProfileCometAppCollectionPhotosRendererPaginationQuery",variables:{count:l,cursor:n,scale:1,id:btoa(`app_collection:${i}:2305272732:${a}`)}}),p=JSON.parse(c),{edges:e=[],page_info:f}=((t=(s=p==null?void 0:p.data)==null?void 0:s.node)==null?void 0:t.pageItems)||{};return{photos:e.map(o=>{var m,r,_,b,h,v,C,w,E,I,x,N,S,O,A;return{id:atob((m=o==null?void 0:o.node)==null?void 0:m.id).split(":").pop(),url:(r=o==null?void 0:o.node)==null?void 0:r.url,thumbnail:(b=(_=o==null?void 0:o.node)==null?void 0:_.image)==null?void 0:b.uri,image:(C=(v=(h=o==null?void 0:o.node)==null?void 0:h.node)==null?void 0:v.viewer_image)==null?void 0:C.uri,width:(I=(E=(w=o==null?void 0:o.node)==null?void 0:w.node)==null?void 0:E.viewer_image)==null?void 0:I.width,height:(S=(N=(x=o==null?void 0:o.node)==null?void 0:x.node)==null?void 0:N.viewer_image)==null?void 0:S.height,accessibility_caption:(A=(O=o==null?void 0:o.node)==null?void 0:O.node)==null?void 0:A.accessibility_caption,cursor:o==null?void 0:o.cursor,photo_type:a}}),page_info:f}}async function q({id:i,count:l=8,cursor:n=""}){var f,s,t;const a=await R({doc_id:"6022153214500431",fb_api_caller_class:"RelayModern",fb_api_req_friendly_name:"GroupsCometMediaPhotosTabGridQuery",variables:{count:l,cursor:n,scale:1,id:i}}),c=JSON.parse(a),{edges:p=[],page_info:e}=((t=(s=(f=c==null?void 0:c.data)==null?void 0:f.node)==null?void 0:s.group_mediaset)==null?void 0:t.media)||{};return{photos:p.map(o=>{var m,r,_,b,h,v,C,w,E,I,x;return{id:(m=o==null?void 0:o.node)==null?void 0:m.id,url:(r=o==null?void 0:o.node)==null?void 0:r.url,thumbnail:(b=(_=o==null?void 0:o.node)==null?void 0:_.image)==null?void 0:b.uri,image:(v=(h=o==null?void 0:o.node)==null?void 0:h.viewer_image)==null?void 0:v.uri,width:(w=(C=o==null?void 0:o.node)==null?void 0:C.viewer_image)==null?void 0:w.width,height:(I=(E=o==null?void 0:o.node)==null?void 0:E.viewer_image)==null?void 0:I.height,accessibility_caption:(x=o==null?void 0:o.node)==null?void 0:x.accessibility_caption,cursor:o==null?void 0:o.cursor}}),page_info:e}}async function G(i){var c,p,e;const l=await R({fb_api_req_friendly_name:"CometPhotoRootContentQuery",variables:{UFI2CommentsProvider_commentsKey:"CometPhotoRootQuery",feedbackSource:65,feedLocation:"COMET_MEDIA_VIEWER",isMediaset:!1,nodeID:i,privacySelectorRenderLocation:"COMET_MEDIA_VIEWER",renderLocation:"permalink",scale:2,useDefaultActor:!1,useHScroll:!1,focusCommentID:null,displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,__relay_internal__pv__CometUFIReactionEnableShortNamerelayprovider:!0,__relay_internal__pv__CometUFIShareActionMigrationrelayprovider:!1,__relay_internal__pv__CometUFIReactionsEnableShortNamerelayprovider:!1,__relay_internal__pv__CometImmersivePhotoCanUserDisable3DMotionrelayprovider:!1},doc_id:"7830475950340566"}),n=JSON.parse(((c=l==null?void 0:l.split(`
`))==null?void 0:c[0])||"{}"),a=((p=n==null?void 0:n.data)==null?void 0:p.currMedia)||{};return{id:i,url:(e=a.creation_story)==null?void 0:e.url,accessibility_caption:a.accessibility_caption,image:a.image.uri,width:a.image.width,height:a.image.height,thumbnail:a.image.uri}}const J=y.lazy(()=>k(()=>import("./ImageLazyPreview-DOtxvlnf.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url)),L={[d.OWNER]:{en:"👤 Owner",vi:"👤 Chính chủ"},[d.TAGGED]:{en:"📌 Tagged",vi:"📌 Được tag"}};function mo({target:i}){const{ti:l}=T(),[n,a]=y.useState(d.OWNER);y.useEffect(()=>{i!=null&&i.id&&a(d.OWNER)},[i==null?void 0:i.id]);const c=y.useCallback(async(s=[],t)=>{var o,m;if(!(!(i!=null&&i.id)||!(i!=null&&i.type)))if(i.type===P.Group){const r=t||((o=s==null?void 0:s[(s==null?void 0:s.length)-1])==null?void 0:o.cursor)||"";return(await q({id:i.id,cursor:r})).photos}else{const r=s==null?void 0:s.filter(h=>h.photo_type===n),_=t||((m=r==null?void 0:r[(r==null?void 0:r.length)-1])==null?void 0:m.cursor)||"";return(await Q({id:i.id,cursor:_,type:n})).photos}},[i,n]),p=y.useCallback(s=>(i==null?void 0:i.type)!==P.Group&&u.jsx(U,{count:l({en:"New",vi:"Mới"}),color:"purple",style:{color:"white"},children:u.jsx(M,{value:n,onChange:a,style:{width:"150px"},children:Object.entries(d).map(([t,o])=>u.jsx(M.Option,{value:o,children:l(L[o])},t))})}),[n,l]),e=y.useCallback(s=>u.jsxs(B.Item,{className:"show-on-hover-trigger",children:[u.jsx(J,{src:s.thumbnail,alt:s.accessibility_caption,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px"},cacheId:"photos."+s.id,getPreview:()=>s.image||G(s.id).then(t=>t.image)}),u.jsx(j,{type:"default",icon:u.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:W(s.id)})]}),[]),f=y.useCallback(async(s,t)=>{if(!s.image&&(i==null?void 0:i.type)===P.Group){const o=await G(s.id);s.image=o.image||o.thumbnail||s.thumbnail}return{url:s.image,name:s.id+".jpg"}},[i==null?void 0:i.id]);return u.jsx(F,{collectionName:(i==null?void 0:i.name)+" - Photos - "+l(L[n]),fetchNext:c,renderItem:e,downloadItem:f,headerButtons:p,getItemCursor:s=>s.cursor||"",rowKey:s=>s.id})}export{mo as default};
