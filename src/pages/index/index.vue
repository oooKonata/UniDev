<template>
  <!-- 自定义导航栏 -->
  <CustomNavBar />
  <scroll-view class="srcoll-view" @scrolltolower="onScrolltolower" scroll-y>
    <!-- 轮播图 -->
    <XtxSwiper :list="bannerList" />
    <!-- 分类面板 -->
    <CategoryPanel :list="categoryList" />
    <!-- 热门推荐 -->
    <HotPanel :list="hotList" />
    <!-- 猜你喜欢 -->
    <XtxGuess ref="guessRef" />
  </scroll-view>
</template>

<script setup lang="ts">
import CustomNavBar from '@/pages/index/components/CustomNavBar.vue'
import XtxSwiper from '@/components/XtxSwiper.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import XtxGuess from '@/components/XtxGuess.vue'
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

// 获取猜你喜欢组件实例
const guessRef = ref<InstanceType<typeof XtxGuess>>()
// 页面加载完成后执行
onLoad(() => {
  getHomeBannerData(), getHomeCategoryData(), getHomeHotData()
})

// 滚动触底
const onScrolltolower = () => {
  guessRef.value?.getHomeGuessData()
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
