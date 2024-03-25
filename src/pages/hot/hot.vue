<template>
  <view class="viewport">
    <!-- 推荐封面图 -->
    <view class="cover">
      <image
        class="image"
        src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-20/84abb5b1-8344-49ae-afc1-9cb932f3d593.jpg"
        mode="aspectFill"
      />
    </view>
    <!-- 推荐选项 -->
    <view class="tabs">
      <text class="text active">抢先尝鲜</text>
      <text class="text">新品预告</text>
    </view>
    <!-- 推荐列表 -->
    <scroll-view scroll-y class="scroll-view">
      <view class="goods">
        <navigator
          class="navigator"
          url="/pages/"
          v-for="goods in 10"
          :key="goods"
        >
          <image
            class="thumb"
            src="https://yanxuan-item.nosdn.127.net/5e7864647286c7447eeee7f0025f8c11.png"
          />
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">29.90</text>
          </view>
        </navigator>
      </view>
      <view class="loading-text">正在加载...</view>
    </scroll-view>
  </view>
</template>

<script setup lang="ts"></script>

<style lang="scss">
page {
  background-color: #f5f5f5;
  // height: 100%;
}
.viewport {
  .cover {
    margin: 16rpx;
    height: 225rpx;
    .image {
      border-radius: 16rpx;
    }
  }
}
</style>
