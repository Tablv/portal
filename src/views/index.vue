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
    <div class="box-card-group">
      <el-card
        v-for="(item, index) in cardlist" 
        :class="{
          'box-card-hover': isHover && activeIndex === index,
          'box-card': true
        }"
        :key="item.id"
        @mouseenter.native="onmouseEnter(index)"
        @mouseleave.native="onmouseleave($event)"
      >
        <div style="margin-top: 50px;">
            <i :class="item.iconClass" class="box-card-font-icon"></i>
        </div>
        <div class="box-card-font">
          <h4>{{item.name}}</h4>
        </div>
      </el-card>
    </div>
    <!-- 详情 -->
    <section
      ref="showDetails"
      class="test-show"
      v-if="cardlist[activeIndex]"
      @mouseenter="onmouseEnter(activeIndex)"
      @mouseleave="onmouseleave(activeIndex)"
    >
      <section class="details-title">
        <span class="details-title-text">{{cardlist[activeIndex].name}}</span>
        <br/>
        <el-button class="details-title-button" @click="handleClick" type="text">
          more
          <i class="el-icon-arrow-right el-icon--right"></i>
          <i class="el-icon-arrow-right el-icon--right"></i>
        </el-button>
      </section>

      <!-- 详情 -->
      <section class="details-item-group">
        <div class="details-item"
          v-for="details in cardlist[activeIndex].contentList"
          :key="details.title"
        >
          <span class="details-item-title" v-html="details.title"></span>
          <p class="details-item-content" v-html="details.content"></p>
        </div>
      </section>
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
      cardlist: [],
      isHover: false,
      activeIndex: 0,
      leaveTimer: 0
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
        this.cardlist = data.result;
      }
    })
  },
  methods: {
    handleClick() {
      const { url, code } = this.cardlist[this.activeIndex];
      window.open(url, code);
    },
  
    /**
     * 鼠标进入
     */
    onmouseEnter(index) {
      clearTimeout(this.leaveTimer);
      this.isHover = true;
      this.$refs.showDetails.classList.remove('test-show');
      this.$refs.showDetails.classList.add('hover-test-show');
      this.$refs.indexPage.classList.add('box-card-no-margin');
      this.activeIndex = index;
    },

    /**
     * 鼠标离开
     */
    onmouseleave() {
      clearTimeout(this.leaveTimer);
      this.leaveTimer = setTimeout(() => {
        this.isHover = false;
        this.$refs.showDetails.classList.remove('hover-test-show');
        this.$refs.showDetails.classList.add('test-show');
        this.$refs.indexPage.classList.remove('box-card-no-margin');
      }, 200);
    }
  }
}
</script>
<style lang="less">
@keyframes nomyMagin {
  from {
    margin-bottom: 320px;
  }
  to {
    margin-bottom: 0px;
  }
}
.box-card-no-margin {
  animation: nomyMagin 1s forwards normal;
}
.colorGroup() {
  background-image: -webkit-linear-gradient(bottom, #515cb9, #07144e);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.index-page {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 60px;

  .carousel {
    background: url("../assets/bg.png");
  }
  .title-content {
    margin: 100px;
  }

  .box-card-group {
    padding: 0 18%;
    padding-bottom: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .box-card-hover {
      transform: scale(1.1);
    }
    .box-card {
      flex: 1;
      float: left;
      display: block;
      max-width: 220px;
      height: 300px;
      transition: 0.1s;
      flex-wrap: nowrap;
      margin: 16px;
      border-radius: 16px;
      cursor: pointer;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.05);
      &:hover {
        transform: scale(1.1);
      }
      &-font {
        .colorGroup();
      }
      &-font-icon {
        font-size: 80px;
        .colorGroup();
      }
    }
  }

  .common-show {
    display: grid;
    transition: 1s;
    padding: 0px 18%;
    margin-top: 20px;
    row-gap: 20px;
    column-gap: 10px;
    justify-items: left;
    background: #f6f7fc;
    box-shadow: inset 0px 0px 15px #dddfe6;
    grid-template-columns: 400px auto;
    grid-template-rows: auto;
    .details-title {
      width: 300px;
      &-text {
        margin: 5px 0;
        font-weight: bold;
        display: inline-block;
        cursor: default;
      }
      &-button {
        padding: 3px;
        padding-left: 5px;
        margin: 10px;
        border-radius: 5px;
        color:rgb(109, 123, 134);
        background: #fff;
        box-shadow: inset 0px 0px 4px 0px #f5f5f5, 0px 0px 4px 0px #e4e2e2;
        &:hover {
          background:#c6d0d8;
          color: #fff;
        }
        .el-icon--right {
          margin-left: -5px;
          font-size: 12px;
        }
      }
    }
    .details-item-group {
      width: 100%;
      background: #d4d4d4;
      .details-item {
        padding: 10px 30px;
        overflow: hidden;
        text-align: left;
        line-height: 20px;
        font-size: 14px;
        border-radius: 2px;
        &-title {
          margin: 5px 0;
          font-weight: bold;
          display: inline-block;
          cursor: default;
        }
        &-content {
          margin: 2px 0;
          line-height: 20px;
          cursor: default;
        }
        &:hover {
          background: #e2e6f2;
        }
      }
    }
  }

  .hover-test-show {
    height: 222px;
    padding: 30px 18% !important;
    overflow: visible;
    .common-show;
  }
  
  .test-show {
    height: 0px;
    padding: 0px 18% !important;
    overflow: hidden;
    .common-show;
  }
}
</style>