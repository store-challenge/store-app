"use strict";(self.webpackChunkstore_app=self.webpackChunkstore_app||[]).push([[29],{8396:function(t,n,r){r.d(n,{Z:function(){return p}});var e=r(1413),a=r(1087),o=r(2711),i=r(8870),c=r(533),s=r(4942),u=r(6934),l=r(3517),d=(0,u.ZP)(l.Z)((function(t){var n=t.theme;return(0,s.Z)({fontFamily:"Montserrat",fontSize:"20px",fontWeight:"300",fontStyle:"normal",lineHeight:"130%",color:"var(--mainColor)","& .MuiBreadcrumbs-separator":{marginLeft:"0",marginRight:"0"}},n.breakpoints.down("xl"),{fontSize:"15px",fontWeight:"500","& .MuiBreadcrumbs-ol":{flexDirection:"row-reverse",justifyContent:"flex-end"}})})),x=r(184),p=function(t){var n=t.currentPath,r=t.breakpoint,s=n.length>1?[n.at(-2)]:null,u=r?n:s;return(0,x.jsx)(d,{"aria-label":"breadcrumb","aria-current":"last",separator:r?(0,x.jsx)(o.JO,{icon:"iconamoon:arrow-right-2-duotone",style:{fontSize:"24px"}}):null,children:u.map((function(t,n){var s=n===u.length-1,l={color:"inherit",underline:"none",style:{fontWeight:s&&"500",cursor:s&&"default"}};return(0,x.jsxs)(i.Z,{display:"flex",alignItems:"center",children:[!r&&(0,x.jsx)(o.JO,{icon:"iconamoon:arrow-left-2-duotone",style:{fontSize:"24px"}}),(0,x.jsx)(c.Z,(0,e.Z)((0,e.Z)({},l),{},{component:a.rU,to:t.path,children:t.name}))]},n)}))})}},9944:function(t,n,r){r.d(n,{Z:function(){return l}});var e=r(1889),a=r(2711),o=r(1087),i={wrapper:"card_wrapper__Msjlg",card:"card_card__XoCn7",productImage:"card_productImage__I9Q60",image:"card_image__1kSDg",title:"card_title__tpVSx",priceUah:"card_priceUah__wwA55",info:"card_info__XwM5u",basket:"card_basket__ORJZR",basketIcon:"card_basketIcon__RZmiD"},c=r(7739),s=r(184),u=function(t){var n=t.product,r=n.id,e=n.title,u=n.image,l=n.price;return(0,s.jsx)(o.rU,{to:"".concat(c.A.PRODUCT_PAGE,"/").concat(r),children:(0,s.jsxs)("div",{className:i.wrapper,children:[(0,s.jsx)("div",{className:i.card,children:(0,s.jsx)("div",{className:i.productImage,children:(0,s.jsx)("img",{src:u,alt:"product image",width:"100%",height:"100%",className:i.image})})}),(0,s.jsx)("div",{className:i.title,children:(0,s.jsx)("h3",{title:e,children:e})}),(0,s.jsxs)("div",{className:i.info,children:[(0,s.jsx)("div",{className:i.priceGroup,children:(0,s.jsx)("p",{className:i.priceUah,children:"".concat(l.toLocaleString()," \u20b4")})}),(0,s.jsx)("div",{className:i.basket,children:(0,s.jsx)(a.JO,{className:i.basketIcon,icon:"ion:cart-outline"})})]})]})})},l=function(t){var n=t.products,r=t.width;return(0,s.jsx)(e.ZP,{container:!0,direction:"row",alignItems:{xs:"center",xl:"start"},columns:{xs:6,md:4},rowGap:{xs:2.5,xl:6.25},columnGap:{xs:1,md:1.5,xl:1.75},minWidth:"320px",maxWidth:r?"1130px":"844px",justifyContent:"center",children:n.map((function(t){return(0,s.jsx)(e.ZP,{item:!0,children:(0,s.jsx)(u,{product:t})},t.id)}))})}},4782:function(t,n,r){r.d(n,{Z:function(){return p}});var e=r(4308),a=r(2711),o=r(1087),i="CategoryButton_button__fQowb",c="CategoryButton_link__1rDBY",s="CategoryButton_icon__g-6p-",u="CategoryButton_popup__Boo5x",l="CategoryButton_text__ujtRZ",d=r(184),x=function(t){var n=t.item,r=t.href,e=t.icon,x=t.text;return(0,d.jsx)("div",{className:i,children:(0,d.jsxs)(o.rU,{to:"".concat(r,"/").concat(n),className:c,children:[(0,d.jsx)(a.JO,{className:s,icon:e}),(0,d.jsx)("div",{className:u,children:(0,d.jsx)("p",{className:l,children:x})})]})})},p=function(t){var n=t.array,r=t.breakpoints,a=t.href,o=t.rowGap,i=t.columnGap,c=t.sx;return(0,d.jsx)(e.Z,{container:!0,sx:c,rowGap:o,columnGap:i,children:n.map((function(t){return(0,d.jsx)(e.Z,{breakpoints:r,children:(0,d.jsx)(x,{item:t.id,href:a,icon:t.icon,text:t.name})},t.id)}))})}},397:function(t,n,r){r.d(n,{D:function(){return p},b:function(){return x}});var e=r(8870),a=r(4942),o=r(1413),i=r(6934),c=r(890),s={fontFamily:"Montserrat",fontStyle:"normal",fontWeight:500,lineHeight:"130%"},u=(0,i.ZP)(c.Z)((function(t){var n=t.theme;return(0,o.Z)((0,o.Z)({},s),{},(0,a.Z)({marginTop:"20px",marginBottom:"20px",fontSize:"18px",fontWeight:700},n.breakpoints.up("xl"),{marginTop:"50px",marginBottom:"50px",fontSize:"25px"}))})),l=(0,i.ZP)(c.Z)((function(t){var n=t.theme;return(0,o.Z)((0,o.Z)({},s),{},(0,a.Z)({marginTop:"20px",marginBottom:"20px",fontSize:"13px"},n.breakpoints.up("xl"),{marginTop:"50px",marginBottom:"50px",fontSize:"20px"}))})),d=r(184),x=function(t){var n=t.text,r=t.sx;return(0,d.jsx)(e.Z,{sx:{width:"100%"},children:(0,d.jsx)(u,{variant:"h3",gutterBottom:!0,sx:r,children:n})})},p=function(t){var n=t.text,r=t.sx;return(0,d.jsx)(e.Z,{sx:{width:"100%"},children:(0,d.jsx)(l,{variant:"h4",gutterBottom:!0,sx:r,children:n})})}},283:function(t,n,r){r.r(n),r.d(n,{default:function(){return _}});var e=r(9439),a=r(2791),o=r(7689),i=r(6314),c=r(8396),s=r(397),u=r(4782),l=r(9944),d=r(7739),x=r(4165),p=r(5861),m=r(3352),f=function(){var t=(0,p.Z)((0,x.Z)().mark((function t(n){var r,e;return(0,x.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.Z.get("api/v1/sub-category/list",{params:{categoryId:n}});case 2:return r=t.sent,e=r.data.data,t.abrupt("return",e&&e.error?(console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430:",e.error),null):e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=r(7380),g=r(184),_=function(t){var n=t.desktop,r=(0,o.UO)().categoryId,x=(0,a.useState)([]),p=(0,e.Z)(x,2),m=p[0],_=p[1],j=(0,a.useState)([]),Z=(0,e.Z)(j,2),v=Z[0],b=Z[1],w=(0,a.useState)(4),y=(0,e.Z)(w,2),k=y[0],N=(y[1],(0,a.useState)("")),S=(0,e.Z)(N,2),B=S[0],C=S[1],G=[{path:"".concat(d.A.HOMEPAGE),name:"\u0413\u043e\u043b\u043e\u0432\u043d\u0430 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0430"},{path:"".concat(d.A.CATEGORY_PAGE,"/").concat(r),name:B}];return(0,a.useEffect)((function(){Promise.all([f(r),(0,h.CQ)(k,r)]).then((function(t){var n=(0,e.Z)(t,2),a=n[0],o=n[1];_(a),b(o);var i=a.find((function(t){return Number(t.categoryId)===Number(r)}));return i?C(i.catIdName):null})).catch((function(t){return console.error("\u0412\u0438\u043d\u0438\u043a\u043b\u0430 \u043f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u0456 \u0434\u0430\u043d\u0438\u0445:",t),null}))}),[k,r]),(0,g.jsxs)(i.Z,{children:[(0,g.jsx)(c.Z,{currentPath:G,breakpoint:n}),(0,g.jsxs)(i.Z,{sx:{alignItems:!n&&"center"},marginBottom:n&&1.75,children:[(0,g.jsx)(s.b,{text:B}),(0,g.jsx)(u.Z,{array:m,href:d.A.SUBCATEGORY_PAGE,rowGap:!n&&2.5,columnGap:!n&&1,sx:{justifyContent:n?"space-evenly":"center"}}),(0,g.jsx)(s.b,{text:"\u0422\u043e\u043f \u043f\u0440\u043e\u0434\u0430\u0436\u0456\u0432"}),(0,g.jsx)(i.Z,{sx:{alignItems:"center"},children:(0,g.jsx)(l.Z,{products:v,width:!0})})]})]})}}}]);
//# sourceMappingURL=CategoryPage.b61bd16f.chunk.js.map