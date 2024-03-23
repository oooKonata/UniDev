<template>
  <view class="category">
    <navigator
      class="category-item"
      url="/pages/index/index"
      hover-class="none"
      v-for="item in 10"
      :key="item"
    >
      <image
        class="icon"
        src="https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/nav_icon_1.png"
      />
      <text class="text">居家</text>
    </navigator>
  </view>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.category {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 32rpx 0 0;
  .category-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150rpx;
    padding-bottom: 16rpx;
    .icon {
      width: 100rpx;
      height: 100rpx;
    }
    .text {
      font-size: 26rpx;
      color: #666;
    }
  }
}
</style>
