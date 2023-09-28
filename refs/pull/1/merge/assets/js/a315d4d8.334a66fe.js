"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[3425],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>v});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,v=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(v,a(a({ref:t},l),{},{components:r})):n.createElement(v,a({ref:t},l))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1490:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={},a="Time Server",p={unversionedId:"Lab/Application Interaction/time-server",id:"Lab/Application Interaction/time-server",title:"Time Server",description:"Check out the code in support/time-server/server.c and support/time-server/client.c.",source:"@site/docs/Lab/Application Interaction/time-server.md",sourceDirName:"Lab/Application Interaction",slug:"/Lab/Application Interaction/time-server",permalink:"/operating-systems/refs/pull/8/merge/Lab/Application Interaction/time-server",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Application Interaction",permalink:"/operating-systems/refs/pull/8/merge/Lab/Application Interaction/overview"},next:{title:"Password Cracker",permalink:"/operating-systems/refs/pull/8/merge/Lab/Application Interaction/password-cracker"}},s={},c=[{value:"Python Version",id:"python-version",level:2},{value:"Practice",id:"practice",level:3}],l={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"time-server"},"Time Server"),(0,o.kt)("p",null,"Check out the code in ",(0,o.kt)("inlineCode",{parentName:"p"},"support/time-server/server.c")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"support/time-server/client.c"),"."),(0,o.kt)("p",null,"This is a simple program consisting of a server and a client.\nThe server uses a tcp socket to wait for connections.\nOnce a client has connected, the server will send the current time to it.\nThe client will then print the received time to the console."),(0,o.kt)("p",null,"Let's build and run this example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../support/time-server$ make\ngcc -Wall -o server server.c\ngcc -Wall -o client client.c\nstudent@os:~/.../support/time-server$ ./server\n")),(0,o.kt)("p",null,"Then, in another terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../support/time-server$ ./client 127.0.0.1 2000\nThe time is Thu Sep  1 11:48:03 2022\n")),(0,o.kt)("h2",{id:"python-version"},"Python Version"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"support/time-server/python")," we have the equivalent python implementation for both the server and client:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../support/time-server/python$ python3 server.py\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../support/time-server/python$ python3 client.py 127.0.0.1 2000\nThe time is Thu Sep  1 11:58:01 2022\n")),(0,o.kt)("h3",{id:"practice"},"Practice"),(0,o.kt)("p",null,"Try to figure out the protocol used by the server and the client.\nYou can do this by reading the source code, corroborated with information obtained at runtime."),(0,o.kt)("p",null,"Run the server again (the version in C), but instead of running the client, let's run ",(0,o.kt)("inlineCode",{parentName:"p"},"netcat")," and pipe the output to ",(0,o.kt)("inlineCode",{parentName:"p"},"hexdump"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"nc -d 127.0.0.1 2000 | hexdump -C\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/operating-systems/refs/pull/8/merge/Lab/Application%20Interaction/quiz/time-server"},"Quiz")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/operating-systems/refs/pull/8/merge/Lab/Application%20Interaction/quiz/time-server-interop"},"Quiz")))}m.isMDXComponent=!0}}]);