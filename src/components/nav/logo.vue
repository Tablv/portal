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
    background: url(/favicon.ico) 0% 100% no-repeat;
    background-size: 90% 80%;
    width: 100%;
    height: 60%;
    filter: hue-rotate(-236deg) contrast(0%) brightness(200%);
    cursor: pointer;
  }
}
</style>