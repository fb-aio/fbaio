import{r as t,q as c}from"./index-DjNgLHmn.js";import{u as a}from"./responsiveObserver-CGsauEKo.js";function f(){const[,r]=t.useReducer(e=>e+1,0);return r}function m(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;const e=t.useRef({}),n=f(),s=a();return c(()=>{const u=s.subscribe(o=>{e.current=o,r&&n()});return()=>s.unsubscribe(u)},[]),e.current}export{m as a,f as u};
