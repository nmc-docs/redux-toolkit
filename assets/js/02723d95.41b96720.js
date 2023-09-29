"use strict";(self.webpackChunkhtml=self.webpackChunkhtml||[]).push([[481],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4950:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:4},c="useSelector()",i={unversionedId:"redux-api/useSelector",id:"redux-api/useSelector",title:"useSelector()",description:"- useSelector() l\xe0 m\u1ed9t hook trong React redux gi\xfap ta l\u1ea5y ra c\xe1c state t\u1eeb store.",source:"@site/docs/redux-api/useSelector.md",sourceDirName:"redux-api",slug:"/redux-api/useSelector",permalink:"/redux-toolkit/redux-api/useSelector",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"configureStore()",permalink:"/redux-toolkit/redux-api/configureStore"},next:{title:"useDispatch()",permalink:"/redux-toolkit/redux-api/useDispatch"}},l={},s=[{value:"V\xed d\u1ee5:",id:"v\xed-d\u1ee5",level:2}],u={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"useselector"},"useSelector()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useSelector()")," l\xe0 m\u1ed9t hook trong React redux gi\xfap ta l\u1ea5y ra c\xe1c state t\u1eeb store."),(0,o.kt)("li",{parentName:"ul"},"Khai b\xe1o s\u1eed d\u1ee5ng TypeScript:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { TypedUseSelectorHook, useDispatch } from "react-redux";\n\nconst store = configureStore({\n  //...\n});\n\ntype RootState = ReturnType<typeof store.getState>;\nconst useAppSelector: TypedUseSelectorHook<RootState> = useSelector;\n')),(0,o.kt)("h2",{id:"v\xed-d\u1ee5"},"V\xed d\u1ee5:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { useAppSelector } from "@src/stores";\n\nconst profile = useAppSelector((state) => state.client.profile);\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"N\u1ebfu ta kh\xf4ng mu\u1ed1n tr\u1ea3 v\u1ec1 gi\xe1 tr\u1ecb \u0111\u01a1n nh\u01b0 \u1edf tr\xean, ta c\xf3 th\u1ec3 tr\u1ea3 v\u1ec1 m\u1ed9t object nh\u01b0 sau:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { shallowEqual } from "react-redux";\nimport { useAppSelector } from "@src/stores";\n\nconst { chatMembers, rooms, currentRoomId } = useAppSelector(\n  (state) => ({\n    chatMembers: state.chat.members,\n    rooms: state.chat.rooms,\n    currentRoomId: state.chat.currentRoomId,\n  }),\n  shallowEqual\n);\n')),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"L\u01b0u \xfd ph\u1ea3i th\xeam tham s\u1ed1 th\u1ee9 hai l\xe0 ",(0,o.kt)("inlineCode",{parentName:"p"},"shallowEqual")," \u0111\u1ec3 tr\xe1nh t\xecnh tr\u1ea1ng re-render kh\xf4ng c\u1ea7n thi\u1ebft. V\xec khi tr\u1ea3 v\u1ec1 m\u1ed9t object m\u1edbi thay v\xec m\u1ed9t gi\xe1 tr\u1ecb \u0111\u01a1n th\xec component s\u1ebd b\u1ecb re-render n\u1ebfu b\u1ea5t k\u1ef3 state n\xe0o trong store thay \u0111\u1ed5i (m\u1eb7c d\xf9 state hi\u1ec7n t\u1ea1i \u0111ang \u0111\u01b0\u1ee3c d\xf9ng \u1edf component n\xe0y kh\xf4ng thay \u0111\u1ed5i v\u1ec1 m\u1eb7t gi\xe1 tr\u1ecb)")))}m.isMDXComponent=!0}}]);