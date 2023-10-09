"use strict";(self.webpackChunkstore_app=self.webpackChunkstore_app||[]).push([[516],{8396:function(n,t,r){r.d(t,{Z:function(){return d}});var e=r(1413),o=r(1087),i=r(2711),a=r(8870),l=r(533),c=r(4942),p=r(6934),s=r(3517),x=(0,p.ZP)(s.Z)((function(n){var t=n.theme;return(0,c.Z)({fontFamily:"Montserrat",fontSize:"20px",fontWeight:"300",fontStyle:"normal",lineHeight:"130%",color:"var(--mainColor)","& .MuiBreadcrumbs-separator":{marginLeft:"0",marginRight:"0"}},t.breakpoints.down("xl"),{fontSize:"15px",fontWeight:"500","& .MuiBreadcrumbs-ol":{flexDirection:"row-reverse",justifyContent:"flex-end"}})})),u=r(184),d=function(n){var t=n.currentPath,r=n.breakpoint,c=t.length>1?[t.at(-2)]:null,p=r?t:c;return(0,u.jsx)(x,{"aria-label":"breadcrumb","aria-current":"last",separator:r?(0,u.jsx)(i.JO,{icon:"iconamoon:arrow-right-2-duotone",style:{fontSize:"24px"}}):null,children:p.map((function(n,t){var c=t===p.length-1,s={color:"inherit",underline:"none",style:{fontWeight:c&&"500",cursor:c&&"default"}};return(0,u.jsxs)(a.Z,{display:"flex",alignItems:"center",children:[!r&&(0,u.jsx)(i.JO,{icon:"iconamoon:arrow-left-2-duotone",style:{fontSize:"24px"}}),(0,u.jsx)(l.Z,(0,e.Z)((0,e.Z)({},s),{},{component:o.rU,to:n.path,children:n.name}))]},t)}))})}},397:function(n,t,r){r.d(t,{Z:function(){return x}});var e=r(8870),o=r(4942),i=r(1413),a=r(6934),l=r(890),c={fontFamily:"Montserrat",fontStyle:"normal",fontWeight:"300",lineHeight:"130%"},p=(0,a.ZP)(l.Z)((function(n){var t=n.theme;return(0,i.Z)((0,i.Z)({},c),{},(0,o.Z)({marginTop:"20px",marginBottom:"20px",fontWeight:700},t.breakpoints.up("xl"),{marginTop:"50px",marginBottom:"50px"}))})),s=r(184),x=function(n){var t=n.text,r=n.variant,o=n.sx;return(0,s.jsx)(e.Z,{sx:{width:"100%"},children:(0,s.jsx)(p,{variant:r,gutterBottom:!0,sx:o,children:t})})}},4271:function(n,t,r){r.r(t),r.d(t,{default:function(){return U}});var e=r(9439),o=r(2791),i=r(7689),a=r(6314),l=r(8870),c=r(890),p=r(4308),s=r(3540),x=r(8396),u=r(1413),d=r(8980),h=r(2169),f=r(5289),g=r(2711),m=r(6934),b=r(9584),v=r(6380),Z=(0,m.ZP)(b.Z)((function(){return{padding:"0",width:"170px",maxHeight:"35px",maxWidth:"400px",justifyContent:"center",gap:"20px",backgroundColor:"transparent","& .MuiMobileStepper-dots":{gap:"20px"},"& .MuiMobileStepper-dot":{width:"8px",height:"8px",border:"1px solid var(--mainColor)",backgroundColor:"var(--secondColor)",borderRadius:"50%"},"& .MuiMobileStepper-dotActive":{width:"9px",height:"9px",backgroundColor:"var(--mainColor)",borderRadius:"50%"}}})),j=(0,m.ZP)(v.Z)((function(){return{width:"30px",height:"30px",padding:"0",backgroundColor:"var(--mainColor)",borderRadius:"50%","&.MuiIconButton-root:hover":{backgroundColor:"var(--buttonHoverColor)"}}})),C=r(184),k=function(n){var t=n.array,r=n.currentIndex,e=n.setCurrentIndex;return(0,C.jsx)(Z,{variant:"dots",steps:t.length,position:"static",activeStep:r,sx:{maxWidth:400,flexGrow:1},nextButton:(0,C.jsx)(j,{onClick:function(){return e((function(n){return(n+1)%t.length}))},disabled:0===t.length,children:(0,C.jsx)(g.JO,{icon:"iconamoon:arrow-right-2-duotone",color:"var(--secondColor)",fontSize:"20px"})}),backButton:(0,C.jsx)(j,{onClick:function(){return e((function(n){return(n+t.length-1)%t.length}))},disabled:0===t.length,children:(0,C.jsx)(g.JO,{icon:"iconamoon:arrow-left-2-duotone",color:"var(--secondColor)",fontSize:"20px"})})})},y=r(4942),w=r(7621),S=r(9157),W=(0,m.ZP)(w.Z)((function(n){var t=n.theme;return(0,y.Z)({padding:"10px",width:"112px",height:"118px",display:"flex",flexWrap:"wrap",alignContent:"center",gap:"10px",borderRadius:"30px",border:"4px solid var(--mainColor)",backgroundColor:"#FFF"},t.breakpoints.up("xl"),{padding:"25px",width:"310px",height:"322px"})})),P=(0,m.ZP)(S.Z)((function(){return{padding:0,gap:"20px",display:"flex",flexWrap:"wrap",justifyContent:"center"}})),G=(0,m.ZP)(v.Z)((function(n){var t=n.theme;return(0,y.Z)({padding:"0",position:"absolute",top:"20px",right:"20px",width:"40px",height:"40px","& Mui-IconButton:hover":{backgroundColor:"var(--buttonHoverColor)"}},t.breakpoints.down("xl"),{width:"30px",height:"30px",top:"10px",right:"10px"})})),M=(0,o.forwardRef)((function(n,t){return(0,C.jsx)(d.Z,(0,u.Z)({ref:t},n))})),z=function(n){var t=n.images,r=n.breakpoint,i=(0,o.useState)(!1),l=(0,e.Z)(i,2),c=l[0],p=l[1],s=(0,o.useState)(0),x=(0,e.Z)(s,2),u=x[0],d=x[1],m=function(n){d(n),p(!0)},b=function(){return p(!1)},v=function(){return t&&(0,C.jsx)(k,{array:t,currentIndex:u,setCurrentIndex:d})},Z={style:{width:r?614:280,padding:r?"50px":"20px",alignItems:"center",border:"4px solid var(--mainColor)",borderRadius:"30px"}};return(0,C.jsxs)(a.Z,{sx:{marginTop:r?6.25:2.5,alignItems:!r&&"center"},children:[(0,C.jsxs)(W,{elevation:0,children:[(0,C.jsx)(h.Z,{component:"img",height:"100%",sx:{objectFit:"contain"},image:t.length>0?t[u]:"",alt:"Image ".concat(u+1),onClick:function(){return m(u)}}),r&&v()]}),!r&&v(),(0,C.jsxs)(f.Z,{open:c,onClose:b,TransitionComponent:M,maxWidth:"md",PaperProps:Z,children:[(0,C.jsx)(G,{onClick:b,children:(0,C.jsx)(g.JO,{icon:"iconamoon:close",color:"var(--mainColor)",width:"100%",height:"100%"})}),(0,C.jsxs)(P,{children:[(0,C.jsx)(h.Z,{component:"img",height:r?550:208,sx:{objectFit:"contain"},image:t.length>0?t[u]:"",alt:"Image ".concat(u+1),onClick:function(){return m(u)}}),r&&v()]}),!r&&v()]})]})},I=(0,m.ZP)(c.Z)((function(n){var t=n.theme;return(0,y.Z)({fontFamily:"Montserrat",fontSize:"13px",fontWeight:"500",fontStyle:"normal",lineHeight:"130%",color:"var(--mainColor)"},t.breakpoints.up("xl"),{fontSize:"20px",fontWeight:"300"})})),A=function(n){var t=n.array,r=n.columnGap,e=n.sx,o=n.breakpoint;return(0,C.jsx)(l.Z,{children:(0,C.jsxs)(p.Z,{container:!0,rowGap:3,columnGap:r,sx:e,maxWidth:"100%",children:[(0,C.jsx)(p.Z,{container:!0,direction:"column",rowGap:o?6.25:2.5,children:t.map((function(n,t){return(0,C.jsx)(p.Z,{children:(0,C.jsx)(I,{variant:"paragraph",children:n.name})},t)}))}),(0,C.jsx)(p.Z,{container:!0,direction:"column",rowGap:o?6.25:2.5,maxWidth:o?"170px":"90px",children:t.map((function(n,t){return(0,C.jsx)(p.Z,{children:(0,C.jsx)(c.Z,{variant:"paragraph",color:"var(--mainColor)",fontWeight:"500",fontSize:o?"20px":"13px",children:n.value})},t)}))})]})})},O=r(3984),R=r(7928),B=(0,m.ZP)(R.Z)((function(n){var t=n.theme;return(0,y.Z)({width:"175px",height:"40px",justifyContent:"center",alignItems:"center",border:"1px solid var(--mainColor)",borderRadius:"15px",color:"var(--mainColor)",backgroundColor:"var(--secondColor)"},t.breakpoints.down("xl"),{width:"286px",fontSize:"15px",fontWeight:"500"})})),F=(0,m.ZP)(c.Z)((function(){return{fontFamily:"Montserrat",fontSize:"20px",fontStyle:"normal",fontWeight:"400",lineHeight:"95%",letterSpacing:"0.6px",color:"var(--mainColor)"}})),H=function(n){var t=n.currentQuantity,r=n.onChange,e=n.available;return(0,C.jsxs)(B,{children:[(0,C.jsx)(v.Z,{"aria-label":"reduce",onClick:function(){t>1&&r(t-1)},sx:{padding:0},children:(0,C.jsx)(g.JO,{icon:"bi:dash-circle-fill",width:"18px",height:"18px",color:"var(--mainColor)"})}),(0,C.jsx)(F,{marginX:"30px",children:t}),(0,C.jsx)(v.Z,{"aria-label":"increase",onClick:function(){t<e&&r(t+1)},sx:{padding:0},children:(0,C.jsx)(g.JO,{icon:"bi:plus-circle-fill",width:"18px",height:"18px",color:"var(--mainColor)"})})]})},T=r(1723),E=function(n){var t=n.available,r=n.price,i=n.breakpoint,a=(0,o.useState)(1),s=(0,e.Z)(a,2),x=s[0],u=s[1],d=(0,O.j)(),h=d.quantity,f=d.addToCart,g={fontFamily:"Montserrat",fontSize:i?"20px":"13px",fontStyle:"normal",lineHeight:"130%"};return(0,C.jsxs)(p.Z,{container:!0,flexDirection:"column",rowGap:i?6.25:2.5,maxWidth:"100%",children:[(0,C.jsx)(c.Z,{variant:"paragraph",style:g,color:t?"var(--mainColor)":"#6b4c7d40",sx:{fontWeight:i&&"300"},children:t?"\u0412 \u043d\u0430\u044f\u0432\u043d\u043e\u0441\u0442\u0456 ".concat(t):"\u041d\u0435 \u0432 \u043d\u0430\u044f\u0432\u043d\u043e\u0441\u0442\u0456"}),(0,C.jsx)(c.Z,{variant:"paragraph",style:g,color:"var(--priceTextColor)",children:r&&"".concat(r.toLocaleString()," \u20b4")}),(0,C.jsxs)(l.Z,{display:"flex",flexDirection:"column",alignItems:"center",rowGap:"20px",children:[(0,C.jsx)(H,{style:g,currentQuantity:x,onChange:function(n){return u(n)},available:t}),(0,C.jsx)(T.Z,{disabled:x+h>t,onClick:function(){1<=t&&(f(x),u(1))},text:"\u041a\u0443\u043f\u0438\u0442\u0438",sx:{margin:0,backgroundColor:"var(--mainColor)",color:"var(--secondColor)","&:hover":{border:"inherit",backgroundColor:"var(--buttonHoverColor)"},"&.Mui-disabled":{backgroundColor:"#6b4c7d40"}}})]})]})},J=r(397),_=r(7739),D=r(7380),U=function(n){var t=n.desktop,r=(0,i.UO)().id,u=(0,o.useState)({}),d=(0,e.Z)(u,2),h=d[0],f=d[1],g=h.title,m=h.productArticle,b=h.brand,v=h.categoryId,Z=h.categoryName,j=h.subcategoryId,k=h.subcategoryName,y=h.productAvailable,w=h.price,S=(0,o.useState)([]),W=(0,e.Z)(S,2),P=W[0],G=W[1],M=(0,o.useState)(""),I=(0,e.Z)(M,2),O=I[0],R=I[1],B=[{label:"article",name:"\u0410\u0440\u0442\u0438\u043a\u0443\u043b:",value:m}],F=[{path:"".concat(_.A.HOMEPAGE),name:"\u0413\u043e\u043b\u043e\u0432\u043d\u0430 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0430"},{path:"".concat(_.A.CATEGORY_PAGE,"/").concat(v),name:Z},{path:"".concat(_.A.SUBCATEGORY_PAGE,"/").concat(j),name:k},{path:"".concat(_.A.PRODUCT_PAGE,"/").concat(r),name:g}],H=[{label:"material",name:"\u0411\u0440\u0435\u043d\u0434",value:b},{label:"type",name:"\u0422\u0438\u043f \u0442\u043e\u0432\u0430\u0440\u0443",value:Z}];return(0,o.useEffect)((function(){(0,D.gk)(r).then((function(n){return f(n),G(n.images),R(n.description),null})).catch((function(n){return console.error("\u0412\u0438\u043d\u0438\u043a\u043b\u0430 \u043f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u0456 \u0434\u0430\u043d\u0438\u0445:",n),null}))}),[r]),(0,C.jsxs)(a.Z,{children:[(0,C.jsx)(x.Z,{currentPath:F,breakpoint:t}),(0,C.jsxs)(p.Z,{container:!0,columnGap:13.75,flexWrap:t&&"nowrap",justifyContent:"center",children:[(0,C.jsx)(z,{images:P,breakpoint:t}),(0,C.jsxs)(l.Z,{width:"100%",children:[(0,C.jsx)(J.Z,{text:g,variant:"h4",sx:{fontSize:t?"20px":"13px",fontWeight:500}}),(0,C.jsxs)(p.Z,{container:!0,rowGap:!t&&2.5,justifyContent:"space-between",width:"100%",children:[(0,C.jsxs)(l.Z,{children:[(0,C.jsx)(A,{array:B,columnGap:.5,breakpoint:t}),(0,C.jsx)(J.Z,{text:"\u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438:",variant:"h4",sx:{fontSize:t?"20px":"13px",fontWeight:500}}),(0,C.jsx)(A,{array:H,columnGap:2.5,breakpoint:t})]}),(0,C.jsx)(E,{available:y,price:w,breakpoint:t})]})]})]}),(0,C.jsxs)(l.Z,{children:[(0,C.jsx)(J.Z,{text:"\u041f\u0440\u043e \u0442\u043e\u0432\u0430\u0440",variant:"h4",sx:{fontSize:t?"20px":"13px",fontWeight:500}}),(0,C.jsx)(c.Z,{variant:"paragraph",color:"var(--mainColor)",fontSize:!t&&"13px",fontWeight:t&&"300px",children:(0,s.ZP)(O)})]})]})}}}]);
//# sourceMappingURL=ProductPage.7d7e4d4a.chunk.js.map