import{r as E,$ as $t,ay as xt,au as xe,av as ye,aA as m,aB as F,aT as yt}from"./index-wZlHKvIC.js";import{a as Ct,r as St}from"./stories-CDbqRXyD.js";import{S as jt}from"./StoryViewers-BkJKeafN.js";import{u as zt,g as Mt,t as Ce,b as B,T as Et,_ as Rt,i as Lt,k as Dt,az as Bt}from"./MyApp-BoAWzGij.js";import{V as Pt}from"./VideoWithMuted-Dgu0_O18.js";import{T as N}from"./index-Bv_gDArU.js";import{I as Tt}from"./index-BalxX6fZ.js";import{A as Ht}from"./index-dyO0wsFl.js";import"./Collection-D2fRTfTv.js";import"./index-C5zhxkfZ.js";import"./file-download-BQ7ExDj3.js";import"./index-DyxODtZq.js";import"./Dropdown-Ce6gRozi.js";import"./PurePanel-DZcz0OHg.js";import"./index-CiYw3fNR.js";import"./index-gNcxpNQ1.js";import"./TextArea-DZxd1cfF.js";import"./EyeOutlined-C0Xyk1pP.js";import"./SearchOutlined-d-cJSqkw.js";import"./index-CX2aivbE.js";import"./Pagination-BCW-H6N6.js";import"./useBreakpoint-OUxgu0-V.js";import"./responsiveObserver-BoSTImBj.js";import"./index-znDtBKj-.js";import"./row-zII7X2E0.js";import"./index-kQEphdM5.js";import"./addEventListener-DUkyYCb2.js";import"./index-BZVgmXPP.js";function Ge(t){return t&&t.__esModule?t.default:t}function S(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var te,g,Xe,U,Ye,Se,X={},Je=[],At=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function L(t,e){for(var n in e)t[n]=e[n];return t}function Ze(t){var e=t.parentNode;e&&e.removeChild(t)}function de(t,e,n){var r,o,i,a={};for(i in e)i=="key"?r=e[i]:i=="ref"?o=e[i]:a[i]=e[i];if(arguments.length>2&&(a.children=arguments.length>3?te.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)a[i]===void 0&&(a[i]=t.defaultProps[i]);return K(t,a,r,o,null)}function K(t,e,n,r,o){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++Xe};return o==null&&g.vnode!=null&&g.vnode(i),i}function M(){return{current:null}}function I(t){return t.children}function z(t,e){this.props=t,this.context=e}function V(t,e){if(e==null)return t.__?V(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?V(t):null}function Qe(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return Qe(t)}}function je(t){(!t.__d&&(t.__d=!0)&&U.push(t)&&!Y.__r++||Se!==g.debounceRendering)&&((Se=g.debounceRendering)||Ye)(Y)}function Y(){for(var t;Y.__r=U.length;)t=U.sort(function(e,n){return e.__v.__b-n.__v.__b}),U=[],t.some(function(e){var n,r,o,i,a,l;e.__d&&(a=(i=(n=e).__v).__e,(l=n.__P)&&(r=[],(o=L({},i)).__v=i.__v+1,ge(l,i,o,n.__n,l.ownerSVGElement!==void 0,i.__h!=null?[a]:null,r,a??V(i),i.__h),rt(r,i),i.__e!=a&&Qe(i)))})}function et(t,e,n,r,o,i,a,l,c,u){var s,v,h,p,_,w,k,$=r&&r.__k||Je,f=$.length;for(n.__k=[],s=0;s<e.length;s++)if((p=n.__k[s]=(p=e[s])==null||typeof p=="boolean"?null:typeof p=="string"||typeof p=="number"||typeof p=="bigint"?K(null,p,null,null,p):Array.isArray(p)?K(I,{children:p},null,null,null):p.__b>0?K(p.type,p.props,p.key,null,p.__v):p)!=null){if(p.__=n,p.__b=n.__b+1,(h=$[s])===null||h&&p.key==h.key&&p.type===h.type)$[s]=void 0;else for(v=0;v<f;v++){if((h=$[v])&&p.key==h.key&&p.type===h.type){$[v]=void 0;break}h=null}ge(t,p,h=h||X,o,i,a,l,c,u),_=p.__e,(v=p.ref)&&h.ref!=v&&(k||(k=[]),h.ref&&k.push(h.ref,null,p),k.push(v,p.__c||_,p)),_!=null?(w==null&&(w=_),typeof p.type=="function"&&p.__k===h.__k?p.__d=c=tt(p,c,t):c=nt(t,p,h,$,_,c),typeof n.type=="function"&&(n.__d=c)):c&&h.__e==c&&c.parentNode!=t&&(c=V(h))}for(n.__e=w,s=f;s--;)$[s]!=null&&(typeof n.type=="function"&&$[s].__e!=null&&$[s].__e==n.__d&&(n.__d=V(r,s+1)),ot($[s],$[s]));if(k)for(s=0;s<k.length;s++)it(k[s],k[++s],k[++s])}function tt(t,e,n){for(var r,o=t.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=t,e=typeof r.type=="function"?tt(r,e,n):nt(n,r,r,o,r.__e,e));return e}function J(t,e){return e=e||[],t==null||typeof t=="boolean"||(Array.isArray(t)?t.some(function(n){J(n,e)}):e.push(t)),e}function nt(t,e,n,r,o,i){var a,l,c;if(e.__d!==void 0)a=e.__d,e.__d=void 0;else if(n==null||o!=i||o.parentNode==null)e:if(i==null||i.parentNode!==t)t.appendChild(o),a=null;else{for(l=i,c=0;(l=l.nextSibling)&&c<r.length;c+=2)if(l==o)break e;t.insertBefore(o,i),a=i}return a!==void 0?a:o.nextSibling}function It(t,e,n,r,o){var i;for(i in n)i==="children"||i==="key"||i in e||Z(t,i,null,n[i],r);for(i in e)o&&typeof e[i]!="function"||i==="children"||i==="key"||i==="value"||i==="checked"||n[i]===e[i]||Z(t,i,e[i],n[i],r)}function ze(t,e,n){e[0]==="-"?t.setProperty(e,n):t[e]=n==null?"":typeof n!="number"||At.test(e)?n:n+"px"}function Z(t,e,n,r,o){var i;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||ze(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||ze(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")i=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?r||t.addEventListener(e,i?Ee:Me,i):t.removeEventListener(e,i?Ee:Me,i);else if(e!=="dangerouslySetInnerHTML"){if(o)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,n):t.removeAttribute(e))}}function Me(t){this.l[t.type+!1](g.event?g.event(t):t)}function Ee(t){this.l[t.type+!0](g.event?g.event(t):t)}function ge(t,e,n,r,o,i,a,l,c){var u,s,v,h,p,_,w,k,$,f,P,C=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(c=n.__h,l=e.__e=n.__e,e.__h=null,i=[l]),(u=g.__b)&&u(e);try{e:if(typeof C=="function"){if(k=e.props,$=(u=C.contextType)&&r[u.__c],f=u?$?$.props.value:u.__:r,n.__c?w=(s=e.__c=n.__c).__=s.__E:("prototype"in C&&C.prototype.render?e.__c=s=new C(k,f):(e.__c=s=new z(k,f),s.constructor=C,s.render=Ot),$&&$.sub(s),s.props=k,s.state||(s.state={}),s.context=f,s.__n=r,v=s.__d=!0,s.__h=[]),s.__s==null&&(s.__s=s.state),C.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=L({},s.__s)),L(s.__s,C.getDerivedStateFromProps(k,s.__s))),h=s.props,p=s.state,v)C.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(C.getDerivedStateFromProps==null&&k!==h&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(k,f),!s.__e&&s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(k,s.__s,f)===!1||e.__v===n.__v){s.props=k,s.state=s.__s,e.__v!==n.__v&&(s.__d=!1),s.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(T){T&&(T.__=e)}),s.__h.length&&a.push(s);break e}s.componentWillUpdate!=null&&s.componentWillUpdate(k,s.__s,f),s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(h,p,_)})}s.context=f,s.props=k,s.state=s.__s,(u=g.__r)&&u(e),s.__d=!1,s.__v=e,s.__P=t,u=s.render(s.props,s.state,s.context),s.state=s.__s,s.getChildContext!=null&&(r=L(L({},r),s.getChildContext())),v||s.getSnapshotBeforeUpdate==null||(_=s.getSnapshotBeforeUpdate(h,p)),P=u!=null&&u.type===I&&u.key==null?u.props.children:u,et(t,Array.isArray(P)?P:[P],e,n,r,o,i,a,l,c),s.base=e.__e,e.__h=null,s.__h.length&&a.push(s),w&&(s.__E=s.__=null),s.__e=!1}else i==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=Vt(n.__e,e,n,r,o,i,a,c);(u=g.diffed)&&u(e)}catch(T){e.__v=null,(c||i!=null)&&(e.__e=l,e.__h=!!c,i[i.indexOf(l)]=null),g.__e(T,e,n)}}function rt(t,e){g.__c&&g.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(r){r.call(n)})}catch(r){g.__e(r,n.__v)}})}function Vt(t,e,n,r,o,i,a,l){var c,u,s,v=n.props,h=e.props,p=e.type,_=0;if(p==="svg"&&(o=!0),i!=null){for(;_<i.length;_++)if((c=i[_])&&"setAttribute"in c==!!p&&(p?c.localName===p:c.nodeType===3)){t=c,i[_]=null;break}}if(t==null){if(p===null)return document.createTextNode(h);t=o?document.createElementNS("http://www.w3.org/2000/svg",p):document.createElement(p,h.is&&h),i=null,l=!1}if(p===null)v===h||l&&t.data===h||(t.data=h);else{if(i=i&&te.call(t.childNodes),u=(v=n.props||X).dangerouslySetInnerHTML,s=h.dangerouslySetInnerHTML,!l){if(i!=null)for(v={},_=0;_<t.attributes.length;_++)v[t.attributes[_].name]=t.attributes[_].value;(s||u)&&(s&&(u&&s.__html==u.__html||s.__html===t.innerHTML)||(t.innerHTML=s&&s.__html||""))}if(It(t,h,v,o,l),s)e.__k=[];else if(_=e.props.children,et(t,Array.isArray(_)?_:[_],e,n,r,o&&p!=="foreignObject",i,a,i?i[0]:n.__k&&V(n,0),l),i!=null)for(_=i.length;_--;)i[_]!=null&&Ze(i[_]);l||("value"in h&&(_=h.value)!==void 0&&(_!==v.value||_!==t.value||p==="progress"&&!_)&&Z(t,"value",_,v.value,!1),"checked"in h&&(_=h.checked)!==void 0&&_!==t.checked&&Z(t,"checked",_,v.checked,!1))}return t}function it(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(r){g.__e(r,n)}}function ot(t,e,n){var r,o;if(g.unmount&&g.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||it(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){g.__e(i,e)}r.base=r.__P=null}if(r=t.__k)for(o=0;o<r.length;o++)r[o]&&ot(r[o],e,typeof t.type!="function");n||t.__e==null||Ze(t.__e),t.__e=t.__d=void 0}function Ot(t,e,n){return this.constructor(t,n)}function st(t,e,n){var r,o,i;g.__&&g.__(t,e),o=(r=typeof n=="function")?null:n&&n.__k||e.__k,i=[],ge(e,t=(!r&&n||e).__k=de(I,null,[t]),o||X,X,e.ownerSVGElement!==void 0,!r&&n?[n]:o?null:e.firstChild?te.call(e.childNodes):null,i,!r&&n?n:o?o.__e:e.firstChild,r),rt(i,t)}te=Je.slice,g={__e:function(t,e){for(var n,r,o;e=e.__;)if((n=e.__c)&&!n.__)try{if((r=n.constructor)&&r.getDerivedStateFromError!=null&&(n.setState(r.getDerivedStateFromError(t)),o=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(t),o=n.__d),o)return n.__E=n}catch(i){t=i}throw t}},Xe=0,z.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=L({},this.state),typeof t=="function"&&(t=t(L({},n),this.props)),t&&L(n,t),t!=null&&this.__v&&(e&&this.__h.push(e),je(this))},z.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),je(this))},z.prototype.render=I,U=[],Ye=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Y.__r=0;var Ft=0;function d(t,e,n,r,o){var i,a,l={};for(a in e)a=="ref"?i=e[a]:l[a]=e[a];var c={type:t,props:l,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Ft,__source:r,__self:o};if(typeof t=="function"&&(i=t.defaultProps))for(a in i)l[a]===void 0&&(l[a]=i[a]);return g.vnode&&g.vnode(c),c}function Nt(t,e){try{window.localStorage[`emoji-mart.${t}`]=JSON.stringify(e)}catch{}}function Ut(t){try{const e=window.localStorage[`emoji-mart.${t}`];if(e)return JSON.parse(e)}catch{}}var D={set:Nt,get:Ut};const se=new Map,Wt=[{v:15,emoji:"🫨"},{v:14,emoji:"🫠"},{v:13.1,emoji:"😶‍🌫️"},{v:13,emoji:"🥸"},{v:12.1,emoji:"🧑‍🦰"},{v:12,emoji:"🥱"},{v:11,emoji:"🥰"},{v:5,emoji:"🤩"},{v:4,emoji:"👱‍♀️"},{v:3,emoji:"🤣"},{v:2,emoji:"👋🏻"},{v:1,emoji:"🙃"}];function qt(){for(const{v:t,emoji:e}of Wt)if(at(e))return t}function Kt(){return!at("🇨🇦")}function at(t){if(se.has(t))return se.get(t);const e=Gt(t);return se.set(t,e),e}const Gt=(()=>{let t=null;try{navigator.userAgent.includes("jsdom")||(t=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}))}catch{}if(!t)return()=>!1;const e=25,n=20,r=Math.floor(e/2);return t.font=r+"px Arial, Sans-Serif",t.textBaseline="top",t.canvas.width=n*2,t.canvas.height=e,o=>{t.clearRect(0,0,n*2,e),t.fillStyle="#FF0000",t.fillText(o,0,22),t.fillStyle="#0000FF",t.fillText(o,n,22);const i=t.getImageData(0,0,n,e).data,a=i.length;let l=0;for(;l<a&&!i[l+3];l+=4);if(l>=a)return!1;const c=n+l/4%n,u=Math.floor(l/4/n),s=t.getImageData(c,u,1,1).data;return!(i[l]!==s[0]||i[l+2]!==s[2]||t.measureText(o).width>=n)}})();var Re={latestVersion:qt,noCountryFlags:Kt};const ue=["+1","grinning","kissing_heart","heart_eyes","laughing","stuck_out_tongue_winking_eye","sweat_smile","joy","scream","disappointed","unamused","weary","sob","sunglasses","heart"];let x=null;function Xt(t){x||(x=D.get("frequently")||{});const e=t.id||t;e&&(x[e]||(x[e]=0),x[e]+=1,D.set("last",e),D.set("frequently",x))}function Yt({maxFrequentRows:t,perLine:e}){if(!t)return[];x||(x=D.get("frequently"));let n=[];if(!x){x={};for(let i in ue.slice(0,e)){const a=ue[i];x[a]=e-i,n.push(a)}return n}const r=t*e,o=D.get("last");for(let i in x)n.push(i);if(n.sort((i,a)=>{const l=x[a],c=x[i];return l==c?i.localeCompare(a):l-c}),n.length>r){const i=n.slice(r);n=n.slice(0,r);for(let a of i)a!=o&&delete x[a];o&&n.indexOf(o)==-1&&(delete x[n[n.length-1]],n.splice(-1,1,o)),D.set("frequently",x)}return n}var ct={add:Xt,get:Yt,DEFAULTS:ue},lt={};lt=JSON.parse('{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn’t be found","pick":"Pick an emoji…","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');var R={autoFocus:{value:!1},dynamicWidth:{value:!1},emojiButtonColors:{value:null},emojiButtonRadius:{value:"100%"},emojiButtonSize:{value:36},emojiSize:{value:24},emojiVersion:{value:15,choices:[1,2,3,4,5,11,12,12.1,13,13.1,14,15]},exceptEmojis:{value:[]},icons:{value:"auto",choices:["auto","outline","solid"]},locale:{value:"en",choices:["en","ar","be","cs","de","es","fa","fi","fr","hi","it","ja","ko","nl","pl","pt","ru","sa","tr","uk","vi","zh"]},maxFrequentRows:{value:4},navPosition:{value:"top",choices:["top","bottom","none"]},noCountryFlags:{value:!1},noResultsEmoji:{value:null},perLine:{value:9},previewEmoji:{value:null},previewPosition:{value:"bottom",choices:["top","bottom","none"]},searchPosition:{value:"sticky",choices:["sticky","static","none"]},set:{value:"native",choices:["native","apple","facebook","google","twitter"]},skin:{value:1,choices:[1,2,3,4,5,6]},skinTonePosition:{value:"preview",choices:["preview","search","none"]},theme:{value:"auto",choices:["auto","light","dark"]},categories:null,categoryIcons:null,custom:null,data:null,i18n:null,getImageURL:null,getSpritesheetURL:null,onAddCustomEmoji:null,onClickOutside:null,onEmojiSelect:null,stickySearch:{deprecated:!0,value:!0}};let y=null,b=null;const ae={};async function Le(t){if(ae[t])return ae[t];const n=await(await fetch(t)).json();return ae[t]=n,n}let ce=null,dt=null,ut=!1;function ne(t,{caller:e}={}){return ce||(ce=new Promise(n=>{dt=n})),t?Jt(t):e&&!ut&&console.warn(`\`${e}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`),ce}async function Jt(t){ut=!0;let{emojiVersion:e,set:n,locale:r}=t;if(e||(e=R.emojiVersion.value),n||(n=R.set.value),r||(r=R.locale.value),b)b.categories=b.categories.filter(c=>!c.name);else{b=(typeof t.data=="function"?await t.data():t.data)||await Le(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${e}/${n}.json`),b.emoticons={},b.natives={},b.categories.unshift({id:"frequent",emojis:[]});for(const c in b.aliases){const u=b.aliases[c],s=b.emojis[u];s&&(s.aliases||(s.aliases=[]),s.aliases.push(c))}b.originalCategories=b.categories}if(y=(typeof t.i18n=="function"?await t.i18n():t.i18n)||(r=="en"?Ge(lt):await Le(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${r}.json`)),t.custom)for(let c in t.custom){c=parseInt(c);const u=t.custom[c],s=t.custom[c-1];if(!(!u.emojis||!u.emojis.length)){u.id||(u.id=`custom_${c+1}`),u.name||(u.name=y.categories.custom),s&&!u.icon&&(u.target=s.target||s),b.categories.push(u);for(const v of u.emojis)b.emojis[v.id]=v}}t.categories&&(b.categories=b.originalCategories.filter(c=>t.categories.indexOf(c.id)!=-1).sort((c,u)=>{const s=t.categories.indexOf(c.id),v=t.categories.indexOf(u.id);return s-v}));let o=null,i=null;n=="native"&&(o=Re.latestVersion(),i=t.noCountryFlags||Re.noCountryFlags());let a=b.categories.length,l=!1;for(;a--;){const c=b.categories[a];if(c.id=="frequent"){let{maxFrequentRows:v,perLine:h}=t;v=v>=0?v:R.maxFrequentRows.value,h||(h=R.perLine.value),c.emojis=ct.get({maxFrequentRows:v,perLine:h})}if(!c.emojis||!c.emojis.length){b.categories.splice(a,1);continue}const{categoryIcons:u}=t;if(u){const v=u[c.id];v&&!c.icon&&(c.icon=v)}let s=c.emojis.length;for(;s--;){const v=c.emojis[s],h=v.id?v:b.emojis[v],p=()=>{c.emojis.splice(s,1)};if(!h||t.exceptEmojis&&t.exceptEmojis.includes(h.id)){p();continue}if(o&&h.version>o){p();continue}if(i&&c.id=="flags"&&!nn.includes(h.id)){p();continue}if(!h.search){if(l=!0,h.search=","+[[h.id,!1],[h.name,!0],[h.keywords,!1],[h.emoticons,!1]].map(([w,k])=>{if(w)return(Array.isArray(w)?w:[w]).map($=>(k?$.split(/[-|_|\s]+/):[$]).map(f=>f.toLowerCase())).flat()}).flat().filter(w=>w&&w.trim()).join(","),h.emoticons)for(const w of h.emoticons)b.emoticons[w]||(b.emoticons[w]=h.id);let _=0;for(const w of h.skins){if(!w)continue;_++;const{native:k}=w;k&&(b.natives[k]=h.id,h.search+=`,${k}`);const $=_==1?"":`:skin-tone-${_}:`;w.shortcodes=`:${h.id}:${$}`}}}}l&&A.reset(),dt()}function ht(t,e,n){t||(t={});const r={};for(let o in e)r[o]=ft(o,t,e,n);return r}function ft(t,e,n,r){const o=n[t];let i=r&&r.getAttribute(t)||(e[t]!=null&&e[t]!=null?e[t]:null);return o&&(i!=null&&o.value&&typeof o.value!=typeof i&&(typeof o.value=="boolean"?i=i!="false":i=o.value.constructor(i)),o.transform&&i&&(i=o.transform(i)),(i==null||o.choices&&o.choices.indexOf(i)==-1)&&(i=o.value)),i}const Zt=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;let he=null;function Qt(t){return t.id?t:b.emojis[t]||b.emojis[b.aliases[t]]||b.emojis[b.natives[t]]}function en(){he=null}async function tn(t,{maxResults:e,caller:n}={}){if(!t||!t.trim().length)return null;e||(e=90),await ne(null,{caller:n||"SearchIndex.search"});const r=t.toLowerCase().replace(/(\w)-/,"$1 ").split(/[\s|,]+/).filter((l,c,u)=>l.trim()&&u.indexOf(l)==c);if(!r.length)return;let o=he||(he=Object.values(b.emojis)),i,a;for(const l of r){if(!o.length)break;i=[],a={};for(const c of o){if(!c.search)continue;const u=c.search.indexOf(`,${l}`);u!=-1&&(i.push(c),a[c.id]||(a[c.id]=0),a[c.id]+=c.id==l?0:u+1)}o=i}return i.length<2||(i.sort((l,c)=>{const u=a[l.id],s=a[c.id];return u==s?l.id.localeCompare(c.id):u-s}),i.length>e&&(i=i.slice(0,e))),i}var A={search:tn,get:Qt,reset:en,SHORTCODES_REGEX:Zt};const nn=["checkered_flag","crossed_flags","pirate_flag","rainbow-flag","transgender_flag","triangular_flag_on_post","waving_black_flag","waving_white_flag"];function rn(t,e){return Array.isArray(t)&&Array.isArray(e)&&t.length===e.length&&t.every((n,r)=>n==e[r])}async function on(t=1){for(let e in[...Array(t).keys()])await new Promise(requestAnimationFrame)}function sn(t,{skinIndex:e=0}={}){const n=t.skins[e]||(e=0,t.skins[e]),r={id:t.id,name:t.name,native:n.native,unified:n.unified,keywords:t.keywords,shortcodes:n.shortcodes||t.shortcodes};return t.skins.length>1&&(r.skin=e+1),n.src&&(r.src=n.src),t.aliases&&t.aliases.length&&(r.aliases=t.aliases),t.emoticons&&t.emoticons.length&&(r.emoticons=t.emoticons),r}const an={activity:{outline:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:d("path",{d:"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"})}),solid:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:d("path",{d:"M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"})})},custom:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:d("path",{d:"M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"})}),flags:{outline:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:d("path",{d:"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"})}),solid:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:d("path",{d:"M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"})})},foods:{outline:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:d("path",{d:"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"})}),solid:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:d("path",{d:"M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"})})},frequent:{outline:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[d("path",{d:"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"}),d("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"})]}),solid:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:d("path",{d:"M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"})})},nature:{outline:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[d("path",{d:"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"}),d("path",{d:"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"})]}),solid:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:d("path",{d:"M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"})})},objects:{outline:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[d("path",{d:"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"}),d("path",{d:"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"})]}),solid:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:d("path",{d:"M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"})})},people:{outline:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[d("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),d("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})]}),solid:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:d("path",{d:"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"})})},places:{outline:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[d("path",{d:"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"}),d("path",{d:"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"})]}),solid:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:d("path",{d:"M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"})})},symbols:{outline:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:d("path",{d:"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"})}),solid:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:d("path",{d:"M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"})})}},cn={loupe:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:d("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"})}),delete:d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:d("path",{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"})})};var Q={categories:an,search:cn};function fe(t){let{id:e,skin:n,emoji:r}=t;if(t.shortcodes){const l=t.shortcodes.match(A.SHORTCODES_REGEX);l&&(e=l[1],l[2]&&(n=l[2]))}if(r||(r=A.get(e||t.native)),!r)return t.fallback;const o=r.skins[n-1]||r.skins[0],i=o.src||(t.set!="native"&&!t.spritesheet?typeof t.getImageURL=="function"?t.getImageURL(t.set,o.unified):`https://cdn.jsdelivr.net/npm/emoji-datasource-${t.set}@15.0.1/img/${t.set}/64/${o.unified}.png`:void 0),a=typeof t.getSpritesheetURL=="function"?t.getSpritesheetURL(t.set):`https://cdn.jsdelivr.net/npm/emoji-datasource-${t.set}@15.0.1/img/${t.set}/sheets-256/64.png`;return d("span",{class:"emoji-mart-emoji","data-emoji-set":t.set,children:i?d("img",{style:{maxWidth:t.size||"1em",maxHeight:t.size||"1em",display:"inline-block"},alt:o.native||o.shortcodes,src:i}):t.set=="native"?d("span",{style:{fontSize:t.size,fontFamily:'"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'},children:o.native}):d("span",{style:{display:"block",width:t.size,height:t.size,backgroundImage:`url(${a})`,backgroundSize:`${100*b.sheet.cols}% ${100*b.sheet.rows}%`,backgroundPosition:`${100/(b.sheet.cols-1)*o.x}% ${100/(b.sheet.rows-1)*o.y}%`}})})}const ln=typeof window<"u"&&window.HTMLElement?window.HTMLElement:Object;class pt extends ln{static get observedAttributes(){return Object.keys(this.Props)}update(e={}){for(let n in e)this.attributeChangedCallback(n,null,e[n])}attributeChangedCallback(e,n,r){if(!this.component)return;const o=ft(e,{[e]:r},this.constructor.Props,this);this.component.componentWillReceiveProps?this.component.componentWillReceiveProps({[e]:o}):(this.component.props[e]=o,this.component.forceUpdate())}disconnectedCallback(){this.disconnected=!0,this.component&&this.component.unregister&&this.component.unregister()}constructor(e={}){if(super(),this.props=e,e.parent||e.ref){let n=null;const r=e.parent||(n=e.ref&&e.ref.current);n&&(n.innerHTML=""),r&&r.appendChild(this)}}}class dn extends pt{setShadow(){this.attachShadow({mode:"open"})}injectStyles(e){if(!e)return;const n=document.createElement("style");n.textContent=e,this.shadowRoot.insertBefore(n,this.shadowRoot.firstChild)}constructor(e,{styles:n}={}){super(e),this.setShadow(),this.injectStyles(n)}}var vt={fallback:"",id:"",native:"",shortcodes:"",size:{value:"",transform:t=>/\D/.test(t)?t:`${t}px`},set:R.set,skin:R.skin};class gt extends pt{async connectedCallback(){const e=ht(this.props,vt,this);e.element=this,e.ref=n=>{this.component=n},await ne(),!this.disconnected&&st(d(fe,{...e}),this)}constructor(e){super(e)}}S(gt,"Props",vt);typeof customElements<"u"&&!customElements.get("em-emoji")&&customElements.define("em-emoji",gt);var De,pe=[],Be=g.__b,Pe=g.__r,Te=g.diffed,He=g.__c,Ae=g.unmount;function un(){var t;for(pe.sort(function(e,n){return e.__v.__b-n.__v.__b});t=pe.pop();)if(t.__P)try{t.__H.__h.forEach(G),t.__H.__h.forEach(ve),t.__H.__h=[]}catch(e){t.__H.__h=[],g.__e(e,t.__v)}}g.__b=function(t){Be&&Be(t)},g.__r=function(t){Pe&&Pe(t);var e=t.__c.__H;e&&(e.__h.forEach(G),e.__h.forEach(ve),e.__h=[])},g.diffed=function(t){Te&&Te(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(pe.push(e)!==1&&De===g.requestAnimationFrame||((De=g.requestAnimationFrame)||function(n){var r,o=function(){clearTimeout(i),Ie&&cancelAnimationFrame(r),setTimeout(n)},i=setTimeout(o,100);Ie&&(r=requestAnimationFrame(o))})(un))},g.__c=function(t,e){e.some(function(n){try{n.__h.forEach(G),n.__h=n.__h.filter(function(r){return!r.__||ve(r)})}catch(r){e.some(function(o){o.__h&&(o.__h=[])}),e=[],g.__e(r,n.__v)}}),He&&He(t,e)},g.unmount=function(t){Ae&&Ae(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{G(r)}catch(o){e=o}}),e&&g.__e(e,n.__v))};var Ie=typeof requestAnimationFrame=="function";function G(t){var e=t.__c;typeof e=="function"&&(t.__c=void 0,e())}function ve(t){t.__c=t.__()}function hn(t,e){for(var n in e)t[n]=e[n];return t}function Ve(t,e){for(var n in t)if(n!=="__source"&&!(n in e))return!0;for(var r in e)if(r!=="__source"&&t[r]!==e[r])return!0;return!1}function ee(t){this.props=t}(ee.prototype=new z).isPureReactComponent=!0,ee.prototype.shouldComponentUpdate=function(t,e){return Ve(this.props,t)||Ve(this.state,e)};var Oe=g.__b;g.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),Oe&&Oe(t)};var fn=g.__e;g.__e=function(t,e,n){if(t.then){for(var r,o=e;o=o.__;)if((r=o.__c)&&r.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),r.__c(t,e)}fn(t,e,n)};var Fe=g.unmount;function le(){this.__u=0,this.t=null,this.__b=null}function _t(t){var e=t.__.__c;return e&&e.__e&&e.__e(t)}function W(){this.u=null,this.o=null}g.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&t.__h===!0&&(t.type=null),Fe&&Fe(t)},(le.prototype=new z).__c=function(t,e){var n=e.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var o=_t(r.__v),i=!1,a=function(){i||(i=!0,n.__R=null,o?o(l):l())};n.__R=a;var l=function(){if(!--r.__u){if(r.state.__e){var u=r.state.__e;r.__v.__k[0]=function v(h,p,_){return h&&(h.__v=null,h.__k=h.__k&&h.__k.map(function(w){return v(w,p,_)}),h.__c&&h.__c.__P===p&&(h.__e&&_.insertBefore(h.__e,h.__d),h.__c.__e=!0,h.__c.__P=_)),h}(u,u.__c.__P,u.__c.__O)}var s;for(r.setState({__e:r.__b=null});s=r.t.pop();)s.forceUpdate()}},c=e.__h===!0;r.__u++||c||r.setState({__e:r.__b=r.__v.__k[0]}),t.then(a,a)},le.prototype.componentWillUnmount=function(){this.t=[]},le.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function i(a,l,c){return a&&(a.__c&&a.__c.__H&&(a.__c.__H.__.forEach(function(u){typeof u.__c=="function"&&u.__c()}),a.__c.__H=null),(a=hn({},a)).__c!=null&&(a.__c.__P===c&&(a.__c.__P=l),a.__c=null),a.__k=a.__k&&a.__k.map(function(u){return i(u,l,c)})),a}(this.__b,n,r.__O=r.__P)}this.__b=null}var o=e.__e&&de(I,null,t.fallback);return o&&(o.__h=null),[de(I,null,e.__e?null:t.children),o]};var Ne=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};(W.prototype=new z).__e=function(t){var e=this,n=_t(e.__v),r=e.o.get(t);return r[0]++,function(o){var i=function(){e.props.revealOrder?(r.push(o),Ne(e,t,r)):o()};n?n(i):i()}},W.prototype.render=function(t){this.u=null,this.o=new Map;var e=J(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},W.prototype.componentDidUpdate=W.prototype.componentDidMount=function(){var t=this;this.o.forEach(function(e,n){Ne(t,n,e)})};var pn=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,vn=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,gn=typeof document<"u",_n=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(t)};z.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(z.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var Ue=g.event;function mn(){}function bn(){return this.cancelBubble}function kn(){return this.defaultPrevented}g.event=function(t){return Ue&&(t=Ue(t)),t.persist=mn,t.isPropagationStopped=bn,t.isDefaultPrevented=kn,t.nativeEvent=t};var We={configurable:!0,get:function(){return this.class}},qe=g.vnode;g.vnode=function(t){var e=t.type,n=t.props,r=n;if(typeof e=="string"){var o=e.indexOf("-")===-1;for(var i in r={},n){var a=n[i];gn&&i==="children"&&e==="noscript"||i==="value"&&"defaultValue"in n&&a==null||(i==="defaultValue"&&"value"in n&&n.value==null?i="value":i==="download"&&a===!0?a="":/ondoubleclick/i.test(i)?i="ondblclick":/^onchange(textarea|input)/i.test(i+e)&&!_n(n.type)?i="oninput":/^onfocus$/i.test(i)?i="onfocusin":/^onblur$/i.test(i)?i="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(i)?i=i.toLowerCase():o&&vn.test(i)?i=i.replace(/[A-Z0-9]/,"-$&").toLowerCase():a===null&&(a=void 0),r[i]=a)}e=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=J(n.children).forEach(function(l){l.props.selected=r.value.indexOf(l.props.value)!=-1})),e=="select"&&r.defaultValue!=null&&(r.value=J(n.children).forEach(function(l){l.props.selected=r.multiple?r.defaultValue.indexOf(l.props.value)!=-1:r.defaultValue==l.props.value})),t.props=r,n.class!=n.className&&(We.enumerable="className"in n,n.className!=null&&(r.class=n.className),Object.defineProperty(r,"className",We))}t.$$typeof=pn,qe&&qe(t)};var Ke=g.__r;g.__r=function(t){Ke&&Ke(t),t.__c};const wn={light:"outline",dark:"solid"};class $n extends ee{renderIcon(e){const{icon:n}=e;if(n){if(n.svg)return d("span",{class:"flex",dangerouslySetInnerHTML:{__html:n.svg}});if(n.src)return d("img",{src:n.src})}const r=Q.categories[e.id]||Q.categories.custom,o=this.props.icons=="auto"?wn[this.props.theme]:this.props.icons;return r[o]||r}render(){let e=null;return d("nav",{id:"nav",class:"padding","data-position":this.props.position,dir:this.props.dir,children:d("div",{class:"flex relative",children:[this.categories.map((n,r)=>{const o=n.name||y.categories[n.id],i=!this.props.unfocused&&n.id==this.state.categoryId;return i&&(e=r),d("button",{"aria-label":o,"aria-selected":i||void 0,title:o,type:"button",class:"flex flex-grow flex-center",onMouseDown:a=>a.preventDefault(),onClick:()=>{this.props.onClick({category:n,i:r})},children:this.renderIcon(n)})}),d("div",{class:"bar",style:{width:`${100/this.categories.length}%`,opacity:e==null?0:1,transform:this.props.dir==="rtl"?`scaleX(-1) translateX(${e*100}%)`:`translateX(${e*100}%)`}})]})})}constructor(){super(),this.categories=b.categories.filter(e=>!e.target),this.state={categoryId:this.categories[0].id}}}class xn extends ee{shouldComponentUpdate(e){for(let n in e)if(n!="children"&&e[n]!=this.props[n])return!0;return!1}render(){return this.props.children}}const q={rowsPerRender:10};class yn extends z{getInitialState(e=this.props){return{skin:D.get("skin")||e.skin,theme:this.initTheme(e.theme)}}componentWillMount(){this.dir=y.rtl?"rtl":"ltr",this.refs={menu:M(),navigation:M(),scroll:M(),search:M(),searchInput:M(),skinToneButton:M(),skinToneRadio:M()},this.initGrid(),this.props.stickySearch==!1&&this.props.searchPosition=="sticky"&&(console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."),this.props.searchPosition="static")}componentDidMount(){if(this.register(),this.shadowRoot=this.base.parentNode,this.props.autoFocus){const{searchInput:e}=this.refs;e.current&&e.current.focus()}}componentWillReceiveProps(e){this.nextState||(this.nextState={});for(const n in e)this.nextState[n]=e[n];clearTimeout(this.nextStateTimer),this.nextStateTimer=setTimeout(()=>{let n=!1;for(const o in this.nextState)this.props[o]=this.nextState[o],(o==="custom"||o==="categories")&&(n=!0);delete this.nextState;const r=this.getInitialState();if(n)return this.reset(r);this.setState(r)})}componentWillUnmount(){this.unregister()}async reset(e={}){await ne(this.props),this.initGrid(),this.unobserve(),this.setState(e,()=>{this.observeCategories(),this.observeRows()})}register(){document.addEventListener("click",this.handleClickOutside),this.observe()}unregister(){var e;document.removeEventListener("click",this.handleClickOutside),(e=this.darkMedia)==null||e.removeEventListener("change",this.darkMediaCallback),this.unobserve()}observe(){this.observeCategories(),this.observeRows()}unobserve({except:e=[]}={}){Array.isArray(e)||(e=[e]);for(const n of this.observers)e.includes(n)||n.disconnect();this.observers=[].concat(e)}initGrid(){const{categories:e}=b;this.refs.categories=new Map;const n=b.categories.map(o=>o.id).join(",");this.navKey&&this.navKey!=n&&this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0),this.navKey=n,this.grid=[],this.grid.setsize=0;const r=(o,i)=>{const a=[];a.__categoryId=i.id,a.__index=o.length,this.grid.push(a);const l=this.grid.length-1,c=l%q.rowsPerRender?{}:M();return c.index=l,c.posinset=this.grid.setsize+1,o.push(c),a};for(let o of e){const i=[];let a=r(i,o);for(let l of o.emojis)a.length==this.getPerLine()&&(a=r(i,o)),this.grid.setsize+=1,a.push(l);this.refs.categories.set(o.id,{root:M(),rows:i})}}initTheme(e){if(e!="auto")return e;if(!this.darkMedia){if(this.darkMedia=matchMedia("(prefers-color-scheme: dark)"),this.darkMedia.media.match(/^not/))return"light";this.darkMedia.addEventListener("change",this.darkMediaCallback)}return this.darkMedia.matches?"dark":"light"}initDynamicPerLine(e=this.props){if(!e.dynamicWidth)return;const{element:n,emojiButtonSize:r}=e,o=()=>{const{width:a}=n.getBoundingClientRect();return Math.floor(a/r)},i=new ResizeObserver(()=>{this.unobserve({except:i}),this.setState({perLine:o()},()=>{this.initGrid(),this.forceUpdate(()=>{this.observeCategories(),this.observeRows()})})});return i.observe(n),this.observers.push(i),o()}getPerLine(){return this.state.perLine||this.props.perLine}getEmojiByPos([e,n]){const r=this.state.searchResults||this.grid,o=r[e]&&r[e][n];if(o)return A.get(o)}observeCategories(){const e=this.refs.navigation.current;if(!e)return;const n=new Map,r=a=>{a!=e.state.categoryId&&e.setState({categoryId:a})},o={root:this.refs.scroll.current,threshold:[0,1]},i=new IntersectionObserver(a=>{for(const c of a){const u=c.target.dataset.id;n.set(u,c.intersectionRatio)}const l=[...n];for(const[c,u]of l)if(u){r(c);break}},o);for(const{root:a}of this.refs.categories.values())i.observe(a.current);this.observers.push(i)}observeRows(){const e={...this.state.visibleRows},n=new IntersectionObserver(r=>{for(const o of r){const i=parseInt(o.target.dataset.index);o.isIntersecting?e[i]=!0:delete e[i]}this.setState({visibleRows:e})},{root:this.refs.scroll.current,rootMargin:`${this.props.emojiButtonSize*(q.rowsPerRender+5)}px 0px ${this.props.emojiButtonSize*q.rowsPerRender}px`});for(const{rows:r}of this.refs.categories.values())for(const o of r)o.current&&n.observe(o.current);this.observers.push(n)}preventDefault(e){e.preventDefault()}unfocusSearch(){const e=this.refs.searchInput.current;e&&e.blur()}navigate({e,input:n,left:r,right:o,up:i,down:a}){const l=this.state.searchResults||this.grid;if(!l.length)return;let[c,u]=this.state.pos;const s=(()=>{if(c==0&&u==0&&!e.repeat&&(r||i))return null;if(c==-1)return!e.repeat&&(o||a)&&n.selectionStart==n.value.length?[0,0]:null;if(r||o){let v=l[c];const h=r?-1:1;if(u+=h,!v[u]){if(c+=h,v=l[c],!v)return c=r?0:l.length-1,u=r?0:l[c].length-1,[c,u];u=r?v.length-1:0}return[c,u]}if(i||a){c+=i?-1:1;const v=l[c];return v?(v[u]||(u=v.length-1),[c,u]):(c=i?0:l.length-1,u=i?0:l[c].length-1,[c,u])}})();if(s)e.preventDefault();else{this.state.pos[0]>-1&&this.setState({pos:[-1,-1]});return}this.setState({pos:s,keyboard:!0},()=>{this.scrollTo({row:s[0]})})}scrollTo({categoryId:e,row:n}){const r=this.state.searchResults||this.grid;if(!r.length)return;const o=this.refs.scroll.current,i=o.getBoundingClientRect();let a=0;if(n>=0&&(e=r[n].__categoryId),e&&(a=(this.refs[e]||this.refs.categories.get(e).root).current.getBoundingClientRect().top-(i.top-o.scrollTop)+1),n>=0)if(!n)a=0;else{const l=r[n].__index,c=a+l*this.props.emojiButtonSize,u=c+this.props.emojiButtonSize+this.props.emojiButtonSize*.88;if(c<o.scrollTop)a=c;else if(u>o.scrollTop+i.height)a=u-i.height;else return}this.ignoreMouse(),o.scrollTop=a}ignoreMouse(){this.mouseIsIgnored=!0,clearTimeout(this.ignoreMouseTimer),this.ignoreMouseTimer=setTimeout(()=>{delete this.mouseIsIgnored},100)}handleEmojiOver(e){this.mouseIsIgnored||this.state.showSkins||this.setState({pos:e||[-1,-1],keyboard:!1})}handleEmojiClick({e,emoji:n,pos:r}){if(this.props.onEmojiSelect&&(!n&&r&&(n=this.getEmojiByPos(r)),n)){const o=sn(n,{skinIndex:this.state.skin-1});this.props.maxFrequentRows&&ct.add(o,this.props),this.props.onEmojiSelect(o,e)}}closeSkins(){this.state.showSkins&&(this.setState({showSkins:null,tempSkin:null}),this.base.removeEventListener("click",this.handleBaseClick),this.base.removeEventListener("keydown",this.handleBaseKeydown))}handleSkinMouseOver(e){this.setState({tempSkin:e})}handleSkinClick(e){this.ignoreMouse(),this.closeSkins(),this.setState({skin:e,tempSkin:null}),D.set("skin",e)}renderNav(){return d($n,{ref:this.refs.navigation,icons:this.props.icons,theme:this.state.theme,dir:this.dir,unfocused:!!this.state.searchResults,position:this.props.navPosition,onClick:this.handleCategoryClick},this.navKey)}renderPreview(){const e=this.getEmojiByPos(this.state.pos),n=this.state.searchResults&&!this.state.searchResults.length;return d("div",{id:"preview",class:"flex flex-middle",dir:this.dir,"data-position":this.props.previewPosition,children:[d("div",{class:"flex flex-middle flex-grow",children:[d("div",{class:"flex flex-auto flex-middle flex-center",style:{height:this.props.emojiButtonSize,fontSize:this.props.emojiButtonSize},children:d(fe,{emoji:e,id:n?this.props.noResultsEmoji||"cry":this.props.previewEmoji||(this.props.previewPosition=="top"?"point_down":"point_up"),set:this.props.set,size:this.props.emojiButtonSize,skin:this.state.tempSkin||this.state.skin,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})}),d("div",{class:`margin-${this.dir[0]}`,children:e||n?d("div",{class:`padding-${this.dir[2]} align-${this.dir[0]}`,children:[d("div",{class:"preview-title ellipsis",children:e?e.name:y.search_no_results_1}),d("div",{class:"preview-subtitle ellipsis color-c",children:e?e.skins[0].shortcodes:y.search_no_results_2})]}):d("div",{class:"preview-placeholder color-c",children:y.pick})})]}),!e&&this.props.skinTonePosition=="preview"&&this.renderSkinToneButton()]})}renderEmojiButton(e,{pos:n,posinset:r,grid:o}){const i=this.props.emojiButtonSize,a=this.state.tempSkin||this.state.skin,c=(e.skins[a-1]||e.skins[0]).native,u=rn(this.state.pos,n),s=n.concat(e.id).join("");return d(xn,{selected:u,skin:a,size:i,children:d("button",{"aria-label":c,"aria-selected":u||void 0,"aria-posinset":r,"aria-setsize":o.setsize,"data-keyboard":this.state.keyboard,title:this.props.previewPosition=="none"?e.name:void 0,type:"button",class:"flex flex-center flex-middle",tabindex:"-1",onClick:v=>this.handleEmojiClick({e:v,emoji:e}),onMouseEnter:()=>this.handleEmojiOver(n),onMouseLeave:()=>this.handleEmojiOver(),style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize,fontSize:this.props.emojiSize,lineHeight:0},children:[d("div",{"aria-hidden":"true",class:"background",style:{borderRadius:this.props.emojiButtonRadius,backgroundColor:this.props.emojiButtonColors?this.props.emojiButtonColors[(r-1)%this.props.emojiButtonColors.length]:void 0}}),d(fe,{emoji:e,set:this.props.set,size:this.props.emojiSize,skin:a,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})]})},s)}renderSearch(){const e=this.props.previewPosition=="none"||this.props.skinTonePosition=="search";return d("div",{children:[d("div",{class:"spacer"}),d("div",{class:"flex flex-middle",children:[d("div",{class:"search relative flex-grow",children:[d("input",{type:"search",ref:this.refs.searchInput,placeholder:y.search,onClick:this.handleSearchClick,onInput:this.handleSearchInput,onKeyDown:this.handleSearchKeyDown,autoComplete:"off"}),d("span",{class:"icon loupe flex",children:Q.search.loupe}),this.state.searchResults&&d("button",{title:"Clear","aria-label":"Clear",type:"button",class:"icon delete flex",onClick:this.clearSearch,onMouseDown:this.preventDefault,children:Q.search.delete})]}),e&&this.renderSkinToneButton()]})]})}renderSearchResults(){const{searchResults:e}=this.state;return e?d("div",{class:"category",ref:this.refs.search,children:[d("div",{class:`sticky padding-small align-${this.dir[0]}`,children:y.categories.search}),d("div",{children:e.length?e.map((n,r)=>d("div",{class:"flex",children:n.map((o,i)=>this.renderEmojiButton(o,{pos:[r,i],posinset:r*this.props.perLine+i+1,grid:e}))})):d("div",{class:`padding-small align-${this.dir[0]}`,children:this.props.onAddCustomEmoji&&d("a",{onClick:this.props.onAddCustomEmoji,children:y.add_custom})})})]}):null}renderCategories(){const{categories:e}=b,n=!!this.state.searchResults,r=this.getPerLine();return d("div",{style:{visibility:n?"hidden":void 0,display:n?"none":void 0,height:"100%"},children:e.map(o=>{const{root:i,rows:a}=this.refs.categories.get(o.id);return d("div",{"data-id":o.target?o.target.id:o.id,class:"category",ref:i,children:[d("div",{class:`sticky padding-small align-${this.dir[0]}`,children:o.name||y.categories[o.id]}),d("div",{class:"relative",style:{height:a.length*this.props.emojiButtonSize},children:a.map((l,c)=>{const u=l.index-l.index%q.rowsPerRender,s=this.state.visibleRows[u],v="current"in l?l:void 0;if(!s&&!v)return null;const h=c*r,p=h+r,_=o.emojis.slice(h,p);return _.length<r&&_.push(...new Array(r-_.length)),d("div",{"data-index":l.index,ref:v,class:"flex row",style:{top:c*this.props.emojiButtonSize},children:s&&_.map((w,k)=>{if(!w)return d("div",{style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize}});const $=A.get(w);return this.renderEmojiButton($,{pos:[l.index,k],posinset:l.posinset+k,grid:this.grid})})},l.index)})})]})})})}renderSkinToneButton(){return this.props.skinTonePosition=="none"?null:d("div",{class:"flex flex-auto flex-center flex-middle",style:{position:"relative",width:this.props.emojiButtonSize,height:this.props.emojiButtonSize},children:d("button",{type:"button",ref:this.refs.skinToneButton,class:"skin-tone-button flex flex-auto flex-center flex-middle","aria-selected":this.state.showSkins?"":void 0,"aria-label":y.skins.choose,title:y.skins.choose,onClick:this.openSkins,style:{width:this.props.emojiSize,height:this.props.emojiSize},children:d("span",{class:`skin-tone skin-tone-${this.state.skin}`})})})}renderLiveRegion(){const e=this.getEmojiByPos(this.state.pos),n=e?e.name:"";return d("div",{"aria-live":"polite",class:"sr-only",children:n})}renderSkins(){const n=this.refs.skinToneButton.current.getBoundingClientRect(),r=this.base.getBoundingClientRect(),o={};return this.dir=="ltr"?o.right=r.right-n.right-3:o.left=n.left-r.left-3,this.props.previewPosition=="bottom"&&this.props.skinTonePosition=="preview"?o.bottom=r.bottom-n.top+6:(o.top=n.bottom-r.top+3,o.bottom="auto"),d("div",{ref:this.refs.menu,role:"radiogroup",dir:this.dir,"aria-label":y.skins.choose,class:"menu hidden","data-position":o.top?"top":"bottom",style:o,children:[...Array(6).keys()].map(i=>{const a=i+1,l=this.state.skin==a;return d("div",{children:[d("input",{type:"radio",name:"skin-tone",value:a,"aria-label":y.skins[a],ref:l?this.refs.skinToneRadio:null,defaultChecked:l,onChange:()=>this.handleSkinMouseOver(a),onKeyDown:c=>{(c.code=="Enter"||c.code=="Space"||c.code=="Tab")&&(c.preventDefault(),this.handleSkinClick(a))}}),d("button",{"aria-hidden":"true",tabindex:"-1",onClick:()=>this.handleSkinClick(a),onMouseEnter:()=>this.handleSkinMouseOver(a),onMouseLeave:()=>this.handleSkinMouseOver(),class:"option flex flex-grow flex-middle",children:[d("span",{class:`skin-tone skin-tone-${a}`}),d("span",{class:"margin-small-lr",children:y.skins[a]})]})]})})})}render(){const e=this.props.perLine*this.props.emojiButtonSize;return d("section",{id:"root",class:"flex flex-column",dir:this.dir,style:{width:this.props.dynamicWidth?"100%":`calc(${e}px + (var(--padding) + var(--sidebar-width)))`},"data-emoji-set":this.props.set,"data-theme":this.state.theme,"data-menu":this.state.showSkins?"":void 0,children:[this.props.previewPosition=="top"&&this.renderPreview(),this.props.navPosition=="top"&&this.renderNav(),this.props.searchPosition=="sticky"&&d("div",{class:"padding-lr",children:this.renderSearch()}),d("div",{ref:this.refs.scroll,class:"scroll flex-grow padding-lr",children:d("div",{style:{width:this.props.dynamicWidth?"100%":e,height:"100%"},children:[this.props.searchPosition=="static"&&this.renderSearch(),this.renderSearchResults(),this.renderCategories()]})}),this.props.navPosition=="bottom"&&this.renderNav(),this.props.previewPosition=="bottom"&&this.renderPreview(),this.state.showSkins&&this.renderSkins(),this.renderLiveRegion()]})}constructor(e){super(),S(this,"darkMediaCallback",()=>{this.props.theme=="auto"&&this.setState({theme:this.darkMedia.matches?"dark":"light"})}),S(this,"handleClickOutside",n=>{const{element:r}=this.props;n.target!=r&&(this.state.showSkins&&this.closeSkins(),this.props.onClickOutside&&this.props.onClickOutside(n))}),S(this,"handleBaseClick",n=>{this.state.showSkins&&(n.target.closest(".menu")||(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins()))}),S(this,"handleBaseKeydown",n=>{this.state.showSkins&&n.key=="Escape"&&(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins())}),S(this,"handleSearchClick",()=>{this.getEmojiByPos(this.state.pos)&&this.setState({pos:[-1,-1]})}),S(this,"handleSearchInput",async()=>{const n=this.refs.searchInput.current;if(!n)return;const{value:r}=n,o=await A.search(r),i=()=>{this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0)};if(!o)return this.setState({searchResults:o,pos:[-1,-1]},i);const a=n.selectionStart==n.value.length?[0,0]:[-1,-1],l=[];l.setsize=o.length;let c=null;for(let u of o)(!l.length||c.length==this.getPerLine())&&(c=[],c.__categoryId="search",c.__index=l.length,l.push(c)),c.push(u);this.ignoreMouse(),this.setState({searchResults:l,pos:a},i)}),S(this,"handleSearchKeyDown",n=>{const r=n.currentTarget;switch(n.stopImmediatePropagation(),n.key){case"ArrowLeft":this.navigate({e:n,input:r,left:!0});break;case"ArrowRight":this.navigate({e:n,input:r,right:!0});break;case"ArrowUp":this.navigate({e:n,input:r,up:!0});break;case"ArrowDown":this.navigate({e:n,input:r,down:!0});break;case"Enter":n.preventDefault(),this.handleEmojiClick({e:n,pos:this.state.pos});break;case"Escape":n.preventDefault(),this.state.searchResults?this.clearSearch():this.unfocusSearch();break}}),S(this,"clearSearch",()=>{const n=this.refs.searchInput.current;n&&(n.value="",n.focus(),this.handleSearchInput())}),S(this,"handleCategoryClick",({category:n,i:r})=>{this.scrollTo(r==0?{row:-1}:{categoryId:n.id})}),S(this,"openSkins",n=>{const{currentTarget:r}=n,o=r.getBoundingClientRect();this.setState({showSkins:o},async()=>{await on(2);const i=this.refs.menu.current;i&&(i.classList.remove("hidden"),this.refs.skinToneRadio.current.focus(),this.base.addEventListener("click",this.handleBaseClick,!0),this.base.addEventListener("keydown",this.handleBaseKeydown,!0))})}),this.observers=[],this.state={pos:[-1,-1],perLine:this.initDynamicPerLine(e),visibleRows:{0:!0},...this.getInitialState(e)}}}class re extends dn{async connectedCallback(){const e=ht(this.props,R,this);e.element=this,e.ref=n=>{this.component=n},await ne(e),!this.disconnected&&st(d(yn,{...e}),this.shadowRoot)}constructor(e){super(e,{styles:Ge(mt)})}}S(re,"Props",R);typeof customElements<"u"&&!customElements.get("em-emoji-picker")&&customElements.define("em-emoji-picker",re);var mt={};mt=`:host {
  width: min-content;
  height: 435px;
  min-height: 230px;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  --border-radius: 10px;
  --category-icon-size: 18px;
  --font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
  --font-size: 15px;
  --preview-placeholder-size: 21px;
  --preview-title-size: 1.1em;
  --preview-subtitle-size: .9em;
  --shadow-color: 0deg 0% 0%;
  --shadow: .3px .5px 2.7px hsl(var(--shadow-color) / .14), .4px .8px 1px -3.2px hsl(var(--shadow-color) / .14), 1px 2px 2.5px -4.5px hsl(var(--shadow-color) / .14);
  display: flex;
}

[data-theme="light"] {
  --em-rgb-color: var(--rgb-color, 34, 36, 39);
  --em-rgb-accent: var(--rgb-accent, 34, 102, 237);
  --em-rgb-background: var(--rgb-background, 255, 255, 255);
  --em-rgb-input: var(--rgb-input, 255, 255, 255);
  --em-color-border: var(--color-border, rgba(0, 0, 0, .05));
  --em-color-border-over: var(--color-border-over, rgba(0, 0, 0, .1));
}

[data-theme="dark"] {
  --em-rgb-color: var(--rgb-color, 222, 222, 221);
  --em-rgb-accent: var(--rgb-accent, 58, 130, 247);
  --em-rgb-background: var(--rgb-background, 21, 22, 23);
  --em-rgb-input: var(--rgb-input, 0, 0, 0);
  --em-color-border: var(--color-border, rgba(255, 255, 255, .1));
  --em-color-border-over: var(--color-border-over, rgba(255, 255, 255, .2));
}

#root {
  --color-a: rgb(var(--em-rgb-color));
  --color-b: rgba(var(--em-rgb-color), .65);
  --color-c: rgba(var(--em-rgb-color), .45);
  --padding: 12px;
  --padding-small: calc(var(--padding) / 2);
  --sidebar-width: 16px;
  --duration: 225ms;
  --duration-fast: 125ms;
  --duration-instant: 50ms;
  --easing: cubic-bezier(.4, 0, .2, 1);
  width: 100%;
  text-align: left;
  border-radius: var(--border-radius);
  background-color: rgb(var(--em-rgb-background));
  position: relative;
}

@media (prefers-reduced-motion) {
  #root {
    --duration: 0;
    --duration-fast: 0;
    --duration-instant: 0;
  }
}

#root[data-menu] button {
  cursor: auto;
}

