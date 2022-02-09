<template>
    <a-card style="width: 200px">
              <tmodal />
              <br>
            <p style="text-align: left">
              Inicia sesión para seguir a creadores, dar un me gusta a videos y
              ver comentarios.
            </p>
          </a-card>
</template>

<script>
import tmodal from "./tmodal.vue";
export default {
  name: "tlogin",
  components: {
    tmodal,
  },
  data() {},
  mounted() {},
  methods: {
  },
  props: {
  },
};
</script>
