<script setup lang="ts">
import type { CategoryItem } from '@/types/home'

defineProps<{
  list: CategoryItem[]
}>()
</script>

<template>
  <view class="category">
    <view class="category-item" v-for="item in list" :key="item.id">
      <image class="icon" :src="item.icon" />
      <text class="text">{{ item.name }}</text>
    </view>
  </view>
</template>

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
    margin-bottom: 16rpx;
    &:nth-last-child(-n + 5) {
      margin-bottom: 0;
    }
    .icon {
      width: 96rpx;
      height: 96rpx;
      background-size: cover;
    }
    .text {
      font-size: 26rpx;
      color: $n-60;
    }
  }
}
</style>
