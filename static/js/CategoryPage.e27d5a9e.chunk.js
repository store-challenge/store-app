"use strict";(self.webpackChunkstore_app=self.webpackChunkstore_app||[]).push([[29],{8396:function(t,r,e){e.d(r,{Z:function(){return x}});var n=e(1413),a=e(1087),o=e(2711),i=e(4554),c=e(533),s=e(4942),u=e(6934),l=e(3517),d=(0,u.ZP)(l.Z)((function(t){var r=t.theme;return(0,s.Z)({fontFamily:"Montserrat",fontSize:"20px",fontWeight:"300",fontStyle:"normal",lineHeight:"130%",color:"var(--mainColor)","& .MuiBreadcrumbs-separator":{marginLeft:"0",marginRight:"0"}},r.breakpoints.down("xl"),{fontSize:"15px",fontWeight:"500","& .MuiBreadcrumbs-ol":{flexDirection:"row-reverse",justifyContent:"flex-end"}})})),p=e(184),x=function(t){var r=t.currentPath,e=t.breakpoint,s=r.length>1?[r.at(-2)]:null,u=e?r:s;return(0,p.jsx)(d,{"aria-label":"breadcrumb","aria-current":"last",separator:e?(0,p.jsx)(o.JO,{icon:"iconamoon:arrow-right-2-duotone",style:{fontSize:"24px"}}):null,children:u.map((function(t,r){var s=r===u.length-1,l={color:"inherit",underline:"none",style:{fontWeight:s&&"500",cursor:s&&"default"}};return(0,p.jsxs)(i.Z,{display:"flex",alignItems:"center",children:[!e&&(0,p.jsx)(o.JO,{icon:"iconamoon:arrow-left-2-duotone",style:{fontSize:"24px"}}),(0,p.jsx)(c.Z,(0,n.Z)((0,n.Z)({},l),{},{component:a.rU,to:t.path,children:t.name}))]},r)}))})}},9944:function(t,r,e){e.d(r,{Z:function(){return l}});var n=e(1889),a=e(2711),o=e(1087),i={wrapper:"card_wrapper__Msjlg",card:"card_card__XoCn7",productImage:"card_productImage__I9Q60",title:"card_title__tpVSx",priceUah:"card_priceUah__wwA55",info:"card_info__XwM5u",basket:"card_basket__ORJZR",basketIcon:"card_basketIcon__RZmiD",image:"card_image__1kSDg"},c=e(7739),s=e(184),u=function(t){var r=t.product,e=r.id,n=r.title,u=r.image,l=r.price;return(0,s.jsx)(o.rU,{to:"".concat(c.A.PRODUCT_PAGE,"/").concat(e),children:(0,s.jsxs)("div",{className:i.wrapper,children:[(0,s.jsx)("div",{className:i.card,children:(0,s.jsx)("div",{className:i.productImage,children:(0,s.jsx)("img",{src:u,alt:"product image",width:"100%",height:"100%",className:i.image})})}),(0,s.jsx)("div",{className:i.title,children:(0,s.jsx)("h3",{title:n,children:n})}),(0,s.jsxs)("div",{className:i.info,children:[(0,s.jsx)("div",{className:i.priceGroup,children:(0,s.jsx)("p",{className:i.priceUah,children:"".concat(l.toLocaleString()," \u20b4")})}),(0,s.jsx)("div",{className:i.basket,children:(0,s.jsx)(a.JO,{className:i.basketIcon,icon:"ion:cart-outline"})})]})]})})},l=function(t){var r=t.products,e=t.width;return(0,s.jsx)(n.ZP,{container:!0,direction:"row",alignItems:{xs:"center",xl:"start"},columns:{xs:6,md:4},rowGap:{xs:2.5,xl:6.25},columnGap:{xs:1,md:1.5,xl:1.75},minWidth:"320px",maxWidth:e?"1130px":"844px",justifyContent:"center",children:r.map((function(t){return(0,s.jsx)(n.ZP,{item:!0,children:(0,s.jsx)(u,{product:t})},t.id)}))})}},4782:function(t,r,e){e.d(r,{Z:function(){return x}});var n=e(3654),a=e(2711),o=e(1087),i="CategoryButton_button__fQowb",c="CategoryButton_link__1rDBY",s="CategoryButton_icon__g-6p-",u="CategoryButton_popup__Boo5x",l="CategoryButton_text__ujtRZ",d=e(184),p=function(t){var r=t.item,e=t.href,n=t.icon,p=t.text;return(0,d.jsx)("div",{className:i,children:(0,d.jsxs)(o.rU,{to:"".concat(e,"/").concat(r),className:c,children:[(0,d.jsx)(a.JO,{className:s,icon:n}),(0,d.jsx)("div",{className:u,children:(0,d.jsx)("p",{className:l,children:p})})]})})},x=function(t){var r=t.array,e=t.breakpoints,a=t.href,o=t.rowGap,i=t.columnGap,c=t.sx;return(0,d.jsx)(n.Z,{container:!0,sx:c,rowGap:o,columnGap:i,children:r.map((function(t){return(0,d.jsx)(n.Z,{breakpoints:e,children:(0,d.jsx)(p,{item:t.id,href:a,icon:t.icon,text:t.name})},t.id)}))})}},397:function(t,r,e){e.d(r,{Z:function(){return d}});var n=e(4554),a=e(4942),o=e(1413),i=e(6934),c=e(890),s={fontFamily:"Montserrat",fontStyle:"normal",fontWeight:"300",lineHeight:"130%"},u=(0,i.ZP)(c.Z)((function(t){var r=t.theme;return(0,o.Z)((0,o.Z)({},s),{},(0,a.Z)({marginTop:"20px",marginBottom:"20px",fontSize:"18px",fontWeight:700},r.breakpoints.up("xl"),{marginTop:"50px",marginBottom:"50px",fontSize:"25px"}))})),l=e(184),d=function(t){var r=t.text,e=t.variant,a=t.sx;return(0,l.jsx)(n.Z,{sx:{width:"100%",maxWidth:500},children:(0,l.jsx)(u,{variant:e,gutterBottom:!0,sx:a,children:r})})}},283:function(t,r,e){e.r(r),e.d(r,{default:function(){return _}});var n=e(9439),a=e(2791),o=e(7689),i=e(6314),c=e(8396),s=e(397),u=e(4782),l=e(9944),d=e(7739),p=e(4165),x=e(5861),m=e(3352),f=function(){var t=(0,x.Z)((0,p.Z)().mark((function t(r){var e,n;return(0,p.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.Z.get("api/v1/sub-category/list",{params:{categoryId:r}});case 2:return e=t.sent,n=e.data.data,t.abrupt("return",n&&n.error?(console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430:",n.error),null):n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),h=e(7380),g=e(184),_=function(t){var r=t.desktop,e=(0,o.UO)().categoryId,p=(0,a.useState)([]),x=(0,n.Z)(p,2),m=x[0],_=x[1],j=(0,a.useState)([]),Z=(0,n.Z)(j,2),v=Z[0],b=Z[1],w=(0,a.useState)(4),y=(0,n.Z)(w,2),k=y[0],N=(y[1],(0,a.useState)("")),C=(0,n.Z)(N,2),S=C[0],G=C[1],I=[{path:"".concat(d.A.HOMEPAGE),name:"\u0413\u043e\u043b\u043e\u0432\u043d\u0430 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0430"},{path:"".concat(d.A.CATEGORY_PAGE,"/").concat(e),name:S}];return(0,a.useEffect)((function(){Promise.all([f(e),(0,h.CQ)(k,e)]).then((function(t){var r=(0,n.Z)(t,2),a=r[0],o=r[1];_(a),b(o);var i=a.find((function(t){return Number(t.categoryId)===Number(e)}));return i?G(i.catIdName):null})).catch((function(t){return console.error("\u0412\u0438\u043d\u0438\u043a\u043b\u0430 \u043f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u0456 \u0434\u0430\u043d\u0438\u0445:",t),null}))}),[k,e]),(0,g.jsxs)(i.Z,{children:[(0,g.jsx)(c.Z,{currentPath:I,breakpoint:r}),(0,g.jsxs)(i.Z,{sx:{alignItems:!r&&"center"},marginBottom:r&&1.75,children:[(0,g.jsx)(s.Z,{text:S}),(0,g.jsx)(u.Z,{array:m,href:d.A.SUBCATEGORY_PAGE,rowGap:!r&&2.5,columnGap:!r&&1,sx:{justifyContent:r?"space-evenly":"center"}}),(0,g.jsx)(s.Z,{text:"\u0422\u043e\u043f \u043f\u0440\u043e\u0434\u0430\u0436\u0456\u0432"}),(0,g.jsx)(i.Z,{sx:{alignItems:"center"},children:(0,g.jsx)(l.Z,{products:v,width:!0})})]})]})}}}]);
//# sourceMappingURL=CategoryPage.e27d5a9e.chunk.js.map