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
        <div class="sub-mune" v-show="item.subMune">
          <ul class="sub-mune-ul">
            <li class="sub-mune-ul-li">仪表盘</li>
            <li class="sub-mune-ul-li">故事板</li>
            <li class="sub-mune-ul-li">hello</li>
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
        { key:'index', name: '首页', subMune: false },
        { key:'product', name: '产品服务', subMune: true },
        { key:'4041', name: '解决方案', subMune: true },
        { key:'4042', name: '云市场', subMune: true },
        { key:'4043', name: '公司动态', subMune: true },
        { key:'4045', name: '招贤纳士', subMune: false },
        { key:'4046', name: '关于我们', subMune: false }
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
      this.$router.push({name: route.key })
    }
  }
}
</script>

<style lang="less">
  .menu-bar-item:hover > .sub-mune {
    display: block;
  }
  .sub-mune {
    background: #07144e;
    display: none;
    border-radius: 0 0 5px 5px;
    box-shadow: 8px 8px 14px -18px #a7bafd;
    padding-bottom: 16px;
    .sub-mune-ul {
      list-style: none;
      padding: 0;
      margin: 0;
      color: #fff;
      &-li {
        font-size: 14px;
        margin: 0;
        line-height: 40px;
        &:hover {
          font-size: 16px;
        }
      }
    }
  }
</style>