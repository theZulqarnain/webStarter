<template>
  <div class="form-login">
    <!--<md-card-content>-->
    <md-field>
      <label>Username</label>
      <md-input v-model="login.username" class="md-raised"></md-input>
    </md-field>
    <md-field>
      <label>Password</label>
      <md-input v-model="login.password" class="md-raised" type="password"  required></md-input>
    </md-field>
    <!--</md-card-content>-->
    <!--<md-card-actions>-->
      <md-button @click="addToApi" type="submit">Login</md-button>
    <!--</md-card-actions>-->
  </div>
</template>

<style>
  .form-login{
    width: 400px;
    margin: 0px auto;
  }
</style>

<script>
  import VueAxios from 'vue-axios'
  import axios from 'axios'
  // import MdCardContent from "vue-material/src/components/MdCard/MdCardContent/MdCardContent";
  // import MdCardActions from "vue-material/src/components/MdCard/MdCardActions/MdCardActions";

  export default {
    /*components: {
      MdCardActions,
      MdCardContent},*/
    name:"Login",
    data: ()=>({
      login:{
        username:"",
        password:""
      },
      //isLoggedIn: false
    }),
    props:['isLoggedIn:false'],
    methods:{
      addToApi(){
        // let newUser ={
        //   username:this.register.username,
        //   password:this.register.password
        // }
        let username =this.login.username
        let password = this.login.password
        console.log(username, password)
        axios.post("/api/auth/login", {username, password})
          .then(res =>{
            //console.log(res.data)
            //console.log(isLoggedIn)
            //isLoggedIn = this.data.isLoggedIn;
            this.$router.push('/')
          })
          .catch(err=>{
            console.log(err)
          })
      }
    }
  }
</script>
