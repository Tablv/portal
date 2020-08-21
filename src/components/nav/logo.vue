<template>
  <div class="logo-bar">
    <div class="logo-img-contianer" @click="handClick">
      <img src="/logo@white.png" alt="logo" class="logo-img">
    </div>
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
  justify-content: center;
  cursor: pointer;
  .logo-img-contianer {
    display: inline-flex;
    justify-content: center;
    .logo-img {
      width: 70%;
      cursor: pointer;
    }
  }
}
</style>