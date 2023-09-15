"use strict";(self.webpackChunkstore_app=self.webpackChunkstore_app||[]).push([[29],{8396:function(e,r,t){t.d(r,{Z:function(){return f}});var n=t(1413),a=t(2791),i=t(7689),c=t(1087),o=t(2711),s=t(533),l=t(4942),u=t(6934),d=t(3517),p=(0,u.ZP)(d.Z)((function(e){var r=e.theme;return(0,l.Z)({fontFamily:"Montserrat",fontSize:"20px",fontWeight:"300",fontStyle:"normal",lineHeight:"130%",color:"var(--mainColor)","& .MuiBreadcrumbs-separator":{marginLeft:"0",marginRight:"0"}},r.breakpoints.down("xl"),{fontSize:"15px",fontWeight:"500","& .MuiBreadcrumbs-ol":{flexDirection:"row-reverse",justifyContent:"flex-end"}})})),x=t(7739),m=t(184),f=function(e){var r=e.current,t=e.breakpoint,l=(0,i.TH)().pathname.split("/").filter(Boolean).slice(1);return(0,m.jsxs)(p,{"aria-label":"breadcrumb","aria-current":"last",separator:(0,m.jsx)(o.JO,{icon:"iconamoon:arrow-right-2-duotone",style:{fontSize:"24px"}}),children:[(0,m.jsx)(s.Z,{color:"inherit",underline:"none",component:c.rU,to:x.A.HOMEPAGE,sx:{display:"flex",alignItems:"center"},children:t?"\u0413\u043e\u043b\u043e\u0432\u043d\u0430 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0430":(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.JO,{icon:"iconamoon:arrow-left-2-duotone",style:{fontSize:"24px"}}),"\u041d\u0430 \u0433\u043e\u043b\u043e\u0432\u043d\u0443"]})}),t&&l.map((function(e,i){var o=i===l.at(-1),u=r,d="/".concat(l.slice(0,i+1).join("/")),p={href:e.url,color:"inherit",underline:"none",style:{fontWeight:!o&&"500",cursor:!o&&"default",visibility:!t&&!o&&"hidden"}};return(0,a.createElement)(s.Z,(0,n.Z)((0,n.Z)({},p),{},{component:c.rU,to:d,key:i}),u)}))]})}},9944:function(e,r,t){t.d(r,{Z:function(){return l}});var n=t(1889),a=t(2711),i=t(1087),c={wrapper:"card_wrapper__Msjlg",card:"card_card__XoCn7",productImage:"card_productImage__I9Q60",title:"card_title__tpVSx",priceUah:"card_priceUah__wwA55",info:"card_info__XwM5u",basket:"card_basket__ORJZR",basketIcon:"card_basketIcon__RZmiD",image:"card_image__1kSDg"},o=t(184),s=function(e){var r=e.product,t=r.href,n=r.title,s=r.image,l=r.price;return(0,o.jsx)(i.rU,{to:t,children:(0,o.jsxs)("div",{className:c.wrapper,children:[(0,o.jsx)("div",{className:c.card,children:(0,o.jsx)("div",{className:c.productImage,children:(0,o.jsx)("img",{src:s,alt:"product image",width:"100",height:"120",className:c.image})})}),(0,o.jsx)("div",{className:c.title,children:(0,o.jsx)("h3",{title:n,children:n})}),(0,o.jsxs)("div",{className:c.info,children:[(0,o.jsx)("div",{className:c.priceGroup,children:(0,o.jsx)("p",{className:c.priceUah,children:"".concat(l.toLocaleString()," \u20b4")})}),(0,o.jsx)("div",{className:c.basket,children:(0,o.jsx)(a.JO,{className:c.basketIcon,icon:"ion:cart-outline"})})]})]})})},l=function(e){var r=e.products,t=e.width;return(0,o.jsx)(n.ZP,{container:!0,direction:"row",alignItems:{xs:"center",xl:"start"},columns:{xs:6,md:4},rowGap:{xs:2.5,xl:6.25},columnGap:{xs:1,md:1.5,xl:1.75},minWidth:"320px",maxWidth:t?"1130px":"844px",justifyContent:"center",children:r.map((function(e){return(0,o.jsx)(n.ZP,{item:!0,children:(0,o.jsx)(s,{product:e})},e.id)}))})}},4782:function(e,r,t){t.d(r,{Z:function(){return x}});var n=t(4308),a=t(2711),i=t(1087),c="CategoryButton_button__fQowb",o="CategoryButton_link__1rDBY",s="CategoryButton_icon__g-6p-",l="CategoryButton_popup__Boo5x",u="CategoryButton_text__ujtRZ",d=t(184),p=function(e){var r=e.item,t=e.href,n=e.icon,p=e.text;return(0,d.jsx)("div",{className:c,children:(0,d.jsxs)(i.rU,{to:"".concat(t,"/").concat(r),className:o,children:[(0,d.jsx)(a.JO,{className:s,icon:n}),(0,d.jsx)("div",{className:l,children:(0,d.jsx)("p",{className:u,children:p})})]})})},x=function(e){var r=e.array,t=e.breakpoints,a=e.href,i=e.rowGap,c=e.columnGap,o=e.sx;return(0,d.jsx)(n.Z,{container:!0,sx:o,rowGap:i,columnGap:c,children:r.map((function(e){return(0,d.jsx)(n.Z,{breakpoints:t,children:(0,d.jsx)(p,{item:e.id,href:a,icon:e.icon,text:e.name})},e.id)}))})}},4475:function(e,r,t){t.d(r,{Z:function(){return i}});var n="Title_title__mrNq5",a=t(184),i=function(e){var r=e.text;return(0,a.jsx)("div",{className:n,children:(0,a.jsx)("h3",{children:r})})}},283:function(e,r,t){t.r(r),t.d(r,{default:function(){return j}});var n=t(9439),a=t(2791),i=t(7689),c=t(6314),o=t(8396),s=t(4475),l=t(4782),u=t(9944),d=t(7739),p=t(4165),x=t(5861),m=t(3352),f=function(){var e=(0,x.Z)((0,p.Z)().mark((function e(r){var t,n;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.Z.get("api/v1/sub-category/list",{params:{categoryId:r}});case 2:return t=e.sent,n=t.data.data,e.abrupt("return",n&&n.error?(console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430:",n.error),null):n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h=t(7380),_=t(184),j=function(e){var r=e.desktop,t=(0,i.UO)().categoryId,p=(0,a.useState)([]),x=(0,n.Z)(p,2),m=x[0],j=x[1],g=(0,a.useState)([]),Z=(0,n.Z)(g,2),v=Z[0],b=Z[1],y=(0,a.useState)(4),w=(0,n.Z)(y,2),k=w[0],N=(w[1],(0,a.useState)("")),I=(0,n.Z)(N,2),C=I[0],S=I[1];return(0,a.useEffect)((function(){Promise.all([f(t),(0,h.CQ)(k,t)]).then((function(e){var r=(0,n.Z)(e,2),a=r[0],i=r[1];j(a),b(i);var c=a.find((function(e){return Number(e.categoryId)===Number(t)}));return c?S(c.catIdName):null})).catch((function(e){return console.error("\u0412\u0438\u043d\u0438\u043a\u043b\u0430 \u043f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u0456 \u0434\u0430\u043d\u0438\u0445:",e),null}))}),[k,t]),(0,_.jsxs)(c.Z,{children:[(0,_.jsx)(o.Z,{current:C,breakpoint:r}),(0,_.jsxs)(c.Z,{sx:{alignItems:!r&&"center"},marginBottom:r&&1.75,children:[(0,_.jsx)(s.Z,{text:C}),(0,_.jsx)(l.Z,{array:m,href:d.A.SUBCATEGORY_PAGE,rowGap:!r&&2.5,columnGap:!r&&1,sx:{justifyContent:r?"space-evenly":"center"}}),(0,_.jsx)(s.Z,{text:"\u0422\u043e\u043f \u043f\u0440\u043e\u0434\u0430\u0436\u0456\u0432"}),(0,_.jsx)(c.Z,{sx:{alignItems:"center"},children:(0,_.jsx)(u.Z,{products:v,width:!0})})]})]})}}}]);
//# sourceMappingURL=CategoryPage.dc79a532.chunk.js.map