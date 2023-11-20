"use strict";(self.webpackChunkstore_app=self.webpackChunkstore_app||[]).push([[166],{8396:function(t,e,r){r.d(e,{Z:function(){return x}});var n=r(1413),o=r(1087),a=r(2711),i=r(8870),c=r(533),s=r(4942),u=r(6934),l=r(3517),d=(0,u.ZP)(l.Z)((function(t){var e=t.theme;return(0,s.Z)({fontFamily:"Montserrat",fontSize:"20px",fontWeight:"300",fontStyle:"normal",lineHeight:"130%",color:"var(--mainColor)","& .MuiBreadcrumbs-separator":{marginLeft:"0",marginRight:"0"}},e.breakpoints.down("xl"),{fontSize:"15px",fontWeight:"500","& .MuiBreadcrumbs-ol":{flexDirection:"row-reverse",justifyContent:"flex-end"}})})),p=r(184),x=function(t){var e=t.currentPath,r=t.breakpoint,s=e.length>1?[e.at(-2)]:null,u=r?e:s;return(0,p.jsx)(d,{"aria-label":"breadcrumb","aria-current":"last",separator:r?(0,p.jsx)(a.JO,{icon:"iconamoon:arrow-right-2-duotone",style:{fontSize:"24px"}}):null,children:u.map((function(t,e){var s=e===u.length-1,l={color:"inherit",underline:"none",style:{fontWeight:s&&"500",cursor:s&&"default"}};return(0,p.jsxs)(i.Z,{display:"flex",alignItems:"center",children:[!r&&(0,p.jsx)(a.JO,{icon:"iconamoon:arrow-left-2-duotone",style:{fontSize:"24px"}}),(0,p.jsx)(c.Z,(0,n.Z)((0,n.Z)({},l),{},{component:o.rU,to:t.path,children:t.name}))]},e)}))})}},397:function(t,e,r){r.d(e,{D:function(){return x},b:function(){return p}});var n=r(8870),o=r(4942),a=r(1413),i=r(6934),c=r(890),s={fontFamily:"Montserrat",fontStyle:"normal",fontWeight:500,lineHeight:"130%"},u=(0,i.ZP)(c.Z)((function(t){var e=t.theme;return(0,a.Z)((0,a.Z)({},s),{},(0,o.Z)({marginTop:"20px",marginBottom:"20px",fontSize:"18px",fontWeight:700},e.breakpoints.up("xl"),{marginTop:"50px",marginBottom:"50px",fontSize:"25px"}))})),l=(0,i.ZP)(c.Z)((function(t){var e=t.theme;return(0,a.Z)((0,a.Z)({},s),{},(0,o.Z)({marginTop:"20px",marginBottom:"20px",fontSize:"13px"},e.breakpoints.up("xl"),{marginTop:"50px",marginBottom:"50px",fontSize:"20px"}))})),d=r(184),p=function(t){var e=t.text,r=t.sx;return(0,d.jsx)(n.Z,{sx:{width:"100%"},children:(0,d.jsx)(u,{variant:"h3",gutterBottom:!0,sx:r,children:e})})},x=function(t){var e=t.text,r=t.sx;return(0,d.jsx)(n.Z,{sx:{width:"100%"},children:(0,d.jsx)(l,{variant:"h4",gutterBottom:!0,sx:r,children:e})})}},7515:function(t,e,r){r.r(e);var n=r(9439),o=r(2791),a=r(6314),i=r(7689),c=r(7739),s=r(8396),u=r(397),l=r(9944),d=r(1723),p=r(2768),x=r(1554),m=r(8286),f=r(7380),g=r(5993),h=r(184);e.default=function(t){var e=t.desktop,r=(0,i.UO)().subcategoryId,Z=(0,i.TH)(),y=(0,i.s0)(),b=new URLSearchParams(Z.search),B=(0,o.useState)(9),S=(0,n.Z)(B,2),v=S[0],j=S[1],C=(0,o.useState)([]),k=(0,n.Z)(C,2),w=k[0],P=k[1],z=(0,o.useState)([]),A=(0,n.Z)(z,2),E=A[0],I=A[1],T=(0,o.useState)([0,2e4]),R=(0,n.Z)(T,2),_=R[0],D=R[1],M=(0,o.useState)([]),O=(0,n.Z)(M,2),W=O[0],G=O[1],L=(0,o.useState)({}),N=(0,n.Z)(L,2),U=N[0],H=N[1],F=(U.brandId,U.brandName,U.categoryId),J=U.categoryName,Y=U.subcategoryName,Q=[{name:"asc",sortBy:"product_price",orderBy:"ASC"},{name:"desc",sortBy:"product_price",orderBy:"DESC"},{name:"az",sortBy:"product_title",orderBy:"ASC"},{name:"za",sortBy:"product_title",orderBy:"DESC"},{name:"newest",sortBy:"updated",orderBy:"DESC"}],q=(0,o.useState)((function(){var t=b.get("sort")||Q.at(-1).name;return Q.find((function(e){return e.name===t}))||Q.at(-1)})),K=(0,n.Z)(q,2),V=K[0],X=K[1],$=[{path:"".concat(c.A.HOMEPAGE),name:"\u0413\u043e\u043b\u043e\u0432\u043d\u0430 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0430"},{path:"".concat(c.A.CATEGORY_PAGE,"/").concat(F),name:J},{path:"".concat(c.A.SUBCATEGORY_PAGE,"/").concat(r),name:Y}];(0,o.useEffect)((function(){var t={limit:v,subcategoryId:r,sortBy:V.sortBy,orderBy:V.orderBy},e={subcategoryId:r};Promise.all([(0,f.jw)({configProducts:t}),(0,g.Q)({configBrands:e})]).then((function(t){var e=(0,n.Z)(t,2),o=e[0],a=e[1];P(o),I(a);var i=o.find((function(t){return Number(t.subcategoryId)===Number(r)}));return i?H(i):null})).catch((function(t){return console.error("\u0412\u0438\u043d\u0438\u043a\u043b\u0430 \u043f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u0456 \u0434\u0430\u043d\u0438\u0445:",t),null}));var o=new URLSearchParams(Z.search);o.set("sort",V.name),y("?".concat(o.toString()),{replace:!0})}),[v,r,V.sortBy,V.orderBy]);return(0,h.jsxs)(a.Z,{children:[(0,h.jsx)(s.Z,{currentPath:$,breakpoint:e}),e&&(0,h.jsx)(u.b,{text:Y}),(0,h.jsxs)(a.Z,{direction:"row",justifyContent:e?"flex-end":"center",alignItems:"center",gap:"8px",marginTop:!e&&"22.5px",children:[!e&&(0,h.jsx)(x.Z,{brandList:E,priceRange:_,setPriceRange:D,selectedBrand:W,setSelectedBrand:G,desktop:e}),(0,h.jsx)(m.Z,{onSelect:function(t){Q.map((function(e){return e.name===t&&X(e)}))},breakpoint:e})]}),(0,h.jsxs)(a.Z,{direction:{xs:"column",xl:"row"},justifyContent:"center",alignItems:{xs:"center",xl:"flex-start"},marginTop:e?"50px":"20px",children:[e&&(0,h.jsx)(p.Z,{brandList:E,priceRange:_,selectedBrand:W,setPriceRange:D,setSelectedBrand:G,desktop:e}),(0,h.jsxs)(a.Z,{maxWidth:"100%",direction:"column",alignItems:e?"flex-end":"center",children:[(0,h.jsx)(l.Z,{products:w,breakpoint:e}),(0,h.jsx)(d.Z,{sx:{backgroundColor:e?"var(--mainColor)":"var(--secondColor)",color:e?"var(--secondColor)":"var(--mainColor)",marginTop:e?"50px":"20px","&.Mui-disabled":{backgroundColor:"var(--buttonDisabled)"}},disabled:v<9||w.length%9!==0,onClick:function(){j(v+9)},text:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438 \u0449\u0435"})]})]})]})}}}]);
//# sourceMappingURL=SubcategoryPage.8b9abae3.chunk.js.map