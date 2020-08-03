<template>
  <ul class="menu-bar">
    <li
      class="menu-bar-item"
      @click="doClick(item)"
      v-for="item in menuList"
      :key="item.key"
      :active="item.key === activeKey"
    >
      {{item.name}}
      <template>
        <div class="sub-menu" v-show="item.submenu">
          <ul class="sub-menu-ul">
            <li class="sub-menu-ul-li">仪表盘</li>
            <li class="sub-menu-ul-li">故事板</li>
            <li class="sub-menu-ul-li">hello</li>
          </ul>
        </div>
      </template>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'menuBar',
  data() {
    return {
      menuList: [
        { key:'index', name: '首页', submenu: false },
        { key:'product', name: '产品服务', submenu: true },
        { key:'4041', name: '解决方案', submenu: true },
        { key:'4042', name: '云市场', submenu: true },
        { key:'4043', name: '公司动态', submenu: true },
        { key:'4045', name: '招贤纳士', submenu: false },
        { key:'4046', name: '关于我们', submenu: false }
      ]
    }
  },
  computed: {
    activeKey() {
      return this.$route.name;
    }
  },
  methods: {
    doClick(route) {
      this.$router.push({path: route.key })
    }
  }
}
</script>

<style lang="less">
  .menu-bar-item:hover > .sub-menu {
    display: block;
  }
  .sub-menu {
    background: #07144e;
    display: none;
    // border-radius: 0 0 5px 5px;
    border-radius: 5px;
    box-shadow: 8px 8px 14px -18px #3492ff;
    .sub-menu-ul {
      list-style: none;
      padding: 0;
      margin: 0;
      color: #fff;
      &-li {
        font-size: 12px;
        transform: scale(1);
        margin: 0;
        line-height: 40px;
        &:hover {
          transform: scale(1.1);
          color: #7db4f1;
          transition: 0.2s;
        }
      }
    }
  }
</style>