import{r as l,aA as w}from"./index-DjNgLHmn.js";import{u as Q,K as V,S as X}from"./MyApp-DK69-3iP.js";import{b as Y}from"./index-CAy62gIh.js";import{F as Z}from"./Table-CkM3Pabb.js";import{R as I}from"./row-B78WAZFV.js";import{I as ee}from"./index-nfXIQ-n5.js";import"./index-B5jAeavt.js";import"./addEventListener-D1m6mSJD.js";import"./index-BdfMe-pS.js";import"./PurePanel-C1cPjrOv.js";import"./SearchOutlined-DKaqJnTW.js";import"./index-DRxPCiTp.js";import"./index-1UiE3Fo6.js";import"./Dropdown-T16hB0xb.js";import"./useBreakpoint-Dh19YETt.js";import"./responsiveObserver-CGsauEKo.js";import"./Pagination-uHe4sqF_.js";import"./EyeOutlined-CkbEv_yO.js";const we=l.forwardRef((z,B)=>{const{data:a=[],columns:p=[],size:H="middle",selectable:C=!1,searchable:q=!1,loading:M=!1,pageSize:T=0,keyExtractor:r=(s,n)=>n+"",onSearchRow:b,renderTitle:_,style:O}=z,{ti:i,language:U}=Q(),[h,F]=l.useState(""),[L,$]=l.useState(""),[e,o]=l.useState([]),[m,S]=l.useState(!1),A=Y(F,500),P=l.useRef(!1),x=s=>{$(s),A(s),P.current=!0};l.useImperativeHandle(B,()=>({getDataSelected:()=>e,setDataSelected:s=>{o(s)},hasDataSelected:()=>!!(e!=null&&e.length),setShowSelectedOnly:S,setSearch:x,clearFilter:({search:s=!0,dataSelected:n=!0,showSelectedOnly:t=!0}={})=>{s&&x(""),n&&o([]),t&&S(!1)}}));const g=l.useMemo(()=>{const s=new Map(p.map((t,c)=>[t.key,c])),n=h?a.filter(t=>b?b(h,t):Object.entries(t).some(([c,f],D)=>{var v,R;let d=s.get(c)||-1;return d<0||(v=p[d])!=null&&v.disableSearch?!1:(R=p[d])!=null&&R.onSearch?p[d].onSearch(h,f,t):typeof f=="string"&&V(h,f)})).map((t,c)=>({...t,key:r(t,c)})):a;if(m&&(e!=null&&e.length)){const t=new Set(e.map(r));return n.filter((c,f)=>t.has(r(c,f)))}return n},[a,h,m,e,p,r,b]);l.useEffect(()=>{if(!(e!=null&&e.length))return;let s=new Set(a.map(r)),n=e.filter((t,c)=>s.has(r(t,c)));(n==null?void 0:n.length)!==(e==null?void 0:e.length)&&o(n)},[a,e]),l.useEffect(()=>{!(e!=null&&e.length)&&m&&S(!1)},[e.length,m]);const E=l.useRef([]),k=l.useRef([]),K=l.useRef(!1);l.useEffect(()=>{!K.current&&(e!=null&&e.length)&&k.current.push(e),K.current=!1,E.current=e},[e]);const y=l.useRef(g);l.useEffect(()=>{y.current=g},[g]);const j=(s,n)=>{const t=new Set(a.map(r)),c=new Set(g.map(r)),f=new Set(E.current.map(r)),D=new Set(s),d=new Set([...t].filter(u=>!c.has(u))),v=new Set([...s].filter(u=>!f.has(u))),R=new Set([...f].filter(u=>!D.has(u)&&!d.has(u))),J=[...f,...v].filter(u=>!R.has(u)).map(u=>a.find(N=>r(N)===u)).filter(Boolean);o(J)},W=l.useMemo(()=>{if(!C)return;const s=[{key:"undo",text:i({en:"Undo selected",vi:"Hoàn tác lựa chọn"}),onSelect:()=>{K.current=!0;const n=k.current.pop();console.log(n),o(k.current[k.current.length-1]||[])}},{key:"select_all",text:i({en:"Select all",vi:"Chọn tất cả"}),onSelect:()=>o([...a])},{key:"invert_selection",text:i({en:"Invert selection",vi:"Đảo ngược lựa chọn"}),onSelect:()=>o(a.filter(n=>!e.find(t=>r(t)===r(n))))},{key:"unselect_all",text:i({en:"Unselect all",vi:"Bỏ chọn tất cả"}),onSelect:()=>{S(!1);const n=new Set(a.map(r));o(e.filter(t=>!n.has(r(t))))}},{key:"show_selected_only",text:(m?"✅ ":"❌ ")+i({en:"Show selected only",vi:"Chỉ hiển thị đã chọn"})+" ("+e.length+")",onSelect:()=>{x(""),S(!m)}}].filter(Boolean);return h&&s.push({key:"select_all_insearch",text:i({en:"Select all - search results",vi:"Chọn tất cả - kết quả tìm kiếm"}),onSelect:()=>o([...y.current])},{key:"invert_selection_insearch",text:i({en:"Invert selection - search results",vi:"Đảo ngược lựa chọn - kết quả tìm kiếm"}),onSelect:()=>o(y.current.filter(n=>!e.find(t=>r(t)===r(n))))},{key:"unselect_all_insearch",text:i({en:"Unselect all - search results",vi:"Bỏ chọn tất cả - kết quả tìm kiếm"}),onSelect:()=>{S(!1);const n=new Set(y.current.map(r));o(e.filter(t=>!n.has(r(t))))}}),{selectedRowKeys:e.map(r),onChange:j,selections:s}},[e,m,C,U,h,j]),G=()=>w.jsxs(I,{justify:"space-between",style:{margin:"5px"},children:[w.jsx(I,{align:"middle",children:w.jsx(X,{wrap:!0,children:typeof _=="function"&&_(e)})}),q&&w.jsx(ee.Search,{placeholder:i({en:"Search",vi:"Tìm kiếm"}),value:L,onChange:s=>x(s.target.value),style:{maxWidth:300}})]});return w.jsx(Z,{sticky:{offsetHeader:0},fixedHeader:!0,size:H,loading:M,scroll:{x:"max-content"},tableLayout:"auto",dataSource:g,columns:p,showSorterTooltip:!1,rowKey:r,onChange:(s,n,t,c)=>{y.current=c.currentDataSource??[]},rowSelection:W,title:G,pagination:T==-1?!1:{position:["bottomCenter"],showSizeChanger:!0,showTotal:(s,n)=>i({en:`Total ${s} items`,vi:`Tổng ${s} dòng`}),size:"default",defaultPageSize:T||10,style:{alignItems:"center"}},style:O})});export{we as default};
