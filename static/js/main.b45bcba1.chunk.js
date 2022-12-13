(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{36:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var s=c(1),i=c(11),n=c.n(i),a=(c(35),c(5)),r=c(10),o=(c(36),c(14)),l=c(25),j=c.n(l),d="AGRESSIVEPANDA444",b="I\u2019m Agressive Panda, a senior at Brown University studying computer science",m={title:"AGRESSIVEPANDA444",animated:{first:"Coder",second:"Product Manager",third:"Web Designer"},description:"Welcome to my UI/UX portfolio"},h=[{img:"https://picsum.photos400/?grayscale",desctiption:"Responsive Design",link:"https://agressivepanda444.github.io/responsivedesign-portfolio/"},{img:"https://picsum.photos/400800/?grayscale",desctiption:"Storyboards",link:"https://agressivepanda444.github.io/storyboards-portfolio/https://agressivepanda444.github.io/storyboards-portfolio/"},{img:"https://picsum.photos0/?grayscale",desctiption:"Development",link:"https://agressivepanda444.github.io/development/"},{img:"https://picsum.photos400/600/?grayscale",desctiption:"Bakery",link:"https://agressivepanda444.github.io/react-studio/"}],x="https://github.com/agressivepanda444",u=c(2),O=function(){return Object(u.jsx)(o.b,{children:Object(u.jsxs)("section",{id:"home",className:"home",children:[Object(u.jsxs)(o.a,{children:[Object(u.jsx)("meta",{charSet:"utf-8"}),Object(u.jsxs)("title",{children:[" ",d]}),Object(u.jsx)("meta",{name:"description",content:b})]}),Object(u.jsxs)("div",{className:"intro_sec d-block d-lg-flex align-items-center ",children:[Object(u.jsx)("div",{className:"h_bg-image order-1 order-lg-2 h-100 ",style:{backgroundImage:"url(".concat(m.your_img_url,")")}}),Object(u.jsx)("div",{className:"text order-2 order-lg-1 h-100 d-lg-flex justify-content-center",children:Object(u.jsx)("div",{className:"align-self-center ",children:Object(u.jsxs)("div",{className:"intro mx-auto",children:[Object(u.jsx)("h2",{className:"mb-1x",children:m.title}),Object(u.jsx)("h1",{className:"fluidz-48 mb-1x",children:Object(u.jsx)(j.a,{options:{strings:[m.animated.first,m.animated.second,m.animated.third],autoStart:!0,loop:!0,deleteSpeed:10}})}),Object(u.jsx)("p",{className:"mb-1x",children:m.description}),Object(u.jsx)("div",{className:"intro_btn-action pb-5",children:Object(u.jsx)(r.b,{to:"/portfolio",className:"text_2",children:Object(u.jsxs)("div",{id:"button_p",className:"ac_btn btn ",children:["My Portfolio",Object(u.jsx)("div",{className:"ring one"}),Object(u.jsx)("div",{className:"ring two"}),Object(u.jsx)("div",{className:"ring three"})]})})})]})})})]})]})})},p=(c(47),c(65)),g=c(66),f=c(67),v=function(){return Object(u.jsx)(o.b,{children:Object(u.jsxs)(p.a,{className:"About-header",children:[Object(u.jsxs)(o.a,{children:[Object(u.jsx)("meta",{charSet:"utf-8"}),Object(u.jsxs)("title",{children:[" Portfolio | ",d," "]})," ",Object(u.jsx)("meta",{name:"description",content:b})]}),Object(u.jsx)(g.a,{className:"mb-5 mt-3",children:Object(u.jsxs)(f.a,{lg:"8",children:[Object(u.jsx)("h1",{className:"display-4 mb-4",children:" AGRESSIVEPANDA's Portfolio "})," ",Object(u.jsx)("hr",{className:"t_border my-4 ml-0 text-left"})]})}),Object(u.jsx)("div",{className:"mb-5 po_items_ho",children:h.map((function(e,t){return Object(u.jsxs)("div",{className:"po_item",children:[Object(u.jsx)("img",{src:e.img,alt:""}),Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("p",{children:e.desctiption}),Object(u.jsx)("a",{href:e.link,children:"view project"})]})]},t)}))})]})})},N=(c(48),c(27)),_=function(e){return Object(u.jsxs)("div",{className:"stick_follow_icon",children:[Object(u.jsx)("ul",{children:x&&Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:x,children:Object(u.jsx)(N.a,{})})})}),Object(u.jsx)("p",{children:"View GitHub"})]})},y=c(69),S=c(68),k=Object(a.g)((function(e){var t=e.location;return Object(u.jsx)(y.a,{children:Object(u.jsx)(S.a,{timeout:{enter:400,exit:400},classNames:"page",unmountOnExit:!0,children:Object(u.jsxs)(a.c,{location:t,children:[Object(u.jsx)(a.a,{exact:!0,path:"/",component:O}),Object(u.jsx)(a.a,{path:"/portfolio",component:v}),Object(u.jsx)(a.a,{path:"*",component:O})]})},t.key)})}));var A=function(){return Object(u.jsxs)("div",{className:"s_c",children:[Object(u.jsx)(k,{}),Object(u.jsx)(_,{})]})},E=c(16),P=(c(49),c(20)),w=c(28),I=function(){var e=Object(s.useState)(localStorage.getItem("theme")),t=Object(E.a)(e,2),c=t[0],i=t[1];return Object(s.useEffect)((function(){document.documentElement.setAttribute("data-theme",c),localStorage.setItem("theme",c)}),[c]),Object(u.jsx)("div",{className:"nav_ac",onClick:function(){i("dark"===c?"light":"dark")},children:Object(u.jsx)(w.a,{})})},C=function(){var e=Object(s.useState)("false"),t=Object(E.a)(e,2),c=t[0],i=t[1],n=function(){i(!c),document.body.classList.toggle("ovhidden")};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("header",{className:"fixed-top site__header",children:[Object(u.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[Object(u.jsx)(r.b,{className:"navbar-brand nav_ac",to:"/",children:"AGRESSIVEPANDA444"}),Object(u.jsxs)("div",{className:"d-flex align-items-center",children:[Object(u.jsx)(I,{}),Object(u.jsx)("button",{className:"menu__button  nav_ac",onClick:n,children:c?Object(u.jsx)(P.b,{}):Object(u.jsx)(P.a,{})})]})]}),Object(u.jsx)("div",{className:"site__navigation ".concat(c?"":"menu__opend"),children:Object(u.jsx)("div",{className:"bg__menu h-100",children:Object(u.jsx)("div",{className:"menu__wrapper",children:Object(u.jsx)("div",{className:"menu__container p-3",children:Object(u.jsxs)("ul",{className:"the_menu",children:[Object(u.jsx)("li",{className:"menu_item ",children:Object(u.jsx)(r.b,{onClick:n,to:"/",className:"my-3",children:"Home"})}),Object(u.jsx)("li",{className:"menu_item",children:Object(u.jsx)(r.b,{onClick:n,to:"/portfolio",className:"my-3",children:" Portfolio"})})]})})})})})]}),Object(u.jsx)("div",{className:"br-top"}),Object(u.jsx)("div",{className:"br-bottom"}),Object(u.jsx)("div",{className:"br-left"}),Object(u.jsx)("div",{className:"br-right"})]})},D=c(29),F=c.n(D);c(60);var G=Object(a.g)((function(e){var t=Object(a.f)().pathname;return Object(s.useEffect)((function(){window.scrollTo(0,0)}),[t]),e.children}));function R(){return Object(u.jsxs)(r.a,{basename:"/portfolio",children:[Object(u.jsx)("div",{className:"cursor__dot",children:Object(u.jsx)(F.a,{innerSize:15,outerSize:15,color:"255, 255 ,255",outerAlpha:.4,innerScale:.7,outerScale:5})}),Object(u.jsxs)(G,{children:[Object(u.jsx)(C,{}),Object(u.jsx)(A,{})]})]})}c(61);var V=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,70)).then((function(t){var c=t.getCLS,s=t.getFID,i=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),s(e),i(e),n(e),a(e)}))};n.a.render(Object(u.jsx)(R,{}),document.getElementById("root")),V()}},[[62,1,2]]]);
//# sourceMappingURL=main.b45bcba1.chunk.js.map