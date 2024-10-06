import{E as z,F as D,G as M,H as R,r as a,I as $,o as O,O as H,Q as V,W as A}from"./index-Cu5DMrqP.js";import{a9 as F,ae as L,l as G,aa as K,af as Q,k as U,T as X}from"./MyApp-CBJyifzj.js";const b=e=>e?typeof e=="function"?e():e:null,Y=e=>{const{componentCls:n,popoverColor:o,titleMinWidth:t,fontWeightStrong:r,innerPadding:l,boxShadowSecondary:i,colorTextHeading:c,borderRadiusLG:d,zIndexPopup:f,titleMarginBottom:p,colorBgElevated:v,popoverBg:u,titleBorderBottom:g,innerContentPadding:y,titlePadding:m}=e;return[{[n]:Object.assign(Object.assign({},R(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:f,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":v,width:"max-content",maxWidth:"100vw","&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${n}-content`]:{position:"relative"},[`${n}-inner`]:{backgroundColor:u,backgroundClip:"padding-box",borderRadius:d,boxShadow:i,padding:l},[`${n}-title`]:{minWidth:t,marginBottom:p,color:c,fontWeight:r,borderBottom:g,padding:m},[`${n}-inner-content`]:{color:o,padding:y}})},F(e,"var(--antd-arrow-background-color)"),{[`${n}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block",[`${n}-content`]:{display:"inline-block"}}}]},Z=e=>{const{componentCls:n}=e;return{[n]:L.map(o=>{const t=e[`${o}6`];return{[`&${n}-${o}`]:{"--antd-arrow-background-color":t,[`${n}-inner`]:{backgroundColor:t},[`${n}-arrow`]:{background:"transparent"}}}})}},q=e=>{const{lineWidth:n,controlHeight:o,fontHeight:t,padding:r,wireframe:l,zIndexPopupBase:i,borderRadiusLG:c,marginXS:d,lineType:f,colorSplit:p,paddingSM:v}=e,u=o-t,g=u/2,y=u/2-n,m=r;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:i+30},G(e)),K({contentRadius:c,limitVerticalRadius:!0})),{innerPadding:l?0:12,titleMarginBottom:l?0:d,titlePadding:l?`${g}px ${m}px ${y}px`:0,titleBorderBottom:l?`${n}px ${f} ${p}`:"none",innerContentPadding:l?`${v}px ${m}px`:0})},S=z("Popover",e=>{const{colorBgElevated:n,colorText:o}=e,t=D(e,{popoverBg:n,popoverColor:o});return[Y(t),Z(t),M(t,"zoom-big")]},q,{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]});var J=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(o[t[r]]=e[t[r]]);return o};const ee=(e,n,o)=>!n&&!o?null:a.createElement(a.Fragment,null,n&&a.createElement("div",{className:`${e}-title`},b(n)),a.createElement("div",{className:`${e}-inner-content`},b(o))),te=e=>{const{hashId:n,prefixCls:o,className:t,style:r,placement:l="top",title:i,content:c,children:d}=e;return a.createElement("div",{className:O(n,o,`${o}-pure`,`${o}-placement-${l}`,t),style:r},a.createElement("div",{className:`${o}-arrow`}),a.createElement(Q,Object.assign({},e,{className:n,prefixCls:o}),d||ee(o,i,c)))},ne=e=>{const{prefixCls:n,className:o}=e,t=J(e,["prefixCls","className"]),{getPrefixCls:r}=a.useContext($),l=r("popover",n),[i,c,d]=S(l);return i(a.createElement(te,Object.assign({},t,{prefixCls:l,hashId:c,className:O(o,d)})))};var oe=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(o[t[r]]=e[t[r]]);return o};const re=e=>{let{title:n,content:o,prefixCls:t}=e;return a.createElement(a.Fragment,null,n&&a.createElement("div",{className:`${t}-title`},b(n)),a.createElement("div",{className:`${t}-inner-content`},b(o)))},ae=a.forwardRef((e,n)=>{var o,t;const{prefixCls:r,title:l,content:i,overlayClassName:c,placement:d="top",trigger:f="hover",children:p,mouseEnterDelay:v=.1,mouseLeaveDelay:u=.1,onOpenChange:g,overlayStyle:y={}}=e,m=oe(e,["prefixCls","title","content","overlayClassName","placement","trigger","children","mouseEnterDelay","mouseLeaveDelay","onOpenChange","overlayStyle"]),{getPrefixCls:P}=a.useContext($),x=P("popover",r),[E,B,N]=S(x),j=P(),k=O(c,B,N),[I,T]=U(!1,{value:(o=e.open)!==null&&o!==void 0?o:e.visible,defaultValue:(t=e.defaultOpen)!==null&&t!==void 0?t:e.defaultVisible}),w=(s,C)=>{T(s,!0),g==null||g(s,C)},W=s=>{s.keyCode===A.ESC&&w(!1,s)},_=s=>{w(s)};return E(a.createElement(X,Object.assign({placement:d,trigger:f,mouseEnterDelay:v,mouseLeaveDelay:u,overlayStyle:y},m,{prefixCls:x,overlayClassName:k,ref:n,open:I,onOpenChange:_,overlay:l||i?a.createElement(re,{prefixCls:x,title:l,content:i}):null,transitionName:H(j,"zoom-big",m.transitionName),"data-popover-inject":!0}),V(p,{onKeyDown:s=>{var C,h;a.isValidElement(p)&&((h=p==null?void 0:(C=p.props).onKeyDown)===null||h===void 0||h.call(C,s)),W(s)}})))}),le=ae;le._InternalPanelDoNotUseOrYouWillBeFired=ne;export{le as P,ne as a,b as g};
