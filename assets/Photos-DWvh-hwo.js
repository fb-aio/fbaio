const __vite__fileDeps=["./ImageLazyPreview-M0WFSJ4E.js","./index-Cj8gruw-.js","./index-DfqnkV-X.css","./MyApp-BMQe_Eiy.js","./index-Cpy8rQT1.js","./EyeOutlined-2i2M5SBi.js","./addEventListener-BlDUkFqO.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as y,av as u,aw as M,aA as G}from"./index-Cj8gruw-.js";import{C as L}from"./Collection-BSaonkiu.js";import{A as R,C as k,u as F,P,B as T,g as U}from"./MyApp-BMQe_Eiy.js";import{S as O}from"./index-D8D-heeM.js";import{L as W}from"./index-DxjD762R.js";import"./index-BHOeQ4iU.js";import"./file-download-ByxBwFQF.js";import"./index-BbR-VGrV.js";import"./Dropdown-Cs6YRy9O.js";import"./PurePanel-BGv0xznV.js";import"./index-7X3QTBV_.js";import"./index-CYiCfWV4.js";import"./index-CCQn-MmR.js";import"./index-D9fej95m.js";import"./EyeOutlined-2i2M5SBi.js";import"./SearchOutlined-Bg9h6-vZ.js";import"./index-BiCtmbrt.js";import"./Pagination-C3SzlPKq.js";import"./useBreakpoint-DqUsgXGj.js";import"./responsiveObserver-CWVQpC_d.js";import"./row-C7OYDVRv.js";var b=(i=>(i.OWNER="5",i.TAGGED="4",i))(b||{});async function B({id:i,count:l=8,cursor:n="",type:a="5"}){const c=await R({doc_id:"4820192058049838",fb_api_caller_class:"RelayModern",fb_api_req_friendly_name:"ProfileCometAppCollectionPhotosRendererPaginationQuery",variables:{count:l,cursor:n,scale:1,id:btoa(`app_collection:${i}:2305272732:${a}`)}});let e=JSON.parse(c),{edges:m=[],page_info:C}=k(e)||{};return m.map(o=>{var t,s,p,r,_,f,h,v,d,w,E,x,I,N,S;return{id:atob((t=o==null?void 0:o.node)==null?void 0:t.id).split(":").pop(),url:(s=o==null?void 0:o.node)==null?void 0:s.url,thumbnail:(r=(p=o==null?void 0:o.node)==null?void 0:p.image)==null?void 0:r.uri,image:(h=(f=(_=o==null?void 0:o.node)==null?void 0:_.node)==null?void 0:f.viewer_image)==null?void 0:h.uri,width:(w=(d=(v=o==null?void 0:o.node)==null?void 0:v.node)==null?void 0:d.viewer_image)==null?void 0:w.width,height:(I=(x=(E=o==null?void 0:o.node)==null?void 0:E.node)==null?void 0:x.viewer_image)==null?void 0:I.height,accessibility_caption:(S=(N=o==null?void 0:o.node)==null?void 0:N.node)==null?void 0:S.accessibility_caption,cursor:o==null?void 0:o.cursor,photo_type:a}})}async function Q({id:i,count:l=8,cursor:n=""}){var C,o,t;const a=await R({doc_id:"6022153214500431",fb_api_caller_class:"RelayModern",fb_api_req_friendly_name:"GroupsCometMediaPhotosTabGridQuery",variables:{count:l,cursor:n,scale:1,id:i}}),c=JSON.parse(a),{edges:e=[],page_info:m}=((t=(o=(C=c==null?void 0:c.data)==null?void 0:C.node)==null?void 0:o.group_mediaset)==null?void 0:t.media)||{};return{photos:e.map(s=>{var p,r,_,f,h,v,d,w,E,x,I;return{id:(p=s==null?void 0:s.node)==null?void 0:p.id,url:(r=s==null?void 0:s.node)==null?void 0:r.url,thumbnail:(f=(_=s==null?void 0:s.node)==null?void 0:_.image)==null?void 0:f.uri,image:(v=(h=s==null?void 0:s.node)==null?void 0:h.viewer_image)==null?void 0:v.uri,width:(w=(d=s==null?void 0:s.node)==null?void 0:d.viewer_image)==null?void 0:w.width,height:(x=(E=s==null?void 0:s.node)==null?void 0:E.viewer_image)==null?void 0:x.height,accessibility_caption:(I=s==null?void 0:s.node)==null?void 0:I.accessibility_caption,cursor:s==null?void 0:s.cursor}}),page_info:m}}async function j(i){var c,e,m;const l=await R({fb_api_req_friendly_name:"CometPhotoRootContentQuery",variables:{UFI2CommentsProvider_commentsKey:"CometPhotoRootQuery",feedbackSource:65,feedLocation:"COMET_MEDIA_VIEWER",isMediaset:!1,nodeID:i,privacySelectorRenderLocation:"COMET_MEDIA_VIEWER",renderLocation:"permalink",scale:2,useDefaultActor:!1,useHScroll:!1,focusCommentID:null,displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,__relay_internal__pv__CometUFIReactionEnableShortNamerelayprovider:!0,__relay_internal__pv__CometUFIShareActionMigrationrelayprovider:!1,__relay_internal__pv__CometUFIReactionsEnableShortNamerelayprovider:!1,__relay_internal__pv__CometImmersivePhotoCanUserDisable3DMotionrelayprovider:!1},doc_id:"7830475950340566"}),n=JSON.parse(((c=l==null?void 0:l.split(`
`))==null?void 0:c[0])||"{}"),a=((e=n==null?void 0:n.data)==null?void 0:e.currMedia)||{};return{id:i,url:(m=a.creation_story)==null?void 0:m.url,accessibility_caption:a.accessibility_caption,image:a.image.uri,width:a.image.width,height:a.image.height,thumbnail:a.image.uri}}const q=y.lazy(()=>G(()=>import("./ImageLazyPreview-M0WFSJ4E.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url)),A={[b.OWNER]:{en:"👤 Owner",vi:"👤 Chính chủ"},[b.TAGGED]:{en:"📌 Tagged",vi:"📌 Được tag"}};function mo({target:i}){const{ti:l}=F(),[n,a]=y.useState(b.OWNER);y.useEffect(()=>{i!=null&&i.id&&a(b.OWNER)},[i==null?void 0:i.id]);const c=y.useCallback(async(o=[],t)=>{var s,p;if(!(!(i!=null&&i.id)||!(i!=null&&i.type)))if(i.type===P.Group){const r=t||((s=o==null?void 0:o[(o==null?void 0:o.length)-1])==null?void 0:s.cursor)||"";return await Q({id:i.id,cursor:r})}else{const r=o==null?void 0:o.filter(h=>h.photo_type===n),_=t||((p=r==null?void 0:r[(r==null?void 0:r.length)-1])==null?void 0:p.cursor)||"";return await B({id:i.id,cursor:_,type:n})}},[i,n]),e=y.useCallback(o=>(i==null?void 0:i.type)!==P.Group&&u.jsx(T,{count:l({en:"New",vi:"Mới"}),color:"purple",style:{color:"white"},children:u.jsx(O,{value:n,onChange:a,style:{width:"150px"},children:Object.entries(b).map(([t,s])=>u.jsx(O.Option,{value:s,children:l(A[s])},t))})}),[n,l]),m=y.useCallback(o=>u.jsxs(W.Item,{className:"show-on-hover-trigger",children:[u.jsx(q,{src:o.thumbnail,alt:o.accessibility_caption,width:150,height:150,style:{objectFit:"cover",borderRadius:"10px"},cacheId:"photos."+o.id,getPreview:()=>o.image||j(o.id).then(t=>t.image)}),u.jsx(M,{type:"default",icon:u.jsx("i",{className:"fa-solid fa-up-right-from-square"}),style:{position:"absolute",bottom:10,right:10},className:"show-on-hover-item",target:"_blank",href:U(o.id)})]}),[]),C=y.useCallback(async(o,t)=>{if(!o.image&&(i==null?void 0:i.type)===P.Group){const s=await j(o.id);o.image=s.image||s.thumbnail||o.thumbnail}return{url:o.image,name:o.id+".jpg"}},[i==null?void 0:i.id]);return u.jsx(L,{collectionName:(i==null?void 0:i.name)+" - Photos - "+l(A[n]),fetchNext:c,renderItem:m,downloadItem:C,headerButtons:e,getItemCursor:o=>o.cursor||"",rowKey:o=>o.id})}export{mo as default};
