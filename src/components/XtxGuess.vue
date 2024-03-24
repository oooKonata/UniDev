<template>
  <!-- 猜你喜欢 -->
  <view class="caption">
    <image
      class="caption-icon"
      src="@/static/images/bubble.png"
      mode="scaleToFill"
    />
    <text class="title">猜你喜欢</text>
    <image
      class="caption-icon"
      src="@/static/images/bubble.png"
      mode="scaleToFill"
    />
  </view>
  <view class="guess">
    <navigator class="guess-item" v-for="item in guessList" :key="item.id">
      <image class="image" mode="aspectFit" :src="item.picture" />
      <view class="name">{{ item.name }}</view>
      <view class="price">
        <text class="small">¥</text>
        <text>{{ item.price }}</text>
      </view>
    </navigator>
  </view>
  <!-- 三元运算符条件渲染 -->
  <view class="loading-text">{{
    finishFlag ? '没有更多数据～' : '正在加载...'
  }}</view>
</template>

<script setup lang="ts">
import { getHomeGuessAPI } from '@/api/home'
import type { GuessItem } from '@/types/home'
import type { PageParams } from '@/types/global'
import { ref } from 'vue'
import { onMounted } from 'vue'

// 分页参数，Required：可选参数强制必填 Required<PageParams>
const pageParams: Required<PageParams> = {
  page: 1,
  pageSize: 10,
}
// 分页结束标记
const finishFlag = ref(false)
// 获取猜你喜欢数据
const guessList = ref<GuessItem[]>([])
const getHomeGuessData = async () => {
  // 分页结束标记为真，则退出分页数据加载，并给用户侧提示
  if (finishFlag.value === true) {
    return uni.showToast({
      icon: 'none',
      title: '没有更多数据～',
    })
  }
  const res = await getHomeGuessAPI(pageParams)
  // guessData.value = res.result.items
  // 数组追加，数组追加数组会嵌套，被追加的数组需展开
  guessList.value.push(...res.result.items)
  // 分页条件：判断当前页码是否超过页码总数
  if (pageParams.page < res.result.pages) {
    // 页码累加
    pageParams.page++
  } else {
    finishFlag.value = true
  }
}
// 重置数据
const resetData = () => {
  // 当前页码初始化为1
  pageParams.page = 1
  // 重置列表
  guessList.value = []
  finishFlag.value = false
}

// 组件挂载完毕调用 homeGuessLikeData，组件在多个地方使用时方便
onMounted(() => {
  getHomeGuessData()
})
// 暴露方法
defineExpose({ resetData, getHomeGuessData })
</script>

<style scoped lang="scss">
/* 标题 */
.caption {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16rpx 0 32rpx;
  font-size: 32rpx;
  color: #333;
  .caption-icon {
    width: 26rpx;
    height: 26rpx;
  }
  .title {
    margin: 0 16rpx;
  }
}
/* 卡片 */
.guess {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 16rpx;
  .guess-item {
    width: 351rpx;
    background-color: #fff;
    padding: 24rpx 24rpx 20rpx;
    margin-bottom: 16rpx;
    border-radius: 16rpx;
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
</style>
