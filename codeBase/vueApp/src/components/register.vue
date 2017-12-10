<template>
  <div class="form-register">
    <!--<md-card-content>-->
      <md-field>
        <label>Username</label>
        <md-input v-model="register.username" class="md-raised"></md-input>
      </md-field>
      <md-field>
        <label>Password</label>
        <md-input v-model="register.password" class="md-raised" type="password"  required></md-input>
      </md-field>

    <!--</md-card-content>-->
    <!--<md-card-actions>-->
      <md-button @click="addToApi" type="submit">Register</md-button>
    <!--</md-card-actions>-->

  </div>
</template>

<style>
  .form-register{
    width: 400px;
    margin: 0px auto;
  }
</style>

<script>
  import VueAxios from 'vue-axios'
  import axios from 'axios'
  import isRegistered from "../App.vue"
  import router from '../router'

  // import MdCardContent from "vue-material/src/components/MdCard/MdCardContent/MdCardContent";
  // import MdCardActions from "vue-material/src/components/MdCard/MdCardActions/MdCardActions";

  export default {
    /*components: {
      MdCardActions,
      MdCardContent},*/
    name:"Register",
    data(){
      return{
        register:{
          username:"",
          password:""
        }
      }
    },
    methods:{
      addToApi(){
        // let newUser ={
        //   username:this.register.username,
        //   password:this.register.password
        // }
        let username =this.register.username
        let password = this.register.password
        console.log(username, password)
        axios.post("/api/auth/register", {username, password})
          .then(res =>{
            //console.log(res)
            //isRegistered: res.data
            // console.log({isRegistered:res.data.isRegistered})
            //router.go("/")
            // isRegistered = res.data.isRegistered
            //this.$set(this.isRegistered = res.data.isRegistered)
            //console.log(isRegistered)
            // this.$emit(this.isRegistered = res.data.isRegistered)
            this.$router.push('/')
          })
          .catch(err=>{
            console.log(err)
          })
      }
    }
  }
</script>
