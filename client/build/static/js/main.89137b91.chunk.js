(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(e,n,t){},25:function(e,n,t){},26:function(e,n,t){},34:function(e,n,t){},35:function(e,n,t){},36:function(e,n,t){"use strict";t.r(n);var c=t(0),s=t(17),a=t.n(s),i=(t(24),t(25),t(8)),o=t(2),j=(t(26),t(1));var r=function(){return Object(c.useEffect)((function(){document.body.style="background: linear-gradient(0deg, rgba(159,40,227,1) 0%, rgba(44,190,232,1) 100%) no-repeat fixed;"}),[]),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"mainInfoObj",children:[Object(j.jsxs)("div",{className:"mainInfoObj__text",children:[Object(j.jsx)("h1",{className:"mainInfoObj__text--h",children:"Welcome to quiz"}),Object(j.jsxs)("p",{className:"mainInfoObj__text--p",children:["Think you know everythins? ",Object(j.jsx)("p",{}),Object(j.jsx)("p",{children:"Let's see if you can become the next"}),Object(j.jsx)("p",{className:"mainInfoObj__text--pTriviaKing",children:"Trivia King!"})]})]}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:"img/iconQuiz.png",alt:"no pic",className:"mainInfoObj__img"})})]}),Object(j.jsx)(i.b,{to:"/quiz",className:"btnStart",children:"Let's start!"})]})},b=t(15),l=t.n(b),u=t(19),O=t(7);t(34);var d=function(){var e,n=Object(c.useState)(null),t=Object(O.a)(n,2),s=t[0],a=t[1],o=Object(c.useState)(0),r=Object(O.a)(o,2),b=r[0],d=r[1],f=Object(c.useState)(0),h=Object(O.a)(f,2),m=h[0],x=h[1],p=Object(c.useState)(0),g=Object(O.a)(p,2),_=g[0],v=g[1],k=Object(c.useState)("block"),N=Object(O.a)(k,2),y=N[0],I=N[1],A=Object(c.useState)("none"),S=Object(O.a)(A,2),w=S[0],C=S[1],E=Object(c.useState)("none"),T=Object(O.a)(E,2),q=T[0],z=T[1],H=Object(c.useState)("none"),J=Object(O.a)(H,2),K=J[0],L=J[1],W=Object(c.useState)(5),B=Object(O.a)(W,2),D=B[0],F=B[1];function Q(){return Object(c.useEffect)((function(){D>0&&b<3?setTimeout((function(){return F(D-1)}),1e3):0===D&&(F(5),d(b+1))})),D>0&&3===b&&F("stop"),Object(j.jsx)("div",{className:"mainInfoObj__timer",children:D})}function G(n){var t=e[b].correctAnswer;0===_&&n===t?(x(m+1),v(1),L("block"),console.log("da",m)):0===_&&(v(1),z("block"),console.log("net",_))}return Object(c.useEffect)((function(){document.body.style="background:linear-gradient(0deg, rgb(233, 253, 47)  0%, rgb(47, 243, 80) 100%) no-repeat fixed;"}),[]),Object(c.useEffect)((function(){var e;function n(){return(n=Object(u.a)(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("http://localhost:4000/api").then((function(e){return e.json()})).then((function(n){e=n.questions,a(e)})).catch((function(e){return console.log(e)}));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),console.log(s),s?(e=s,Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"mainInfoObj",children:[Object(j.jsxs)("div",{className:"mainInfoObj__AskAns",children:[Object(j.jsxs)("h1",{className:"mainInfoObj__AskAns--question",children:[e[b].numAsk,". ",e[b].ask]}),Object(j.jsx)("p",{className:"mainInfoObj__AskAns--wrong",style:{display:q},children:"Wrong!"}),Object(j.jsxs)("div",{className:"mainInfoObj__AskAns--answers",children:[Object(j.jsx)("button",{onClick:function(){return G(e[b].ans1)},className:"mainInfoObj__AskAns--choose",children:e[b].ans1}),Object(j.jsx)("button",{onClick:function(){return G(e[b].ans2)},className:"mainInfoObj__AskAns--choose",children:e[b].ans2}),Object(j.jsx)("button",{onClick:function(){return G(e[b].ans3)},className:"mainInfoObj__AskAns--choose",children:e[b].ans3}),Object(j.jsx)("button",{onClick:function(){return G(e[b].ans4)},className:"mainInfoObj__AskAns--choose",children:e[b].ans4})]}),Object(j.jsx)("p",{className:"mainInfoObj__AskAns--correct",style:{display:K},children:"Correct!"})]}),Object(j.jsx)("input",{type:"button",value:"Next",onClick:function(){d(b+1),v(0),z("none"),L("none"),20===b&&(I("none"),C("block")),console.log(y,b),console.log("flag",_)},className:"mainInfoObj__btnNext",style:{display:y}})]}),Object(j.jsx)(Q,{}),Object(j.jsx)(i.b,{to:"/total",style:{display:w},className:"mainInfoObj__btnFinish",children:"Done!"})]})):Object(j.jsx)("div",{children:e})};var f=function(){return Object(c.useEffect)((function(){document.body.style="background:linear-gradient(0deg, rgba(227,40,40,1) 0%, rgba(189,44,232,1) 100%) no-repeat fixed;"}),[]),Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"HI"})})};t(35);var h=function(){return Object(j.jsx)(i.a,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsx)(i.b,{to:"/",children:Object(j.jsx)("img",{src:"img/Trivia.png",alt:"Trivia",className:"btnHome"})})}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",children:Object(j.jsx)(r,{})}),Object(j.jsx)(o.a,{path:"/quiz",children:Object(j.jsx)(d,{})}),Object(j.jsx)(o.a,{path:"/total",children:Object(j.jsx)(f,{})})]})]})})};var m=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(h,{})})};a.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.89137b91.chunk.js.map