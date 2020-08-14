<template>
  <ul class="menu-bar">
    <li
      class="menu-bar-item"
      @click="doClick(item)"
      v-for="item in menuList"
      :key="item.code"
    >
      <router-link :to="item.url" >{{item.name}}</router-link>
      <template>
        <div class="sub-menu" v-if="item.children">
          <ul class="sub-menu-ul">
            <li
              class="sub-menu-ul-li"
              @click="doClick(item)"
              v-for="childItem in item.children"
              :key="childItem.code"
            >
              <router-link :to="childItem.url" >{{childItem.name}}</router-link>
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
      menuList: []
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
      // 临时解决方法
      if (route.code === 'HOMEPAGE') {
        this.$router.push({path: '/index' })
      } else {
        this.$router.push({path: route.url })
      }
    }
  }
}
</script>

<style lang="less">
  .menu-bar-item:hover > .sub-menu {
    display: block;
  }
  .sub-menu {
    display: none;
    text-align: center;
    background: rgb(240, 240, 240);
    box-shadow: 8px 8px 14px -18px #3492ff;
    .sub-menu-ul {
      list-style: none;
      padding: 10px 0;
      a {
        color: #000 !important;
      }
      &-li {
        font-size: 14px;
        line-height: 40px;
        &:hover {
          background: #166df7;
        }
      }
    }
  }
</style>