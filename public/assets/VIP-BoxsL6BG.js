import{r as k,aA as n,aH as i,aG as b,aB as I}from"./index-wZlHKvIC.js";import{u as V,a as P,t as y,b as s,B as u,c as m,T as w,k as x}from"./MyApp-BoAWzGij.js";import{T}from"./index-Bv_gDArU.js";import{R as j}from"./row-zII7X2E0.js";import{A as g}from"./index-BrcBDEr3.js";import{F as B}from"./Table-BmdZtMSU.js";import"./TextArea-DZxd1cfF.js";import"./responsiveObserver-BoSTImBj.js";import"./addEventListener-DUkyYCb2.js";import"./index-znDtBKj-.js";import"./PurePanel-DZcz0OHg.js";import"./SearchOutlined-d-cJSqkw.js";import"./index-CiYw3fNR.js";import"./index-DyxODtZq.js";import"./Dropdown-Ce6gRozi.js";import"./useBreakpoint-OUxgu0-V.js";import"./Pagination-BCW-H6N6.js";import"./index-gNcxpNQ1.js";import"./EyeOutlined-C0Xyk1pP.js";function z(){const{ti:e}=V(),{isVIP:c,expiredTime:r,timeLeft:p}=P();k.useEffect(()=>{y("VIP:onLoad")},[]);const l=[{header:!0,path:"/bulk-downloader",icon:n.jsx("i",{className:"fa-solid fa-download"}),name:e({en:"Bulk downloader",vi:"Tải hàng loạt"})},{name:e({en:"Download all photos/videos/reels on Facebook/Instagram/Threads",vi:"Tải mọi ảnh/video/reel trên Facebook/Instagram/Threads"}),description:e({en:"Suppport all Meta platforms: Facebook (user/page/group) & Instagram & Threads",vi:"Hỗ trợ tất cả nền tảng Meta: Facebook (người dùng/trang/nhóm) & Instagram & Threads"}),badge:i.HOT,noVIP:!1,VIP:!0},{name:e({en:"View LOCKED profile",vi:"Xem trang cá nhân bị KHOÁ"}),description:e({en:"Stalk anyone even if they locked their facebook profile: tagged, groups, pages, life events, ...",vi:"Xem nhiều thông tin hơn ở những trang cá nhân được khoá bảo vệ: những nơi được tag (bình luận, bài viết), nhóm tham gia, trang đã like, sự kiện trong đời, ..."}),badge:i.HOT,noVIP:!0,VIP:!0},{name:e({en:"View TAGGED content of anyone",vi:"Xem lượt TAG của người khác"}),description:e({en:"Know where your friends being tagged on facebook: in posts, in comments, ... (even if they locked their profile)",vi:"Biết bạn bè được tag ở đâu trên facebook: bài viết, bình luận, ... (đã khoá bảo vệ trang cá nhân cũng xem đươc)"}),badge:i.NEW,noVIP:!0,VIP:!0},{name:e({en:"Find all POSTS of anyone",vi:"Tìm mọi BÀI VIẾT của người khác"}),description:e({en:"Know where someone have posted on facebook: groups/pages (even if they locked their profile)",vi:"Biết người khác đã đăng bài ở đâu trên facebook: nhóm/trang (đã khoá bảo vệ trang cá nhân cũng xem đươc)"}),badge:i.NEW,noVIP:!0,VIP:!0},{name:e({en:"Know which groups/pages your friends joined",vi:"Biết bạn bè tham gia nhóm/trang nào"}),description:e({en:"even if they locked their profile, even if not your friends",vi:"Đã khoá bảo vệ trang cá nhân cũng xem đươc, chưa kết bạn cũng xem được"}),noVIP:!0,VIP:!0},{name:e({en:"View stories ANONYMOUS",vi:"Xem story ẨN DANH"}),description:e({en:"Your friends will not know you saw their stories, support both Facebook & Instagram",vi:"Bạn bè sẽ không biết bạn đã xem story của họ, hỗ trợ Facebook & Instagram"}),noVIP:!0,VIP:!0},{name:e({en:"Download any video/reels",vi:"Tải bất kỳ video/reels nào"}),description:e({en:"Just enter the link of the video/reels, support Facebook, include private videos",vi:"Chỉ cần nhập link video/reels, hỗ trợ Facebook, cả video riêng tư"}),noVIP:!0,VIP:!0},{name:e({en:"Download any Facebook POST",vi:"Tải BÀI VIẾT Facebook bất kỳ"}),description:e({en:"Just enter the link of the post, we will download all photos/video in that post for you",vi:"Chỉ cần nhập link bài viết, sẽ tải mọi ảnh/video có trong bài viết đó cho bạn"}),badge:i.NEW,noVIP:!1,VIP:!0},{name:e({en:"Download ALL medias + JSON + LINKs",vi:"Tải mọi ảnh + video + JSON + LINKS"}),description:e({en:"Support direct download all medias, or just .JSON (more informations), or just Links",vi:"Hỗ trợ tải trực tiếp ảnh/video về máy, hoặc chỉ tải .JSON (nhiều thông tin hơn), hoặc chỉ tải danh sách Link"}),noVIP:!1,VIP:!0},{name:e({en:"Bulk download with Select mode",vi:"Tải hàng loạt có Sàng lọc"}),description:e({en:"Select media you want to download, instead of download all",vi:"Cho phép chọn ảnh/video muốn tải, thay vì tải tất cả"}),noVIP:!1,VIP:!0},{header:!0,path:"/stories",icon:n.jsx("i",{className:"fa-solid fa-heart"}),name:e({en:"Story",vi:"Tin (Story)"})},{name:e({en:"View all stories ANONYMOUS",vi:"Xem mọi story ẨN DANH"}),description:e({en:"View all today's stories of your friends, support anonymous",vi:"Xem tất cả stories được đăng bởi bạn bè hôm nay, hỗ trợ xem ẩn danh"}),badge:i.HOT,noVIP:!0,VIP:!0},{name:e({en:"Download any story",vi:"Tải story dễ dàng"}),description:e({en:"Download any story of any friend with ease",vi:"Tải story của bất kỳ ai dễ dàng, không ràng buộc"}),noVIP:!0,VIP:!0},{name:e({en:"Bulk download all stories",vi:"Tải hàng loạt story"}),description:e({en:"Download all/selected stories with one click",vi:"Tải mọi story với 1 click, hỗ trợ chọn để tải"}),noVIP:!1,VIP:!0},{name:e({en:"Custom reactions",vi:"Thêm cảm xúc"}),description:e({en:"Add bunch of reactions for you to react to any story",vi:"Thêm hàng trăm cảm xúc tuỳ chỉnh để bạn thả vào bất kỳ story nào"}),badge:i.HOT,noVIP:!1,VIP:!0},{header:!0,path:"/messages/all",icon:n.jsx("i",{className:"fa-brands fa-facebook-messenger"}),name:e({en:"Messsages",vi:"Tin nhắn"})},{name:e({en:"Manage all messages",vi:"Quản lý mọi tin nhắn"}),description:e({en:"Include search/sort/filter by name/members/messages count/message type (non e2ee)",vi:"Bao gồm tìm kiếm/sắp xếp/sàng lọc theo tên/thành viên/số tin nhắn/loại tin nhắn (không mã hoá đầu cuối)"}),noVIP:!0,VIP:!0},{name:e({en:"View old messages at any date",vi:"Xem tin nhắn cũ tại thời điểm bất kỳ"}),description:e({en:"Just select the date, we will show all messages at that date for you",vi:"Chỉ cần chọn ngày, tool sẽ hiện mọi tin nhắn trong ngày đó cho bạn"}),badge:i.HOT,noVIP:!1,VIP:!0},{name:e({en:"Find first messages",vi:"Xem tin nhắn đầu tiên"}),description:e({en:"Auto scan to find first message of any thread",vi:"Tự động quét tìm tin nhắn đầu tiên của bất kỳ đoạn chat nào"}),noVIP:!1,VIP:!0},{name:e({en:"Download all messages",vi:"Tải toàn bộ cuộc trò chuyện"}),description:e({en:"Download all messages/threads in bulk, into single .html file",vi:"Tải toàn bộ tin nhắn/đoạn chat, ra 1 file .html duy nhất"}),noVIP:!1,VIP:!0},{header:!0,path:"/friends/all",icon:n.jsx("i",{className:"fa-solid fa-users"}),name:e({en:"Friends",vi:"Bạn bè"})},{name:e({en:"Manage all friends",vi:"Quản lý tất cả bạn bè"}),description:e({en:"Include search/sort/filter by name/uid, find locked account, find friend that block your messages",vi:"Bao gồm tìm kiếm/sắp xếp/sàng lọc theo tên/uid, tìm tài khoản bị khoá, tìm bạn bè đang chặn tin nhắn của bạn"}),noVIP:!0,VIP:!0},{name:e({en:"Detect unfriend",vi:"Phát hiện huỷ kết bạn"}),description:e({en:"Auto detect and notify when someone unfriend you, or new friend added",vi:"Tự động phát hiện và thông báo khi có người huỷ kết bạn với bạn, hoặc khi có bạn mới"}),badge:i.HOT,noVIP:!0,VIP:!0},{name:e({en:"Unfriend one click",vi:"Huỷ kết bạn 1 chạm"}),description:e({en:"Unfriend anyone with just 1 click, support undo",vi:"Huỷ kết bạn bất kỳ ai chỉ với 1 click, hỗ trợ hoàn tác"}),noVIP:!0,VIP:!0},{name:e({en:"Bulk unfriend all/selected",vi:"Huỷ kết bạn hàng loạt"}),description:e({en:"Select multiple friends to unfriend, or just unfriend all with just one click",vi:"Chọn nhiều bạn để huỷ kết bạn cùng lúc, hoặc huỷ kết bạn tất cả chỉ với 1 nút"}),noVIP:!1,VIP:!0},{name:e({en:"Ranking friends",vi:"Xếp hạng bạn bè"}),description:e({en:"Ranking to see who are most interacting with you in recent days (recent interactions)",vi:"Xếp hạng xem ai tương tác nhiều nhất với bạn thời gian gần đây (tương tác gần đây)"}),noVIP:!0,VIP:!0},{name:e({en:"Quick filters",vi:"Bộ lọc nhanh"}),description:e({en:"Quick filter out accounts that have special characters, contains number, no avatar, strange UID, blocked messages, ...",vi:"Lọc nhanh tài khoản chứa ký tự đặc biệt, chứa số, không có avatar, UID lạ, người chặn tin nhắn, ..."}),noVIP:!0,VIP:!0},{name:e({en:"Interactions scan",vi:"Quét tương tác"}),description:e({en:"Scan all your posts to count likes and comments of all your friends (total interactions)",vi:"Quét toàn bộ bài viết của bạn để đếm like và comments của tất cả bạn bè (tương tác tổng)"}),badge:i.HOT,noVIP:!1,VIP:!0},{name:e({en:"Deep scan",vi:"Quét chuyên sâu"}),description:e({en:"Scan all friends to find locked accounts, gender, mutual friends, and more",vi:"Quét toàn bộ bạn bè để tìm tài khoản bị khoá, giới tính, bạn chung , ..."}),badge:i.NEW,noVIP:!1,VIP:!0},{header:!0,path:"/friends/requests",icon:n.jsx("i",{className:"fa-solid fa-user-plus"}),name:e({en:"Friend requests",vi:"Lời mời kết bạn"})},{name:e({en:"Manage all friend requests",vi:"Quản lý yêu cầu kết bạn"}),description:e({en:"Include search/sort/filter all friend requests (incoming/outgoing)",vi:"Bao gồm tìm kiếm/sắp xếp/lọc tất cả yêu cầu kết bạn (gửi đến/gửi đi)"}),noVIP:!0,VIP:!0},{name:e({en:"One click action friend-request",vi:"1 click bay màu Lời mời kết bạn"}),description:e({en:"Decline/Accept/Cancel any friend request with just 1 click",vi:"Từ chối/Chấp nhận/Thu hồi bất kỳ yêu cầu kết bạn nào chỉ với 1 click"}),noVIP:!0,VIP:!0},{name:e({en:"One click BULK action ALL friend-requests",vi:"1 click bay màu TOÀN BỘ lời mời kết bạn"}),description:e({en:"Decline/Accept/Cancel all/selected friend-requests with just 1 click",vi:"Từ chối/Chấp nhận/Thu hồi HÀNG LOẠT yêu cầu kết bạn nào chỉ với 1 click"}),noVIP:!1,VIP:!0},{header:!0,path:"/friends/follows",icon:n.jsx("i",{className:"fa-solid fa-person-walking-arrow-right"}),name:e({en:"Following",vi:"Đang theo dõi"})},{name:e({en:"Manage all following",vi:"Quản lý danh sách theo dõi"}),description:e({en:"Include search/sort/filter all your following (friends/pages/groups)",vi:"Bao gồm tìm kiếm/sắp xếp/lọc toàn bộ danh sách người bạn đang theo dõi (người dùng/trang/nhóm)"}),noVIP:!0,VIP:!0},{name:e({en:"Unfollow with one click",vi:"Bỏ theo dõi với 1 click"}),description:e({en:"Unfollow anyone with just 1 click, support undo",vi:"Bỏ theo dõi bất kỳ ai chỉ với 1 click, hỗ trợ hoàn tác"}),noVIP:!0,VIP:!0},{name:e({en:"UnFollow in BULK",vi:"Bỏ theo dõi hàng loạt"}),description:e({en:"Unfollow all/selected accounts with ease",vi:"Bỏ theo dõi tất cả hoặc tài khoản được chọn, hoàn toàn tự động"}),noVIP:!1,VIP:!0},{header:!0,path:"/groups",icon:n.jsx("i",{className:"fa-solid fa-users-line"}),name:e({en:"Groups",vi:"Nhóm"})},{name:e({en:"Manage all groups",vi:"Quản lý nhóm"}),description:e({en:"Include search/sort/filter all joined groups/admin groups/waiting groups",vi:"Bao gồm tìm kiếm/sắp xếp/lọc tất cả nhóm đã tham gia/nhóm bạn làm admin/nhóm đang chờ duyệt"}),noVIP:!0,VIP:!0},{name:e({en:"Leave group 1 click",vi:"Rời nhóm 1 chạm"}),description:e({en:"Leave any group with 1 click, support undo",vi:"Rời nhóm chỉ với 1 click, hỗ trợ hoàn tác"}),noVIP:!0,VIP:!0},{name:e({en:"Bulk Leave groups",vi:"Rời nhóm hàng loạt"}),description:e({en:"Leave all/selected groups with one click",vi:"Rời tất cả nhóm / nhóm được chọn dễ dàng, nhanh chóng"}),noVIP:!1,VIP:!0},{name:e({en:"Find groups no admin",vi:"Tìm nhóm không có admin"}),description:e({en:"Scan to find groups that don’t have any admin",vi:"Quét để tìm nhóm không có admin quản lý"}),noVIP:!1,VIP:!0},{header:!0,path:"/pages",icon:n.jsx("i",{className:"fa-solid fa-flag"}),name:e({en:"Pages",vi:"Trang"})},{name:e({en:"Manage all pages",vi:"Quản lý trang"}),description:e({en:"Include search/sort/filter all joined pages/admin pages/invited pages",vi:"Bao gồm tìm kiếm/sắp xếp/lọc tất cả trang đã tham gia/trang của bạn/trang được mời"}),noVIP:!0,VIP:!0},{name:e({en:"Unfollow/Unlike 1 click",vi:"Bỏ theo dõi/Bỏ thích 1 chạm"}),description:e({en:"Unfollow or Unlike any page with 1 click, support undo",vi:"Bỏ theo dõi hoặc Bỏ thích trang bất kỳ nhanh chóng, hỗ trợ hoàn tác"}),noVIP:!0,VIP:!0},{name:e({en:"Bulk Unfollow/Unlike pages",vi:"Bỏ theo dõi/Bỏ thích hàng loạt"}),description:e({en:"Unfollow or Unlike multiple pages in bulk",vi:"Bỏ theo dõi hoặc Bỏ thích nhiều trang cùng lúc"}),noVIP:!1,VIP:!0},{header:!0,icon:n.jsx("i",{className:"fa-solid fa-star"}),name:e({en:"More",vi:"Tiện ích"})},{name:e({en:"A lot of Autorun features",vi:"Hàng loạt chức năng Tự động chạy"}),description:e({en:"Block 'seen' story feature on facebook/instagram. Count total post' reactions. Delete tracking params from urls, ...",vi:"Chặn 'đã xem' story facebook/instagram. Đếm tổng lượt thích bài viết facebook. Xoá tham số theo dõi trong url, ..."}),badge:i.NEW,noVIP:!0,VIP:!0},{name:e({en:"Facebok Video Downloader",vi:"Tải video Facebook"}),description:e({en:"Download any video/reel with 1 click, highest quality",vi:"Tải bất kỳ video/reel nào với 1 chạm, chất lượng cao nhất"}),badge:i.NEW,noVIP:!0,VIP:!0},{name:e({en:"Shortcuts",vi:"Phím tắt"}),description:e({en:"Access top features of Facebook faster",vi:"Truy cập các tính năng hay của Facebook nhanh hơn"}),noVIP:!0,VIP:!0}].map((o,t)=>({...o,id:t+1})),f=[{title:"#",dataIndex:"id",key:"id",width:50,render:(o,t,d)=>t.header?"":l.filter(a=>!a.header).findIndex(a=>a.id==o)+1},{title:e({en:"Features",vi:"Chức năng"}),dataIndex:"name",key:"name",render:(o,t,d)=>t.header?n.jsx(T.Title,{level:4,style:{marginTop:15,marginBottom:0},children:n.jsxs(b,{to:t.path,children:[t.icon," ",o]})}):n.jsxs(s,{direction:"vertical",size:0,style:{maxWidth:500},children:[n.jsxs(s,{children:[t.name,t.badge&&n.jsx(u,{color:t.badge.bg,count:e(t.badge.text),style:{color:t.badge.color}})]}),n.jsx("span",{className:"vip-desc",children:t.description})]})},...[{name:"Free",value:"noVIP"},{name:n.jsxs(n.Fragment,{children:["VIP ",n.jsx("i",{className:"fa-solid fa-crown",style:{color:"gold"}})]}),value:"VIP",showHeaderPath:!0}].map(({name:o,value:t,showHeaderPath:d})=>({title:o,dataIndex:t,key:t,width:70,align:"center",render:(a,v,N)=>v.header?"":a?n.jsx(m,{color:"success",children:n.jsx("i",{className:"fa-solid fa-check"})}):n.jsx(m,{color:"error",children:n.jsx("i",{className:"fa-solid fa-xmark"})})}))],h=n.jsxs(j,{justify:"end",style:{margin:"5px"},children:[c?n.jsx(g,{showIcon:!0,type:"success",message:n.jsxs(n.Fragment,{children:[e({en:"VIP Unlocked",vi:"Thành viên VIP"})+" ",n.jsxs(w,{title:e({en:"Until ",vi:"Tới "})+new Date(r).toLocaleString(),children:["(",p,")"]})]})}):r?n.jsx(g,{showIcon:!0,type:"info",message:e({en:"Expired at",vi:"Hết hạn lúc"})+" "+new Date(r).toLocaleString()}):null,n.jsx(u,{count:e({en:"New",vi:"Mới"}),style:{color:"white"},color:"purple",children:n.jsx(I,{size:"large",icon:n.jsx("i",{className:"fa-solid fa-crown",style:{color:"gold"}}),onClick:()=>x(!0),style:{marginLeft:10},children:e(c?{en:"Renew VIP",vi:"Gia hạn VIP"}:{en:"Unlock VIP",vi:"Mở khoá VIP"})})})]});return n.jsxs(s,{direction:"vertical",style:{width:"100%"},align:"center",children:[n.jsxs("h1",{children:["VIP ",n.jsx("i",{className:"fa-solid fa-crown",style:{color:"gold"}})]}),h,n.jsx(B,{sticky:{offsetHeader:0},fixedHeader:!0,size:"middle",tableLayout:"auto",dataSource:l,columns:f,pagination:!1,style:{minWidth:500,width:"min(100vw, 700px)"},rowKey:o=>o.id,footer:()=>h})]})}export{z as default};
