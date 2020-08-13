<template>
  <div class="register-bar">
    <!-- <span class="register-button">注册</span> -->
    <span class="control-button" @click="handclick">控制台</span>
  </div>
</template>

<script>

export default {
  name: 'registerBar',
  methods: {
    handclick() {
      window.open("/manager")
    }
  }
}
</script>