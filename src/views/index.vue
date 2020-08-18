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
    <div v-for="(itemList, listIndex) in cardlist" :key="listIndex">
      <div class="box-card-group">
        <el-card
          v-for="(item, index) in itemList"
          :class="{
            'box-card-hover': isHover && activeIndex === index && listIndex === activeListIndex,
            'box-card': true
          }"
          :key="item.id"
          @mouseenter.native="onmouseEnter(listIndex, index)"
          @mouseleave.native="onmouseleave(listIndex)"
        >
          <div style="margin-top: 50px;">
              <i :class="item.iconClass" class="box-card-font-icon"></i>
          </div>
          <div class="box-card-font">
            <h4>{{item.name}}</h4>
          </div>
        </el-card>
      </div>
      <!-- 卡片详情 -->
      <section
        ref="showDetails"
        class="test-show"
        @mouseenter="onmouseEnter(listIndex, activeIndex)"
        @mouseleave="onmouseleave(listIndex)"
      >
        <section class="details-title">
          <span class="details-title-text" v-html="detailsContext.name"></span>
          <br/>
          <el-button class="details-title-button" @click="handleClick" type="text">
            进入演示系统
            <i class="el-icon-arrow-right el-icon--right"></i>
            <i class="el-icon-arrow-right el-icon--right"></i>
          </el-button>
        </section>
        <!-- 详情 -->
        <section class="details-item-group" v-html="detailsContext.content">
        </section>
      </section>
    </div>
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
      // 卡片hover
      isHover: false,
      // clo
      activeListIndex: 0,
      // row
      activeIndex: 0,
      enterTimer: 0,
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
        this.cardlist = this.division(data.result, 3)
      }
    });
  },
  computed: {
    detailsContext() {
      return this.cardlist[this.activeListIndex][this.activeIndex];
    }
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

    handleClick() {
      let { url, code } = this.detailsContext;
      if (!url) return;
      const urlType = /^\/|http|https/i;
      const preflag = urlType.test(url);
      url = preflag ? url : ("//" + url);
      window.open(url, code);
    },
  
    /**
     * 鼠标进入
     */
    onmouseEnter(activeListIndex, index) {
      clearTimeout(this.leaveTimer);
      clearTimeout(this.enterTimer);
      this.enterTimer = setTimeout(() => {
        this.activeIndex = index;
        const beforeActiveListIndex = this.activeListIndex;
        this.activeListIndex = activeListIndex;
        // 上一个卡片
        this.$refs.showDetails[beforeActiveListIndex].classList.remove('hover-test-show');
        this.$refs.showDetails[beforeActiveListIndex].classList.add('test-show');
        this.isHover = true;
        // 当前卡片
        this.$refs.showDetails[activeListIndex].classList.remove('test-show');
        this.$refs.showDetails[activeListIndex].classList.add('hover-test-show');
        // 页面
        this.$refs.indexPage.classList.add('box-card-no-margin');
      }, 200);
    },

    /**
     * 鼠标离开
     */
    onmouseleave(activeListIndex) {
      clearTimeout(this.leaveTimer);
      clearTimeout(this.enterTimer);
      this.leaveTimer = setTimeout(() => {
        this.isHover = false;
        this.$refs.showDetails[activeListIndex].classList.remove('hover-test-show');
        this.$refs.showDetails[activeListIndex].classList.add('test-show');
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
    color: #07144e;
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
      float: left;
      display: block;
      width: 220px;
      height: 300px;
      transition: 1s;
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
        background-image: -webkit-linear-gradient(bottom, #515cb9, #f500297a);
      }
    }
  }

  .common-show {
    display: grid;
    transition: 1s;
    overflow: hidden;
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
        font-size: 20px;
        font-weight: bold;
        display: inline-block;
        cursor: default;
      }
      &-button {
        margin: 30px;
        min-width: 130px;
        border-radius: 5px;
        color: #07144e;
        background: #fff;
        font-weight: 600;
        &:hover {
          color: #fff;
          background: #07144e;
        }
        .el-icon--right {
          margin-left: -5px;
          font-size: 12px;
        }
      }
    }
    .details-item-group {
      width: 100%;
      overflow: auto;
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
          background: #c4fcff3d
        }
      }
    }
  }

  .hover-test-show {
    height: 222px;
    padding: 30px 18% !important;
    .common-show;
  }
  
  .test-show {
    height: 0px;
    padding: 0px 18% !important;
    .common-show;
  }
}
</style>