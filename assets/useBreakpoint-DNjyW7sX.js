import{r as t,p as c}from"./index-CX461bZ7.js";import{u as a}from"./responsiveObserver-DUYzmFPe.js";function f(){const[,r]=t.useReducer(e=>e+1,0);return r}function m(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;const e=t.useRef({}),n=f(),s=a();return c(()=>{const u=s.subscribe(o=>{e.current=o,r&&n()});return()=>s.unsubscribe(u)},[]),e.current}export{m as a,f as u};