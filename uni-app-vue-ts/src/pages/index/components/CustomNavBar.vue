<template>
  <view
    class="navbar"
    :style="{ paddingTop: safeAreaInsets!.top + 'px', height:customNavBarHeight+'px' }"
  >
    <text class="title">星和动力</text>
  </view>
</template>

<script setup lang="ts">
  // 获取屏幕安全区域距离(状态栏高度)
  const { safeAreaInsets } = uni.getSystemInfoSync()
  // 获取胶囊位置信息
  const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
  // 导航栏高度 = 胶囊高度 + (胶囊顶部距离 - 状态栏高度) * 2
  const customNavBarHeight =
    menuButtonInfo.height + (menuButtonInfo.top - safeAreaInsets!.top) * 2
</script>

<style scoped lang="scss">
  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: cyan;
    font-size: 32rpx;
    color: #333;
  }
</style>
