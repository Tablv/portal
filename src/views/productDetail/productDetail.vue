<template>
  <div class="product-detail">

    <section class="product-detail-title" v-html="titleContent"> </section>
    
    <section class="product-detail-content">
      <section class="product-detail-content-tab">
        <ul>
          <li v-for="item in 5" :key="item" :avtive="activeKey === item">
            <i :class="item.iconClass" class="tab-icon el-icon-watch"></i>
            <span>业务介绍</span>
          </li>
        </ul>
      </section>
      <section
        class="product-detail-content-details"
      >
        <section class="details-item-group">
          <div class="details-item"  v-for="item in 6" :key="item">
            <span class="details-item-title">这是标题奥</span>
            <span class="details-item-content">这是你非得肌肤的肌肤的等级发动机年好你减肥哦什么计算天邦了发的</span>
          </div>
        </section>
      </section>
    </section>
  </div>
</template>

<script>
import { loadeProductDetail } from '@/API/indexPage.js'

export default {
  name: 'productDetail',
  data() {
    return {
      titleContent: "",
      activeKey: 1
    }
  },
  mounted() {
    loadeProductDetail(this.$route.params.id).then(res => {
      if (res.success) {
        this.titleContent = res.result.content
      }
    })
  }
}
</script>
<style lang="less">

.product-detail {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  
  &-title {
    color: #07144e;
    margin: 100px auto;
    width: 1200px;
    text-align: auto;
    text-align: -webkit-auto;
  }
  &-content {
    padding-bottom: 100px;
    &-tab {
      width: 1200px;
      margin: 0px auto;
      display: flex;
      justify-content: space-around;
      ul {
        li {
          padding: 16px 25px;
          display: inline-flex;
          flex-direction: column;
          font-size: 13px;
          margin: 3px 10px;
          .tab-icon {
            font-size: 50px;
            padding-bottom: 10px;
          }
          &:hover {
            color: #166fde;
            box-sizing: content-box;
            border-bottom: 3px #166fde solid;
            margin-bottom: 0px;
            .tab-icon {
              color: #166fde;
            }
          }
        }
        [avtive] {
          box-sizing: content-box;
          border-bottom: 3px #166fde solid;
          margin-bottom: 0px;
        }
      }
    }
    &-details {
      height: 300px;
      margin: 0 auto;
      background: #f6f7fc;
      box-shadow: inset 0px 10px 10px -10px #ccc, inset 0px -10px 10px -10px #ccc;
      .details-item-group {
        width: 1200px;
        margin: 0 auto;
        padding: 25px 0;
        overflow: hidden;
        display: grid;
        row-gap: 20px;
        column-gap: 15px;
        justify-items: left;
        grid-template-columns: 390px 390px 390px;
        grid-template-rows: 120px 120px;
        .details-item {
          text-align: left;
          padding: 10px 20px;
          line-height: 2;
          font-size: 12px;
          .details-item-title {
            font-weight: 900;
            font-size: 14px;
            display: block;
          }
          .details-item-content {
            text-align: left;
          }
          &:hover {
              background: #fff;
            }
        }
      }
    }
  }
}
</style>