import{A as p,M as E,C as D,g as x}from"./MyApp-CBJyifzj.js";async function R({uid:t="",cursor:r}){const a=await p({fb_api_req_friendly_name:"ProfileCometAppCollectionGridRendererPaginationQuery",variables:{count:8,scale:1,cursor:r??null,id:btoa(`app_collection:${t}:2409997254:96`)},doc_id:"2983410188445167"}),n=JSON.parse(a);console.log(n);const{edges:o=[],page_info:i={}}=D(n);return o.map(l=>{var _,s,c,u,e;return{id:((_=l.node.node)==null?void 0:_.id)||atob(l.node.id).split(":").at(-1),name:l.node.title.text,subTitle:(s=l.node.subtitle_text)==null?void 0:s.text,url:l.node.url,image:l.node.image.uri,cursor:l.cursor,total:((e=(u=(c=n==null?void 0:n.data)==null?void 0:c.node)==null?void 0:u.items)==null?void 0:e.count)||0}})}var M=(t=>(t.ADMIN="admin",t.LIKED="liked",t.UNLIKED="unliked",t.UNFOLLOWED="unfollowed",t.INVITED="invited",t.DECLINED="declined",t))(M||{});async function q(t=""){const r=await p({fb_api_req_friendly_name:"PagesCometAllLikedPagesSectionPaginationQuery",variables:{cursor:t||null,count:20,ranking_model:"INTEGRITY_SIGNALS",scale:2,id:await E(),__relay_internal__pv__StoriesRingrelayprovider:!1},doc_id:"7763290630455552"}),a=JSON.parse(r),{edges:n=[],page_info:o={}}=D(a);return console.log(a),n.map(i=>{var l,_,s,c,u,e,m,f,d,b,v,y,w,k,L,N,P,O,C,I,S;return{id:((_=(l=i==null?void 0:i.node)==null?void 0:l.node)==null?void 0:_.id)||((s=i==null?void 0:i.node)==null?void 0:s.id),name:((u=(c=i==null?void 0:i.node)==null?void 0:c.title)==null?void 0:u.text)||((e=i==null?void 0:i.node)==null?void 0:e.name),url:(m=i==null?void 0:i.node)==null?void 0:m.url,image:((d=(f=i==null?void 0:i.node)==null?void 0:f.image)==null?void 0:d.uri)||((v=(b=i==null?void 0:i.node)==null?void 0:b.profile_picture)==null?void 0:v.uri),cursor:i==null?void 0:i.cursor,userType:(y=i==null?void 0:i.node)!=null&&y.is_viewer_admin?"admin":"liked",category:(w=i==null?void 0:i.node)==null?void 0:w.category_name,verified:(k=i==null?void 0:i.node)==null?void 0:k.is_verified,ctaLabel:(P=(N=(L=i==null?void 0:i.node)==null?void 0:L.comet_page_cta_renderer)==null?void 0:N.label)==null?void 0:P.text,ctaSubtext:(C=(O=i==null?void 0:i.node)==null?void 0:O.comet_page_cta_renderer)==null?void 0:C.subtext,canLike:(I=i==null?void 0:i.node)==null?void 0:I.can_viewer_like,subscribe_status:(S=i==null?void 0:i.node)==null?void 0:S.subscribe_status}})}async function A(t=""){var n,o,i;const r=await p({fb_api_req_friendly_name:"CometProfilePlusUnlikeMutation",variables:{input:{is_tracking_encrypted:!1,page_id:t,source:"page_profile",tracking:null,actor_id:"me",client_mutation_id:"1"},scale:3},doc_id:"5358677870817645"}),a=JSON.parse(r);return((i=(o=(n=a==null?void 0:a.data)==null?void 0:n.page_unlike)==null?void 0:o.page)==null?void 0:i.id)===t}async function J(t=""){var n,o,i;const r=await p({fb_api_req_friendly_name:"CometUserUnfollowMutation",variables:{action_render_location:"WWW_COMET_PROFILE",input:{attribution_id_v2:"ProfileCometTimelineListViewRoot.react,comet.profile.timeline.list,via_cold_start,1724165629822,111511,250100865708545,,",is_tracking_encrypted:!1,subscribe_location:"PROFILE",tracking:null,unsubscribee_id:t,actor_id:"me"},scale:2},doc_id:"7959683157389920"}),a=JSON.parse(r);return(i=(o=(n=a==null?void 0:a.data)==null?void 0:n.actor_unsubscribe)==null?void 0:o.unsubscribee)==null?void 0:i.id}async function h(){var a,n,o;const t=await p({fb_api_req_friendly_name:"PageCometLaunchpointInvitesRootQuery",variables:{id:await E()},doc_id:"7224925170868877"}),r=JSON.parse(t);return console.log(r),(o=(n=(a=r==null?void 0:r.data)==null?void 0:a.user)==null?void 0:n.profile_plus_follower_invites)==null?void 0:o.map(i=>{var _,s,c,u,e;const l=((_=i==null?void 0:i.delegate_page)==null?void 0:_.id)||(i==null?void 0:i.delegate_page_id);return{id:l,name:((s=i==null?void 0:i.delegate_page)==null?void 0:s.name)||"???",category:(c=i==null?void 0:i.delegate_page)==null?void 0:c.category_name,image:(u=i==null?void 0:i.delegate_page)==null?void 0:u.profile_picture_uri,url:x(l),userType:"invited",cursor:"",inviteId:i==null?void 0:i.follower_invite_id,inviterId:i==null?void 0:i.inviter_id,inviterName:i==null?void 0:i.inviter_name,inviterAvatar:(e=i==null?void 0:i.inviter_profile_photo)==null?void 0:e.uri}})}async function G(t=""){var n,o;const r=await p({fb_api_req_friendly_name:"CometProfilePlusDeclineFollowerInviteCommitMutation",variables:{input:{actor_id:"me",follower_invite_id:t,ref:"pending_invites"}},doc_id:"5270202713012831"}),a=JSON.parse(r);return(o=(n=a==null?void 0:a.data)==null?void 0:n.decline_follower_invite)==null?void 0:o.follower_invite}export{M as U,q as a,J as b,R as c,G as d,h as g,A as u};
