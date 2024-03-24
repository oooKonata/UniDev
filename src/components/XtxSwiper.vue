<template>
  <view class="carousel">
    <swiper
      :circular="true"
      :autoplay="true"
      :interval="3000"
      @change="onchange"
      class="swiper"
    >
      <swiper-item v-for="item in list" :key="item.id">
        <navigator
          url="/pages/index/index"
          hover-class="none"
          class="navigator"
        >
          <image :src="item.imgUrl" mode="aspectFill" class="image" />
        </navigator>
      </swiper-item>
    </swiper>
    <!-- 轮播指示器 -->
    <view class="indicator">
      <text
        v-for="(item, index) in list"
        :key="item.id"
        class="dot"
        :class="{ active: index === activeIndex }"
      ></text>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { BannerItem } from '@/types/home'
import { ref } from 'vue'

// banner索引
const activeIndex = ref(0)
// 轮播索引
const onchange: UniHelper.SwiperOnChange = (e) => {
  activeIndex.value = e.detail!.current
}
// 定义props接收list
const props = defineProps<{
  list: BannerItem[]
}>()
</script>

<style scoped lang="scss">
.carousel {
  padding-top: 16rpx;
  height: 296rpx;
  position: relative;
  overflow: hidden;
  .swiper {
    height: 100%;
  }
  .indicator {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 16rpx;
    display: flex;
    justify-content: center;
    .dot {
      width: 12rpx;
      height: 12rpx;
      border-radius: 6rpx;
      margin: 0 4rpx;
      background-color: rgba(255, 255, 255, 0.4);
    }
    .active {
      width: 24rpx;
      background-color: #fff;
    }
  }
  .navigator {
    height: 100%;
    padding: 0 16rpx;
  }
  .image {
    border-radius: 16rpx;
  }
}
</style>
