<!--<template>-->
  <!--<div class="hello">-->
    <!--<h1>Header goes here</h1>-->
  <!--</div>-->
<!--</template>-->

import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)

<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-toolbar class="md-large md-dense md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon><img src="../assets/logo.png"></md-icon>
            </md-button>

            <span class="md-title">Web Starter with Vue</span>
          </div>
          <div class="md-toolbar-row">
            <md-button class="md-raised"><router-link to="/">Home</router-link></md-button>
            <md-button class="md-raised"><router-link to="/login">Login</router-link></md-button>

            <md-button class="md-raised"><router-link to="/register">Register</router-link></md-button>
          </div>

        </div>



        <!--<input v-model="isRegistered" />-->
        <!--<input v-model="$route.data.wtf.x" />-->
        <!--<input v-model="$route.wtf.x" />-->

      </md-app-toolbar>

    </md-app>
  </div>
</template>

<style scoped>
  md-app {
    max-height: 400px;
    border: 1px solid black;
    background: #00B7FF;
  }
  md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
  .md-title{
    font-size: xx-large;
  }
</style>

<script>
  import isRegistered from "../App.vue"
  // import {isRegistered } from "../App.vue"

  export default {
    name: 'HeaderComp',
    data: () => ({
      menuVisible: false,
      isRegistered:isRegistered
    })
  }
</script>


<!--<script>
  export default {
    name: 'Header',
    data () {
      return {
        msg: "Welcome to Web Starter",
        name: 'Welcome to Your Vue.js App by Narendra'
      }
    }
  }
</script>

&lt;!&ndash; Add "scoped" attribute to limit CSS to this component only &ndash;&gt;
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>-->
