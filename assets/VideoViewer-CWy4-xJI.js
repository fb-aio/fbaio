import{r,av as i,aw as j}from"./index-Cu5DMrqP.js";import{A as E,V as R}from"./VideoWithMuted-BbnuUaI6.js";import{u as M,ai as y,b as S,T as w,aj as z}from"./MyApp-CBJyifzj.js";function L({info:t,style:A,videoStyle:C,buttonTop:c=!1}){var h,m,f,x,g;const{ti:b}=M(),[s,d]=r.useState(null),[l,p]=r.useState({}),[v,F]=r.useState(0),o=(s==null?void 0:s.source)||t.source;(f=(m=(h=t.variants)==null?void 0:h.filter(e=>!e.isAudio))==null?void 0:m.sort((e,a)=>a.width*a.height-e.width*e.height))==null||f[0],(x=t.variants)==null||x.find(e=>e.isAudio);const u=r.useRef(!1);r.useEffect(()=>{var e;(e=t.variants)!=null&&e.length&&!Object.keys(l).length&&!u.current&&(u.current=!0,Promise.all(t.variants.map(a=>y(a.source).then(V=>{p(k=>({...k,[a.id]:V}))}))).finally(()=>{u.current=!1}))},[l,t.variants]),r.useEffect(()=>{t.source&&y(t.source).then(e=>{F(e)})},[t.source]);const n=i.jsxs(S.Compact,{children:[i.jsx(w,{title:z(v,1),children:i.jsx(j,{type:s?"default":"primary",onClick:()=>d(null),children:b({en:"Default",vi:"Mặc định"})})}),(g=t.variants)==null?void 0:g.map((e,a)=>i.jsx(w,{title:(e.isAudio?"":e.width+"x"+e.height+" - ")+z(l[e.id]||e.bandwidth,1),children:i.jsxs(j,{type:(s==null?void 0:s.id)===e.id?"primary":"default",onClick:()=>d(e),icon:e.isAudio?i.jsx("i",{className:"fa-solid fa-music"}):null,children:[e.qualityClass," ",e.qualityLabel||e.mimeType]})},e.id))]});return i.jsxs(S,{direction:"vertical",style:{padding:15,borderRadius:10,backgroundColor:"#222",justifyContent:"center",alignItems:"center",...A},children:[c&&n,s!=null&&s.isAudio?i.jsx(E,{src:o}):i.jsx(R,{src:o,style:{maxWidth:"80vw",maxHeight:"80vh",...C}}),!c&&n]})}export{L as default};
