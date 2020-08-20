<template>
  <div class="logo-bar">
    <div class="logo-img" @click="handClick"></div>
  </div>
</template>

<script>

export default {
  name: 'logoBar',
  methods: {
    handClick() {
      this.$router.push({ name: 'index' })
    }
  }
}
</script>

<style lang="less" scoped>
.logo-bar {
  display: flex;
  align-items: center;
  justify-items: center;
  .logo-img {
    height: 60%;
    width: 100%;
    background: url(/logo@white.png) 0% 100% no-repeat;
    background-size: 90% 80%;
    filter: hue-rotate(-236deg) contrast(0%) brightness(200%);
    cursor: pointer;
  }
}
</style>