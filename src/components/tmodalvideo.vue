<template>
  <div>
    <a-button type="link" @click="showModal">
      <video controls="true" autoplay="true" :src="src" style="width:300px" />
    </a-button>

    <a-modal v-model="visible" @ok="handleOk">
      <div class="container">
        <table>
          <tr>
            <td rowspan="5">
              <video
                controls="true"
                autoplay="true"
                :src="src"
                style="width:300px"
              />
            </td>
            <td>
              <div class="container">
                <a-avatar size="large" icon="user" />
                <a>{{ name }}</a>
                <a-button type="primary">
                  Seguir
                </a-button>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <a-icon type="heart" />
              <scan> 38.1K </scan>
              <a-icon type="message" />
              <scan> 1795 </scan>
              <scan> Compartir en: </scan>
              <icon-font type="icon-facebook" />
              <icon-font type="icon-twitter" />

              <a-icon type="instagram" />
            </td>
          </tr>
          <tr>
            <td> <a-input-search placeholder="https://www.tiktok.com/@celeste_karly_/video/7062202241180126469?is_from_webapp=1&sender_device=pc&web_id7063686809083381254

" size="large" @search="onSearch">
      <a-button slot="enterButton">
        Custom
      </a-button>
    </a-input-search></td>
          </tr>
          <tr>
            <td>5555</td>
          </tr>
          <tr>
            <td><tcomment /></td>
          </tr>
         
        </table>
      </div>
    </a-modal>
  </div>
</template>

<script>
import { Icon } from 'ant-design-vue';
import tcomment from './tcomment.vue';

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
export default {
    components: {
    IconFont,
    tcomment,
  },
  name: "tmodalvideo",
  data() {
    return {
      visible: false,
    };
  },
  mounted() {},
  methods: {
      onSearch(value) {
      console.log(value);
    },
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
  },
};
</script>

<style>
.ant-modal-content {
  width: 700px;
}
</style>


<style scoped>
.icons-list >>> .anticon {
  margin-right: 6px;
  font-size: 24px;
}
</style>