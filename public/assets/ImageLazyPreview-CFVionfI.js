import{ay as L,r as f,aA as h}from"./index-DjNgLHmn.js";import{u as x,x as k,A as C}from"./MyApp-DK69-3iP.js";import{I}from"./index-E6wTmUh-.js";import"./EyeOutlined-CkbEv_yO.js";import"./addEventListener-D1m6mSJD.js";function z(g){const{cacheId:p,getPreview:y,renderPreview:s,...a}=g,{message:n}=L.useApp(),{ti:c}=x(),r=a.src||"",o="ImageLazyPreview."+(p||r),[d,i]=f.useState(!1),[l,u]=f.useState(k(o,"")),w=async()=>{if(!l)try{i(!0),n.loading({duration:0,key:o,content:c({en:"Loading...",vi:"Đang tải..."})});let t=performance.now();const e=await y();let v=performance.now();console.log("getPreview",v-t),e&&e!==r&&(u(e),C(o,e)),n.destroy(o)}catch(t){console.error(t),n.error({key:o,content:c({en:"Load failed: ",vi:"Load lỗi: "})+t.message})}finally{i(!1)}},m=l||r;return h.jsx(I,{...a,preview:typeof s=="function"?s(m,d):{src:m},onClick:t=>{var e;(e=a.onClick)==null||e.call(a,t),w()}})}export{z as default};
