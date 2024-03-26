<template>
  <!-- 热门推荐 -->
  <view class="panel hot">
    <navigator
      class="item"
      :url="`/pages/hot/hot?type=${item.type}`"
      v-for="item in list"
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
    </navigator>
  </view>
</template>

<script setup lang="ts">
import type { HotItem } from '@/types/home'

defineProps<{
  list: HotItem[]
}>()
</script>

<style scoped lang="scss">
.hot {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 16rpx;
  margin-top: 16rpx;
  .item {
    width: 351rpx;
    background-color: #fff;
    border-radius: 16rpx;
    padding: 16rpx 24rpx 24rpx;
    box-sizing: border-box;
    margin-bottom: 16rpx;
    .title {
      display: flex;
      align-items: center;
      font-size: 32rpx;
      color: #333;

      .title-desc {
        font-size: 24rpx;
        color: #999;
        margin-left: 16rpx;
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
