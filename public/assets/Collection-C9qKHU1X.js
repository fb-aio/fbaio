import{r as y,aA as t,aB as $}from"./index-DjNgLHmn.js";import{u as qe,a as We}from"./index-CAy62gIh.js";import{f as ze}from"./file-download-BjnbICN-.js";import{u as Ge,c as Je,e as S,t as ye,x as Xe,ao as je,S as H,T as be,ap as Oe,P as Y,j as Qe,aq as Ye,ar as Ze,as as Ue}from"./MyApp-DK69-3iP.js";import{D as Ke}from"./index-1UiE3Fo6.js";import{C as Ne}from"./index-DRxPCiTp.js";import{I as et}from"./index-nfXIQ-n5.js";import{L as tt}from"./index-C3McVWj0.js";import{D as nt}from"./index-kYucxU22.js";function it(o,Z,L){const[w,j]=y.useState(!1);function I({key:b}){b===o&&j(!0)}function V({key:b}){b===o&&(j(!1),L==null||L())}return y.useEffect(()=>(window.addEventListener("keydown",I),window.addEventListener("keyup",V),()=>{window.removeEventListener("keydown",I),window.removeEventListener("keyup",V)}),[]),w}var De=(o=>(o.File="file",o.Link="link",o.JSON="json",o))(De||{}),ot=(o=>(o.Grid="grid",o.Vertical="vertical",o))(ot||{});function vt({collectionName:o,renderItem:Z,fetchNext:L,rowKey:w,downloadItem:j,getItemCursor:I,initialData:V=[],downloadThreads:b=5,downloadOptions:R=[],displayType:ke="grid",headerButtons:U=()=>null,header:K=()=>null,once:Ce=!1,all:$e=!1,stop:Se=!1,showPagination:le=!1,pageSize:Le=20,searchPlaceholder:Ie=()=>({en:"Search",vi:"Tìm kiếm"}),onSearch:q}){const{ti:e}=Ge(),{message:m,notification:W}=Je(),{isIntersecting:Ee,ref:Pe}=qe(),[z,ae]=y.useState(!1),[Be,re]=S(`Collection.${o}.hasMore`,!0),[r,B]=S(`Collection.${o}.data`,V),[de,Me]=S(`Collection.${o}.pageIndex`,1),[M,_e]=S(`Collection.${o}.search`,""),[s,_]=S(`Collection.${o}.selected`,[]),[f,ce]=S(`Collection.${o}.selectMode`,!1),[Ae,Te]=S(`Collection.${o}.downloaded`,{});it("Shift",void 0,()=>{j&&ce(n=>!n)});const Fe=y.useMemo(()=>!M||!q?r:r.filter(n=>q(M,n)),[r,M,q]);y.useEffect(()=>{let n=r.length,i=Math.ceil(n/20);de>i&&Me(i)},[r,de]),y.useEffect(()=>{r.length||fe(!1)},[o]);const G=(!r.length||Ee||$e)&&Be&&!M&&!Se;We(()=>{G&&ee()},1e3),y.useEffect(()=>{G&&ee()},[G]);const fe=(n=!1)=>{n&&ye("Collection:reload");const i=n?[]:Xe("Collection.data."+o)||[];B(i),_([]),ee(i)},N=y.useRef(!1),ee=async(n=r)=>{if(N.current)return;N.current=!0,ae(!0);const i=await L(n);console.log(o,i);let l=!1;if(i!=null&&i.length){const h=je(n,i,w);if(re(!Ce&&h.length>0),h.length){const g=[...n,...h];B(g),l=!0}}else(i==null?void 0:i.length)===0&&re(!1);!l&&!n.length&&m.info(e({en:"No data found",vi:"Không có dữ liệu"})+": "+o),N.current=!1,ae(!1)},He=(n,i)=>{const l=s.indexOf(n),h=l>=0,g=Ae[w(n)],A={position:"absolute",top:0,left:0,right:0,bottom:0,width:"100%",height:"100%",background:h||g?"#000a":"#0002"};return t.jsxs("div",{style:{position:"relative",flexGrow:1,height:"100%"},children:[i<r.length-1?Z(n,i,B):t.jsx(H,{ref:Pe,children:Z(n,i,B)}),f?t.jsx($,{type:"primary",style:A,className:"scale-on-hover",onClick:()=>{_(h?D=>D.filter(J=>J!==n):D=>[...D,n])},children:h?t.jsx("i",{className:"fa-solid fa-5x",children:l+1}):g?t.jsx("i",{className:"fa-solid fa-check fa-5x"}):t.jsx("i",{className:"fa-solid fa-square  fa-5x",style:{color:"#fff7"}})}):g?t.jsx("div",{style:{...A,display:"flex",justifyContent:"center",alignItems:"center",pointerEvents:"none",background:"#0006"},children:t.jsx("i",{className:"fa-solid fa-check fa-5x",style:{color:"white"}})}):null]},"select_container_"+w(n))},ue=async({fromCursor:n,downloadType:i,startIndex:l=0}={})=>{var pe;if(!j)return;const h=await Oe();if(!("showDirectoryPicker"in window)&&i==="file")return Y.fire({icon:"error",title:e({en:"Browser not supported",vi:"Trình duyệt không hỗ trợ"}),text:e({en:"File saver API not supported in this browser. Please use newest version of Edge or Chrome. (window.showDirectoryPicker)",vi:"Trình duyệt này không hỗ trợ API lưu file (window.showDirectoryPicker). Vui lòng sử dụng Edge hoặc Chrome bản mới nhất"})});let g;if(!n&&!f&&(g=await Y.fire({icon:"question",title:e({en:"Download",vi:"Tải xuống"})+"?",text:o,showDenyButton:!0,showCancelButton:!1,confirmButtonColor:"#d33",denyButtonColor:"#1668dc",confirmButtonText:e({en:"Download from cursor",vi:"Tiếp tục tải"}),denyButtonText:e({en:"Download all",vi:"Tải từ đầu"})}),g.isDismissed))return;if(g!=null&&g.isConfirmed){const a=await Y.fire({icon:"info",title:e({en:"Download from cursor",vi:"Tiếp tục tải"}),html:`
                <label for="from-cursor">
                ${e({en:"Last cursor",vi:"Con trỏ cuối"})}: (${e({en:"leave empty to re-download all",vi:"bỏ trống để tải từ đầu"})})
                </label><br/>
                <input
                    id="from-cursor"
                    class="swal2-input"
                    style="margin: 5px"
                    value="${n||localStorage.getItem(o+"_fromCursor")||""}">
                <br/>
                <label for="start-index">
                ${e({en:"Last index",vi:"Vị trí cuối"})}: (${e({en:"for auto generate file name",vi:"để tự động tạo tên file"})})
                </label><br/>
                <input
                    id="start-index"
                    class="swal2-input"
                    style="margin: 5px"
                    value="${l||localStorage.getItem(o+"_startIndex")||0}">
            `,preConfirm:()=>{var u,F;return[(u=document.getElementById("from-cursor"))==null?void 0:u.value,(F=document.getElementById("start-index"))==null?void 0:F.value]},showCancelButton:!0,confirmButtonText:e({en:"Start download",vi:"Bắt đầu tải"})});if(a.isDismissed||a.isDenied)return;n=a.value[0],l=parseInt(((pe=a.value)==null?void 0:pe[1])||0)}if(!i){const a=await Y.fire({icon:"question",title:e({en:"Data type",vi:"Loại dữ liệu"}),html:`
                    <label for="download-type">
                        ${e({en:"Which data type you want to download?",vi:"Bạn muốn tải xuống loại dữ liệu nào?"})}
                    </label><br/>
                    <select
                        id="download-type"
                        class="swal2-select"
                        style="margin: 5px">
                        ${Object.values(De).map(u=>`<option value="${u}">${u}</option>`).join("")}
                    </select>
                `,preConfirm:()=>{var u;return(u=document.getElementById("download-type"))==null?void 0:u.value},showCancelButton:!0,reverseButtons:!0});if(a.isDismissed)return;i=a.value}if(!await Qe())return;ye("downloadCollection:"+i+":"+(f?`selected:${s.length}:`:"all:")+o);let A;if(i==="file"){const a=await window.showDirectoryPicker({mode:"readwrite"});await a.requestPermission({writable:!0}),A=await a.getDirectoryHandle(o,{create:!0})}const D="downloading_collection_"+o,J="stopping_downloading_collection_"+o;m.loading({key:D,content:e({en:"Downloading",vi:"Đang tải"})+"...",duration:0});const k=n?[]:f?[...s]:[...r];let te=0,ne=0,X=0,T=0,v=0,ie=!0,x=!1,he=!1,ge=!0,we=[],ve=[];for(;!x&&ge;){if(!f&&v>=k.length-b){const P=await L(k,ie?n:void 0),d=je(k,P,w);!(d!=null&&d.length)&&ie&&n&&W.open({type:"error",message:e({en:"No data at from your cursor",vi:"Không có dữ liệu tại vị trí bạn nhập"})+n+" ("+o+")",description:e({en:"Will download from start",vi:"Sẽ tải từ đầu"}),duration:0}),ie=!1,console.log(d),d!=null&&d.length?k.push(...d):ge=!1}const a=k.slice(v,v+b);if(!a.length)break;const u=Math.min(b,a.length),F=Array.from({length:u},()=>"");await Promise.all(a.map(async(P,d)=>{try{let c=await j(P,te);c||(c=[]),Array.isArray(c)||(c=[c]);let xe=!1;for(let p=0;p<c.length&&!x;p++){const{url:C,name:Re}=c[p];if(!C)continue;const oe=l+v+d+"_"+p+"_"+Re;if(c[p].name=oe,F[d]="thread "+(d+1)+": item "+(te+d+1)+(c.length>1?` (${p+1}/${c.length})`:""),!x&&!he&&m.loading({key:D,content:t.jsxs("span",{children:[`${e({en:"Downloading",vi:"Đang tải"})}... ${ne}`,X?t.jsxs(t.Fragment,{children:[e({en:"Failed",vi:"Lỗi"}),": $",X," ",t.jsx("br",{})]}):"",t.jsx("br",{}),o,t.jsx("br",{}),t.jsx("i",{children:e({en:"Click to stop",vi:"Bấm để dừng"})}),t.jsx("br",{}),t.jsx(nt,{}),F.map((Q,se)=>t.jsxs("span",{style:{width:"100%",textAlign:"left",display:"block"},children:[Q,t.jsx("br",{})]},se)),t.jsx("br",{})]}),duration:0,onClick:()=>{x=!0,m.loading({key:J,content:e({en:"Stopping...",vi:"Đang dừng..."}),duration:0})}}),ve.push(C),i==="file")try{const se=await(await Ye({url:C,checkAbortFn:()=>x})).blob(),me=await(await A.getFileHandle(oe,{create:!0})).createWritable();await me.write(se),await me.close()}catch(Q){console.log(Q),x||(h?(await Ze({url:C,conflictAction:"overwrite",filename:o+"/"+oe}),xe=!0):(X++,W.open({type:"error",message:e({en:"Download failed",vi:"Lỗi tải"}),description:C})))}ne++}xe&&T++,te++,we.push({data:c,raw:P}),Te(p=>({...p,[w(P)]:!0})),_(p=>p.filter(C=>w(C)!==w(P)))}catch(c){X++,m.error({content:e({en:"Download failed",vi:"Lỗi tải"})+": "+c.message})}})),x||(v+=a.length)}if(he=!0,i==="json"||i==="link"){const a=o+(i==="json"?".json":".txt"),u=i==="json"?JSON.stringify(we,null,4):ve.join(`
`);ze(u,a)}let O="";try{O=(I==null?void 0:I(k[v]||k[v-1]))||""}catch(a){console.error(a)}m.destroy(D),m.destroy(J),T>0&&W.open({type:"info",message:e({en:"In Download/ folder",vi:"Trong folder Download/"})+": "+T,description:e({en:"Files that cannot be normal downloaded, will be force download into default Download folder of your browser",vi:"Những file không thể tải bình thường, sẽ được tải vào trong folder Download/ mặc định của trình duyệt"}),duration:0,btn:t.jsx($,{onClick:Ue,children:e({en:"Show Download/ folder",vi:"Mở folder Download/"})})}),W.open({type:"success",message:e(x?{en:"Download stopped",vi:"Đã dừng tải"}:{en:"Download finished",vi:"Tải xong"}),description:t.jsxs("ul",{children:[t.jsx("li",{children:e({en:"Folder name",vi:"Tên folder"})+": "+o}),t.jsx("li",{children:e({en:"Downloaded",vi:"Đã tải"})+": "+ne}),T>0&&t.jsx("li",{children:e({en:"In Download/ folder",vi:"Trong folder Download/"})+": "+T}),t.jsx("li",{children:e({en:"Last index",vi:"Vị trí cuối"})+": "+(v+l)}),t.jsx("li",{children:e({en:"Last cursor",vi:"Con trỏ cuối"})+": "+O})]}),duration:0,btn:t.jsx(H,{direction:"horizontal",children:x&&!f?t.jsx($,{onClick:()=>ue({downloadType:i,fromCursor:O,startIndex:v+l}),children:e({en:"Continue download",vi:"Tiếp tục tải"})}):null})}),localStorage.setItem(o+"_fromCursor",O+""),localStorage.setItem(o+"_startIndex",v+l+"")},Ve=f&&(s==null?void 0:s.length)>0?s:r,E=f&&s.length?s.length:e({en:"all",vi:"tất cả"});return t.jsxs(H,{direction:"vertical",align:"center",style:{width:"100%"},children:[K==null?void 0:K(r),t.jsxs($.Group,{style:{width:"100%",justifyContent:"center"},children:[t.jsx($,{onClick:()=>fe(!0),icon:t.jsx("i",{className:"fa-solid fa-rotate-right"}),disabled:z,loading:z,children:e(z?{en:"Loading..",vi:"Đang tải.."}:{en:"Refresh",vi:"Làm mới"})}),j&&t.jsx(Ke,{disabled:!r.length,menu:{items:[{key:"selectMode",label:t.jsxs(H,{align:"center",children:[t.jsxs(be,{title:e({en:"Shortcut: press Shift",vi:"Phím tắt: ấn Shift"}),children:[t.jsx(Ne,{checked:f})," ",e({en:"Select mode",vi:"Chọn để tải"})]}),(s==null?void 0:s.length)>0&&t.jsx(be,{title:e({en:"Clear selected",vi:"Xoá lựa chọn"}),children:t.jsx($,{onClick:n=>{n.preventDefault(),n.stopPropagation(),_([])},icon:t.jsx("i",{className:"fa-solid fa-trash"}),children:s==null?void 0:s.length})})]})},{type:"divider"},{key:"file",label:"📁 "+e({en:`Download ${E} files`,vi:`Tải ${E} files`})},{key:"link",label:"🔗 "+e({en:`Export ${E} links`,vi:`Xuất ${E} links`})},{key:"json",label:"📄 "+e({en:`Export ${E} to .json`,vi:`Xuất ${E} ra .json`})},{type:"divider"},...R.map(({key:n,label:i,labelFn:l})=>({key:n,label:(l==null?void 0:l(Ve))||i}))],onClick:n=>{var i;if(R.length&&R.some(l=>l.key===n.key)){const l=(i=R.find(h=>h.key===n.key))==null?void 0:i.onClick;l&&l((s==null?void 0:s.length)>0?s:r,B)}else n.key==="selectMode"?ce(!f):!f||(s==null?void 0:s.length)>0?ue({downloadType:n.key}):m.info(e({en:"Please select media to download",vi:"Vui lòng chọn ảnh/video muốn tải"}))}},children:t.jsx($,{type:"primary",icon:t.jsx("i",{className:"fa-solid fa-download"}),children:f?s.length?e({en:"Download",vi:"Tải xuống"})+` (${s.length})`:e({en:"Select to download...",vi:"Chọn để tải..."}):e({en:"Download all",vi:"Tải xuống tất cả"})})}),U==null?void 0:U(r,z)]}),q&&t.jsx(et.Search,{value:M,onChange:n=>_e(n.target.value+""),placeholder:e(Ie(r)),allowClear:!0,style:{minWidth:300}}),t.jsx(tt,{grid:{gutter:10,column:ke==="vertical"?1:void 0},pagination:le?{showTotal:(n,i)=>e({en:`Showing ${i[0]}-${i[1]} / Total ${n}`,vi:`Hiển thị ${i[0]}-${i[1]} / Tổng ${n}`}),defaultPageSize:Le,showSizeChanger:!0,position:"bottom",align:"center"}:!1,dataSource:Fe,renderItem:He,rowKey:w,loadMore:G&&!le?t.jsx(H,{style:{display:"flex",justifyContent:"center"},children:t.jsx("i",{className:"fas fa-spinner fa-pulse fa-lg"})}):null})]})}export{vt as C,ot as D};
