(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{LdKZ:function(e,t,a){(function(e){!function(e){"use strict";t.loadCSS=function(t,a,o,n){var i,r=e.document,c=r.createElement("link");if(a)i=a;else{var s=(r.body||r.getElementsByTagName("head")[0]).childNodes;i=s[s.length-1]}var l=r.styleSheets;if(n)for(var f in n)n.hasOwnProperty(f)&&c.setAttribute(f,n[f]);c.rel="stylesheet",c.href=t,c.media="only x",function e(t){if(r.body)return t();setTimeout(function(){e(t)})}(function(){i.parentNode.insertBefore(c,a?i:i.nextSibling)});var d=function(e){for(var t=c.href,a=l.length;a--;)if(l[a].href===t)return e();setTimeout(function(){d(e)})};function u(){c.addEventListener&&c.removeEventListener("load",u),c.media=o||"all"}return c.addEventListener&&c.addEventListener("load",u),c.onloadcssdefined=d,d(u),c}}("undefined"!==typeof e?e:this)}).call(this,a("yLpj"))},QLSJ:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){var e=a("qARc");return{page:e.default||e}}])},qARc:function(e,t,a){"use strict";a.r(t);var o=a("q1tI"),n=a.n(o),i=a("RD7I"),r=a("iuhU"),c=a("LdKZ"),s=a("ZBNC"),l=a("tRbT"),f=a("wx14"),d=a("Ff2n"),u=(a("17x9"),a("H2TA")),m=a("VD++"),p=n.a.forwardRef(function(e,t){var a=e.children,o=e.classes,i=e.className,c=e.focusVisibleClassName,s=Object(d.a)(e,["children","classes","className","focusVisibleClassName"]);return n.a.createElement(m.a,Object(f.a)({className:Object(r.a)(o.root,i),focusVisibleClassName:Object(r.a)(c,o.focusVisible),ref:t},s),a,n.a.createElement("span",{className:o.focusHighlight}))}),h=Object(u.a)(function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{pointerEvents:"none",position:"absolute",backgroundColor:"currentcolor",top:0,right:0,bottom:0,left:0,opacity:0,transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}},{name:"MuiCardActionArea"})(p),g=a("kKAo"),b=n.a.forwardRef(function(e,t){var a=e.classes,o=e.className,i=e.raised,c=void 0!==i&&i,s=Object(d.a)(e,["classes","className","raised"]);return n.a.createElement(g.a,Object(f.a)({className:Object(r.a)(a.root,o),elevation:c?8:1,ref:t},s))}),v=Object(u.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(b),y=n.a.forwardRef(function(e,t){var a=e.classes,o=e.className,i=e.component,c=void 0===i?"div":i,s=Object(d.a)(e,["classes","className","component"]);return n.a.createElement(c,Object(f.a)({className:Object(r.a)(a.root,o),ref:t},s))}),w=Object(u.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(y),N=a("ofer"),j=a("mVKy"),k=n.a.forwardRef(function(e,t){var a=e.classes,o=e.className,i=e.color,c=void 0===i?"inherit":i,s=e.component,l=void 0===s?"span":s,u=e.fontSize,m=void 0===u?"default":u,p=Object(d.a)(e,["classes","className","color","component","fontSize"]);return n.a.createElement(l,Object(f.a)({className:Object(r.a)("material-icons",a.root,o,"inherit"!==c&&a["color".concat(Object(j.a)(c))],"default"!==m&&a["fontSize".concat(Object(j.a)(m))]),"aria-hidden":!0,ref:t},p))});k.muiName="Icon";var O=Object(u.a)(function(e){return{root:{userSelect:"none",fontSize:e.typography.pxToRem(24),width:"1em",height:"1em",overflow:"hidden",flexShrink:0},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(36)}}},{name:"MuiIcon"})(k),S=n.a.createElement,x=Object(i.a)(function(e){return Object(s.a)({mainGrid:{marginTop:e.spacing(4)},icon:{margin:e.spacing(2)},iconHover:{margin:e.spacing(2),"&:hover":{color:"red"}},root:{height:"100%",flexGrow:1,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},card:{display:"flex",backgroundColor:e.palette.background.default},cardDetails:{flex:1,color:e.palette.secondary.main,textAlign:"right"},cardGrid:{marginTop:e.spacing(2)},cardMedia:{width:160}})}),T=[{title:"Github",icon:"fab fa-github",description:"",linkText:"",link:"https://github.com/stefanosAgelastos"},{title:"Personal life",icon:"fab fa-instagram",description:"Get to know what I like to post about.",linkText:"",link:"https://www.instagram.com/volatilemercury/"},{title:"LinkedIn",icon:"fab fa-linkedin",description:"Currently I am searching for an inspiring job opportunity.",linkText:"",link:"https://www.linkedin.com/in/stefanosagelastos/"},{title:"Get in touch",icon:"fas fa-envelope",description:"sagelastos@gmail.com",linkText:"",link:"mailto:sagelastos@gmail.com"},{title:"or Just ring",icon:"fas fa-phone",description:"+45 7158 7288",linkText:"",link:"tel:71-58-72-88"}];t.default=function(){var e=x();return n.a.useEffect(function(){Object(c.loadCSS)("https://use.fontawesome.com/releases/v5.1.0/css/all.css",document.querySelector("#font-awesome-css"))},[]),S(n.a.Fragment,null,S("div",{className:e.root},S(l.a,{className:e.cardGrid,justify:"space-evenly",alignItems:"center",container:!0},T.map(function(t){return S(l.a,{item:!0,key:t.title,xs:10},S(h,{component:"a",href:t.link},S(v,{elevation:0,className:e.card},S("div",{className:e.cardDetails},S(w,null,S(N.a,{component:"h2",variant:"h5"},t.title),S(N.a,{variant:"subtitle1",paragraph:!0},t.description),S(N.a,{variant:"subtitle1",color:"primary"},t.linkText))),S(O,{className:Object(r.a)(e.icon,t.icon),color:"secondary",fontSize:"large"}))))}))))}}},[["QLSJ",1,0]]]);