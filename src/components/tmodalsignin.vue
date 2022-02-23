<template>
  <div>
    <a-button v-if="show" type="primary" @click="showModal">
      Sign in
    </a-button>
    <a-modal v-model="visible" @ok="handleOk">
      <!---->
      <a-form-model
        layout="inline"
        :model="formInline"
        @submit="handleSubmit"
        @submit.native.prevent
      >
        <a-form-model-item>
          <a-input v-model="formInline.user" placeholder="Username">
            <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-input
            v-model="formInline.password"
            type="password"
            placeholder="Password"
          >
            <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-button
            type="primary"
            html-type="submit"
            :disabled="formInline.user === '' || formInline.password === ''"
          >
            Log in
          </a-button>
        </a-form-model-item>
      </a-form-model>
      <!---->
    </a-modal>

    <a-button  v-if="!show" type="primary" v-on:click="logout">
      Logout
    </a-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "tmodalsignin",
  props: {},
  data() {
    return {
      show: true,
      visible: false,
      formInline: {
        user: "",
        password: "",
      },
    };
  },
  mounted() {
    //this.$session.start();

  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
    handleSubmit() {
      /*
      console.log(this.formInline);
      const tuser = {
        username: this.formInline.user,
        email: "gato@gato.com",
        password: this.formInline.password,
        name: this.formInline.user,
      };
      //console.log(tuser)
      const headers = {
        "Acces  Allow-Origin": "*",
        "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
      };

      const axiosInstance = axios.create({
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      });*/

      /*console.log(
        "http://api.gato.com/tianos-v2-backend/public/index.php/login?username=" +
          this.formInline.user +
          "@gato.com&password=" +
          this.formInline.password
      );*/
      //axiosInstance
      let data = JSON.stringify({
        username: this.formInline.user,
        password: this.formInline.password,
      });
      console.log("=========")
      console.dir(window);
        axios
          .post(
            "http://api.gato.com/tianos-v2-backend/public/index.php/login",
            data
          )
          .then((response) => {
            console.log(response.data.status);
            this.answer = response.data.id;
            //if (response.data.status == Util.status_success) {
            if (response.data.status == "1") {
              this.show = false;

              
              localStorage.setItem("username", this.formInline.user);
              //this.$session.set('token', 152t2tw6wy2);
            }
          })
          .catch((error) => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },

    logout(){
      console.log("data");
      this.show = true;

      console.log("logout");
      console.log(localStorage);
      console.log("SESSION ::: " + localStorage.getItem("username"))

      localStorage.removeItem("username");
       console.log("=========");
        console.log(localStorage);

      /*
      axios
        .get(
          "http://api.gato.com/tianos-v2-backend/public/index.php/logout")
        .then((response) => {

          
          console.log("estoes", response);
          this.answer = response.data.id;
        })
        .catch((error) => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
        */
    }
  },
};
</script>

<style>
.ant-modal-body {
  padding: 50px;
}
</style>
