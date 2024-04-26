<script setup lang="ts"></script>

<template>
  <view class="page">
    <view class="box">渐变边框</view>
    <view class="box1">内凹圆角</view>
  </view>
</template>

<style scoped lang="scss">
  .box {
    color: #333;
    margin: 32rpx 32rpx;
    border-radius: 24rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 320rpx;
    background-image: linear-gradient(to bottom, #fff1f1, #f5f5f5 100rpx),
      linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0) 280rpx);
    background-clip: padding-box, border-box;
    background-origin: border-box;
    border: 4rpx solid transparent;
  }
</style>
