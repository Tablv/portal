<template>
  <ul class="menu-bar">
    <li
      class="menu-bar-item"
      @click="doClick(item)"
      v-for="item in menuList"
      :key="item.key"
    >
      {{item.name}}
    </li>
  </ul>
</template>

<script>

export default {
  name: 'menuBar',
  data() {
    return {
      menuList: [
        { key:'index', name: '首页' },
        { key:'product', name: '产品服务' },
        { key:'fdfdfdf', name: '解决方案' },
        { key:'fdfdfdfd', name: '云市场' },
        { key:'fdfdfd', name: '公司动态' },
        { key:'fdfdf', name: '招贤纳士' },
        { key:'fdfd', name: '关于我们' }
      ]
    }
  },
  methods: {
    doClick(route) {
      this.$router.push({name: route.key })
    }
  }
}
</script>