import{r as o,av as a}from"./index-Dtcmp6JY.js";import{u as I,a as E}from"./index-C9OcZAjD.js";import{c as T,u as L}from"./MyApp-kb2kLbdm.js";function V({disabled:i,children:R,next:r,hasNext:l,prev:n,hasPrev:h,loader:g,endMessage:v,prevLoader:k,prevEndMessage:d}){const{message:t}=T(),{ti:c}=L(),{isIntersecting:m,ref:j}=I(),{isIntersecting:x,ref:p}=I();E(()=>{F(),y()},1e3),o.useLayoutEffect(()=>{F()},[x]),o.useLayoutEffect(()=>{y()},[m]);const f=o.useRef(!1),F=()=>{if(!i&&x&&!f.current){f.current=!0;const e="checkFetchNext";t.loading({key:e,content:c({en:"Fetching next...",vi:"Đang tải tiếp theo..."}),duration:0}),r==null||r().then(()=>{t.success({key:e,content:c({en:"Fetch success",vi:"Tải xong"})})}).catch(s=>{t.error({key:e,content:c({en:"Fetch failed: ",vi:"Tải lỗi: "})+s.message}),console.log(s)}).finally(()=>{f.current=!1})}},u=o.useRef(!1),y=()=>{if(!i&&m&&!u.current){u.current=!0;const e="checkFetchPrev";t.loading({key:e,content:c({en:"Fetching previous...",vi:"Đang tải trước đó..."}),duration:0}),n==null||n().then(()=>{t.success({key:e,content:c({en:"Fetch success",vi:"Tải xong"})})}).catch(s=>{t.error({key:e,content:c({en:"Fetch failed: ",vi:"Tải lỗi: "})+s.message}),console.log(s)}).finally(()=>{u.current=!1})}};return a.jsxs("div",{style:{flex:1},children:[n&&h&&!i&&a.jsx("div",{ref:j,children:k||g}),n&&!h&&(d||v),R,r&&l&&!i&&a.jsx("div",{ref:p,children:g}),!l&&v]})}export{V as default};
