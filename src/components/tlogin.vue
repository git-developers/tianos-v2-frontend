<template>
    <a-card style="width: 200px">
              <tmodalsignin/>
              <br>
            <p style="text-align: left">
              Inicia sesión para seguir a creadores, dar un me gusta a videos y
              ver comentarios.
            </p>
          </a-card>
</template>

<script>
import tmodalsignin from "./tmodalsignin.vue";
export default {
  name: "tlogin",
  components: {
    tmodalsignin,
  },
  data() {},
  mounted() {},
  methods: {
  },
  props: {
  },
};
</script>
