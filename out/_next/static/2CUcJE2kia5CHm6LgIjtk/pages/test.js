(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"1iKp":function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("q1tI")),r=(0,n(a("8/g6")).default)(o.default.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.default=r},"8/g6":function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=r.default.memo(r.default.forwardRef(function(t,a){return r.default.createElement(i.default,(0,o.default)({ref:a},t),e)}));0;return a.muiName=i.default.muiName,a};var o=n(a("pVnL")),r=n(a("q1tI")),i=n(a("UJJ5"))},"90RC":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test",function(){var e=a("VOFc");return{page:e.default||e}}])},As0B:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a("wx14"),o=a("q1tI"),r=a.n(o),i=a("HR5l");function l(e,t){var a=r.a.memo(r.a.forwardRef(function(t,a){return r.a.createElement(i.a,Object(n.a)({},t,{ref:a}),e)}));return a.muiName=i.a.muiName,a}},JQEk:function(e,t,a){"use strict";var n=a("wx14"),o=a("Ff2n"),r=a("q1tI"),i=a.n(r),l=a("iuhU"),c=(a("17x9"),a("zLVn")),s=a("dI71"),d=a("i8i4"),u=a.n(d),p=!1,m=a("0PSK"),b="unmounted",h="exited",f="entering",g="entered",v=function(e){function t(t,a){var n;n=e.call(this,t,a)||this;var o,r=a&&!a.isMounting?t.enter:t.appear;return n.appearStatus=null,t.in?r?(o=h,n.appearStatus=f):o=g:o=t.unmountOnExit||t.mountOnEnter?b:h,n.state={status:o},n.nextCallback=null,n}Object(s.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===b?{status:h}:null};var a=t.prototype;return a.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},a.componentDidUpdate=function(e){var t=null;if(e!==this.props){var a=this.state.status;this.props.in?a!==f&&a!==g&&(t=f):a!==f&&a!==g||(t="exiting")}this.updateStatus(!1,t)},a.componentWillUnmount=function(){this.cancelNextCallback()},a.getTimeouts=function(){var e,t,a,n=this.props.timeout;return e=t=a=n,null!=n&&"number"!==typeof n&&(e=n.exit,t=n.enter,a=void 0!==n.appear?n.appear:t),{exit:e,enter:t,appear:a}},a.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var a=u.a.findDOMNode(this);t===f?this.performEnter(a,e):this.performExit(a)}else this.props.unmountOnExit&&this.state.status===h&&this.setState({status:b})},a.performEnter=function(e,t){var a=this,n=this.props.enter,o=this.context?this.context.isMounting:t,r=this.getTimeouts(),i=o?r.appear:r.enter;!t&&!n||p?this.safeSetState({status:g},function(){a.props.onEntered(e)}):(this.props.onEnter(e,o),this.safeSetState({status:f},function(){a.props.onEntering(e,o),a.onTransitionEnd(e,i,function(){a.safeSetState({status:g},function(){a.props.onEntered(e,o)})})}))},a.performExit=function(e){var t=this,a=this.props.exit,n=this.getTimeouts();a&&!p?(this.props.onExit(e),this.safeSetState({status:"exiting"},function(){t.props.onExiting(e),t.onTransitionEnd(e,n.exit,function(){t.safeSetState({status:h},function(){t.props.onExited(e)})})})):this.safeSetState({status:h},function(){t.props.onExited(e)})},a.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},a.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},a.setNextCallback=function(e){var t=this,a=!0;return this.nextCallback=function(n){a&&(a=!1,t.nextCallback=null,e(n))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},a.onTransitionEnd=function(e,t,a){this.setNextCallback(a);var n=null==t&&!this.props.addEndListener;e&&!n?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},a.render=function(){var e=this.state.status;if(e===b)return null;var t=this.props,a=t.children,n=Object(c.a)(t,["children"]);if(delete n.in,delete n.mountOnEnter,delete n.unmountOnExit,delete n.appear,delete n.enter,delete n.exit,delete n.timeout,delete n.addEndListener,delete n.onEnter,delete n.onEntering,delete n.onEntered,delete n.onExit,delete n.onExiting,delete n.onExited,"function"===typeof a)return i.a.createElement(m.a.Provider,{value:null},a(e,n));var o=i.a.Children.only(a);return i.a.createElement(m.a.Provider,{value:null},i.a.cloneElement(o,n))},t}(i.a.Component);function x(){}v.contextType=m.a,v.propTypes={},v.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:x,onEntering:x,onEntered:x,onExit:x,onExiting:x,onExited:x},v.UNMOUNTED=0,v.EXITED=1,v.ENTERING=2,v.ENTERED=3,v.EXITING=4;var y=v,E=a("H2TA"),O=a("wpWl");function C(e,t){var a=e.timeout,n=e.style,o=void 0===n?{}:n;return{duration:o.transitionDuration||"number"===typeof a?a:a[t.mode]||0,delay:o.transitionDelay}}var j=i.a.forwardRef(function(e,t){var a=e.children,r=e.classes,c=e.className,s=e.collapsedHeight,d=void 0===s?"0px":s,u=e.component,p=void 0===u?"div":u,m=e.in,b=e.onEnter,h=e.onEntered,f=e.onEntering,g=e.onExit,v=e.onExiting,x=e.style,E=e.theme,j=e.timeout,k=void 0===j?O.b.standard:j,N=Object(o.a)(e,["children","classes","className","collapsedHeight","component","in","onEnter","onEntered","onEntering","onExit","onExiting","style","theme","timeout"]),S=i.a.useRef(),R=i.a.useRef(null),T=i.a.useRef();i.a.useEffect(function(){return function(){clearTimeout(S.current)}},[]);return i.a.createElement(y,Object(n.a)({in:m,onEnter:function(e,t){e.style.height=d,b&&b(e,t)},onEntered:function(e,t){e.style.height="auto",h&&h(e,t)},onEntering:function(e,t){var a=R.current?R.current.clientHeight:0,n=C({style:x,timeout:k},{mode:"enter"}).duration;if("auto"===k){var o=E.transitions.getAutoHeightDuration(a);e.style.transitionDuration="".concat(o,"ms"),T.current=o}else e.style.transitionDuration="string"===typeof n?n:"".concat(n,"ms");e.style.height="".concat(a,"px"),f&&f(e,t)},onExit:function(e){var t=R.current?R.current.clientHeight:0;e.style.height="".concat(t,"px"),g&&g(e)},onExiting:function(e){var t=R.current?R.current.clientHeight:0,a=C({style:x,timeout:k},{mode:"exit"}).duration;if("auto"===k){var n=E.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(n,"ms"),T.current=n}else e.style.transitionDuration="string"===typeof a?a:"".concat(a,"ms");e.style.height=d,v&&v(e)},addEndListener:function(e,t){"auto"===k&&(S.current=setTimeout(t,T.current||0))},timeout:"auto"===k?null:k},N),function(e,o){return i.a.createElement(p,Object(n.a)({className:Object(l.a)(r.container,c,{entered:r.entered,exited:!m&&"0px"===d&&r.hidden}[e]),style:Object(n.a)({minHeight:d},x),ref:t},o),i.a.createElement("div",{className:r.wrapper,ref:R},i.a.createElement("div",{className:r.wrapperInner},a)))})});j.muiSupportAuto=!0;t.a=Object(E.a)(function(e){return{container:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}},{withTheme:!0,name:"MuiCollapse"})(j)},TqRt:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},UJJ5:function(e,t,a){"use strict";a.r(t);var n=a("HR5l");a.d(t,"default",function(){return n.a})},VOFc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),r=a("R/WZ"),i=a("ZBNC"),l=a("kKAo"),c=a("tRbT"),s=a("doui"),d=a("wx14"),u=a("DSFK"),p=a("25BE"),m=a("PYwp");var b=a("ODXe"),h=a("Ff2n"),f=(a("17x9"),a("iuhU")),g=a("JQEk"),v=a("H2TA"),x=o.a.forwardRef(function(e,t){var a,n=e.children,r=e.classes,i=e.className,c=e.defaultExpanded,s=void 0!==c&&c,v=e.disabled,x=void 0!==v&&v,y=e.expanded,E=e.onChange,O=e.square,C=void 0!==O&&O,j=e.TransitionComponent,k=void 0===j?g.a:j,N=e.TransitionProps,S=Object(h.a)(e,["children","classes","className","defaultExpanded","disabled","expanded","onChange","square","TransitionComponent","TransitionProps"]),R=o.a.useRef(null!=y).current,T=o.a.useState(s),w=Object(b.a)(T,2),I=w[0],D=w[1],P=R?y:I,H=o.a.Children.toArray(n),z=(a=H,Object(u.a)(a)||Object(p.a)(a)||Object(m.a)()),$=z[0],B=z.slice(1);return o.a.createElement(l.a,Object(d.a)({className:Object(f.a)(r.root,i,P&&r.expanded,x&&r.disabled,!C&&r.rounded),ref:t,square:C},S),o.a.cloneElement($,{disabled:x,expanded:P,onChange:function(e){R||D(!P),E&&E(e,!P)}}),o.a.createElement(k,Object(d.a)({in:P,timeout:"auto"},N),o.a.createElement("div",{"aria-labelledby":$.props.id,id:$.props["aria-controls"],role:"region"},B)))}),y=Object(v.a)(function(e){var t={duration:e.transitions.duration.shortest};return{root:{position:"relative",transition:e.transitions.create(["margin"],t),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-child":{"&:before":{display:"none"}},"&$expanded":{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},"&$expanded + &":{"&:before":{display:"none"}},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},rounded:{borderRadius:0,"&:first-child":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-child":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},expanded:{},disabled:{}}},{name:"MuiExpansionPanel"})(x),E=o.a.forwardRef(function(e,t){var a=e.classes,n=e.className,r=Object(h.a)(e,["classes","className"]);return o.a.createElement("div",Object(d.a)({className:Object(f.a)(a.root,n),ref:t},r))}),O=Object(v.a)({root:{display:"flex",padding:"8px 24px 24px"}},{name:"MuiExpansionPanelDetails"})(E),C=a("VD++"),j=a("ye/S"),k=a("mVKy"),N=o.a.forwardRef(function(e,t){var a=e.edge,n=void 0!==a&&a,r=e.children,i=e.classes,l=e.className,c=e.color,s=void 0===c?"default":c,u=e.disabled,p=void 0!==u&&u,m=e.disableFocusRipple,b=void 0!==m&&m,g=e.size,v=void 0===g?"medium":g,x=Object(h.a)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return o.a.createElement(C.a,Object(d.a)({className:Object(f.a)(i.root,l,"default"!==s&&i["color".concat(Object(k.a)(s))],p&&i.disabled,{small:i["size".concat(Object(k.a)(v))]}[v],{start:i.edgeStart,end:i.edgeEnd}[n]),centerRipple:!0,focusRipple:!b,disabled:p,ref:t},x),o.a.createElement("span",{className:i.label},r))}),S=Object(v.a)(function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(j.c)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(j.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(j.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}},{name:"MuiIconButton"})(N),R=o.a.forwardRef(function(e,t){var a=e.children,n=e.classes,r=e.className,i=e.disabled,l=void 0!==i&&i,c=e.expanded,s=e.expandIcon,u=e.IconButtonProps,p=e.onBlur,m=e.onChange,g=e.onClick,v=e.onFocusVisible,x=Object(h.a)(e,["children","classes","className","disabled","expanded","expandIcon","IconButtonProps","onBlur","onChange","onClick","onFocusVisible"]),y=o.a.useState(!1),E=Object(b.a)(y,2),O=E[0],j=E[1];return o.a.createElement(C.a,Object(d.a)({focusRipple:!1,disableRipple:!0,disabled:l,component:"div","aria-expanded":c,className:Object(f.a)(n.root,r,l&&n.disabled,c&&n.expanded,O&&n.focused),onFocusVisible:function(e){j(!0),v&&v(e)},onBlur:function(e){j(!1),p&&p(e)},onClick:function(e){m&&m(e),g&&g(e)},ref:t},x),o.a.createElement("div",{className:Object(f.a)(n.content,c&&n.expanded)},a),s&&o.a.createElement(S,Object(d.a)({disabled:l,className:Object(f.a)(n.expandIcon,c&&n.expanded),edge:"end",component:"div",tabIndex:-1,"aria-hidden":!0},u),s))}),T=Object(v.a)(function(e){var t={duration:e.transitions.duration.shortest};return{root:{display:"flex",minHeight:48,transition:e.transitions.create(["min-height","background-color"],t),padding:"0 24px 0 24px","&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focused":{backgroundColor:e.palette.grey[300]},"&$disabled":{opacity:.38}},expanded:{},focused:{},disabled:{},content:{display:"flex",flexGrow:1,transition:e.transitions.create(["margin"],t),margin:"12px 0","&$expanded":{margin:"20px 0"}},expandIcon:{transform:"rotate(0deg)",transition:e.transitions.create("transform",t),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"rotate(180deg)"}}}},{name:"MuiExpansionPanelSummary"})(R),w=a("ofer"),I=a("1iKp"),D=a.n(I),P=Object(r.a)(function(e){return Object(i.a)({root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary}})});function H(){var e=P(),t=o.a.useState(!1),a=Object(s.default)(t,2),n=a[0],r=a[1],i=function(e){return function(t,a){r(!!a&&e)}};return o.a.createElement("div",{className:e.root},o.a.createElement(y,{expanded:"panel1"===n,onChange:i("panel1")},o.a.createElement(T,{expandIcon:o.a.createElement(D.a,null),"aria-controls":"panel1bh-content",id:"panel1bh-header"},o.a.createElement(w.a,{className:e.heading},"Why?"),o.a.createElement(w.a,{className:e.secondaryHeading},"Motivation behind this project")),o.a.createElement(O,null,o.a.createElement(w.a,null,"Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam."))),o.a.createElement(y,{expanded:"panel2"===n,onChange:i("panel2")},o.a.createElement(T,{expandIcon:o.a.createElement(D.a,null),"aria-controls":"panel2bh-content",id:"panel2bh-header"},o.a.createElement(w.a,{className:e.heading},"How?"),o.a.createElement(w.a,{className:e.secondaryHeading},"About team work and the process we followed")),o.a.createElement(O,null,o.a.createElement(w.a,null,"Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet."))),o.a.createElement(y,{expanded:"panel3"===n,onChange:i("panel3")},o.a.createElement(T,{expandIcon:o.a.createElement(D.a,null),"aria-controls":"panel3bh-content",id:"panel3bh-header"},o.a.createElement(w.a,{className:e.heading},"For Devs"),o.a.createElement(w.a,{className:e.secondaryHeading},"Technical details.")),o.a.createElement(O,null,o.a.createElement(w.a,null,"Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."))),o.a.createElement(y,{expanded:"panel4"===n,onChange:i("panel4")},o.a.createElement(T,{expandIcon:o.a.createElement(D.a,null),"aria-controls":"panel4bh-content",id:"panel4bh-header"},o.a.createElement(w.a,{className:e.heading},"For Devs"),o.a.createElement(w.a,{className:e.secondaryHeading},"How to run locally.")),o.a.createElement(O,null,o.a.createElement(w.a,null,"Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."))))}a("2W6z");var z=a("As0B"),$=Object(z.a)(o.a.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),B=a("OMPe"),L=o.a.forwardRef(function(e,t){var a=e.avatar,n=e.classes,r=e.className,i=e.clickable,l=e.color,c=void 0===l?"default":l,s=e.component,u=void 0===s?"div":s,p=e.deleteIcon,m=e.icon,b=e.label,g=e.onClick,v=e.onDelete,x=e.onKeyDown,y=e.onKeyUp,E=e.size,O=void 0===E?"medium":E,C=e.variant,j=void 0===C?"default":C,N=Object(h.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),S=o.a.useRef(null),R=function(e){e.stopPropagation(),v&&v(e)},T=!(!1===i||!g)||i,w="small"===O,I=Object(f.a)(n.root,r,"default"!==c&&[n["color".concat(Object(k.a)(c))],T&&n["clickableColor".concat(Object(k.a)(c))],v&&n["deletableColor".concat(Object(k.a)(c))]],"default"!==j&&[n.outlined,{primary:n.outlinedPrimary,secondary:n.outlinedSecondary}[c]],w&&n.sizeSmall,T&&n.clickable,v&&n.deletable),D=null;if(v){var P=Object(f.a)("default"!==c&&("default"===j?n["deleteIconColor".concat(Object(k.a)(c))]:n["deleteIconOutlinedColor".concat(Object(k.a)(c))]),w&&n.deleteIconSmall);D=p&&o.a.isValidElement(p)?o.a.cloneElement(p,{className:Object(f.a)(p.props.className,n.deleteIcon,P),onClick:R}):o.a.createElement($,{className:Object(f.a)(n.deleteIcon,P),onClick:R})}var H=null;a&&o.a.isValidElement(a)&&(H=o.a.cloneElement(a,{className:Object(f.a)(n.avatar,a.props.className,w&&n.avatarSmall,"default"!==c&&n["avatarColor".concat(Object(k.a)(c))]),childrenClassName:Object(f.a)(n.avatarChildren,a.props.childrenClassName)}));var z=null;m&&o.a.isValidElement(m)&&(z=o.a.cloneElement(m,{className:Object(f.a)(n.icon,m.props.className,w&&n.iconSmall,"default"!==c&&n["iconColor".concat(Object(k.a)(c))])}));var L=Object(B.a)(S,t);return o.a.createElement(u,Object(d.a)({role:T||v?"button":void 0,className:I,tabIndex:T||v?0:void 0,onClick:g,onKeyDown:function(e){if(x&&x(e),e.currentTarget===e.target){var t=e.key;" "!==t&&"Enter"!==t&&"Backspace"!==t&&"Delete"!==t&&"Escape"!==t||e.preventDefault()}},onKeyUp:function(e){if(y&&y(e),e.currentTarget===e.target){var t=e.key;!g||" "!==t&&"Enter"!==t?!v||"Backspace"!==t&&"Delete"!==t?"Escape"===t&&S.current&&S.current.blur():v(e):g(e)}},ref:L},N),H||z,o.a.createElement("span",{className:Object(f.a)(n.label,w&&n.labelSmall)},b),D)}),M=Object(v.a)(function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],a=Object(j.c)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box"},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},clickable:{WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(j.b)(t,.08)},"&:active":{boxShadow:e.shadows[1],backgroundColor:Object(j.b)(t,.12)}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(j.b)(e.palette.primary.main,.08)},"&:active":{backgroundColor:Object(j.b)(e.palette.primary.main,.12)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(j.b)(e.palette.secondary.main,.08)},"&:active":{backgroundColor:Object(j.b)(e.palette.secondary.main,.12)}},deletable:{"&:focus":{backgroundColor:Object(j.b)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(j.b)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(j.b)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(j.c)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:-1}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(j.c)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(j.c)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{marginRight:-4,width:32,height:32,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(16)},avatarSmall:{width:24,height:24,fontSize:e.typography.pxToRem(12)},avatarColorPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},avatarColorSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},avatarChildren:{height:18},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-8},iconSmall:{width:16,marginRight:-5},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{display:"flex",alignItems:"center",paddingLeft:12,paddingRight:12,userSelect:"none",whiteSpace:"nowrap",cursor:"inherit"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:a,cursor:"pointer",height:"auto",margin:"0 5px 0 -8px","&:hover":{color:Object(j.c)(a,.4)}},deleteIconSmall:{height:16,margin:"0 1px 0 -9px"},deleteIconColorPrimary:{color:Object(j.c)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(j.c)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(j.c)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(j.c)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}},{name:"MuiChip"})(L);a.d(t,"default",function(){return q});var F=Object(r.a)(function(e){return Object(i.a)({root:{flexGrow:1,marginTop:e.spacing(4)},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},chip:{margin:e.spacing(1)}})});function q(){var e=F();return o.a.createElement("div",{className:e.root},o.a.createElement(c.a,{container:!0,spacing:3},o.a.createElement(c.a,{item:!0,xs:12},o.a.createElement(l.a,{className:e.paper},"Header title")),o.a.createElement(c.a,{item:!0,xs:12,md:6},o.a.createElement(H,null)),o.a.createElement(c.a,{item:!0,xs:12,md:6,container:!0,direction:"column"},o.a.createElement(c.a,null,o.a.createElement(l.a,{className:e.paper},"Quick info")),o.a.createElement(c.a,null,o.a.createElement(l.a,{className:e.paper},"Tags aimed to recruiters",o.a.createElement(M,{className:e.chip,label:"Full-Stack development"}),o.a.createElement(M,{className:e.chip,label:"Node.js"}),o.a.createElement(M,{className:e.chip,label:"Html"}),o.a.createElement(M,{className:e.chip,label:"Full-Stack development"}))))))}},pVnL:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a.apply(this,arguments)}e.exports=a}},[["90RC",1,0]]]);