(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/EDR":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=a("23aj");return{page:e.default||e}}])},"23aj":function(e,t,a){"use strict";a.r(t);var o=a("q1tI"),r=a.n(o),n=a("RD7I"),i=a("ZBNC"),l=a("tRbT"),c=a("ofer"),s=a("Ff2n"),d=a("wx14"),p=(a("17x9"),a("iuhU")),u=a("H2TA"),h=a("ye/S"),f=a("VD++"),m=a("mVKy"),b=r.a.forwardRef(function(e,t){var a=e.children,o=e.classes,n=e.className,i=e.color,l=void 0===i?"default":i,c=e.component,u=void 0===c?"button":c,h=e.disabled,b=void 0!==h&&h,v=e.disableFocusRipple,y=void 0!==v&&v,g=e.focusVisibleClassName,x=e.fullWidth,k=void 0!==x&&x,w=e.size,C=void 0===w?"medium":w,O=e.type,j=void 0===O?"button":O,E=e.variant,T=void 0===E?"text":E,N=Object(s.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","fullWidth","size","type","variant"]),S="text"===T,R="outlined"===T,I="contained"===T,U="primary"===l,K="secondary"===l,P=Object(p.a)(o.root,n,S&&[o.text,U&&o.textPrimary,K&&o.textSecondary],R&&[o.outlined,U&&o.outlinedPrimary,K&&o.outlinedSecondary],I&&[o.contained,U&&o.containedPrimary,K&&o.containedSecondary],"medium"!==C&&o["size".concat(Object(m.a)(C))],b&&o.disabled,k&&o.fullWidth,{inherit:o.colorInherit}[l]);return r.a.createElement(f.a,Object(d.a)({className:P,component:u,disabled:b,focusRipple:!y,focusVisibleClassName:Object(p.a)(o.focusVisible,g),ref:t,type:j},N),r.a.createElement("span",{className:o.label},a))}),v=Object(u.a)(function(e){return{root:Object(d.a)({lineHeight:1.75},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(h.c)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(h.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(h.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 16px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(h.c)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(h.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(h.c)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(h.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground},"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},sizeSmall:{padding:"4px 8px",fontSize:e.typography.pxToRem(13)},sizeLarge:{padding:"8px 24px",fontSize:e.typography.pxToRem(15)},fullWidth:{width:"100%"}}},{name:"MuiButton"})(b),y=a("vYYK"),g=a("R/WZ"),x=a("kKAo"),k=Object(g.a)(function(e){return Object(i.a)({root:{position:"relative",backgroundColor:e.palette.primary.light,opacity:.95,color:e.palette.common.white,marginTop:e.spacing(4),marginBottom:e.spacing(4)},overlay:{position:"absolute",top:0,bottom:0,right:0,left:0},childrenWrapper:Object(y.a)({position:"relative",padding:e.spacing(3)},e.breakpoints.up("md"),{padding:e.spacing(6),paddingRight:0})})}),w=function(e){var t=e.children,a=k();return r.a.createElement(x.a,{className:a.root},r.a.createElement("div",{className:a.overlay}),r.a.createElement(l.a,{container:!0},r.a.createElement(l.a,{item:!0,md:6},r.a.createElement("div",{className:a.childrenWrapper},t))))},C=a("YFqc"),O=a.n(C),j=Object(n.a)(function(e){return Object(i.a)({titleText:{},galleryButton:{color:e.palette.primary.contrastText,boxShadow:e.shadows[3]}})});t.default=function(){var e=j();return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"center"},r.a.createElement(l.a,{item:!0},r.a.createElement(w,null,r.a.createElement(c.a,{className:e.titleText,component:"h1",variant:"h3",color:"inherit",gutterBottom:!0},"Hey! I'm Stefanos and this is my developer portfolio."),r.a.createElement(c.a,{className:e.titleText,variant:"h5",color:"inherit",paragraph:!0},"Have a look at my projects"),r.a.createElement(O.a,{href:"/projects",passHref:!0},r.a.createElement(v,{variant:"outlined",size:"medium",className:e.galleryButton},"Project Gallery"))))))}},YFqc:function(e,t,a){e.exports=a("cTJO")},cTJO:function(e,t,a){"use strict";var o=a("KI45"),r=o(a("0iUn")),n=o(a("sLSF")),i=o(a("MI3g")),l=o(a("a7VT")),c=o(a("Tit0")),s=a("5Uuq"),d=a("KI45");t.__esModule=!0,t.default=void 0;var p,u=d(a("LX0d")),h=a("CxY0"),f=s(a("q1tI")),m=(d(a("17x9")),d(a("nOHt"))),b=(a("KA3u"),a("Bu4q"));function v(e){return e&&"object"===typeof e?(0,b.formatWithValidation)(e):e}var y=new u.default,g=window.IntersectionObserver;function x(){return p||(g?p=new g(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var k=function(e){function t(){var e;return(0,r.default)(this,t),(e=(0,i.default)(this,(0,l.default)(t).apply(this,arguments))).cleanUpListeners=function(){},e.formatUrls=function(e){var t=null,a=null,o=null;return function(r,n){if(o&&r===t&&n===a)return o;var i=e(r,n);return t=r,a=n,o=i,i}}(function(e,t){return{href:v(e),as:t?v(t):t}}),e.linkClicked=function(t){var a=t.currentTarget,o=a.nodeName,r=a.target;if("A"!==o||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var n=e.formatUrls(e.props.href,e.props.as),i=n.href,l=n.as;if(function(e){var t=(0,h.parse)(e,!1,!0),a=(0,h.parse)((0,b.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===a.protocol&&t.host===a.host}(i)){var c=window.location.pathname;i=(0,h.resolve)(c,i),l=l?(0,h.resolve)(c,l):i,t.preventDefault();var s=e.props.scroll;null==s&&(s=l.indexOf("#")<0),m.default[e.props.replace?"replace":"push"](i,l,{shallow:e.props.shallow}).then(function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())})}}},e}return(0,c.default)(t,e),(0,n.default)(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.props.prefetch&&g&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var a=x();return a?(a.observe(e),y.set(e,t),function(){a.unobserve(e),y.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.props.prefetch){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,a=(0,h.resolve)(e,t);m.default.prefetch(a)}}},{key:"render",value:function(){var e=this,t=this.props.children,a=this.formatUrls(this.props.href,this.props.as),o=a.href,r=a.as;"string"===typeof t&&(t=f.default.createElement("a",null,t));var n=f.Children.only(t),i={ref:function(t){return e.handleRef(t)},onMouseEnter:function(t){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(t),e.prefetch()},onClick:function(t){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==n.type||"href"in n.props)||(i.href=r||o),f.default.cloneElement(n,i)}}]),t}(f.Component);k.propTypes=void 0,k.defaultProps={prefetch:!0};var w=k;t.default=w},vYYK:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var o=a("hfKm"),r=a.n(o);function n(e,t,a){return t in e?r()(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}}},[["/EDR",1,0]]]);