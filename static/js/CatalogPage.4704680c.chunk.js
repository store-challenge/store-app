"use strict";(self.webpackChunkstore_app=self.webpackChunkstore_app||[]).push([[671],{8107:function(r,t,e){e.d(t,{Z:function(){return c}});var n=e(4942),a=e(6934),i=e(4518),o=(0,a.ZP)(i.Z)((function(r){var t=r.theme;return(0,n.Z)({width:"288px",height:"48px",padding:"8px 22px",fontFamily:'"Montserrat", sans-serif',fontSize:"15px",lineHeight:"26px",textTransform:"none","&::first-letter":{textTransform:"capitalize"},border:"1px solid var(--mainColor)",borderRadius:"15px","&:hover":{borderColor:"var(--mainColor)",backgroundColor:"transparent"},"&:active":{color:"var(--secondColor)",borderColor:"var(--buttonClickColor)",backgroundColor:"var(--buttonClickColor)"}},t.breakpoints.up("xl"),{width:"177px",height:"42px",boxShadow:"0px 3px 1px -2px rgba(0, 0, 0, 0.20), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)","&:hover":{border:"inherit"},"&:active,&:focus-visible":{backgroundColor:"var(--buttonClickColor)"}})})),s=e(184),c=function(r){var t=r.onClick,e=r.text,n=r.type,a=r.sx,i=r.disabled,c=r.desktop;return(0,s.jsx)(o,{variant:c?"contained":"outlined",type:n,disabled:i,disableElevation:!0,sx:a,onClick:t,children:e})}},9944:function(r,t,e){e.d(t,{Z:function(){return u}});var n=e(1889),a=e(2711),i=e(1087),o={wrapper:"card_wrapper__Msjlg",card:"card_card__XoCn7",productImage:"card_productImage__I9Q60",image:"card_image__1kSDg",title:"card_title__tpVSx",priceUah:"card_priceUah__wwA55",info:"card_info__XwM5u",basket:"card_basket__ORJZR",basketIcon:"card_basketIcon__RZmiD"},s=e(7739),c=e(184),l=function(r){var t=r.product,e=t.id,n=t.title,l=t.image,u=t.price;return(0,c.jsx)(i.rU,{to:"".concat(s.A.PRODUCT_PAGE,"/").concat(e),children:(0,c.jsxs)("div",{className:o.wrapper,children:[(0,c.jsx)("div",{className:o.card,children:(0,c.jsx)("div",{className:o.productImage,children:(0,c.jsx)("img",{src:l,alt:"product image",width:"100%",height:"100%",className:o.image})})}),(0,c.jsx)("div",{className:o.title,children:(0,c.jsx)("h3",{title:n,children:n})}),(0,c.jsxs)("div",{className:o.info,children:[(0,c.jsx)("div",{className:o.priceGroup,children:(0,c.jsx)("p",{className:o.priceUah,children:"".concat(u.toLocaleString()," \u20b4")})}),(0,c.jsx)("div",{className:o.basket,children:(0,c.jsx)(a.JO,{className:o.basketIcon,icon:"ion:cart-outline"})})]})]})})},u=function(r){var t=r.products,e=r.width;return(0,c.jsx)(n.ZP,{container:!0,direction:"row",alignItems:{xs:"center",xl:"start"},columns:{xs:6,md:4},rowGap:{xs:2.5,xl:6.25},columnGap:{xs:1,md:1.5,xl:1.75},minWidth:"320px",maxWidth:e?"1130px":"844px",justifyContent:"center",children:t.map((function(r){return(0,c.jsx)(n.ZP,{item:!0,children:(0,c.jsx)(l,{product:r})},r.id)}))})}},4782:function(r,t,e){e.d(t,{Z:function(){return p}});var n=e(4308),a=e(2711),i=e(1087),o="CategoryButton_button__fQowb",s="CategoryButton_link__1rDBY",c="CategoryButton_icon__g-6p-",l="CategoryButton_popup__Boo5x",u="CategoryButton_text__ujtRZ",d=e(184),x=function(r){var t=r.item,e=r.href,n=r.icon,x=r.text;return(0,d.jsx)("div",{className:o,children:(0,d.jsxs)(i.rU,{to:"".concat(e,"/").concat(t),className:s,children:[(0,d.jsx)(a.JO,{className:c,icon:n}),(0,d.jsx)("div",{className:l,children:(0,d.jsx)("p",{className:u,children:x})})]})})},p=function(r){var t=r.array,e=r.breakpoints,a=r.href,i=r.rowGap,o=r.columnGap,s=r.sx;return(0,d.jsx)(n.Z,{container:!0,sx:s,rowGap:i,columnGap:o,children:t.map((function(r){return(0,d.jsx)(n.Z,{breakpoints:e,children:(0,d.jsx)(x,{item:r.id,href:a,icon:r.icon,text:r.name})},r.id)}))})}},397:function(r,t,e){e.d(t,{D:function(){return p},b:function(){return x}});var n=e(4554),a=e(4942),i=e(1413),o=e(6934),s=e(890),c={fontFamily:"Montserrat",fontStyle:"normal",fontWeight:500,lineHeight:"130%"},l=(0,o.ZP)(s.Z)((function(r){var t=r.theme;return(0,i.Z)((0,i.Z)({},c),{},(0,a.Z)({marginTop:"20px",marginBottom:"20px",fontSize:"18px",fontWeight:700},t.breakpoints.up("xl"),{marginTop:"50px",marginBottom:"50px",fontSize:"25px"}))})),u=(0,o.ZP)(s.Z)((function(r){var t=r.theme;return(0,i.Z)((0,i.Z)({},c),{},(0,a.Z)({marginTop:"20px",marginBottom:"20px",fontSize:"13px"},t.breakpoints.up("xl"),{marginTop:"50px",marginBottom:"50px",fontSize:"20px"}))})),d=e(184),x=function(r){var t=r.text,e=r.sx;return(0,d.jsx)(n.Z,{sx:{width:"100%"},children:(0,d.jsx)(l,{variant:"h3",gutterBottom:!0,sx:e,children:t})})},p=function(r){var t=r.text,e=r.sx;return(0,d.jsx)(n.Z,{sx:{width:"100%"},children:(0,d.jsx)(u,{variant:"h4",gutterBottom:!0,sx:e,children:t})})}},4213:function(r,t,e){e.r(t),e.d(t,{default:function(){return G}});var n=e(9439),a=e(2791),i=e(6314),o="Advertising_hero__b-s0y",s="Advertising_image__gFQ9n",c="Advertising_undefined__qK483",l=e(184),u=function(r){var t=r.advertising,e=(0,a.useState)(0),i=(0,n.Z)(e,2),u=i[0],d=i[1];return(0,a.useEffect)((function(){var r=setInterval((function(){var r=Math.floor(Math.random()*t.length);d(r)}),6e3);return function(){return clearInterval(r)}}),[]),(0,l.jsx)("div",{className:o,children:void 0===u?(0,l.jsx)("span",{className:c,children:"\u0422\u0443\u0442 \u043c\u043e\u0436\u0435 \u0431\u0443\u0442\u0438 \u0432\u0430\u0448\u0430 \u0440\u0435\u043a\u043b\u0430\u043c\u0430"}):(0,l.jsx)("img",{className:s,src:t[u],alt:"Advertising"})})},d=e(4782),x=e(3967),p=e(5193),m=e(4308),f=e(8107),h=function(r){var t=r.array,e=r.href,i=(0,x.Z)(),o=(0,p.Z)(i.breakpoints.up("sm")),s=(0,p.Z)(i.breakpoints.up("md")),c=(0,a.useState)(!1),u=(0,n.Z)(c,2),h=u[0],v=u[1];return(0,l.jsxs)(m.Z,{container:!0,minWidth:"xs",sx:{flexDirection:"column"},children:[(0,l.jsx)(d.Z,{sx:{justifyContent:"center",marginTop:2.5},breakpoints:{xs:6,md:4,lg:3},array:t.slice(0,h?t.length:s?4:o?3:2),href:e,rowGap:2.5,columnGap:1}),(0,l.jsx)(m.Z,{sx:{marginX:"auto",marginTop:2.5},children:(0,l.jsx)(f.Z,{text:h?"\u0417\u043c\u0435\u043d\u0448\u0438\u0442\u0438":"\u0411\u0456\u043b\u044c\u0448\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u0439",onClick:function(){v((function(r){return!r}))},sx:{color:"var(--mainColor)",backgroundColor:"var(--secondColor)"}})})]})},v=e(397),g=e(9944),_=e(7739);var b=e.p+"static/media/adv1.65e0388d5450456e4dff10b660e4b7b9.svg";var j=e.p+"static/media/adv2.9069f0eb15e10f428269acae1a26f974.svg";var Z=[b,j,e.p+"static/media/adv3.6ea1222a56aed48a8e58574e88258b7f.svg"],k=e(4165),C=e(5861),w=e(3352),y=function(){var r=(0,C.Z)((0,k.Z)().mark((function r(){var t,e;return(0,k.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,w.Z.get("api/v1/category/list");case 2:return t=r.sent,e=t.data.data,r.abrupt("return",e&&e.error?(console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430:",e.error),null):e);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),N=e(7380),G=function(r){var t=r.desktop,e=(0,a.useState)([]),o=(0,n.Z)(e,2),s=o[0],c=o[1],x=(0,a.useState)([]),p=(0,n.Z)(x,2),m=p[0],f=p[1],b=(0,a.useState)(9),j=(0,n.Z)(b,2),k=j[0];j[1];return(0,a.useEffect)((function(){Promise.all([y(),(0,N.u1)(k)]).then((function(r){var t=(0,n.Z)(r,2),e=t[0],a=t[1];return c(e),f(a),null})).catch((function(r){return console.error("\u0412\u0438\u043d\u0438\u043a\u043b\u0430 \u043f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u0456 \u0434\u0430\u043d\u0438\u0445:",r),null}))}),[k]),(0,l.jsxs)(i.Z,{direction:{xs:"column",xl:"row"},justifyContent:"center",alignItems:{xs:"center",xl:"flex-start"},marginBottom:t&&1.75,children:[t&&(0,l.jsx)(d.Z,{array:s,href:_.A.CATEGORY_PAGE,rowGap:6.25,columnGap:0,breakpoints:{xl:12},sx:{flexDirection:"column",marginRight:14}}),(0,l.jsxs)(i.Z,{maxWidth:"100%",direction:"column",alignItems:t?"flex-start":"center",children:[(0,l.jsx)(u,{advertising:Z}),!t&&(0,l.jsx)(h,{array:s,href:_.A.CATEGORY_PAGE}),(0,l.jsx)(v.b,{text:"\u0422\u043e\u043f \u043f\u0440\u043e\u0434\u0430\u0436\u0456\u0432"}),(0,l.jsx)(g.Z,{products:m})]})]})}}}]);
//# sourceMappingURL=CatalogPage.4704680c.chunk.js.map