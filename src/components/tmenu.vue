<template>
  <div>
    <a-menu
      style="width: 200px"
      :default-selected-keys="['1']"
      :default-open-keys="['sub1']"
      mode="inline"
      :theme="theme"
      :selected-keys="[current]"
      @click="handleClick"
    >
      <a-menu-item key="1">
        <a-icon type="home" />
        <span class="nav-text">Part 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="team" />
        <span class="nav-text">Siguiendo</span>
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="video-camera" />
        <span class="nav-text">LIVE</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  name: "tmenu",
   components: {
  },
  data() {
    return {
      current: "1",
      theme: "dark",
    };
  },
  methods: {
    handleClick(e) {
      console.log("click ", e);
      this.current = e.key;
    },
    changeTheme(checked) {
      this.theme = checked ? "dark" : "light";
    },
  },
  props: {
  },
};
</script>
