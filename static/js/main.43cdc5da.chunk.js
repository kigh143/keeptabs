(this.webpackJsonpkeeptabs=this.webpackJsonpkeeptabs||[]).push([[0],{41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(18),j=c.n(n),i=c(17),r=c(24),l=c(10),d=c(3),o=c(0),b=function(){return Object(o.jsx)("main",{children:Object(o.jsxs)("section",{className:"glass",children:[Object(o.jsx)("div",{className:"closed",children:Object(o.jsx)("div",{className:"open",children:Object(o.jsxs)("div",{className:"locked",children:[Object(o.jsx)("img",{src:"./logo192.png",alt:""}),Object(o.jsx)("small",{children:"locked"}),Object(o.jsx)("h2",{children:"keepTabs"}),Object(o.jsx)("p",{children:"A place to be more productive and accountable"}),Object(o.jsx)(l.b,{to:"/keeptabs/home",children:" Get Back In"})]})})}),Object(o.jsx)("div",{className:"circle1"}),Object(o.jsx)("div",{className:"circle2"})]})})},O=c(9),h=c(43),x=c(13),u=c.n(x),p=function(){return Object(i.b)()},m=i.c,f=c(6),v=c(14),k=Object(v.b)({name:"project",initialState:{projects:[],selectedProject:{}},reducers:{addProject:function(e,t){e.projects.unshift(t.payload)},setAsSelectedProject:function(e,t){e.selectedProject=t.payload},editProject:function(e,t){e.projects=e.projects.map((function(e){return e.id===t.payload.id?Object(f.a)(Object(f.a)({},e),t.payload):e}))},deletedProject:function(e,t){e.projects=e.projects.filter((function(e){if(e.id!==t.payload.id)return e}))}}}),N=k.actions,g=N.addProject,_=N.setAsSelectedProject,y=(N.editProject,N.deletedProject),C=k.reducer,T=Object(v.b)({name:"Task",initialState:{tasks:[],selectedTask:{}},reducers:{addTask:function(e,t){e.tasks.push(t.payload)},setAsSelectedTask:function(e,t){e.selectedTask=t.payload},editTask:function(e,t){e.tasks=e.tasks.map((function(e){return e.id===t.payload.id?Object(f.a)(Object(f.a)({},e),t.payload):e}))},markAsComplete:function(e,t){e.tasks=e.tasks.map((function(e){return e.id===t.payload.id?Object(f.a)(Object(f.a)({},e),{},{completed:!0,end_date:u()().format()}):e}))},startTask:function(e,t){e.tasks=e.tasks.map((function(e){return e.id===t.payload.id?Object(f.a)(Object(f.a)({},e),{},{started_date:u()().format()}):e}))},deletedTask:function(e,t){e.tasks=e.tasks.filter((function(e){if(e.id!==t.payload.id)return Object(f.a)(Object(f.a)({},e),t.payload)}))},deletedProjectTasks:function(e,t){e.tasks=e.tasks.filter((function(e){if(e.project_id!==t.payload.id)return Object(f.a)(Object(f.a)({},e),t.payload)}))}}}),P=T.actions,S=P.addTask,w=(P.setAsSelectedTask,P.editTask,P.deletedTask,P.markAsComplete),F=P.startTask,D=P.deletedProjectTasks,A=T.reducer,B=function(e){var t=e.project,c=e.handleDelete,s=e.select;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"project__card shadow-md",children:[Object(o.jsxs)("div",{className:"project__header",style:{backgroundColor:t.color},children:[Object(o.jsx)("h2",{children:t.name}),Object(o.jsx)("p",{children:u()(t.created_at,"YYYYMMDD").fromNow()})]}),Object(o.jsx)("div",{className:"project__details",children:Object(o.jsx)("p",{children:t.description})}),Object(o.jsxs)("div",{className:"project__action",children:[Object(o.jsx)("div",{children:Object(o.jsxs)("a",{onClick:function(e){e.preventDefault(),s(t)},children:[Object(o.jsx)("i",{className:"fa fa-eye","aria-hidden":"true"})," view project"]})}),Object(o.jsx)("div",{children:Object(o.jsxs)("a",{href:"#",children:[Object(o.jsx)("i",{className:"fa fa-check-square-o","aria-hidden":"true"}),"Mark as complete"]})}),Object(o.jsx)("div",{children:Object(o.jsxs)("a",{onClick:function(e){e.preventDefault(),c(t.id)},children:[Object(o.jsx)("i",{className:"fa fa-trash","aria-hidden":"true"})," Delete Project"]})})]})]})})},I=(c(38),function(e){e.color;return Object(o.jsxs)("div",{className:"menu",children:[Object(o.jsxs)("div",{className:"companyLogo shadow-sm",children:[Object(o.jsx)("img",{src:"./logo192.png",alt:""}),Object(o.jsx)("h2",{children:"KeepTabs"})]}),Object(o.jsxs)("div",{className:"links",children:[Object(o.jsx)("p",{children:Object(o.jsxs)(l.b,{to:"/keeptabs/home",children:[Object(o.jsx)("i",{className:"fa fa-square","aria-hidden":"true"}),"Projects"]})}),Object(o.jsx)("p",{children:Object(o.jsxs)(l.b,{to:"/keeptabs/statistics",children:[Object(o.jsx)("i",{className:"fa fa-pie-chart","aria-hidden":"true"}),"Statistics"]})}),Object(o.jsx)("p",{children:Object(o.jsxs)(l.b,{to:"/keeptabs/settings",children:[Object(o.jsx)("i",{className:"fa fa-cogs","aria-hidden":"true"}),"Settings"]})}),Object(o.jsx)("p",{children:Object(o.jsxs)(l.b,{to:"/keeptabs",children:[Object(o.jsx)("i",{className:"fa fa-lock","aria-hidden":"true"}),"Lock App"]})})]}),Object(o.jsxs)("div",{className:"version",children:[Object(o.jsx)("small",{children:"KeepTabs V 1.0.0"}),Object(o.jsx)("a",{href:"#",children:"maintained by ghkatende"})]})]})}),L=function(){var e=m((function(e){return e.persistedReducer})).project.projects,t=p(),c=Object(d.f)(),a=Object(s.useState)(""),n=Object(O.a)(a,2),j=n[0],i=n[1],r=Object(s.useState)(""),l=Object(O.a)(r,2),b=l[0],x=l[1],f=Object(s.useState)(""),v=Object(O.a)(f,2),k=v[0],N=v[1],C=Object(s.useState)(""),T=Object(O.a)(C,2),P=T[0],S=T[1],w=Object(s.useState)("#eee"),F=Object(O.a)(w,2),A=F[0],L=F[1],R=Object(s.useState)(!1),E=Object(O.a)(R,2),G=E[0],Y=E[1],M=(Object(s.useRef)(null),function(e){window.confirm("Are you sure you want to delete this project?")&&(t(y({id:e})),t(D({id:e})))}),q=function(){N(""),x(""),L(""),S(""),x("")},H=function(e){t(_(e)),c.push("/keeptabs/project")},J=function(){return Y(!1)};return Object(s.useEffect)((function(){!function(){var e=parseFloat(u()(new Date).format("HH"));i(e>=12&&e<=17?"afternoon":e>=17?"evening":"morning")}()}),[]),Object(o.jsxs)("main",{children:[Object(o.jsx)("section",{className:"glass",children:Object(o.jsxs)("div",{className:"open",children:[Object(o.jsx)(I,{color:""}),Object(o.jsx)("div",{className:"content",children:Object(o.jsxs)("div",{className:"projects",children:[Object(o.jsxs)("div",{className:"greetings shadow-lg",children:[Object(o.jsx)("div",{children:Object(o.jsx)("p",{children:Object(o.jsx)("b",{children:"Projects"})})}),Object(o.jsx)("a",{className:"topBarBtn",onClick:function(e){e.preventDefault(),Y(!0)},children:"Create Project"})]}),Object(o.jsxs)("div",{className:"list",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{className:"text-gray-600",children:Object(o.jsxs)("b",{children:["Good ",j," katende"]})}),Object(o.jsx)("p",{children:"motivational quote Lorem ipsum dolor sit amet."})]}),Object(o.jsx)("br",{}),Object(o.jsx)("h4",{className:"list-title",children:Object(o.jsx)("b",{children:"Projects list"})}),Object(o.jsx)("div",{className:"projectRow",children:e.map((function(e,t){return Object(o.jsx)(B,{project:e,handleDelete:M,select:H},t)}))})]})]})})]})}),Object(o.jsx)("div",{className:"circle1"}),Object(o.jsx)("div",{className:"circle2"}),G&&Object(o.jsx)("div",{className:"projectForm",children:Object(o.jsxs)("form",{className:"form shadow-lg",children:[Object(o.jsxs)("div",{className:"flex justify-between bg-gray-100 p-4 text-center br-5",children:[Object(o.jsx)("h3",{children:"Create Project"}),Object(o.jsx)("a",{onClick:function(e){e.preventDefault(),J()},children:"Close"})]}),Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{htmlFor:"",children:"Project Name"}),Object(o.jsx)("input",{type:"text",onChange:function(e){return x(e.target.value)}})]}),Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{htmlFor:"",children:"Project theme Color"}),Object(o.jsxs)("div",{className:"colorBox",children:[Object(o.jsx)("input",{type:"color",onChange:function(e){return L(e.target.value)},className:"colorPIcker",value:A}),Object(o.jsx)("div",{style:{color:"#fff",backgroundColor:A,fontWeight:"bold"},children:b})]})]}),Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{htmlFor:"",children:"Project Description"}),Object(o.jsx)("textarea",{cols:3,rows:3,onChange:function(e){return N(e.target.value)}})]}),Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{htmlFor:"",children:"Project Goals"}),Object(o.jsx)("textarea",{cols:3,rows:3,onChange:function(e){return S(e.target.value)}})]}),Object(o.jsx)("button",{className:"form-btn mt-8",onClick:function(e){return function(e){e.preventDefault();var c={name:b,goals:P,description:k,created_at:u()().format(),id:Object(h.a)(),color:A};t(g(c)),J(),q()}(e)},children:"Create Project"})]})})]})},R=function(){return Object(o.jsx)("main",{children:Object(o.jsxs)("section",{className:"glass",children:[Object(o.jsx)("div",{className:"closed",children:Object(o.jsx)("div",{className:"open",children:Object(o.jsxs)("div",{className:"locked",children:[Object(o.jsx)("img",{src:"./logo192.png",alt:""}),Object(o.jsx)("h2",{children:"Not Found"}),Object(o.jsx)("p",{children:"A place to be more productive and accountable"}),Object(o.jsx)(l.b,{to:"/keeptabs/home",children:" Get Back In"})]})})}),Object(o.jsx)("div",{className:"circle1"}),Object(o.jsx)("div",{className:"circle2"})]})})},E=function(e){var t=e.task,c=e.btnColor,s=p();return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"project__task shadow-md",style:{textDecoration:t.completed?"line-through":void 0,backgroundColor:t.completed?"#f3f3f3":"#fff"},children:[Object(o.jsxs)("div",{className:"project__taskInfo level".concat(t.level_of_difficulty),children:[Object(o.jsx)("p",{className:"font-semibold levelText".concat(t.level_of_difficulty),children:t.title}),Object(o.jsx)("small",{children:t.description})]}),Object(o.jsx)("div",{className:"project__taskActions",children:""===t.started_date?Object(o.jsx)("button",{className:"startBtn shadow-lg",onClick:function(){return s(F({id:t.id}))},style:{backgroundColor:c},children:"Start"}):Object(o.jsx)("input",{type:"checkbox",checked:t.completed,onClick:function(){return s(w({id:t.id}))}})})]})})},G=function(){var e=m((function(e){return e.persistedReducer})),t=e.project.selectedProject,c=e.task.tasks,a=p(),n=Object(s.useState)(""),j=Object(O.a)(n,2),i=j[0],r=j[1],l=Object(s.useState)(""),d=Object(O.a)(l,2),b=d[0],x=d[1],u=Object(s.useState)(""),f=Object(O.a)(u,2),v=f[0],k=f[1],N=Object(s.useState)(""),g=Object(O.a)(N,2),_=g[0],y=g[1],C=Object(s.useState)({totalTasks:1,totalDays:1}),T=Object(O.a)(C,2),P=T[0],w=T[1],F=c.filter((function(e){return e.project_id===t.id})),D=F.filter((function(e){return!0===e.completed})),A=D.map((function(e){return e.expected_duration})).reduce((function(e,t){return t+e}),0),B=function(){x(""),x(""),y(""),r(""),k("")};return Object(s.useEffect)((function(){var e=F.map((function(e){return e.expected_duration})).reduce((function(e,t){return t+e}),0);w({totalTasks:F.length,totalDays:e})}),[c]),Object(o.jsxs)("main",{children:[Object(o.jsxs)("section",{className:"glass",children:[Object(o.jsxs)("div",{className:"open",children:[Object(o.jsx)(I,{color:""}),Object(o.jsx)("div",{className:"content",children:Object(o.jsxs)("div",{className:"project",children:[Object(o.jsxs)("div",{className:"project__detailsHeader shadow-lg",style:{backgroundColor:t.color,color:"#fff"},children:[Object(o.jsxs)("div",{className:"project__detail",children:[Object(o.jsx)("h1",{children:t.name}),Object(o.jsx)("p",{children:t.description})]}),Object(o.jsx)("div",{className:"project__stats",children:Object(o.jsxs)("div",{className:"project_statBox",children:[Object(o.jsxs)("div",{className:"project_stat",children:[Object(o.jsx)("small",{children:Object(o.jsx)("b",{children:"Tasks"})}),Object(o.jsx)("p",{children:P.totalTasks})]}),Object(o.jsxs)("div",{className:"project_stat",children:[Object(o.jsx)("small",{children:Object(o.jsx)("b",{children:"Expected Speed"})}),Object(o.jsxs)("p",{children:[(P.totalTasks/P.totalDays).toFixed(2)," ",Object(o.jsx)("span",{children:"t/d"})]})]}),Object(o.jsxs)("div",{className:"project_stat",children:[Object(o.jsx)("small",{children:Object(o.jsx)("b",{children:"Your Speed"})}),Object(o.jsxs)("p",{children:[(D.length/A).toFixed(2)," ",Object(o.jsx)("span",{children:"t/d"})]})]})]})})]}),Object(o.jsxs)("div",{className:"project__taskList",children:[Object(o.jsxs)("div",{className:"tasks",children:[Object(o.jsx)("h4",{children:"Project tasks"}),F.map((function(e,c){return Object(o.jsx)(E,{task:e,btnColor:t.color},c)}))]}),Object(o.jsx)("div",{className:"task_form",children:Object(o.jsxs)("form",{className:"form shadow-lg",children:[Object(o.jsx)("h4",{children:"Add New Tasks"}),Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{htmlFor:"",children:"Task"}),Object(o.jsx)("input",{type:"text",onChange:function(e){return r(e.target.value)},value:i})]}),Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{htmlFor:"",children:"Level of difficulty"}),Object(o.jsxs)("select",{onChange:function(e){return k(e.target.value)},children:[Object(o.jsx)("option",{}),Object(o.jsx)("option",{value:"1",children:"1"}),Object(o.jsx)("option",{value:"2",children:"2"}),Object(o.jsx)("option",{value:"3",children:"3"}),Object(o.jsx)("option",{value:"4",children:"4"}),Object(o.jsx)("option",{value:"5",children:"5"})]})]}),Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{htmlFor:"",children:"Estimated duration (in days)"}),Object(o.jsx)("input",{type:"number",onChange:function(e){return y(e.target.value)},value:_})]}),Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{htmlFor:"",children:"Task description"}),Object(o.jsx)("textarea",{cols:3,rows:3,onChange:function(e){return x(e.target.value)},value:b}),Object(o.jsx)("small",{className:"exp",children:"project name "})]}),Object(o.jsx)("button",{className:"form-btn",onClick:function(e){return function(e){e.preventDefault();var c={id:Object(h.a)(),project_id:t.id,title:i,level_of_difficulty:parseInt(v,10),expected_duration:parseInt(_,10),description:b,started_date:"",end_date:"",completed:!1};a(S(c)),B()}(e)},style:{backgroundColor:t.color},children:"Add Task"})]})})]})]})})]}),Object(o.jsx)("div",{className:"closed",children:Object(o.jsxs)("div",{className:"locked",children:[Object(o.jsx)("img",{src:"./logo.png",alt:""}),Object(o.jsx)("small",{children:"locked"}),Object(o.jsx)("h2",{children:"keepTabs"}),Object(o.jsx)("p",{children:"A place to be more productive and accountable"}),Object(o.jsx)("a",{href:"#",children:" Get Back In"})]})})]}),Object(o.jsx)("div",{className:"circle1"}),Object(o.jsx)("div",{className:"circle2"})]})},Y=function(){m((function(e){return e.persistedReducer})).project.projects;return Object(o.jsxs)("main",{children:[Object(o.jsx)("section",{className:"glass",children:Object(o.jsxs)("div",{className:"open",children:[Object(o.jsx)(I,{color:""}),Object(o.jsx)("div",{className:"content",children:Object(o.jsxs)("div",{className:"projects",children:[Object(o.jsx)("div",{className:"greetings shadow-lg",children:Object(o.jsx)("div",{children:Object(o.jsx)("p",{children:Object(o.jsx)("b",{children:"Settings"})})})}),Object(o.jsx)("div",{className:"list"})]})})]})}),Object(o.jsx)("div",{className:"circle1"}),Object(o.jsx)("div",{className:"circle2"})]})},M=function(){return Object(o.jsxs)("main",{children:[Object(o.jsx)("section",{className:"glass",children:Object(o.jsxs)("div",{className:"open",children:[Object(o.jsx)(I,{color:""}),Object(o.jsx)("div",{className:"content",children:Object(o.jsxs)("div",{className:"projects",children:[Object(o.jsx)("div",{className:"greetings shadow-lg",children:Object(o.jsx)("div",{children:Object(o.jsx)("p",{children:Object(o.jsx)("b",{children:"Statistics"})})})}),Object(o.jsx)("div",{className:"list"})]})})]})}),Object(o.jsx)("div",{className:"circle1"}),Object(o.jsx)("div",{className:"circle2"})]})},q=function(){return Object(o.jsx)(l.a,{children:Object(o.jsxs)(d.c,{children:[Object(o.jsx)(d.a,{exact:!0,path:"/keeptabs/home",component:L}),Object(o.jsx)(d.a,{exact:!0,path:"/keeptabs/project",component:G}),Object(o.jsx)(d.a,{exact:!0,path:"/keeptabs/settings",component:Y}),Object(o.jsx)(d.a,{exact:!0,path:"/keeptabs/statistics",component:M}),Object(o.jsx)(d.a,{exact:!0,path:"/keeptabs",component:b}),Object(o.jsx)(d.a,{component:R})]})})},H=c(4),J=c(25),K=c.n(J),z=c(12),V=Object(H.b)({task:A,project:C}),W={key:"root",version:1,storage:K.a},Q=Object(z.g)(W,V),U=Object(v.a)({reducer:{persistedReducer:Q},middleware:Object(v.c)({serializableCheck:{ignoredActions:[z.a,z.f,z.b,z.c,z.d,z.e]}}),devTools:!0}),X=Object(z.h)(U),Z=function(){return Object(o.jsx)(i.a,{store:U,children:Object(o.jsx)(r.a,{loading:null,persistor:X,children:Object(o.jsx)(q,{})})})},$=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,44)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,j=t.getTTFB;c(e),s(e),a(e),n(e),j(e)}))};c(41);j.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(Z,{})}),document.getElementById("root")),$()}},[[42,1,2]]]);
//# sourceMappingURL=main.43cdc5da.chunk.js.map