const __vite__fileDeps=["./RecentStories-BVVI7j-x.js","./index-CWHWDdhg.js","./index-DjlRUb8J.css","./MyApp-DiD1gO8G.js","./Collection-B57Hh8_V.js","./index-B1Q6nZGX.js","./file-download-CQfrbO-d.js","./index-CYj5WurI.js","./Dropdown-8qusH5Hu.js","./PurePanel-CMHkUot4.js","./index-BKlkw6_z.js","./index-CuG7pCf6.js","./index-BMAX8IRk.js","./index-DjBDOqYF.js","./addEventListener-Dp_BcOaT.js","./index-CKhQW3B4.js","./index-BoAKsnJq.js","./Pagination-CXPcNn_5.js","./useBreakpoint-C9pck-6k.js","./responsiveObserver-pBLgsxqE.js","./row-DavXLXaE.js","./index-C3tirfBv.js","./RecentStoryViewer-Dv3mQy_H.js","./stories-Bu698-8C.js","./StoryViewers-szoM04TF.js","./index-DOdHAQsL.js","./index-BmML-HVI.js","./index-Du8Zg1nD.js","./index-vuHwb1ab.js","./index-pmWz-1Bh.js","./ArchivedStories-CSYMlsMf.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{ao as e,r as i,as as a}from"./index-CWHWDdhg.js";import{a as o,S as l}from"./MyApp-DiD1gO8G.js";import{T as c}from"./index-DlqUfLt0.js";import"./Dropdown-8qusH5Hu.js";const n=i.lazy(()=>a(()=>import("./RecentStories-BVVI7j-x.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]),import.meta.url)),d=i.lazy(()=>a(()=>import("./ArchivedStories-CSYMlsMf.js"),__vite__mapDeps([30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,27]),import.meta.url)),r={Recent:"recent",Archived:"archived"};function v(){const{ti:t}=o(),s=[{key:r.Recent,label:t({en:"Today",vi:"Hôm nay"}),closable:!1,children:e.jsx(n,{})},{key:r.Archived,label:t({en:"Archived",vi:"Kho lưu trữ"}),closable:!1,children:e.jsx(d,{})}];return e.jsxs(l,{direction:"vertical",style:{width:"100%"},children:[e.jsx("h1",{style:{textAlign:"left"},children:t({en:"Story",vi:"Tin"})}),e.jsx(c,{hideAdd:!0,type:"editable-card",items:s})]})}export{v as default};