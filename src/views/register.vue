<template>
 <div class="card register" v-bind:class="{ error: emptyFields }">
  <form @submit.prevent="doRegister">
     <h1>Sign Up</h1>
    <div>
      <input id="name" type="text" v-model="name" placeholder="Name" required/>
    </div>
    <div>
      <input id="email" type="email" v-model="email" placeholder="Email" required/>
    </div>
    <div>
      <input id="password" type="password" v-model="password" placeholder="Password" required/>
    </div>
    <div>
      <input id="age" type="number" v-model="age" placeholder="Age" required/>
    </div>
    <button class="active" type="submit">Submit</button>
    <div>
      Already have an account?   <router-link to="/">sign in</router-link>
    </div>
  </form>
  </div>
</template>
<script>
import 'bootstrap'
import axios from 'axios'
import router from '../router'
import "@/assets/style.css"
export default {
  data () {
    return { 
      name: '',
      email: '',
      password:'',
      age:'',
      emptyFields: false
    }
      
  },
  methods: {
    doRegister() {  
    let headers = {
      "Content-Type": "application/json",
      "Accept": "application/json",
    };
    
  axios({
          method: "POST",
          url:"https://api-nodejs-todolist.herokuapp.com/user/register",
          headers: headers,
          data: {
              "name":this.name,
              "email": this.email,
              "password": this.password,
              "age": this.age
          }
      })
      .then(function (res) {
          console.log(res.data.token)
          router.push({ path: '/'});   
      })
        this.name = '';
        this.email = '';
        this.password = '';
        this.age='';
      }
    }
}
</script>
