const __vite__fileDeps=["./RecentStories-KzVKJJYt.js","./index-DOOTCcHC.js","./index-BM_p-30O.css","./MyApp-C1Cge4LI.js","./Collection-J0vJyBVX.js","./index-Cs-LNwoF.js","./file-download-Dycc4scI.js","./useCacheState-Bvty8fNQ.js","./index-9LEuxGJt.js","./Dropdown-uE1te4Kd.js","./PurePanel-qusS7nQi.js","./index-CCWRB7N3.js","./TextArea-D20a544N.js","./addEventListener-wLIjlol3.js","./index-DBKoNkzi.js","./Pagination-CV8j8exz.js","./useBreakpoint-DW8QQd81.js","./responsiveObserver-CeUCIo-a.js","./row-BE6NqmDN.js","./stories-WJaj-oZL.js","./index-BhyrVf84.js","./index-CbAUgUyr.js","./index-sMO--aLY.js","./index-Ddw3Kq44.js","./styleChecker-B0mu7QsQ.js","./ArchivedStories-fBM30qTy.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{aq as e,r as i,au as a}from"./index-DOOTCcHC.js";import{a as o,S as l}from"./MyApp-C1Cge4LI.js";import{T as c}from"./index-Ca7Kc3Y2.js";import"./Dropdown-uE1te4Kd.js";const n=i.lazy(()=>a(()=>import("./RecentStories-KzVKJJYt.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]),import.meta.url)),d=i.lazy(()=>a(()=>import("./ArchivedStories-fBM30qTy.js"),__vite__mapDeps([25,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,23,24]),import.meta.url)),r={Recent:"recent",Archived:"archived"};function v(){const{ti:t}=o(),s=[{key:r.Recent,label:t({en:"Today",vi:"Hôm nay"}),closable:!1,children:e.jsx(n,{})},{key:r.Archived,label:t({en:"Archived",vi:"Kho lưu trữ"}),closable:!1,children:e.jsx(d,{})}];return e.jsxs(l,{direction:"vertical",style:{width:"100%"},children:[e.jsx("h1",{style:{textAlign:"left"},children:t({en:"Story",vi:"Tin"})}),e.jsx(c,{hideAdd:!0,type:"editable-card",items:s})]})}export{v as default};