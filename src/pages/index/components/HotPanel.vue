<script setup lang="ts">
import type { HotItem } from '@/types/home'

const props = defineProps<{
  list: HotItem[]
}>()

const handelClick = (index: number) => {
  uni.navigateTo({ url: '/pages/hot/hot?type=' + props.list[index].type })
}
</script>

<template>
  <view class="hot-panel">
    <view
      class="item"
      @click="handelClick(index)"
      v-for="(item, index) in list"
      :key="item.id"
    >
      <view class="title">
        <text class="title-text">{{ item.title }}</text>
        <text class="title-desc">{{ item.alt }}</text>
      </view>
      <view class="cards">
        <view v-for="src in item.pictures" :key="src">
          <image class="image" :src="src" mode="aspectFit" />
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.hot-panel {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 16rpx;
  margin-top: 32rpx;
  .item {
    width: 351rpx;
    background-color: #fff;
    border-radius: 16rpx;
    padding: 16rpx 24rpx 24rpx;
    box-sizing: border-box;
    margin-bottom: 16rpx;
    &:nth-last-child(-n + 2) {
      margin-bottom: 0;
    }
    .title {
      display: flex;
      align-items: center;
      font-size: 30rpx;
      color: $n-80;
      .title-desc {
        font-size: 24rpx;
        color: $n-40;
        margin-left: 12rpx;
      }
    }
    .cards {
      display: flex;
      justify-content: space-between;
      margin-top: 16rpx;
      .image {
        width: 142rpx;
        height: 142rpx;
        border-radius: 16rpx;
      }
    }
  }
}
</style>
