(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/EDR":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=t("23aj");return{page:e.default||e}}])},"23aj":function(e,a,t){"use strict";t.r(a);var o=t("q1tI"),n=t.n(o),r=t("YFqc"),i=t.n(r),c=t("RD7I"),s=t("ZBNC"),l=t("ofer"),d=t("Z3vd"),p=t("tRbT"),m=t("wx14"),u=t("Ff2n"),b=t("17x9"),f=t.n(b),g=t("iuhU"),h=t("H2TA"),x=t("VD++"),v=n.a.forwardRef(function(e,a){var t=e.children,o=e.classes,r=e.className,i=e.focusVisibleClassName,c=Object(u.a)(e,["children","classes","className","focusVisibleClassName"]);return n.a.createElement(x.a,Object(m.a)({className:Object(g.a)(o.root,r),focusVisibleClassName:Object(g.a)(i,o.focusVisible),ref:a},c),t,n.a.createElement("span",{className:o.focusHighlight}))}),w=Object(h.a)(function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{pointerEvents:"none",position:"absolute",backgroundColor:"currentcolor",top:0,right:0,bottom:0,left:0,opacity:0,transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}},{name:"MuiCardActionArea"})(v),y=t("kKAo"),j=n.a.forwardRef(function(e,a){var t=e.classes,o=e.className,r=e.raised,i=void 0!==r&&r,c=Object(u.a)(e,["classes","className","raised"]);return n.a.createElement(y.a,Object(m.a)({className:Object(g.a)(t.root,o),elevation:i?8:1,ref:a},c))}),O=Object(h.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(j),k=n.a.forwardRef(function(e,a){var t=e.classes,o=e.className,r=e.component,i=void 0===r?"div":r,c=Object(u.a)(e,["classes","className","component"]);return n.a.createElement(i,Object(m.a)({className:Object(g.a)(t.root,o),ref:a},c))}),C=Object(h.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(k),D=t("LEIi"),E=t("KQm4"),N=t("ODXe"),U=t("A+CX"),S=t("2mql"),W=t.n(S),M=t("aXM8"),R=t("cNwE");t("2W6z");var I=!1;var T=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=Object(M.a)(),o=Object(U.a)({theme:t,name:"MuiUseMediaQuery",props:{}}),r="function"===typeof e?e(t):e;r=r.replace(/^@media( ?)/m,"");var i="undefined"!==typeof window.matchMedia,c=Object(m.a)({},o,{},a),s=c.defaultMatches,l=void 0!==s&&s,d=c.noSsr,p=void 0!==d&&d,u=c.ssrMatchMedia,b=void 0===u?null:u,f=n.a.useState(function(){return(I||p)&&i?window.matchMedia(r).matches:b?b(r).matches:l}),g=Object(N.a)(f,2),h=g[0],x=g[1];return n.a.useEffect(function(){if(I=!0,i){var e=window.matchMedia(r),a=function(){x(e.matches)};return a(),e.addListener(a),function(){e.removeListener(a)}}},[r,i]),h},z=function(e,a){return!(arguments.length>2&&void 0!==arguments[2])||arguments[2]?D.b.indexOf(e)<=D.b.indexOf(a):D.b.indexOf(e)<D.b.indexOf(a)},A=function(e,a){return!(arguments.length>2&&void 0!==arguments[2])||arguments[2]?D.b.indexOf(a)<=D.b.indexOf(e):D.b.indexOf(a)<D.b.indexOf(e)},B=n.a.useLayoutEffect,H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(a){var t=e.withTheme,o=void 0!==t&&t,r=e.noSSR,i=void 0!==r&&r,c=e.initialWidth;function s(e){var t=Object(M.a)()||R.a,r=e.theme||t,s=Object(U.a)({theme:r,name:"MuiWithWidth",props:Object(m.a)({},e)}),l=s.initialWidth,d=s.width,p=Object(u.a)(s,["initialWidth","width"]),b=n.a.useState(!1),f=Object(N.a)(b,2),g=f[0],h=f[1];B(function(){h(!0)},[]);var x=Object(E.a)(r.breakpoints.keys).reverse().reduce(function(e,a){var t=T(r.breakpoints.up(a));return!e&&t?a:e},null),v=Object(m.a)({width:d||(g||i?x:void 0)||l||c},o?{theme:r}:{},{},p);return void 0===v.width?null:n.a.createElement(a,v)}return W()(s,a),s}};function P(e){var a=e.children,t=e.only,o=e.width,n=!0;if(t)if(Array.isArray(t))for(var r=0;r<t.length;r+=1){if(o===t[r]){n=!1;break}}else t&&o===t&&(n=!1);if(n)for(var i=0;i<D.b.length;i+=1){var c=D.b[i],s=e["".concat(c,"Up")],l=e["".concat(c,"Down")];if(s&&z(c,o)||l&&A(c,o)){n=!1;break}}return n?a:null}P.propTypes={children:f.a.node,className:f.a.string,implementation:f.a.oneOf(["js","css"]),initialWidth:f.a.oneOf(["xs","sm","md","lg","xl"]),lgDown:f.a.bool,lgUp:f.a.bool,mdDown:f.a.bool,mdUp:f.a.bool,only:f.a.oneOfType([f.a.oneOf(["xs","sm","md","lg","xl"]),f.a.arrayOf(f.a.oneOf(["xs","sm","md","lg","xl"]))]),smDown:f.a.bool,smUp:f.a.bool,width:f.a.string.isRequired,xlDown:f.a.bool,xlUp:f.a.bool,xsDown:f.a.bool,xsUp:f.a.bool};var V=H()(P),q=t("rePB"),$=t("mVKy");var F=Object(h.a)(function(e){var a={display:"none"};return D.b.reduce(function(t,o){return t["only".concat(Object($.a)(o))]=Object(q.a)({},e.breakpoints.only(o),a),t["".concat(o,"Up")]=Object(q.a)({},e.breakpoints.up(o),a),t["".concat(o,"Down")]=Object(q.a)({},e.breakpoints.down(o),a),t},{})},{name:"PrivateHiddenCss"})(function(e){var a=e.children,t=e.classes,o=e.className,r=(e.lgDown,e.lgUp,e.mdDown,e.mdUp,e.only),i=(e.smDown,e.smUp,e.xlDown,e.xlUp,e.xsDown,e.xsUp,Object(u.a)(e,["children","classes","className","lgDown","lgUp","mdDown","mdUp","only","smDown","smUp","xlDown","xlUp","xsDown","xsUp"]),[]);o&&i.push(o);for(var c=0;c<D.b.length;c+=1){var s=D.b[c],l=e["".concat(s,"Up")],d=e["".concat(s,"Down")];l&&i.push(t["".concat(s,"Up")]),d&&i.push(t["".concat(s,"Down")])}return r&&(Array.isArray(r)?r:[r]).forEach(function(e){i.push(t["only".concat(Object($.a)(e))])}),n.a.createElement("div",{className:i.join(" ")},a)});var G=function(e){var a=e.implementation,t=void 0===a?"js":a,o=e.lgDown,r=void 0!==o&&o,i=e.lgUp,c=void 0!==i&&i,s=e.mdDown,l=void 0!==s&&s,d=e.mdUp,p=void 0!==d&&d,b=e.smDown,f=void 0!==b&&b,g=e.smUp,h=void 0!==g&&g,x=e.xlDown,v=void 0!==x&&x,w=e.xlUp,y=void 0!==w&&w,j=e.xsDown,O=void 0!==j&&j,k=e.xsUp,C=void 0!==k&&k,D=Object(u.a)(e,["implementation","lgDown","lgUp","mdDown","mdUp","smDown","smUp","xlDown","xlUp","xsDown","xsUp"]);return"js"===t?n.a.createElement(V,Object(m.a)({lgDown:r,lgUp:c,mdDown:l,mdUp:p,smDown:f,smUp:h,xlDown:v,xlUp:y,xsDown:O,xsUp:C},D)):n.a.createElement(F,Object(m.a)({lgDown:r,lgUp:c,mdDown:l,mdUp:p,smDown:f,smUp:h,xlDown:v,xlUp:y,xsDown:O,xsUp:C},D))},K=t("Ie8z"),L=t("A3e0"),_=Object(c.a)(function(e){return Object(s.a)({mainGrid:{marginTop:e.spacing(3)},card:{display:"flex"},cardDetails:{flex:1},cardMedia:{width:160},galleryButton:{color:e.palette.primary.contrastText}})}),X=[{title:"Personal stuff",image:"https://images.unsplash.com/photo-1536009282123-37ba63756c6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",description:"Get to know what I like to remember, and maybe give me some likes!",linkText:"My insta",link:"https://www.instagram.com/volatilemercury/"},{title:"Professional info",image:"https://images.unsplash.com/photo-1507208773393-40d9fc670acf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",description:"Currently I am searching for an inspiring job opportunity.",linkText:"My LinkedIn",link:"https://www.linkedin.com/in/stefanosagelastos/"}];a.default=function(){var e=_();return n.a.createElement(n.a.Fragment,null,n.a.createElement(L.a,{backgroundimageurl:"https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80"},n.a.createElement(l.a,{component:"h1",variant:"h3",color:"inherit",gutterBottom:!0},"Hey! I am Stefanos and this is my developer portfolio."),n.a.createElement(l.a,{variant:"h5",color:"inherit",paragraph:!0},"Have a look at my projects"),n.a.createElement(i.a,{href:"/projects",passHref:!0},n.a.createElement(d.a,{variant:"outlined",size:"small",className:e.galleryButton},"Project Gallery"," "))),n.a.createElement(p.a,{container:!0,spacing:4},X.map(function(a){return n.a.createElement(p.a,{item:!0,key:a.title,xs:12,md:6},n.a.createElement(w,{component:"a",href:a.link},n.a.createElement(O,{className:e.card},n.a.createElement("div",{className:e.cardDetails},n.a.createElement(C,null,n.a.createElement(l.a,{component:"h2",variant:"h5"},a.title),n.a.createElement(l.a,{variant:"subtitle1",paragraph:!0},a.description),n.a.createElement(l.a,{variant:"subtitle1",color:"primary"},a.linkText))),n.a.createElement(G,{xsDown:!0},n.a.createElement(K.a,{className:e.cardMedia,image:a.image,title:"Image title"})))))})))}},A3e0:function(e,a,t){"use strict";t.d(a,"a",function(){return p});var o=t("vYYK"),n=t("q1tI"),r=t.n(n),i=t("R/WZ"),c=t("ZBNC"),s=t("kKAo"),l=t("tRbT"),d=Object(i.a)(function(e){return Object(c.a)({root:{position:"relative",backgroundColor:e.palette.grey[800],color:e.palette.common.white,marginTop:e.spacing(8),marginBottom:e.spacing(4),backgroundImage:function(e){return"url(".concat(e.backgroundimageurl,")")},backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},overlay:{position:"absolute",top:0,bottom:0,right:0,left:0,backgroundColor:"rgba(0,0,0,.3)"},childrenWrapper:Object(o.a)({position:"relative",padding:e.spacing(3)},e.breakpoints.up("md"),{padding:e.spacing(6),paddingRight:0})})});function p(e){var a=d(e);return r.a.createElement(s.a,{className:a.root},r.a.createElement("div",{className:a.overlay}),r.a.createElement(l.a,{container:!0},r.a.createElement(l.a,{item:!0,md:6},r.a.createElement("div",{className:a.childrenWrapper},e.children))))}},Ie8z:function(e,a,t){"use strict";var o=t("wx14"),n=t("Ff2n"),r=t("q1tI"),i=t.n(r),c=(t("17x9"),t("iuhU")),s=(t("2W6z"),t("H2TA")),l=["video","audio","picture","iframe","img"],d=i.a.forwardRef(function(e,a){var t=e.classes,r=e.className,s=e.component,d=void 0===s?"div":s,p=e.image,m=e.src,u=e.style,b=Object(n.a)(e,["classes","className","component","image","src","style"]),f=-1!==l.indexOf(d),g=!f&&p?Object(o.a)({backgroundImage:'url("'.concat(p,'")')},u):u;return i.a.createElement(d,Object(o.a)({className:Object(c.a)(t.root,r,f&&t.media),ref:a,style:g,src:f?p||m:void 0},b))});a.a=Object(s.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%",objectFit:"cover"}},{name:"MuiCardMedia"})(d)},Z3vd:function(e,a,t){"use strict";var o=t("Ff2n"),n=t("wx14"),r=t("q1tI"),i=t.n(r),c=(t("17x9"),t("iuhU")),s=t("H2TA"),l=t("ye/S"),d=t("VD++"),p=t("mVKy"),m=i.a.forwardRef(function(e,a){var t=e.children,r=e.classes,s=e.className,l=e.color,m=void 0===l?"default":l,u=e.component,b=void 0===u?"button":u,f=e.disabled,g=void 0!==f&&f,h=e.disableFocusRipple,x=void 0!==h&&h,v=e.focusVisibleClassName,w=e.fullWidth,y=void 0!==w&&w,j=e.size,O=void 0===j?"medium":j,k=e.type,C=void 0===k?"button":k,D=e.variant,E=void 0===D?"text":D,N=Object(o.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","fullWidth","size","type","variant"]),U="text"===E,S="outlined"===E,W="contained"===E,M="primary"===m,R="secondary"===m,I=Object(c.a)(r.root,s,U&&[r.text,M&&r.textPrimary,R&&r.textSecondary],S&&[r.outlined,M&&r.outlinedPrimary,R&&r.outlinedSecondary],W&&[r.contained,M&&r.containedPrimary,R&&r.containedSecondary],"medium"!==O&&r["size".concat(Object(p.a)(O))],g&&r.disabled,y&&r.fullWidth,{inherit:r.colorInherit}[m]);return i.a.createElement(d.a,Object(n.a)({className:I,component:b,disabled:g,focusRipple:!x,focusVisibleClassName:Object(c.a)(r.focusVisible,v),ref:a,type:C},N),i.a.createElement("span",{className:r.label},t))});a.a=Object(s.a)(function(e){return{root:Object(n.a)({lineHeight:1.75},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(l.b)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(l.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(l.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 16px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(l.b)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(l.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(l.b)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(l.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground},"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},sizeSmall:{padding:"4px 8px",fontSize:e.typography.pxToRem(13)},sizeLarge:{padding:"8px 24px",fontSize:e.typography.pxToRem(15)},fullWidth:{width:"100%"}}},{name:"MuiButton"})(m)},kKAo:function(e,a,t){"use strict";var o=t("Ff2n"),n=t("wx14"),r=t("q1tI"),i=t.n(r),c=(t("17x9"),t("iuhU")),s=(t("2W6z"),t("H2TA")),l=i.a.forwardRef(function(e,a){var t=e.classes,r=e.className,s=e.component,l=void 0===s?"div":s,d=e.square,p=void 0!==d&&d,m=e.elevation,u=void 0===m?1:m,b=Object(o.a)(e,["classes","className","component","square","elevation"]),f=Object(c.a)(t.root,t["elevation".concat(u)],r,!p&&t.rounded);return i.a.createElement(l,Object(n.a)({className:f,ref:a},b))});a.a=Object(s.a)(function(e){var a={};return e.shadows.forEach(function(e,t){a["elevation".concat(t)]={boxShadow:e}}),Object(n.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius}},a)},{name:"MuiPaper"})(l)},tRbT:function(e,a,t){"use strict";var o=t("Ff2n"),n=t("wx14"),r=t("q1tI"),i=t.n(r),c=(t("17x9"),t("iuhU")),s=t("H2TA"),l=t("LEIi"),d=[0,1,2,3,4,5,6,7,8,9,10],p=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var m=i.a.forwardRef(function(e,a){var t=e.alignContent,r=void 0===t?"stretch":t,s=e.alignItems,l=void 0===s?"stretch":s,d=e.classes,p=e.className,m=e.component,u=void 0===m?"div":m,b=e.container,f=void 0!==b&&b,g=e.direction,h=void 0===g?"row":g,x=e.item,v=void 0!==x&&x,w=e.justify,y=void 0===w?"flex-start":w,j=e.lg,O=void 0!==j&&j,k=e.md,C=void 0!==k&&k,D=e.sm,E=void 0!==D&&D,N=e.spacing,U=void 0===N?0:N,S=e.wrap,W=void 0===S?"wrap":S,M=e.xl,R=void 0!==M&&M,I=e.xs,T=void 0!==I&&I,z=e.zeroMinWidth,A=void 0!==z&&z,B=Object(o.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),H=Object(c.a)(d.root,p,f&&[d.container,0!==U&&d["spacing-xs-".concat(String(U))]],v&&d.item,A&&d.zeroMinWidth,"row"!==h&&d["direction-xs-".concat(String(h))],"wrap"!==W&&d["wrap-xs-".concat(String(W))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==r&&d["align-content-xs-".concat(String(r))],"flex-start"!==y&&d["justify-xs-".concat(String(y))],!1!==T&&d["grid-xs-".concat(String(T))],!1!==E&&d["grid-sm-".concat(String(E))],!1!==C&&d["grid-md-".concat(String(C))],!1!==O&&d["grid-lg-".concat(String(O))],!1!==R&&d["grid-xl-".concat(String(R))]);return i.a.createElement(u,Object(n.a)({className:H,ref:a},B))});var u=Object(s.a)(function(e){return Object(n.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,a){var t={};return d.forEach(function(o){var n=e.spacing(o);0!==n&&(t["spacing-".concat(a,"-").concat(o)]={margin:-n/2,width:"calc(100% + ".concat(n,"px)"),"& > $item":{padding:n/2}})}),t}(e,"xs"),{},l.b.reduce(function(a,t){return function(e,a,t){var o={};p.forEach(function(e){var a="grid-".concat(t,"-").concat(e);if(!0!==e)if("auto"!==e){var n="".concat(Math.round(e/12*1e8)/1e6,"%");o[a]={flexBasis:n,flexGrow:0,maxWidth:n}}else o[a]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else o[a]={flexBasis:0,flexGrow:1,maxWidth:"100%"}}),"xs"===t?Object(n.a)(e,o):e[a.breakpoints.up(t)]=o}(a,e,t),a},{}))},{name:"MuiGrid"})(m);a.a=u}},[["/EDR",1,0]]]);