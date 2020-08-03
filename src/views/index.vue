<template>
  <div class="index-page" ref="indexPage">
    <!-- 轮播图 -->
    <el-carousel indicator-position="outside" class="carousel" height="450px">
      <el-carousel-item v-for="item in imgList" :key="item.key">
        <img v-bind:src="item.src">
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
          'box-card-hover': clickFlag && activeIndex === index,
          'box-card': true
        }"
        :key="item.icon + 'fdfdfd'"
        @click.native="onclick(index)"
        @mouseenter.native="onmouseover(index)"
        @mouseleave.native="onmouseleavr($event)"
      >
        <div style="margin-top: 50px;">
            <i :class="item.icon" class="box-card-font-icon"></i>
        </div>
        <div class="box-card-font">
          <h4>{{item.name}}</h4>
        </div>
      </el-card>
    </div>
    <!-- 详情 -->
    <section ref="showDetails" class="test-show">
      <div>
        <h3>{{ cardlist[activeIndex].name }}</h3>
        <p>{{ cardlist[activeIndex].messge }}</p>
      </div>
      <div style="background: #e2e6f2">
        <h3>第一个标题</h3>
        <p>介绍巴拉巴拉巴拉巴</p>
      </div>
      <div style="background: #e2e6f2">
        <h3>第一个标题</h3>
        <p>介绍巴拉巴拉巴拉巴</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      imgList: [
        { src: "./banner.png", key: "img1" },
        { src: "./banner2.png", key: "img2" },
      ],
      cardlist: [
        { icon: "el-icon-s-data", name: "BI 分析", messge: "完美的数据分析工具"},
        { icon: "el-icon-s-order", name: "工单管理", messge: "全流程管理您的工单" },
        { icon: "el-icon-s-check", name: "签章处理", messge: "全流程管理您的签章"},
        { icon: "el-icon-camera-solid", name: "生产监控", messge: "实现全流程安全生产"}
      ],
      activeIndex: 0,
      clickFlag: false
    }
  },
  methods: {
    onmouseover(index) {
      this.handleDown(index, false);
    },
    onmouseleavr() {
      if (this.clickFlag) return;
      this.$refs.showDetails.classList.remove('hover-test-show')
      this.$refs.showDetails.classList.add('test-show')
      this.$refs.indexPage.classList.remove('box-card-no-margin')
    },
    onclick(index) {
      this.handleDown(index, true);
    },
    handleDown(index, flag) {
      this.clickFlag = flag;
      this.$refs.showDetails.classList.remove('test-show')
      this.$refs.showDetails.classList.add('hover-test-show')
      this.$refs.indexPage.classList.add('box-card-no-margin')
      this.activeIndex = index;
    }
  }
}
</script>
<style lang="less">
@keyframes nomyMagin {
  from {
    margin-bottom: 300px;
  }
  to {
    margin-bottom: -50px;
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
  overflow: hidden;
  margin-bottom: 270px;

  .carousel {
    background: url("../assets/bg.png");
  }
  .title-content {
    margin: 100px;
  }

  .box-card-group {
    padding: 0 200px;
    padding-bottom: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .box-card-hover {
      transform: scale(1.1);
    }
    .box-card {
      flex: 1 0;
      margin: 10px;
      margin-bottom: 16px;
      max-width: 250px;
      min-width: 200px;
      height: 300px;
      float: left;
      display: block;
      transition: 0.1s;
      cursor: pointer;
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

  .hover-test-show {
    padding: 0 200px;
    margin-top: 20px;
    padding-top: 20px;
    height: 270px;
    display: grid;
    background: #f6f7fc;
    box-shadow: inset 0px 0px 15px #dddfe6;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto;
    overflow: visible;
    transition: 1s;
  }

  .test-show {
    float: left;
    padding: 0 200px;
    margin-top: 20px;
    z-index: 9999px;
    position: absolute;
    left: 0;
    right: 0;
    height: 0px;
    overflow: hidden;
  }
}
</style>