(this["webpackJsonpreact-todos"]=this["webpackJsonpreact-todos"]||[]).push([[0],{18:function(e,a,t){"use strict";t.r(a);var n=t(2),c=t.n(n),l=t(8),s=t.n(l),o=t(20);var i=async()=>(await o.a.get("".concat("https://localhost:5107","/items"))).data,m=async e=>(console.log("addTask",e),{}),r=async(e,a)=>(console.log("setCompleted",{id:e,isComplete:a}),{}),d=async()=>{console.log("deleteTask")};var u=function(){const[e,a]=Object(n.useState)(""),[t,l]=Object(n.useState)([]);async function s(){const e=await i();l(e)}return Object(n.useEffect)(()=>{s()},[]),c.a.createElement("section",{className:"todoapp"},c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,"todos"),c.a.createElement("form",{onSubmit:async function(t){t.preventDefault(),await m(e),a(""),await s()}},c.a.createElement("input",{className:"new-todo",placeholder:"Well, let's take on the day",value:e,onChange:e=>a(e.target.value)}))),c.a.createElement("section",{className:"main",style:{display:"block"}},c.a.createElement("ul",{className:"todo-list"},t.map(e=>c.a.createElement("li",{className:e.isComplete?"completed":"",key:e.id},c.a.createElement("div",{className:"view"},c.a.createElement("input",{className:"toggle",type:"checkbox",defaultChecked:e.isComplete,onChange:a=>async function(e,a){await r(e.id,a),await s()}(e,a.target.checked)}),c.a.createElement("label",null,e.name),c.a.createElement("button",{className:"destroy",onClick:()=>async function(e){await d(e),await s()}(e.id)})))))))};s.a.render(c.a.createElement(u,null),document.getElementById("root"))},9:function(e,a,t){e.exports=t(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.0b094626.chunk.js.map