<template>
  <el-main>
    <keep-alive>
      <router-view :key="key" />
    </keep-alive>
  </el-main>
</template>

<script>

export default {
  name: 'MainPage',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>
<style lang="less" scoped>
</style>