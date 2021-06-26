(this.webpackJsonpkeeptabs=this.webpackJsonpkeeptabs||[]).push([[0],{41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(17),r=c.n(n),j=c(16),i=c(24),l=c(21),d=c(3),o=c(0),b=function(){return Object(o.jsx)("main",{children:Object(o.jsx)("section",{className:"glass",children:Object(o.jsx)("div",{className:"closed",children:Object(o.jsx)("div",{className:"open",children:Object(o.jsxs)("div",{className:"locked",children:[Object(o.jsx)("img",{src:"./logo192.png",alt:""}),Object(o.jsx)("small",{children:"locked"}),Object(o.jsx)("h2",{children:"keepTabs"}),Object(o.jsx)("p",{children:"A place to be more productive and accountable"}),Object(o.jsx)("a",{href:"/keeptabs/home",children:" Get Back In"})]})})})})})},O=c(9),h=c(43),u=c(11),x=c.n(u),p=function(){return Object(j.b)()},m=j.c,f=c(6),v=c(13),k=Object(v.b)({name:"project",initialState:{projects:[],selectedProject:{}},reducers:{addProject:function(e,t){e.projects.unshift(t.payload)},setAsSelectedProject:function(e,t){e.selectedProject=t.payload},editProject:function(e,t){e.projects=e.projects.map((function(e){return e.id===t.payload.id?Object(f.a)(Object(f.a)({},e),t.payload):e}))},deletedProject:function(e,t){e.projects=e.projects.filter((function(e){if(e.id!==t.payload.id)return e}))}}}),N=k.actions,g=N.addProject,y=N.setAsSelectedProject,_=(N.editProject,N.deletedProject),T=k.reducer,C=Object(v.b)({name:"Task",initialState:{tasks:[],selectedTask:{}},reducers:{addTask:function(e,t){e.tasks.push(t.payload)},setAsSelectedTask:function(e,t){e.selectedTask=t.payload},editTask:function(e,t){e.tasks=e.tasks.map((function(e){return e.id===t.payload.id?Object(f.a)(Object(f.a)({},e),t.payload):e}))},markAsComplete:function(e,t){e.tasks=e.tasks.map((function(e){return e.id===t.payload.id?Object(f.a)(Object(f.a)({},e),{},{completed:!0,end_date:x()().format()}):e}))},startTask:function(e,t){e.tasks=e.tasks.map((function(e){return e.id===t.payload.id?Object(f.a)(Object(f.a)({},e),{},{started_date:x()().format()}):e}))},deletedTask:function(e,t){e.tasks=e.tasks.filter((function(e){if(e.id!==t.payload.id)return Object(f.a)(Object(f.a)({},e),t.payload)}))},deletedProjectTasks:function(e,t){e.tasks=e.tasks.filter((function(e){if(e.project_id!==t.payload.id)return Object(f.a)(Object(f.a)({},e),t.payload)}))}}}),P=C.actions,S=P.addTask,w=(P.setAsSelectedTask,P.editTask,P.deletedTask,P.markAsComplete),D=P.startTask,F=P.deletedProjectTasks,A=C.reducer,B=function(e){var t=e.project,c=e.handleDelete,s=e.select;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"project__card shadow-md",children:[Object(o.jsxs)("div",{className:"project__header",style:{backgroundColor:t.color},children:[Object(o.jsx)("h2",{children:t.name}),Object(o.jsx)("p",{children:x()(t.created_at,"YYYYMMDD").fromNow()})]}),Object(o.jsx)("div",{className:"project__details",children:Object(o.jsx)("p",{children:t.description})}),Object(o.jsxs)("div",{className:"project__action",children:[Object(o.jsx)("div",{children:Object(o.jsxs)("a",{onClick:function(e){e.preventDefault(),s(t)},children:[Object(o.jsx)("i",{className:"fa fa-eye","aria-hidden":"true"})," view project"]})}),Object(o.jsx)("div",{children:Object(o.jsxs)("a",{href:"#",children:[Object(o.jsx)("i",{className:"fa fa-check-square-o","aria-hidden":"true"}),"Mark as complete"]})}),Object(o.jsx)("div",{children:Object(o.jsxs)("a",{onClick:function(e){e.preventDefault(),c(t.id)},children:[Object(o.jsx)("i",{className:"fa fa-trash","aria-hidden":"true"})," Delete Project"]})})]})]})})},I=(c(36),function(e){e.color;return Object(o.jsxs)("div",{className:"menu",children:[Object(o.jsxs)("div",{className:"companyLogo shadow-sm",children:[Object(o.jsx)("img",{src:"./logo192.png",alt:""}),Object(o.jsx)("h2",{children:"KeepTaps"})]}),Object(o.jsxs)("div",{className:"links",children:[Object(o.jsx)("p",{children:Object(o.jsxs)("a",{href:"/home",children:[Object(o.jsx)("i",{className:"fa fa-square","aria-hidden":"true"}),"Projects"]})}),Object(o.jsx)("p",{children:Object(o.jsxs)("a",{href:"/stats",children:[Object(o.jsx)("i",{className:"fa fa-pie-chart","aria-hidden":"true"}),"Stats"]})}),Object(o.jsx)("p",{children:Object(o.jsxs)("a",{href:"/settings",children:[Object(o.jsx)("i",{className:"fa fa-cogs","aria-hidden":"true"}),"Settings"]})}),Object(o.jsx)("p",{children:Object(o.jsxs)("a",{href:"/",children:[Object(o.jsx)("i",{className:"fa fa-lock","aria-hidden":"true"}),"Lock App"]})})]}),Object(o.jsxs)("div",{className:"version",children:[Object(o.jsx)("small",{children:"KeepTabs V 1.0.0"}),Object(o.jsx)("a",{href:"#",children:"maintained by ghkatende"})]})]})}),Y=function(){var e=m((function(e){return e.persistedReducer})).project.projects,t=p(),c=Object(d.f)(),a=Object(s.useState)(""),n=Object(O.a)(a,2),r=n[0],j=n[1],i=Object(s.useState)(""),l=Object(O.a)(i,2),b=l[0],u=l[1],f=Object(s.useState)(""),v=Object(O.a)(f,2),k=v[0],N=v[1],T=Object(s.useState)(""),C=Object(O.a)(T,2),P=C[0],S=C[1],w=Object(s.useState)("#eee"),D=Object(O.a)(w,2),A=D[0],Y=D[1],L=Object(s.useState)(!1),M=Object(O.a)(L,2),R=M[0],E=M[1],G=(Object(s.useRef)(null),function(e){window.confirm("Are you sure you want to delete this project?")&&(t(_({id:e})),t(F({id:e})))}),q=function(){N(""),u(""),Y(""),S(""),u("")},H=function(e){t(y(e)),c.push("/keeptabs/project")},J=function(){return E(!1)};return Object(s.useEffect)((function(){!function(){var e=parseFloat(x()(new Date).format("HH"));j(e>=12&&e<=17?"afternoon":e>=17?"evening":"morning")}()}),[]),Object(o.jsxs)("main",{children:[Object(o.jsx)("section",{className:"glass",children:Object(o.jsxs)("div",{className:"open",children:[Object(o.jsx)(I,{color:""}),Object(o.jsx)("div",{className:"content",children:Object(o.jsxs)("div",{className:"projects",children:[Object(o.jsxs)("div",{className:"greetings shadow-lg",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{style:{textTransform:"uppercase"},children:Object(o.jsx)("small",{children:Object(o.jsx)("b",{children:x()().format("h:mm a | dddd MMM D YYYY")})})}),Object(o.jsx)("br",{}),Object(o.jsx)("h2",{className:"text-gray-600",children:Object(o.jsxs)("b",{children:["Good ",r," katende"]})}),Object(o.jsx)("p",{children:"motivational quote Lorem ipsum dolor sit amet."})]}),Object(o.jsx)("a",{className:"topBarBtn",onClick:function(e){e.preventDefault(),E(!0)},children:"Create Project"})]}),Object(o.jsxs)("div",{className:"list",children:[Object(o.jsx)("h4",{className:"list-title",children:"Projects list"}),Object(o.jsx)("div",{className:"projectRow",children:e.map((function(e,t){return Object(o.jsx)(B,{project:e,handleDelete:G,select:H},t)}))})]})]})})]})}),Object(o.jsx)("div",{className:"circle1"}),Object(o.jsx)("div",{className:"circle2"}),R&&Object(o.jsx)("div",{className:"projectForm",children:Object(o.jsxs)("form",{className:"form shadow-lg",children:[Object(o.jsxs)("div",{className:"flex justify-between bg-gray-100 p-4 text-center br-5",children:[Object(o.jsx)("h3",{children:"Create Project"}),Object(o.jsx)("a",{onClick:function(e){e.preventDefault(),J()},children:"Close"})]}),Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{htmlFor:"",children:"Project Name"}),Object(o.jsx)("input",{type:"text",onChange:function(e){return u(e.target.value)}})]}),Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{htmlFor:"",children:"Project theme Color"}),Object(o.jsxs)("div",{className:"colorBox",children:[Object(o.jsx)("input",{type:"color",onChange:function(e){return Y(e.target.value)},className:"colorPIcker",value:A}),Object(o.jsx)("div",{style:{color:"#fff",backgroundColor:A,fontWeight:"bold"},children:b})]})]}),Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{htmlFor:"",children:"Project Description"}),Object(o.jsx)("textarea",{cols:3,rows:3,onChange:function(e){return N(e.target.value)}})]}),Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{htmlFor:"",children:"Project Goals"}),Object(o.jsx)("textarea",{cols:3,rows:3,onChange:function(e){return S(e.target.value)}})]}),Object(o.jsx)("button",{className:"form-btn mt-8",onClick:function(e){return function(e){e.preventDefault();var c={name:b,goals:P,description:k,created_at:x()().format(),id:Object(h.a)(),color:A};t(g(c)),J(),q()}(e)},children:"Create Project"})]})})]})},L=function(){return Object(o.jsx)("main",{children:Object(o.jsx)("section",{className:"glass",children:Object(o.jsx)("div",{className:"closed",children:Object(o.jsx)("div",{className:"open",children:Object(o.jsxs)("div",{className:"locked",children:[Object(o.jsx)("img",{src:"./logo192.png",alt:""}),Object(o.jsx)("h2",{children:"Not Found"}),Object(o.jsx)("p",{children:"A place to be more productive and accountable"}),Object(o.jsx)("a",{href:"/keeptabs/home",children:" Get Back In"})]})})})})})},M=function(e){var t=e.task,c=p();return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"project__task shadow-md",style:{textDecoration:t.completed?"line-through":void 0,backgroundColor:t.completed?"#f3f3f3":"#fff"},children:[Object(o.jsxs)("div",{className:"project__taskInfo",children:[Object(o.jsx)("p",{className:"font-semibold",children:t.title}),Object(o.jsx)("small",{children:t.description})]}),Object(o.jsx)("div",{className:"project__taskActions",children:""===t.started_date?Object(o.jsx)("button",{onClick:function(){return c(D({id:t.id}))},children:"Start"}):Object(o.jsx)("input",{type:"checkbox",checked:t.completed,onClick:function(){return c(w({id:t.id}))}})})]})})},R=function(){var e=m((function(e){return e.persistedReducer})),t=e.project.selectedProject,c=e.task.tasks,a=p(),n=Object(s.useState)(""),r=Object(O.a)(n,2),j=r[0],i=r[1],l=Object(s.useState)(""),d=Object(O.a)(l,2),b=d[0],u=d[1],x=Object(s.useState)(""),f=Object(O.a)(x,2),v=f[0],k=f[1],N=Object(s.useState)(""),g=Object(O.a)(N,2),y=g[0],_=g[1],T=(Object(s.useRef)(null),Object(s.useState)({totalTasks:1,totalDays:1})),C=Object(O.a)(T,2),P=C[0],w=C[1],D=c.filter((function(e){return e.project_id===t.id})),F=function(){u(""),u(""),_(""),i(""),k("")};return Object(s.useEffect)((function(){var e=D.map((function(e){return e.expected_duration})).reduce((function(e,t){return t+e}),0);w({totalTasks:D.length,totalDays:e})}),[c]),Object(o.jsxs)("main",{children:[Object(o.jsxs)("section",{className:"glass",children:[Object(o.jsxs)("div",{className:"open",children:[Object(o.jsx)(I,{color:""}),Object(o.jsx)("div",{className:"content",children:Object(o.jsxs)("div",{className:"project",children:[Object(o.jsxs)("div",{className:"project__detailsHeader shadow-lg",style:{backgroundColor:t.color,color:"#fff"},children:[Object(o.jsxs)("div",{className:"project__detail",children:[Object(o.jsx)("h1",{children:t.name}),Object(o.jsx)("p",{children:t.description})]}),Object(o.jsx)("div",{className:"project__stats",children:Object(o.jsxs)("div",{className:"project_statBox",children:[Object(o.jsxs)("div",{className:"project_stat",children:[Object(o.jsx)("small",{children:Object(o.jsx)("b",{children:"Tasks"})}),Object(o.jsx)("p",{children:P.totalTasks})]}),Object(o.jsxs)("div",{className:"project_stat",children:[Object(o.jsx)("small",{children:Object(o.jsx)("b",{children:"Expected Speed"})}),Object(o.jsxs)("p",{children:[(P.totalTasks/P.totalDays).toFixed(2)," ",Object(o.jsx)("span",{children:"t/d"})]})]}),Object(o.jsxs)("div",{className:"project_stat",children:[Object(o.jsx)("small",{children:Object(o.jsx)("b",{children:"Your Speed"})}),Object(o.jsxs)("p",{children:[(P.totalTasks/P.totalDays).toFixed(2)," ",Object(o.jsx)("span",{children:"t/d"})]})]})]})})]}),Object(o.jsxs)("div",{className:"project__taskList",children:[Object(o.jsxs)("div",{className:"tasks",children:[Object(o.jsx)("h4",{children:"Project tasks"}),D.map((function(e,t){return Object(o.jsx)(M,{task:e},t)}))]}),Object(o.jsxs)("div",{className:"task_form",children:[Object(o.jsx)("h4",{children:"Add New Tasks"}),Object(o.jsxs)("form",{className:"form shadow-lg",children:[Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{htmlFor:"",children:"Task"}),Object(o.jsx)("input",{type:"text",onChange:function(e){return i(e.target.value)},value:j})]}),Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{htmlFor:"",children:"Level of difficulty"}),Object(o.jsxs)("select",{onChange:function(e){return k(e.target.value)},children:[Object(o.jsx)("option",{}),Object(o.jsx)("option",{value:"1",children:"1"}),Object(o.jsx)("option",{value:"2",children:"2"}),Object(o.jsx)("option",{value:"3",children:"3"}),Object(o.jsx)("option",{value:"4",children:"4"}),Object(o.jsx)("option",{value:"5",children:"5"})]})]}),Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{htmlFor:"",children:"Estimated duration (in days)"}),Object(o.jsx)("input",{type:"number",onChange:function(e){return _(e.target.value)},value:y})]}),Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{htmlFor:"",children:"Task description"}),Object(o.jsx)("textarea",{cols:3,rows:3,onChange:function(e){return u(e.target.value)},value:b}),Object(o.jsx)("small",{className:"exp",children:"project name "})]}),Object(o.jsx)("button",{className:"form-btn",onClick:function(e){return function(e){e.preventDefault();var c={id:Object(h.a)(),project_id:t.id,title:j,level_of_difficulty:parseInt(v,10),expected_duration:parseInt(y,10),description:b,started_date:"",end_date:"",completed:!1};a(S(c)),F()}(e)},children:"Add Task"})]})]})]})]})})]}),Object(o.jsx)("div",{className:"closed",children:Object(o.jsxs)("div",{className:"locked",children:[Object(o.jsx)("img",{src:"./logo.png",alt:""}),Object(o.jsx)("small",{children:"locked"}),Object(o.jsx)("h2",{children:"keepTabs"}),Object(o.jsx)("p",{children:"A place to be more productive and accountable"}),Object(o.jsx)("a",{href:"#",children:" Get Back In"})]})})]}),Object(o.jsx)("div",{className:"circle1"}),Object(o.jsx)("div",{className:"circle2"})]})},E=function(){return Object(o.jsx)(l.a,{children:Object(o.jsxs)(d.c,{children:[Object(o.jsx)(d.a,{exact:!0,path:"/keeptabs/home",component:Y}),Object(o.jsx)(d.a,{exact:!0,path:"/keeptabs/project",component:R}),Object(o.jsx)(d.a,{exact:!0,path:"/keeptabs",component:b}),Object(o.jsx)(d.a,{component:L})]})})},G=c(4),q=c(25),H=c.n(q),J=c(12),K=Object(G.b)({task:A,project:T}),z={key:"root",version:1,storage:H.a},V=Object(J.g)(z,K),W=Object(v.a)({reducer:{persistedReducer:V},middleware:Object(v.c)({serializableCheck:{ignoredActions:[J.a,J.f,J.b,J.c,J.d,J.e]}}),devTools:!0}),Q=Object(J.h)(W),U=function(){return Object(o.jsx)(j.a,{store:W,children:Object(o.jsx)(i.a,{loading:null,persistor:Q,children:Object(o.jsx)(E,{})})})},X=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,44)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),n(e),r(e)}))};c(41);r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(U,{})}),document.getElementById("root")),X()}},[[42,1,2]]]);
//# sourceMappingURL=main.32eb488e.chunk.js.map