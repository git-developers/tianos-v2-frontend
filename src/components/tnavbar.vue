<template>
  <div class="container">
    <img class="item1"
      src="https://cronuts.digital/wp-content/uploads/2020/04/tik-tok-1200x900.jpg"
      style="width:80px"
    />
    <a-input-search class="item2"
      placeholder="Buscar cuentas y videos"
      style="width: 200px"
      @search="onSearch"
    />
     <tmodalsignup />
      <tmodalsignin />
    <a-icon type="more" />
  </div>
</template>

<script>
import tmodalsignin from "./tmodalsignin.vue";
import tmodalsignup from "./tmodalsignup.vue";
export default {
   components: {
    tmodalsignin,
    tmodalsignup
  },
  name: "tnavbar",
  data() {},
  mounted() {},
  methods: {
    onSearch(value) {
      console.log(value);
    },
  },
  props: {},
};
</script>

<style>
.container {
  display: grid;
  justify-items: center;
  align-items: center;
  grid-column-gap: 0px;
  grid-template-columns: 2fr 8fr 1fr 1fr 1fr;
}
</style>
