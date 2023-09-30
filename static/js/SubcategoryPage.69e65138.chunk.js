"use strict";(self.webpackChunkstore_app=self.webpackChunkstore_app||[]).push([[166],{8396:function(e,r,n){n.d(r,{Z:function(){return x}});var o=n(1413),t=n(1087),a=n(2711),i=n(8870),l=n(533),c=n(4942),d=n(6934),s=n(3517),u=(0,d.ZP)(s.Z)((function(e){var r=e.theme;return(0,c.Z)({fontFamily:"Montserrat",fontSize:"20px",fontWeight:"300",fontStyle:"normal",lineHeight:"130%",color:"var(--mainColor)","& .MuiBreadcrumbs-separator":{marginLeft:"0",marginRight:"0"}},r.breakpoints.down("xl"),{fontSize:"15px",fontWeight:"500","& .MuiBreadcrumbs-ol":{flexDirection:"row-reverse",justifyContent:"flex-end"}})})),p=n(184),x=function(e){var r=e.currentPath,n=e.breakpoint,c=r.length>1?[r.at(-2)]:null,d=n?r:c;return(0,p.jsx)(u,{"aria-label":"breadcrumb","aria-current":"last",separator:n?(0,p.jsx)(a.JO,{icon:"iconamoon:arrow-right-2-duotone",style:{fontSize:"24px"}}):null,children:d.map((function(e,r){var c=r===d.length-1,s={color:"inherit",underline:"none",style:{fontWeight:c&&"500",cursor:c&&"default"}};return(0,p.jsxs)(i.Z,{display:"flex",alignItems:"center",children:[!n&&(0,p.jsx)(a.JO,{icon:"iconamoon:arrow-left-2-duotone",style:{fontSize:"24px"}}),(0,p.jsx)(l.Z,(0,o.Z)((0,o.Z)({},s),{},{component:t.rU,to:e.path,children:e.name}))]},r)}))})}},9944:function(e,r,n){n.d(r,{Z:function(){return s}});var o=n(1889),t=n(2711),a=n(1087),i={wrapper:"card_wrapper__Msjlg",card:"card_card__XoCn7",productImage:"card_productImage__I9Q60",image:"card_image__1kSDg",title:"card_title__tpVSx",priceUah:"card_priceUah__wwA55",info:"card_info__XwM5u",basket:"card_basket__ORJZR",basketIcon:"card_basketIcon__RZmiD"},l=n(7739),c=n(184),d=function(e){var r=e.product,n=r.id,o=r.title,d=r.image,s=r.price;return(0,c.jsx)(a.rU,{to:"".concat(l.A.PRODUCT_PAGE,"/").concat(n),children:(0,c.jsxs)("div",{className:i.wrapper,children:[(0,c.jsx)("div",{className:i.card,children:(0,c.jsx)("div",{className:i.productImage,children:(0,c.jsx)("img",{src:d,alt:"product image",width:"100%",height:"100%",className:i.image})})}),(0,c.jsx)("div",{className:i.title,children:(0,c.jsx)("h3",{title:o,children:o})}),(0,c.jsxs)("div",{className:i.info,children:[(0,c.jsx)("div",{className:i.priceGroup,children:(0,c.jsx)("p",{className:i.priceUah,children:"".concat(s.toLocaleString()," \u20b4")})}),(0,c.jsx)("div",{className:i.basket,children:(0,c.jsx)(t.JO,{className:i.basketIcon,icon:"ion:cart-outline"})})]})]})})},s=function(e){var r=e.products,n=e.width;return(0,c.jsx)(o.ZP,{container:!0,direction:"row",alignItems:{xs:"center",xl:"start"},columns:{xs:6,md:4},rowGap:{xs:2.5,xl:6.25},columnGap:{xs:1,md:1.5,xl:1.75},minWidth:"320px",maxWidth:n?"1130px":"844px",justifyContent:"center",children:r.map((function(e){return(0,c.jsx)(o.ZP,{item:!0,children:(0,c.jsx)(d,{product:e})},e.id)}))})}},397:function(e,r,n){n.d(r,{Z:function(){return u}});var o=n(8870),t=n(4942),a=n(1413),i=n(6934),l=n(890),c={fontFamily:"Montserrat",fontStyle:"normal",fontWeight:"300",lineHeight:"130%"},d=(0,i.ZP)(l.Z)((function(e){var r=e.theme;return(0,a.Z)((0,a.Z)({},c),{},(0,t.Z)({marginTop:"20px",marginBottom:"20px",fontSize:"18px",fontWeight:700},r.breakpoints.up("xl"),{marginTop:"50px",marginBottom:"50px",fontSize:"25px"}))})),s=n(184),u=function(e){var r=e.text,n=e.variant,t=e.sx;return(0,s.jsx)(o.Z,{sx:{width:"100%",maxWidth:500},children:(0,s.jsx)(d,{variant:n,gutterBottom:!0,sx:t,children:r})})}},8686:function(e,r,n){n.r(r),n.d(r,{default:function(){return X}});var o=n(9439),t=n(2791),a=n(6314),i=n(7689),l=n(7739),c=n(8396),d=n(397),s=n(9944),u=n(1723),p=n(1413),x=n(4942),m=n(890),h=n(7078),g=n(9768),v=n(8954),b=n(3903),f=n(6934),C=n(9276),k={fontFamily:"Montserrat",fontSize:"10px",fontStyle:"normal",fontWeight:300,lineHeight:"130%"},y=(0,f.ZP)(C.Z)((function(e){var r=e.theme;return(0,x.Z)({boxSizing:"border-box",flexDirection:"column",width:"320px",height:"100%",display:"flex",gap:"20px",padding:"20px",backgroundColor:"var(--mainColor)"},r.breakpoints.up("xl"),{width:"272px",height:"669px",backgroundColor:"var(--secondColor)",gap:"50px",marginRight:"20px",padding:"0px"})})),Z=(0,f.ZP)(m.Z)((function(e){var r=e.theme;return(0,x.Z)({fontFamily:"Montserrat",fontSize:"15px",fontStyle:"normal",fontWeight:500,lineHeight:"130%",marginBottom:"20px",color:"var(--secondColor)"},r.breakpoints.up("xl"),{fontSize:"20px",marginBottom:"50px",color:"var(--textColor)"})})),j=(0,f.ZP)(m.Z)((function(e){var r=e.theme;return(0,x.Z)({fontFamily:"Montserrat",fontSize:"16px",fontStyle:"normal",fontWeight:300,lineHeight:"130%",color:"var(--secondColor)"},r.breakpoints.up("xl"),{color:"var(--textColor)"})})),S=(0,f.ZP)(h.Z)((function(e){var r=e.theme;return(0,x.Z)({fontFamily:"Montserrat",fontSize:"16px",textDecoration:"underline",color:"var(--secondColor)","& .MuiInputBase-input":{textAlign:"left"},"& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":{display:"none"},"& input[type=number]":{MozAppearance:"textfield"}},r.breakpoints.up("xl"),{fontSize:"20px",color:"var(--mainColor)"})})),w=(0,f.ZP)(h.Z)((function(e){var r=e.theme;return(0,x.Z)({fontFamily:"Montserrat",fontSize:"16px",textDecoration:"underline",color:"var(--secondColor)","& .MuiInputBase-input":{textAlign:"right"},"& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":{display:"none"},"& input[type=number]":{MozAppearance:"textfield"}},r.breakpoints.up("xl"),{fontSize:"20px",color:"var(--mainColor)"})})),B=(0,f.ZP)(g.ZP)((function(e){var r=e.theme;return(0,x.Z)({color:"var(--secondColor)",width:"270px",textAlign:"center",display:"block",margin:"0 auto",marginTop:"20px"},r.breakpoints.up("xl"),{color:"var(--mainColor)",width:"250px",marginTop:"50px"})})),P=((0,f.ZP)(v.Z)((function(e){var r=e.theme;return(0,p.Z)((0,p.Z)({},k),{},(0,x.Z)({padding:"8px 20px",width:"288px",border:"0.38px solid var(--mainColor)",borderRadius:"10px","& .MuiInputBase-input":{padding:0}},r.breakpoints.up("xl"),{padding:"18px",width:"100%",fontSize:"16px",border:"1px solid var(--mainColor)",borderRadius:"20px"}))})),(0,f.ZP)(b.Z)((function(e){var r=e.theme;return(0,p.Z)((0,p.Z)({},k),{},(0,x.Z)({minHeight:"10px",fontSize:"8.371px",fontWeight:500,"&.Mui-selected":{color:"var(--textColor)",backgroundColor:"var(--secondColor)"},"&.Mui-selected:hover, &:hover":{fontSize:"10px",color:"var(--secondColor)",backgroundColor:"var(--buttonHoverColor)"}},r.breakpoints.up("xl"),{padding:"0",fontSize:"20px",fontWeight:300,"&.Mui-selected":{},"&.Mui-selected:hover, &:hover":{fontSize:"22px",color:"var(--secondColor)",backgroundColor:"var(--buttonHoverColor)"}}))})),n(8870)),M=n(184);function _(e){var r=e.priceRange,n=e.setPriceRange,o=e.desktop,t=function(){r<0?n(0):r>2e4&&n(2e4)};return(0,M.jsxs)(P.Z,{children:[(0,M.jsx)(Z,{children:"\u0426\u0456\u043d\u0430"}),(0,M.jsxs)(P.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,M.jsx)(j,{children:"\u0412\u0456\u0434"}),(0,M.jsx)(j,{children:"\u0414\u043e"})]}),(0,M.jsxs)(a.Z,{sx:{gap:o?"0px":"20px"},children:[(0,M.jsx)(B,{value:r,max:2e4,onChange:function(e,r){n(r)},valueLabelDisplay:"auto"}),(0,M.jsxs)(a.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,M.jsx)(S,{disableUnderline:!0,type:"number",value:r[0],onBlur:t,onChange:function(e){n([Number(e.target.value),r[1]])}}),(0,M.jsx)(w,{disableUnderline:!0,type:"number",value:r[1],onBlur:t,onChange:function(e){n([r[0],Number(e.target.value)])}})]})]})]})}var z=n(4925),R=n(7280),I=n(8029),A=n(1918),H=n(9174),N=n(9900),W=[{key:0,brand:"H&M"},{key:1,brand:"Bershka"},{key:2,brand:"P&B"},{key:3,brand:"MANGO"},{key:4,brand:"H&B"},{key:5,brand:"Massimo Dutti"},{key:6,brand:"H&C"},{key:7,brand:"Forever 21"},{key:8,brand:"GAP"},{key:9,brand:"Nike"},{key:10,brand:"Adidas"},{key:11,brand:"Puma"},{key:12,brand:"Levi's"},{key:13,brand:"Calvin Klein"},{key:14,brand:"Tommy Hilfiger"},{key:15,brand:"Louis Vuitton"},{key:16,brand:"Gucci"},{key:17,brand:"Prada"},{key:18,brand:"Chanel"},{key:19,brand:"Versace"},{key:20,brand:"Dior"},{key:21,brand:"Balenciaga"},{key:22,brand:"Givenchy"},{key:23,brand:"Fendi"},{key:24,brand:"Valentino"},{key:25,brand:"Yves Saint Laurent"},{key:26,brand:"Balmain"}];function D(e){e.onSelect;var r=e.breakpoint,n=(0,t.useState)([]),a=(0,o.Z)(n,2),i=a[0],l=a[1],c={PaperProps:{style:{maxWidth:"100%",maxHeight:224,borderRadius:r?"20px":"15px",color:!r&&"var(--secondColor)",backgroundColor:r?"var(--secondColor)":"var(--mainColor)",boxShadow:"0px 8px 12px 0px rgba(9, 30, 66, 0.15), 0px 0px 1px 0px rgba(9, 30, 66, 0.31)"}}};return(0,M.jsxs)("div",{children:[(0,M.jsx)(Z,{children:"\u0411\u0440\u0435\u043d\u0434"}),(0,M.jsxs)(v.Z,{sx:{width:r?"100%":"280px"},children:[(0,M.jsx)(z.Z,{id:"demo-multiple-chip-label",children:"\u0412\u0438\u0431\u0435\u0440\u0438 \u0431\u0440\u0435\u043d\u0434"}),(0,M.jsx)(R.Z,{labelId:"demo-multiple-chip-label",id:"demo-multiple-chip",multiple:!0,value:i,onChange:function(e){var r=e.target.value;l("string"===typeof r?r.split(","):r)},input:(0,M.jsx)(I.Z,{id:"select-multiple-chip",label:"Chip"}),renderValue:function(e){return(0,M.jsx)(P.Z,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:e.map((function(e){return(0,M.jsx)(A.Z,{onMouseDown:function(e){e.stopPropagation()},label:e,onDelete:(r=e,function(){l((function(e){return e.filter((function(e){return e!==r}))}))})});var r}))})},MenuProps:c,children:W.map((function(e,r){return(0,M.jsxs)(b.Z,{value:e.brand,children:[(0,M.jsx)(H.Z,{checked:i.includes(e.brand)}),(0,M.jsx)(N.Z,{primary:e.brand})]},r)}))})]})]})}var O=function(e){var r=e.priceRange,n=e.setPriceRange,o=(e.selectedBrand,e.setSelectedBrand),t=e.desktop;return(0,M.jsxs)(y,{children:[(0,M.jsx)(_,{priceRange:r,setPriceRange:n,desktop:t}),(0,M.jsx)(D,{setSelectedBrand:o,breakpoint:t}),(0,M.jsx)(u.Z,{text:"\u0417\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u0442\u0438",type:"submit",sx:{backgroundColor:t?"var(--mainColor)":"var(--secondColor)",color:t?"var(--secondColor)":"var(--mainColor)"}}),(0,M.jsx)(u.Z,{text:"\u0421\u043a\u0438\u043d\u0443\u0442\u0438 \u0444\u0456\u043b\u044c\u0442\u0440\u0438",type:"button",sx:{backgroundColor:t?"var(--secondColor)":"var(--mainColor)",color:t?"var(--mainColor)":"var(--secondColor)",padding:"8px"}})]})},E=n(9953);function T(e){var r=e.priceRange,n=e.setPriceRange,o=e.selectedBrand,t=e.setSelectedBrand,a=e.drawerOpen,i=e.handleDrawerToggle;return(0,M.jsx)(E.ZP,{open:a,onClose:i,children:(0,M.jsxs)(y,{children:[(0,M.jsx)(_,{priceRange:r,setPriceRange:n}),(0,M.jsx)(D,{selectedBrand:o,setSelectedBrand:t}),(0,M.jsx)(u.Z,{text:"\u0417\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u0442\u0438",type:"submit",disableElevation:!0,onClick:"",sx:{backgroundColor:"var(--secondColor)",color:"var(--mainColor)",padding:"8px","&:hover":{color:"var(--secondColor)",backgroundColor:"var(--mainColor)",borderColor:"var(--secondColor)"}}}),(0,M.jsx)(u.Z,{text:"\u0421\u043a\u0438\u043d\u0443\u0442\u0438 \u0444\u0456\u043b\u044c\u0442\u0440\u0438",type:"reset",disableElevation:!0,onClick:"",sx:{backgroundColor:"var(--mainColor)",color:"var(--secondColor)",padding:"8px",borderColor:"var(--secondColor)","&:hover":{color:"var(--mainColor)",backgroundColor:"var(--secondColor)"}}})]})})}var G=function(e){var r=e.priceRange,n=e.setPriceRange,a=e.selectedBrand,i=e.setSelectedBrand,l=(e.desktop,(0,t.useState)(!1)),c=(0,o.Z)(l,2),d=c[0],s=c[1],p=function(){s((function(e){return!e}))};return(0,M.jsxs)("div",{children:[(0,M.jsx)(u.Z,{text:"\u0424\u0456\u043b\u044c\u0442\u0440\u0438",type:"button",disableElevation:!0,sx:{fontSize:"10px",lineHeight:"26px",textTransform:"none",width:"140px",height:"29px",color:"var(--secondColor)",backgroundColor:"var(--mainColor)",borderRadius:"8px","&:hover":{border:"inherit",backgroundColor:"var(--buttonHoverColor)"},"&:active,&:focus-visible":{backgroundColor:"var(--buttonClickColor)"}},onClick:p}),(0,M.jsx)(T,{priceRange:r,setPriceRange:n,selectedBrand:a,setSelectedBrand:i,drawerOpen:d,handleDrawerToggle:p})]})},F=n(2711),U={fontFamily:"Montserrat",fontSize:"10px",fontStyle:"normal",fontWeight:"300",lineHeight:"130%"},L=(0,f.ZP)(R.Z)((function(e){var r=e.theme;return(0,p.Z)((0,p.Z)({},U),{},(0,x.Z)({padding:"8px 12px",width:"140px",height:"29px",border:"0.38px solid var(--mainColor)",borderRadius:"8px","&.MuiInputBase-root":{cursor:"pointer"},"& .MuiInputBase-input":{padding:0}},r.breakpoints.up("xl"),{padding:"16px",width:"368px",height:"58px",fontSize:"16px",border:"1px solid var(--mainColor)",borderRadius:"20px"}))})),V=(0,f.ZP)(b.Z)((function(e){var r=e.theme;return(0,p.Z)((0,p.Z)({},U),{},(0,x.Z)({padding:"5px 20px",minHeight:"10px",width:"100%",fontSize:"10px",fontWeight:"500","&.MuiMenuItem-root.Mui-selected":{color:"var(--textColor)",backgroundColor:"var(--secondColor)"},"&.Mui-selected:hover, &:hover":{fontSize:"11px",color:"var(--secondColor)",backgroundColor:"var(--buttonHoverColor)"}},r.breakpoints.up("xl"),{padding:"0",flexDirection:"column",fontSize:"20px",fontWeight:"300","&.MuiMenuItem-root.Mui-selected":{color:"var(--secondColor)",backgroundColor:"var(--buttonHoverColor)"},"&.Mui-selected:hover, &:hover":{fontSize:"22px",color:"var(--secondColor)",backgroundColor:"var(--mainColor)"}}))})),J=function(e){var r=e.onSelect,n=e.breakpoint,a=(0,t.useState)("newest"),i=(0,o.Z)(a,2),l=i[0],c=i[1],d={PaperProps:{style:{display:"flex",justifyContent:"center",borderRadius:n?"20px":"15px",color:!n&&"var(--secondColor)",backgroundColor:n?"var(--secondColor)":"var(--mainColor)"}},MenuListProps:{style:{width:"100%",padding:0}}};return(0,M.jsx)(L,{defaultValue:"newest",value:l,onChange:function(e){var n=e.target.value;r(n),c(n)},sx:{"& .MuiOutlinedInput-notchedOutline":{border:"none"}},variant:"outlined",MenuProps:d,IconComponent:function(e){return(0,M.jsx)(F.JO,(0,p.Z)({icon:"iconamoon:arrow-down-2-duotone",style:{fontSize:n?"24px":"10px"}},e))},children:[{value:"asc",text:"\u0412\u0456\u0434 \u0434\u0435\u0448\u0435\u0432\u0438\u0445 \u0434\u043e \u0434\u043e\u0440\u043e\u0433\u0438\u0445"},{value:"desc",text:"\u0412\u0456\u0434 \u0434\u043e\u0440\u043e\u0433\u0438\u0445 \u0434\u043e \u0434\u0435\u0448\u0435\u0432\u0438\u0445"},{value:"az",text:"\u0412\u0456\u0434 \u0410 \u0434\u043e \u042f"},{value:"za",text:"\u0412\u0456\u0434 \u042f \u0434\u043e \u0410"},{value:"newest",text:"\u0417\u0430 \u043d\u043e\u0432\u0438\u0437\u043d\u043e\u044e"}].map((function(e,r){return(0,M.jsx)(V,{value:e.value,children:e.text},r)}))})},Y=n(7380),X=function(e){var r=e.desktop,n=(0,i.UO)().subcategoryId,p=(0,t.useState)(9),x=(0,o.Z)(p,2),m=x[0],h=x[1],g=(0,t.useState)([]),v=(0,o.Z)(g,2),b=v[0],f=v[1],C=(0,t.useState)([]),k=(0,o.Z)(C,2),y=(k[0],k[1],(0,t.useState)([0,2e4])),Z=(0,o.Z)(y,2),j=Z[0],S=Z[1],w=(0,t.useState)(""),B=(0,o.Z)(w,2),P=B[0],_=B[1],z=(0,t.useState)([]),R=(0,o.Z)(z,2),I=R[0],A=R[1],H=(I.brandId,I.brandName,I.categoryId),N=I.categoryName,W=I.subcategoryName,D=[{name:"asc",sortBy:"p.product_price",orderBy:"ASC"},{name:"desc",sortBy:"p.product_price",orderBy:"DESC"},{name:"az",sortBy:"p.product_title",orderBy:"ASC"},{name:"za",sortBy:"p.product_title",orderBy:"DESC"},{name:"newest",sortBy:"p.updated",orderBy:"DESC"}],E=(0,t.useState)(D.length-1),T=(0,o.Z)(E,2),F=T[0],U=T[1],L=[{path:"".concat(l.A.HOMEPAGE),name:"\u0413\u043e\u043b\u043e\u0432\u043d\u0430 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0430"},{path:"".concat(l.A.CATEGORY_PAGE,"/").concat(H),name:N},{path:"".concat(l.A.SUBCATEGORY_PAGE,"/").concat(n),name:W}];(0,t.useEffect)((function(){(0,Y.jw)(m,n,F.sortBy,F.orderBy).then((function(e){f(e);var r=e.find((function(e){return Number(e.subcategoryId)===Number(n)}));return r?A(r):null})).catch((function(e){return console.error("\u0412\u0438\u043d\u0438\u043a\u043b\u0430 \u043f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u0456 \u0434\u0430\u043d\u0438\u0445:",e),null}))}),[m,n,F.sortBy,F.orderBy]);return(0,M.jsxs)(a.Z,{children:[(0,M.jsx)(c.Z,{currentPath:L,breakpoint:r}),r&&(0,M.jsx)(d.Z,{text:W}),(0,M.jsxs)(a.Z,{direction:"row",justifyContent:r?"flex-end":"center",alignItems:"center",gap:"8px",marginTop:!r&&"22.5px",children:[!r&&(0,M.jsx)(G,{priceRange:j,setPriceRange:S,selectedBrand:P,setSelectedBrand:_,desktop:r}),(0,M.jsx)(J,{onSelect:function(e){D.map((function(r){return r.name===e&&U(r)}))},breakpoint:r})]}),(0,M.jsxs)(a.Z,{direction:{xs:"column",xl:"row"},justifyContent:"center",alignItems:{xs:"center",xl:"flex-start"},marginTop:r?"50px":"20px",children:[r&&(0,M.jsx)(O,{priceRange:j,setPriceRange:S,selectedBrand:P,setSelectedBrand:_,desktop:r}),(0,M.jsxs)(a.Z,{maxWidth:"100%",direction:"column",alignItems:r?"flex-end":"center",children:[(0,M.jsx)(s.Z,{products:b}),(0,M.jsx)(u.Z,{sx:{backgroundColor:r?"var(--mainColor)":"var(--secondColor)",color:r?"var(--secondColor)":"var(--mainColor)",marginTop:r?"50px":"20px","&.Mui-disabled":{backgroundColor:"#6b4c7d40"}},disabled:b,onClick:function(){h(m+9)},text:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438 \u0449\u0435"})]})]})]})}}}]);
//# sourceMappingURL=SubcategoryPage.69e65138.chunk.js.map