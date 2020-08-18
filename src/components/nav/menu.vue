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
      <template>
        <div class="sub-menu" v-if="item.children">
          <ul class="sub-menu-ul">
            <li
              class="sub-menu-ul-li"
              v-for="childItem in item.children"
              :key="childItem.code"
            >
              <span class="menu-text" @click.self="doClick(childItem)">{{childItem.name}}</span>
              <template>
                <div class="sub-menu-to" v-if="childItem.children">
                  <ul class="sub-menu-ul-to">
                    <li
                      class="sub-menu-ul-li-to"
                      v-for="childItemto in childItem.children"
                      :key="childItemto.code"
                    >
                      <span class="menu-text" @click.self="doClick(childItemto)">{{childItemto.name}}</span>
                    </li>
                  </ul>
                </div>
              </template>
            </li>
          </ul>
        </div>
      </template>
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
    padding: 0 20px;
  }
  .sub-menu {
    display: none;
    position: absolute;
    text-align: left;
    background: #d2d2d2;
    white-space: nowrap;
    box-shadow: 8px 8px 14px -18px #3492ff;
    .sub-menu-ul {
      list-style: none;
      padding: 10px 0;
      color: #000;
      &-li {
        font-size: 16px;
        line-height: 40px;
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
        top: 0;
        left: 100%;
        min-width: 100%;
        white-space: nowrap;
        height: 100%;
        text-align: left;
        position: absolute;
        .sub-menu-ul-to {
          color: #000;
          padding: 10px 0;
          list-style: none;
          background: rgb(240, 240, 240);
          .sub-menu-ul-li-to {
            font-size: 16px;
            line-height: 40px;
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