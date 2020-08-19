<template>
  <el-container>
    <header-bar />
    <main-page />
    <footer-bar />
  </el-container>
</template>

<script>

import MainPage from './main/main.vue';
import HeaderBar from './header/headerBar.vue'
import FooterBar from './footer/footerBar.vue'

export default {
  name: 'Layout',
  components: {
    MainPage,
    HeaderBar,
    FooterBar
  }
}
</script>
<style lang="less" scoped>
.el-container {
  flex-direction: column;
  overflow: auto;
}
</style>