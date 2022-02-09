<template>
  <div>
    <a-button type="primary" @click="showModal">
      Iniciar sesión
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
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "tmodal",
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
      console.log(this.formInline);
      const tuser = {
        username: this.formInline.user,
        email: "gato@gato.com",
        password: this.formInline.password,
        name: this.formInline.user,
      };
      //console.log(tuser)
      axios
        .post("http://localhost/tianos-v2-backend/public/index.php/user_api/new", tuser)
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
