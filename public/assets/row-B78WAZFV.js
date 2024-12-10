import{r as i,E,F as P,D as _,J as B,o as q}from"./index-DjNgLHmn.js";import{u as K,r as g}from"./responsiveObserver-CGsauEKo.js";const Q=i.createContext({}),U=n=>{const{componentCls:e}=n;return{[e]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},Y=n=>{const{componentCls:e}=n;return{[e]:{position:"relative",maxWidth:"100%",minHeight:1}}},Z=(n,e)=>{const{prefixCls:a,componentCls:t,gridColumns:o}=n,s={};for(let r=o;r>=0;r--)r===0?(s[`${t}${e}-${r}`]={display:"none"},s[`${t}-push-${r}`]={insetInlineStart:"auto"},s[`${t}-pull-${r}`]={insetInlineEnd:"auto"},s[`${t}${e}-push-${r}`]={insetInlineStart:"auto"},s[`${t}${e}-pull-${r}`]={insetInlineEnd:"auto"},s[`${t}${e}-offset-${r}`]={marginInlineStart:0},s[`${t}${e}-order-${r}`]={order:0}):(s[`${t}${e}-${r}`]=[{"--ant-display":"block",display:"block"},{display:"var(--ant-display)",flex:`0 0 ${r/o*100}%`,maxWidth:`${r/o*100}%`}],s[`${t}${e}-push-${r}`]={insetInlineStart:`${r/o*100}%`},s[`${t}${e}-pull-${r}`]={insetInlineEnd:`${r/o*100}%`},s[`${t}${e}-offset-${r}`]={marginInlineStart:`${r/o*100}%`},s[`${t}${e}-order-${r}`]={order:r});return s[`${t}${e}-flex`]={flex:`var(--${a}${e}-flex)`},s},j=(n,e)=>Z(n,e),z=(n,e,a)=>({[`@media (min-width: ${_(e)})`]:Object.assign({},j(n,a))}),ee=()=>({}),te=()=>({}),ne=E("Grid",U,ee),ae=E("Grid",n=>{const e=P(n,{gridColumns:24}),a={"-sm":e.screenSMMin,"-md":e.screenMDMin,"-lg":e.screenLGMin,"-xl":e.screenXLMin,"-xxl":e.screenXXLMin};return[Y(e),j(e,""),j(e,"-xs"),Object.keys(a).map(t=>z(e,a[t],t)).reduce((t,o)=>Object.assign(Object.assign({},t),o),{})]},te);var re=function(n,e){var a={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(a[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(n);o<t.length;o++)e.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(n,t[o])&&(a[t[o]]=n[t[o]]);return a};function M(n,e){const[a,t]=i.useState(typeof n=="string"?n:""),o=()=>{if(typeof n=="string"&&t(n),typeof n=="object")for(let s=0;s<g.length;s++){const r=g[s];if(!e[r])continue;const f=n[r];if(f!==void 0){t(f);return}}};return i.useEffect(()=>{o()},[JSON.stringify(n),e]),a}const ie=i.forwardRef((n,e)=>{const{prefixCls:a,justify:t,align:o,className:s,style:r,children:f,gutter:p=0,wrap:m}=n,R=re(n,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:k,direction:A}=i.useContext(B),[L,N]=i.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[v,J]=i.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),C=M(o,v),h=M(t,v),V=i.useRef(p),O=K();i.useEffect(()=>{const u=O.subscribe(b=>{J(b);const l=V.current||0;(!Array.isArray(l)&&typeof l=="object"||Array.isArray(l)&&(typeof l[0]=="object"||typeof l[1]=="object"))&&N(b)});return()=>O.unsubscribe(u)},[]);const W=()=>{const u=[void 0,void 0];return(Array.isArray(p)?p:[p,void 0]).forEach((l,I)=>{if(typeof l=="object")for(let S=0;S<g.length;S++){const w=g[S];if(L[w]&&l[w]!==void 0){u[I]=l[w];break}}else u[I]=l}),u},c=k("row",a),[H,T,X]=ne(c),d=W(),D=q(c,{[`${c}-no-wrap`]:m===!1,[`${c}-${h}`]:h,[`${c}-${C}`]:C,[`${c}-rtl`]:A==="rtl"},s,T,X),y={},$=d[0]!=null&&d[0]>0?d[0]/-2:void 0;$&&(y.marginLeft=$,y.marginRight=$);const[G,x]=d;y.rowGap=x;const F=i.useMemo(()=>({gutter:[G,x],wrap:m}),[G,x,m]);return H(i.createElement(Q.Provider,{value:F},i.createElement("div",Object.assign({},R,{className:D,style:Object.assign(Object.assign({},y),r),ref:e}),f)))});export{ie as R,Q as a,ae as u};
