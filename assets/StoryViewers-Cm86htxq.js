import{r as u,aq as e}from"./index-DZq1ok_b.js";import{a as d,t as g,g as y,c as x,H as h}from"./MyApp-CBIbyOZV.js";import{C as S,D as T}from"./Collection-CKV1O1AC.js";import{c as j}from"./stories-ChoMHsZQ.js";import{T as o}from"./index-CmsfYphw.js";import{A as V}from"./index-m1GRNwKH.js";function F({storyId:a,initialViewers:n=[]}){const{ti:m}=d();u.useEffect(()=>{g("StoryViewers:onLoad")},[]);const c=async(t=[],r)=>{var i;const p=await j({storyId:a,cursor:r||((i=t[t.length-1])==null?void 0:i.cursor)||""}),f=new Set(t.map(s=>s.uid));return p.filter(s=>!f.has(s.uid))},l=(t,r)=>e.jsxs(o.Link,{href:y(t.uid),target:"_blank",style:{color:"#eee",display:"flex",alignItems:"center",padding:10},children:[(r||0)+1,".",e.jsx(V,{src:x(t.uid,50),style:{marginRight:10,marginLeft:10},size:40}),t.name," ",t.reactions,e.jsx(o.Text,{style:{position:"absolute",right:10},children:h(t.seen_time,m({en:"en-US",vi:"vi-VN"}))})]},t.uid);return e.jsx(S,{collectionName:"viewers of "+a,fetchNext:c,rowKey:t=>t.uid,renderItem:l,initialData:n,displayType:T.Vertical})}export{F as S};
