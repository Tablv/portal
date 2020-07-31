<template>
  <el-footer height="400px">
    <div>
      
    </div>
  </el-footer>
</template>

<script>

export default {
  name: 'FooterBar',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>
<style lang="less" scoped>
</style>