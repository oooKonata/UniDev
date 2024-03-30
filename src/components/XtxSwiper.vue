<script setup lang="ts">
import type { BannerItem } from '@/types/home'
import { ref } from 'vue'

const activeIndex = ref(0)
const handleChange: UniHelper.SwiperOnChange = (e) => {
  activeIndex.value = e.detail!.current
}

const props = defineProps<{
  list: BannerItem[]
}>()
</script>

<template>
  <view class="container">
    <swiper class="swiper" autoplay circular @change="handleChange">
      <swiper-item v-for="item in list" :key="item.id">
        <image class="image" :src="item.imgUrl" mode="aspectFill" />
      </swiper-item>
    </swiper>
    <view class="indicator">
      <view
        class="dot"
        v-for="(item, index) in list"
        :key="item.id"
        :class="{ active: index === activeIndex }"
      ></view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.container {
  position: relative;
  .swiper {
    width: 100%;
    height: 240rpx;
    margin-top: 16rpx;
    .image {
      width: 718rpx;
      height: 100%;
      margin: 0 16rpx;
      border-radius: $n-radius;
    }
  }
  .indicator {
    display: flex;
    position: absolute;
    bottom: 16rpx;
    left: 50%;
    transform: translate(-50%);
    .dot {
      width: 12rpx;
      height: 12rpx;
      border-radius: 8rpx;
      background-color: red;
      margin: 0 4rpx;
      background-color: rgba(255, 255, 255, 0.5);
    }
    .active {
      background-color: rgba(255, 255, 255, 1);
    }
  }
}
</style>
