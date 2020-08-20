<template>
  <div class="index-page" ref="indexPage">
    <!-- 轮播图 -->
    <el-carousel  height="425px" class="carousel">
      <el-carousel-item v-for="item in imgList" :key="item.code">
        <img v-bind:src="item.url" width="100%" height="425px">
      </el-carousel-item>
    </el-carousel>
    

    <section class="title-content">
      <h1>
        安全、稳定、可信赖的 BI 软件
      </h1>
      <p>
        新一代自助式数据分析的 BI 软件， 为客户提供安全可靠的全流程服务
      </p>
    </section>
    
    <!-- 卡片 -->
    <section class="box-card-group">
      <div
        v-for="(item) in cardlist"
        class="box-card"
        :key="item.id"
      >
        <i :class="item.iconClass" class="box-card-font-icon"></i>
        <h4 class="box-card-font">{{item.name}}</h4>
        <el-button class="box-card-button" @click="handleClick($event, item)">进入演示系统</el-button>
      </div>
    </section>
  </div>
</template>

<script>
import { loadImg, loadCardList } from '@/API/indexPage.js'

export default {
  name: 'index',
  data() {
    return {
      imgList: [],
      cardlist: []
    }
  },
  mounted() {
    loadImg().then(data => {
      if (data.success) {
        this.imgList = data.result
      }
    });
    loadCardList().then(data => {
      if (data.success) {
        this.cardlist = data.result.splice(0, 4)
      }
    });
  },
  methods: {
    handleClick(event, item) {
      let { content, id } = item;
      this.$router.push({path: `productDetail/${id}`, params: { content }})
      // if (!url) return;
      // const urlType = /^\/|http|https/i;
      // const preflag = urlType.test(url);
      // url = preflag ? url : ("//" + url);
      // window.open(url, code);
    }
  }
}
</script>
<style lang="less">
.colorGroup() {
  background-image: linear-gradient(0deg, #515cb9, #07144e);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.index-page {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .carousel {
    background: url("../../assets/bg.png");
  }
  .title-content {
    color: #07144e;
    margin: 100px;
  }
  .box-card-group {
    width: 1200px;
    display: flex;
    margin: 0 auto;
    margin-bottom: 100px;
    flex-wrap: nowrap;
    justify-content: space-between;
    .box-card {
      display: flex;
      flex: 1;
      height: 320px;
      max-width: 220px;
      min-width: 200px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 30px;
      transition: 0.3s;
      border-radius: 16px;
      transform: scale(1);
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.05);
     
      &:hover {
        background-image: linear-gradient(0deg, #4c9cff, #166fde);
        transform: scale(1.1);
        .box-card-button {
          display: block;
          background-image: linear-gradient(0deg, #ffffff);
        }
        .box-card-font {
          background-image: linear-gradient(0deg, #ffffff);
        }
        .box-card-font-icon {
          background-image: linear-gradient(0deg, #ffffff);
        }
      }
      &-font {
        .colorGroup();
      }
      
      &-button {
        position: absolute;
        display: none;
        border-radius: 0;
        z-index: 100;
        bottom: 50px;
        border: none;
        font-weight: 900;
      }
      &-font-icon {
        .colorGroup();
        font-size: 80px;
        background-image: linear-gradient(0deg, #0a58b9, #4c22f194);
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .index-page .box-card-group {
    width: 100%;
  }
}
</style>