#root[data-menu] .menu button {
  cursor: pointer;
}

:host, #root, input, button {
  color: rgb(var(--em-rgb-color));
  font-family: var(--font-family);
  font-size: var(--font-size);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: normal;
}

*, :before, :after {
  box-sizing: border-box;
  min-width: 0;
  margin: 0;
  padding: 0;
}

.relative {
  position: relative;
}

.flex {
  display: flex;
}

.flex-auto {
  flex: none;
}

.flex-center {
  justify-content: center;
}

.flex-column {
  flex-direction: column;
}

.flex-grow {
  flex: auto;
}

.flex-middle {
  align-items: center;
}

.flex-wrap {
  flex-wrap: wrap;
}

.padding {
  padding: var(--padding);
}

.padding-t {
  padding-top: var(--padding);
}

.padding-lr {
  padding-left: var(--padding);
  padding-right: var(--padding);
}

.padding-r {
  padding-right: var(--padding);
}

.padding-small {
  padding: var(--padding-small);
}

.padding-small-b {
  padding-bottom: var(--padding-small);
}

.padding-small-lr {
  padding-left: var(--padding-small);
  padding-right: var(--padding-small);
}

.margin {
  margin: var(--padding);
}

.margin-r {
  margin-right: var(--padding);
}

.margin-l {
  margin-left: var(--padding);
}

