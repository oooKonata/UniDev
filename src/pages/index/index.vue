<template>
  <!-- 自定义导航栏 -->
  <CustomNavBar />
  <scroll-view
    class="srcoll-view"
    refresher-enabled
    @refresherrefresh="onRefresherrefresh"
    :refresher-triggered="isTriggered"
    @scrolltolower="onScrolltolower"
    scroll-y
  >
    <!-- 骨架屏 -->
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <!-- 轮播图 -->
      <XtxSwiper :list="bannerList" />
      <!-- 分类面板 -->
      <CategoryPanel :list="categoryList" />
      <!-- 热门推荐 -->
      <HotPanel :list="hotList" />
      <!-- 猜你喜欢 -->
      <XtxGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>

<script setup lang="ts">
import CustomNavBar from '@/pages/index/components/CustomNavBar.vue'
import XtxSwiper from '@/components/XtxSwiper.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import XtxGuess from '@/components/XtxGuess.vue'
import PageSkeleton from './components/PageSkeleton.vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/api/home'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

// 获取banner列表信息
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

// 获取前台分类数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

// 获取热门推荐数据
const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}

// 加载中标记，标记为 true 时加载骨架屏
const isLoading = ref(true)

// 页面加载完成后执行
onLoad(async () => {
  // 显示骨架屏
  isLoading.value = true
  // 加载首页数据
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHomeHotData(),
  ])
  isLoading.value = false
})

// 获取猜你喜欢组件实例
const guessRef = ref<InstanceType<typeof XtxGuess>>()

// 滚动触底
const onScrolltolower = () => {
  guessRef.value?.getHomeGuessData()
}

// 当前下拉状态
const isTriggered = ref(false)
// 自定义刷新被触发，重新加载数据
const onRefresherrefresh = async () => {
  // 开始动画
  isTriggered.value = true
  // 加载数据之前，重置“猜你喜欢”数据
  guessRef.value?.resetData()
  // 加载数据：依次加载完，全部加载时间较长
  // await getHomeBannerData()
  // await getHomeCategoryData()
  // await getHomeHotData()
  // 最优解：promise.all：同时加载，全部加载完再继续执行下文，加载时间较短
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHomeHotData(),
    // 加载“猜你喜欢”数据
    guessRef.value?.getHomeGuessData(),
  ])
  // 数据加载完毕，关闭动画
  isTriggered.value = false
}
</script>

<!-- 
  1、style 标签里使用 page 元素选择器不能写 scoped 
  2、为什么 pages 配置项里的 style 里的 backgroundColor 设置颜色不生效
-->
<style lang="scss">
page {
  background-color: #f5f5f5;
  height: 100%;
  display: flex;
  flex-direction: column;
  .srcoll-view {
    height: 0rpx;
    flex: 1;
  }
}
</style>
