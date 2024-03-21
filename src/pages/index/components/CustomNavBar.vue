<template>
  <view class="navbar">
    <!-- logo -->
    <view class="logo">
      <image class="logo-image" src="@/static/images/logo.png" />
      <text class="logo-text">新鲜 · 亲民 · 快捷</text>
    </view>
    <!-- 搜索 -->
    <view class="search">
      <text class="icon-search">搜索商品</text>
      <text class="icon-scan"></text>
    </view>
  </view>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.navbar {
  background-image: url(@/static/images/navigator_bg.png);
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding-top: 88rpx;
  .logo {
    display: flex;
    height: 88rpx;
    align-items: center;
    padding-left: 24rpx;
    background-color: red;
    .logo-image {
      width: 166rpx;
      height: 38rpx;
    }
    .logo-text {
      flex: 1;
      background-color: blue;
      font-size: 26rpx;
      color: #fff;
      line-height: 28rpx;
      padding-left: 12rpx;
    }
  }
  .search {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64rpx;
    margin: 16rpx 20rpx;
    padding: 0 10rpx 0 26rpx;
    color: #fff;
    font-size: 28rpx;
    border-radius: 32rpx;
    background-color: rgba(255, 255, 255, 0.3);
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
