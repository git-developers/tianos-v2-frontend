<template>
  <div>
    <a-button type="link" @click="showModal">
      Sign up
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
            Register
          </a-button>
        </a-form-model-item>
      </a-form-model>
      <!---->
    </a-modal>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "tmodalsignup",
  data() {
    return {
      visible: false,
      formInline: {
        user: "",
        password: "",
      },
    };
  },
  mounted() {},
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

      console.log("http://api.gato.com/tianos-v2-backend/public/index.php/user_api/new?username="+this.formInline.user+"&password=" +this.formInline.password+"&name=" +this.formInline.user+"&email=" +this.formInline.user+"@gato.com");
      //axiosInstance
      axios
        .get(
          "http://api.gato.com/tianos-v2-backend/public/index.php/user_api/new?username="+this.formInline.user+"&password=" +this.formInline.password+"&name=" +this.formInline.user+"&email=" +this.formInline.user+"@gato.com")
        .then((response) => {
          console.log("estoes", response);
          this.answer = response.data.id;
        })
        .catch((error) => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
    },
  },
  props: {},
};
</script>

<style>
.ant-modal-body {
  padding: 50px;
}
</style>
