<template>
    <div id="app">
        <!--
    <img alt="Vue logo" src="./assets/logo.png">
          -->
        <prueba msg="Tianos" />
    </div>
</template>

<script>
import prueba from './components/prueba'
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld
    prueba
  }
}
</script>

<style>



    /*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
    */
</style>
