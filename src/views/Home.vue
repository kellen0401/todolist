<template>
  <div class="card login" v-bind:class="{ error: emptyFields }">
   <form @submit.prevent="dologin">
    <h1>Sign In</h1>
    <div>
      <input id="emailLogin" type="emailLogin" v-model="emailLogin" placeholder="Email" required/>
    </div>
    <div>
      <input id="passwordLogin" type="passwordLogin" v-model="passwordLogin" placeholder="Password" required/>
    </div>
    <button class="active" type="submit">Submit</button>
    <div>
      Don't have an account? <router-link to="/register">sign up</router-link>
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
      emailLogin:'',
      passwordLogin:'',
      emptyFields: false
    }
      
  },
  methods: {
     dologin() {  
    let headers = {
      "Content-Type": "application/json",
      "Accept": "application/json",
    };
    
  axios({
          method: "POST",
          url:"https://api-nodejs-todolist.herokuapp.com/user/login",
          headers: headers,
          data: {
              "email": this.emailLogin,
              "password": this.passwordLogin
          }
      })
      .then(function (res) {
          console.log(res.data.token)
          const token = res.data.token;
          sessionStorage.setItem('token',token );
          router.push({ path: '/dolist'});
      })
        this.email = '';
        this.password = '';
      }
    }
}
</script>
<style>

</style>