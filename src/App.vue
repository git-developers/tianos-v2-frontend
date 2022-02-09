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

export default {
  name: 'App',
  components: {
    //HelloWorld
    prueba
  }
}
</script>
    HelloWorld

<style>
</style>


