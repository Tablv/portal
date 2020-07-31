<template>
  <el-header>
    <logo-bar></logo-bar>
    <menu-bar></menu-bar>
    <register-bar></register-bar>
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
@import url("../css/navStyle.less");
</style>