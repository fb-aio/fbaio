import{E as V,r as a,J as E,o as N,bu as B,bT as W,aK as R,c5 as H,c6 as L,aY as S,Z as X}from"./index-CKHJa6H8.js";import{w as A}from"./MyApp-DmnFYXMb.js";import{a as F,g as h,P as Y}from"./index-gQU3uxHK.js";const q=e=>{const{componentCls:n,iconCls:l,antCls:t,zIndexPopup:o,colorText:p,colorWarning:f,marginXXS:c,marginXS:i,fontSize:u,fontWeightStrong:C,colorTextHeading:d}=e;return{[n]:{zIndex:o,[`&${t}-popover`]:{fontSize:u},[`${n}-message`]:{marginBottom:i,display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${n}-message-icon ${l}`]:{color:f,fontSize:u,lineHeight:1,marginInlineEnd:i},[`${n}-title`]:{fontWeight:C,color:d,"&:only-child":{fontWeight:"normal"}},[`${n}-description`]:{marginTop:c,color:p}},[`${n}-buttons`]:{textAlign:"end",whiteSpace:"nowrap",button:{marginInlineStart:i}}}}},D=e=>{const{zIndexPopupBase:n}=e;return{zIndexPopup:n+60}},$=V("Popconfirm",e=>q(e),D,{resetStyle:!1});var J=function(e,n){var l={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(l[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(l[t[o]]=e[t[o]]);return l};const j=e=>{const{prefixCls:n,okButtonProps:l,cancelButtonProps:t,title:o,description:p,cancelText:f,okText:c,okType:i="primary",icon:u=a.createElement(S,null),showCancel:C=!0,close:d,onConfirm:v,onCancel:y,onPopupClick:P}=e,{getPrefixCls:O}=a.useContext(E),[m]=B("Popconfirm",W.Popconfirm),g=h(o),x=h(p);return a.createElement("div",{className:`${n}-inner-content`,onClick:P},a.createElement("div",{className:`${n}-message`},u&&a.createElement("span",{className:`${n}-message-icon`},u),a.createElement("div",{className:`${n}-message-text`},g&&a.createElement("div",{className:`${n}-title`},g),x&&a.createElement("div",{className:`${n}-description`},x))),a.createElement("div",{className:`${n}-buttons`},C&&a.createElement(R,Object.assign({onClick:y,size:"small"},t),f||(m==null?void 0:m.cancelText)),a.createElement(H,{buttonProps:Object.assign(Object.assign({size:"small"},L(i)),l),actionFn:v,close:d,prefixCls:O("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},c||(m==null?void 0:m.okText))))},K=e=>{const{prefixCls:n,placement:l,className:t,style:o}=e,p=J(e,["prefixCls","placement","className","style"]),{getPrefixCls:f}=a.useContext(E),c=f("popconfirm",n),[i]=$(c);return i(a.createElement(F,{placement:l,className:N(c,t),style:o,content:a.createElement(j,Object.assign({prefixCls:c},p))}))};var M=function(e,n){var l={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(l[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(l[t[o]]=e[t[o]]);return l};const U=a.forwardRef((e,n)=>{var l,t;const{prefixCls:o,placement:p="top",trigger:f="click",okType:c="primary",icon:i=a.createElement(S,null),children:u,overlayClassName:C,onOpenChange:d,onVisibleChange:v}=e,y=M(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),{getPrefixCls:P}=a.useContext(E),[O,m]=A(!1,{value:(l=e.open)!==null&&l!==void 0?l:e.visible,defaultValue:(t=e.defaultOpen)!==null&&t!==void 0?t:e.defaultVisible}),g=(r,s)=>{m(r,!0),v==null||v(r),d==null||d(r,s)},x=r=>{g(!1,r)},w=r=>{var s;return(s=e.onConfirm)===null||s===void 0?void 0:s.call(void 0,r)},I=r=>{var s;g(!1,r),(s=e.onCancel)===null||s===void 0||s.call(void 0,r)},k=(r,s)=>{const{disabled:z=!1}=e;z||g(r,s)},b=P("popconfirm",o),T=N(b,C),[_]=$(b);return _(a.createElement(Y,Object.assign({},X(y,["title"]),{trigger:f,placement:p,onOpenChange:k,open:O,ref:n,overlayClassName:T,content:a.createElement(j,Object.assign({okType:c,icon:i},e,{prefixCls:b,close:x,onConfirm:w,onCancel:I})),"data-popover-inject":!0}),u))}),Z=U;Z._InternalPanelDoNotUseOrYouWillBeFired=K;export{Z as P};