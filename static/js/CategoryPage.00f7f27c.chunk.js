"use strict";(self.webpackChunkstore_app=self.webpackChunkstore_app||[]).push([[29],{9944:function(e,r,t){t.d(r,{Z:function(){return l}});var n=t(1889),o=t(2711),a=t(1087),i={wrapper:"card_wrapper__Msjlg",card:"card_card__XoCn7",productImage:"card_productImage__I9Q60",title:"card_title__tpVSx",priceUah:"card_priceUah__wwA55",info:"card_info__XwM5u",basket:"card_basket__ORJZR",basketIcon:"card_basketIcon__RZmiD",image:"card_image__1kSDg"},c=t(184),s=function(e){var r=e.product,t=r.href,n=r.title,s=r.image,l=r.price;return(0,c.jsx)(a.rU,{to:t,children:(0,c.jsxs)("div",{className:i.wrapper,children:[(0,c.jsx)("div",{className:i.card,children:(0,c.jsx)("div",{className:i.productImage,children:(0,c.jsx)("img",{src:s,alt:"product image",width:"100",height:"120",className:i.image})})}),(0,c.jsx)("div",{className:i.title,children:(0,c.jsx)("h3",{title:n,children:n})}),(0,c.jsxs)("div",{className:i.info,children:[(0,c.jsx)("div",{className:i.priceGroup,children:(0,c.jsx)("p",{className:i.priceUah,children:"".concat(l.toLocaleString()," \u20b4")})}),(0,c.jsx)("div",{className:i.basket,children:(0,c.jsx)(o.JO,{className:i.basketIcon,icon:"ion:cart-outline"})})]})]})})},l=function(e){var r=e.products,t=e.width;return(0,c.jsx)(n.ZP,{container:!0,direction:"row",alignItems:{xs:"center",xl:"start"},columns:{xs:6,md:4},rowGap:{xs:2.5,xl:6.25},columnGap:{xs:1,md:1.5,xl:1.75},minWidth:"320px",maxWidth:t?"1130px":"844px",justifyContent:"center",children:r.map((function(e){return(0,c.jsx)(n.ZP,{item:!0,children:(0,c.jsx)(s,{product:e})},e.id)}))})}},4782:function(e,r,t){t.d(r,{Z:function(){return m}});var n=t(3654),o=t(2711),a=t(1087),i="CategoryButton_button__fQowb",c="CategoryButton_link__1rDBY",s="CategoryButton_icon__g-6p-",l="CategoryButton_popup__Boo5x",u="CategoryButton_text__ujtRZ",d=t(184),p=function(e){var r=e.item,t=e.href,n=e.icon,p=e.text;return(0,d.jsx)("div",{className:i,children:(0,d.jsxs)(a.rU,{to:"".concat(t,"/").concat(r),className:c,children:[(0,d.jsx)(o.JO,{className:s,icon:n}),(0,d.jsx)("div",{className:l,children:(0,d.jsx)("p",{className:u,children:p})})]})})},m=function(e){var r=e.array,t=e.breakpoints,o=e.href,a=e.rowGap,i=e.columnGap,c=e.sx;return(0,d.jsx)(n.Z,{container:!0,sx:c,rowGap:a,columnGap:i,children:r.map((function(e){return(0,d.jsx)(n.Z,{breakpoints:t,children:(0,d.jsx)(p,{item:e.id,href:o,icon:e.icon,text:e.name})},e.id)}))})}},4475:function(e,r,t){t.d(r,{Z:function(){return a}});var n="Title_title__mrNq5",o=t(184),a=function(e){var r=e.text;return(0,o.jsx)("div",{className:n,children:(0,o.jsx)("h3",{children:r})})}},7054:function(e,r,t){t.r(r),t.d(r,{default:function(){return ie}});var n=t(9439),o=t(2791),a=t(7689),i=t(6314),c=t(1413),s=t(1087),l=t(2711),u=t(3433),d=t(4942),p=t(3366),m=t(7462),f=t(8182),x=t(4419),h=t(4036),v=t(6934),g=t(1402),Z=t(3031),b=t(2071),y=t(890),j=t(5878),_=t(1217);function w(e){return(0,_.Z)("MuiLink",e)}var C=(0,j.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),S=t(8529),k=t(2065),N={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},I=function(e){var r=e.theme,t=e.ownerState,n=function(e){return N[e]||e}(t.color),o=(0,S.DW)(r,"palette.".concat(n),!1)||t.color,a=(0,S.DW)(r,"palette.".concat(n,"Channel"));return"vars"in r&&a?"rgba(".concat(a," / 0.4)"):(0,k.Fq)(o,.4)},B=t(184),R=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],M=(0,v.ZP)(y.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,r["underline".concat((0,h.Z)(t.underline))],"button"===t.component&&r.button]}})((function(e){var r=e.theme,t=e.ownerState;return(0,m.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,m.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:I({theme:r,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&(0,d.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(C.focusVisible),{outline:"auto"}))})),P=o.forwardRef((function(e,r){var t=(0,g.Z)({props:e,name:"MuiLink"}),a=t.className,i=t.color,c=void 0===i?"primary":i,s=t.component,l=void 0===s?"a":s,d=t.onBlur,v=t.onFocus,y=t.TypographyClasses,j=t.underline,_=void 0===j?"always":j,C=t.variant,S=void 0===C?"inherit":C,k=t.sx,I=(0,p.Z)(t,R),P=(0,Z.Z)(),A=P.isFocusVisibleRef,D=P.onBlur,G=P.onFocus,z=P.ref,O=o.useState(!1),T=(0,n.Z)(O,2),W=T[0],U=T[1],F=(0,b.Z)(r,z),L=(0,m.Z)({},t,{color:c,component:l,focusVisible:W,underline:_,variant:S}),V=function(e){var r=e.classes,t=e.component,n=e.focusVisible,o=e.underline,a={root:["root","underline".concat((0,h.Z)(o)),"button"===t&&"button",n&&"focusVisible"]};return(0,x.Z)(a,w,r)}(L);return(0,B.jsx)(M,(0,m.Z)({color:c,className:(0,f.Z)(V.root,a),classes:y,component:l,onBlur:function(e){D(e),!1===A.current&&U(!1),d&&d(e)},onFocus:function(e){G(e),!0===A.current&&U(!0),v&&v(e)},ref:F,ownerState:L,variant:S,sx:[].concat((0,u.Z)(Object.keys(N).includes(c)?[]:[{color:c}]),(0,u.Z)(Array.isArray(k)?k:[k]))},I))})),A=(t(8457),t(8069)),D=(0,t(9201).Z)((0,B.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),G=t(7077),z=["slots","slotProps"],O=(0,v.ZP)(G.Z)((function(e){var r=e.theme;return(0,m.Z)({display:"flex",marginLeft:"calc(".concat(r.spacing(1)," * 0.5)"),marginRight:"calc(".concat(r.spacing(1)," * 0.5)")},"light"===r.palette.mode?{backgroundColor:r.palette.grey[100],color:r.palette.grey[700]}:{backgroundColor:r.palette.grey[700],color:r.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,m.Z)({},"light"===r.palette.mode?{backgroundColor:r.palette.grey[200]}:{backgroundColor:r.palette.grey[600]}),"&:active":(0,m.Z)({boxShadow:r.shadows[0]},"light"===r.palette.mode?{backgroundColor:(0,k._4)(r.palette.grey[200],.12)}:{backgroundColor:(0,k._4)(r.palette.grey[600],.12)})})})),T=(0,v.ZP)(D)({width:24,height:16});var W=function(e){var r=e.slots,t=void 0===r?{}:r,n=e.slotProps,o=void 0===n?{}:n,a=(0,p.Z)(e,z),i=e;return(0,B.jsx)("li",{children:(0,B.jsx)(O,(0,m.Z)({focusRipple:!0},a,{ownerState:i,children:(0,B.jsx)(T,(0,m.Z)({as:t.CollapsedIcon,ownerState:i},o.collapsedIcon))}))})};function U(e){return(0,_.Z)("MuiBreadcrumbs",e)}var F=(0,j.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),L=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],V=(0,v.ZP)(y.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,r){return[(0,d.Z)({},"& .".concat(F.li),r.li),r.root]}})({}),E=(0,v.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,r){return r.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),H=(0,v.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,r){return r.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function J(e,r,t,n){return e.reduce((function(o,a,i){return i<e.length-1?o=o.concat(a,(0,B.jsx)(H,{"aria-hidden":!0,className:r,ownerState:n,children:t},"separator-".concat(i))):o.push(a),o}),[])}var q=o.forwardRef((function(e,r){var t=(0,g.Z)({props:e,name:"MuiBreadcrumbs"}),a=t.children,i=t.className,c=t.component,s=void 0===c?"nav":c,l=t.slots,d=void 0===l?{}:l,h=t.slotProps,v=void 0===h?{}:h,Z=t.expandText,b=void 0===Z?"Show path":Z,y=t.itemsAfterCollapse,j=void 0===y?1:y,_=t.itemsBeforeCollapse,w=void 0===_?1:_,C=t.maxItems,S=void 0===C?8:C,k=t.separator,N=void 0===k?"/":k,I=(0,p.Z)(t,L),R=o.useState(!1),M=(0,n.Z)(R,2),P=M[0],D=M[1],G=(0,m.Z)({},t,{component:s,expanded:P,expandText:b,itemsAfterCollapse:j,itemsBeforeCollapse:w,maxItems:S,separator:N}),z=function(e){var r=e.classes;return(0,x.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},U,r)}(G),O=(0,A.Z)({elementType:d.CollapsedIcon,externalSlotProps:v.collapsedIcon,ownerState:G}),T=o.useRef(null),F=o.Children.toArray(a).filter((function(e){return o.isValidElement(e)})).map((function(e,r){return(0,B.jsx)("li",{className:z.li,children:e},"child-".concat(r))}));return(0,B.jsx)(V,(0,m.Z)({ref:r,component:s,color:"text.secondary",className:(0,f.Z)(z.root,i),ownerState:G},I,{children:(0,B.jsx)(E,{className:z.ol,ref:T,ownerState:G,children:J(P||S&&F.length<=S?F:function(e){return w+j>=e.length?e:[].concat((0,u.Z)(e.slice(0,w)),[(0,B.jsx)(W,{"aria-label":b,slots:{CollapsedIcon:d.CollapsedIcon},slotProps:{collapsedIcon:O},onClick:function(){D(!0);var e=T.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,u.Z)(e.slice(e.length-j,e.length)))}(F),z.separator,N,G)})}))})),Q=(0,v.ZP)(q)((function(e){var r=e.theme;return(0,d.Z)({fontFamily:"Montserrat",fontSize:"20px",fontWeight:"300",fontStyle:"normal",lineHeight:"130%",color:"var(--mainColor)","& .MuiBreadcrumbs-separator":{marginLeft:"0",marginRight:"0"}},r.breakpoints.down("xl"),{fontSize:"15px",fontWeight:"500","& .MuiBreadcrumbs-ol":{flexDirection:"row-reverse",justifyContent:"flex-end"}})})),X=t(7739),Y=function(e){var r=e.current,t=e.breakpoint,n=(0,a.TH)().pathname.split("/").filter(Boolean).slice(1);return(0,B.jsxs)(Q,{"aria-label":"breadcrumb","aria-current":"last",separator:(0,B.jsx)(l.JO,{icon:"iconamoon:arrow-right-2-duotone",style:{fontSize:"24px"}}),children:[(0,B.jsx)(P,{color:"inherit",underline:"none",component:s.rU,to:X.A.HOMEPAGE,sx:{display:"flex",alignItems:"center"},children:t?"\u0413\u043e\u043b\u043e\u0432\u043d\u0430 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0430":(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(l.JO,{icon:"iconamoon:arrow-left-2-duotone",style:{fontSize:"24px"}}),"\u041d\u0430 \u0433\u043e\u043b\u043e\u0432\u043d\u0443"]})}),t&&n.map((function(e,a){var i=a===n.at(-1),l=r,u="/".concat(n.slice(0,a+1).join("/")),d={href:e.url,color:"inherit",underline:"none",style:{fontWeight:!i&&"500",cursor:!i&&"default",visibility:!t&&!i&&"hidden"}};return(0,o.createElement)(P,(0,c.Z)((0,c.Z)({},d),{},{component:s.rU,to:u,key:a}),l)}))]})},K=t(4475),$=t(4782),ee=t(9944),re=t(4165),te=t(5861),ne=t(3352),oe=function(){var e=(0,te.Z)((0,re.Z)().mark((function e(r){var t,n;return(0,re.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne.Z.get("api/v1/sub-category/list",{params:{categoryId:r}});case 2:return t=e.sent,n=t.data.data,e.abrupt("return",n&&n.error?(console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430:",n.error),null):n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),ae=t(7380),ie=function(e){var r=e.desktop,t=(0,a.UO)().categoryId,c=(0,o.useState)([]),s=(0,n.Z)(c,2),l=s[0],u=s[1],d=(0,o.useState)([]),p=(0,n.Z)(d,2),m=p[0],f=p[1],x=(0,o.useState)(4),h=(0,n.Z)(x,2),v=h[0],g=(h[1],(0,o.useState)("")),Z=(0,n.Z)(g,2),b=Z[0],y=Z[1];return(0,o.useEffect)((function(){Promise.all([oe(t),(0,ae.CQ)(v,t)]).then((function(e){var r=(0,n.Z)(e,2),o=r[0],a=r[1];u(o),f(a);var i=o.find((function(e){return Number(e.categoryId)===Number(t)}));return i?y(i.catIdName):null})).catch((function(e){return console.error("\u0412\u0438\u043d\u0438\u043a\u043b\u0430 \u043f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u0456 \u0434\u0430\u043d\u0438\u0445:",e),null}))}),[v,t]),(0,B.jsxs)(i.Z,{children:[(0,B.jsx)(Y,{current:b,breakpoint:r}),(0,B.jsxs)(i.Z,{sx:{alignItems:!r&&"center"},marginBottom:r&&1.75,children:[(0,B.jsx)(K.Z,{text:b}),(0,B.jsx)($.Z,{array:l,href:X.A.SUBCATEGORY_PAGE,rowGap:!r&&2.5,columnGap:!r&&1,sx:{justifyContent:r?"space-evenly":"center"}}),(0,B.jsx)(K.Z,{text:"\u0422\u043e\u043f \u043f\u0440\u043e\u0434\u0430\u0436\u0456\u0432"}),(0,B.jsx)(i.Z,{sx:{alignItems:"center"},children:(0,B.jsx)(ee.Z,{products:m,width:!0})})]})]})}}}]);
//# sourceMappingURL=CategoryPage.00f7f27c.chunk.js.map