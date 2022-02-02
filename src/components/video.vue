<template>
  <video controls="true"
              autoplay="true"
              src= {url}
              style="width:300px" />
</template>

<script>
export default {
  name: "Video",
  data() {
    return {
      titulo: "Mañana",
      todos: null,
    };
  },
  mounted() {
    console.log("Holaaa");
    this.getAll();
  },
  methods: {
  },
};
</script>
