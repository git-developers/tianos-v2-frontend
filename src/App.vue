<template>
    <div id="app">
        <!--
    <img alt="Vue logo" src="./assets/logo.png">

          -->
        <!--<HelloWorld msg="Tianos" />-->
        <prueba msg="Tianos" />
        <!--//Revisar dónde recibe este props (parámetro)-->
    </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import prueba from './components/prueba.vue'
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    prueba
    //prueba
  }
}
</script>
    HelloWorld

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
