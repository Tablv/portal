<template>
  <section class="aside-button">
    <img src="/customer-service-2.png" class="aside-icon" @click="isContent = !isContent">
    <ul class="aside-content" v-show="isContent">
      <li>运维: 江晶晶</li>
      <li>电话: 17355633078</li>
      <li>邮箱: jiangjingjing@glaway.com</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'asideButton',
  data() {
    return {
      isContent: false
    }
  }
}
</script>
<style lang="less" scoped>
.aside-button {
  position: fixed;
  right: 50px;
  bottom: 350px;
  width: 50px;
  height: 50px;
  z-index: 10000;
  border-radius: 6px;
  background: rgba(255,255,255,1);
  .aside-icon {
    
    border-radius: 3px;
    cursor: pointer;
  }
  .aside-content {
    display: block;
    position: fixed;
    right: 50px;
    bottom: 180px;
    padding: 20px;
    text-align: left;
    border-radius: 3px;
    background: #ffffff;
    box-shadow: 0 3px 10px rgba(0,0,0,.1);
    li {
      line-height: 40px;
    }
  }
}
</style>