.margin-small-l {
  margin-left: var(--padding-small);
}

.margin-small-lr {
  margin-left: var(--padding-small);
  margin-right: var(--padding-small);
}

.align-l {
  text-align: left;
}

.align-r {
  text-align: right;
}

.color-a {
  color: var(--color-a);
}

.color-b {
  color: var(--color-b);
}

.color-c {
  color: var(--color-c);
}

.ellipsis {
  white-space: nowrap;
  max-width: 100%;
  width: auto;
  text-overflow: ellipsis;
  overflow: hidden;
}

.sr-only {
  width: 1px;
  height: 1px;
  position: absolute;
  top: auto;
  left: -10000px;
  overflow: hidden;
}

a {
  cursor: pointer;
  color: rgb(var(--em-rgb-accent));
}

a:hover {
  text-decoration: underline;
}

.spacer {
  height: 10px;
}

[dir="rtl"] .scroll {
  padding-left: 0;
  padding-right: var(--padding);
}

.scroll {
  padding-right: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

.scroll::-webkit-scrollbar {
  width: var(--sidebar-width);
  height: var(--sidebar-width);
}

.scroll::-webkit-scrollbar-track {
  border: 0;
}

.scroll::-webkit-scrollbar-button {
  width: 0;
  height: 0;
  display: none;
}

.scroll::-webkit-scrollbar-corner {
  background-color: rgba(0, 0, 0, 0);
}

.scroll::-webkit-scrollbar-thumb {
  min-height: 20%;
  min-height: 65px;
  border: 4px solid rgb(var(--em-rgb-background));
  border-radius: 8px;
}

.scroll::-webkit-scrollbar-thumb:hover {
  background-color: var(--em-color-border-over) !important;
}

.scroll:hover::-webkit-scrollbar-thumb {
  background-color: var(--em-color-border);
}

.sticky {
  z-index: 1;
  background-color: rgba(var(--em-rgb-background), .9);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  font-weight: 500;
  position: sticky;
  top: -1px;
}

[dir="rtl"] .search input[type="search"] {
  padding: 10px 2.2em 10px 2em;
}

[dir="rtl"] .search .loupe {
  left: auto;
  right: .7em;
}

[dir="rtl"] .search .delete {
  left: .7em;
  right: auto;
}

.search {
  z-index: 2;
  position: relative;
}

.search input, .search button {
  font-size: calc(var(--font-size)  - 1px);
}

.search input[type="search"] {
  width: 100%;
  background-color: var(--em-color-border);
  transition-duration: var(--duration);
  transition-property: background-color, box-shadow;
  transition-timing-function: var(--easing);
  border: 0;
  border-radius: 10px;
  outline: 0;
  padding: 10px 2em 10px 2.2em;
  display: block;
}

.search input[type="search"]::-ms-input-placeholder {
  color: inherit;
  opacity: .6;
}

.search input[type="search"]::placeholder {
  color: inherit;
  opacity: .6;
}

.search input[type="search"], .search input[type="search"]::-webkit-search-decoration, .search input[type="search"]::-webkit-search-cancel-button, .search input[type="search"]::-webkit-search-results-button, .search input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
}

