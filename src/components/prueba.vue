<template>
  <h1>{{ titulo }}</h1>
</template>

<script>
import axios from 'axios'
export default {
  name: "prueba",
  data(){
    return{
      titulo: 'Mañana'
    }
  },
  mounted() {
    console.log('Holaaa')
    this.getAll();
  },
  methods:{
    getAll(){
      console.log('aca va el codigo de getAll')
      axios
      .get('http://localhost/tianos-v2-backend/public/index.php/tik-tok/list')
      .then(response => {
        console.log('estoes', response)
      })
      .catch(e=>console.log('error',e))
    }
  }


};
</script>



<style>

</style>