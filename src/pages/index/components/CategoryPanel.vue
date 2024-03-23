<template>
  <!-- 首页分类 -->
  <view class="category">
    <navigator
      class="category-item"
      url="/pages/index/index"
      hover-class="none"
      v-for="item in list"
      :key="item.id"
    >
      <image class="icon" :src="item.icon" />
      <text class="text">{{ item.name }}</text>
    </navigator>
  </view>
</template>

<script setup lang="ts">
import type { CategoryItem } from '@/types/home'

defineProps<{
  list: CategoryItem[]
}>()
</script>

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
