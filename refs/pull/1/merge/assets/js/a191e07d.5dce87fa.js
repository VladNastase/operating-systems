"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[7841],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,m=u["".concat(l,".").concat(f)]||u[f]||y[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9512:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},i="Bypass Canary",s={unversionedId:"Lab/Data/quiz/bypass-canary",id:"Lab/Data/quiz/bypass-canary",title:"Bypass Canary",description:"Question",source:"@site/docs/Lab/Data/quiz/bypass-canary.md",sourceDirName:"Lab/Data/quiz",slug:"/Lab/Data/quiz/bypass-canary",permalink:"/operating-systems/refs/pull/8/merge/Lab/Data/quiz/bypass-canary",draft:!1,tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Question",id:"question",level:2}],p={toc:c},u="wrapper";function y(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bypass-canary"},"Bypass Canary"),(0,a.kt)("h2",{id:"question"},"Question"),(0,a.kt)("p",null,"If we enable ASLR, can we still exploit the ",(0,a.kt)("inlineCode",{parentName:"p"},"stack_protector")," program?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"no, because the address of ",(0,a.kt)("inlineCode",{parentName:"p"},"pawned")," is  going to be different for every run.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"yes, because ASLR cannot work well when the canary is activated."))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"yes, because ASLR randomizes the start address of a section, but the offsets remain the same.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"no, because the address to which ",(0,a.kt)("inlineCode",{parentName:"li"},"addr")," points to is going to be random")))}y.isMDXComponent=!0}}]);