(this.webpackJsonpdiasporama=this.webpackJsonpdiasporama||[]).push([[0],{13:function(e){e.exports=JSON.parse('[{"id":1,"title":"oh, what a thrill","paragraph":"this is it","direction":"row-reverse","color":"#71BC8F","diapo":[{"text":"Image1","image":"/images/animinage1.jpg","alt":"bla"},{"text":"Image2","image":"/images/animage2.jpg","alt":"bla"},{"text":"Image3","image":"/images/animimage3.jpg","alt":"bla"}]},{"id":2,"title":"Woooo ooHHH","paragraph":"that is at","direction":"row","color":"coral","diapo":[{"text":"GGood","image":"/images/animinage1.jpg","alt":"bla"},{"text":"Ohh00h000o!!","image":"/images/animage2.jpg","alt":"bla"},{"text":"Brill!","image":"/images/animage3.jpg","alt":"bla"}]},{"id":3,"title":"tactile cactile","paragraph":"It is meant to be","direction":"row-reverse","color":"rgb(142, 13, 59)","diapo":[{"text":"GGood","image":"/images/animinage1.jpg","alt":"bla"},{"text":"Ohh00h000o!!","image":"/images/animage2.jpg","alt":"bla"},{"text":"Brill!","image":"/images/animage3.jpg","alt":"bla"}]}]')},39:function(e,n,t){"use strict";t.r(n);var i,a=t(0),c=t(23),r=t.n(c),o=t(5),d=t(6),b=Object(d.a)(i||(i=Object(o.a)(['\n\n@font-face {font-family: "YoungSerif"; \nsrc: url("//db.onlinewebfonts.com/t/d18acb2db67fb3aae1ccd198d37a10e9.eot"); \nsrc: url("//db.onlinewebfonts.com/t/d18acb2db67fb3aae1ccd198d37a10e9.eot?#iefix") \nformat("embedded-opentype"), \nurl("//db.onlinewebfonts.com/t/d18acb2db67fb3aae1ccd198d37a10e9.woff2") format("woff2"), \nurl("//db.onlinewebfonts.com/t/d18acb2db67fb3aae1ccd198d37a10e9.woff") format("woff"),\n url("//db.onlinewebfonts.com/t/d18acb2db67fb3aae1ccd198d37a10e9.ttf") format("truetype"), \n url("//db.onlinewebfonts.com/t/d18acb2db67fb3aae1ccd198d37a10e9.svg#YoungSerif") format("svg"); }\n \n    html, body {\n        font-family: "Josefin Sans", sans-serif;\n        text-rendering: optimizeLegibility;\n        -moz-osx-font-smoothing: grayscale;\n        background: rgba(237, 249, 161, 1);\n        text-rendering: optimizeLegibility;\n        -webkit-font-smoothing: antialiased;\n        color: #6ddfa8;\n        font-size: 16px;\n        margin: 0;\n\n        \n    }\n']))),l=t(11),j=t(13),s=t(1);var h=function(){return Object(s.jsx)("header",{children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)(l.b,{to:"/",children:"Home"})}),j.map((function(e){return Object(s.jsx)("li",{children:Object(s.jsx)(l.b,{to:"/".concat(e.id),children:e.title})},e.id)}))]})})},O=t(3),x=t(17),f=t(27),m=t.p+"static/media/click.1d70c9e7.mp3";function g(e){var n=Object(a.useState)(!0),t=Object(x.a)(n,2),i=t[0],c=t[1],r=Object(a.useState)(0),o=Object(x.a)(r,2),d=o[0],b=o[1],l=Object(a.useState)(!1),j=Object(x.a)(l,2),h=j[0],O=j[1],g=Object(f.a)(m,{volume:.4}),u=Object(x.a)(g,1)[0],p=Object(a.useRef)(null),v=e.diaporama;Object(a.useEffect)((function(){var e=v.length,n=setInterval((function(){h&&(c((function(e){return!e})),p.current=setTimeout((function(){return c(!1)}),2e3),console.log(h),b((function(n){return(n+1)%e})),u())}),1500);return function(){return clearInterval(n)}}),[v.length,h,u]);var w=v[d],y=i?"text":"notext";return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("section",{children:[Object(s.jsx)("header",{children:Object(s.jsx)("h1",{children:e.title})}),Object(s.jsxs)("figure",{onMouseEnter:function(){O(!0)},onMouseLeave:function(){c(!0),O(!1),clearTimeout(p.current),b(0)},children:[Object(s.jsxs)("div",{className:y,children:[Object(s.jsx)("h2",{children:w.text}),Object(s.jsxs)("figcaption",{children:[d+1," / ",v.length]})]}),Object(s.jsx)("img",{className:" imageFit ",alt:w.alt,src:"/diasporama".concat(w.image)})]})]})})}function u(){var e=Object(O.f)().id,n=j.find((function(n){return n.id===Number(e)}));return n?Object(s.jsx)(g,{diaporama:n.diapo,title:n.title,paragraph:n.paragraph}):Object(s.jsx)("h2",{children:"This page doesn't exist"})}var p,v,w,y,I,z,S,F,T,k,P,C,N,B,G=t(2),H=t(9),J=d.b.div(p||(p=Object(o.a)(["\n  background-color: ",";\n  padding: 2%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: ",";\n  max-width: 1100px;\n  border-radius: 10px;\n  width: 100%;\n\n  @media (max-width: 1000px) {\n    flex-direction: column-reverse;\n  }\n"])),(function(e){return e.color}),(function(e){return e.direction})),Y=d.b.div(v||(v=Object(o.a)(["\n  display: flex;\n  padding: 50px 5%;\n  overflow: hidden;\n  justify-content: center;\n"]))),A=d.b.div(w||(w=Object(o.a)(["\n  margin: 0 100px;\n  @media (max-width: 1000px) {\n    margin: 0;\n  }\n"]))),E=d.b.div(y||(y=Object(o.a)(["\n  @media (max-width: 1000px) {\n    ",":last-of-type h2 {\n      margin-bottom: 50px;\n    }\n  }\n"])),Y),L=d.b.h1(I||(I=Object(o.a)(['\n  font-family: "YoungSerif", Trebuchet, Arial, sans-serif;\n  font-size: 50px;\n  line-height: 1.1;\n  margin-bottom: 8px;\n  @media (max-width: 600px) {\n    font-size: 35px;\n  }\n']))),M=d.b.p(z||(z=Object(o.a)(["\n  font-size: 26px;\n  font-weight: normal;\n  line-height: normal;\n  @media (max-width: 600px) {\n    font-size: 18px;\n  }\n"]))),R=d.b.section(S||(S=Object(o.a)(["\n  display: flex;\n  height: 100vh;\n  justify-content: space-between;\n"]))),W=d.b.figure(F||(F=Object(o.a)(["\n  background: #fff;\n  margin: 0;\n  width: 100vw;\n"]))),q=d.b.figcaption(T||(T=Object(o.a)(["\n  color: red;\n  font-size: 30px;\n  z-index: 1;\n"]))),D=d.b.div(k||(k=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  background-color: rgba(0, 0, 0);\n  z-index: 1;\n"]))),K=d.b.div(P||(P=Object(o.a)(["\n  height: 100vh;\n  position: fixed;\n  width: 50%;\n"]))),Q=d.b.img(C||(C=Object(o.a)(["\n  max-width: 500px;\n  max-height: 500px;\n  @media (max-width: 500px) {\n    max-width: 80vw;\n    padding-top: 2px;\n  }\n"]))),U=d.b.div(N||(N=Object(o.a)(["\n  display: none;\n  visibility: hidden;\n"]))),V=d.b.h2(B||(B=Object(o.a)(['\n  font-weight: 900;\n  font-size: 10vh;\n  text-decoration: underline overline;\n  font-family: "YoungSerif", sans-serif;\n'])));function X(e){var n=e.children,t=e.color,i=void 0===t?"color":t,a=e.direction,c=void 0===a?"row":a;Object(H.a)(e,["children","color","direction"]);return Object(s.jsx)(Y,{children:Object(s.jsx)(J,{direction:c,color:i,children:n})})}function Z(){return Object(s.jsx)(X.Container,{children:j.map((function(e){return Object(s.jsx)(l.b,{to:"/".concat(e.id),children:Object(s.jsxs)(X,{direction:e.direction,color:e.color,border:e.border,children:[Object(s.jsxs)(X.Pane,{children:[Object(s.jsx)(X.Title,{children:e.title}),Object(s.jsx)(X.Paragraph,{children:e.paragraph})]}),Object(s.jsx)(X.Pane,{children:Object(s.jsx)(X.Image,{src:"/diasporama"+e.diapo[0].image,alt:e.diapo[0].alt})})]})},e.id)}))})}function $(){return Object(s.jsx)(Z,{})}function _(){return Object(s.jsx)(l.a,{children:Object(s.jsxs)(O.c,{children:[Object(s.jsx)(O.a,{path:"/Contact",children:Object(s.jsx)("p",{children:"I will be the contact page"})}),Object(s.jsx)(O.a,{path:"/Projects",children:Object(s.jsx)("p",{children:"I will be the projects page "})}),Object(s.jsxs)(O.a,{path:"/:id",children:[Object(s.jsx)(h,{}),Object(s.jsx)(u,{})]}),Object(s.jsx)(O.a,{path:"/About",children:Object(s.jsx)("p",{children:"I will be the About page"})}),Object(s.jsx)(O.a,{path:"/",children:Object(s.jsx)($,{})})]})})}X.Container=function(e){var n=e.children,t=Object(H.a)(e,["children"]);return Object(s.jsx)(E,Object(G.a)(Object(G.a)({},t),{},{children:n}))},X.Title=function(e){var n=e.children,t=Object(H.a)(e,["children"]);return Object(s.jsx)(L,Object(G.a)(Object(G.a)({},t),{},{children:n}))},X.Pane=function(e){var n=e.children,t=Object(H.a)(e,["children"]);return Object(s.jsx)(A,Object(G.a)(Object(G.a)({},t),{},{children:n}))},X.Section=function(e){var n=e.children,t=Object(H.a)(e,["children"]);return Object(s.jsx)(R,Object(G.a)(Object(G.a)({},t),{},{children:n}))},X.Paragraph=function(e){var n=e.children,t=Object(H.a)(e,["children"]);return Object(s.jsx)(M,Object(G.a)(Object(G.a)({},t),{},{children:n}))},X.Figure=function(e){var n=e.children,t=Object(H.a)(e,["children"]);return Object(s.jsx)(W,Object(G.a)(Object(G.a)({},t),{},{children:n}))},X.FigCaption=function(e){var n=e.children,t=Object(H.a)(e,["children"]);return Object(s.jsx)(q,Object(G.a)(Object(G.a)({},t),{},{children:n}))},X.TextFit=function(e){var n=e.children,t=Object(H.a)(e,["children"]);return Object(s.jsx)(D,Object(G.a)(Object(G.a)({},t),{},{children:n}))},X.Image=function(e){var n=Object.assign({},e);return Object(s.jsx)(Q,Object(G.a)({},n))},X.ImageFit=function(e){var n=e.children,t=Object(H.a)(e,["children"]);return Object(s.jsx)(K,Object(G.a)(Object(G.a)({},t),{},{children:n}))},X.NoTextFit=function(e){var n=e.children,t=Object(H.a)(e,["children"]);return Object(s.jsx)(U,Object(G.a)(Object(G.a)({},t),{},{children:n}))},X.InnerTitle=function(e){var n=e.children,t=Object(H.a)(e,["children"]);return Object(s.jsx)(V,Object(G.a)(Object(G.a)({},t),{},{children:n}))},r.a.render(Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(b,{}),Object(s.jsx)(_,{})]}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.451ffaf2.chunk.js.map