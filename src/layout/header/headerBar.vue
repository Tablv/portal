<template>
<keep-alive>
  <nav-bar></nav-bar>
</keep-alive>
</template>

<script>

import navBar from '@/components/nav/index.vue'

export default {
  name: 'headerBar',
  components: {
    navBar
  }
}
</script>