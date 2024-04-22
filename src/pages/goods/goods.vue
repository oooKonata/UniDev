<script setup lang="ts">
import { ref } from 'vue'
import type { GoodsResult } from '@/types/goods'
import { getGoodsByIdAPI } from '@/api/goods'
import { onLoad } from '@dcloudio/uni-app'

const { safeAreaInsets } = uni.getSystemInfoSync()

const query = defineProps<{ id: string }>()

const goods = ref<GoodsResult>()
const getGoodsByIdData = async () => {
  const res = await getGoodsByIdAPI(query.id)
  goods.value = res.result
  console.log(goods.value)
}

onLoad(() => {
  getGoodsByIdData()
})
</script>

<template>
  <view class="page">
    <!-- 基本信息 -->
    <view class="goods">
      <!-- 商品主图 -->
      <view class="preview">
        <swiper class="swiper" autoplay circular>
          <swiper-item v-for="item in goods?.mainPictures" :key="item">
            <image class="image" :src="item" mode="aspectFill" />
          </swiper-item>
        </swiper>
        <!-- 主图顺序 -->
        <view class="indicator">
          <text class="current">1</text>
          <text class="split">/</text>
          <text class="total">5</text>
        </view>
      </view>
    </view>

    <!-- 商品简介 -->
    <view class="meta">
      <view class="price">
        <text class="symbol">¥</text>
        <text class="amount">{{ goods?.price }}</text>
      </view>
      <view class="title">
        <view class="name ellipsis">{{ goods?.name }}</view>
        <view class="desc">{{ goods?.desc }}</view>
      </view>
    </view>

    <!-- 操作面板 -->
    <view class="action">
      <view class="item arrow">
        <text class="label">选择</text>
        <text class="text ellipsis">请选择商品规格</text>
      </view>
      <view class="item arrow">
        <text class="label">送至</text>
        <text class="text ellipsis">请选择收获地址</text>
      </view>
      <view class="item arrow">
        <text class="label">服务</text>
        <text class="text ellipsis">无忧退 快速退款 免费包邮</text>
      </view>
    </view>

    <!-- 商品详情 -->
    <view class="detail">
      <view class="title">
        <text>详情</text>
      </view>
      <view class="content">
        <view class="properties">
          <!-- 属性详情 -->
          <view class="item" v-for="item in goods?.details.properties" :key="item.name">
            <text class="label">{{ item.name }}</text>
            <text class="value">{{ item.value }}</text>
          </view>
          <!-- 图片详情 -->
          <image
            class="image-detail"
            mode="widthFix"
            src="https://yanxuan-item.nosdn.127.net/a8d266886d31f6eb0d7333c815769305.jpg"
          ></image>
          <image
            class="image-detail"
            mode="widthFix"
            src="https://yanxuan-item.nosdn.127.net/a9bee1cb53d72e6cdcda210071cbd46a.jpg"
          ></image>
        </view>

        <!-- 同类推荐 -->
        <view class="similar" :style="{ paddingBottom: safeAreaInsets!.bottom + 50 + 'px' }">
          <view class="title">
            <text>同类推荐</text>
          </view>
          <view class="card">
            <view class="goods" v-for="item in goods?.similarProducts" :key="item.id">
              <image class="image" mode="aspectFill" :src="item.picture" />
              <view class="name ellipsis">{{ item.name }}</view>
              <view class="price">
                <text class="symbol">¥</text>
                <text class="number">{{ item.price }}</text>
              </view>
            </view>
          </view>
        </view>
      </view>

      <!-- 用户操作 -->
      <view class="toolbar">
        <view class="icons">
          <view>
            <text class="icon-heart"></text>
            <text class="name">收藏</text>
          </view>
          <view>
            <text class="icon-handset"></text>
            <text class="name">客服</text>
          </view>
          <view>
            <text class="icon-cart"></text>
            <text class="name">购物车</text>
          </view>
        </view>
        <view class="buttons">
          <view class="addcart">加入购物车</view>
          <view class="buynow">立即购买</view>
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: column;
  .goods {
    .preview {
      height: 750rpx;
      position: relative;
      .swiper {
        height: 100%;
        .image {
          width: 100%;
          height: 100%;
        }
      }
      .indicator {
        height: 40rpx;
        padding: 0 24rpx;
        line-height: 36rpx;
        border-radius: 20rpx;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.3);
        position: absolute;
        bottom: 24rpx;
        right: 24rpx;
        .current {
          font-size: 26rpx;
        }
        .split {
          font-size: 24rpx;
          margin: 0 1rpx 0 2rpx;
        }
        .total {
          font-size: 24rpx;
        }
      }
    }
  }
  .meta {
    border-bottom: 1rpx solid $n-10;
    background-color: #fff;
    .price {
      font-size: 32rpx;
      background-color: $n-theme;
      color: #fff;
      padding: 24rpx;
      .amount {
        font-size: 48rpx;
      }
    }
    .title {
      padding: 24rpx;

      .name {
        font-size: 32rpx;
        color: $n-80;
      }
      .desc {
        font-size: 24rpx;
        margin-top: 4rpx;
        color: #cf4444;
      }
    }
  }
  .action {
    padding-left: 20rpx;
    background-color: #fff;
    .item {
      height: 88rpx;
      border-bottom: 1rpx solid $n-10;
      display: flex;
      justify-content: right;
      align-items: center;
      color: $n-80;
      font-size: 26rpx;
      &:nth-last-child(1) {
        border-bottom: 0;
      }
      .label {
        flex: 1;
        color: $n-40;
      }
      .text {
        max-width: 540rpx;
        text-align: right;
        margin-right: 8rpx;
      }
    }
    .arrow {
      &::after {
        content: '\e6c2';
        font-family: 'erabbit' !important;
        color: $n-40;
        font-size: 24rpx;
        margin-right: 24rpx;
      }
    }
  }
  .detail {
    margin-top: 16rpx;
    background-color: #fff;
    .title {
      display: flex;
      align-items: center;
      height: 88rpx;
      padding-left: 24rpx;
      position: relative;
      text {
        margin-left: 16rpx;
        font-size: 28rpx;
        color: $n-80;
        font-weight: 600;
      }
      &::before {
        content: '';
        position: absolute;
        left: 24rpx;
        width: 4rpx;
        height: 28rpx;
        border-radius: 6rpx;
        background-color: $n-theme;
      }
    }
    .content {
      padding: 0 24rpx;
      .properties {
        width: 100%;
      }
      .item {
        // height: 88rpx;
        padding: 28rpx 0;
        border-top: 1rpx solid $n-10;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: $n-80;
        font-size: 26rpx;
        &:nth-last-child(1) {
          border-bottom: 1rpx solid $n-10;
        }
        .label {
          flex: 1;
          color: $n-40;
        }
        .value {
          width: 540rpx;
          text-align: right;
        }
      }
      .image-detail {
        width: 100%;
      }
    }
    .card {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .goods {
        margin-bottom: 16rpx;
        .image {
          width: 339rpx;
          height: 339rpx;
          border-radius: 16rpx;
        }
        .name {
          max-width: 339rpx;
          font-size: 26rpx;
          padding-top: 16rpx;
        }
        .price {
          padding-top: 6rpx;
          color: #cf4444;
          font-size: 28rpx;
          .symbol {
            font-size: 22rpx;
          }
        }
      }
    }
  }
  .toolbar {
    position: fixed;
    background-color: #fff;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
    height: 100rpx;
    padding-bottom: var(--window-bottom);
    border-top: 1rpx solid $n-10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icons {
      display: flex;
      align-items: center;
      margin-left: 8rpx;
      & > view {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-items: center;
        width: 96rpx;
        .icon-heart,
        .icon-handset,
        .icon-cart {
          font-size: 40rpx;
          color: $n-80;
        }
        .name {
          font-size: 22rpx;
          color: $n-60;
        }
      }
    }
    .buttons {
      display: flex;
      align-items: center;
      font-size: 28rpx;
      & > view {
        height: 72rpx;
        padding: 0 32rpx;
        display: flex;
        align-items: center;
        border-radius: 40rpx;
        color: #fff;
      }
      .addcart {
        background-color: #ffa868;
        margin-right: 12rpx;
      }
      .buynow {
        background-color: $n-theme;
        margin-right: 24rpx;
      }
    }
  }
}
</style>
