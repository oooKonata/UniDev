<script setup lang="ts">
import XtxSwiper from '@/components/XtxSwiper.vue'
import { getHomeBannerAPI } from '@/api/home'
import type { BannerItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

const bannerList = ref<BannerItem[]>([])
const getBannerData = async () => {
  const res = await getHomeBannerAPI(2)
  bannerList.value = res.result
}

onLoad(() => {
  getBannerData()
})
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
          v-for="(item, index) in 10"
          :key="item"
          :class="{ active: index === 0 }"
        >
          <text class="tag">居家</text>
        </view>
      </scroll-view>
      <view class="secondary">
        <XtxSwiper class="banner" :list="bannerList" />
        <view class="panel" v-for="item in 3" :key="item">
          <view class="title">
            <text class="name">宠物用品</text>
            <view class="more">
              <text>全部</text>
              <view class="icon-right"></view>
            </view>
          </view>
          <view class="card">
            <view class="goods" v-for="item in 4" :key="item">
              <image
                class="image"
                src="https://yanxuan-item.nosdn.127.net/674ec7a88de58a026304983dd049ea69.jpg"
                mode="aspectFill"
              />
              <view class="name">木天蓼逗猫棍</view>
              <view class="price">
                <text class="symbol">¥</text>
                <text class="amount">16.00</text>
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
    margin: 96rpx 0 116rpx;
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
      .banner {
        margin-top: 16rpx;
      }
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
              font-size: 24rpx;
              margin: 8rpx 0 4rpx;
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
