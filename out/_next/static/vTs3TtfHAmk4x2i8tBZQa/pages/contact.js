(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{LdKZ:function(e,t,a){(function(e){!function(e){"use strict";t.loadCSS=function(t,a,n,o){var i,r=e.document,l=r.createElement("link");if(a)i=a;else{var c=(r.body||r.getElementsByTagName("head")[0]).childNodes;i=c[c.length-1]}var s=r.styleSheets;if(o)for(var d in o)o.hasOwnProperty(d)&&l.setAttribute(d,o[d]);l.rel="stylesheet",l.href=t,l.media="only x",function e(t){if(r.body)return t();setTimeout(function(){e(t)})}(function(){i.parentNode.insertBefore(l,a?i:i.nextSibling)});var u=function(e){for(var t=l.href,a=s.length;a--;)if(s[a].href===t)return e();setTimeout(function(){u(e)})};function f(){l.addEventListener&&l.removeEventListener("load",f),l.media=n||"all"}return l.addEventListener&&l.addEventListener("load",f),l.onloadcssdefined=u,u(f),l}}("undefined"!==typeof e?e:this)}).call(this,a("yLpj"))},QLSJ:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){var e=a("qARc");return{page:e.default||e}}])},qARc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),i=a("RD7I"),r=a("iuhU"),l=a("LdKZ"),c=a("ZBNC"),s=a("tRbT"),d=a("wx14"),u=a("Ff2n"),f=(a("17x9"),a("H2TA")),m=a("VD++"),p=o.a.forwardRef(function(e,t){var a=e.children,n=e.classes,i=e.className,l=e.focusVisibleClassName,c=Object(u.a)(e,["children","classes","className","focusVisibleClassName"]);return o.a.createElement(m.a,Object(d.a)({className:Object(r.a)(n.root,i),focusVisibleClassName:Object(r.a)(l,n.focusVisible),ref:t},c),a,o.a.createElement("span",{className:n.focusHighlight}))}),h=Object(f.a)(function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{pointerEvents:"none",position:"absolute",backgroundColor:"currentcolor",top:0,right:0,bottom:0,left:0,opacity:0,transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}},{name:"MuiCardActionArea"})(p),b=a("kKAo"),g=o.a.forwardRef(function(e,t){var a=e.classes,n=e.className,i=e.raised,l=void 0!==i&&i,c=Object(u.a)(e,["classes","className","raised"]);return o.a.createElement(b.a,Object(d.a)({className:Object(r.a)(a.root,n),elevation:l?8:1,ref:t},c))}),v=Object(f.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(g),y=o.a.forwardRef(function(e,t){var a=e.classes,n=e.className,i=e.component,l=void 0===i?"div":i,c=Object(u.a)(e,["classes","className","component"]);return o.a.createElement(l,Object(d.a)({className:Object(r.a)(a.root,n),ref:t},c))}),w=Object(f.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(y),k=a("ofer"),N=a("mVKy"),j=o.a.forwardRef(function(e,t){var a=e.classes,n=e.className,i=e.color,l=void 0===i?"inherit":i,c=e.component,s=void 0===c?"span":c,f=e.fontSize,m=void 0===f?"default":f,p=Object(u.a)(e,["classes","className","color","component","fontSize"]);return o.a.createElement(s,Object(d.a)({className:Object(r.a)("material-icons",a.root,n,"inherit"!==l&&a["color".concat(Object(N.a)(l))],"default"!==m&&a["fontSize".concat(Object(N.a)(m))]),"aria-hidden":!0,ref:t},p))});j.muiName="Icon";var O=Object(f.a)(function(e){return{root:{userSelect:"none",fontSize:e.typography.pxToRem(24),width:"1em",height:"1em",overflow:"hidden",flexShrink:0},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(36)}}},{name:"MuiIcon"})(j),S=o.a.createElement,x=Object(i.a)(function(e){return Object(c.a)({mainGrid:{marginTop:e.spacing(4)},icon:{margin:e.spacing(2)},iconHover:{margin:e.spacing(2),"&:hover":{color:"red"}},root:{height:"100%",flexGrow:1,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},card:{display:"flex",backgroundColor:e.palette.background.default},cardDetails:{flex:1},cardGrid:{marginTop:e.spacing(2)},cardMedia:{width:160}})}),T=[{title:"Github",icon:"fab fa-github",description:"",linkText:"",link:"https://www.linkedin.com/in/stefanosagelastos/",email:null,tel:null,headers:null},{title:"Personal life",icon:"fab fa-instagram",description:"Get to know what I like to post about.",linkText:"",link:"https://www.instagram.com/volatilemercury/",email:null,tel:null,headers:null},{title:"LinkedIn",icon:"fab fa-linkedin",description:"Currently I am searching for an inspiring job opportunity.",linkText:"",link:"https://www.linkedin.com/in/stefanosagelastos/",email:null,tel:null,headers:null},{title:"Get in touch",icon:"fas fa-envelope",description:"sagelastos@gmail.com",linkText:"",link:"mailto:sagelastos@gmail.com",email:null,tel:null,headers:null},{title:"or Just ring",icon:"fas fa-phone",description:"+45 7158 7288",linkText:"",link:"tel:71-58-72-88",email:null,tel:null,headers:null}];t.default=function(){var e=x();return o.a.useEffect(function(){Object(l.loadCSS)("https://use.fontawesome.com/releases/v5.1.0/css/all.css",document.querySelector("#font-awesome-css"))},[]),S(o.a.Fragment,null,S("div",{className:e.root},S(s.a,{className:e.cardGrid,justify:"space-evenly",alignItems:"center",container:!0,spacing:4},T.map(function(t){return S(s.a,{item:!0,key:t.title,xs:12,md:4},S(h,{component:"a",href:t.link},S(v,{className:e.card},S("div",{className:e.cardDetails},S(w,null,S(k.a,{component:"h2",variant:"h5"},t.title),S(k.a,{variant:"subtitle1",paragraph:!0},t.description),S(k.a,{variant:"subtitle1",color:"primary"},t.linkText))),S(O,{className:Object(r.a)(e.icon,t.icon),color:"primary",fontSize:"large"}))))}))))}}},[["QLSJ",1,0]]]);