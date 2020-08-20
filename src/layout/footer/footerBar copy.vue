<template>
  <el-footer height="520px">
    <section class="footer-content">
      <div class="footer-item-group" v-for="(itemList, index) in navList" :key="index">
        <ul>
          <li v-for="item in itemList" :key="item.id">
            <a :href="item.url" target="_blank" v-html="item.name"></a>
          </li>
        </ul>
      </div>
      <section class="footer_record">
        <img src="/favicon.ico" class="footer_record-logo" alt="logo">
        <section class="footer-service">
          <img src="/services_user_icon.png" alt="icon" class="footer-service-icon">
          <div class="footer-service-group">
            <ul>
              <li>联系人：江晶晶</li>
              <li>联系电话：17355633078</li>
              <li>地址：南京市鼓楼区古平岗4号</li>
            </ul>
            <span style="line-height: 170px">
              Copyright © 1998 - 2020 glaway. All Rights Reserved. 创新二部
            </span>
          </div>
        </section>
      </section>
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
  background:#001432;
  padding: 0;
  padding-top: 50px;
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
    color: #999999;
    li {
      margin-bottom: 10px;
      a {
        padding: 10px 0;
        color: #999999;
        display: inline-block;
        text-decoration: none;
        &:hover {
          color: #ffffff;
        }
      }
    }
  }
}
</style>