<template>
  <div class="logo-bar">
    <img src="/favicon.ico" class="logo-img" alt="logo">
  </div>
</template>

<script>

export default {
  name: 'logoBar'
}
</script>

<style lang="less" scoped>
.logo-bar {
  display: flex;
  align-items: center;
  justify-items: center;
  .logo-img {
    
    width: 80%;
  }
}
</style>