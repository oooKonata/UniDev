<script setup lang="ts">
import { getHotRecommendAPI } from '@/api/hot'
import type { SubTypeItem } from '@/types/hot'
import { onLoad, onReachBottom } from '@dcloudio/uni-app'
import { ref } from 'vue'
// 推荐详情页的标题的url
const urlMap = [
  { type: '1', title: '特惠推荐', url: '/hot/preference' },
  { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
  { type: '3', title: '一站全买', url: '/hot/oneStop' },
  { type: '4', title: '新鲜好物', url: '/hot/new' },
]

//接收路由传参
const query = defineProps<{
  type: string
}>()

// 推荐封面图
const bannerPicture = ref('')
// 推荐选项，联合类型新增finish是一个标记属性，后面分页条件结束时用到，也可以单独定义一个变量使用
const subTypes = ref<(SubTypeItem & { finish?: boolean })[]>([])
// tab下标高亮
const activeIndex = ref(0)

// 根据传参，动态设置标题
const currentUrlMap = urlMap.find((value) => value.type === query.type)
uni.setNavigationBarTitle({ title: currentUrlMap!.title })

// 获取热门推荐数据
const getHotRecommendData = async () => {
  const res = await getHotRecommendAPI(currentUrlMap!.url, {
    // 便于测试，利用环境变量，在开发环境设置page起始值为30，非开发环境，就是1，不用在测试时反复修改代码
    page: import.meta.env.DEV ? 30 : 1,
    pageSize: 10,
  })
  bannerPicture.value = res.result.bannerPicture
  subTypes.value = res.result.subTypes
  console.log(subTypes.value)
}

// 页面加载
onLoad(() => {
  getHotRecommendData()
})

// 滚动触底
onReachBottom(async () => {
  // 获取当前tab选项
  const currentSubTypes = subTypes.value[activeIndex.value]
  // 分页条件
  if (currentSubTypes.goodsItems.page < currentSubTypes.goodsItems.pages) {
    // 当前页码累加
    currentSubTypes.goodsItems.page++
  } else {
    // 标记已结束
    currentSubTypes.finish = true
    // 退出并轻提示
    return uni.showToast({
      icon: 'none',
      title: '没有更多数据了～',
    })
  }

  // 调用API传参
  const res = await getHotRecommendAPI(currentUrlMap!.url, {
    subType: currentSubTypes.id,
    page: currentSubTypes.goodsItems.page,
    pageSize: currentSubTypes.goodsItems.pageSize,
  })
  // 数组追加，新获取到的res的数组是刷新新增的一页，依次追加到当前tab的首次加载的数组上
  currentSubTypes.goodsItems.items.push(
    ...res.result.subTypes[activeIndex.value].goodsItems.items,
  )
})
</script>

<template>
  <view class="page">
    <view class="cover">
      <image class="image" :src="bannerPicture" mode="aspectFill" />
    </view>
    <view class="tabs">
      <text
        class="text"
        v-for="(item, index) in subTypes"
        :key="item.id"
        :class="{ active: index === activeIndex }"
        @tap="activeIndex = index"
        >{{ item.title }}
      </text>
    </view>
    <view
      class="scroll"
      v-for="(item, index) in subTypes"
      :key="item.id"
      v-show="activeIndex === index"
    >
      <view class="goods">
        <view
          class="card"
          v-for="goods in item.goodsItems.items"
          :key="goods.id"
        >
          <image class="image" :src="goods.picture" />
          <view class="name">{{ goods.name }}</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="amount">{{ goods.price }}</text>
          </view>
        </view>
      </view>
      <view class="loading-text">{{
        item.finish ? '没有更多数据了～' : '正在加载...'
      }}</view>
    </view>
  </view>
</template>

<style lang="scss">
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .cover {
    z-index: 8;
    padding: 16rpx 16rpx;
    width: 100%;
    height: 225rpx;
    position: fixed;
    background-color: $n-bgColor;
    .image {
      border-radius: 16rpx;
      width: 100%;
      height: 100%;
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
    margin-top: 160rpx;
    box-shadow: 1rpx 4rpx 12rpx rgba(0, 0, 0, 0.06);
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
  .scroll {
    margin-top: 272rpx;
    height: 1rpx;
    flex: 1;
    .goods {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0 16rpx;
      .card {
        width: 351rpx;
        background-color: #fff;
        border-radius: 16rpx;
        padding: 24rpx 24rpx 20rpx;
        margin-bottom: 16rpx;
        &:nth-last-child(-n + 2) {
          margin-bottom: 0;
        }
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
          .symbol {
            font-size: 22rpx;
          }
        }
      }
    }
    /* 加载提示文字 */
    .loading-text {
      text-align: center;
      font-size: 26rpx;
      padding: 32rpx 0 100rpx;
      color: #999;
    }
  }
}
</style>
