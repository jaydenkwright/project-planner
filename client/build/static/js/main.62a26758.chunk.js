(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{33:function(e,t,a){e.exports=a(64)},38:function(e,t,a){},57:function(e,t,a){e.exports=a.p+"static/media/image1.e9a86709.svg"},63:function(e,t,a){e.exports=a.p+"static/media/plus.a69b1e05.svg"},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),l=a.n(c),s=(a(38),a(2)),i=a.n(s),u=a(3),o=a(1),m=a(4),p=a.n(m),d=a(6);function b(){var e=Object(n.useState)(),t=Object(o.a)(e,2),c=t[0],l=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/user",{withCredentials:!0});case 2:t=e.sent,l(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{className:"sidebar"},r.a.createElement("div",{className:"sidebarUserContainer"},r.a.createElement("img",{src:a(57),className:"sidebarProfilePicture",alt:"Sidebar profile"}),r.a.createElement("p",{className:"sidebarUserName"},c?c.firstName:null),r.a.createElement("p",{className:"sidebarSettingsLabel"},r.a.createElement(d.b,{to:"/settings"},"Settings"))),r.a.createElement("div",{className:"sidebarListContainer"},r.a.createElement("div",{className:"sidebarItem"},r.a.createElement("span",null,r.a.createElement("svg",{fill:"#000000",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"16px",height:"16px"},r.a.createElement("path",{d:"M 12 2 A 1 1 0 0 0 11.289062 2.296875 L 1.203125 11.097656 A 0.5 0.5 0 0 0 1 11.5 A 0.5 0.5 0 0 0 1.5 12 L 4 12 L 4 20 C 4 20.552 4.448 21 5 21 L 9 21 C 9.552 21 10 20.552 10 20 L 10 14 L 14 14 L 14 20 C 14 20.552 14.448 21 15 21 L 19 21 C 19.552 21 20 20.552 20 20 L 20 12 L 22.5 12 A 0.5 0.5 0 0 0 23 11.5 A 0.5 0.5 0 0 0 22.796875 11.097656 L 12.716797 2.3027344 A 1 1 0 0 0 12.710938 2.296875 A 1 1 0 0 0 12 2 z"}))),r.a.createElement("p",{className:"px-2"},r.a.createElement(d.b,{to:"/"},"Home"))),r.a.createElement("div",{className:"sidebarItem"},r.a.createElement("span",null,r.a.createElement("svg",{fill:"#000000",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"16px",height:"16px"},r.a.createElement("path",{d:"M12,2C6.477,2,2,6.477,2,12s4.477,10,10,10s10-4.477,10-10S17.523,2,12,2z M16,13h-3v3c0,0.552-0.448,1-1,1h0 c-0.552,0-1-0.448-1-1v-3H8c-0.552,0-1-0.448-1-1v0c0-0.552,0.448-1,1-1h3V8c0-0.552,0.448-1,1-1h0c0.552,0,1,0.448,1,1v3h3 c0.552,0,1,0.448,1,1v0C17,12.552,16.552,13,16,13z"}))),r.a.createElement("p",{className:"px-2"},r.a.createElement(d.b,{to:"/create/project/"},"Create New Project")))))}var v=function(e){var t=e.title,a=e.description;return r.a.createElement("div",{className:"headerContainer"},r.a.createElement("p",{className:"headerTitle"},t),a?r.a.createElement("div",{className:"headerDescription"},a):null)},f=a(5),E=function(e){var t=e.data,a=Object(f.f)();return r.a.createElement("div",{className:"projectCardContainer",onClick:function(){return a.push("/projects/".concat(t.id))}},r.a.createElement("p",{className:"projectName"},t.name),r.a.createElement("p",{className:"projectDescription"},t.description),r.a.createElement("div",{className:"projectCategoryContainer"},r.a.createElement("p",{className:"projectCategory"},t.category)))},g=function(e){var t=e.title,n=e.destination,c=Object(f.f)();return r.a.createElement("div",{className:"newCardContainer",onClick:function(){c.push("/".concat(n))}},r.a.createElement("p",{className:"newCardTitle"},t),r.a.createElement("span",null,r.a.createElement("img",{className:"newCardImage",src:a(63),alt:"Create new project"})))},h=[{id:0,userId:"",name:"",description:"",category:"",dueDate:"",figma:"",github:"",privacy:!1,date:""}],x=function(e){var t=e.children;return r.a.createElement("div",{className:"layout w-max-sm max-h-full"},t)},j=function(){var e=Object(n.useState)(h),t=Object(o.a)(e,2),a=t[0],c=t[1],l=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/projects",{withCredentials:!0});case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){l()}),[]),r.a.createElement("div",{className:""},r.a.createElement(v,{title:"Projects"}),r.a.createElement(x,null,a.map((function(e){return r.a.createElement(E,{key:e.id,data:e})})),r.a.createElement(g,{title:"Create New Project",destination:"create/project/"})))},N=function(e){var t=e.error;return r.a.createElement("div",null,r.a.createElement("div",{className:"errorContainer"},t))},O=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),s=Object(o.a)(l,2),m=s[0],d=s[1],b=Object(n.useState)("Programming"),E=Object(o.a)(b,2),g=E[0],h=E[1],j=Object(n.useState)(""),O=Object(o.a)(j,2),w=O[0],C=O[1],S=Object(n.useState)("Private"),y=Object(o.a)(S,2),L=y[0],k=y[1],D=Object(n.useState)(void 0),P=Object(o.a)(D,2),A=P[0],T=P[1],I=Object(n.useState)(),B=Object(o.a)(I,2),q=B[0],W=B[1],M=Object(f.f)();return A&&M.push("/projects/".concat(A.id)),r.a.createElement("div",null,r.a.createElement(v,{title:"Create"}),r.a.createElement(x,null,r.a.createElement("div",{className:"mx-auto py-16"},q?r.a.createElement(N,{error:q}):null,r.a.createElement("form",{onSubmit:function(e){null===e||void 0===e||e.preventDefault(),function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("/project/add",{name:a,description:m,category:g,dueDate:w,github:"github.com",figma:"figma.com",privacy:"Private"===L},{withCredentials:!0}).then((function(e){return T(e.data)}));case 3:e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),W(e.t0.response.data.msg);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}()()}},r.a.createElement("label",{className:"textboxLabel"},"Name"),r.a.createElement("input",{type:"text",className:"textbox",maxLength:100,required:!0,onChange:function(e){return c(e.target.value)}}),r.a.createElement("label",{className:"textboxLabel"},"Description"),r.a.createElement("textarea",{className:"descriptionTextArea",onChange:function(e){return d(e.target.value)},maxLength:200}),r.a.createElement("label",{className:"textboxLabel"},"Category"),r.a.createElement("select",{className:"categorySelector",value:g,required:!0,onChange:function(e){return h(e.target.value)}},r.a.createElement("option",{value:"Programming"},"Programming"),r.a.createElement("option",{value:"Web devlopment"},"Web devlopment"),r.a.createElement("option",{value:"Design"},"Design"),r.a.createElement("option",{value:"Writing"},"Writing"),r.a.createElement("option",{value:"Architecture"},"Architecture"),r.a.createElement("option",{value:"Marketing"},"Marketing"),r.a.createElement("option",{value:"Art"},"Art"),r.a.createElement("option",{value:"Video"},"Video")),r.a.createElement("label",{className:"textboxLabel"},"Due By"),r.a.createElement("input",{type:"date",className:"dateSelector",onChange:function(e){return C(e.target.value)}}),r.a.createElement("label",{className:"textboxLabel"},"Privacy"),r.a.createElement("select",{className:"categorySelector",value:L,onChange:function(e){return k(e.target.value)}},r.a.createElement("option",{value:"Private"},"Private"),r.a.createElement("option",{value:"Public"},"Public")),r.a.createElement("input",{type:"submit",className:"submitBtn",value:"Submit"})))))},w=function(){var e=Object(f.f)(),t=Object(f.g)().projectId,a=Object(n.useState)(""),c=Object(o.a)(a,2),l=c[0],s=c[1],m=Object(n.useState)(""),d=Object(o.a)(m,2),b=d[0],E=d[1],g=Object(n.useState)("Programming"),h=Object(o.a)(g,2),j=h[0],O=h[1],w=Object(n.useState)(""),C=Object(o.a)(w,2),S=C[0],y=C[1],L=Object(n.useState)(null),k=Object(o.a)(L,2),D=k[0],P=k[1],A=Object(n.useState)(null),T=Object(o.a)(A,2),I=T[0],B=T[1];return D&&e.push("/phase/".concat(D.id)),r.a.createElement("div",null,r.a.createElement(v,{title:"Create"}),r.a.createElement(x,null,r.a.createElement("div",{className:"mx-auto py-16"},I?r.a.createElement(N,{error:I}):null,r.a.createElement("form",{onSubmit:function(e){null===e||void 0===e||e.preventDefault(),function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{p.a.post("/phase/add",{projectId:t,name:l,phaseNumber:1,description:b,category:j,dueDate:S},{withCredentials:!0}).then((function(e){return P(e.data)}))}catch(a){B(a.response.data.msg)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}},r.a.createElement("label",{className:"textboxLabel"},"Name"),r.a.createElement("input",{type:"text",className:"textbox",maxLength:100,required:!0,onChange:function(e){return s(e.target.value)}}),r.a.createElement("label",{className:"textboxLabel"},"Description"),r.a.createElement("textarea",{className:"descriptionTextArea",maxLength:200,onChange:function(e){return E(e.target.value)}}),r.a.createElement("label",{className:"textboxLabel"},"Category"),r.a.createElement("select",{className:"categorySelector",value:j,onChange:function(e){return O(e.target.value)}},r.a.createElement("option",{value:"Programming"},"Programming"),r.a.createElement("option",{value:"Web devlopment"},"Web devlopment"),r.a.createElement("option",{value:"Design"},"Design"),r.a.createElement("option",{value:"Writing"},"Writing"),r.a.createElement("option",{value:"Architecture"},"Architecture"),r.a.createElement("option",{value:"Marketing"},"Marketing"),r.a.createElement("option",{value:"Art"},"Art"),r.a.createElement("option",{value:"Video"},"Video")),r.a.createElement("label",{className:"textboxLabel"},"Due By"),r.a.createElement("input",{type:"date",className:"dateSelector",onChange:function(e){return y(e.target.value)}}),r.a.createElement("input",{type:"submit",className:"submitBtn",value:"Submit"})))))},C=function(e){var t=e.data,a=Object(f.f)();return r.a.createElement("div",{className:"phaseCardContainer",onClick:function(){return a.push("/phase/".concat(t.id))}},r.a.createElement("div",{className:"phaseName"},t.name),r.a.createElement("div",{className:"phaseCategoryContainer"},r.a.createElement("p",{className:"phaseCategory"},t.category)),r.a.createElement("div",{className:"phaseDescription"},t.description))};function S(){var e=Object(f.g)().id,t=Object(n.useState)(),a=Object(o.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(),m=Object(o.a)(s,2),d=m[0],b=m[1];return Object(n.useEffect)((function(){(function(){var t=Object(u.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("/project/".concat(e),{withCredentials:!0});case 2:a=t.sent,l(a.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()(),function(){var t=Object(u.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("/phases/".concat(e),{withCredentials:!0});case 2:a=t.sent,b(a.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[]),r.a.createElement("div",null,r.a.createElement(v,{title:c?c.name:"",description:c?c.description:""}),r.a.createElement(x,null,d?d.map((function(e){return r.a.createElement(C,{key:e.id,data:e})})):null,c?r.a.createElement(g,{title:"Create New Phase",destination:"create/phase/".concat(c.id)}):null))}var y=a(16),L=a(15),k=function(e){var t=e.setTasks,a=e.tasks,c=e.setError,l=Object(f.g)().id,s=Object(n.useState)(""),m=Object(o.a)(s,2),d=m[0],b=m[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(){var e=Object(u.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("/task/add",{phaseId:l,taskText:d},{withCredentials:!0});case 3:n=e.sent,b(""),t([].concat(Object(L.a)(a),[n.data])),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),c(e.t0.response.data.msg);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()()}},r.a.createElement("textarea",{className:"taskTextArea",placeholder:"Enter a new task...",value:d,onChange:function(e){return b(e.target.value)}}),r.a.createElement("input",{type:"submit",className:"submitBtn",value:"Submit"}))},D=function(e){var t=e.data,a=e.handleDragStart;e.dragging,e.handleDragEnter;return r.a.createElement("div",{draggable:!0,onDragStart:function(e){return a(e,{id:t.id,stage:t.stage})},className:"task"},t.taskText)},P=function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),s=Object(o.a)(l,2),m=s[0],d=s[1],b=Object(n.useState)(null),v=Object(o.a)(b,2),E=v[0],g=v[1],h=Object(f.g)().id,x=Object(n.useRef)(),j=Object(n.useRef)();Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/tasks/".concat(h),{withCredentials:!0});case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var O=function(e,t){var a;x.current=t,j.current=e.target,null===(a=j.current)||void 0===a||a.addEventListener("dragend",S),setTimeout((function(){d(!0)}),0)},w=function(e,t){if(e.preventDefault(),t.stage!==x.current.stage){var n=null===a||void 0===a?void 0:a.filter((function(e){return e.id!==x.current.id})),r=a.filter((function(e){return e.id===x.current.id}));c((function(e){if(e!==[].concat(Object(L.a)(n),[Object(y.a)(Object(y.a)({},r[0]),{},{stage:t.stage})]))return[].concat(Object(L.a)(n),[Object(y.a)(Object(y.a)({},r[0]),{},{stage:t.stage})])})),x.current.stage=t.stage}},C=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("http://localhost:5000/task/".concat(x.current.id,"/").concat(x.current.stage),{withCredentials:!0});case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function e(){var t;C(),d(!1),null===(t=j.current)||void 0===t||t.removeEventListener("dragend",e),x.current=null,j.current=null},P=a?a.filter((function(e){return"todo"===(null===e||void 0===e?void 0:e.stage)})):null,A=a?a.filter((function(e){return"in_progress"===(null===e||void 0===e?void 0:e.stage)})):null,T=a?a.filter((function(e){return"completed"===(null===e||void 0===e?void 0:e.stage)})):null;return r.a.createElement("div",{className:"taskContainer"},E?r.a.createElement(N,{error:E}):null,r.a.createElement("div",{className:"columnContainer",onDragEnter:m?function(e){return w(e,{stage:"todo"})}:void 0},r.a.createElement("div",{className:"columnTitle"},"To do"),r.a.createElement(k,{setTasks:c,tasks:a||[],setError:g}),P?P.map((function(e){return r.a.createElement(D,{data:e,handleDragStart:O,dragging:m,handleDragEnter:w})})):null),r.a.createElement("div",{className:"columnContainer",onDragEnter:m?function(e){return w(e,{stage:"in_progress"})}:void 0},r.a.createElement("div",{className:"columnTitle"},"In progress"),A?A.map((function(e){return r.a.createElement(D,{data:e,handleDragStart:O,dragging:m,handleDragEnter:w})})):null),r.a.createElement("div",{className:"columnContainer",onDragEnter:m?function(e){return w(e,{stage:"completed"})}:void 0},r.a.createElement("div",{className:"columnTitle"},"Completed"),T?T.map((function(e){return r.a.createElement(D,{data:e,handleDragStart:O,dragging:m,handleDragEnter:w})})):null))},A=function(){var e=Object(f.g)().id,t=Object(n.useState)(),a=Object(o.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){(function(){var t=Object(u.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("/phase/".concat(e),{withCredentials:!0});case 2:a=t.sent,l(a.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),r.a.createElement("div",null,r.a.createElement(v,{title:c?c.name:"",description:c?c.description:""}),r.a.createElement(x,null,r.a.createElement(P,null)))},T=function(){var e=Object(f.f)(),t=Object(n.useState)(),a=Object(o.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(""),m=Object(o.a)(s,2),d=m[0],b=m[1],E=Object(n.useState)(""),g=Object(o.a)(E,2),h=g[0],j=g[1],O=Object(n.useState)(""),w=Object(o.a)(O,2),C=w[0],S=w[1],y=Object(n.useState)(""),L=Object(o.a)(y,2),k=L[0],D=L[1],P=Object(n.useState)(null),A=Object(o.a)(P,2),T=A[0],I=A[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/user",{withCredentials:!0});case 2:t=e.sent,l(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return r.a.createElement("div",null,r.a.createElement(v,{title:"Settings"}),r.a.createElement(x,null,r.a.createElement("div",{className:"mx-auto py-16"},T?r.a.createElement(N,{error:T}):null,r.a.createElement("form",{onSubmit:function(t){null===t||void 0===t||t.preventDefault(),function(){var t=Object(u.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.put("/user/update",{firstName:d||(null===c||void 0===c?void 0:c.firstName),lastName:h||(null===c||void 0===c?void 0:c.lastName),email:C||(null===c||void 0===c?void 0:c.email),password:k},{withCredentials:!0});case 3:t.sent.data&&e.push("/"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),I(t.t0.response.data.msg);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}()()}},r.a.createElement("label",{className:"textboxLabel"},"First Name"),r.a.createElement("input",{placeholder:null===c||void 0===c?void 0:c.firstName,type:"text",className:"textbox",maxLength:100,onChange:function(e){return b(e.target.value)}}),r.a.createElement("label",{className:"textboxLabel"},"Last Name"),r.a.createElement("input",{placeholder:null===c||void 0===c?void 0:c.lastName,type:"text",className:"textbox",maxLength:100,onChange:function(e){return j(e.target.value)}}),r.a.createElement("label",{className:"textboxLabel"},"Email"),r.a.createElement("input",{placeholder:null===c||void 0===c?void 0:c.email,type:"text",className:"textbox",maxLength:100,onChange:function(e){return S(e.target.value)}}),r.a.createElement("label",{className:"textboxLabel"},"Password"),r.a.createElement("input",{type:"password",className:"textbox",maxLength:100,required:!0,onChange:function(e){return D(e.target.value)}}),r.a.createElement("input",{type:"submit",className:"submitBtn",value:"Submit"})))))},I=r.a.createContext({}),B=I.Provider,q=(I.Consumer,I),W=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),s=Object(o.a)(l,2),m=s[0],d=s[1],b=Object(n.useState)(),v=Object(o.a)(b,2),f=v[0],E=v[1],g=Object(n.useContext)(q).setLoggedIn;return r.a.createElement("div",null,f?r.a.createElement(N,{error:f}):null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("/login",{email:a,password:m},{withCredentials:!0});case 3:e.sent.data&&g(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),E(e.t0.response.data.msg);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()()}},r.a.createElement("label",{className:"textboxLabel"},"Email"),r.a.createElement("input",{type:"email",className:"textbox",maxLength:100,required:!0,onChange:function(e){return c(e.target.value)}}),r.a.createElement("label",{className:"textboxLabel"},"Password"),r.a.createElement("input",{type:"password",className:"textbox",maxLength:100,required:!0,onChange:function(e){return d(e.target.value)}}),r.a.createElement("input",{type:"submit",className:"submitBtn",value:"Submit"})))},M=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),s=Object(o.a)(l,2),m=s[0],d=s[1],b=Object(n.useState)(""),v=Object(o.a)(b,2),E=v[0],g=v[1],h=Object(n.useState)(""),x=Object(o.a)(h,2),j=x[0],O=x[1],w=Object(n.useState)(null),C=Object(o.a)(w,2),S=C[0],y=C[1],L=Object(f.f)();return r.a.createElement("div",null,S?r.a.createElement(N,{error:S}):null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("/register",{firstName:a,lastName:m,email:E,password:j});case 3:e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),y(e.t0.response.data.msg);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}()(),S||L.push("/login")}},r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("label",{className:"textboxLabel"},"First Name"),r.a.createElement("input",{type:"text",className:"registrationTextbox",maxLength:50,required:!0,onChange:function(e){return c(e.target.value)}})),r.a.createElement("div",{className:"flex flex-col mx-2"},r.a.createElement("label",{className:"textboxLabel"},"Last Name"),r.a.createElement("input",{type:"text",className:"registrationTextbox",maxLength:50,required:!0,onChange:function(e){return d(e.target.value)}}))),r.a.createElement("label",{className:"textboxLabel"},"Email"),r.a.createElement("input",{type:"email",className:"textbox",maxLength:100,required:!0,onChange:function(e){return g(e.target.value)}}),r.a.createElement("label",{className:"textboxLabel"},"Password"),r.a.createElement("input",{type:"password",className:"textbox",maxLength:100,required:!0,onChange:function(e){return O(e.target.value)}}),r.a.createElement("input",{type:"submit",className:"submitBtn",value:"Submit"})))},V=function(){return r.a.createElement("div",{className:"homeContainer"},r.a.createElement("div",{className:"w-2/3 my-auto p-16"},r.a.createElement("div",{className:"homeTitle"},"Plan Your Next Project."),r.a.createElement("div",{className:"homeSubTitle"},"Software. Design. Marketing. Education. Etc.")),r.a.createElement("div",{className:"w-1/3 my-auto"},r.a.createElement(W,null),r.a.createElement(M,null)))};var z=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("/isLoggedIn",{withCredentials:!0});case 3:e.sent,c(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),c(!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[a]),r.a.createElement(B,{value:{setLoggedIn:c}},r.a.createElement("div",{className:"App"},!0===a?r.a.createElement("div",{className:"flex"},r.a.createElement(d.a,null,r.a.createElement(b,null),r.a.createElement("div",{className:"flex-1 bg-white"},r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"/",exact:!0},r.a.createElement(j,null)),r.a.createElement(f.a,{path:"/home",exact:!0},r.a.createElement(j,null)),r.a.createElement(f.a,{path:"/create/project",exact:!0},r.a.createElement(O,null)),r.a.createElement(f.a,{path:"/projects/:id",exact:!0},r.a.createElement(S,null)),r.a.createElement(f.a,{path:"/create/phase/:projectId",exact:!0},r.a.createElement(w,null)),r.a.createElement(f.a,{path:"/phase/:id",exact:!0},r.a.createElement(A,null)),r.a.createElement(f.a,{path:"/settings",exact:!0},r.a.createElement(T,null)))))):!1===a?r.a.createElement(d.a,null,r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"/"},r.a.createElement(V,null)),r.a.createElement(f.a,{path:"/login"}))):"loading"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.62a26758.chunk.js.map