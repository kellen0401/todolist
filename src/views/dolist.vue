<template>
 <div class="container my-3">
    <div class="input-group mb-3">
      <div class="input-group-prepend"><span class="input-group-text" id="basic-addon1">待辦事項</span></div>
      <input class="form-control" type="text" placeholder="準備要做的任務" v-model="newTodo.description" @keyup.enter="addTodo"/>
      <div class="input-group-append">
        <button class="btn btn-primary" type="button" @click="addTodo">新增</button>
      </div>
    </div>
    <div class="card text-center">
      <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs">
          <template v-for="(item, index) in visibilityList">
            <li class="nav-item" :key="index"><a class="nav-link" href="#" :class="{ active: visibility == item.value }" @click="visibility = item.value">{{ item.name }}</a></li>
          </template>
        </ul>
      </div>
  
        <ul class="list-group list-group-flush text-left">
             <template  v-for="(todo) in filteredTodos">
            <li class="list-group-item" :key="todo._id">
              <div class="d-flex"><div class="form-check" >
                <input class="form-check-input" :id="todo._id" type="checkbox" @click="changeComplated(todo._id)" v-model="todo.completed"/></div>
              <label >
                    <span>{{ todo.description }}</span>
                </label>
                <button class="close ml-auto" type="button" aria-label="Close" @click="removeTodo(todo)" ><span aria-hidden="true">×</span></button> 
              </div>
            </li>
               </template>
        </ul>
      <div class="card-footer d-flex justify-content-between">還有{{ activeTodosLength}}筆任務未完成<button v-on:click="logout" class="active logout">logout</button></div>
    </div>
  </div>
</template>
<script>
import 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"; 
import axios from 'axios'
import router from '../router'
import "@/assets/style.css"
export default {
  data () {
    return { 
      newTodo: {
        description: "",
        completed: false
      },
        todos: [],
        visibilityList: [
            { name: "全部", value: "all" },
            { name: "進行中", value: "active" },
            { name: "已完成", value: "completed" }
        ],
        visibility: 'all'
    }
      
  },
  created() {
        this.getList()
    },
  methods: {
    getList() {
            let headers = {
                'Authorization': 'Bearer '+sessionStorage.getItem('token' ),
                "Content-Type": "application/json",
                "Accept": "application/json",
                
            };
            axios({
                    method: "GET",
                    url:"https://api-nodejs-todolist.herokuapp.com/task",
                    headers: headers
                })
                .then( res => {
                    console.log(res)
                    if (res.status == 200) {
                        this.todos = res.data.data
                    }
                })
    },
    addTodo(){
            let headers = {
                'Authorization': 'Bearer '+sessionStorage.getItem('token' ),
                "Content-Type": "application/json",
                "Accept": "application/json",
                
            };
            if (!this.newTodo.description) {
                return
            }
            axios({
                    method: "POST",
                    url:"https://api-nodejs-todolist.herokuapp.com/task",
                    headers: headers,
                    data: {
                        "description":this.newTodo.description,
                    }
                })
                .then( res => {
                    console.log(res)
                    this.newTodo.description = ''
                    this.todos.unshift(res.data.data)
                })
        },
        changeComplated(id){
            let headers = {
                'Authorization': 'Bearer '+sessionStorage.getItem('token' ),
                "Content-Type": "application/json",
                "Accept": "application/json",
                
            };
            axios({
                    method: "PUT",
                    url:"https://api-nodejs-todolist.herokuapp.com/task/"+id,
                    headers: headers
                })
                .then( res => {
                    console.log(res)
                })
        },
        removeTodo(todo){
            let headers = {
                'Authorization': 'Bearer '+sessionStorage.getItem('token' ),
                "Content-Type": "application/json",
                "Accept": "application/json",
                
            };
            axios({
                    method: "DELETE",
                    url:"https://api-nodejs-todolist.herokuapp.com/task/"+todo._id,
                    headers: headers
                })
                .then( res => {
                    if (res.status == 200) {
                       console.log( res.data.data)
                       this.todos = this.todos.filter(item => item != todo)
                    }
                })
        },
        getIndex(id) {
            return this.todos.findIndex((el) => el.id == id)
        },
        logout() {
           router.push({ path: '/'}); 
           sessionStorage.clear();
        },
    },computed: {
        filteredTodos() {
            let nowTab = this.visibility
            if(nowTab == 'all'){
                return this.todos
            }else if(nowTab == 'active'){
                return this.todos.filter((todo) => !todo.completed)
            }else if(nowTab == 'completed'){
                return this.todos.filter((todo) => todo.completed)
            }
            return [];

        },
        activeTodosLength() {
                return this.todos.filter((todo) => !todo.completed).length
        }
    }
}
</script>
<style>

</style>