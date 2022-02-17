<template>
  <div>
    <a-card>
      <div>
        <a-avatar size="large" icon="user" />
        <a>{{ name }}</a>
        <a-button type="primary">
          Seguir
        </a-button>
      </div>
      <div>
        {{ signa }}
      </div>

      <!--/////-->
      <tmodalvideo :name="name" :src="src"/>
      <!--/////-->

      <!--<video controls="true" autoplay="true" :src="src" style="width:300px" />-->
      <div>
        <a-icon type="heart" />
        <a-icon type="message" />
        <a-icon type="share-alt" />
      </div>
    </a-card>
  </div>
</template>

<script>
import tmodalvideo from './tmodalvideo.vue';
export default {
  components: { tmodalvideo },
  name: "tvideo",
  data() {
    return {
      visible: false,
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
  },
  props: {
    src: String,
    name: String,
    signa: String,
  },
};
</script>


<style>
.container {
  display: grid;
  justify-items: center;
  align-items: center;
  grid-column-gap: 0px;
  grid-template-columns: 4fr 4fr;
}

.container2 {
  margin-left: 10px;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-column-gap: 0px;
  grid-template-columns: 4fr 4fr 4fr;
}
</style>
