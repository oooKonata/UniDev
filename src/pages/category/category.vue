<script setup lang="ts">
import XtxSwiper from '@/components/XtxSwiper.vue'
import { getHomeBannerAPI } from '@/api/home'
import { getCategoryTopAPI } from '@/api/category'
import type { BannerItem, CategoryItem } from '@/types/home'
import type { CategoryTopItem } from '@/types/category'
import { onLoad } from '@dcloudio/uni-app'
import { ref, computed } from 'vue'
import Goods from '../goods/goods.vue'

const bannerList = ref<BannerItem[]>([])
const getBannerData = async () => {
  const res = await getHomeBannerAPI(2)
  bannerList.value = res.result
}

const categoryList = ref<CategoryTopItem[]>([])
const activeIndex = ref(0)
const getCategoryTopData = async () => {
  const res = await getCategoryTopAPI()
  categoryList.value = res.result
}

const isLoading = ref(true)

onLoad(async () => {
  await Promise.all([getBannerData(), getCategoryTopData()])
  isLoading.value = false
})

const subCategoryList = computed(() => {
  return categoryList.value[activeIndex.value]?.children || []
})

const handleClick = (id: string) => {
  uni.navigateTo({ url: `/pages/goods/goods?id=${id}` })
  console.log('id', id)
}
</script>

<template>
  <view class="page">
    <view class="search">
      <view class="input">
        <text class="icon-search">鞋子</text>
      </view>
    </view>
    <view class="categories">
      <scroll-view class="primary" scroll-y>
        <view
          class="item"
          v-for="(item, index) in categoryList"
          :key="item.id"
          :class="{ active: index === activeIndex }"
          @click="activeIndex = index"
        >
          <text class="tag">{{ item.name }}</text>
        </view>
      </scroll-view>
      <view class="secondary">
        <XtxSwiper class="banner" :list="bannerList" />
        <view class="panel" v-for="item in subCategoryList" :key="item.id">
          <view class="title">
            <text class="name">{{ item.name }}</text>
            <view class="more">
              <text>全部</text>
              <view class="icon-right"></view>
            </view>
          </view>
          <view class="card">
            <view
              class="goods"
              v-for="goods in item.goods"
              :key="goods.id"
              @click="handleClick(goods.id)"
            >
              <image class="image" :src="goods.picture" mode="aspectFill" />
              <view class="name">{{ Goods.name }}</view>
              <view class="price">
                <text class="symbol">¥</text>
                <text class="amount">{{ goods.price }}</text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding-bottom: var(--window-bottom);
  .search {
    z-index: 9;
    background-color: $n-bgColor;
    padding: 16rpx 24rpx;
    position: fixed;
    width: 100%;
    .input {
      display: flex;
      align-items: center;
      height: 64rpx;
      padding: 0 12rpx 0 24rpx;
      color: $n-40;
      font-size: 28rpx;
      border-radius: 32rpx;
      background-color: #fff;
      .icon-search {
        &::before {
          margin-right: 12rpx;
        }
      }
    }
  }
  .categories {
    margin: 96rpx 0 16rpx;
    .primary {
      position: fixed;
      width: 180rpx;
      height: 100%;
      background-color: $n-bgColor;
      flex: none;
      .item {
        height: 96rpx;
        font-size: 26rpx;
        color: $n-60;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
      }
      .active {
        color: $n-theme;
        font-size: 28rpx;
        font-weight: bold;
        &::before {
          content: '';
          position: absolute;
          left: 0rpx;
          width: 6rpx;
          height: 40rpx;
          border-radius: 3rpx;
          background-color: $n-theme;
        }
      }
    }
    .secondary {
      background-color: #fff;
      width: 570rpx;
      margin-left: auto;
      .panel {
        .title {
          display: flex;
          font-size: 28rpx;
          color: $n-80;
          justify-content: space-between;
          align-items: center;
          padding: 24rpx 16rpx;
          .more {
            display: flex;
            align-items: center;
            font-size: 24rpx;
            color: $n-40;
          }
        }
        .card {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 0 16rpx;
          .goods {
            margin-bottom: 16rpx;
            .image {
              width: 168rpx;
              height: 168rpx;
              border-radius: 16rpx;
            }
            .name {
              font-size: 22rpx;
              width: 168rpx;
              margin: 12rpx 0 4rpx;
              /* 块容器中的内容限制为指定的行数 */
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
              /* 超过两行裁剪并显示省略号 */
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .price {
              color: #cf4444;
              font-size: 24rpx;
            }
            &:nth-last-child(-n + 3) {
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }
}
</style>
