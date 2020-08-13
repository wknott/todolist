(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{16:function(n,e,t){n.exports=t.p+"static/media/done.8768eed0.svg"},17:function(n,e,t){n.exports=t.p+"static/media/delete.889d8b6f.svg"},18:function(n,e,t){n.exports=t(26)},23:function(n,e,t){},26:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(12),c=t.n(o),i=(t(23),t(3)),u=function(n){var e=n.title;return r.a.createElement("header",null,r.a.createElement("h1",null,e))},l=t(1),s=t(2);function d(){var n=Object(l.a)(["\n  padding: 10px;\n  background-color: hsl(180, 100%, 25%);\n  color: white;\n  border: none;\n  transition: background 0.3s, transform 0.3s;\n  \n  &:hover {\n    background-color: hsl(180, 100%, 30%);\n    transform: scale(1.1);\n  }\n\n  &:active {\n    background-color: hsl(180, 100%, 35%);\n  }\n"]);return d=function(){return n},n}function m(){var n=Object(l.a)(["\n  padding: 10px;\n  border: 1px solid #ddd;\n"]);return m=function(){return n},n}function f(){var n=Object(l.a)(["\n  padding: 20px;\n  display: grid;\n  grid-template-columns: 1fr auto;\n  grid-gap: 20px;\n\n  @media (max-width: 767px) {\n    grid-template-columns: 1fr;\n    grid-gap: 10px;\n  }\n"]);return f=function(){return n},n}var b=s.b.form(f()),p=s.b.input(m()),g=s.b.button(d()),k=function(n){var e=n.addTask,t=Object(a.useState)(""),o=Object(i.a)(t,2),c=o[0],u=o[1],l=Object(a.useRef)(null);return r.a.createElement(b,{onSubmit:function(n){n.preventDefault();var t=c.trim();t&&(e(t),u("")),l.current.focus()}},r.a.createElement(p,{value:c,placeholder:"Co jest do zrobienia?",autoFocus:!0,onChange:function(n){var e=n.target;return u(e.value)},ref:l}),r.a.createElement(g,null,"Dodaj zadanie"))};function h(){var n=Object(l.a)(["\n  padding: 0 10px;\n  border: none;\n  background-color: transparent;\n  color: hsl(180, 100%, 25%);\n  transition: 0.5s;\n\n  &:hover {\n    color: hsl(180, 100%, 30%);\n  }\n\n  &:active {\n    color: hsl(180, 100%, 35%);\n  }\n\n  &:disabled {\n    color: #ddd;\n  }\n"]);return h=function(){return n},n}function v(){var n=Object(l.a)(["\n  @media (max-width: 767px) {\n    display: grid;\n    grid-gap: 20px;\n  }\n"]);return v=function(){return n},n}var x=s.b.div(v()),j=s.b.button(h()),O=function(n){var e=n.directionOfSort,t=n.hideDoneTasks,a=n.tasks,o=n.togglehHideDoneTasks,c=n.markAllTasksAsDone,i=n.sortTasks;return r.a.createElement(x,null,a.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{onClick:i},"Posortuj zadania ",null===e?"":"asc"===e?"\u2193":"\u2191"),r.a.createElement(j,{onClick:o},t?"Poka\u017c uko\u0144czone":"Ukryj uko\u0144czone"),r.a.createElement(j,{onClick:c,disabled:a.every((function(n){return n.done}))},"Uko\u0144cz wszystkie")))};function E(){var n=Object(l.a)(["\n  padding: 5px 10px;\n  margin: 0px;\n  flex-grow: 1;\n"]);return E=function(){return n},n}function T(){var n=Object(l.a)(["\n  background-color: hsl(0, 100%, 50%);\n\n  &:hover {\n    background-color: hsl(0, 100%, 60%);\n  }\n\n  &:active {\n    background-color: hsl(0, 100%, 70%);\n  }\n"]);return T=function(){return n},n}function w(){var n=Object(l.a)(["\n  background-color: hsl(120, 100%, 25%);\n\n  &:hover {\n    background-color: hsl(120, 100%, 30%);\n  }\n\n  &:active {\n    background-color: hsl(120, 100%, 35%);\n  }\n"]);return w=function(){return n},n}function y(){var n=Object(l.a)(["\n  border: none;\n  padding: 10px;\n  color: white;\n  height: 35px;\n  flex: 0 0 35px;\n  transition: 0.5s;\n"]);return y=function(){return n},n}function D(){var n=Object(l.a)(["\n    display: none;\n  "]);return D=function(){return n},n}function S(){var n=Object(l.a)(["\n  padding: 5px;\n  border-bottom: 1px solid #ccc;\n  display: flex;\n  align-items: center;\n  \n  ","\n"]);return S=function(){return n},n}function z(){var n=Object(l.a)(["\n  list-style-type: none;\n  padding: 20px;\n  margin: 0;\n"]);return z=function(){return n},n}var C=s.b.ul(z()),A=s.b.li(S(),(function(n){return n.hide&&Object(s.a)(D())})),B=s.b.button(y()),H=Object(s.b)(B)(w()),J=Object(s.b)(B)(T()),I=s.b.p(E()),M=t(16),F=t.n(M),L=t(17),N=t.n(L),P=function(n){var e=n.tasks,t=n.hideDoneTasks,a=n.removeTask,o=n.toggleTaskDone;return r.a.createElement(C,null,e.map((function(n){var e=n.id,c=n.name,i=n.done;return r.a.createElement(A,{key:e,hide:t&&i},r.a.createElement(H,{onClick:function(){return o(e)}},i&&r.a.createElement("img",{height:15,src:F.a,alt:"done"})),r.a.createElement(I,null,i?r.a.createElement("s",null,c):c),r.a.createElement(J,{onClick:function(){return a(e)}},r.a.createElement("img",{height:15,src:N.a,alt:"delete"})))})))};function U(){var n=Object(l.a)(["\n  font-size: 20px;\n  margin: 0;\n"]);return U=function(){return n},n}function W(){var n=Object(l.a)(["\n  padding: 20px;\n  display: grid;\n  grid-template-columns: auto auto;\n  grid-gap: 20px;\n  border-bottom: 1px solid #ddd;\n  align-items: center;\n  justify-content: space-between;\n\n  @media (max-width: 767px) {\n    grid-template-columns: 1fr;\n    grid-gap: 10px;\n  }\n"]);return W=function(){return n},n}function R(){var n=Object(l.a)(["\n  background-color: white;\n  margin-bottom: 10px;\n  box-shadow: 0px 0px 2px 2px #ddd;\n"]);return R=function(){return n},n}var $=s.b.section(R()),q=s.b.header(W()),G=s.b.h2(U()),K=function(n){var e=n.title,t=n.extraHeaderContent,a=n.sectionBody;return r.a.createElement($,null,r.a.createElement(q,null,r.a.createElement(G,null,e),t),a)};function Q(){var n=Object(l.a)(["\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 20px;\n"]);return Q=function(){return n},n}var V=s.b.main(Q()),X=function(n){var e=n.children;return r.a.createElement(V,null,e)},Y=t(5),Z=t(8),_=function(){var n=Object(a.useState)(!1),e=Object(i.a)(n,2),t=e[0],o=e[1],c=function(){var n=Object(a.useState)(JSON.parse(localStorage.getItem("tasks"))||[]),e=Object(i.a)(n,2),t=e[0],r=e[1],o=Object(a.useState)(null),c=Object(i.a)(o,2),u=c[0],l=c[1],s=function(){return Math.max.apply(Math,Object(Z.a)(t.map((function(n){return n.id}))))};return Object(a.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(t))}),[t]),{tasks:t,directionOfSort:u,addTask:function(n){r((function(e){return[].concat(Object(Z.a)(e),[{id:e.length?s()+1:1,name:n,done:!1}])}))},removeTask:function(n){r((function(e){return e.filter((function(e){return e.id!==n}))}))},toggleTaskDone:function(n){r((function(e){return e.map((function(e){return e.id===n?Object(Y.a)(Object(Y.a)({},e),{},{done:!e.done}):e}))}))},markAllTasksAsDone:function(){r((function(n){return n.map((function(n){return Object(Y.a)(Object(Y.a)({},n),{},{done:!0})}))}))},sortTasks:function(){l("asc"===u?"desc":"asc"),r((function(n){return Object(Z.a)(n).sort((function(n,e){return"asc"===u?e.name.localeCompare(n.name):n.name.localeCompare(e.name)}))}))}}}(),l=c.tasks,s=c.directionOfSort,d=c.addTask,m=c.removeTask,f=c.toggleTaskDone,b=c.markAllTasksAsDone,p=c.sortTasks;return r.a.createElement(X,null,r.a.createElement(u,{title:"Lista zada\u0144"}),r.a.createElement(K,{title:"Dodaj nowe zadanie",sectionBody:r.a.createElement(k,{addTask:d})}),r.a.createElement(K,{title:"Lista zada\u0144",extraHeaderContent:r.a.createElement(O,{directionOfSort:s,hideDoneTasks:t,tasks:l,togglehHideDoneTasks:function(){o(!t)},markAllTasksAsDone:b,sortTasks:p}),sectionBody:r.a.createElement(P,{tasks:l,hideDoneTasks:t,removeTask:m,toggleTaskDone:f})}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.3553269c.chunk.js.map