(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(e,n,t){},25:function(e,n,t){},26:function(e,n,t){},34:function(e,n,t){},35:function(e,n,t){},36:function(e,n,t){},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var c=t(1),s=t(17),a=t.n(s),i=(t(24),t(25),t(5)),o=t(8),r=t(2),j=(t(26),t(0));var b=function(){return Object(c.useEffect)((function(){document.body.style="background: linear-gradient(0deg, rgba(159,40,227,1) 0%, rgba(44,190,232,1) 100%) no-repeat fixed;"}),[]),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"mainInfoObjHome",children:[Object(j.jsxs)("div",{className:"mainInfoObjHome__text",children:[Object(j.jsx)("h1",{className:"mainInfoObjHome__text--h",children:"Welcome to quiz"}),Object(j.jsxs)("p",{className:"mainInfoObjHome__text--p",children:["Think you know everything? ",Object(j.jsx)("p",{}),Object(j.jsx)("p",{children:"Let's see if you can become the next"}),Object(j.jsx)("p",{className:"mainInfoObjHome__text--pTriviaKing",children:"Trivia King!"})]})]}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:"img/iconQuiz.png",alt:"no pic",className:"mainInfoObjHome__img"})})]}),Object(j.jsx)(o.b,{to:"/rules",className:"btnStart",children:"Let's start!"})]})},l=t(15),u=t.n(l),O=t(19);t(34);var d=function(e){var n,t=Object(c.useState)(null),s=Object(i.a)(t,2),a=s[0],b=s[1],l=Object(c.useState)(0),d=Object(i.a)(l,2),m=d[0],f=d[1],h=Object(c.useState)(0),x=Object(i.a)(h,2),g=x[0],p=x[1],_=Object(c.useState)("block"),v=Object(i.a)(_,2),N=v[0],k=v[1],I=Object(c.useState)("none"),y=Object(i.a)(I,2),A=y[0],z=y[1],S=Object(c.useState)("none"),Q=Object(i.a)(S,2),T=Q[0],w=Q[1],C=Object(c.useState)("none"),q=Object(i.a)(C,2),E=q[0],H=q[1],R=Object(c.useState)(600),G=Object(i.a)(R,2),Y=G[0],B=G[1],J=e.score,K=e.setScore;function L(){var e=Object(r.f)();Object(c.useEffect)((function(){Y>0&&m<23?setTimeout((function(){return B(Y-1)}),1e3):0===Y&&(B(0),e.push("/total"))}));var n=Y%60;return n<10&&(n="0"+n),Object(j.jsxs)("div",{className:"mainInfoObjQuiz__timer",children:[Math.floor(Y/60),":",n]})}function W(e){var t=n[m].correctAnswer;0===g&&e===t?(K(J+1),p(1),H("block")):0===g&&(p(1),w("block"))}return Object(c.useEffect)((function(){document.body.style="background:linear-gradient(0deg, rgb(233, 253, 47)  0%, rgb(47, 243, 80) 100%) no-repeat fixed;"}),[]),Object(c.useEffect)((function(){var e;function n(){return(n=Object(O.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/data").then((function(e){return e.json()})).then((function(n){e=n.questions,b(e)})).catch((function(e){return console.log(e)}));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),a?(n=a,Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"mainInfoObjQuiz",children:[Object(j.jsxs)("div",{className:"mainInfoObjQuiz__AskAns",children:[Object(j.jsxs)("h1",{className:"mainInfoObjQuiz__AskAns--question",children:[n[m].numAsk,". ",n[m].ask]}),Object(j.jsx)("p",{className:"mainInfoObjQuiz__AskAns--wrong",style:{display:T},children:"Wrong!"}),Object(j.jsxs)("div",{className:"mainInfoObjQuiz__AskAns--answers",children:[Object(j.jsx)("button",{onClick:function(){return W(n[m].ans1)},className:"mainInfoObjQuiz__AskAns--choose",children:n[m].ans1}),Object(j.jsx)("button",{onClick:function(){return W(n[m].ans2)},className:"mainInfoObjQuiz__AskAns--choose",children:n[m].ans2}),Object(j.jsx)("button",{onClick:function(){return W(n[m].ans3)},className:"mainInfoObjQuiz__AskAns--choose",children:n[m].ans3}),Object(j.jsx)("button",{onClick:function(){return W(n[m].ans4)},className:"mainInfoObjQuiz__AskAns--choose",children:n[m].ans4})]}),Object(j.jsx)("p",{className:"mainInfoObjQuiz__AskAns--correct",style:{display:E},children:"Correct!"})]}),Object(j.jsx)("input",{type:"button",value:"Next",onClick:function(){f(m+1),p(0),w("none"),H("none"),21===m&&(k("none"),z("block")),console.log(N,m),console.log("flag",g)},className:"mainInfoObjQuiz__btnNext",style:{display:N}})]}),Object(j.jsx)(L,{}),Object(j.jsx)(o.b,{to:"/total",style:{display:A},className:"mainInfoObjQuiz__btnFinish",children:"Done!"})]})):Object(j.jsx)("div",{children:n})};t(35);var m=function(e){var n=e.score,t=e.setScore,s=Object(c.useState)(""),a=Object(i.a)(s,2),r=a[0],b=a[1];function l(){return n<=6?b("Better luck next time"):n<=15?b("Not bad, maybe you can do better next time"):n<=20?b("Great! You're almost there"):n<=23&&b("Congratulations! You are the trivia king"),console.log(n),Object(j.jsx)("p",{children:r})}return Object(c.useEffect)((function(){document.body.style="background:linear-gradient(0deg, rgba(227,40,40,1) 0%, rgba(189,44,232,1) 100%) no-repeat fixed;"}),[]),Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"mainInfoObjTotal",children:[Object(j.jsxs)("div",{className:"mainInfoObjTotal__AllText",children:[Object(j.jsx)("h1",{className:"mainInfoObjTotal__header",children:" You answer right"}),Object(j.jsxs)("p",{className:"mainInfoObjTotal__parag",children:[Object(j.jsxs)("p",{children:[n,"/23"]}),Object(j.jsx)(l,{})]})]}),Object(j.jsx)(o.b,{to:"/quiz",className:"btnAgain",onClick:function(){t(0)},children:"Try again!"})]})})};t(36);var f=function(){return Object(c.useEffect)((function(){document.body.style="background:linear-gradient(0deg, rgba(227,118,40,1) 0%, rgba(91,44,232,1) 100%) no-repeat fixed;"}),[]),Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"mainInfoObjRules",children:Object(j.jsxs)("div",{className:"mainInfoObjRules__AllText",children:[Object(j.jsx)("h1",{className:"mainInfoObjRules__header",children:"Notice"}),Object(j.jsxs)("p",{className:"mainInfoObjRules__parag",children:[Object(j.jsx)("p",{children:"The trivia will consist of 23 questions and"})," ",Object(j.jsx)("p",{children:"you will be given 10 minutes to solve them all."})]}),Object(j.jsx)(o.b,{to:"/quiz",className:"btnGotIt",children:"Got it"})]})})})};t(37);var h=function(){var e=Object(c.useState)(0),n=Object(i.a)(e,2),t=n[0],s=n[1];return Object(j.jsx)(o.a,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsx)(o.b,{to:"/",children:Object(j.jsx)("img",{src:"img/Trivia.png",alt:"Trivia",className:"btnHome"})})}),Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{exact:!0,path:"/",children:Object(j.jsx)(b,{})}),Object(j.jsx)(r.a,{path:"/rules",children:Object(j.jsx)(f,{})}),Object(j.jsx)(r.a,{path:"/quiz",children:Object(j.jsx)(d,{score:t,setScore:s})}),Object(j.jsx)(r.a,{path:"/total",children:Object(j.jsx)(m,{score:t,setScore:s})})]})]})})};var x=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(h,{})})};a.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.533be8db.chunk.js.map