import{r as u,ap as e}from"./index-BOet_9WV.js";import{u as d,t as g,g as y,h as x,f as h}from"./MyApp-CjYFd9zw.js";import{C as S,D as T}from"./Collection-DwiCb6PK.js";import{c as j}from"./stories-BI6Vgn9V.js";import{T as o}from"./index-DnwdLqdc.js";import{A as V}from"./index-B6t6X2Jj.js";function F({storyId:a,initialViewers:n=[]}){const{ti:m}=d();u.useEffect(()=>{g("StoryViewers:onLoad")},[]);const c=async(t=[],r)=>{var i;const p=await j({storyId:a,cursor:r||((i=t[t.length-1])==null?void 0:i.cursor)||""}),f=new Set(t.map(s=>s.uid));return p.filter(s=>!f.has(s.uid))},l=(t,r)=>e.jsxs(o.Link,{href:y(t.uid),target:"_blank",style:{color:"#eee",display:"flex",alignItems:"center",padding:10},children:[(r||0)+1,".",e.jsx(V,{src:x(t.uid,50),style:{marginRight:10,marginLeft:10},size:40}),t.name," ",t.reactions,e.jsx(o.Text,{style:{position:"absolute",right:10},children:h(t.seen_time,m({en:"en-US",vi:"vi-VN"}))})]},t.uid);return e.jsx(S,{collectionName:"viewers of "+a,fetchNext:c,rowKey:t=>t.uid,renderItem:l,initialData:n,displayType:T.Vertical})}export{F as S};