import{r as m,av as e,aw as $}from"./index-Cu5DMrqP.js";import{u as Re,a as We}from"./index-CGIy8z5y.js";import{f as qe}from"./file-download-CQflNR56.js";import{u as ze,c as Ge,d as S,t as ye,w as Je,ak as je,b as F,T as De,al as Oe,S as O,i as Xe,am as Qe,an as Ye,ao as Ze}from"./MyApp-CBJyifzj.js";import{D as Ue}from"./index-BfGp5EFc.js";import{C as Ke}from"./index-BEDMcvkp.js";import{I as Ne}from"./index-mZ6bkR5V.js";import{L as et}from"./index-Bsb2O4uF.js";import{D as tt}from"./index-Mn7J1M2X.js";function nt(o,X,I){const[h,y]=m.useState(!1);function L({key:j}){j===o&&y(!0)}function H({key:j}){j===o&&(y(!1),I==null||I())}return m.useEffect(()=>(window.addEventListener("keydown",L),window.addEventListener("keyup",H),()=>{window.removeEventListener("keydown",L),window.removeEventListener("keyup",H)}),[]),h}var be=(o=>(o.File="file",o.Link="link",o.JSON="json",o))(be||{}),it=(o=>(o.Grid="grid",o.Vertical="vertical",o))(it||{});function wt({collectionName:o,renderItem:X,fetchNext:I,rowKey:h,downloadItem:y,getItemCursor:L,initialData:H=[],downloadThreads:j=5,downloadOptions:V=[],displayType:ke="grid",headerButtons:Q=()=>null,header:Y=()=>null,once:Ce=!1,all:$e=!1,stop:Se=!1,showPagination:le=!1,pageSize:Ie=20,searchPlaceholder:Le=()=>({en:"Search",vi:"Tìm kiếm"}),onSearch:R}){const{ti:t}=ze(),{message:D,notification:W}=Ge(),{isIntersecting:Pe,ref:Ee}=Re(),[se,ae]=m.useState(!1),[Be,re]=S(`Collection.${o}.hasMore`,!0),[r,E]=S(`Collection.${o}.data`,H),[de,Me]=S(`Collection.${o}.pageIndex`,1),[B,_e]=S(`Collection.${o}.search`,""),[l,M]=S(`Collection.${o}.selected`,[]),[f,ce]=S(`Collection.${o}.selectMode`,!1),[Ae,Te]=S(`Collection.${o}.downloaded`,{});nt("Shift",void 0,()=>{y&&ce(n=>!n)});const Fe=m.useMemo(()=>!B||!R?r:r.filter(n=>R(B,n)),[r,B,R]);m.useEffect(()=>{let n=r.length,i=Math.ceil(n/20);de>i&&Me(i)},[r,de]),m.useEffect(()=>{r.length||fe(!1)},[o]);const q=(!r.length||Pe||$e)&&Be&&!B&&!Se;We(()=>{q&&U()},1e3),m.useEffect(()=>{q&&U()},[q]);const fe=(n=!1)=>{n&&ye("Collection:reload");const i=n?[]:Je("Collection.data."+o)||[];E(i),M([]),U(i)},Z=m.useRef(!1),U=async(n=r)=>{if(Z.current)return;Z.current=!0,ae(!0);const i=await I(n);if(console.log(o,i),i!=null&&i.length){const s=je(n,i,h);if(re(!Ce&&s.length>0),s.length){const v=[...n,...s];E(v)}}else(i==null?void 0:i.length)===0&&re(!1);Z.current=!1,ae(!1)},He=(n,i)=>{const s=l.indexOf(n),v=s>=0,p=Ae[h(n)],_={position:"absolute",top:0,left:0,right:0,bottom:0,width:"100%",height:"100%",background:v||p?"#000a":"#0002"};return e.jsxs("div",{style:{position:"relative",flexGrow:1,height:"100%"},children:[i<r.length-1?X(n,i,E):e.jsx(F,{ref:Ee,children:X(n,i,E)}),f?e.jsx($,{type:"primary",style:_,className:"scale-on-hover",onClick:()=>{M(v?b=>b.filter(z=>z!==n):b=>[...b,n])},children:v?e.jsx("i",{className:"fa-solid fa-5x",children:s+1}):p?e.jsx("i",{className:"fa-solid fa-check fa-5x"}):e.jsx("i",{className:"fa-solid fa-square  fa-5x",style:{color:"#fff7"}})}):p?e.jsx("div",{style:{..._,display:"flex",justifyContent:"center",alignItems:"center",pointerEvents:"none",background:"#0006"},children:e.jsx("i",{className:"fa-solid fa-check fa-5x",style:{color:"white"}})}):null]},"select_container_"+h(n))},ue=async({fromCursor:n,downloadType:i,startIndex:s=0}={})=>{var pe;if(!y)return;const v=await Oe();if(!("showDirectoryPicker"in window)&&i==="file")return O.fire({icon:"error",title:t({en:"Browser not supported",vi:"Trình duyệt không hỗ trợ"}),text:t({en:"File saver API not supported in this browser. Please use newest version of Edge or Chrome. (window.showDirectoryPicker)",vi:"Trình duyệt này không hỗ trợ API lưu file (window.showDirectoryPicker). Vui lòng sử dụng Edge hoặc Chrome bản mới nhất"})});let p;if(!n&&!f&&(p=await O.fire({icon:"question",title:t({en:"Download",vi:"Tải xuống"})+"?",text:o,showDenyButton:!0,showCancelButton:!1,confirmButtonColor:"#d33",denyButtonColor:"#1668dc",confirmButtonText:t({en:"Download from cursor",vi:"Tiếp tục tải"}),denyButtonText:t({en:"Download all",vi:"Tải từ đầu"})}),p.isDismissed))return;if(p!=null&&p.isConfirmed){const a=await O.fire({icon:"info",title:t({en:"Download from cursor",vi:"Tiếp tục tải"}),html:`
                <label for="from-cursor">
                ${t({en:"Last cursor",vi:"Con trỏ cuối"})}: (${t({en:"leave empty to re-download all",vi:"bỏ trống để tải từ đầu"})})
                </label><br/>
                <input
                    id="from-cursor"
                    class="swal2-input"
                    style="margin: 5px"
                    value="${n||localStorage.getItem(o+"_fromCursor")||""}">
                <br/>
                <label for="start-index">
                ${t({en:"Last index",vi:"Vị trí cuối"})}: (${t({en:"for auto generate file name",vi:"để tự động tạo tên file"})})
                </label><br/>
                <input
                    id="start-index"
                    class="swal2-input"
                    style="margin: 5px"
                    value="${s||localStorage.getItem(o+"_startIndex")||0}">
            `,preConfirm:()=>{var c,T;return[(c=document.getElementById("from-cursor"))==null?void 0:c.value,(T=document.getElementById("start-index"))==null?void 0:T.value]},showCancelButton:!0,confirmButtonText:t({en:"Start download",vi:"Bắt đầu tải"})});if(a.isDismissed||a.isDenied)return;n=a.value[0],s=parseInt(((pe=a.value)==null?void 0:pe[1])||0)}if(!i){const a=await O.fire({icon:"question",title:t({en:"Data type",vi:"Loại dữ liệu"}),html:`
                    <label for="download-type">
                        ${t({en:"Which data type you want to download?",vi:"Bạn muốn tải xuống loại dữ liệu nào?"})}
                    </label><br/>
                    <select
                        id="download-type"
                        class="swal2-select"
                        style="margin: 5px">
                        ${Object.values(be).map(c=>`<option value="${c}">${c}</option>`).join("")}
                    </select>
                `,preConfirm:()=>{var c;return(c=document.getElementById("download-type"))==null?void 0:c.value},showCancelButton:!0,reverseButtons:!0});if(a.isDismissed)return;i=a.value}if(!await Xe())return;ye("downloadCollection:"+i+":"+(f?`selected:${l.length}:`:"all:")+o);let _;if(i==="file"){const a=await window.showDirectoryPicker({mode:"readwrite"});await a.requestPermission({writable:!0}),_=await a.getDirectoryHandle(o,{create:!0})}const b="downloading_collection_"+o,z="stopping_downloading_collection_"+o;D.loading({key:b,content:t({en:"Downloading",vi:"Đang tải"})+"...",duration:0});const k=n?[]:f?[...l]:[...r];let N=0,ee=0,G=0,A=0,g=0,te=!0,x=!1,he=!1,ge=!0,we=[],ve=[];for(;!x&&ge;){if(!f&&g>=k.length-j){const P=await I(k,te?n:void 0),d=je(k,P,h);!(d!=null&&d.length)&&te&&n&&W.open({type:"error",message:t({en:"No data at from your cursor",vi:"Không có dữ liệu tại vị trí bạn nhập"})+n+" ("+o+")",description:t({en:"Will download from start",vi:"Sẽ tải từ đầu"}),duration:0}),te=!1,console.log(d),d!=null&&d.length?k.push(...d):ge=!1}const a=k.slice(g,g+j);if(!a.length)break;const c=Math.min(j,a.length),T=Array.from({length:c},()=>"");await Promise.all(a.map(async(P,d)=>{try{let u=await y(P,N);Array.isArray(u)||(u=[u]);let xe=!1;for(let w=0;w<u.length&&!x;w++){const{url:C,name:Ve}=u[w];if(!C)continue;const ne=s+g+d+"_"+w+"_"+Ve;if(u[w].name=ne,T[d]="thread "+(d+1)+": item "+(N+d+1)+(u.length>1?` (${w+1}/${u.length})`:""),!x&&!he&&D.loading({key:b,content:e.jsxs("span",{children:[`${t({en:"Downloading",vi:"Đang tải"})}... ${ee}`,G?e.jsxs(e.Fragment,{children:[t({en:"Failed",vi:"Lỗi"}),": $",G," ",e.jsx("br",{})]}):"",e.jsx("br",{}),o,e.jsx("br",{}),e.jsx("i",{children:t({en:"Click to stop",vi:"Bấm để dừng"})}),e.jsx("br",{}),e.jsx(tt,{}),T.map((ie,oe)=>e.jsxs("span",{style:{width:"100%",textAlign:"left",display:"block"},children:[ie,e.jsx("br",{})]},oe)),e.jsx("br",{})]}),duration:0,onClick:()=>{x=!0,D.loading({key:z,content:t({en:"Stopping...",vi:"Đang dừng..."}),duration:0})}}),ve.push(C),i==="file")try{const oe=await(await Qe({url:C,checkAbortFn:()=>x})).blob(),me=await(await _.getFileHandle(ne,{create:!0})).createWritable();await me.write(oe),await me.close()}catch{x||(v?(await Ye({url:C,conflictAction:"overwrite",filename:o+"/"+ne}),xe=!0):(G++,W.open({type:"error",message:t({en:"Download failed",vi:"Lỗi tải"}),description:C})))}ee++}xe&&A++,N++,we.push({data:u,raw:P}),Te(w=>({...w,[h(P)]:!0})),M(w=>w.filter(C=>h(C)!==h(P)))}catch(u){G++,D.error({content:t({en:"Download failed",vi:"Lỗi tải"})+": "+u.message})}})),x||(g+=a.length)}if(he=!0,i==="json"||i==="link"){const a=o+(i==="json"?".json":".txt"),c=i==="json"?JSON.stringify(we,null,4):ve.join(`
`);qe(c,a)}let J="";try{J=(L==null?void 0:L(k[g]||k[g-1]))||""}catch(a){console.error(a)}D.destroy(b),D.destroy(z),A>0&&W.open({type:"info",message:t({en:"In Download/ folder",vi:"Trong folder Download/"})+": "+A,description:t({en:"Files that cannot be normal downloaded, will be force download into default Download folder of your browser",vi:"Những file không thể tải bình thường, sẽ được tải vào trong folder Download/ mặc định của trình duyệt"}),duration:0,btn:e.jsx($,{onClick:Ze,children:t({en:"Show Download/ folder",vi:"Mở folder Download/"})})}),W.open({type:"success",message:t(x?{en:"Download stopped",vi:"Đã dừng tải"}:{en:"Download finished",vi:"Tải xong"}),description:e.jsxs("ul",{children:[e.jsx("li",{children:t({en:"Folder name",vi:"Tên folder"})+": "+o}),e.jsx("li",{children:t({en:"Downloaded",vi:"Đã tải"})+": "+ee}),A>0&&e.jsx("li",{children:t({en:"In Download/ folder",vi:"Trong folder Download/"})+": "+A}),e.jsx("li",{children:t({en:"Last index",vi:"Vị trí cuối"})+": "+(g+s)}),e.jsx("li",{children:t({en:"Last cursor",vi:"Con trỏ cuối"})+": "+J})]}),duration:0,btn:e.jsx(F,{direction:"horizontal",children:x&&!f?e.jsx($,{onClick:()=>ue({downloadType:i,fromCursor:J,startIndex:g+s}),children:t({en:"Continue download",vi:"Tiếp tục tải"})}):null})}),localStorage.setItem(o+"_fromCursor",J+""),localStorage.setItem(o+"_startIndex",g+s+"")},K=f&&(l==null?void 0:l.length)>0?l:r;return e.jsxs(F,{direction:"vertical",align:"center",style:{width:"100%"},children:[Y==null?void 0:Y(r),e.jsxs($.Group,{style:{width:"100%",justifyContent:"center"},children:[e.jsx($,{onClick:()=>fe(!0),icon:e.jsx("i",{className:"fa-solid fa-rotate-right"}),disabled:se,loading:se,children:t({en:"Refresh",vi:"Làm mới"})}),y&&e.jsx(Ue,{disabled:!r.length,menu:{items:[{key:"selectMode",label:e.jsxs(F,{align:"center",children:[e.jsxs(De,{title:t({en:"Shortcut: press Shift",vi:"Phím tắt: ấn Shift"}),children:[e.jsx(Ke,{checked:f})," ",t({en:"Select mode",vi:"Chọn để tải"})]}),(l==null?void 0:l.length)>0&&e.jsx(De,{title:t({en:"Clear selected",vi:"Xoá lựa chọn"}),children:e.jsx($,{onClick:n=>{n.preventDefault(),n.stopPropagation(),M([])},icon:e.jsx("i",{className:"fa-solid fa-trash"}),children:l==null?void 0:l.length})})]})},{type:"divider"},{key:"file",label:"📁 "+t({en:`Download ${K.length} files`,vi:`Tải ${K.length} files`})},{key:"link",label:"🔗 "+t({en:"Download links",vi:"Tải links"})},{key:"json",label:"📄 "+t({en:"Download .json",vi:"Tải .json"})},{type:"divider"},...V.map(({key:n,label:i,labelFn:s})=>({key:n,label:(s==null?void 0:s(K))||i}))],onClick:n=>{var i;if(V.length&&V.some(s=>s.key===n.key)){const s=(i=V.find(v=>v.key===n.key))==null?void 0:i.onClick;s&&s((l==null?void 0:l.length)>0?l:r,E)}else n.key==="selectMode"?ce(!f):!f||(l==null?void 0:l.length)>0?ue({downloadType:n.key}):D.info(t({en:"Please select media to download",vi:"Vui lòng chọn ảnh/video muốn tải"}))}},children:e.jsx($,{type:"primary",icon:e.jsx("i",{className:"fa-solid fa-download"}),children:f?l.length?t({en:"Download",vi:"Tải xuống"})+` (${l.length})`:t({en:"Select to download...",vi:"Chọn để tải..."}):t({en:"Download all",vi:"Tải xuống tất cả"})})}),Q==null?void 0:Q(r)]}),R&&e.jsx(Ne.Search,{value:B,onChange:n=>_e(n.target.value+""),placeholder:t(Le(r)),allowClear:!0,style:{minWidth:300}}),e.jsx(et,{grid:{gutter:10,column:ke==="vertical"?1:void 0},pagination:le?{showTotal:(n,i)=>t({en:`Showing ${i[0]}-${i[1]} / Total ${n}`,vi:`Hiển thị ${i[0]}-${i[1]} / Tổng ${n}`}),defaultPageSize:Ie,showSizeChanger:!0,position:"bottom",align:"center"}:!1,dataSource:Fe,renderItem:He,rowKey:h,loadMore:q&&!le?e.jsx(F,{style:{display:"flex",justifyContent:"center"},children:e.jsx("i",{className:"fas fa-spinner fa-pulse fa-lg"})}):null})]})}export{wt as C,it as D};
