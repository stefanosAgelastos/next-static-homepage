(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/h46":function(t,e,n){n("cHUd")("Map")},"4mXO":function(t,e,n){t.exports=n("7TPF")},"7TPF":function(t,e,n){n("AUvm"),t.exports=n("WEpk").Object.getOwnPropertySymbols},LX0d:function(t,e,n){t.exports=n("UDep")},O40h:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n("eVuF"),o=n.n(r);function a(t,e,n,r,a,i,s){try{var c=t[i](s),u=c.value}catch(l){return void n(l)}c.done?e(u):o.a.resolve(u).then(r,a)}function i(t){return function(){var e=this,n=arguments;return new o.a(function(r,o){var i=t.apply(e,n);function s(t){a(i,r,o,s,c,"next",t)}function c(t){a(i,r,o,s,c,"throw",t)}s(void 0)})}}},SpL8:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),a=n("vYYK"),i=n("R/WZ"),s=n("ZBNC"),c=n("TX+L"),u=n("VD++"),l=n("kOwS"),p=n("qNsG"),d=n("mVKy"),f=n("ofer"),h=o.a.createElement,m=Object(i.a)(function(t){return Object(s.a)({markedH2:{height:4,width:73,display:"block",margin:"".concat(t.spacing(1),"px auto 0"),backgroundColor:t.palette.secondary.main},markedH3:{height:4,width:55,display:"block",margin:"".concat(t.spacing(1),"px auto 0"),backgroundColor:t.palette.secondary.main},markedH4:{height:4,width:55,display:"block",margin:"".concat(t.spacing(1),"px auto 0"),backgroundColor:t.palette.secondary.main},markedH6:{height:2,width:28,display:"block",marginTop:t.spacing(.5),background:"currentColor"}})}),g={h1:"h1",h2:"h1",h3:"h1",h4:"h1",h5:"h3",h6:"h2",subtitle1:"h3"};function b(t){var e=m(),n=t.children,r=t.marked,o=void 0!==r&&r,a=t.variant,i=Object(p.a)(t,["children","marked","variant"]);return h(f.a,Object(l.a)({variantMapping:g,variant:a},i),n,o?h("span",{className:e["marked".concat(Object(d.a)(a))]}):null)}var v=n("YFqc"),w=n.n(v),y=o.a.createElement,k=Object(i.a)(function(t){var e,n,r;return Object(s.a)({tileWrapper:(e={position:"relative",display:"block",padding:t.spacing(0),borderRadius:0,height:"40vh"},Object(a.a)(e,t.breakpoints.down("sm"),{scrollSnapAlign:"start",width:"100% !important",height:400,zIndex:1}),Object(a.a)(e,t.breakpoints.up("sm"),{"&:hover":{zIndex:1},"&:hover $tileBackdrop":{opacity:.15},"&:hover $tileMarked":{opacity:0},"&:hover $tileTitle":{border:"4px solid currentColor"},"&:hover $tileSubtitle":{visibility:"visible"}}),e),tileSrc:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundSize:"cover",backgroundPosition:"center 40%"},tileBackdrop:Object(a.a)({position:"absolute",left:0,right:0,top:0,bottom:0,background:t.palette.common.black,opacity:.5,transition:t.transitions.create("opacity")},t.breakpoints.down("sm"),{opacity:.15}),tileButton:(n={position:"absolute",left:0,right:0,top:0,bottom:0,display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",padding:t.spacing(2)},Object(a.a)(n,t.breakpoints.down("md"),{padding:t.spacing(1)}),Object(a.a)(n,"color",t.palette.primary.contrastText),n),tileTitle:Object(a.a)({position:"relative",whiteSpace:"pre-wrap",padding:"".concat(t.spacing(2),"px ").concat(t.spacing(4),"px 14px")},t.breakpoints.down("sm"),{padding:t.spacing(1),border:"4px solid currentColor"}),tileSubtitle:(r={padding:"".concat(t.spacing(2),"px ").concat(t.spacing(4),"px 14px"),visibility:"hidden"},Object(a.a)(r,t.breakpoints.down("md"),{padding:t.spacing(1),visibility:"visible"}),Object(a.a)(r,"width","85%"),r),tileMarked:Object(a.a)({height:3,width:"65%",background:t.palette.common.white,position:"absolute",bottom:-2,left:"10",transition:t.transitions.create("opacity")},t.breakpoints.down("sm"),{opacity:0})})});function j(t){var e=k(),n=t.tile;return y(o.a.Fragment,null,y(w.a,{href:"/projects/[pid]",as:"/projects/".concat(n.slug),passHref:!0},y(u.a,{className:e.tileWrapper,style:{width:n.width}},y("div",{className:e.tileSrc,style:{backgroundColor:n.imageUrl}}),y("div",{className:e.tileBackdrop}),y("div",{className:e.tileButton},y(b,{component:"h3",variant:"h3",color:"inherit",align:"left",className:e.tileTitle},n.title,y("div",{className:e.tileMarked})),y(b,{component:"p",variant:"subtitle1",className:e.tileSubtitle,color:"inherit"},n.subtitle)))))}var x=o.a.createElement,O=Object(i.a)(function(t){return Object(s.a)({tiles:Object(a.a)({marginTop:t.spacing(4),display:"flex",flexWrap:"wrap",scrollSnapType:"y mandatory"},t.breakpoints.down("sm"),{overflow:"scroll","@global":{html:{overflow:"hidden"},body:{overflow:"hidden"}}})})});function U(){var t=O(),e=c.a;return x(o.a.Fragment,null,x("div",{className:t.tiles},e.map(function(t){return x(j,{tile:t,key:t.slug})})))}n.d(e,"default",function(){return S});var T=o.a.createElement;function S(){return T(o.a.Fragment,null,T(U,null))}},"TX+L":function(t,e,n){"use strict";n.d(e,"a",function(){return u}),n.d(e,"c",function(){return l}),n.d(e,"b",function(){return d});var r=n("ln6h"),o=n.n(r),a=n("eVuF"),i=n.n(a),s=n("O40h"),c=n("WC4K"),u=(n("zgjP"),c);function l(t){return p.apply(this,arguments)}function p(){return(p=Object(s.a)(o.a.mark(function t(e){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new i.a(function(t,n){var r=u.find(function(t){return t.slug===e});r?fetch("https://raw.githubusercontent.com/stefanosAgelastos".concat(r.markdownUrlPath,"/README.md"),{headers:{Accept:"text/plain; charset=utf-8"}}).then(function(t){return t.text()}).then(function(e){return t(e)}):n(new Error("No project matches the slug"))}));case 1:case"end":return t.stop()}},t)}))).apply(this,arguments)}function d(t){var e=u.find(function(e){return e.slug===t});return e?e.imageUrl:"https://source.unsplash.com/user/erondu"}},Tk32:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){var t=n("SpL8");return{page:t.default||t}}])},UDep:function(t,e,n){n("wgeU"),n("FlQf"),n("bBy9"),n("g33z"),n("XLbu"),n("/h46"),n("dVTT"),t.exports=n("WEpk").Map},WC4K:function(t){t.exports=JSON.parse('[{"_imageUrl":"https://images.unsplash.com/photo-1565277562170-6628d4c5a69e?auto=format&fit=crop&w=500&q=80","imageUrl":"#98DDDE","_title":"Next.js & Markdown","title":"Making a nice homepage","_subtitle":"Get under the hood of my homepage, STEFWORKS. You\'ll find typescript, material-ui and more..","subtitle":"Read about how I made my website, STEFWORKS.ml and the tech","slug":"next-js-homepage","markdownUrlPath":"/stefanosAgelastos.github.io/local-development","width":"60%"},{"_imageUrl":"https://images.unsplash.com/photo-1510070009289-b5bc34383727?auto=format&fit=crop&w=500&q=80","imageUrl":"#FFDA29","_title":"P5.js, jQuery SPA","title":"Tailoring a \\nnavigation menu","_subtitle":"I coded my previous homepage with P5.js, wanna Read about it? With vector graphics & custom made navbar","subtitle":"Read about how I coded my previous homepage","slug":"static-homepage-p5-js","markdownUrlPath":"/static-homepage-p5-js/master","width":"40%"},{"_imageUrl":"https://images.unsplash.com/photo-1478416272538-5f7e51dc5400?auto=format&fit=crop&w=500&q=80","imageUrl":"#DE98AB","_title":"AR Prototype System","title":"Augmenting a sought-after guided tour","_subtitle":"An AR prototype app, for a Copenhagen business. A cool multidiciplinary team project!","subtitle":"Read about my team work as an intern for K\xf8benhavnerTure","slug":"ar-admin-page","markdownUrlPath":"/mern-admin-app-for-android-AR-app/master","width":"70%"},{"_imageUrl":"https://images.unsplash.com/photo-1550151103-0135d8e13537?auto=format&fit=crop&w=500&q=80","imageUrl":"#FF6F61","_title":"Sockets, Node & JWT","title":"Make your own chat room","_subtitle":"Although not a SoMe revolution, this custom webapp chat still makes me proud :D","subtitle":"Read about this personal fullstack project","slug":"chat-webapp-node-js","markdownUrlPath":"/chatNodejs/master","width":"30%"},{"_imageUrl":"https://images.unsplash.com/photo-1563874093519-ca5eda5cd776?auto=format&fit=crop&w=500&q=80","imageUrl":"#98DDDE","_title":"Angular 5 Client App","title":"Angular 5 Client App","_subtitle":"This Angular5 app was the first webapp I developed. I got fascinated with JWT authentication and SPA architecture.","subtitle":"Read about this personal frontend project","slug":"angular-crud","markdownUrlPath":"/cvEditorFront/master","width":"65%"},{"_imageUrl":"https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?auto=format&fit=crop&w=500&q=80","imageUrl":"#FFDA29","_title":"Spring Boot Rest","title":"Spring Boot Rest","_subtitle":"Java taught me strict types are fun. This is my Spring Boot Rest API to support the Angular5 front.","subtitle":"Read about this personal backend project","slug":"spring-api-java","markdownUrlPath":"/personalRest/master","width":"35%"}]')},XLbu:function(t,e,n){var r=n("Y7ZC");r(r.P+r.R,"Map",{toJSON:n("8iia")("Map")})},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var r=n("/HRN"),o=n("WaGi"),a=n("ZDA2"),i=n("/+P4"),s=n("N9n2"),c=n("5Uuq"),u=n("KI45");e.__esModule=!0,e.default=void 0;var l,p=u(n("LX0d")),d=n("CxY0"),f=c(n("q1tI")),h=(u(n("17x9")),u(n("nOHt"))),m=(n("KA3u"),n("Bu4q"));function g(t){return t&&"object"===typeof t?(0,m.formatWithValidation)(t):t}var b=new p.default,v=window.IntersectionObserver;function w(){return l||(v?l=new v(function(t){t.forEach(function(t){if(b.has(t.target)){var e=b.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(l.unobserve(t.target),b.delete(t.target),e())}})},{rootMargin:"200px"}):void 0)}var y=function(t){function e(t){var n;return r(this,e),(n=a(this,i(e).call(this,t))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(t){var e=null,n=null,r=null;return function(o,a){if(r&&o===e&&a===n)return r;var i=t(o,a);return e=o,n=a,r=i,i}}(function(t,e){return{href:g(t),as:e?g(e):e}}),n.linkClicked=function(t){var e=t.currentTarget,r=e.nodeName,o=e.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var a=n.formatUrls(n.props.href,n.props.as),i=a.href,s=a.as;if(function(t){var e=(0,d.parse)(t,!1,!0),n=(0,d.parse)((0,m.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(i)){var c=window.location.pathname;i=(0,d.resolve)(c,i),s=s?(0,d.resolve)(c,s):i,t.preventDefault();var u=n.props.scroll;null==u&&(u=s.indexOf("#")<0),h.default[n.props.replace?"replace":"push"](i,s,{shallow:n.props.shallow}).then(function(t){t&&u&&(window.scrollTo(0,0),document.body.focus())})}}},n.p=!1!==t.prefetch,n}return s(e,t),o(e,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(t){var e=this;this.p&&v&&t&&t.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(t,e){var n=w();return n?(n.observe(t),b.set(t,e),function(){n.unobserve(t),b.delete(t)}):function(){}}(t,function(){e.prefetch()}))}},{key:"prefetch",value:function(){if(this.p){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as).href,n=(0,d.resolve)(t,e);h.default.prefetch(n)}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof e&&(e=f.default.createElement("a",null,e));var a=f.Children.only(e),i={ref:function(e){t.handleRef(e),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(e):"object"===typeof a.ref&&(a.ref.current=e))},onMouseEnter:function(e){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),t.prefetch()},onClick:function(e){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||r),f.default.cloneElement(a,i)}}]),e}(f.Component);y.propTypes=void 0;var k=y;e.default=k},dVTT:function(t,e,n){n("aPfg")("Map")},g33z:function(t,e,n){"use strict";var r=n("Wu5q"),o=n("n3ko");t.exports=n("raTm")("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var e=r.getEntry(o(this,"Map"),t);return e&&e.v},set:function(t,e){return r.def(o(this,"Map"),0===t?0:t,e)}},r,!0)},kOwS:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n("UXZV"),o=n.n(r);function a(){return(a=o.a||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}},"m/Gl":function(t,e,n){"use strict";n.r(e),e.default=function(t,e){return e=e||{},new Promise(function(n,r){var o=new XMLHttpRequest,a=[],i=[],s={},c=function(){return{ok:2==(o.status/100|0),statusText:o.statusText,status:o.status,url:o.responseURL,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(JSON.parse(o.responseText))},blob:function(){return Promise.resolve(new Blob([o.response]))},clone:c,headers:{keys:function(){return a},entries:function(){return i},get:function(t){return s[t.toLowerCase()]},has:function(t){return t.toLowerCase()in s}}}};for(var u in o.open(e.method||"get",t,!0),o.onload=function(){o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(t,e,n){a.push(e=e.toLowerCase()),i.push([e,n]),s[e]=s[e]?s[e]+","+n:n}),n(c())},o.onerror=r,o.withCredentials="include"==e.credentials,e.headers)o.setRequestHeader(u,e.headers[u]);o.send(e.body||null)})}},qNsG:function(t,e,n){"use strict";var r=n("4mXO"),o=n.n(r),a=n("pLtp"),i=n.n(a);function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,o={},a=i()(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(o.a){var s=o()(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}n.d(e,"a",function(){return s})},vYYK:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n("hfKm"),o=n.n(r);function a(t,e,n){return e in t?o()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},zgjP:function(t,e,n){t.exports=window.fetch||(window.fetch=n("m/Gl").default||n("m/Gl"))}},[["Tk32",1,0]]]);