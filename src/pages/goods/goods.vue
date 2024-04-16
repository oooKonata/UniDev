<script setup lang="ts"></script>

<template>
  <view class="page">
    <!-- 基本信息 -->
    <view class="goods">
      <!-- 商品主图 -->
      <view class="preview">
        <swiper class="swiper" autoplay circular>
          <swiper-item>
            <image
              class="image"
              src="https://yanxuan-item.nosdn.127.net/99c83709ca5f9fd5c5bb35d207ad7822.png"
              mode="aspectFill"
            />
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
        <text class="amount">29.90</text>
      </view>
      <view class="name ellipsis">云珍·轻软旅行长绒棉方巾</view>
      <view class="desc">轻巧无捻小方巾，旅行便携</view>
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
    <view class="detail panel">
      <view class="title">
        <text>详情</text>
      </view>
      <view class="content">
        <view class="properties">
          <!-- 属性详情 -->
          <view class="item">
            <text class="label">属性名</text>
            <text class="value">属性值</text>
          </view>
          <view class="item">
            <text class="label">属性名</text>
            <text class="value">属性值</text>
          </view>
        </view>
        <!-- 图片详情 -->
        <image
          mode="widthFix"
          src="https://yanxuan-item.nosdn.127.net/a8d266886d31f6eb0d7333c815769305.jpg"
        ></image>
        <image
          mode="widthFix"
          src="https://yanxuan-item.nosdn.127.net/a9bee1cb53d72e6cdcda210071cbd46a.jpg"
        ></image>
      </view>

      <!-- 同类推荐 -->
      <view class="similar panel">
        <view class="title">
          <text>同类推荐</text>
        </view>
        <view class="content">
          <view v-for="item in 4" :key="item" class="goods" hover-class="none">
            <image
              class="image"
              mode="aspectFill"
              src="https://yanxuan-item.nosdn.127.net/e0cea368f41da1587b3b7fc523f169d7.png"
            ></image>
            <view class="name ellipsis">简约山形纹全棉提花毛巾</view>
            <view class="price">
              <text class="symbol">¥</text>
              <text class="number">18.50</text>
            </view>
          </view>
        </view>
      </view>
    </view>

    <!-- 用户操作 -->
    <view class="toolbar">
      <view class="icons">
        <button class="icons-button">
          <text class="icon-heart"></text>收藏
        </button>
        <button class="icons-button" open-type="contact">
          <text class="icon-handset"></text>客服
        </button>
        <navigator
          class="icons-button"
          url="/pages/cart/cart"
          open-type="switchTab"
        >
          <text class="icon-cart"></text>购物车
        </navigator>
      </view>
      <view class="buttons">
        <view class="addcart"> 加入购物车 </view>
        <view class="buynow"> 立即购买 </view>
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
        line-height: 40rpx;
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
}
</style>
