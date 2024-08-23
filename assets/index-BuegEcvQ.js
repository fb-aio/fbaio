import{E as Z,F as J,H as R,a1 as Q,D as F,$ as U,r as n,I as H,aG as ee,aF as re,a6 as q,n as T,a_ as ae,aY as oe,Z as te,z as M}from"./index-CRvEVTea.js";import{C as le}from"./index-DhqHC3Qt.js";const ne=e=>{const{checkboxCls:r}=e,a=`${r}-wrapper`;return[{[`${r}-group`]:Object.assign(Object.assign({},R(e)),{display:"inline-flex",flexWrap:"wrap",columnGap:e.marginXS,[`> ${e.antCls}-row`]:{flex:1}}),[a]:Object.assign(Object.assign({},R(e)),{display:"inline-flex",alignItems:"baseline",cursor:"pointer","&:after":{display:"inline-block",width:0,overflow:"hidden",content:"'\\a0'"},[`& + ${a}`]:{marginInlineStart:0},[`&${a}-in-form-item`]:{'input[type="checkbox"]':{width:14,height:14}}}),[r]:Object.assign(Object.assign({},R(e)),{position:"relative",whiteSpace:"nowrap",lineHeight:1,cursor:"pointer",borderRadius:e.borderRadiusSM,alignSelf:"center",[`${r}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0,margin:0,[`&:focus-visible + ${r}-inner`]:Object.assign({},Q(e))},[`${r}-inner`]:{boxSizing:"border-box",display:"block",width:e.checkboxSize,height:e.checkboxSize,direction:"ltr",backgroundColor:e.colorBgContainer,border:`${F(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,borderCollapse:"separate",transition:`all ${e.motionDurationSlow}`,"&:after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"25%",display:"table",width:e.calc(e.checkboxSize).div(14).mul(5).equal(),height:e.calc(e.checkboxSize).div(14).mul(8).equal(),border:`${F(e.lineWidthBold)} solid ${e.colorWhite}`,borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:`all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`}},"& + span":{paddingInlineStart:e.paddingXS,paddingInlineEnd:e.paddingXS}})},{[`
        ${a}:not(${a}-disabled),
        ${r}:not(${r}-disabled)
      `]:{[`&:hover ${r}-inner`]:{borderColor:e.colorPrimary}},[`${a}:not(${a}-disabled)`]:{[`&:hover ${r}-checked:not(${r}-disabled) ${r}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"},[`&:hover ${r}-checked:not(${r}-disabled):after`]:{borderColor:e.colorPrimaryHover}}},{[`${r}-checked`]:{[`${r}-inner`]:{backgroundColor:e.colorPrimary,borderColor:e.colorPrimary,"&:after":{opacity:1,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:`all ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`}}},[`
        ${a}-checked:not(${a}-disabled),
        ${r}-checked:not(${r}-disabled)
      `]:{[`&:hover ${r}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"}}},{[r]:{"&-indeterminate":{[`${r}-inner`]:{backgroundColor:e.colorBgContainer,borderColor:e.colorBorder,"&:after":{top:"50%",insetInlineStart:"50%",width:e.calc(e.fontSizeLG).div(2).equal(),height:e.calc(e.fontSizeLG).div(2).equal(),backgroundColor:e.colorPrimary,border:0,transform:"translate(-50%, -50%) scale(1)",opacity:1,content:'""'}}}}},{[`${a}-disabled`]:{cursor:"not-allowed"},[`${r}-disabled`]:{[`&, ${r}-input`]:{cursor:"not-allowed",pointerEvents:"none"},[`${r}-inner`]:{background:e.colorBgContainerDisabled,borderColor:e.colorBorder,"&:after":{borderColor:e.colorTextDisabled}},"&:after":{display:"none"},"& + span":{color:e.colorTextDisabled},[`&${r}-indeterminate ${r}-inner::after`]:{background:e.colorTextDisabled}}}]};function se(e,r){const a=J(r,{checkboxCls:`.${e}`,checkboxSize:r.controlInteractiveSize});return[ne(a)]}const L=Z("Checkbox",(e,r)=>{let{prefixCls:a}=r;return[se(a,e)]}),W=U.createContext(null);var ie=function(e,r){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&r.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(e);s<o.length;s++)r.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(a[o[s]]=e[o[s]]);return a};const ce=(e,r)=>{var a;const{prefixCls:o,className:s,rootClassName:O,children:g,indeterminate:x=!1,style:w,onMouseEnter:C,onMouseLeave:d,skipGroup:$=!1,disabled:P}=e,i=ie(e,["prefixCls","className","rootClassName","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),{getPrefixCls:y,direction:I,checkbox:u}=n.useContext(H),t=n.useContext(W),{isFormItemInput:E}=n.useContext(ee),j=n.useContext(re),h=(a=(t==null?void 0:t.disabled)||P)!==null&&a!==void 0?a:j,b=n.useRef(i.value);n.useEffect(()=>{t==null||t.registerValue(i.value)},[]),n.useEffect(()=>{if(!$)return i.value!==b.current&&(t==null||t.cancelValue(b.current),t==null||t.registerValue(i.value),b.current=i.value),()=>t==null?void 0:t.cancelValue(i.value)},[i.value]);const c=y("checkbox",o),v=q(c),[V,S,N]=L(c,v),p=Object.assign({},i);t&&!$&&(p.onChange=function(){i.onChange&&i.onChange.apply(i,arguments),t.toggleOption&&t.toggleOption({label:g,value:i.value})},p.name=t.name,p.checked=t.value.includes(i.value));const z=T(`${c}-wrapper`,{[`${c}-rtl`]:I==="rtl",[`${c}-wrapper-checked`]:p.checked,[`${c}-wrapper-disabled`]:h,[`${c}-wrapper-in-form-item`]:E},u==null?void 0:u.className,s,O,N,v,S),D=T({[`${c}-indeterminate`]:x},ae,S),_=x?"mixed":void 0;return V(n.createElement(oe,{component:"Checkbox",disabled:h},n.createElement("label",{className:z,style:Object.assign(Object.assign({},u==null?void 0:u.style),w),onMouseEnter:C,onMouseLeave:d},n.createElement(le,Object.assign({"aria-checked":_},p,{prefixCls:c,className:D,disabled:h,ref:r})),g!==void 0&&n.createElement("span",null,g))))},A=n.forwardRef(ce);var de=function(e,r){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&r.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(e);s<o.length;s++)r.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(a[o[s]]=e[o[s]]);return a};const ue=n.forwardRef((e,r)=>{const{defaultValue:a,children:o,options:s=[],prefixCls:O,className:g,rootClassName:x,style:w,onChange:C}=e,d=de(e,["defaultValue","children","options","prefixCls","className","rootClassName","style","onChange"]),{getPrefixCls:$,direction:P}=n.useContext(H),[i,y]=n.useState(d.value||a||[]),[I,u]=n.useState([]);n.useEffect(()=>{"value"in d&&y(d.value||[])},[d.value]);const t=n.useMemo(()=>s.map(l=>typeof l=="string"||typeof l=="number"?{label:l,value:l}:l),[s]),E=l=>{u(f=>f.filter(m=>m!==l))},j=l=>{u(f=>[].concat(M(f),[l]))},h=l=>{const f=i.indexOf(l.value),m=M(i);f===-1?m.push(l.value):m.splice(f,1),"value"in d||y(m),C==null||C(m.filter(B=>I.includes(B)).sort((B,k)=>{const K=t.findIndex(G=>G.value===B),Y=t.findIndex(G=>G.value===k);return K-Y}))},b=$("checkbox",O),c=`${b}-group`,v=q(b),[V,S,N]=L(b,v),p=te(d,["value","disabled"]),z=s.length?t.map(l=>n.createElement(A,{prefixCls:b,key:l.value.toString(),disabled:"disabled"in l?l.disabled:d.disabled,value:l.value,checked:i.includes(l.value),onChange:l.onChange,className:`${c}-item`,style:l.style,title:l.title,id:l.id,required:l.required},l.label)):o,D={toggleOption:h,value:i,disabled:d.disabled,name:d.name,registerValue:j,cancelValue:E},_=T(c,{[`${c}-rtl`]:P==="rtl"},g,x,N,v,S);return V(n.createElement("div",Object.assign({className:_,style:w},p,{ref:r}),n.createElement(W.Provider,{value:D},z)))}),X=A;X.Group=ue;X.__ANT_CHECKBOX=!0;export{X as C,se as g};
