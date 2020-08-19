<template>
  <el-header>
    <section class="nav-content">
      <logo-bar></logo-bar>
      <menu-bar></menu-bar>
      <register-bar></register-bar>
    </section>
  </el-header>
</template>

<script>

import menuBar from './menu.vue';
import registerBar from './register.vue';
import logoBar from './logo.vue';

export default {
  name: 'navBar',
  components: {
    logoBar,
    menuBar,
    registerBar
  }
}
</script>
<style lang="less">
@import url("./css/navStyle.less");
.el-header {
  left: 0;
  right: 0;
  display: flex;
  position: fixed;
  z-index: 9999;
  box-shadow: 3px 3px 5px rgba(0,0,0,.1);
  border-bottom: 1px solid rgba(255,255,255,0.1);
  background-image: linear-gradient(90deg,#050a2a, #09275b, #050a2a);
}
</style>