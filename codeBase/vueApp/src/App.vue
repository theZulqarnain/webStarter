<template>
  <div id="app">
    <HeaderComp/>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import HeaderComp from "./components/header";

export default {
  components: {HeaderComp},
  name: 'app',
  isRegistered: false,
}



</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
  img{
    size: 50px;
  }
</style>
