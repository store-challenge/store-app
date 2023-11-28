"use strict";(self.webpackChunkstore_app=self.webpackChunkstore_app||[]).push([[259],{331:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var i=n(9439),r=n(2791),a=n(3967),o=n(5193),p=n(6314),l=n(4308),x=n(397),s=n(4942),d=n(1413),u=n(6934),c=n(5527),m=n(8096),b=n(7391),h=n(5523),g=n(890),f={fontFamily:"Montserrat",fontStyle:"normal",fontWeight:500,lineHeight:"130%"},Z=(0,u.ZP)(c.Z)((function(e){var t,n=e.theme;return t={display:"flex",maxWidth:"248px",padding:"20px",flexDirection:"column",justifyContent:"center",alignItems:"stretch",gap:"20px",borderRadius:"30px",border:"1px solid var(--mainColor)",backgroundColor:"var(--secondColor)",boxShadow:"none"},(0,s.Z)(t,n.breakpoints.between("640","xl"),{maxWidth:"461px",padding:"30px",gap:"30px"}),(0,s.Z)(t,n.breakpoints.up("xl"),{maxWidth:"654px",padding:"50px",gap:"50px",alignItems:"flex-start"}),t})),v=(0,u.ZP)(m.Z)((function(e){var t,n=e.theme;return t={rowGap:"20px","& .MuiOutlinedInput-input":{padding:"9.5px 20px"},"& .MuiOutlinedInput-notchedOutline":{border:"none"}},(0,s.Z)(t,n.breakpoints.between("640","xl"),{rowGap:"30px","& .MuiOutlinedInput-input":{padding:"15px 30px"}}),(0,s.Z)(t,n.breakpoints.up("xl"),{rowGap:"50px","& .MuiOutlinedInput-input":{padding:"15px 50px"}}),t})),k=(0,u.ZP)(b.Z)((function(e){var t,n=e.theme;return t={"& .MuiInputBase-root":(0,d.Z)((0,d.Z)({},f),{},{color:"var(--mainColor)",gap:"10px",padding:0}),borderRadius:"15.456px",border:"0.773px solid var(--mainColor)",backgroundColor:"var(--secondColor)",boxShadow:"0px 3.86398px 7.72795px 0px rgba(119, 52, 165, 0.25) inset"},(0,s.Z)(t,n.breakpoints.between("640","xl"),{minWidth:"285px"}),(0,s.Z)(t,n.breakpoints.up("xl"),{"&  .MuiInputBase-root":{fontSize:"20px",fontWeight:300},minWidth:"322px",borderRadius:"20px",border:"1px solid var(--mainColor)",boxShadow:"0px 5px 10px 0px rgba(119, 52, 165, 0.25) inset"}),t})),y=(0,u.ZP)(h.Z)((function(e){var t,n=e.theme;return t={gap:"10px",margin:0},(0,s.Z)(t,n.breakpoints.between("640","xl"),{gap:"20px"}),(0,s.Z)(t,n.breakpoints.up("xl"),{gap:"22px"}),t})),j=(0,u.ZP)(g.Z)((function(e){var t,n=e.theme;return(0,d.Z)((0,d.Z)({},f),{},(t={fontSize:"13px",display:"flex",gap:"10px",color:"var(--mainColor)",alignItems:"center",opacity:"50%","&.Mui-checked":{opacity:0}},(0,s.Z)(t,n.breakpoints.between("640","xl"),{gap:"20px"}),(0,s.Z)(t,n.breakpoints.up("xl"),{gap:"20px",fontSize:"22px",fontWeight:300}),t))})),C=n(3044),w=n(184),S=function(e){var t=e.number,n=e.breakpoint;return(0,w.jsx)(C.Z,{sx:{backgroundColor:"var(--mainColor)",width:n?"30px":"20px",height:n?"30px":"20px"},children:(0,w.jsx)(g.Z,{variant:"h6",sx:{fontFamily:"Montserrat",fontSize:n?"20px":"15px",fontWeight:"500",fontStyle:"normal",lineHeight:"130%",color:"var(--secondColor)"},children:t})})},P=function(e){var t=e.number,n=e.title,i=e.children,r=e.breakpoint;return(0,w.jsx)(p.Z,{alignItems:!r&&"center",children:(0,w.jsxs)(Z,{variant:"outlined",children:[(0,w.jsxs)(p.Z,{flexDirection:"row",alignItems:"center",gap:r?6.25:2.5,children:[t&&(0,w.jsx)(S,{breakpoint:!0,number:t}),(0,w.jsx)(x.D,{text:n,sx:{fontSize:"15px",color:"var(--mainColor)"}})]}),(0,w.jsx)(p.Z,{gap:3,children:i})]})})},W=function(e){var t=e.userData,n=e.onCommentSubmit,i=e.breakpoint,r=e.tabletBreakpoint,a={key:"comment",number:"4",title:"\u0412\u0430\u0448 \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440 \u0434\u043e \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f",fields:[{id:"comment",value:t.comment}],placeholder:"\u0412\u0430\u0448 \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440"};return(0,w.jsx)(P,{number:a.number,title:a.title,breakpoint:i,children:(0,w.jsx)(v,{fullWidth:!0,sx:{"& .MuiOutlinedInput-input":{padding:"24px 50px"}},children:a.fields.map((function(e){return(0,w.jsxs)(l.Z,{padding:0,children:[e.label&&(0,w.jsx)(x.D,{text:"".concat(e.label,"*"),sx:{color:"var(--mainColor)",marginBottom:i?6.25:2.5}}),(0,w.jsx)(k,{required:!0,id:e.id,value:e.value,multiline:!0,rows:i?3.5:5,style:{minWidth:i?"654px":r?"355px":"206px",borderRadius:"30px",border:"1px solid var(--mainColor)",boxShadow:"none"},placeholder:a.placeholder,onChange:function(i){return function(e,i){var r=(0,d.Z)((0,d.Z)({},t),{},(0,s.Z)({},e,i));n(r)}(e.id,i.target.value)}})]},e.id)}))})})},I=n(1087),D=n(9055),M=n(8545),B=function(e){var t=e.userData,n=e.onPaymentSubmit,a=e.breakpoint,o=e.tabletBreakpoint,d=(0,r.useState)([]),u=(0,i.Z)(d,2),c=u[0],m=u[1],b={key:"payment",number:"3",title:"\u0421\u043f\u043e\u0441\u0456\u0431 \u043e\u043f\u043b\u0430\u0442\u0438",fields:[{id:"typePayment",label:"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u0441\u043f\u043e\u0441\u0456\u0431 \u043e\u043f\u043b\u0430\u0442\u0438",value:t.typePayment}],placeholder:[{id:"byCard",label:"\u041a\u0430\u0440\u0442\u043a\u043e\u044e \u043d\u0430 \u0441\u0430\u0439\u0442\u0456",value:t.byCard,images:[{Visa:M.QH},{Mastercard:M.XT}]},{id:"byReceive",label:"\u041f\u0440\u0438 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u0456",value:t.byReceive,images:[]},{id:"byPay",label:"GooglePay / ApplePay",value:t.byPay,images:[{GooglePay:M.qf},{ApplePay:M.iz}]}]};return(0,w.jsx)(P,{number:b.number,title:b.title,breakpoint:a,children:(0,w.jsx)(v,{fullWidth:!0,children:(0,w.jsxs)(l.Z,{width:"100%",xs:2,padding:0,children:[(0,w.jsx)(x.D,{text:"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u0441\u043f\u043e\u0441\u0456\u0431 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438*",sx:{fontWeight:a&&300,color:"var(--mainColor)",marginBottom:a?6.25:2.5}}),(0,w.jsx)(Z,{children:b.placeholder.map((function(e){return(0,w.jsx)(y,{control:(0,w.jsx)(D.Z,{checked:c===e.id,onChange:function(){return function(e){m(e.id);var t=b.key,i=(0,s.Z)({},t,e.id);n(i)}(e)},id:e.id,sx:{padding:0,color:"var(--mainColor)","&.Mui-checked":{color:"var(--mainColor)"}}}),label:(0,w.jsxs)(j,{component:"div",style:{minWidth:a?"506px":o?"355px":"172px",gap:"0px",justifyContent:"space-between",opacity:c===e.id&&1},children:[e.label,(0,w.jsx)(p.Z,{style:{flexDirection:"row",gap:a?"10px":"5px"},children:e.images&&e.images.map((function(t,n){var r=(0,i.Z)(Object.entries(t)[0],2),o=r[0],p=r[1];return c===e.id?(0,w.jsx)(I.rU,{to:"/".concat(o.toLowerCase()),style:{textDecoration:"none",width:a?"50px":"30px"},children:(0,w.jsx)("img",{src:p,alt:o,width:"100%",height:"100%",stroke:"var(--priceTextColor)"})},n):(0,w.jsx)("span",{style:{width:a?"50px":"30px"},children:(0,w.jsx)("img",{src:p,alt:o,width:"100%",height:"100%",stroke:"var(--priceTextColor)"})},n)}))})]})},e.id)}))})]})})})},z=function(e){var t=e.desktop,n=(0,a.Z)(),s=(0,o.Z)(n.breakpoints.between("640","xl")),d=(0,r.useState)({}),u=(0,i.Z)(d,2),c=u[0],m=u[1],b=(0,r.useState)({}),h=(0,i.Z)(b,2),g=h[0],f=h[1];return(0,w.jsxs)(p.Z,{alignItems:!t&&"center",children:[(0,w.jsx)(x.D,{text:"\u041e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u043d\u044f \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f",sx:{marginY:t?6.25:2.5,fontSize:"15px",color:"var(--mainColor)"}}),(0,w.jsxs)(l.Z,{container:!0,rowSpacing:{xs:2.5,sm:3.5,xl:4.75},columnSpacing:{xs:0,xl:2},children:[(0,w.jsx)(l.Z,{xs:t?8:12,children:(0,w.jsx)(B,{userData:c,onPaymentSubmit:function(e){m(e)},breakpoint:t,tabletBreakpoint:s})}),(0,w.jsx)(l.Z,{xs:t?8:12,children:(0,w.jsx)(W,{userData:g,onCommentSubmit:function(e){f(e)},breakpoint:t,tabletBreakpoint:s})})]})]})}}}]);
//# sourceMappingURL=OrderPage.37057294.chunk.js.map