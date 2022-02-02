<template>
  <div>
    <table>
      <tbody>
        <tr v-for="todo in todos" :key="todo.nickname">
          <td>
            <video controls="true" autoplay="true" :src= "todo.url" style="width:300px" />
          </td>
          <td>
            {{ todo.url }}
            <br />
            {{ todo.nickname }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

//Usar Video
export default {
  name: "prueba",
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
    getAll() {
      console.log("aca va el codigo de getAll");
      axios
        .get("http://localhost/tianos-v2-backend/public/index.php/tik-tok/list")
        .then((response) => {
          console.log("estoes", response);
          this.todos = response.data.items;
          console.log("Objeto", this.todos);
        })
        .catch((e) => console.log("error", e));
    },
  },
};
</script>

<style></style>
