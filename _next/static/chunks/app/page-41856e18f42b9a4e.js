(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{7406:(e,t,s)=>{Promise.resolve().then(s.bind(s,9809))},9809:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var l=s(5155),n=s(2115),a=s(1461),i=s(6404),r=s(6046),o=s(2410);function c(){let e=(0,r.useRouter)(),t=["Oh no","Let me see what I can do about that","It should work now!","A 'please' would be nice..."],[s,c]=(0,n.useState)(!1),[d,u]=(0,n.useState)(0),[x,f]=(0,n.useState)([]),[h,m]=(0,n.useState)(""),[p,w]=(0,n.useState)(!1),[b,g]=(0,n.useState)(""),y=()=>{let e=0,s=l=>{let n="",a=0;f(e=>[...e,{sender:"bot",text:""}]);let i=setInterval(()=>{n+=l[a],f(e=>{let t=[...e];return t[t.length-1]={sender:"bot",text:n},t}),++a===l.length&&(clearInterval(i),++e<3?setTimeout(()=>s(t[e]),1e3):setTimeout(()=>w(!1),500))},60)};s("Oh no")},v=()=>{let t="",s=0;f(e=>[...e,{sender:"bot",text:""}]);let l=setInterval(()=>{t+="A 'please' would be nice..."[s],f(e=>{let s=[...e];return s[s.length-1]={sender:"bot",text:t},s}),27==++s&&(clearInterval(l),setTimeout(()=>e.push("/main"),2e3))},50)};return(0,n.useEffect)(()=>{setTimeout(()=>{c(!0)},4e3)},[]),(0,l.jsx)("div",{className:"h-svh bg-[#1f1f2d] p-1 sm:py-8 sm:px-28 font-sans",children:s?(0,l.jsx)(o.P.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:2},className:"h-full w-full",children:(0,l.jsxs)("div",{className:"flex flex-col w-full h-full bg-gray-400 rounded-3xl text-white",children:[(0,l.jsxs)("div",{className:"flex flex-row w-full h-[10%] bg-gray-200 rounded-t-3xl items-center sm:px-3",children:[(0,l.jsx)("div",{className:"flex h-full items-center ",children:(0,l.jsxs)(a.bL,{className:"inline-flex size-[40px] select-none overflow-hidden rounded-full ml-8 sm:ml-10 sm:size-[55px]",children:[(0,l.jsx)(a._V,{className:"size-full rounded-[inherit] object-cover",src:"https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/6fbcf889bdef65c5b92ffee86b13fc44/shutterstock_376532611.jpg?fit=fill&w=600&h=400",alt:"Profile Picture"}),(0,l.jsx)(a.H4,{className:"leading-1 flex size-full bg-white text-[15px] font-medium text-violet11",delayMs:600,children:"CT"})]})}),(0,l.jsx)("div",{className:"flex items-center ml-4 text-gray-800 text-xl font-semibold mt-1",children:"Tiara Mirchandani"})]}),(0,l.jsxs)("div",{className:"flex flex-col w-full h-[77%] p-3 my-1 overflow-scroll sm:p-10",children:[x.map((e,t)=>(0,l.jsx)("div",{className:"flex ".concat("user"===e.sender?"justify-end":"justify-start"),children:(0,l.jsx)("div",{className:"".concat("user"===e.sender?"bg-[#644e8c]":"bg-[#1f1f2d]"," text-white rounded-3xl p-3 max-w-[70%] my-1"),children:e.text})},t)),h&&(0,l.jsx)("div",{className:"flex justify-start",children:(0,l.jsx)("div",{className:"bg-[#1f1f2d] text-white rounded-3xl p-3 max-w-[70%]",children:h})})]}),(0,l.jsx)("div",{className:"flex flex-row items-center justify-center w-full h-[11%] p-3",children:(0,l.jsxs)("div",{className:"flex flex-row w-[90%] h-full bg-gray-300 rounded-2xl items-center p-1",children:[(0,l.jsx)("div",{className:"w-[96%] h-full italic",children:(0,l.jsx)("input",{type:"text",value:b,onChange:e=>{if(!p){let t=e.target.value;0==d?(f([{sender:"bot",text:"Keep typing until the send button turns purple"}]),g("I am not typing these words".slice(0,t.length))):g(t)}},placeholder:"Type something",className:"w-full h-full bg-transparent border-none focus:outline-none text-gray-500 pl-5"})}),(0,l.jsx)(i.A,{className:"".concat("I am not typing these words"===b||1==d?"text-[#7a5b8a] cursor-pointer":"text-gray-400 cursor-not-allowed"," justify-end"),onClick:()=>{0===d&&"I am not typing these words"===b?(f(e=>[...e,{sender:"user",text:"I am not typing these words"}]),g(""),w(!0),u(1),y()):1===d&&""!==b.trim()&&(f(e=>[...e,{sender:"user",text:"Bring me to your website"}]),g(""),w(!0),u(2),v())},style:{pointerEvents:"I am not typing these words"===b||1==d?"auto":"none"}})]})})]})}):(0,l.jsx)(o.P.span,{initial:{opacity:1},animate:{opacity:0},transition:{duration:3},className:"text-white text-6xl font-bold h-full flex justify-center items-center",children:"?"})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[498,441,517,358],()=>t(7406)),_N_E=e.O()}]);