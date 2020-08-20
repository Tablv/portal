<template>
  <el-footer height="80px">
    <section class="footer-content">
      <img src="/logo@white.png" class="footer-content-logo" alt="logo">
      <span>Glaway 南京市鼓楼区古平岗 4 号院 53 号楼 4 楼</span>
    </section>
  </el-footer>
</template>

<script>
import { loadFooterNavList } from '@/API/indexPage.js'
export default {
  name: 'FooterBar',
  data() {
    return {
      navList: null
    }
  },
  mounted() {
    loadFooterNavList().then(res => {
      if (res.success) {
        this.navList = this.division(res.result, 8);
      }
    })
  },
  methods: {
    division(arr, length) {
      let index = 0;
      let newArray = []
      while (index < arr.length) {
        newArray.push(arr.splice(index, length))
      }
      return newArray;
    },
  }
}
</script>
<style lang="less" scoped>
.el-footer {
  padding: 0;
  display: flex;
  align-items: center;
  background:#001432;
  .footer-content {
    width: 1200px;
    margin: 0 auto;
    color: #999999;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    &-logo {
      position: absolute;
      left: 0;
      width: 100px;
    }
  }
}
</style>