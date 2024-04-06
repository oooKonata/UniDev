<script setup lang="ts">
// 获取安全边距
const { safeAreaInsets } = uni.getSystemInfoSync()
// 获取小程序胶囊菜单位置信息：上边距 和 胶囊高度
// const { top, height } = uni.getMenuButtonBoundingClientRect()
// 计算导航栏高度，让胶囊菜单垂直居中导航栏
const navHeight = safeAreaInsets!.top + 44
// console.log(safeAreaInsets?.top, top, height, navHeight)
</script>

<template>
  <view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
    <!-- logo -->
    <view class="logo" :style="{ height: navHeight + 'px' }">
      <image class="logo-image" src="@/static/icons/logo.png" />
      <text class="logo-text">新鲜 · 亲民 · 快捷</text>
    </view>
    <!-- 搜索 -->
    <view class="search">
      <text class="icon-search">搜索商品</text>
      <text class="icon-scan"></text>
    </view>
  </view>
</template>

<style scoped lang="scss">
.navbar {
  background-image: url(@/static/icons/navigator_bg.png);
  background-size: cover;
  display: flex;
  flex-direction: column;
  .logo {
    display: flex;
    height: 44px;
    align-items: center;
    padding-left: 24rpx;
    .logo-image {
      width: 166rpx;
      height: 40rpx;
    }
    .logo-text {
      flex: 1;
      font-size: 28rpx;
      color: #fff;
      padding-left: 12rpx;
    }
  }
  .search {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64rpx;
    margin: 16rpx 24rpx;
    padding: 0 12rpx 0 24rpx;
    color: #fff;
    font-size: 28rpx;
    border-radius: 32rpx;
    background-color: rgba(255, 255, 255, 0.5);
    .icon-search {
      &::before {
        margin-right: 12rpx;
      }
    }
    .icon-scan {
      font-size: 30rpx;
      padding: 16rpx;
    }
  }
}
</style>
