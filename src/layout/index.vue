<template>
  <el-container>
    <header-bar />
    <main-page />
    <footer-bar />
    <aside-button />
  </el-container>
</template>

<script>

import MainPage from './main/main.vue';
import HeaderBar from './header/headerBar.vue'
import FooterBar from './footer/footerBar.vue'
import asideButton from './asideButton/asideButton.vue'

export default {
  name: 'Layout',
  components: {
    MainPage,
    HeaderBar,
    FooterBar,
    asideButton
  }
}
</script>
<style lang="less" scoped>
.el-container {
  flex-direction: column;
  overflow: auto;
}
</style>