import{D as v,E as W,G as N}from"./MyApp-JQUE_GR2.js";import{e as j,c as J}from"./videos-TTYwUFDf.js";async function X({id:I="",cursor:E=""}){var D,s,l;const e=await v({fb_api_req_friendly_name:"ProfileCometAppCollectionReelsRendererPaginationQuery",variables:{count:10,cursor:E,feedLocation:"COMET_MEDIA_VIEWER",feedbackSource:65,focusCommentID:null,renderLocation:null,scale:1,useDefaultActor:!0,id:btoa("app_collection:"+I+":168684841768375:260")},doc_id:"7821270511254925"}),_=W(((D=e==null?void 0:e.split(`
`))==null?void 0:D[0])||"{}");console.log(_);const{edges:i=[],page_info:k={}}=((l=(s=_==null?void 0:_.data)==null?void 0:s.node)==null?void 0:l.aggregated_fb_shorts)||{};return i.map(a=>{var o,n,t,p,u,f,c,y,d,b,m,h;const r=((n=(o=a==null?void 0:a.profile_reel_node)==null?void 0:o.node)==null?void 0:n.short_form_video_context)||{};return{...j(r==null?void 0:r.playback_video),id:((u=(p=(t=a==null?void 0:a.profile_reel_node)==null?void 0:t.node)==null?void 0:p.video)==null?void 0:u.id)||atob((f=a==null?void 0:a.profile_reel_node)==null?void 0:f.id).split(":").pop(),description:(d=(y=(c=a==null?void 0:a.profile_reel_node)==null?void 0:c.node)==null?void 0:y.message)==null?void 0:d.text,viewCount:r==null?void 0:r.play_count_reduced,created_time:(((m=(b=a==null?void 0:a.profile_reel_node)==null?void 0:b.node)==null?void 0:m.creation_time)||0)*1e3+"",url:r==null?void 0:r.shareable_url,cursor:(a==null?void 0:a.cursor)||k.end_cursor,music:r==null?void 0:r.track_title,length:(h=r==null?void 0:r.playback_video)==null?void 0:h.length_in_second}})}async function Y({page_id:I="",group_id_list:E=[],root_video_id:e="",cursor:_=""}){var l;const i=_?await v({fb_api_req_friendly_name:"FBReelsContainerQuery",variables:{count:5,cursor:_,feedLocation:"COMET_MEDIA_VIEWER",feedbackSource:65,focusCommentID:null,group_id_list:E,recent_vpvs_v2:[],referral_source:"fb_shorts_bookmark",renderLocation:"fb_shorts_video_deep_dive",root_video_id:e||null,scale:2,surface_type:"FEED_VIDEO_DEEP_DIVE",useDefaultActor:!1,__relay_internal__pv__FBReelsMediaFooter_comet_enable_reels_ads_gkrelayprovider:!1,__relay_internal__pv__IsWorkUserrelayprovider:!1},doc_id:"9277146635647891"}):await v({fb_api_req_friendly_name:"FBReelsRootWithEntrypointQuery",variables:{count:1,defer_comments_loading:!1,feedbackSource:65,feedLocation:"COMET_MEDIA_VIEWER",focusCommentID:null,group_id_list:E,initial_node_id:"",isAggregationProfileViewerOrShouldShowReelsForPage:!1,page_id:I,recent_vpvs_v2:[],referral_source:"fb_shorts_bookmark",renderLocation:"fb_shorts_video_deep_dive",root_video_id:e||null,root_video_tracking_key:"",scale:2,shouldIncludeInitialNodeFetch:!1,shouldShowReelsForPage:!1,surface_type:"FEED_VIDEO_DEEP_DIVE",__relay_internal__pv__FBReelsMediaFooter_comet_enable_reels_ads_gkrelayprovider:!1,__relay_internal__pv__IsWorkUserrelayprovider:!1},doc_id:"27470664929247812"}),k=JSON.parse(((l=i==null?void 0:i.split(`
`))==null?void 0:l[0])||"{}");console.log(_,k);const{edges:D,page_info:s}=N(k);return D.map(a=>{var o,n,t,p,u,f,c,y,d,b,m,h,F,R,V,A,S,C,M,B,O,L,P,q,U;const r=(o=a==null?void 0:a.node)==null?void 0:o.short_form_video_context;return{id:a==null?void 0:a.id,caption:(t=(n=a==null?void 0:a.node)==null?void 0:n.message)==null?void 0:t.text,translated_caption:(u=(p=a==null?void 0:a.node)==null?void 0:p.translated_message_for_viewer)==null?void 0:u.text,post_id:(f=a==null?void 0:a.node)==null?void 0:f.post_id,sound:{id:(c=r==null?void 0:r.soundtrack_info)==null?void 0:c.id,title:r==null?void 0:r.track_title},owner:{id:(y=r==null?void 0:r.video_owner)==null?void 0:y.id,avatar:(b=(d=r==null?void 0:r.video_owner)==null?void 0:d.displayPicture)==null?void 0:b.uri,name:(m=r==null?void 0:r.video_owner)==null?void 0:m.name,url:(h=r==null?void 0:r.video_owner)==null?void 0:h.url,ig_username:((F=r==null?void 0:r.video_owner)==null?void 0:F.__isActor)=="InstagramUserV2"?(R=r==null?void 0:r.video_owner)==null?void 0:R.username:""},video:{id:(V=r==null?void 0:r.video)==null?void 0:V.id,owner:(A=r==null?void 0:r.video_owner)==null?void 0:A.id,length:((S=r==null?void 0:r.video)==null?void 0:S.playable_duration_in_ms)||(((C=r==null?void 0:r.playback_video)==null?void 0:C.length_in_second)||0)*1e3,url:r==null?void 0:r.shareable_url,width:(M=r==null?void 0:r.playback_video)==null?void 0:M.width,height:(B=r==null?void 0:r.playback_video)==null?void 0:B.height,source:["browser_native_hd_url","browser_native_sd_url"].map(w=>{var Q,T;return(T=(Q=r==null?void 0:r.playback_video)==null?void 0:Q.videoDeliveryLegacyFields)==null?void 0:T[w]}).find(w=>!!w),created_time:(((O=a==null?void 0:a.node)==null?void 0:O.creation_time)||0)*1e3+"",thumbnail:(L=r==null?void 0:r.video)==null?void 0:L.first_frame_thumbnail,variants:J((q=(P=r==null?void 0:r.playback_video)==null?void 0:P.videoDeliveryLegacyFields)==null?void 0:q.dash_manifest_xml_string),quality:(U=r==null?void 0:r.playback_video)==null?void 0:U.min_quality_preference},cursor:(a==null?void 0:a.cursor)||(s==null?void 0:s.end_cursor)}})}JSON.stringify({qid:"-909642526462335516",mf_story_key:"1169687781834225",top_level_post_id:"1169687781834225",content_owner_id_new:"100063790413558",page_id:"105709027913953",story_location:153,story_attachment_style:"fb_shorts_creation",video_id:"1735896850598697",sty:128,mf_objid:"1169687781834225",ent_attachement_type:"FBShortsStoryAttachment",app_id:"2392950137",page_insights:{"100063790413558":{page_id:"100063790413558",page_id_type:"page",actor_id:"100063790413558",dm:{isShare:0,originalPostOwnerID:0,sharedMediaID:0,sharedMediaOwnerID:0},psn:"EntStatusCreationStory",post_context:{object_fbtype:266,publish_time:1731474065,story_name:"EntStatusCreationStory",story_fbid:["1169687781834225"]},role:1,sl:153,targets:[{actor_id:"100063790413558",page_id:"100063790413558",post_id:"1169687781834225",role:1,share_id:0}]}},actrs:"100063790413558",fb_shorts_tray_mf_story_key:"-2242439210195115141",fb_shorts_tray_query_id:"-909642526489079076",fb_shorts_ifu_tray_index:1,fb_shorts_ifu_tray_position:12,fb_shorts_ranking_request_id:"-909710971046028682",tds_flgs:3});export{X as a,Y as g};
