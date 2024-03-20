<template>
  <!-- 导航栏容器 -->
  <view
    class="navbar"
    :style="{ paddingTop: safeAreaInsets!.top + 'px', height: customNavBarHeight + 'px' }"
  >
    <!-- 导航栏左边 -->
    <view class="left">
      <!-- 左侧为定位 -->
      <view class="position" v-if="isShowPosition">
        <text class="city">武汉市</text>
        <image class="icon-drop" src="@/static/images/arrow_down.png" />
      </view>
      <!-- 左侧为返回 -->
      <view class="back" v-if="isShowBack">
        <image src="@/static/images/back_black.png" />
      </view>
    </view>
    <!-- 导航栏中间 -->
    <view class="center">
      <text class="title">{{ navTitle }}</text>
    </view>
    <!-- 导航栏右边 -->
    <view class="right"> </view>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const props = defineProps(['title', 'type'])
console.log(props)

const navTitle = ref('')
const isShowPosition = ref(true)
const isShowBack = ref(false)

onMounted(() => {
  navTitle.value = props.title
  if (props.type == 'position') {
    isShowPosition.value = true
    isShowBack.value = false
    console.log('111')
  } else if (props.type == 'back') {
    isShowPosition.value = false
    isShowBack.value = true
    console.log('222')
  } else {
    isShowBack.value = false
    isShowPosition.value = false
    console.log('333')
  }
})

// 获取屏幕安全区域距离(状态栏高度)
const { safeAreaInsets } = uni.getSystemInfoSync()
// 获取胶囊位置信息
const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
// 导航栏高度 = 胶囊高度 + (胶囊顶部距离 - 状态栏高度) * 2
const customNavBarHeight = menuButtonInfo.height + (menuButtonInfo.top - safeAreaInsets!.top) * 2
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: center;
  background-color: cyan;
  .left {
    flex: 1;
    display: flex;
    align-items: center;
    .position {
      display: flex;
      align-items: center;
      .city {
        font-size: 30rpx;
        color: #333;
        margin-left: 32rpx;
      }
      .icon-drop {
        width: 16rpx;
        height: 16rpx;
        margin-left: 4rpx;
      }
    }
    .back {
      width: 48rpx;
      height: 48rpx;
      margin-left: 16rpx;
    }
  }
  .center {
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32rpx;
    color: #333;
  }
  .right {
    flex: 1;
  }
}
</style>
