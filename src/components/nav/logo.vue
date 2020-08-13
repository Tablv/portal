<template>
  <div class="logo-bar">
    <div class="logo-img"></div>
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
    background: url(/favicon.ico) 47% -52% no-repeat;
    width: 100%;
    height: 60%;
    cursor: pointer;
  }
}
</style>