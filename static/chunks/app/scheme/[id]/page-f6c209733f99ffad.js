(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[617],{7389:function(e,t,s){Promise.resolve().then(s.bind(s,7855))},6648:function(e,t,s){"use strict";s.d(t,{default:function(){return n.a}});var l=s(5601),n=s.n(l)},5601:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{default:function(){return d},getImageProps:function(){return i}});let l=s(9920),n=s(497),r=s(8173),a=l._(s(1241));function i(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,s]of Object.entries(t))void 0===s&&delete t[e];return{props:t}}let d=r.Image},7855:function(e,t,s){"use strict";s.r(t);var l=s(7437),n=s(2265),r=s(2554),a=s(4727),i=s(539),d=s(6648);t.default=e=>{let{params:t}=e,[s,c]=(0,n.useState)(null),[o,u]=(0,n.useState)([]),[m,x]=(0,n.useState)(""),{id:f}=t;(0,n.useEffect)(()=>{f&&c(i.K.find(e=>e.id===parseInt(f.toString()))||null)},[f]);let h=()=>{""!==m.trim()&&(u(e=>[...e,{type:"user",text:m}]),setTimeout(()=>{u(e=>[...e,{type:"user",text:m},{type:"ai",text:"यह एक नमूना उत्तर है।"}])},1e3),x(""))};return s?(0,l.jsxs)("div",{className:"flex flex-col min-h-screen bg-orange-200",children:[(0,l.jsx)(r.default,{}),(0,l.jsx)("div",{className:"container mx-auto p-4 h-full",children:(0,l.jsxs)("div",{className:"flex flex-row items-center justify-between mb-4 gap-8",children:[(0,l.jsxs)("div",{className:"flex mt-4 flex-col items-center gap-1 w-1/2",children:[(0,l.jsx)("h1",{className:"text-xl font-bold mb-4",children:s.title}),(0,l.jsx)("p",{className:"mb-4",children:s.description}),(0,l.jsx)("h2",{className:"text-2xl font-bold mb-2",children:"योजना प्राप्त करने के चरण"}),(0,l.jsx)("ul",{className:"list-disc pl-6 mb-8",children:s.steps.map((e,t)=>(0,l.jsx)("li",{className:"mb-2",children:e},t))})]}),(0,l.jsxs)("div",{className:"bg-white w-2/3 p-4 rounded shadow-md",children:[(0,l.jsx)("h3",{className:"text-xl font-bold mb-2",children:"AI सहायक के साथ बातचीत करें"}),(0,l.jsx)("div",{className:"h-64 overflow-y-auto border border-gray-300 p-2 mb-4",children:o.map((e,t)=>(0,l.jsxs)("div",{className:"mb-2 p-2 rounded ".concat("user"===e.type?"bg-blue-100":"bg-gray-100"),children:[(0,l.jsx)("span",{className:"font-bold",children:"user"===e.type?"आप: ":"AI: "}),e.text]},t))}),(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)("input",{type:"text",value:m,onChange:e=>x(e.target.value),className:"flex-grow p-2 border border-gray-300 rounded-l",placeholder:"संदेश लिखें..."}),(0,l.jsx)("button",{onClick:h,className:"bg-blue-500 text-white px-4 py-2 rounded-r",children:(0,l.jsx)(d.default,{src:"/mic.png",alt:"Send",width:20,height:20})}),(0,l.jsx)("button",{onClick:h,className:"bg-blue-500 text-white px-4 py-2 rounded-r ml-1",children:"भेजें"})]})]})]})}),(0,l.jsx)(a.Z,{})]}):(0,l.jsx)("div",{children:"Loading..."})}}},function(e){e.O(0,[138,173,684,971,23,744],function(){return e(e.s=7389)}),_N_E=e.O()}]);