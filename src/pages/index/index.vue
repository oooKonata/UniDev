<template>
  <view class="viewport">
    <!-- 自定义导航栏 -->
    <CustomNavBar />
    <!-- 轮播图 -->
    <XtxSwiper :list="bannerList" />
    <!-- 分类面板 -->
    <CategoryPanel :list="categoryList" />
  </view>
</template>

<script setup lang="ts">
import CustomNavBar from '@/pages/index/components/CustomNavBar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import { getHomeBannerAPI, getHomeCategoryAPI } from '@/api/home'
import type { BannerItem, CategoryItem } from '@/types/home'
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

// 页面加载完成后执行
onLoad(() => {
  getHomeBannerData(), getHomeCategoryData()
})
</script>

<style scoped lang="scss"></style>

<!-- 
  1、style 标签里使用 page 元素选择器不能写 scoped 
  2、为什么 pages 配置项里的 style 里的 backgroundColor 设置颜色不生效
-->
<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