.search input[type="search"]:focus {
  background-color: rgb(var(--em-rgb-input));
  box-shadow: inset 0 0 0 1px rgb(var(--em-rgb-accent)), 0 1px 3px rgba(65, 69, 73, .2);
}

.search .icon {
  z-index: 1;
  color: rgba(var(--em-rgb-color), .7);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.search .loupe {
  pointer-events: none;
  left: .7em;
}

.search .delete {
  right: .7em;
}

svg {
  fill: currentColor;
  width: 1em;
  height: 1em;
}

button {
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  cursor: pointer;
  color: currentColor;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
}

#nav {
  z-index: 2;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: var(--sidebar-width);
  position: relative;
}

#nav button {
  color: var(--color-b);
  transition: color var(--duration) var(--easing);
}

#nav button:hover {
  color: var(--color-a);
}

#nav svg, #nav img {
  width: var(--category-icon-size);
  height: var(--category-icon-size);
}

#nav[dir="rtl"] .bar {
  left: auto;
  right: 0;
}

#nav .bar {
  width: 100%;
  height: 3px;
  background-color: rgb(var(--em-rgb-accent));
  transition: transform var(--duration) var(--easing);
  border-radius: 3px 3px 0 0;
  position: absolute;
  bottom: -12px;
  left: 0;
}

