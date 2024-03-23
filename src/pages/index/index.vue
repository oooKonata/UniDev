<template>
  <view class="viewport">
    <!-- 自定义导航栏 -->
    <CustomNavBar />
    <!-- 轮播图 -->
    <XtxSwiper :list="bannerList" />
    <!-- 分类面板 -->
    <CategoryPanel />
  </view>
</template>

<script setup lang="ts">
import CustomNavBar from '@/pages/index/components/CustomNavBar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import { getHomeBannerAPI } from '@/api/home'
import type { BannerItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

// 获取banner列表信息
const bannerList = ref<BannerItem[]>([])
// 调用获取首页banner的API
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}
// 页面加载完成后执行
onLoad(() => {
  getHomeBannerData()
})
</script>

<style scoped lang="scss"></style>

<!--  -->
<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
