import{c as m}from"./videos-DABF11rT.js";import{D as b,E as h}from"./MyApp-DK69-3iP.js";import{f as w,b as y}from"./core-C-d6rfXn.js";function k(r,s){var e,i,a;const n=((e=r==null?void 0:r.node)==null?void 0:e.media)||{};return{id:n.id,post_id:n==null?void 0:n.code,type:(i=r==null?void 0:r.node)==null?void 0:i.__typename,width:n.original_width,height:n.original_height,image:y((a=n.image_versions2)==null?void 0:a.candidates),video:y(n.video_versions),comment_count:n.comment_count,like_count:n.like_count,play_count:n.play_count,view_count:n.view_count,cursor:(r==null?void 0:r.cursor)||(s==null?void 0:s.end_cursor),raw:r}}async function j(r="",s=""){const n=await w({fb_api_req_friendly_name:"PolarisProfileReelsTabContentQuery_connection",variables:{after:s,before:null,data:{include_feed_video:!0,page_size:12,target_user_id:r},first:4,last:null},doc_id:"7845543455542541"}),e=b(n);console.log("res ne",e);const{edges:i=[],page_info:a={}}=h(e);return i.map(t=>k(t,a))}async function C(r=""){const s=await w({fb_api_req_friendly_name:"PolarisClipsTabDesktopContainerQuery",variables:{data:{container_module:"clips_tab_desktop_page"},first:null,__relay_internal__pv__PolarisReelsShareMenurelayprovider:!0},doc_id:8431013483653518}),n=b(s);console.log("getInstaReelsFeed",n);const{edges:e=[],page_info:i={}}=h(n);return e.map(a=>{var _,c,l,u,p,f,v,d;const t=((_=a==null?void 0:a.node)==null?void 0:_.media)||{},o=(l=(c=t==null?void 0:t.clips_metadata)==null?void 0:c.music_info)==null?void 0:l.music_asset_info,R=(u=t==null?void 0:t.clips_metadata)==null?void 0:u.original_sound_info;return{...k(a,i),code:t==null?void 0:t.code,caption:(p=t==null?void 0:t.caption)==null?void 0:p.text,music:R?null:{id:o==null?void 0:o.audio_cluster_id,title:o==null?void 0:o.title,artist:o==null?void 0:o.display_artist,cover:o==null?void 0:o.cover_artwork_thumbnail_uri},user:{id:(f=t==null?void 0:t.user)==null?void 0:f.id,username:(v=t==null?void 0:t.user)==null?void 0:v.username,avatar:(d=t==null?void 0:t.user)==null?void 0:d.profile_pic_url},created_at:((t==null?void 0:t.taken_at)||0)*1e3,variants:m(t==null?void 0:t.video_dash_manifest)}})}export{C as a,j as g};
