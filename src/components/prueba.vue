<template>
  <a-layout>
    <div>
      <div id="components-layout-demo-basic">
        <a-layout>
          <!--Navbar-->
          <a-layout-header>
        <tnavbar /> <!--poner t-nav-->
      </a-layout-header>
      <!--Navbar-->
          <a-layout>
            <a-layout-sider>
              <tmenu />
              <tlogin/>
              <div v-for="todo in todos" :key="todo.nickname">
              <tpopover :name="todo.author_nick" :content="todo.author_signature"/>
              </div>
            </a-layout-sider>
            <a-layout-content>
              <div v-for="todo in todos" :key="todo.nickname">

                <tvideo :src="todo.url" :name="todo.author_nick" :signa="todo.author_signature"/>
              </div>
            </a-layout-content>
          </a-layout>
        </a-layout>
      </div>
    </div>
  </a-layout>
</template>

<script>
import axios from "axios";
import tvideo from "./tvideo.vue";
import tnavbar from "./tnavbar.vue";
import tmenu from "./tmenu.vue";
import tpopover from "./tpopover.vue";
import tlogin from "./tlogin.vue";


//Usar Video
export default {
  name: "prueba",
  components: {
    //HelloWorld
    tvideo,
    tmenu,
    tnavbar,
    tpopover,
    tlogin,
  },
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

<style>
#components-layout-demo-basic {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: #ff9d01;
  color: #fff;
  border: solid 4px #ff9d01;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 120px;
  border: solid 4px black;
}
#components-layout-demo-basic .ant-layout-content {
  background: rgba(16, 142, 233, 1);
  border: solid 4px black;
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}

#components-layout-demo-basic .ant-layout-header{
  padding: 0;
}
</style>

