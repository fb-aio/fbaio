import{r as s,au as l,ao as n,ap as o}from"./index-BMt573o-.js";import{u as r,t as g}from"./MyApp-BLkEK8ns.js";import{D as u}from"./index-Dgnzabie.js";import"./Dropdown-BG45bl_n.js";import"./PurePanel-Bg4K3ok6.js";const i=[{key:"vi",label:"🇻🇳 Tiếng việt"},{key:"en",label:"🇬🇧 English"}];function k(){const{i18n:a}=r();s.useEffect(()=>{l().locale(a.language)},[a.language]);const t=e=>{g("LanguagePicker:handleChangeLanguage:"+e.key),localStorage.lang=e.key,a.changeLanguage(e.key)};return n.jsx(u,{menu:{selectable:!0,items:i,defaultSelectedKeys:[a.language||localStorage.lang||"en"],onClick:t},arrow:!0,children:n.jsx(o,{icon:n.jsx("i",{className:"fa-solid fa-earth-americas"})})})}export{k as default};