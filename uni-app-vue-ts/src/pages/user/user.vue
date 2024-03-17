<template>
  <view class="content">
    <CustomNavBar title="我的" type="back" />
  </view>
</template>

<script setup lang="ts">
  import CustomNavBar from '@/components/CustomNavBar.vue'
</script>

<style scoped lang="scss">
  .content {
    background-color: #f5f5f5;
    height: 100vh;
  }
</style>
