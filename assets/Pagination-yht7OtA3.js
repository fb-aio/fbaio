import{r as l,I as nt,g as K,$ as a,j as $e,e as Ce,o as w,W as L,X as j,bf as Tt,d as _t,E as Dt,H as Ht,D as b,bv as Rt,a1 as Ge,F as At,an as Lt,L as Kt,J as Wt,bs as Vt,bJ as qt,bg as Xt}from"./index-Cc323tmk.js";import{w as Qe,R as Ye,a4 as Ze}from"./MyApp-DaTURa7C.js";import{a as Jt}from"./useBreakpoint-CeklF8Qr.js";import{S as xe}from"./index-BAOnGDsj.js";import{i as Ft,c as Ut,h as Gt,j as Qt,k as Yt,l as Zt}from"./index-I4RQw55H.js";const Pi=function(){const e=Object.assign({},arguments.length<=0?void 0:arguments[0]);for(let t=1;t<arguments.length;t++){const u=t<0||arguments.length<=t?void 0:arguments[t];u&&Object.keys(u).forEach(i=>{const d=u[i];d!==void 0&&(e[i]=d)})}return e};var kt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z"}}]},name:"double-left",theme:"outlined"},ei=function(t,u){return l.createElement(nt,K({},t,{ref:u,icon:kt}))},ke=l.forwardRef(ei),ti={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"}}]},name:"double-right",theme:"outlined"},ii=function(t,u){return l.createElement(nt,K({},t,{ref:u,icon:ti}))},et=l.forwardRef(ii),ni={items_per_page:"条/页",jump_to:"跳至",jump_to_confirm:"确定",page:"页",prev_page:"上一页",next_page:"下一页",prev_5:"向前 5 页",next_5:"向后 5 页",prev_3:"向前 3 页",next_3:"向后 3 页",page_size:"页码"},ai=["10","20","50","100"],ri=function(t){var u=t.pageSizeOptions,i=u===void 0?ai:u,d=t.locale,T=t.changeSize,_=t.pageSize,E=t.goButton,$=t.quickGo,I=t.rootPrefixCls,P=t.selectComponentClass,O=t.selectPrefixCls,m=t.disabled,W=t.buildOptionText,h=t.showSizeChanger,V=a.useState(""),C=$e(V,2),g=C[0],c=C[1],q=function(){return!g||Number.isNaN(g)?void 0:Number(g)},Z=typeof W=="function"?W:function(p){return"".concat(p," ").concat(d.items_per_page)},te=function(s,G){if(T==null||T(Number(s)),Ce(h)==="object"){var Q;(Q=h.onChange)===null||Q===void 0||Q.call(h,s,G)}},F=function(s){c(s.target.value)},D=function(s){E||g===""||(c(""),!(s.relatedTarget&&(s.relatedTarget.className.indexOf("".concat(I,"-item-link"))>=0||s.relatedTarget.className.indexOf("".concat(I,"-item"))>=0))&&($==null||$(q())))},B=function(s){g!==""&&(s.keyCode===L.ENTER||s.type==="click")&&(c(""),$==null||$(q()))},z=function(){return i.some(function(s){return s.toString()===_.toString()})?i:i.concat([_.toString()]).sort(function(s,G){var Q=Number.isNaN(Number(s))?0:Number(s),ye=Number.isNaN(Number(G))?0:Number(G);return Q-ye})},M="".concat(I,"-options");if(!h&&!$)return null;var H=null,U=null,x=null;if(h&&P){var k=Ce(h)==="object"?h:{},R=k.options,ie=k.className,X=R?void 0:z().map(function(p,s){return a.createElement(P.Option,{key:s,value:p.toString()},Z(p))});H=a.createElement(P,K({disabled:m,prefixCls:O,showSearch:!1,optionLabelProp:R?"label":"children",popupMatchSelectWidth:!1,value:(_||i[0]).toString(),getPopupContainer:function(s){return s.parentNode},"aria-label":d.page_size,defaultOpen:!1},Ce(h)==="object"?h:null,{className:w("".concat(M,"-size-changer"),ie),options:R,onChange:te}),X)}return $&&(E&&(x=typeof E=="boolean"?a.createElement("button",{type:"button",onClick:B,onKeyUp:B,disabled:m,className:"".concat(M,"-quick-jumper-button")},d.jump_to_confirm):a.createElement("span",{onClick:B,onKeyUp:B},E)),U=a.createElement("div",{className:"".concat(M,"-quick-jumper")},d.jump_to,a.createElement("input",{disabled:m,type:"text",value:g,onChange:F,onKeyUp:B,onBlur:D,"aria-label":d.page}),d.page,x)),a.createElement("li",{className:M},H,U)},ue=function(t){var u=t.rootPrefixCls,i=t.page,d=t.active,T=t.className,_=t.showTitle,E=t.onClick,$=t.onKeyPress,I=t.itemRender,P="".concat(u,"-item"),O=w(P,"".concat(P,"-").concat(i),j(j({},"".concat(P,"-active"),d),"".concat(P,"-disabled"),!i),T),m=function(){E(i)},W=function(C){$(C,E,i)},h=I(i,"page",a.createElement("a",{rel:"nofollow"},i));return h?a.createElement("li",{title:_?String(i):null,className:O,onClick:m,onKeyDown:W,tabIndex:0},h):null},oi=function(t,u,i){return i};function tt(){}function it(e){var t=Number(e);return typeof t=="number"&&!Number.isNaN(t)&&isFinite(t)&&Math.floor(t)===t}function Y(e,t,u){var i=typeof e>"u"?t:e;return Math.floor((u-1)/i)+1}var li=function(t){var u=t.prefixCls,i=u===void 0?"rc-pagination":u,d=t.selectPrefixCls,T=d===void 0?"rc-select":d,_=t.className,E=t.selectComponentClass,$=t.current,I=t.defaultCurrent,P=I===void 0?1:I,O=t.total,m=O===void 0?0:O,W=t.pageSize,h=t.defaultPageSize,V=h===void 0?10:h,C=t.onChange,g=C===void 0?tt:C,c=t.hideOnSinglePage,q=t.align,Z=t.showPrevNextJumpers,te=Z===void 0?!0:Z,F=t.showQuickJumper,D=t.showLessItems,B=t.showTitle,z=B===void 0?!0:B,M=t.onShowSizeChange,H=M===void 0?tt:M,U=t.locale,x=U===void 0?ni:U,k=t.style,R=t.totalBoundaryShowSizeChanger,ie=R===void 0?50:R,X=t.disabled,p=t.simple,s=t.showTotal,G=t.showSizeChanger,Q=G===void 0?m>ie:G,ye=t.pageSizeOptions,je=t.itemRender,ne=je===void 0?oi:je,Ie=t.jumpPrevIcon,Oe=t.jumpNextIcon,ct=t.prevIcon,st=t.nextIcon,ut=a.useRef(null),mt=Qe(10,{value:W,defaultValue:V}),Be=$e(mt,2),y=Be[0],dt=Be[1],gt=Qe(1,{value:$,defaultValue:P,postState:function(o){return Math.max(1,Math.min(o,Y(void 0,y,m)))}}),Me=$e(gt,2),r=Me[0],we=Me[1],pt=a.useState(r),Te=$e(pt,2),ee=Te[0],me=Te[1];l.useEffect(function(){me(r)},[r]);var _e=Math.max(1,r-(D?3:5)),De=Math.min(Y(void 0,y,m),r+(D?3:5));function de(n,o){var v=n||a.createElement("button",{type:"button","aria-label":o,className:"".concat(i,"-item-link")});return typeof n=="function"&&(v=a.createElement(n,_t({},t))),v}function He(n){var o=n.target.value,v=Y(void 0,y,m),J;return o===""?J=o:Number.isNaN(Number(o))?J=ee:o>=v?J=v:J=Number(o),J}function vt(n){return it(n)&&n!==r&&it(m)&&m>0}var bt=m>y?F:!1;function ht(n){(n.keyCode===L.UP||n.keyCode===L.DOWN)&&n.preventDefault()}function Re(n){var o=He(n);switch(o!==ee&&me(o),n.keyCode){case L.ENTER:N(o);break;case L.UP:N(o-1);break;case L.DOWN:N(o+1);break}}function ft(n){N(He(n))}function St(n){var o=Y(n,y,m),v=r>o&&o!==0?o:r;dt(n),me(v),H==null||H(r,n),we(v),g==null||g(v,n)}function N(n){if(vt(n)&&!X){var o=Y(void 0,y,m),v=n;return n>o?v=o:n<1&&(v=1),v!==ee&&me(v),we(v),g==null||g(v,y),v}return r}var ge=r>1,pe=r<Y(void 0,y,m);function Ae(){ge&&N(r-1)}function Le(){pe&&N(r+1)}function Ke(){N(_e)}function We(){N(De)}function ae(n,o){if(n.key==="Enter"||n.charCode===L.ENTER||n.keyCode===L.ENTER){for(var v=arguments.length,J=new Array(v>2?v-2:0),Se=2;Se<v;Se++)J[Se-2]=arguments[Se];o.apply(void 0,J)}}function $t(n){ae(n,Ae)}function Ct(n){ae(n,Le)}function xt(n){ae(n,Ke)}function yt(n){ae(n,We)}function Pt(n){var o=ne(n,"prev",de(ct,"prev page"));return a.isValidElement(o)?a.cloneElement(o,{disabled:!ge}):o}function Et(n){var o=ne(n,"next",de(st,"next page"));return a.isValidElement(o)?a.cloneElement(o,{disabled:!pe}):o}function ve(n){(n.type==="click"||n.keyCode===L.ENTER)&&N(ee)}var Ve=null,zt=Tt(t,{aria:!0,data:!0}),Nt=s&&a.createElement("li",{className:"".concat(i,"-total-text")},s(m,[m===0?0:(r-1)*y+1,r*y>m?m:r*y])),qe=null,f=Y(void 0,y,m);if(c&&m<=y)return null;var S=[],re={rootPrefixCls:i,onClick:N,onKeyPress:ae,showTitle:z,itemRender:ne,page:-1},jt=r-1>0?r-1:0,It=r+1<f?r+1:f,be=F&&F.goButton,Ot=Ce(p)==="object"?p.readOnly:!p,oe=be,Xe=null;p&&(be&&(typeof be=="boolean"?oe=a.createElement("button",{type:"button",onClick:ve,onKeyUp:ve},x.jump_to_confirm):oe=a.createElement("span",{onClick:ve,onKeyUp:ve},be),oe=a.createElement("li",{title:z?"".concat(x.jump_to).concat(r,"/").concat(f):null,className:"".concat(i,"-simple-pager")},oe)),Xe=a.createElement("li",{title:z?"".concat(r,"/").concat(f):null,className:"".concat(i,"-simple-pager")},Ot?ee:a.createElement("input",{type:"text",value:ee,disabled:X,onKeyDown:ht,onKeyUp:Re,onChange:Re,onBlur:ft,size:3}),a.createElement("span",{className:"".concat(i,"-slash")},"/"),f));var A=D?1:2;if(f<=3+A*2){f||S.push(a.createElement(ue,K({},re,{key:"noPager",page:1,className:"".concat(i,"-item-disabled")})));for(var le=1;le<=f;le+=1)S.push(a.createElement(ue,K({},re,{key:le,page:le,active:r===le})))}else{var Bt=D?x.prev_3:x.prev_5,Mt=D?x.next_3:x.next_5,Je=ne(_e,"jump-prev",de(Ie,"prev page")),Fe=ne(De,"jump-next",de(Oe,"next page"));te&&(Ve=Je?a.createElement("li",{title:z?Bt:null,key:"prev",onClick:Ke,tabIndex:0,onKeyDown:xt,className:w("".concat(i,"-jump-prev"),j({},"".concat(i,"-jump-prev-custom-icon"),!!Ie))},Je):null,qe=Fe?a.createElement("li",{title:z?Mt:null,key:"next",onClick:We,tabIndex:0,onKeyDown:yt,className:w("".concat(i,"-jump-next"),j({},"".concat(i,"-jump-next-custom-icon"),!!Oe))},Fe):null);var Pe=Math.max(1,r-A),Ee=Math.min(r+A,f);r-1<=A&&(Ee=1+A*2),f-r<=A&&(Pe=f-A*2);for(var ce=Pe;ce<=Ee;ce+=1)S.push(a.createElement(ue,K({},re,{key:ce,page:ce,active:r===ce})));if(r-1>=A*2&&r!==3&&(S[0]=a.cloneElement(S[0],{className:w("".concat(i,"-item-after-jump-prev"),S[0].props.className)}),S.unshift(Ve)),f-r>=A*2&&r!==f-2){var Ue=S[S.length-1];S[S.length-1]=a.cloneElement(Ue,{className:w("".concat(i,"-item-before-jump-next"),Ue.props.className)}),S.push(qe)}Pe!==1&&S.unshift(a.createElement(ue,K({},re,{key:1,page:1}))),Ee!==f&&S.push(a.createElement(ue,K({},re,{key:f,page:f})))}var he=Pt(jt);if(he){var ze=!ge||!f;he=a.createElement("li",{title:z?x.prev_page:null,onClick:Ae,tabIndex:ze?null:0,onKeyDown:$t,className:w("".concat(i,"-prev"),j({},"".concat(i,"-disabled"),ze)),"aria-disabled":ze},he)}var fe=Et(It);if(fe){var se,Ne;p?(se=!pe,Ne=ge?0:null):(se=!pe||!f,Ne=se?null:0),fe=a.createElement("li",{title:z?x.next_page:null,onClick:Le,tabIndex:Ne,onKeyDown:Ct,className:w("".concat(i,"-next"),j({},"".concat(i,"-disabled"),se)),"aria-disabled":se},fe)}var wt=w(i,_,j(j(j(j(j({},"".concat(i,"-start"),q==="start"),"".concat(i,"-center"),q==="center"),"".concat(i,"-end"),q==="end"),"".concat(i,"-simple"),p),"".concat(i,"-disabled"),X));return a.createElement("ul",K({className:wt,style:k,ref:ut},zt),Nt,he,p?Xe:S,fe,a.createElement(ri,{locale:x,rootPrefixCls:i,disabled:X,selectComponentClass:E,selectPrefixCls:T,changeSize:St,pageSize:y,pageSizeOptions:ye,quickGo:bt?N:null,goButton:oe,showSizeChanger:Q}))};const at=e=>l.createElement(xe,Object.assign({},e,{showSearch:!0,size:"small"})),rt=e=>l.createElement(xe,Object.assign({},e,{showSearch:!0,size:"middle"}));at.Option=xe.Option;rt.Option=xe.Option;const ci=e=>{const{componentCls:t}=e;return{[`${t}-disabled`]:{"&, &:hover":{cursor:"not-allowed",[`${t}-item-link`]:{color:e.colorTextDisabled,cursor:"not-allowed"}},"&:focus-visible":{cursor:"not-allowed",[`${t}-item-link`]:{color:e.colorTextDisabled,cursor:"not-allowed"}}},[`&${t}-disabled`]:{cursor:"not-allowed",[`${t}-item`]:{cursor:"not-allowed","&:hover, &:active":{backgroundColor:"transparent"},a:{color:e.colorTextDisabled,backgroundColor:"transparent",border:"none",cursor:"not-allowed"},"&-active":{borderColor:e.colorBorder,backgroundColor:e.itemActiveBgDisabled,"&:hover, &:active":{backgroundColor:e.itemActiveBgDisabled},a:{color:e.itemActiveColorDisabled}}},[`${t}-item-link`]:{color:e.colorTextDisabled,cursor:"not-allowed","&:hover, &:active":{backgroundColor:"transparent"},[`${t}-simple&`]:{backgroundColor:"transparent","&:hover, &:active":{backgroundColor:"transparent"}}},[`${t}-simple-pager`]:{color:e.colorTextDisabled},[`${t}-jump-prev, ${t}-jump-next`]:{[`${t}-item-link-icon`]:{opacity:0},[`${t}-item-ellipsis`]:{opacity:1}}},[`&${t}-simple`]:{[`${t}-prev, ${t}-next`]:{[`&${t}-disabled ${t}-item-link`]:{"&:hover, &:active":{backgroundColor:"transparent"}}}}}},si=e=>{const{componentCls:t}=e;return{[`&${t}-mini ${t}-total-text, &${t}-mini ${t}-simple-pager`]:{height:e.itemSizeSM,lineHeight:b(e.itemSizeSM)},[`&${t}-mini ${t}-item`]:{minWidth:e.itemSizeSM,height:e.itemSizeSM,margin:0,lineHeight:b(e.calc(e.itemSizeSM).sub(2).equal())},[`&${t}-mini:not(${t}-disabled) ${t}-item:not(${t}-item-active)`]:{backgroundColor:"transparent",borderColor:"transparent","&:hover":{backgroundColor:e.colorBgTextHover},"&:active":{backgroundColor:e.colorBgTextActive}},[`&${t}-mini ${t}-prev, &${t}-mini ${t}-next`]:{minWidth:e.itemSizeSM,height:e.itemSizeSM,margin:0,lineHeight:b(e.itemSizeSM)},[`&${t}-mini:not(${t}-disabled)`]:{[`${t}-prev, ${t}-next`]:{[`&:hover ${t}-item-link`]:{backgroundColor:e.colorBgTextHover},[`&:active ${t}-item-link`]:{backgroundColor:e.colorBgTextActive},[`&${t}-disabled:hover ${t}-item-link`]:{backgroundColor:"transparent"}}},[`
    &${t}-mini ${t}-prev ${t}-item-link,
    &${t}-mini ${t}-next ${t}-item-link
    `]:{backgroundColor:"transparent",borderColor:"transparent","&::after":{height:e.itemSizeSM,lineHeight:b(e.itemSizeSM)}},[`&${t}-mini ${t}-jump-prev, &${t}-mini ${t}-jump-next`]:{height:e.itemSizeSM,marginInlineEnd:0,lineHeight:b(e.itemSizeSM)},[`&${t}-mini ${t}-options`]:{marginInlineStart:e.paginationMiniOptionsMarginInlineStart,"&-size-changer":{top:e.miniOptionsSizeChangerTop},"&-quick-jumper":{height:e.itemSizeSM,lineHeight:b(e.itemSizeSM),input:Object.assign(Object.assign({},Gt(e)),{width:e.paginationMiniQuickJumperInputWidth,height:e.controlHeightSM})}}}},ui=e=>{const{componentCls:t}=e;return{[`
    &${t}-simple ${t}-prev,
    &${t}-simple ${t}-next
    `]:{height:e.itemSizeSM,lineHeight:b(e.itemSizeSM),verticalAlign:"top",[`${t}-item-link`]:{height:e.itemSizeSM,backgroundColor:"transparent",border:0,"&:hover":{backgroundColor:e.colorBgTextHover},"&:active":{backgroundColor:e.colorBgTextActive},"&::after":{height:e.itemSizeSM,lineHeight:b(e.itemSizeSM)}}},[`&${t}-simple ${t}-simple-pager`]:{display:"inline-block",height:e.itemSizeSM,marginInlineEnd:e.marginXS,input:{boxSizing:"border-box",height:"100%",padding:`0 ${b(e.paginationItemPaddingInline)}`,textAlign:"center",backgroundColor:e.itemInputBg,border:`${b(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadius,outline:"none",transition:`border-color ${e.motionDurationMid}`,color:"inherit","&:hover":{borderColor:e.colorPrimary},"&:focus":{borderColor:e.colorPrimaryHover,boxShadow:`${b(e.inputOutlineOffset)} 0 ${b(e.controlOutlineWidth)} ${e.controlOutline}`},"&[disabled]":{color:e.colorTextDisabled,backgroundColor:e.colorBgContainerDisabled,borderColor:e.colorBorder,cursor:"not-allowed"}}}}},mi=e=>{const{componentCls:t}=e;return{[`${t}-jump-prev, ${t}-jump-next`]:{outline:0,[`${t}-item-container`]:{position:"relative",[`${t}-item-link-icon`]:{color:e.colorPrimary,fontSize:e.fontSizeSM,opacity:0,transition:`all ${e.motionDurationMid}`,"&-svg":{top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,margin:"auto"}},[`${t}-item-ellipsis`]:{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,display:"block",margin:"auto",color:e.colorTextDisabled,letterSpacing:e.paginationEllipsisLetterSpacing,textAlign:"center",textIndent:e.paginationEllipsisTextIndent,opacity:1,transition:`all ${e.motionDurationMid}`}},"&:hover":{[`${t}-item-link-icon`]:{opacity:1},[`${t}-item-ellipsis`]:{opacity:0}}},[`
    ${t}-prev,
    ${t}-jump-prev,
    ${t}-jump-next
    `]:{marginInlineEnd:e.marginXS},[`
    ${t}-prev,
    ${t}-next,
    ${t}-jump-prev,
    ${t}-jump-next
    `]:{display:"inline-block",minWidth:e.itemSize,height:e.itemSize,color:e.colorText,fontFamily:e.fontFamily,lineHeight:b(e.itemSize),textAlign:"center",verticalAlign:"middle",listStyle:"none",borderRadius:e.borderRadius,cursor:"pointer",transition:`all ${e.motionDurationMid}`},[`${t}-prev, ${t}-next`]:{outline:0,button:{color:e.colorText,cursor:"pointer",userSelect:"none"},[`${t}-item-link`]:{display:"block",width:"100%",height:"100%",padding:0,fontSize:e.fontSizeSM,textAlign:"center",backgroundColor:"transparent",border:`${b(e.lineWidth)} ${e.lineType} transparent`,borderRadius:e.borderRadius,outline:"none",transition:`all ${e.motionDurationMid}`},[`&:hover ${t}-item-link`]:{backgroundColor:e.colorBgTextHover},[`&:active ${t}-item-link`]:{backgroundColor:e.colorBgTextActive},[`&${t}-disabled:hover`]:{[`${t}-item-link`]:{backgroundColor:"transparent"}}},[`${t}-slash`]:{marginInlineEnd:e.paginationSlashMarginInlineEnd,marginInlineStart:e.paginationSlashMarginInlineStart},[`${t}-options`]:{display:"inline-block",marginInlineStart:e.margin,verticalAlign:"middle","&-size-changer":{display:"inline-block",width:"auto"},"&-quick-jumper":{display:"inline-block",height:e.controlHeight,marginInlineStart:e.marginXS,lineHeight:b(e.controlHeight),verticalAlign:"top",input:Object.assign(Object.assign(Object.assign({},Qt(e)),Yt(e,{borderColor:e.colorBorder,hoverBorderColor:e.colorPrimaryHover,activeBorderColor:e.colorPrimary,activeShadow:e.activeShadow})),{"&[disabled]":Object.assign({},Zt(e)),width:e.calc(e.controlHeightLG).mul(1.25).equal(),height:e.controlHeight,boxSizing:"border-box",margin:0,marginInlineStart:e.marginXS,marginInlineEnd:e.marginXS})}}}},di=e=>{const{componentCls:t}=e;return{[`${t}-item`]:{display:"inline-block",minWidth:e.itemSize,height:e.itemSize,marginInlineEnd:e.marginXS,fontFamily:e.fontFamily,lineHeight:b(e.calc(e.itemSize).sub(2).equal()),textAlign:"center",verticalAlign:"middle",listStyle:"none",backgroundColor:e.itemBg,border:`${b(e.lineWidth)} ${e.lineType} transparent`,borderRadius:e.borderRadius,outline:0,cursor:"pointer",userSelect:"none",a:{display:"block",padding:`0 ${b(e.paginationItemPaddingInline)}`,color:e.colorText,"&:hover":{textDecoration:"none"}},[`&:not(${t}-item-active)`]:{"&:hover":{transition:`all ${e.motionDurationMid}`,backgroundColor:e.colorBgTextHover},"&:active":{backgroundColor:e.colorBgTextActive}},"&-active":{fontWeight:e.fontWeightStrong,backgroundColor:e.itemActiveBg,borderColor:e.colorPrimary,a:{color:e.colorPrimary},"&:hover":{borderColor:e.colorPrimaryHover},"&:hover a":{color:e.colorPrimaryHover}}}}},gi=e=>{const{componentCls:t}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Ht(e)),{display:"flex","&-start":{justifyContent:"start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"end"},"ul, ol":{margin:0,padding:0,listStyle:"none"},"&::after":{display:"block",clear:"both",height:0,overflow:"hidden",visibility:"hidden",content:'""'},[`${t}-total-text`]:{display:"inline-block",height:e.itemSize,marginInlineEnd:e.marginXS,lineHeight:b(e.calc(e.itemSize).sub(2).equal()),verticalAlign:"middle"}}),di(e)),mi(e)),ui(e)),si(e)),ci(e)),{[`@media only screen and (max-width: ${e.screenLG}px)`]:{[`${t}-item`]:{"&-after-jump-prev, &-before-jump-next":{display:"none"}}},[`@media only screen and (max-width: ${e.screenSM}px)`]:{[`${t}-options`]:{display:"none"}}}),[`&${e.componentCls}-rtl`]:{direction:"rtl"}}},pi=e=>{const{componentCls:t}=e;return{[`${t}:not(${t}-disabled)`]:{[`${t}-item`]:Object.assign({},Rt(e)),[`${t}-jump-prev, ${t}-jump-next`]:{"&:focus-visible":Object.assign({[`${t}-item-link-icon`]:{opacity:1},[`${t}-item-ellipsis`]:{opacity:0}},Ge(e))},[`${t}-prev, ${t}-next`]:{[`&:focus-visible ${t}-item-link`]:Object.assign({},Ge(e))}}}},ot=e=>Object.assign({itemBg:e.colorBgContainer,itemSize:e.controlHeight,itemSizeSM:e.controlHeightSM,itemActiveBg:e.colorBgContainer,itemLinkBg:e.colorBgContainer,itemActiveColorDisabled:e.colorTextDisabled,itemActiveBgDisabled:e.controlItemBgActiveDisabled,itemInputBg:e.colorBgContainer,miniOptionsSizeChangerTop:0},Ft(e)),lt=e=>At(e,{inputOutlineOffset:0,paginationMiniOptionsMarginInlineStart:e.calc(e.marginXXS).div(2).equal(),paginationMiniQuickJumperInputWidth:e.calc(e.controlHeightLG).mul(1.1).equal(),paginationItemPaddingInline:e.calc(e.marginXXS).mul(1.5).equal(),paginationEllipsisLetterSpacing:e.calc(e.marginXXS).div(2).equal(),paginationSlashMarginInlineStart:e.marginSM,paginationSlashMarginInlineEnd:e.marginSM,paginationEllipsisTextIndent:"0.13em"},Ut(e)),vi=Dt("Pagination",e=>{const t=lt(e);return[gi(t),pi(t)]},ot),bi=e=>{const{componentCls:t}=e;return{[`${t}${t}-bordered${t}-disabled:not(${t}-mini)`]:{"&, &:hover":{[`${t}-item-link`]:{borderColor:e.colorBorder}},"&:focus-visible":{[`${t}-item-link`]:{borderColor:e.colorBorder}},[`${t}-item, ${t}-item-link`]:{backgroundColor:e.colorBgContainerDisabled,borderColor:e.colorBorder,[`&:hover:not(${t}-item-active)`]:{backgroundColor:e.colorBgContainerDisabled,borderColor:e.colorBorder,a:{color:e.colorTextDisabled}},[`&${t}-item-active`]:{backgroundColor:e.itemActiveBgDisabled}},[`${t}-prev, ${t}-next`]:{"&:hover button":{backgroundColor:e.colorBgContainerDisabled,borderColor:e.colorBorder,color:e.colorTextDisabled},[`${t}-item-link`]:{backgroundColor:e.colorBgContainerDisabled,borderColor:e.colorBorder}}},[`${t}${t}-bordered:not(${t}-mini)`]:{[`${t}-prev, ${t}-next`]:{"&:hover button":{borderColor:e.colorPrimaryHover,backgroundColor:e.itemBg},[`${t}-item-link`]:{backgroundColor:e.itemLinkBg,borderColor:e.colorBorder},[`&:hover ${t}-item-link`]:{borderColor:e.colorPrimary,backgroundColor:e.itemBg,color:e.colorPrimary},[`&${t}-disabled`]:{[`${t}-item-link`]:{borderColor:e.colorBorder,color:e.colorTextDisabled}}},[`${t}-item`]:{backgroundColor:e.itemBg,border:`${b(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,[`&:hover:not(${t}-item-active)`]:{borderColor:e.colorPrimary,backgroundColor:e.itemBg,a:{color:e.colorPrimary}},"&-active":{borderColor:e.colorPrimary}}}}},hi=Lt(["Pagination","bordered"],e=>{const t=lt(e);return[bi(t)]},ot);var fi=function(e,t){var u={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(u[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,i=Object.getOwnPropertySymbols(e);d<i.length;d++)t.indexOf(i[d])<0&&Object.prototype.propertyIsEnumerable.call(e,i[d])&&(u[i[d]]=e[i[d]]);return u};const Ei=e=>{const{align:t,prefixCls:u,selectPrefixCls:i,className:d,rootClassName:T,style:_,size:E,locale:$,selectComponentClass:I,responsive:P,showSizeChanger:O}=e,m=fi(e,["align","prefixCls","selectPrefixCls","className","rootClassName","style","size","locale","selectComponentClass","responsive","showSizeChanger"]),{xs:W}=Jt(P),[,h]=Kt(),{getPrefixCls:V,direction:C,pagination:g={}}=l.useContext(Wt),c=V("pagination",u),[q,Z,te]=vi(c),F=O??g.showSizeChanger,D=l.useMemo(()=>{const R=l.createElement("span",{className:`${c}-item-ellipsis`},"•••"),ie=l.createElement("button",{className:`${c}-item-link`,type:"button",tabIndex:-1},C==="rtl"?l.createElement(Ye,null):l.createElement(Ze,null)),X=l.createElement("button",{className:`${c}-item-link`,type:"button",tabIndex:-1},C==="rtl"?l.createElement(Ze,null):l.createElement(Ye,null)),p=l.createElement("a",{className:`${c}-item-link`},l.createElement("div",{className:`${c}-item-container`},C==="rtl"?l.createElement(et,{className:`${c}-item-link-icon`}):l.createElement(ke,{className:`${c}-item-link-icon`}),R)),s=l.createElement("a",{className:`${c}-item-link`},l.createElement("div",{className:`${c}-item-container`},C==="rtl"?l.createElement(ke,{className:`${c}-item-link-icon`}):l.createElement(et,{className:`${c}-item-link-icon`}),R));return{prevIcon:ie,nextIcon:X,jumpPrevIcon:p,jumpNextIcon:s}},[C,c]),[B]=Vt("Pagination",qt),z=Object.assign(Object.assign({},B),$),M=Xt(E),H=M==="small"||!!(W&&!M&&P),U=V("select",i),x=w({[`${c}-${t}`]:!!t,[`${c}-mini`]:H,[`${c}-rtl`]:C==="rtl",[`${c}-bordered`]:h.wireframe},g==null?void 0:g.className,d,T,Z,te),k=Object.assign(Object.assign({},g==null?void 0:g.style),_);return q(l.createElement(l.Fragment,null,h.wireframe&&l.createElement(hi,{prefixCls:c}),l.createElement(li,Object.assign({},D,m,{style:k,prefixCls:c,selectPrefixCls:U,className:x,selectComponentClass:I||(H?at:rt),locale:z,showSizeChanger:F}))))};export{Ei as P,Pi as e};