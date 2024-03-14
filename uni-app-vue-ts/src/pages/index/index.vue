<template>
  <view class="content">
    <CustomNavBar />
  </view>
</template>

<script setup lang="ts">
  import CustomNavBar from './components/CustomNavBar.vue'
  import { ref } from 'vue'
  const title = ref('Hello')
</script>

<style scoped lang="scss">
  .content {
    background-color: #f5f5f5;
    height: 100vh;
  }
</style>
