<template>
  <el-footer height="560px">
    <section class="footer-content">
      <div class="footer-item-group" v-for="item in 4" :key="item">
        <span class="group-title">关于我们</span>
        <ul>
          <li v-for="item in 9" :key="item">公司荣誉</li>
        </ul>
      </div>
      <section class="footer_record">
        <img src="/favicon.ico" class="footer_record-logo" alt="logo">
        <section class="footer-service">
          <img src="/services_user_icon.png" alt="icon" class="footer-service-icon">
          <div class="footer-service-group">
            <ul>
              <li>地址：南京市鼓楼区古平岗4号</li>
            </ul>
            <span style="line-height: 200px">
              Copyright © 1998 - 2020 glaway. All Rights Reserved. 创新二部
            </span>
          </div>
        </section>
      </section>
    </section>
    
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
.el-footer {
  background:#001432;
  padding-top: 72px;
  .footer-content {
    width: 1200px;
    margin: 0 auto;
    display: inline-flex;
    justify-content: space-between;
    .footer_record {
      width: 500px;
      display: flex;
      font-size: 13px;
      flex-direction: column;
      align-items: center;
      border-left: 1px solid #282e41;
      &-logo {
        filter: hue-rotate(-236deg) contrast(0%) brightness(200%);
        margin-top: 50px;
        margin-bottom: 50px;
      }
      .footer-service {
        .footer-service-icon {
          margin-bottom: 10px;
        }
        .footer-service-group {
          color: #999999;
        }
      }
    }
    .footer-item-group {
      display: inline-block;
      text-align: left;
      padding-top: 30px;
      font-size: 13px;
      .group-title {
        display: block;
        color: #fff;
        margin-bottom: 20px;
      }
      
    }
  }
  
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
    color: #999999;
    li {
      margin-bottom: 10px;
    }
  }
}
</style>