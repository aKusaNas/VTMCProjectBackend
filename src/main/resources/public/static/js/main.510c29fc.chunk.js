(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{46:function(e,a,t){e.exports=t(77)},51:function(e,a,t){},52:function(e,a,t){},76:function(e,a,t){e.exports=t.p+"static/media/titulinis.035ba094.png"},77:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(25),l=t.n(r),s=(t(51),t(11)),o=t(12),m=t(15),i=t(16),p=(t(52),t(20)),u=t(13),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:"ADD_PROJECTS",projects:e}},E=function(e){return{type:"REMOVE_PROJECT_BY_ID",id:e}},v=function(e,a){return{type:"REMOVE_TASK_BY_ID",projectId:e,taskId:a}},N=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return{type:"UPDATE_PROJECT",projectId:e,update:a}},f=t(5),b=t.n(f),j=t(2),h=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).handleRemove=function(){e.props.dispatch(E(e.props.projectId)),b.a.delete("http://localhost:8080/api/projects/".concat(e.props.projectId))},e}return Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("li",null,c.a.createElement("div",{className:"row pt-1 pl-3 pb-2 mt-1"},c.a.createElement("div",{className:"col-7"}," ",this.props.projectName," "),c.a.createElement("span",{className:"col-1"}," ",c.a.createElement(j.b,{to:"/projects/".concat(this.props.projectId)},"View project ")),c.a.createElement("div",{className:"col-1"}," ",this.props.status," "),c.a.createElement("div",{className:"col-1"}," ",this.props.doneTasks,"/",this.props.totalTasks," "),c.a.createElement("div",{className:"col-1"}," ",c.a.createElement(j.b,{to:"/projects/".concat(this.props.projectId,"/edit")}," ",c.a.createElement(p.a,{icon:u.b})," ")," "),c.a.createElement("span",{className:"col-1",onClick:this.handleRemove}," ",c.a.createElement(p.a,{icon:u.c})," ")))}}]),t}(n.Component),g=t(6),k=function(e,a){var t=a.searchBy,n=a.filterStatusBy;return e.filter((function(e){var a=e.projectName.toLowerCase().includes(t.toLowerCase()),c=e.projectStatus.includes(n);return a&&c}))},D=Object(g.b)((function(e){return{projects:k(e.projects,e.filters)}}))((function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("ul",{className:"container-fluid list-unstyled",id:"projectContainer"},e.projects.map((function(a){return c.a.createElement(h,{key:a.projectId,projectId:a.projectId,projectName:a.projectName,status:a.projectStatus,doneTasks:a.completeTasks,totalTasks:a.totalTasks,projectDescription:a.projectDescription,dispatch:e.dispatch})}))))})),O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:"FILTER_STATUS_BY",status:e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:"FILTER_By_SEARCH",search:e}},w=Object(g.b)((function(e){return{filters:e.filters}}))((function(e){return c.a.createElement("div",{className:"container",id:"pageHeader"},c.a.createElement("header",{className:"text-center text-light my-4"},c.a.createElement("nav",{className:"navbar navbar-expand navbar-light"},c.a.createElement("div",{className:"collapse navbar-collapse",id:"left"},c.a.createElement("ul",{className:"navbar-nav mr-auto"},c.a.createElement("li",{className:"nav-item active"},c.a.createElement(j.b,{to:"/"},c.a.createElement("div",{className:"btn",onClick:function(){e.dispatch(O("")),e.dispatch(y(""))}},c.a.createElement("i",{className:"fa fa-home"})))),c.a.createElement("li",{className:"nav-item active"},c.a.createElement(j.b,{to:"/maintenance"}," ",c.a.createElement("button",{className:"btn",onClick:function(){e.dispatch(O("")),e.dispatch(y(""))}},c.a.createElement("i",{className:"fa fa-bars"})))),c.a.createElement("li",{className:"nav-item"},c.a.createElement("form",{className:"search"},c.a.createElement("input",{className:"form-control m-auto",type:"text",name:"search",id:"projectSearch",placeholder:"Search by name...",onChange:function(a){e.dispatch(y(a.target.value.trim()))}}))))),c.a.createElement("div",{className:"collapse navbar-collapse",id:"right"},c.a.createElement("ul",{className:"nav navbar-nav ml-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("span",{className:"nav-link",onClick:function(a){a.preventDefault(),e.dispatch(O())}},"ALL")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("span",{className:"nav-link",onClick:function(a){a.preventDefault(),e.dispatch(O("Not started"))}},"NOT STARTED")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("span",{className:"nav-link",onClick:function(a){a.preventDefault(),e.dispatch(O("In progress"))}},"IN PROGRESS")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("span",{className:"nav-link",onClick:function(a){a.preventDefault(),e.dispatch(O("Complete"))}},"COMPLETE"))))),c.a.createElement("div",null,c.a.createElement(j.b,{to:"/projects/new"},c.a.createElement("div",{className:"new-project-link",onClick:function(){e.dispatch(O("")),e.dispatch(y(""))}},"NEW PROJECT+")))),c.a.createElement("br",null),c.a.createElement(D,null),c.a.createElement("br",null))})),S=t(17),C=function(e){Object(i.a)(n,e);var a=Object(m.a)(n);function n(){return Object(s.a)(this,n),a.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"container1"},c.a.createElement("div",{className:"box"},c.a.createElement("h1",null,"Project Task Management Program"),c.a.createElement("h3",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",c.a.createElement("br",null),"Maecenas porttitor congue massa. "),c.a.createElement(j.b,{to:"/projects"},c.a.createElement("button",{className:"btn2"},"Let\u2019s start")),c.a.createElement("div",null,c.a.createElement("img",{className:"responsive",id:"homeImage",src:t(76),alt:"Homepage"}))))}}]),n}(n.Component),T=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container",id:"pageHeader"},c.a.createElement("header",{className:"text-center text-light my-4"},c.a.createElement("nav",{className:"navbar navbar-expand navbar-light"},c.a.createElement("div",{className:"collapse navbar-collapse",id:"left"},c.a.createElement("ul",{className:"navbar-nav mr-auto"},c.a.createElement("li",{className:"nav-item active"},c.a.createElement(j.b,{to:"/"},c.a.createElement("div",{className:"btn"},c.a.createElement("i",{className:"fa fa-home"})))),c.a.createElement("li",{className:"nav-item active"},c.a.createElement(j.b,{to:"/maintenance"},c.a.createElement("button",{className:"btn"},c.a.createElement("i",{className:"fa fa-bars"})))))))),this.props.content,c.a.createElement("br",null))}}]),t}(n.Component),I=t(14),x=t(4),L=t(19);var R=function(){var e=Object(g.c)(),a=Object(S.f)(),t=Object(n.useState)({projectName:"",projectDescription:"",projectManager:"",projectDeadline:""}),r=Object(L.a)(t,2),l=r[0],s=r[1],o=function(e){e.preventDefault();var a=e.target,t=a.name,n=a.value;s(Object(x.a)({},l,Object(I.a)({},t,n.trim())))};function m(){var e=Object(x.a)({},l),a=e.projectName,t=e.projectDescription,n=e.projectManager,c=e.projectDeadline,r=a.length<100&&""!==a,s=t.length<300&&""!==t,o=n.length<60&&""!==n,m=""!==c&&Date.parse(c)>=Date.now();return r&&s&&o&&m}return Object(n.useEffect)((function(){console.log(l),console.log(m())})),c.a.createElement("form",{className:"container col-7"},c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"col-2 col-form-label"},"Project Name"),c.a.createElement("div",{className:"col-10"},c.a.createElement("input",{type:"name",className:"form-control",id:"inputName",name:"projectName",onChange:o}))),c.a.createElement("div",{className:"form row"},c.a.createElement("label",{className:"col-2 col-form-label"},"Description"),c.a.createElement("div",{className:"col-10"},c.a.createElement("textarea",{className:"form-control",style:{resize:"none"},name:"projectDescription",id:"inputdescription",rows:"5",onChange:o}))),c.a.createElement("br",null),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"col-2 col-form-label"},"Project Manager"),c.a.createElement("div",{className:"col-10"},c.a.createElement("input",{type:"projectmanager",className:"form-control",id:"inputProjectmanager",name:"projectManager",onChange:o}))),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"col-2 col-form-label"},"Deadline"),c.a.createElement("div",{className:"col-10"},c.a.createElement("input",{type:"date",className:"form-control",id:"deadline",name:"projectDeadline",onChange:o}))),c.a.createElement("div",{className:"form-group row text-right mb-3"},c.a.createElement("div",{className:"col-12"},c.a.createElement("button",{type:"submit",disabled:!1,className:"btn btn-primary",onClick:function(t){if(t.preventDefault(),m()){t.target.disabled=!0;var n=Object(x.a)({},l,{projectStatus:"NOT_STARTED"});b.a.post("http://localhost:8080/api/projects/",n).then((function(n){202===n.status?b.a.get("http://localhost:8080/api/projects/retrieve/".concat(l.projectName)).then((function(t){var n=t.data;e(d([Object(x.a)({},n,{projectStatus:"Not started",totalTasks:0,completeTasks:0,tasks:[]})])),a.goBack()})):(alert("Something went wrong, try again."),t.target.disabled=!1)}))}else alert("There are errors in your form, please try again."),t.target.disabled=!1}},"Save"),c.a.createElement(j.b,{to:"/projects"}," ",c.a.createElement("div",{className:"btn btn-info",role:"button"},"Close")," "))))},P=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={expanded:!1},e.handleClick=function(){e.setState({expanded:!e.state.expanded})},e.handleDelete=function(a){a.preventDefault(),b.a.delete("http://localhost:8080/api/projects/".concat(e.props.projectId,"/tasks/").concat(e.props.id)),e.props.dispatch(v(e.props.projectId,e.props.id))},e}return Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("tbody",null,c.a.createElement("tr",{className:"row"},c.a.createElement("td",{className:"col-1"}," ",this.props.id," "),c.a.createElement("td",{className:"col-3"}," ",this.props.name," "),c.a.createElement("td",{className:"col-1 text-center",onClick:this.handleClick}," ",c.a.createElement("span",null,c.a.createElement(p.a,{icon:u.a})," ")),c.a.createElement("td",{className:"col-1 text-center"}," ",this.props.priority," "),c.a.createElement("td",{className:"col-1 text-center"}," ",this.props.status," "),c.a.createElement("td",{className:"col-1 text-center"}," ",this.props.deadline," "),c.a.createElement("td",{className:"col-1 text-center"}," ",this.props.created," "),c.a.createElement("td",{className:"col-1 text-center"}," ",this.props.modified," "),c.a.createElement("td",{className:"col-1 text-center"}," ",c.a.createElement(j.b,{to:"/projects/".concat(this.props.projectId,"/tasks/").concat(this.props.id,"/edit")},c.a.createElement(p.a,{icon:u.b}))),c.a.createElement("td",{className:"col-1 text-center",onClick:this.handleDelete}," ",c.a.createElement("span",null,c.a.createElement(p.a,{icon:u.c})," "))),this.state.expanded&&c.a.createElement("tr",{className:"row"},c.a.createElement("td",{className:"col-1"}," "),c.a.createElement("td",{className:"col-5"}," ",c.a.createElement("b",null," Project description: "),this.props.description," "),c.a.createElement("td",{className:"col-6"}," ",c.a.createElement("b",null," Project story: ")," ",this.props.story," ")))}}]),t}(n.Component);var M=function(){return c.a.createElement("div",{className:"container",id:"page404"},c.a.createElement("div",{className:"page-wrap d-flex flex-row align-items-center"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-md-12 text-center"},c.a.createElement("span",{className:"display-1 d-block"},"404"),c.a.createElement("div",{className:"mb-4 lead"},"The page you are looking for was not found"),c.a.createElement(j.b,{to:"/"}," ",c.a.createElement("span",{className:"btn btn-link",style:{"text-decoration":"none"}},"Back to Home")," "))))))};var A=function(){var e=Object(g.c)(),a=Object(S.g)(),t=Object(S.f)(),r=Object(g.d)((function(e){return e.projects.find((function(e){return e.projectId===parseInt(a.id)}))})),l=Object(g.d)((function(e){return e.filters})),s=function(e,a){var t=a.searchBy,n=a.filterStatusBy;return e.filter((function(e){var a=e.taskName.toLowerCase().includes(t.toLowerCase()),c=e.taskStatus.includes(n);return a&&c}))}(r.tasks,l);Object(n.useEffect)((function(){t.listen((function(){e(y()),e(O())}))}),[e,t]);var o=function(n){n.preventDefault(),window.confirm("Are you sure you want to delete this project?")&&(b.a.delete("http://localhost:8080/api/projects/".concat(a.id)),e(E(parseInt(a.id))),t.push("/projects"))},m=function(a){a.preventDefault(),e(y(a.target.value.trim()))},i=function(a,t){a.preventDefault(),e(O(t))};function p(e){switch(e){case"IN_PROGRESS":return"In progress";case"NOT_STARTED":return"Not started";case"COMPLETE":return"Complete";default:return"Canceled"}}function u(e){switch(e){case"HIGH":return"High";case"MEDIUM":return"Medium";default:return"Low"}}return void 0===r?c.a.createElement(M,null):c.a.createElement("div",{className:"container",id:"pageHeader"},c.a.createElement("header",{className:"text-center text-light my-4"},c.a.createElement("nav",{className:"navbar navbar-expand navbar-light"},c.a.createElement("div",{className:"collapse navbar-collapse",id:"left"},c.a.createElement("ul",{className:"navbar-nav mr-auto"},c.a.createElement("li",{className:"nav-item active"},c.a.createElement(j.b,{to:"/"},c.a.createElement("div",{className:"btn"},c.a.createElement("i",{className:"fa fa-home"})))),c.a.createElement("li",{className:"nav-item active"},c.a.createElement(j.b,{to:"/maintenance"},c.a.createElement("button",{className:"btn"},c.a.createElement("i",{className:"fa fa-bars"})))),c.a.createElement("li",{className:"nav-item"},c.a.createElement("form",{className:"search"},c.a.createElement("input",{className:"form-control m-auto",type:"text",name:"search",placeholder:"Search for tasks...",onChange:m}))))),c.a.createElement("div",{className:"collapse navbar-collapse",id:"right"},c.a.createElement("ul",{className:"nav navbar-nav ml-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(j.b,{to:"/projects/".concat(a.id,"/edit")},c.a.createElement("span",{className:"nav-link",href:"/#"},"EDIT PROJECT"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement("span",{className:"nav-link",onClick:o},"DELETE PROJECT")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(j.b,{to:"/projects"}," ",c.a.createElement("span",{className:"nav-link"},"CLOSE")," ")))))),c.a.createElement("div",{className:"my-projectcontainer"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"}," ",c.a.createElement("b",null," Project ID: ")," ",a.id," "),c.a.createElement("div",{className:"col"}," ",c.a.createElement("b",null," Name: ")," ",r.projectName," "),c.a.createElement("div",{className:"col"}," ",c.a.createElement("b",null," Status: ")," ",r.projectStatus,"s"),c.a.createElement("div",{className:"w-100"}),c.a.createElement("div",{className:"col"}," ",c.a.createElement("b",null," Deadline: ")," ",new Date(r.projectDeadline).toLocaleString("lt-LT")," "),c.a.createElement("div",{className:"col"}," ",c.a.createElement("b",null," Project manager: ")," ",r.projectManager),c.a.createElement("div",{className:"col"}," ",c.a.createElement("b",null," Modified on: ")," ",new Date(r.projectModifiedOn).toLocaleString("lt-LT")," "),c.a.createElement("div",{className:"w-100"}),c.a.createElement("div",{className:"col"}," ",c.a.createElement("b",null," Create date: ")," ",new Date(r.projectCreatedOn).toLocaleString("lt-LT")," "))),c.a.createElement("div",{className:"container my-description"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"}," ",c.a.createElement("b",null," Description: ")," ",r.projectDescription," ")))),c.a.createElement("div",{className:"my-taskbar"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",null,c.a.createElement("span",{className:"col",onClick:function(e){return i(e,"")}},"ALL")),c.a.createElement("div",null,c.a.createElement("span",{className:"col",onClick:function(e){return i(e,"NOT_STARTED")}},"NOT STARTED")),c.a.createElement("div",null,c.a.createElement("span",{className:"col",onClick:function(e){return i(e,"IN_PROGRESS")}},"IN PROGRESS")),c.a.createElement("div",null,c.a.createElement("span",{className:"col",onClick:function(e){return i(e,"CANCELED")}},"CANCELED")),c.a.createElement("div",null,c.a.createElement("span",{className:"col",onClick:function(e){return i(e,"COMPLETE")}},"COMPLETE")),c.a.createElement(j.b,{to:"/projects/".concat(a.id,"/tasks/create")}," ",c.a.createElement("div",null,c.a.createElement("span",{className:"col"},"NEW TASK+"))," ")))),c.a.createElement("div",{className:"my-table container-fluid"},c.a.createElement("table",{className:"table"},c.a.createElement("thead",null,c.a.createElement("tr",{className:"row"},c.a.createElement("th",{className:"col-1"}," ID "),c.a.createElement("th",{className:"col-3 "}," NAME "),c.a.createElement("th",{className:"col-1 text-center"}," INFO "),c.a.createElement("th",{className:"col-1 text-center"}," PRIORITY "),c.a.createElement("th",{className:"col-1 text-center"}," STATUS "),c.a.createElement("th",{className:"col-1 text-center"}," DEADLINE "),c.a.createElement("th",{className:"col-1 text-center"}," CREATED ON "),c.a.createElement("th",{className:"col-1 text-center"}," MODIFIED ON "),c.a.createElement("th",{className:"col-1 text-center"}," EDIT "),c.a.createElement("th",{className:"col-1 text-center"}," DELETE "))),s.map((function(t){return c.a.createElement(P,{key:t.taskId,id:t.taskId,name:t.taskName,priority:u(t.taskPriority),created:new Date(t.taskCreatedOn).toLocaleDateString("lt-LT"),modified:new Date(t.taskModifiedOn).toLocaleDateString("lt-LT"),deadline:new Date(t.taskDeadline).toLocaleDateString("lt-LT"),status:p(t.taskStatus),dispatch:e,projectId:a.id,story:t.taskStory,description:t.taskDescription})}))),c.a.createElement("br",null)))};var _=function(){var e=Object(g.c)(),a=Object(S.g)(),t=Object(S.f)(),r=Object(n.useState)({taskName:"",taskDescription:"",taskPriority:"LOW",taskStatus:"NOT_STARTED",taskDeadline:"",taskStory:""}),l=Object(L.a)(r,2),s=l[0],o=l[1];function m(){var e=Object(x.a)({},s),a=e.taskName,t=e.taskDescription,n=e.taskDeadline,c=e.taskStory,r=a.length<100&&""!==a,l=t.length<300&&""!==t,o=""!==n&&Date.parse(n)>=Date.now(),m=""!==c&&c.length<500;return r&&l&&o&&m}var i=function(e){e.preventDefault();var a=e.target,t=a.name,n=a.value;o(Object(x.a)({},s,Object(I.a)({},t,n.trim())))};return Object(n.useEffect)((function(){console.log(s),console.log(m())})),c.a.createElement("form",{className:"container col-md-6",id:"pageform"},c.a.createElement("div",{className:"row"},c.a.createElement("label",{className:"col-2"}," Project ID: "),c.a.createElement("div",{className:"col-10"}," ",a.id," ")),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"col-sm-2 col-form-label"},"Name"),c.a.createElement("div",{className:"col-sm-10"},c.a.createElement("input",{onChange:i,type:"name",className:"form-control",name:"taskName"}))),c.a.createElement("div",{className:"form row"},c.a.createElement("label",{className:"col-sm-2 col-form-label"},"Description"),c.a.createElement("div",{className:"col-sm-10"},c.a.createElement("textarea",{onChange:i,className:"form-control",name:"taskDescription",style:{resize:"none"},rows:"3"}))),c.a.createElement("br",null),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"col-sm-2 col-form-label"},"Priority"),c.a.createElement("div",{className:"col-sm-10"},c.a.createElement("select",{onChange:i,name:"taskPriority"},c.a.createElement("option",{value:"LOW"},"Low"),c.a.createElement("option",{value:"MEDIUM"},"Medium"),c.a.createElement("option",{value:"HIGH"},"High")))),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"col-sm-2 col-form-label"},"Status"),c.a.createElement("div",{className:"col-sm-10"},c.a.createElement("select",{onChange:i,name:"taskStatus"},c.a.createElement("option",{value:"NOT_STARTED"},"Not started"),c.a.createElement("option",{value:"IN_PROGRESS"},"In progress"),c.a.createElement("option",{value:"COMPLETE"},"Complete")))),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"col-sm-2 col-form-label"},"Deadline"),c.a.createElement("div",{className:"col-sm-10"},c.a.createElement("input",{onChange:i,type:"date",className:"form-control",name:"taskDeadline"}))),c.a.createElement("div",{className:"form row"},c.a.createElement("label",{className:"col-sm-2 col-form-label"},"User story"),c.a.createElement("div",{className:"col-sm-10"},c.a.createElement("textarea",{onChange:i,className:"form-control",name:"taskStory",rows:"5",style:{resize:"none"}}))),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("div",{className:"form-group row text-right mb-3"},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement("button",{onClick:function(n){if(n.preventDefault(),n.target.disabled=!0,m()){var c=Object(x.a)({},s);b.a.post("http://localhost:8080/api/projects/".concat(a.id,"/tasks"),c).then((function(c){202===c.status?b.a.get("http://localhost:8080/api/projects/full/".concat(a.id)).then((function(c){200===c.status?(e(N(parseInt(a.id),c.data)),t.push("/projects/".concat(a.id))):(alert("Something went wrong, try again."),n.target.disabled=!1)})):(alert("Something went wrong, try again."),n.target.disabled=!1)}))}else alert("There are errors in your form, please try again."),n.target.disabled=!1},type:"submit",className:"btn btn-primary"},"Save"),c.a.createElement(j.b,{to:"/projects/".concat(a.id)},c.a.createElement("div",{className:"btn btn-info",role:"button"},"Close")))))};var B=function(){var e=Object(g.c)(),a=Object(S.f)(),t=Object(S.g)(),r=Object(g.d)((function(e){return e.projects.find((function(e){return e.projectId===parseInt(t.id)}))})),l=Object(n.useState)({projectName:r.projectName,projectDescription:r.projectDescription,projectManager:r.projectManager||"Add a manager",projectDeadline:new Date(r.projectDeadline).toLocaleDateString("lt-LT")||new Date(Date.now()).toLocaleDateString("lt-LT")}),s=Object(L.a)(l,2),o=s[0],m=s[1],i=function(e){e.preventDefault();var t=e.target,n=t.name,c=t.value;console.log(a),m(Object(x.a)({},o,Object(I.a)({},n,c)))},p=function(e){e.preventDefault(),a.goBack()},u=function(n){if(n.preventDefault(),n.target.disabled=!0,d()){var c=Object(x.a)({},o);b.a.patch("http://localhost:8080/api/projects/".concat(t.id),c).then((function(c){200===c.status?b.a.get("http://localhost:8080/api/projects/full/".concat(t.id)).then((function(n){var c=n.data;e(N(parseInt(t.id),c)),a.goBack()})):n.target.disabled=!1}))}else alert("There are errors in your form, please try again."),n.target.disabled=!1};function d(){var e=Object(x.a)({},o),a=e.projectName,t=e.projectDescription,n=e.projectManager,c=e.projectDeadline,r=a.length<100&&""!==a.trim(),l=t.length<300&&""!==t.trim(),s=n.length<60&&""!==n.trim(),m=""!==c&&Date.parse(c)>=Date.now();return r&&l&&s&&m}return Object(n.useEffect)((function(){console.log(r),console.log(d())})),void 0===r?c.a.createElement(M,null):c.a.createElement("form",{className:"container col-7"},c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"col-2 col-form-label"},"Project Name"),c.a.createElement("div",{className:"col-10"},c.a.createElement("input",{type:"name",className:"form-control",id:"inputName",name:"projectName",value:o.projectName,onChange:i}))),c.a.createElement("div",{className:"form row"},c.a.createElement("label",{className:"col-2 col-form-label"},"Description"),c.a.createElement("div",{className:"col-10"},c.a.createElement("textarea",{className:"form-control",style:{resize:"none"},value:o.projectDescription,name:"projectDescription",id:"inputdescription",rows:"5",onChange:i}))),c.a.createElement("br",null),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"col-2 col-form-label"},"Project Manager"),c.a.createElement("div",{className:"col-10"},c.a.createElement("input",{type:"projectmanager",className:"form-control",value:o.projectManager,id:"inputProjectmanager",name:"projectManager",onChange:i}))),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"col-2 col-form-label"},"Deadline"),c.a.createElement("div",{className:"col-10"},c.a.createElement("input",{type:"date",className:"form-control",id:"deadline",value:o.projectDeadline,name:"projectDeadline",onChange:i}))),c.a.createElement("div",{className:"form-group row text-right mb-3"},c.a.createElement("div",{className:"col-12"},c.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:u},"Save"),c.a.createElement("div",{className:"btn btn-info",role:"button",onClick:p},"Close"))))};var H=function(){var e=Object(g.c)(),a=Object(S.g)(),t=Object(S.f)(),r=Object(g.d)((function(e){return e.projects.find((function(e){return e.projectId===parseInt(a.id)})).tasks.find((function(e){return e.taskId===parseInt(a.taskid)}))})),l=Object(n.useState)({taskName:r.taskName,taskDescription:r.taskDescription,taskPriority:r.taskPriority,taskStatus:r.taskStatus,taskDeadline:new Date(r.taskDeadline).toLocaleDateString("lt-LT")||new Date(Date.now()).toLocaleDateString("lt-LT"),taskStory:r.taskStory||"Enter user story."}),s=Object(L.a)(l,2),o=s[0],m=s[1];function i(){var e=Object(x.a)({},o),a=e.taskName,t=e.taskDescription,n=e.taskDeadline,c=e.taskStory,r=a.length<100&&""!==a,l=t.length<300&&""!==t,s=""!==n&&Date.parse(n)>=Date.now(),m=""!==c&&c.length<500;return r&&l&&s&&m}var p=function(e){e.preventDefault();var a=e.target,t=a.name,n=a.value;m(Object(x.a)({},o,Object(I.a)({},t,n)))};return Object(n.useEffect)((function(){console.log(o),console.log(i())})),c.a.createElement("form",{className:"container col-md-6",id:"pageform"},c.a.createElement("div",{className:"row"},c.a.createElement("label",{className:"col-2"}," Project ID: "),c.a.createElement("div",{className:"col-10"}," ",a.id," ")),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"col-sm-2 col-form-label"},"Name"),c.a.createElement("div",{className:"col-sm-10"},c.a.createElement("input",{onChange:p,value:o.taskName,type:"name",className:"form-control",name:"taskName"}))),c.a.createElement("div",{className:"form row"},c.a.createElement("label",{className:"col-sm-2 col-form-label"},"Description"),c.a.createElement("div",{className:"col-sm-10"},c.a.createElement("textarea",{onChange:p,value:o.taskDescription,className:"form-control",name:"taskDescription",style:{resize:"none"},rows:"3"}))),c.a.createElement("br",null),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"col-sm-2 col-form-label"},"Priority"),c.a.createElement("div",{className:"col-sm-10"},c.a.createElement("select",{onChange:p,value:o.taskPriority,name:"taskPriority"},c.a.createElement("option",{value:"LOW"},"Low"),c.a.createElement("option",{value:"MEDIUM"},"Medium"),c.a.createElement("option",{value:"HIGH"},"High")))),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"col-sm-2 col-form-label"},"Status"),c.a.createElement("div",{className:"col-sm-10"},c.a.createElement("select",{onChange:p,value:o.taskStatus,name:"taskStatus"},c.a.createElement("option",{value:"NOT_STARTED"},"Not started"),c.a.createElement("option",{value:"IN_PROGRESS"},"In progress"),c.a.createElement("option",{value:"COMPLETE"},"Complete"),c.a.createElement("option",{value:"CANCELED"},"Canceled")))),c.a.createElement("div",{className:"form-group row"},c.a.createElement("label",{className:"col-sm-2 col-form-label"},"Deadline"),c.a.createElement("div",{className:"col-sm-10"},c.a.createElement("input",{onChange:p,value:o.taskDeadline,type:"date",className:"form-control",name:"taskDeadline"}))),c.a.createElement("div",{className:"form row"},c.a.createElement("label",{className:"col-sm-2 col-form-label"},"User story"),c.a.createElement("div",{className:"col-sm-10"},c.a.createElement("textarea",{onChange:p,value:o.taskStory,className:"form-control",name:"taskStory",rows:"5",style:{resize:"none"}}))),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("div",{className:"form-group row text-right mb-3"},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement("button",{onClick:function(n){if(n.preventDefault(),n.target.disabled=!0,i()){var c=Object(x.a)({},o);b.a.post("http://localhost:8080/api/projects/".concat(a.id,"/tasks/").concat(a.taskid),c).then((function(c){202===c.status?b.a.get("http://localhost:8080/api/projects/full/".concat(a.id)).then((function(c){200===c.status?(e(N(parseInt(a.id),c.data)),t.goBack()):(alert("Something went wrong, please try again."),n.target.disabled=!1)})):(alert("Something went wrong, please try again."),n.target.disabled=!1)}))}else alert("There are errors in your form, please try again."),n.target.disabled=!1},type:"submit",className:"btn btn-primary"},"Save"),c.a.createElement(j.b,{to:"/projects/".concat(a.id)},c.a.createElement("div",{className:"btn btn-info",role:"button"},"Close")))))};var J=function(){return Object(S.f)(),c.a.createElement("div",null,"Replace this with proper HTML")},U=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={doneRetrieving:!1},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("/api/projects/full").then((function(a){var t=a.data;e.props.dispatch(d(t)),e.setState({doneRetrieving:!0})}))}},{key:"render",value:function(){return c.a.createElement("div",null,this.state.doneRetrieving?c.a.createElement(S.c,null,c.a.createElement(S.a,{path:"/",exact:!0},c.a.createElement(C,null)),c.a.createElement(S.a,{path:"/maintenance",exact:!0},c.a.createElement(T,{content:c.a.createElement(J,null)})),c.a.createElement(S.a,{path:"/projects",exact:!0},c.a.createElement(w,null)),c.a.createElement(S.a,{path:"/projects/new",exact:!0},c.a.createElement(T,{content:c.a.createElement(R,null)})),c.a.createElement(S.a,{path:"/projects/:id",exact:!0,component:A}),c.a.createElement(S.a,{path:"/projects/:id/edit",exact:!0,render:function(e){return c.a.createElement(T,Object.assign({},e,{content:c.a.createElement(B,null)}))}}),c.a.createElement(S.a,{path:"/projects/:id/tasks/create",exact:!0,render:function(e){return c.a.createElement(T,Object.assign({},e,{content:c.a.createElement(_,null)}))}}),c.a.createElement(S.a,{path:"/projects/:id/tasks/:taskid/edit",exact:!0,render:function(e){return c.a.createElement(T,Object.assign({},e,{content:c.a.createElement(H,null)}))}}),c.a.createElement(S.a,null,c.a.createElement(M,null))):null)}}]),t}(c.a.Component),G=t(23),F=t(33),Y=[],z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_PROJECTS":return[].concat(Object(F.a)(e),Object(F.a)(a.projects));case"REMOVE_PROJECT_BY_ID":return e.filter((function(e){return e.projectId!==a.id}));case"UPDATE_PROJECT":return e.map((function(e){return e.projectId===a.projectId?Object(x.a)({},e,{},a.update):e}));case"REMOVE_TASK_BY_ID":return e.map((function(e){return e.projectId===parseInt(a.projectId)?Object(x.a)({},e,{tasks:e.tasks.filter((function(e){return e.taskId!==a.taskId}))}):e}));case"ADD_TASKS":return e.map((function(e){return e.projectId===a.projectId?Object(x.a)({},e,{tasks:a.tasks}):e}));default:return e}},V={searchBy:"",filterStatusBy:""},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FILTER_STATUS_BY":return Object(x.a)({},e,{filterStatusBy:a.status});case"FILTER_By_SEARCH":return Object(x.a)({},e,{searchBy:a.search});default:return e}},K=Object(G.c)(Object(G.b)({projects:z,filters:W}));l.a.render(c.a.createElement(g.a,{store:K},c.a.createElement(j.a,null,c.a.createElement(c.a.StrictMode,null,c.a.createElement(U,{dispatch:K.dispatch})))),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.510c29fc.chunk.js.map