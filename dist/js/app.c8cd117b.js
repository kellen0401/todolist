(function(t){function e(e){for(var n,s,r=e[0],l=e[1],d=e[2],u=0,p=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(p.length)p.shift()();return i.push.apply(i,d||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,r=1;r<o.length;r++){var l=o[r];0!==a[l]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},a={app:0},i=[];function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/todolist/dist/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var c=l;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";o("85ec")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},i=[],s={name:"App",components:{}},r=s,l=(o("034f"),o("2877")),d=Object(l["a"])(r,a,i,!1,null,null,null),c=d.exports,u=o("8c4f"),p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"card login",class:{error:t.emptyFields}},[o("form",{on:{submit:function(e){return e.preventDefault(),t.dologin.apply(null,arguments)}}},[o("h1",[t._v("Sign In")]),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.emailLogin,expression:"emailLogin"}],attrs:{id:"emailLogin",type:"emailLogin",placeholder:"Email",required:""},domProps:{value:t.emailLogin},on:{input:function(e){e.target.composing||(t.emailLogin=e.target.value)}}})]),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordLogin,expression:"passwordLogin"}],attrs:{id:"passwordLogin",type:"passwordLogin",placeholder:"Password",required:""},domProps:{value:t.passwordLogin},on:{input:function(e){e.target.composing||(t.passwordLogin=e.target.value)}}})]),o("button",{staticClass:"active",attrs:{type:"submit"}},[t._v("Submit")]),o("div",[t._v(" Don't have an account? "),o("router-link",{attrs:{to:"/register"}},[t._v("sign up")])],1)])])},m=[],v=(o("7b17"),o("bc3a")),f=o.n(v),h=(o("7d05"),{data:function(){return{emailLogin:"",passwordLogin:"",emptyFields:!1}},methods:{dologin:function(){var t={"Content-Type":"application/json",Accept:"application/json"};f()({method:"POST",url:"https://api-nodejs-todolist.herokuapp.com/user/login",headers:t,data:{email:this.emailLogin,password:this.passwordLogin}}).then((function(t){console.log(t.data.token);var e=t.data.token;sessionStorage.setItem("token",e),N.push({path:"/dolist"})})),this.email="",this.password=""}}}),g=h,y=Object(l["a"])(g,p,m,!1,null,null,null),b=y.exports,w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"card register",class:{error:t.emptyFields}},[o("form",{on:{submit:function(e){return e.preventDefault(),t.doRegister.apply(null,arguments)}}},[o("h1",[t._v("Sign Up")]),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{id:"name",type:"text",placeholder:"Name",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{id:"email",type:"email",placeholder:"Email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{id:"password",type:"password",placeholder:"Password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.age,expression:"age"}],attrs:{id:"age",type:"number",placeholder:"Age",required:""},domProps:{value:t.age},on:{input:function(e){e.target.composing||(t.age=e.target.value)}}})]),o("button",{staticClass:"active",attrs:{type:"submit"}},[t._v("Submit")]),o("div",[t._v(" Already have an account? "),o("router-link",{attrs:{to:"/"}},[t._v("sign in")])],1)])])},_=[],k=(o("b0c0"),{data:function(){return{name:"",email:"",password:"",age:"",emptyFields:!1}},methods:{doRegister:function(){var t={"Content-Type":"application/json",Accept:"application/json"};f()({method:"POST",url:"https://api-nodejs-todolist.herokuapp.com/user/register",headers:t,data:{name:this.name,email:this.email,password:this.password,age:this.age}}).then((function(t){console.log(t.data.token),N.push({path:"/"})})),this.name="",this.email="",this.password="",this.age=""}}}),C=k,j=Object(l["a"])(C,w,_,!1,null,null,null),T=j.exports,x=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container my-3"},[o("div",{staticClass:"input-group mb-3"},[t._m(0),o("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodo.description,expression:"newTodo.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"準備要做的任務"},domProps:{value:t.newTodo.description},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo.apply(null,arguments)},input:function(e){e.target.composing||t.$set(t.newTodo,"description",e.target.value)}}}),o("div",{staticClass:"input-group-append"},[o("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.addTodo}},[t._v("新增")])])]),o("div",{staticClass:"card text-center"},[o("div",{staticClass:"card-header"},[o("ul",{staticClass:"nav nav-tabs card-header-tabs"},[t._l(t.visibilityList,(function(e,n){return[o("li",{key:n,staticClass:"nav-item"},[o("a",{staticClass:"nav-link",class:{active:t.visibility==e.value},attrs:{href:"#"},on:{click:function(o){t.visibility=e.value}}},[t._v(t._s(e.name))])])]}))],2)]),o("ul",{staticClass:"list-group list-group-flush text-left"},[t._l(t.filteredTodos,(function(e){return[o("li",{key:e._id,staticClass:"list-group-item"},[o("div",{staticClass:"d-flex"},[o("div",{staticClass:"form-check"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.completed,expression:"todo.completed"}],staticClass:"form-check-input",attrs:{id:e._id,type:"checkbox"},domProps:{checked:Array.isArray(e.completed)?t._i(e.completed,null)>-1:e.completed},on:{click:function(o){return t.changeComplated(e._id)},change:function(o){var n=e.completed,a=o.target,i=!!a.checked;if(Array.isArray(n)){var s=null,r=t._i(n,s);a.checked?r<0&&t.$set(e,"completed",n.concat([s])):r>-1&&t.$set(e,"completed",n.slice(0,r).concat(n.slice(r+1)))}else t.$set(e,"completed",i)}}})]),o("label",[o("span",[t._v(t._s(e.description))])]),o("button",{staticClass:"close ml-auto",attrs:{type:"button","aria-label":"Close"},on:{click:function(o){return t.removeTodo(e)}}},[o("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])])]}))],2),o("div",{staticClass:"card-footer d-flex justify-content-between"},[t._v("還有"+t._s(t.activeTodosLength)+"筆任務未完成"),o("button",{staticClass:"active logout",on:{click:t.logout}},[t._v("logout")])])])])},L=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"input-group-prepend"},[o("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[t._v("待辦事項")])])}],P=(o("a4d3"),o("e01a"),o("4de4"),o("d3b7"),o("c740"),o("ab8b"),{data:function(){return{newTodo:{description:"",completed:!1},todos:[],visibilityList:[{name:"全部",value:"all"},{name:"進行中",value:"active"},{name:"已完成",value:"completed"}],visibility:"all"}},created:function(){this.getList()},methods:{getList:function(){var t=this,e={Authorization:"Bearer "+sessionStorage.getItem("token"),"Content-Type":"application/json",Accept:"application/json"};f()({method:"GET",url:"https://api-nodejs-todolist.herokuapp.com/task",headers:e}).then((function(e){console.log(e),200==e.status&&(t.todos=e.data.data)}))},addTodo:function(){var t=this,e={Authorization:"Bearer "+sessionStorage.getItem("token"),"Content-Type":"application/json",Accept:"application/json"};this.newTodo.description&&f()({method:"POST",url:"https://api-nodejs-todolist.herokuapp.com/task",headers:e,data:{description:this.newTodo.description}}).then((function(e){console.log(e),t.newTodo.description="",t.todos.unshift(e.data.data)}))},changeComplated:function(t){var e={Authorization:"Bearer "+sessionStorage.getItem("token"),"Content-Type":"application/json",Accept:"application/json"};f()({method:"PUT",url:"https://api-nodejs-todolist.herokuapp.com/task/"+t,headers:e}).then((function(t){console.log(t)}))},removeTodo:function(t){var e=this,o={Authorization:"Bearer "+sessionStorage.getItem("token"),"Content-Type":"application/json",Accept:"application/json"};f()({method:"DELETE",url:"https://api-nodejs-todolist.herokuapp.com/task/"+t._id,headers:o}).then((function(o){200==o.status&&(console.log(o.data.data),e.todos=e.todos.filter((function(e){return e!=t})))}))},getIndex:function(t){return this.todos.findIndex((function(e){return e.id==t}))},logout:function(){N.push({path:"/"}),sessionStorage.clear()}},computed:{filteredTodos:function(){var t=this.visibility;return"all"==t?this.todos:"active"==t?this.todos.filter((function(t){return!t.completed})):"completed"==t?this.todos.filter((function(t){return t.completed})):[]},activeTodosLength:function(){return this.todos.filter((function(t){return!t.completed})).length}}}),O=P,S=Object(l["a"])(O,x,L,!1,null,null,null),A=S.exports;n["default"].use(u["a"]);var E=[{path:"/",name:"Home",component:b},{path:"/register",name:"register",component:T},{path:"/dolist",name:"dolist",component:A}],$=new u["a"]({mode:"history",base:"/todolist/dist/",routes:E}),N=$,I=o("5f5b"),q=o("b1e0");o("f9e3"),o("2dd8");n["default"].use(I["a"]),n["default"].use(q["a"]),n["default"].config.productionTip=!1,new n["default"]({router:N,render:function(t){return t(c)}}).$mount("#app")},"7d05":function(t,e,o){},"85ec":function(t,e,o){}});
//# sourceMappingURL=app.c8cd117b.js.map