import{ay as a,aA as i,aB as x}from"./index-DjNgLHmn.js";import{u as E,t as g}from"./MyApp-DK69-3iP.js";import{f as k}from"./file-download-BjnbICN-.js";import{D as h}from"./index-1UiE3Fo6.js";function w({data:r,children:m,options:s}){const{message:c}=a.useApp(),{ti:t}=E(),l=e=>{var n,p;if(!(r!=null&&r.length))return c.error(t({en:"No data to export",vi:"Không có dữ liệu"}));const o=(p=(n=s.find(u=>u.key==e))==null?void 0:n.prepareData)==null?void 0:p.call(n,r);o!=null&&o.data&&(g("onClickExport:"+e+":"+o.fileName),k(o.data,o.fileName))},f=s.map(({key:e,label:o})=>({key:e,label:o}));return i.jsx(h,{menu:{items:f,onClick:e=>l(e.key)},children:m||i.jsx(x,{type:"primary",icon:i.jsx("i",{className:"fa-solid fa-download"}),children:t({en:"Export",vi:"Xuất"})+" "+((r==null?void 0:r.length)||0)})})}export{w as E};
