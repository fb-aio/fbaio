import{aG as u,aw as f,ax as j,aI as t}from"./index-CKHJa6H8.js";import{P as s}from"./index-ZwR7_7i9.js";import{u as y,S as v,T,a as b}from"./MyApp-DmnFYXMb.js";import{T as n}from"./index-C6-fmtr1.js";import{A as P}from"./index-Cuge2M-s.js";import"./responsiveObserver-CXhvU71l.js";import"./useBreakpoint-CY4yI6XJ.js";import"./index-gQU3uxHK.js";const{Title:w,Text:I}=n;function A({showName:i=!0,showAvatar:l=!0,avatarSize:c=50,titleColor:m="white",textColor:h="#eee",style:x={}}){var r,o;const{ti:d}=u(),e=f(j.profile),{isVIP:p,timeLeft:g}=y();return t.jsxs("div",{style:{...a.container,...x},children:[i&&t.jsxs(v,{children:[p?t.jsx(T,{title:d({en:"VIP User",vi:"Thành viên VIP"})+` (${g})`,children:t.jsx(b,{onClick:()=>window.location.hash="/vip",icon:t.jsx("i",{className:"fa-solid fa-crown"}),color:"gold",style:{cursor:"pointer"},children:t.jsxs(n.Text,{style:{fontWeight:"bold"},children:[" ","VIP"]})})}):null,t.jsxs("div",{style:a.info,children:[t.jsx("a",{href:"https:/fb.com/me",target:"_blank",children:t.jsx(w,{level:4,style:a.name(m),children:(e==null?void 0:e.name)||"..."})}),t.jsx(I,{style:a.id(h),children:(e==null?void 0:e.uid)||"..."})]})]}),l&&t.jsx("a",{href:(r=e==null?void 0:e.avatar)==null?void 0:r.link,target:"_blank",children:t.jsx(P,{src:(o=e==null?void 0:e.avatar)==null?void 0:o.uri,size:c})})]})}A.propTypes={showName:s.bool,showAvatar:s.bool,avatarSize:s.number,titleColor:s.string,textColor:s.string,style:s.object};const a={container:{display:"flex",alignItems:"center"},info:{display:"flex",flexDirection:"column",marginRight:"16px"},name:i=>({margin:0,textAlign:"right",color:i}),id:i=>({color:i,fontSize:"0.9em",textAlign:"right"})};export{A as default};