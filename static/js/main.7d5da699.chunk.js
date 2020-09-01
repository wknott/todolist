(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{17:function(n,e,t){n.exports=t.p+"static/media/done.8768eed0.svg"},18:function(n,e,t){n.exports=t.p+"static/media/delete.889d8b6f.svg"},20:function(n,e,t){n.exports=t(32)},32:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(9),c=t.n(o),i=t(4),u=t(1),l=function(n){var e=n.title;return a.a.createElement("header",null,a.a.createElement("h1",null,e))},s=t(19),d=t(6),m=t(2);function f(){var n=Object(m.a)(["\n  padding: 10px;\n  background-color: ",";\n  color: white;\n  border: none;\n  transition: background 0.3s, transform 0.3s;\n  \n  &:hover {\n    background-color: ",";\n    transform: scale(1.1);\n  }\n\n  &:active {\n    background-color: ",";\n  }\n"]);return f=function(){return n},n}function b(){var n=Object(m.a)(["\n  padding: 10px;\n  border: 1px solid ",";\n"]);return b=function(){return n},n}function p(){var n=Object(m.a)(["\n  padding: 20px;\n  display: grid;\n  grid-template-columns: 1fr auto;\n  grid-gap: 20px;\n\n  @media (max-width: ","px) {\n    grid-template-columns: 1fr;\n    grid-gap: 10px;\n  }\n"]);return p=function(){return n},n}var g=u.d.form(p(),(function(n){return n.theme.breakpoints.mobile})),h=u.d.input(b(),(function(n){return n.theme.colors.secondary})),k=u.d.button(f(),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.hoverPrimary}),(function(n){return n.theme.colors.activePrimary})),v=t(8),x=Object(d.b)({name:"tasks",initialState:{tasks:JSON.parse(localStorage.getItem("tasks"))||[],hideDoneTasks:!1,directionOfSort:null},reducers:{addTask:function(n,e){var t=n.tasks,r=e.payload;t.push(r)},removeTask:function(n,e){var t=e.payload;n.tasks=n.tasks.filter((function(n){return n.id!==t.id}))},toggleTaskDone:function(n,e){var t=e.payload;n.tasks=n.tasks.map((function(n){return n.id===t.id?Object(v.a)(Object(v.a)({},n),{},{done:!n.done}):n}))},toggleHideDoneTasks:function(n){n.hideDoneTasks=!n.hideDoneTasks},markAllTasksAsDone:function(n){n.tasks=n.tasks.map((function(n){return Object(v.a)(Object(v.a)({},n),{},{done:!0})}))},sortTasks:function(n){n.directionOfSort="asc"===n.directionOfSort?"desc":"asc",n.tasks=n.tasks.sort((function(e,t){return"asc"===n.directionOfSort?t.name.localeCompare(e.name):e.name.localeCompare(t.name)}))}}}),O=x.actions,j=O.addTask,y=O.removeTask,E=O.toggleTaskDone,w=O.toggleHideDoneTasks,T=O.markAllTasksAsDone,D=O.sortTasks,S=function(n){return n.tasks},z=x.reducer,C=function(){var n=Object(r.useState)(""),e=Object(s.a)(n,2),t=e[0],o=e[1],c=Object(r.useRef)(null),u=Object(i.b)();return a.a.createElement(g,{onSubmit:function(n){n.preventDefault();var e=t.trim();e&&(u(j({name:e,done:!1,id:Object(d.c)()})),o("")),c.current.focus()}},a.a.createElement(h,{value:t,placeholder:"Co jest do zrobienia?",autoFocus:!0,onChange:function(n){var e=n.target;return o(e.value)},ref:c}),a.a.createElement(k,null,"Dodaj zadanie"))};function P(){var n=Object(m.a)(["\n  padding: 0 10px;\n  border: none;\n  background-color: transparent;\n  color: ",";\n  transition: 0.5s;\n\n  &:hover {\n    color: ",";\n  }\n\n  &:active {\n    color: ",";\n  }\n\n  &:disabled {\n    color: ",";\n  }\n"]);return P=function(){return n},n}function B(){var n=Object(m.a)(["\n  @media (max-width: ","px) {\n    display: grid;\n    grid-gap: 20px;\n  }\n"]);return B=function(){return n},n}var A=u.d.div(B(),(function(n){return n.theme.breakpoints.mobile})),H=u.d.button(P(),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.hoverPrimary}),(function(n){return n.theme.colors.activePrimary}),(function(n){return n.theme.colors.secondary})),J=function(){var n=Object(i.c)(S),e=n.tasks,t=n.hideDoneTasks,r=n.directionOfSort,o=Object(i.b)();return a.a.createElement(A,null,e.length>0&&a.a.createElement(a.a.Fragment,null,a.a.createElement(H,{onClick:function(){return o(D())}},"Posortuj zadania ",null===r?"":"asc"===r?"\u2193":"\u2191"),a.a.createElement(H,{onClick:function(){return o(w())}},t?"Poka\u017c uko\u0144czone":"Ukryj uko\u0144czone"),a.a.createElement(H,{onClick:function(){return o(T())},disabled:e.every((function(n){return n.done}))},"Uko\u0144cz wszystkie")))};function I(){var n=Object(m.a)(["\n  padding: 5px 10px;\n  margin: 0px;\n  flex-grow: 1;\n"]);return I=function(){return n},n}function L(){var n=Object(m.a)(["\n  background-color: hsl(0, 100%, 50%);\n\n  &:hover {\n    background-color: hsl(0, 100%, 60%);\n  }\n\n  &:active {\n    background-color: hsl(0, 100%, 70%);\n  }\n"]);return L=function(){return n},n}function F(){var n=Object(m.a)(["\n  background-color: hsl(120, 100%, 25%);\n\n  &:hover {\n    background-color: hsl(120, 100%, 30%);\n  }\n\n  &:active {\n    background-color: hsl(120, 100%, 35%);\n  }\n"]);return F=function(){return n},n}function N(){var n=Object(m.a)(["\n  border: none;\n  padding: 10px;\n  height: 35px;\n  flex: 0 0 35px;\n  transition: 0.5s;\n"]);return N=function(){return n},n}function U(){var n=Object(m.a)(["\n    display: none;\n  "]);return U=function(){return n},n}function W(){var n=Object(m.a)(["\n  padding: 5px;\n  border-bottom: 1px solid ",";\n  display: flex;\n  align-items: center;\n  \n  ","\n"]);return W=function(){return n},n}function M(){var n=Object(m.a)(["\n  list-style-type: none;\n  padding: 20px;\n  margin: 0;\n"]);return M=function(){return n},n}var R=u.d.ul(M()),$=u.d.li(W(),(function(n){return n.theme.colors.secondary}),(function(n){return n.hide&&Object(u.c)(U())})),q=u.d.button(N()),G=Object(u.d)(q)(F()),K=Object(u.d)(q)(L()),Q=u.d.p(I()),V=t(17),X=t.n(V),Y=t(18),Z=t.n(Y),_=function(){var n=Object(i.c)(S),e=n.tasks,t=n.hideDoneTasks,r=Object(i.b)();return a.a.createElement(R,null,e.map((function(n){var e=n.id,o=n.name,c=n.done;return a.a.createElement($,{key:e,hide:t&&c},a.a.createElement(G,{onClick:function(){return r(E({id:e}))}},c&&a.a.createElement("img",{height:15,src:X.a,alt:"done"})),a.a.createElement(Q,null,c?a.a.createElement("s",null,o):o),a.a.createElement(K,{onClick:function(){return r(y({id:e}))}},a.a.createElement("img",{height:15,src:Z.a,alt:"delete"})))})))};function nn(){var n=Object(m.a)(["\n  font-size: 20px;\n  margin: 0;\n"]);return nn=function(){return n},n}function en(){var n=Object(m.a)(["\n  padding: 20px;\n  display: grid;\n  grid-template-columns: auto auto;\n  grid-gap: 20px;\n  border-bottom: 1px solid ",";\n  align-items: center;\n  justify-content: space-between;\n\n  @media (max-width: ","px) {\n    grid-template-columns: 1fr;\n    grid-gap: 10px;\n  }\n"]);return en=function(){return n},n}function tn(){var n=Object(m.a)(["\n  background-color: white;\n  margin-bottom: 10px;\n  box-shadow: 0px 0px 2px 2px solid ",";\n"]);return tn=function(){return n},n}var rn=u.d.section(tn(),(function(n){return n.theme.colors.secondary})),an=u.d.header(en(),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.breakpoints.mobile})),on=u.d.h2(nn()),cn=function(n){var e=n.title,t=n.extraHeaderContent,r=n.sectionBody;return a.a.createElement(rn,null,a.a.createElement(an,null,a.a.createElement(on,null,e),t),r)};function un(){var n=Object(m.a)(["\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 20px;\n"]);return un=function(){return n},n}var ln=u.d.main(un()),sn=function(n){var e=n.children;return a.a.createElement(ln,null,e)},dn=function(){return a.a.createElement(sn,null,a.a.createElement(l,{title:"Lista zada\u0144"}),a.a.createElement(cn,{title:"Dodaj nowe zadanie",sectionBody:a.a.createElement(C,null)}),a.a.createElement(cn,{title:"Lista zada\u0144",extraHeaderContent:a.a.createElement(J,null),sectionBody:a.a.createElement(_,null)}))},mn=function(){return a.a.createElement(dn,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var fn=Object(d.a)({reducer:{tasks:z}});fn.subscribe((function(){localStorage.setItem("tasks",JSON.stringify(fn.getState().tasks.tasks))}));var bn=fn;function pn(){var n=Object(m.a)(['\n  html {\n    box-sizing: border-box;\n  }\n\n  *, ::after, ::before {\n    box-sizing: inherit;\n  }\n\n  body {\n    font-family: "Lato", sans-serif;\n    color: ',";\n    background-color: ",";\n  }\n"]);return pn=function(){return n},n}var gn=Object(u.b)(pn(),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.background}));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(i.a,{store:bn},a.a.createElement(u.a,{theme:{colors:{primary:"hsl(180, 100%, 25%)",hoverPrimary:"hsl(180, 100%, 30%)",activePrimary:"hsl(180, 100%, 35%)",secondary:"#ddd",text:"#222",background:"#eee"},breakpoints:{mobile:767}}},a.a.createElement(gn,null),a.a.createElement(mn,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.7d5da699.chunk.js.map