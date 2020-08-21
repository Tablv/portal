<template>
  <el-popover
    placement="bottom"
    width="200"
    trigger="click"
  >
    <ul class="aside-content">
      <li>运维: 江晶晶</li>
      <li>电话: 17355633078</li>
      <li>邮箱: jiangjingjing@glaway.com</li>
    </ul>
    <section class="aside-button" slot="reference">
      <img  class="aside-icon" src="/customer-service-2.png">
    </section>
  </el-popover>
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
  bottom: 200px;
  width: 50px;
  height: 50px;
  z-index: 10000;
  border-radius: 6px;
  background: #ffffff;
  .aside-icon {
    border-radius: 3px;
    cursor: pointer;
  }
}
.aside-content {
  li {
    line-height: 30px;
  }
}
</style>