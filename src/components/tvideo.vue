<template>
  <div>
    <a-card>
      <p>
        <a-avatar size="large" icon="user" />
        <a>{{name}}</a>
        <a-button type="primary">
          Seguir
        </a-button>
      </p>
      <p>
        {{signa}}
      </p>
      <p>
        <video controls="true" autoplay="true" :src="src" style="width:300px" />
        <a-icon type="heart" />
        <a-icon type="message" />
        <a-icon type="share-alt" />
      </p>
    </a-card>
  </div>
</template>

<script>
export default {
  name: "tvideo",
  data() {},
  mounted() {},
  methods: {},
  props: {
    src: String,
    name: String,
    signa: String,
  },
};
</script>
