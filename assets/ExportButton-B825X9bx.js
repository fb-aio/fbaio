import{at as u,av as n,aw as x}from"./index-Dtcmp6JY.js";import{u as E,t as g}from"./MyApp-kb2kLbdm.js";import{f as k}from"./file-download-D0pOs_wu.js";import{D as d}from"./index-DNTQT7gA.js";function N({data:t,children:p,options:i}){const{message:m}=u.useApp(),{ti:s}=E(),c=r=>{var e,a;if(!(t!=null&&t.length))return m.error(s({en:"No data to export",vi:"Không có dữ liệu"}));const o=(a=(e=i.find(f=>f.key==r))==null?void 0:e.prepareData)==null?void 0:a.call(e,t);o!=null&&o.data&&(g("onClickExport:"+r+":"+o.fileName),k(o.data,o.fileName))},l=i.map(({key:r,label:o})=>({key:r,label:o}));return n.jsx(d,{menu:{items:l,onClick:r=>c(r.key)},children:p||n.jsx(x,{type:"primary",icon:n.jsx("i",{className:"fa-solid fa-download"}),children:s({en:"Export",vi:"Xuất"})+" "+t.length})})}export{N as E};
