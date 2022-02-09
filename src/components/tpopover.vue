<template>
    <a-popover>
            <template slot="content">
              <p>
                <a-avatar size="large" src="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg" />
                <a-button type="primary">
                  Seguir
                </a-button>
              </p>
              <p>{{content}}</p>
            </template>
            <a-button type="primary">
              <div>
                <a-avatar size="large" src="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg" />
                <a>{{name}}</a>
              </div>
            </a-button>
          </a-popover>
</template>

<script>
export default {
  name: "tpopover",
  data() {},
  mounted() {},
  methods: {
  },
  props: {
      content: String,
      name: String,
  },
};
</script>
