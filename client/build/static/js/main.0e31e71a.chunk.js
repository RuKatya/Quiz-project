(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(n,t,e){},25:function(n,t,e){},26:function(n,t,e){},34:function(n,t,e){},35:function(n,t,e){},36:function(n,t,e){"use strict";e.r(t);var c=e(0),i=e(17),s=e.n(i),a=(e(24),e(25),e(8)),j=e(2),r=(e(26),e(1));var o=function(){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"mainInfoObj",children:[Object(r.jsxs)("div",{className:"mainInfoObj__text",children:[Object(r.jsx)("h1",{className:"mainInfoObj__text--h",children:"Welcome to quiz"}),Object(r.jsxs)("p",{className:"mainInfoObj__text--p",children:["Think you know everythins? ",Object(r.jsx)("p",{}),Object(r.jsx)("p",{children:"Let's see if you can become the next"}),Object(r.jsx)("p",{className:"mainInfoObj__text--pTriviaKing",children:"Trivia King!"})]})]}),Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:"img/iconQuiz.png",alt:"no pic",className:"mainInfoObj__img"})})]}),Object(r.jsx)(a.b,{to:"/quiz",className:"btnStart",children:"Let's start!"})]})},b=e(14),l=e.n(b),u=e(19),O=e(15);e(34);var h=function(){var n,t=Object(c.useState)(null),e=Object(O.a)(t,2),i=e[0],s=e[1],a=Object(c.useState)(0),j=Object(O.a)(a,2),o=j[0],b=j[1];function h(t){if(t===n[o].correctAnswer)return console.log("da");console.log("net")}return Object(c.useEffect)((function(){var n;function t(){return(t=Object(u.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:4000/api").then((function(n){return n.json()})).then((function(t){n=t.questions,s(n)})).catch((function(n){return console.log(n)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),console.log(i),i?(n=i,Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"mainInfoObj",children:[Object(r.jsxs)("div",{className:"mainInfoObj__AskAns",children:[Object(r.jsx)("h1",{className:"mainInfoObj__AskAns--question",children:n[o].ask}),Object(r.jsx)("button",{onClick:function(){return h(n[o].ans1)},children:n[o].ans1}),Object(r.jsx)("button",{onClick:function(){return h(n[o].ans2)},children:n[o].ans2}),Object(r.jsx)("button",{onClick:function(){return h(n[o].ans3)},children:n[o].ans3}),Object(r.jsx)("button",{onClick:function(){return h(n[o].ans4)},children:n[o].ans4})]}),Object(r.jsx)("input",{type:"button",value:"next",onClick:function(){8===o&&b(0),b(o+1)},className:"mainInfoObj__btnNext"})]})})):Object(r.jsx)("div",{children:n})};e(35);var x=function(){return Object(r.jsx)(a.a,{children:Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:Object(r.jsx)(a.b,{to:"/",children:Object(r.jsx)("img",{src:"img/Trivia.png",alt:"Trivia",className:"btnHome"})})}),Object(r.jsx)("div",{}),Object(r.jsxs)(j.c,{children:[Object(r.jsx)(j.a,{exact:!0,path:"/",children:Object(r.jsx)(o,{})}),Object(r.jsx)(a.a,{path:"/quiz",children:Object(r.jsx)(h,{})})]})]})})};var d=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(x,{})})};s.a.render(Object(r.jsx)(d,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.0e31e71a.chunk.js.map