<template
  ><div>
    <div id="postList"></div>
    <a-input-search
      placeholder="input search text"
      size="large"
      @search="postList"
    >
      <a-button type="link" slot="enterButton">
        Publicar
      </a-button>
    </a-input-search>
  </div>
</template>

<script>
//import tmodalvideo from "./tmodalvideo.vue";
export default {
  components: {},
  name: "tcomment",
  data() {
    return {
      //visible: false,
    };
  },
  mounted() {},
  methods: {
    
    postList(value) {
      ("#postList").empty();
      if (value.length > 0) {
        let html = "";
        value.forEach((doc) => {
          const post = doc.value();
          //<p>Publicado el ${post.fecha} a las ${post.hora}</p>
          const div = `
          <div class="card bg-dark text-white  mt-3 mx-auto" style="border-radius: 1rem; width: 800px;">
            <div class="card-body">
              <p>${post.mensaje}</p>
              
            </div>
          </div>
        `;
          html += div;
        });
        ("#postList").append(html);
      }
    },
  },
  props: {},
};
</script>
