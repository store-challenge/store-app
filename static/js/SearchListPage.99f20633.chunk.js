/*! For license information please see SearchListPage.99f20633.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkstore_app=self.webpackChunkstore_app||[]).push([[845],{98:function(e,t,r){r.d(t,{k:function(){return p}});var o=r(4942),n=r(1413),a=r(6934),c=r(890),s=(0,a.ZP)(c.Z)((function(e){var t,r,a,c=e.theme,s=e.variant,i={color:"var(--mainColor)",fontFamily:"Montserrat",fontStyle:"normal",fontWeight:"500",lineHeight:"130%"};return{h1:(0,n.Z)((0,n.Z)({},i),{},(t={lineHeight:"75%",fontSize:c.typography.pxToRem(40)},(0,o.Z)(t,c.breakpoints.up("md"),{fontSize:c.typography.pxToRem(80)}),(0,o.Z)(t,c.breakpoints.up("lg"),{fontSize:c.typography.pxToRem(160)}),t)),h2:(0,n.Z)((0,n.Z)({},i),{},(r={fontSize:c.typography.pxToRem(20)},(0,o.Z)(r,c.breakpoints.up("md"),{fontSize:c.typography.pxToRem(40)}),(0,o.Z)(r,c.breakpoints.up("lg"),{fontSize:c.typography.pxToRem(60)}),r)),p:(0,n.Z)((0,n.Z)({},i),{},(a={minWidth:"276px",maxWidth:"900px",margin:"0 22px",textAlign:"center",fontSize:c.typography.pxToRem(13)},(0,o.Z)(a,c.breakpoints.up("md"),{margin:"0",fontWeight:"300",fontSize:c.typography.pxToRem(16)}),(0,o.Z)(a,c.breakpoints.up("lg"),{fontSize:c.typography.pxToRem(20)}),a))}[s]})),i=r(184),p=function(e){var t=e.variant,r=e.text;e.desktop;return(0,i.jsx)(s,{variant:t,children:r})}},8498:function(e,t,r){r.r(t);var o=r(9439),n=r(2791),a=r(7689),c=r(6314),s=(r(393),r(98)),i=r(9944),p=r(1723),l=r(2768),u=r(1554),f=r(8286),d=r(7380),m=r(5993),y=r(184);t.default=function(e){var t=e.desktop,r=(0,a.TH)(),x=(0,a.s0)(),h=new URLSearchParams(r.search),S=h.get("query"),g=(0,n.useState)([]),b=(0,o.Z)(g,2),Z=b[0],k=b[1],v=(0,n.useState)(9),B=(0,o.Z)(v,2),j=B[0],C=B[1],w=(0,n.useState)([]),R=(0,o.Z)(w,2),T=R[0],z=R[1],_=(0,n.useState)([0,2e4]),P=(0,o.Z)(_,2),E=P[0],I=P[1],L=(0,n.useState)([]),W=(0,o.Z)(L,2),$=W[0],A=W[1],D=[{name:"asc",sortBy:"product_price",orderBy:"ASC"},{name:"desc",sortBy:"product_price",orderBy:"DESC"},{name:"az",sortBy:"product_title",orderBy:"ASC"},{name:"za",sortBy:"product_title",orderBy:"DESC"},{name:"newest",sortBy:"updated",orderBy:"DESC"}],H=(0,n.useState)((function(){var e=h.get("sort")||D.at(-1).name;return D.find((function(t){return t.name===e}))||D.at(-1)})),M=(0,o.Z)(H,2),N=M[0],U=M[1];(0,n.useEffect)((function(){var e={limit:j,productName:S,sortBy:N.sortBy,orderBy:N.orderBy},t={productName:S};(0,d.jw)({configProducts:e}).then((function(e){return k(e),null})).catch((function(e){return console.error("\u0412\u0438\u043d\u0438\u043a\u043b\u0430 \u043f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u0456 \u0434\u0430\u043d\u0438\u0445:",e),null})),(0,m.Q)({configBrands:t}).then((function(e){return z(e),null})).catch((function(e){return console.error("\u0412\u0438\u043d\u0438\u043a\u043b\u0430 \u043f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u0456 \u0431\u0440\u0435\u043d\u0434\u0456\u0432:",e),null}));var o=new URLSearchParams(r.search);o.set("sort",N.name),x("?".concat(o.toString()),{replace:!0})}),[j,S,N.sortBy,N.orderBy]);return(0,y.jsxs)(c.Z,{children:[(0,y.jsxs)(c.Z,{direction:"row",justifyContent:t?"flex-end":"center",alignItems:"center",gap:"8px",marginTop:!t&&"22.5px",children:[!t&&(0,y.jsx)(u.Z,{brandList:T,priceRange:E,setPriceRange:I,selectedBrand:$,setSelectedBrand:A,desktop:t}),(0,y.jsx)(f.Z,{onSelect:function(e){D.map((function(t){return t.name===e&&U(t)}))},breakpoint:t})]}),(0,y.jsxs)(c.Z,{direction:{xs:"column",xl:"row"},justifyContent:"space-between",alignItems:{xs:"center",xl:"flex-start"},marginTop:t?"50px":"20px",children:[t&&(0,y.jsx)(l.Z,{brandList:T,priceRange:E,selectedBrand:$,setPriceRange:I,setSelectedBrand:A,desktop:t}),(0,y.jsx)(c.Z,{width:"100%",direction:"column",children:Z.length>0?(0,y.jsxs)(c.Z,{width:"100%",alignItems:t?"flex-end":"center",children:[(0,y.jsx)(i.Z,{products:Z,breakpoint:t}),(0,y.jsx)(p.Z,{sx:{backgroundColor:t?"var(--mainColor)":"var(--secondColor)",color:t?"var(--secondColor)":"var(--mainColor)",marginTop:t?"50px":"20px","&.Mui-disabled":{backgroundColor:"#6b4c7d40"}},disabled:j<9||Z.length%9!==0,onClick:function(){C(j+9)},text:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438 \u0449\u0435"})]}):(0,y.jsx)(c.Z,{width:"100%",alignItems:"center",children:(0,y.jsx)(s.k,{variant:"p",text:'\n                \u0417\u0430 \u0437\u0430\u043f\u0438\u0442\u043e\u043c\n                 "'.concat(S,'"\n                  \u043d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e.')})})})]})]})}},6532:function(e,t){var r,o=Symbol.for("react.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),p=Symbol.for("react.context"),l=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),x=Symbol.for("react.offscreen");function h(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case a:case s:case c:case f:case d:return e;default:switch(e=e&&e.$$typeof){case l:case p:case u:case y:case m:case i:return e;default:return t}}case n:return t}}}r=Symbol.for("react.module.reference")},8457:function(e,t,r){r(6532)}}]);
//# sourceMappingURL=SearchListPage.99f20633.chunk.js.map