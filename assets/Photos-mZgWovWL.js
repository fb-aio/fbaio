const __vite__fileDeps=["./ImageLazyPreview-CbYDzIFT.js","./index-DOOTCcHC.js","./index-BM_p-30O.css","./useCacheState-Bvty8fNQ.js","./MyApp-C1Cge4LI.js","./index-BhyrVf84.js","./addEventListener-wLIjlol3.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as d,aq as P,au as A}from"./index-DOOTCcHC.js";import{C as N}from"./Collection-J0vJyBVX.js";import{p as x,a as k,x as M}from"./MyApp-C1Cge4LI.js";import{L as F}from"./index-DBKoNkzi.js";import"./index-Cs-LNwoF.js";import"./file-download-Dycc4scI.js";import"./useCacheState-Bvty8fNQ.js";import"./index-9LEuxGJt.js";import"./Dropdown-uE1te4Kd.js";import"./PurePanel-qusS7nQi.js";import"./index-CCWRB7N3.js";import"./TextArea-D20a544N.js";import"./addEventListener-wLIjlol3.js";import"./Pagination-CV8j8exz.js";import"./useBreakpoint-DW8QQd81.js";import"./responsiveObserver-CeUCIo-a.js";import"./row-BE6NqmDN.js";async function G({id:n,count:l=8,cursor:m=""}){var p,c;const s=await x({doc_id:"4820192058049838",fb_api_caller_class:"RelayModern",fb_api_req_friendly_name:"ProfileCometAppCollectionPhotosRendererPaginationQuery",variables:{count:l,cursor:m,scale:1,id:btoa(`app_collection:${n}:2305272732:5`)}}),o=JSON.parse(s),{edges:t=[],page_info:r}=((c=(p=o==null?void 0:o.data)==null?void 0:p.node)==null?void 0:c.pageItems)||{};return{photos:t.map(i=>{var a,_,e,u,h,y,b,f,C,v,w,I,E,R,S;return{id:atob((a=i==null?void 0:i.node)==null?void 0:a.id).split(":").pop(),url:(_=i==null?void 0:i.node)==null?void 0:_.url,thumbnail:(u=(e=i==null?void 0:i.node)==null?void 0:e.image)==null?void 0:u.uri,image:(b=(y=(h=i==null?void 0:i.node)==null?void 0:h.node)==null?void 0:y.viewer_image)==null?void 0:b.uri,width:(v=(C=(f=i==null?void 0:i.node)==null?void 0:f.node)==null?void 0:C.viewer_image)==null?void 0:v.width,height:(E=(I=(w=i==null?void 0:i.node)==null?void 0:w.node)==null?void 0:I.viewer_image)==null?void 0:E.height,accessibility_caption:(S=(R=i==null?void 0:i.node)==null?void 0:R.node)==null?void 0:S.accessibility_caption,cursor:i==null?void 0:i.cursor}}),page_info:r}}async function O({id:n,count:l=8,cursor:m=""}){var p,c,i;const s=await x({doc_id:"6022153214500431",fb_api_caller_class:"RelayModern",fb_api_req_friendly_name:"GroupsCometMediaPhotosTabGridQuery",variables:{count:l,cursor:m,scale:1,id:n}}),o=JSON.parse(s),{edges:t=[],page_info:r}=((i=(c=(p=o==null?void 0:o.data)==null?void 0:p.node)==null?void 0:c.group_mediaset)==null?void 0:i.media)||{};return{photos:t.map(a=>{var _,e,u,h,y,b,f,C,v,w,I;return{id:(_=a==null?void 0:a.node)==null?void 0:_.id,url:(e=a==null?void 0:a.node)==null?void 0:e.url,thumbnail:(h=(u=a==null?void 0:a.node)==null?void 0:u.image)==null?void 0:h.uri,image:(b=(y=a==null?void 0:a.node)==null?void 0:y.viewer_image)==null?void 0:b.uri,width:(C=(f=a==null?void 0:a.node)==null?void 0:f.viewer_image)==null?void 0:C.width,height:(w=(v=a==null?void 0:a.node)==null?void 0:v.viewer_image)==null?void 0:w.height,accessibility_caption:(I=a==null?void 0:a.node)==null?void 0:I.accessibility_caption,cursor:a==null?void 0:a.cursor}}),page_info:r}}async function L(n){var o,t,r;const l=await x({fb_api_req_friendly_name:"CometPhotoRootContentQuery",variables:{UFI2CommentsProvider_commentsKey:"CometPhotoRootQuery",feedbackSource:65,feedLocation:"COMET_MEDIA_VIEWER",isMediaset:!1,nodeID:n,privacySelectorRenderLocation:"COMET_MEDIA_VIEWER",renderLocation:"permalink",scale:2,useDefaultActor:!1,useHScroll:!1,focusCommentID:null,displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,__relay_internal__pv__CometUFIReactionEnableShortNamerelayprovider:!0,__relay_internal__pv__CometUFIShareActionMigrationrelayprovider:!1,__relay_internal__pv__CometUFIReactionsEnableShortNamerelayprovider:!1,__relay_internal__pv__CometImmersivePhotoCanUserDisable3DMotionrelayprovider:!1},doc_id:"7830475950340566"}),m=JSON.parse(((o=l==null?void 0:l.split(`
`))==null?void 0:o[0])||"{}"),s=((t=m==null?void 0:m.data)==null?void 0:t.currMedia)||{};return{id:n,url:(r=s.creation_story)==null?void 0:r.url,accessibility_caption:s.accessibility_caption,image:s.image.uri,width:s.image.width,height:s.image.height,thumbnail:s.image.uri}}const T=d.lazy(()=>A(()=>import("./ImageLazyPreview-CbYDzIFT.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url));function oo({target:n}){k();const l=d.useCallback(async(o=[],t)=>{var c;if(!(n!=null&&n.id)||!(n!=null&&n.type))return;const r=t||((c=o==null?void 0:o[(o==null?void 0:o.length)-1])==null?void 0:c.cursor)||"";return(n.type===M.Group?await O({id:n.id,cursor:r}):await G({id:n.id,cursor:r})).photos},[n]),m=d.useCallback(o=>P.jsx(F.Item,{children:P.jsx(T,{src:o.thumbnail,alt:o.accessibility_caption,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px"},cacheId:"photos."+o.id,getPreview:()=>o.image||L(o.id).then(t=>t.image)})}),[]),s=d.useCallback(async(o,t)=>{if(!o.image&&(n==null?void 0:n.type)===M.Group){const r=await L(o.id);o.image=r.image||r.thumbnail||o.thumbnail}return{url:o.image,name:o.id+".jpg"}},[n==null?void 0:n.id]);return P.jsx(N,{collectionName:(n==null?void 0:n.name)+" - Photos",fetchNext:l,renderItem:m,downloadItem:s,getItemCursor:o=>o.cursor||"",rowKey:o=>o.id})}export{oo as default};