#nav button[aria-selected] {
  color: rgb(var(--em-rgb-accent));
}

#preview {
  z-index: 2;
  padding: calc(var(--padding)  + 4px) var(--padding);
  padding-right: var(--sidebar-width);
  position: relative;
}

#preview .preview-placeholder {
  font-size: var(--preview-placeholder-size);
}

#preview .preview-title {
  font-size: var(--preview-title-size);
}

#preview .preview-subtitle {
  font-size: var(--preview-subtitle-size);
}

#nav:before, #preview:before {
  content: "";
  height: 2px;
  position: absolute;
  left: 0;
  right: 0;
}

#nav[data-position="top"]:before, #preview[data-position="top"]:before {
  background: linear-gradient(to bottom, var(--em-color-border), transparent);
  top: 100%;
}

#nav[data-position="bottom"]:before, #preview[data-position="bottom"]:before {
  background: linear-gradient(to top, var(--em-color-border), transparent);
  bottom: 100%;
}

.category:last-child {
  min-height: calc(100% + 1px);
}

.category button {
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif;
  position: relative;
}

.category button > * {
  position: relative;
}

.category button .background {
  opacity: 0;
  background-color: var(--em-color-border);
  transition: opacity var(--duration-fast) var(--easing) var(--duration-instant);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.category button:hover .background {
  transition-duration: var(--duration-instant);
  transition-delay: 0s;
}

.category button[aria-selected] .background {
  opacity: 1;
}

.category button[data-keyboard] .background {
  transition: none;
}

.row {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.skin-tone-button {
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 100%;
}

.skin-tone-button:hover {
  border-color: var(--em-color-border);
}

.skin-tone-button:active .skin-tone {
  transform: scale(.85) !important;
}

.skin-tone-button .skin-tone {
  transition: transform var(--duration) var(--easing);
}

.skin-tone-button[aria-selected] {
  background-color: var(--em-color-border);
  border-top-color: rgba(0, 0, 0, .05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-width: 0;
  border-right-width: 0;
}

.skin-tone-button[aria-selected] .skin-tone {
  transform: scale(.9);
}

.menu {
  z-index: 2;
  white-space: nowrap;
  border: 1px solid var(--em-color-border);
  background-color: rgba(var(--em-rgb-background), .9);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  transition-property: opacity, transform;
  transition-duration: var(--duration);
  transition-timing-function: var(--easing);
  border-radius: 10px;
  padding: 4px;
  position: absolute;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, .05);
}

.menu.hidden {
  opacity: 0;
}

.menu[data-position="bottom"] {
  transform-origin: 100% 100%;
}

.menu[data-position="bottom"].hidden {
  transform: scale(.9)rotate(-3deg)translateY(5%);
}

.menu[data-position="top"] {
  transform-origin: 100% 0;
}

.menu[data-position="top"].hidden {
  transform: scale(.9)rotate(3deg)translateY(-5%);
}

.menu input[type="radio"] {
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  border: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  overflow: hidden;
}

.menu input[type="radio"]:checked + .option {
  box-shadow: 0 0 0 2px rgb(var(--em-rgb-accent));
}

.option {
  width: 100%;
  border-radius: 6px;
  padding: 4px 6px;
}

.option:hover {
  color: #fff;
  background-color: rgb(var(--em-rgb-accent));
}

.skin-tone {
  width: 16px;
  height: 16px;
  border-radius: 100%;
  display: inline-block;
  position: relative;
  overflow: hidden;
}

.skin-tone:after {
  content: "";
  mix-blend-mode: overlay;
  background: linear-gradient(rgba(255, 255, 255, .2), rgba(0, 0, 0, 0));
  border: 1px solid rgba(0, 0, 0, .8);
  border-radius: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: inset 0 -2px 3px #000, inset 0 1px 2px #fff;
}

.skin-tone-1 {
  background-color: #ffc93a;
}

.skin-tone-2 {
  background-color: #ffdab7;
}

.skin-tone-3 {
  background-color: #e7b98f;
}

.skin-tone-4 {
  background-color: #c88c61;
}

.skin-tone-5 {
  background-color: #a46134;
}

.skin-tone-6 {
  background-color: #5d4437;
}

[data-index] {
  justify-content: space-between;
}

[data-emoji-set="twitter"] .skin-tone:after {
  box-shadow: none;
  border-color: rgba(0, 0, 0, .5);
}

[data-emoji-set="twitter"] .skin-tone-1 {
  background-color: #fade72;
}

[data-emoji-set="twitter"] .skin-tone-2 {
  background-color: #f3dfd0;
}

[data-emoji-set="twitter"] .skin-tone-3 {
  background-color: #eed3a8;
}

[data-emoji-set="twitter"] .skin-tone-4 {
  background-color: #cfad8d;
}

[data-emoji-set="twitter"] .skin-tone-5 {
  background-color: #a8805d;
}

[data-emoji-set="twitter"] .skin-tone-6 {
  background-color: #765542;
}

[data-emoji-set="google"] .skin-tone:after {
  box-shadow: inset 0 0 2px 2px rgba(0, 0, 0, .4);
}

[data-emoji-set="google"] .skin-tone-1 {
  background-color: #f5c748;
}

[data-emoji-set="google"] .skin-tone-2 {
  background-color: #f1d5aa;
}

[data-emoji-set="google"] .skin-tone-3 {
  background-color: #d4b48d;
}

[data-emoji-set="google"] .skin-tone-4 {
  background-color: #aa876b;
}

[data-emoji-set="google"] .skin-tone-5 {
  background-color: #916544;
}

[data-emoji-set="google"] .skin-tone-6 {
  background-color: #61493f;
}

[data-emoji-set="facebook"] .skin-tone:after {
  border-color: rgba(0, 0, 0, .4);
  box-shadow: inset 0 -2px 3px #000, inset 0 1px 4px #fff;
}

[data-emoji-set="facebook"] .skin-tone-1 {
  background-color: #f5c748;
}

[data-emoji-set="facebook"] .skin-tone-2 {
  background-color: #f1d5aa;
}

[data-emoji-set="facebook"] .skin-tone-3 {
  background-color: #d4b48d;
}

[data-emoji-set="facebook"] .skin-tone-4 {
  background-color: #aa876b;
}

[data-emoji-set="facebook"] .skin-tone-5 {
  background-color: #916544;
}

[data-emoji-set="facebook"] .skin-tone-6 {
  background-color: #61493f;
}

`;function Cn(t){const e=E.useRef(null),n=E.useRef(null);return n.current&&n.current.update(t),E.useEffect(()=>(n.current=new re({...t,ref:e}),()=>{n.current=null}),[]),$t.createElement("div",{ref:e})}new re({data:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data")).json()});function er({story:t,bucketsData:e=[],index:n=0}){var be;const{ti:r,language:o}=zt(),{message:i}=xt.useApp(),a=xe(ye.profile),l=xe(ye.darkMode),[c,u]=Mt("RecentStoryViewer.buckets."+t.bucket_id,e),[s,v]=E.useState(n),[h,p]=E.useState(!1),[_,w]=E.useState(!1),[k,$]=E.useState(!1),f=c[s]||c[0],P=s<c.length-1,C=s>0,T=c.length===0&&!h,bt=t.owner.id===(a==null?void 0:a.uid),ie=E.useRef(!1);E.useEffect(()=>{_e()},[]);const _e=(j=!1)=>{console.log(t),t.bucket_id&&!ie.current&&(!c.length||j)&&(Ce("RecentStoryViewer:onClickReload"),p(!0),ie.current=!0,console.log(t),Ct(t.bucket_id).then(H=>{H&&(console.log(t,H),u(H),v(0))}).finally(()=>{ie.current=!1,p(!1)}))},kt=async j=>{if(!await Dt())return;const H=f==null?void 0:f.id;if(!H)return;const ke="RecentStoryViewer:onClickReactStory";Ce(ke);const oe=ke+Bt();try{if(i.loading({key:oe,duration:0,content:r({en:"Reacting...",vi:"Đang thả cảm xúc..."})+j}),await St(H,j))i.success({key:oe,content:r({en:"React success: ",vi:"Thả cảm xúc thành công: "})+j}),u(wt=>yt(wt,$e=>{$e[s]&&$e[s].reactions.push({uid:a.uid,reaction:j})}));else throw new Error("Failed to react story")}catch(we){i.error({key:oe,content:r({en:"React failed: ",vi:"Thả cảm xúc lỗi: "})+we.message})}},O={height:"70vh",width:"calc(70vh * 9 / 16)",borderRadius:10,objectFit:"contain"},me=f!=null&&f.seen?m.jsx("span",{children:"👀"}):m.jsx("i",{className:"fa fa-eye-slash",style:{color:"gray"}});return m.jsxs(B,{direction:"vertical",style:{maxHeight:"100vh",overflowY:"auto",overflowX:"hidden",minWidth:O.width,minHeight:O.height,background:l?"#222":"#eee",color:l?"white":"#111",padding:"10px 10px 30px",borderRadius:10},children:[m.jsxs(N.Text,{children:["Story Viewer (",s+1,"/",c.length,")"]}),h&&m.jsxs("div",{children:[m.jsx("i",{className:"fa fa-spinner fa-spin"})," ",r({en:"Loading...",vi:"Đang tải..."})]}),T&&m.jsxs(B,{children:["No data",m.jsx("br",{}),m.jsx(F,{icon:m.jsx("i",{className:"fa fa-refresh"}),onClick:()=>_e(!0),children:r({en:"Reload",vi:"Làm mới"})})]}),f&&m.jsxs(B,{children:[m.jsx(F,{disabled:!C,onClick:()=>{v(s-1)},children:m.jsx("i",{className:"fa fa-chevron-left"})}),m.jsxs(B,{direction:"vertical",children:[m.jsx(Et,{placement:"bottom",title:m.jsxs(m.Fragment,{children:[me," ",t.owner.name,f!=null&&f.seen?r({en:" KNOWS you saw",vi:" BIẾT bạn đã xem"}):r({en:" DOESN'T know you saw",vi:" KHÔNG biết bạn đã xem"})]}),children:m.jsxs(N.Text,{children:[me," ",Rt((f==null?void 0:f.creation_time)*1e3)," ",r({vi:"trước",en:"ago"})," - ",f==null?void 0:f.react_count," reactions"," ",f==null?void 0:f.reaction]})}),bt?m.jsxs(F,{type:"default",onClick:()=>w(!_),children:[m.jsx("i",{className:"fa fa-eye"})," ",f==null?void 0:f.view_count," ",r({vi:"Lượt xem",en:"Views"})]}):null,(f==null?void 0:f.caption)&&m.jsx(N.Text,{children:f==null?void 0:f.caption}),_?m.jsx(B,{style:{width:450,height:O.height,overflowY:"auto",overflowX:"hidden"},direction:"vertical",children:m.jsx(jt,{storyId:f==null?void 0:f.id})}):m.jsxs(B,{direction:"vertical",style:{position:"relative"},children:[f!=null&&f.video?m.jsx(Pt,{src:f==null?void 0:f.video,style:O}):m.jsx(Tt,{src:f==null?void 0:f.image,fallback:f==null?void 0:f.thumbnail,style:O}),m.jsx(B,{direction:"vertical",align:"start",style:{background:"linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",position:"absolute",top:0,left:0,padding:10,width:"100%",paddingBottom:"50px",borderRadius:10},children:m.jsxs(N.Link,{target:"_blank",href:Lt(t.owner.id),children:[m.jsx(Ht,{src:t.owner.avatar,size:40,style:{borderWidth:4,borderColor:"#0866FF",marginRight:10}}),m.jsx(N.Text,{style:{color:"#eee"},children:t.owner.name})]})}),(be=f==null?void 0:f.reactions)!=null&&be.length?m.jsxs("p",{style:{marginLeft:50},children:[f==null?void 0:f.reactions.map(j=>j.reaction),r({en:" sent to ",vi:" đã gửi cho "}),t.owner.name]}):null,m.jsxs(F,{onClick:()=>$(!k),children:[m.jsx("i",{className:"fa fa-smile"})," ",r({en:"Add reactions",vi:"Thả cảm xúc"})]}),k?m.jsx("div",{style:{display:"flex",justifyContent:"center"},children:m.jsx(Cn,{theme:l?"dark":"light",locale:o,onEmojiSelect:j=>kt(j.native)})}):null]})]}),m.jsx(F,{disabled:!P,onClick:()=>{v(s+1)},children:m.jsx("i",{className:"fa fa-chevron-right"})})]})]})}export{er as default};
