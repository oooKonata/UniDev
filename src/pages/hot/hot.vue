<template>
  <view class="viewport">
    <!-- 推荐封面图 -->
    <view class="cover">
      <image
        class="image"
        src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-20/84abb5b1-8344-49ae-afc1-9cb932f3d593.jpg"
        mode="aspectFill"
      />
    </view>
    <!-- 推荐选项 -->
    <view class="tabs">
      <text class="text active">抢先尝鲜</text>
      <text class="text">新品预告</text>
    </view>
    <!-- 推荐列表 -->
    <scroll-view scroll-y class="scroll-view">
      <view class="goods">
        <navigator
          class="navigator"
          url="/pages/"
          v-for="goods in 30"
          :key="goods"
        >
          <image
            class="image"
            src="https://yanxuan-item.nosdn.127.net/5e7864647286c7447eeee7f0025f8c11.png"
          />
          <view class="name">不含酒精，使用安心爽肤清洁湿巾</view>
          <view class="price">
            <text class="small">¥</text>
            <text class="price">29.90</text>
          </view>
        </navigator>
      </view>
      <view class="loading-text">正在加载...</view>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
// 推荐详情页的标题的url
const urlMap = [
  { type: '1', title: '特惠推荐', url: '/hot/preference' },
  { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
  { type: '3', title: '一站全买', url: '/hot/oneStep' },
  { type: '4', title: '新鲜好物', url: '/hot/new' },
]

//接收路由传参
const query = defineProps<{
  type: string
}>()
console.log(query)

// 根据传参，动态设置标题
const currentUrlMap = urlMap.find((value) => value.type === query.type)
console.log(currentUrlMap)
uni.setNavigationBarTitle({ title: currentUrlMap!.title })
</script>

<style lang="scss">
page {
  height: 100%;
  background-color: #f5f5f5;
}
.viewport {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  position: relative;
  .cover {
    z-index: 8;
    padding: 16rpx 16rpx 0;
    width: 100%;
    height: 225rpx;
    position: fixed;
    box-sizing: border-box;
    top: 0;
    .image {
      border-radius: 16rpx;
    }
  }
  .tabs {
    z-index: 9;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #fff;
    height: 96rpx;
    width: 654rpx;
    border-radius: 16rpx;
    font-size: 28rpx;
    color: #333;
    position: fixed;
    margin-top: 178rpx;
    margin-bottom: 16rpx;
    .text {
      position: relative;
      line-height: 96rpx;
    }
    .active {
      &::after {
        content: '';
        width: 32rpx;
        height: 4rpx;
        background-color: #27ba9b;
        position: absolute;
        left: 50%;
        // 左移tab指示器宽度的一半
        transform: translate(-50%);
        bottom: 18rpx;
      }
    }
  }
  .scroll-view {
    margin-top: 290rpx;
    height: 0rpx;
    flex: 1;
    margin-bottom: 64rpx;
    .goods {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0 16rpx;
      .navigator {
        width: 351rpx;
        background-color: #fff;
        border-radius: 16rpx;
        padding: 24rpx 24rpx 20rpx;
        margin-bottom: 16rpx;
        box-sizing: border-box;
        .image {
          width: 303rpx;
          height: 303rpx;
          border-radius: 16rpx;
        }
        .name {
          font-size: 26rpx;
          padding-top: 16rpx;
          /* 块容器中的内容限制为指定的行数 */
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          /* 超过两行裁剪并显示省略号 */
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .price {
          padding-top: 8rpx;
          color: #cf4444;
          font-size: 28rpx;
          .small {
            font-size: 22rpx;
          }
        }
      }
    }
    /* 加载提示文字 */
    .loading-text {
      text-align: center;
      font-size: 26rpx;
      padding: 16rpx 0 32rpx;
      color: #999;
    }
  }
}
</style>
