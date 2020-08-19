<template>
  <ul class="menu-bar">
    <li
      class="menu-bar-item"
      @click.self="doClick(item)"
      v-for="item in menuList"
      :key="item.code"
      :active="item.code === activeCode"
    >
      <span @click.self="doClick(item)">{{item.name}}</span>
      <div class="sub-menu" v-if="item.children && item.children.length">
        <ul class="sub-menu-ul">
          <li
            class="sub-menu-ul-li"
            v-for="childItem in item.children"
            :key="childItem.code"
          >
            <span class="menu-text" @click.self="doClick(childItem)">
              {{childItem.name}}
              <i class="el-icon-arrow-right el-icon--right" v-if="childItem.children && childItem.children.length"></i>
            </span>
            <div class="sub-menu-to" v-if="childItem.children && childItem.children.length">
              <ul class="sub-menu-ul-to">
                <li
                  class="sub-menu-ul-li-to"
                  v-for="childItemto in childItem.children"
                  :key="childItemto.code"
                >
                  <span @click.self="doClick(childItemto)">{{childItemto.name}}</span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script>
import { loadMenu } from '@/API/indexPage.js'

export default {
  name: 'menuBar',
  data() {
    return {
      menuList: [],
      activeCode: 'HOMEPAGE',
      targetType: {
        C: '_self',
        N: '_blank'
      }
    }
  },
  mounted() {
    if (this.menuList.length) return;
    loadMenu().then(data => {
      if (data.success) {
        this.menuList = data.result;
      }
    })
  },
  computed: {
    activeKey() {
      return this.$route.name;
    }
  },
  methods: {
    doClick(route) {
      const urlType = /^\/|http|https/i;
      const preflag = urlType.test(route.url);
      const targetType = this.targetType[route.popout];
      const url = preflag ? route.url : ("//" + route.url);
      window.open(url, targetType)
    }
  }
}
</script>

<style lang="less">
  .menu-bar-item:hover > .sub-menu {
    display: block;
  }
  .menu-text {
    display: inline-block;
    padding-right: 20px;
    .el-icon-arrow-right {
      line-height: 40px;
      position: absolute;
      right: 25px;
    }
  }
  .sub-menu {
    display: none;
    position: absolute;
    text-align: left;
    margin-left: -25px;
    min-width: 180px;
    padding-right: 5px;
    padding-top: 8px;
    white-space: nowrap;
    z-index: 9999px;
    .sub-menu-ul {
      list-style: none;
      padding: 10px 0;
      color: #3a3a3a;
      background: #fff;
      box-shadow: 0 3px 10px rgba(0,0,0,.1);
      &-li {
        font-size: 15px;
        line-height: 40px;
        padding: 0 25px;
        &:hover {
          color: #ffffff;
          background: #166df7;
          .sub-menu-to {
            display: block;
          }
        }
      }
      .sub-menu-to {
        display: none;
        top: 8px;
        left: 100%;
        height: 100%;
        min-width: 180px;
        white-space: nowrap;
        text-align: left;
        position: absolute;
        z-index: 9999px;
        .sub-menu-ul-to {
          color: #3a3a3a;
          padding: 10px 0;
          list-style: none;
          background: #fff;
          box-shadow: 0 3px 10px rgba(0,0,0,.1);
          .sub-menu-ul-li-to {
            font-size: 15px;
            line-height: 40px;
            padding: 0 25px;
            &:hover {
              color: #ffffff;
              background: #166df7;
            }
          }
        }
      }
    }
  }
</style>