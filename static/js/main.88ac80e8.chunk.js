(this["webpackJsonpes6-spread-operator-practice"]=this["webpackJsonpes6-spread-operator-practice"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),n=a(3),c=a.n(n),m=a(1);var l=function(){const e=Object(r.useState)(""),t=Object(m.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)([]),l=Object(m.a)(c,2),o=l[0],d=l[1];return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"heading"},s.a.createElement("h1",null,"To-Do List")),s.a.createElement("div",{className:"form"},s.a.createElement("p",{id:"error-message"}),s.a.createElement("input",{type:"text",name:"newItem",value:a,onChange:function(e){const t=e.target.value;n(t)},required:!0}),s.a.createElement("button",{onClick:function(e){""==a?(document.getElementById("error-message").classList.remove("success-message"),document.getElementById("error-message").classList.add("error-message"),document.getElementById("error-message").innerHTML="Please enter a task first"):(d(e=>[...e,a]),n(""),document.getElementById("error-message").classList.remove("error-message"),document.getElementById("error-message").classList.add("success-message"),document.getElementById("error-message").innerHTML="Added")}},s.a.createElement("span",null,"Add"))),s.a.createElement("div",null,s.a.createElement("ul",null,o.map(e=>s.a.createElement("li",null,e)))))};c.a.render(s.a.createElement(l,null),document.getElementById("root"))},4:function(e,t,a){e.exports=a(10)}},[[4,1,2]]]);
//# sourceMappingURL=main.88ac80e8.chunk.js.map