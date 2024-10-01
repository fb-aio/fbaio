import{r as f,av as e,aB as v,aw as k}from"./index-BzHjJZ6J.js";import{u as I,a as b,t as P,b as h,T as V,B as y,i as w}from"./MyApp-P_ZAPtxc.js";import{T as x}from"./index-CxjRYcOo.js";import{T as d}from"./index-DTQVhmPo.js";import{R as j}from"./row-CrtjfzA9.js";import{A as u}from"./index-DDkJ4-4M.js";import{F as T}from"./Table-DBu5xyCN.js";import"./addEventListener-CYR6kZcj.js";import"./index-C3yQlH26.js";import"./PurePanel-nLO0RZ46.js";import"./index-CzUkjAGb.js";import"./index-Cd_NWbNz.js";import"./index-CJ9N7clN.js";import"./Dropdown-Dgn2-KTF.js";import"./index-BNHfpCXa.js";import"./useBreakpoint-1TxoALFb.js";import"./Pagination-PNe0cuUg.js";import"./index-DM0pvvLI.js";function z(){const{ti:n}=I(),{isVIP:s,expiredTime:a,timeLeft:m}=b();f.useEffect(()=>{P("VIP:onLoad")},[]);const r=[{header:!0,path:"/bulk-downloader",icon:e.jsx("i",{className:"fa-solid fa-download"}),name:n({en:"Bulk downloader",vi:"Tải hàng loạt"})},{name:n({en:"View all information of ANYONE",vi:"Xem mọi thông tin của BẤT KỲ AI"}),description:n({en:"stories, photos, videos, reels, albums, joined group, liked pages.. on Facebook & Instagram",vi:"story, ảnh, video, reels, albums, nhóm, trang... trên Facebook & Instagram"}),noVIP:!0,VIP:!0},{name:n({en:"View stories ANONYMOUS",vi:"Xem story ẨN DANH"}),description:n({en:"Your friends will not know you saw their stories, support both Facebook & Instagram",vi:"Bạn bè sẽ không biết bạn đã xem story của họ, hỗ trợ Facebook & Instagram"}),noVIP:!0,VIP:!0},{name:n({en:"Download any video/reels",vi:"Tải bất kỳ video/reels nào"}),description:n({en:"Just enter the link of the video/reels, support Facebook, include private videos",vi:"Chỉ cần nhập link video/reels, hỗ trợ Facebook, cả video riêng tư"}),noVIP:!0,VIP:!0},{name:n({en:"Download any Facebook POST",vi:"Tải BÀI VIẾT Facebook bất kỳ"}),description:n({en:"Just enter the link of the post, we will download all photos/video in that post for you",vi:"Chỉ cần nhập link bài viết, sẽ tải mọi ảnh/video có trong bài viết đó cho bạn"}),noVIP:!1,VIP:!0},{name:n({en:"Download ALL medias + JSON + LINKs",vi:"Tải mọi ảnh + video + JSON + LINKS"}),description:n({en:"Support direct download all medias, or just .JSON (more informations), or just Links",vi:"Hỗ trợ tải trực tiếp ảnh/video về máy, hoặc chỉ tải .JSON (nhiều thông tin hơn), hoặc chỉ tải danh sách Link"}),noVIP:!1,VIP:!0},{name:n({en:"Bulk download with Select mode",vi:"Tải hàng loạt có Sàng lọc"}),description:n({en:"Select media you want to download, instead of download all",vi:"Cho phép chọn ảnh/video muốn tải, thay vì tải tất cả"}),noVIP:!1,VIP:!0},{header:!0,path:"/messages/all",icon:e.jsx("i",{className:"fa-brands fa-facebook-messenger"}),name:n({en:"Messsages",vi:"Tin nhắn"})},{name:n({en:"Manage all messages",vi:"Quản lý mọi tin nhắn"}),description:n({en:"Include search/sort/filter by name/members/messages count/message type (non e2ee)",vi:"Bao gồm tìm kiếm/sắp xếp/sàng lọc theo tên/thành viên/số tin nhắn/loại tin nhắn (không mã hoá đầu cuối)"}),noVIP:!0,VIP:!0},{name:n({en:"View old messages at any date",vi:"Xem tin nhắn cũ tại bất kỳ thời điểm nào"}),description:n({en:"Just select the date, we will show all messages at that date for you",vi:"Chỉ cần chọn ngày, tool sẽ hiện mọi tin nhắn trong ngày đó cho bạn"}),noVIP:!1,VIP:!0},{name:n({en:"Find first messages",vi:"Xem tin nhắn đầu tiên"}),description:n({en:"Auto scan to find first message of any thread",vi:"Tự động quét tìm tin nhắn đầu tiên của bất kỳ đoạn chat nào"}),noVIP:!1,VIP:!0},{name:n({en:"Download all messages",vi:"Tải toàn bộ cuộc trò chuyện"}),description:n({en:"Download all messages/threads in bulk, into single .html file",vi:"Tải toàn bộ tin nhắn/đoạn chat, ra 1 file .html duy nhất"}),noVIP:!1,VIP:!0},{header:!0,path:"/friends/all",icon:e.jsx("i",{className:"fa-solid fa-users"}),name:n({en:"Friends",vi:"Bạn bè"})},{name:n({en:"Manage all friends",vi:"Quản lý tất cả bạn bè"}),description:n({en:"Include search/sort/filter by name/uid, find locked account, find friend that block your messages",vi:"Bao gồm tìm kiếm/sắp xếp/sàng lọc theo tên/uid, tìm tài khoản bị khoá, tìm bạn bè đang chặn tin nhắn của bạn"}),noVIP:!0,VIP:!0},{name:n({en:"Detect unfriend",vi:"Phát hiện huỷ kết bạn"}),description:n({en:"Auto detect and notify when someone unfriend you, or new friend added",vi:"Tự động phát hiện và thông báo khi có người huỷ kết bạn với bạn, hoặc khi có bạn mới"}),noVIP:!0,VIP:!0},{name:n({en:"Unfriend one click",vi:"Huỷ kết bạn 1 chạm"}),description:n({en:"Unfriend anyone with just 1 click, support undo",vi:"Huỷ kết bạn bất kỳ ai chỉ với 1 click, hỗ trợ hoàn tác"}),noVIP:!0,VIP:!0},{name:n({en:"Bulk unfriend all/selected",vi:"Huỷ kết bạn hàng loạt"}),description:n({en:"Select multiple friends to unfriend, or just unfriend all with just one click",vi:"Chọn nhiều bạn để huỷ kết bạn cùng lúc, hoặc huỷ kết bạn tất cả chỉ với 1 nút"}),noVIP:!1,VIP:!0},{name:n({en:"Ranking friends",vi:"Xếp hạng bạn bè"}),description:n({en:"Ranking to see who are most interacting with you in recent days (recent interactions)",vi:"Xếp hạng xem ai tương tác nhiều nhất với bạn thời gian gần đây (tương tác gần đây)"}),noVIP:!0,VIP:!0},{name:n({en:"Quick filters",vi:"Bộ lọc nhanh"}),description:n({en:"Quick filter out accounts that have special characters, contains number, no avatar, strange UID, blocked messages, ...",vi:"Lọc nhanh tài khoản chứa ký tự đặc biệt, chứa số, không có avatar, UID lạ, người chặn tin nhắn, ..."}),noVIP:!0,VIP:!0},{name:n({en:"Scan interactions",vi:"Quét tương tác"}),description:n({en:"Scan all your posts to count likes and comments of all your friends (total interactions)",vi:"Quét toàn bộ bài viết của bạn để đếm like và comments của tất cả bạn bè (tương tác tổng)"}),noVIP:!1,VIP:!0},{name:n({en:"Deep scan",vi:"Quét chuyên sâu"}),description:n({en:"Scan all friends to find locked accounts, gender, mutual friends, and more",vi:"Quét toàn bộ bạn bè để tìm tài khoản bị khoá, giới tính, bạn chung , ..."}),noVIP:!1,VIP:!0},{header:!0,path:"/friends/requests",icon:e.jsx("i",{className:"fa-solid fa-user-plus"}),name:n({en:"Friend requests",vi:"Lời mời kết bạn"})},{name:n({en:"Manage all friend requests",vi:"Quản lý yêu cầu kết bạn"}),description:n({en:"Include search/sort/filter all friend requests (incoming/outgoing)",vi:"Bao gồm tìm kiếm/sắp xếp/lọc tất cả yêu cầu kết bạn (gửi đến/gửi đi)"}),noVIP:!0,VIP:!0},{name:n({en:"One click action friend-request",vi:"1 click bay màu Lời mời kết bạn"}),description:n({en:"Decline/Accept/Cancel any friend request with just 1 click",vi:"Từ chối/Chấp nhận/Thu hồi bất kỳ yêu cầu kết bạn nào chỉ với 1 click"}),noVIP:!0,VIP:!0},{name:n({en:"One click BULK action ALL friend-requests",vi:"1 click bay màu TOÀN BỘ lời mời kết bạn"}),description:n({en:"Decline/Accept/Cancel all/selected friend-requests with just 1 click",vi:"Từ chối/Chấp nhận/Thu hồi HÀNG LOẠT yêu cầu kết bạn nào chỉ với 1 click"}),noVIP:!1,VIP:!0},{header:!0,path:"/friends/follows",icon:e.jsx("i",{className:"fa-solid fa-person-walking-arrow-right"}),name:n({en:"Following",vi:"Đang theo dõi"})},{name:n({en:"Manage all following",vi:"Quản lý danh sách theo dõi"}),description:n({en:"Include search/sort/filter all your following (friends/pages/groups)",vi:"Bao gồm tìm kiếm/sắp xếp/lọc toàn bộ danh sách người bạn đang theo dõi (người dùng/trang/nhóm)"}),noVIP:!0,VIP:!0},{name:n({en:"Unfollow with one click",vi:"Bỏ theo dõi với 1 click"}),description:n({en:"Unfollow anyone with just 1 click, support undo",vi:"Bỏ theo dõi bất kỳ ai chỉ với 1 click, hỗ trợ hoàn tác"}),noVIP:!0,VIP:!0},{name:n({en:"UnFollow in BULK",vi:"Bỏ theo dõi hàng loạt"}),description:n({en:"Unfollow all/selected accounts with ease",vi:"Bỏ theo dõi tất cả hoặc tài khoản được chọn, hoàn toàn tự động"}),noVIP:!1,VIP:!0},{header:!0,path:"/stories",icon:e.jsx("i",{className:"fa-solid fa-heart"}),name:n({en:"Story",vi:"Tin (Story)"})},{name:n({en:"View all stories",vi:"Xem mọi story"}),description:n({en:"View all today's stories of your friends, support anonymous",vi:"Xem tất cả stories được đăng bởi bạn bè hôm nay, hỗ trợ xem ẩn danh"}),noVIP:!0,VIP:!0},{name:n({en:"Download any story",vi:"Tải story dễ dàng"}),description:n({en:"Download any story of any friend with ease",vi:"Tải story của bất kỳ ai dễ dàng, không ràng buộc"}),noVIP:!0,VIP:!0},{name:n({en:"Bulk download all stories",vi:"Tải hàng loạt story"}),description:n({en:"Download all/selected stories with one click",vi:"Tải mọi story với 1 click, hỗ trợ chọn để tải"}),noVIP:!1,VIP:!0},{name:n({en:"Custom reactions",vi:"Thêm cảm xúc"}),description:n({en:"Add bunch of reactions for you to react to any story",vi:"Thêm hàng trăm cảm xúc tuỳ chỉnh để bạn thả vào bất kỳ story nào"}),noVIP:!1,VIP:!0},{header:!0,path:"/groups",icon:e.jsx("i",{className:"fa-solid fa-users-line"}),name:n({en:"Groups",vi:"Nhóm"})},{name:n({en:"Manage all groups",vi:"Quản lý nhóm"}),description:n({en:"Include search/sort/filter all joined groups/admin groups/waiting groups",vi:"Bao gồm tìm kiếm/sắp xếp/lọc tất cả nhóm đã tham gia/nhóm bạn làm admin/nhóm đang chờ duyệt"}),noVIP:!0,VIP:!0},{name:n({en:"Leave group 1 click",vi:"Rời nhóm 1 chạm"}),description:n({en:"Leave any group with 1 click, support undo",vi:"Rời nhóm chỉ với 1 click, hỗ trợ hoàn tác"}),noVIP:!0,VIP:!0},{name:n({en:"Bulk Leave groups",vi:"Rời nhóm hàng loạt"}),description:n({en:"Leave all/selected groups with one click",vi:"Rời tất cả nhóm / nhóm được chọn dễ dàng, nhanh chóng"}),noVIP:!1,VIP:!0},{name:n({en:"Find groups no admin",vi:"Tìm nhóm không có admin"}),description:n({en:"Scan to find groups that don’t have any admin",vi:"Quét để tìm nhóm không có admin quản lý"}),noVIP:!1,VIP:!0},{header:!0,path:"/pages",icon:e.jsx("i",{className:"fa-solid fa-flag"}),name:n({en:"Pages",vi:"Trang"})},{name:n({en:"Manage all pages",vi:"Quản lý trang"}),description:n({en:"Include search/sort/filter all joined pages/admin pages/invited pages",vi:"Bao gồm tìm kiếm/sắp xếp/lọc tất cả trang đã tham gia/trang của bạn/trang được mời"}),noVIP:!0,VIP:!0},{name:n({en:"Unfollow/Unlike 1 click",vi:"Bỏ theo dõi/Bỏ thích 1 chạm"}),description:n({en:"Unfollow or Unlike any page with 1 click, support undo",vi:"Bỏ theo dõi hoặc Bỏ thích trang bất kỳ nhanh chóng, hỗ trợ hoàn tác"}),noVIP:!0,VIP:!0},{name:n({en:"Bulk Unfollow/Unlike pages",vi:"Bỏ theo dõi/Bỏ thích hàng loạt"}),description:n({en:"Unfollow or Unlike multiple pages in bulk",vi:"Bỏ theo dõi hoặc Bỏ thích nhiều trang cùng lúc"}),noVIP:!1,VIP:!0},{header:!0,path:"/shortcuts",icon:e.jsx("i",{className:"fa-solid fa-link"}),name:n({en:"Utils",vi:"Tiện ích"})},{name:n({en:"Shortcuts",vi:"Phím tắt"}),description:n({en:"Access top features of Facebook faster",vi:"Truy cập các tính năng hay của Facebook nhanh hơn"}),noVIP:!0,VIP:!0}].map((t,i)=>({...t,id:i+1})),g=[{title:"#",dataIndex:"id",key:"id",width:50,render:(t,i,l)=>i.header?"":r.filter(o=>!o.header).findIndex(o=>o.id==t)+1},{title:n({en:"Features",vi:"Chức năng"}),dataIndex:"name",key:"name",render:(t,i,l)=>i.header?e.jsx(x.Title,{level:4,style:{marginTop:15,marginBottom:0},children:e.jsxs(v,{to:i.path,children:[i.icon," ",t]})}):e.jsxs(h,{direction:"vertical",size:0,style:{maxWidth:500},children:[i.name,e.jsx("span",{className:"vip-desc",children:i.description})]})},...[{name:"Free",value:"noVIP"},{name:e.jsxs(e.Fragment,{children:["VIP ",e.jsx("i",{className:"fa-solid fa-crown",style:{color:"gold"}})]}),value:"VIP",showHeaderPath:!0}].map(({name:t,value:i,showHeaderPath:l})=>({title:t,dataIndex:i,key:i,width:70,align:"center",render:(o,p,B)=>p.header?"":o?e.jsx(d,{color:"success",children:e.jsx("i",{className:"fa-solid fa-check"})}):e.jsx(d,{color:"error",children:e.jsx("i",{className:"fa-solid fa-xmark"})})}))],c=e.jsxs(j,{justify:"end",style:{margin:"5px"},children:[s?e.jsx(u,{showIcon:!0,type:"success",message:e.jsxs(e.Fragment,{children:[n({en:"VIP Unlocked",vi:"Thành viên VIP"})+" ",e.jsxs(V,{title:n({en:"Until ",vi:"Tới "})+new Date(a).toLocaleString(),children:["(",m,")"]})]})}):a?e.jsx(u,{showIcon:!0,type:"info",message:n({en:"Expired at",vi:"Hết hạn lúc"})+" "+new Date(a).toLocaleString()}):null,e.jsx(y,{count:n({en:"New",vi:"Mới"}),style:{color:"white"},children:e.jsx(k,{size:"large",icon:e.jsx("i",{className:"fa-solid fa-crown",style:{color:"gold"}}),onClick:()=>w(!0),style:{marginLeft:10},children:n(s?{en:"Renew VIP",vi:"Gia hạn VIP"}:{en:"Unlock VIP",vi:"Mở khoá VIP"})})})]});return e.jsxs(h,{direction:"vertical",style:{width:"100%"},align:"center",children:[e.jsxs("h1",{children:["VIP ",e.jsx("i",{className:"fa-solid fa-crown",style:{color:"gold"}})]}),c,e.jsx(T,{sticky:{offsetHeader:0},fixedHeader:!0,size:"middle",tableLayout:"auto",dataSource:r,columns:g,pagination:!1,style:{minWidth:500,width:"min(100vw, 700px)"},rowKey:t=>t.id,footer:()=>c})]})}export{z as default};
