import{am as u,aq as t,ar as x}from"./index-CZSQoT90.js";import{u as E,t as g}from"./MyApp-T1nr4ubO.js";import{f as k}from"./file-download-9TKOeH4a.js";import{D as d}from"./index-BmG4MA3h.js";function w({data:e,children:p,options:i}){const{message:m}=u.useApp(),{ti:s}=E(),c=r=>{var n,a;if(!(e!=null&&e.length))return m.error(s({en:"No data to export",vi:"Không có dữ liệu"}));const o=(a=(n=i.find(f=>f.key==r))==null?void 0:n.prepareData)==null?void 0:a.call(n,e);o!=null&&o.data&&(g("onClickExport:"+r+":"+o.fileName),k(o.data,o.fileName))},l=i.map(({key:r,label:o})=>({key:r,label:o}));return t.jsx(d,{menu:{items:l,onClick:r=>c(r.key)},children:p||t.jsx(x,{type:"primary",icon:t.jsx("i",{className:"fa-solid fa-download"}),children:s({en:"Export",vi:"Xuất"})+" "+e.length})})}export{w as E};
