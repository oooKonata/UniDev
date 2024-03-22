<template>
  <view class="carousel">
    <swiper
      :circular="true"
      :autoplay="false"
      :interval="3000"
      @change="onchange"
    >
      <swiper-item>
        <navigator
          url="/pages/index/index"
          hover-class="none"
          class="navigator"
        >
          <image
            src="https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/slider_1.jpg"
            mode="aspectFill"
            class="image"
          />
        </navigator>
      </swiper-item>
      <swiper-item>
        <navigator
          url="/pages/index/index"
          hover-class="none"
          class="navigator"
        >
          <image
            src="https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/slider_2.jpg"
            mode="aspectFill"
            class="image"
          />
        </navigator>
      </swiper-item>
      <swiper-item>
        <navigator
          url="/pages/index/index"
          hover-class="none"
          class="navigator"
        >
          <image
            src="https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/slider_3.jpg"
            mode="aspectFill"
            class="image"
          />
        </navigator>
      </swiper-item>
    </swiper>
    <!-- 轮播指示器 -->
    <view class="indicator">
      <text
        v-for="(item, index) in 3"
        :key="item"
        class="dot"
        :class="{ active: index === activeIndex }"
      ></text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// banner索引
const activeIndex = ref(0)
// 轮播索引
const onchange: UniHelper.SwiperOnChange = (e) => {
  // console.log(e.detail.current)
  activeIndex.value = e.detail.current
}
</script>

<style scoped lang="scss">
.carousel {
  margin-top: 16rpx;
  height: 280rpx;
  position: relative;
  overflow: hidden;
  swiper {
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
  navigator {
    height: 100%;
    padding: 0 16rpx;
  }
  .image {
    border-radius: 16rpx;
  }
}
</style>
