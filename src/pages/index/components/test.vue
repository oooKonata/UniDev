<template>
  <view class="content">
    <view class="index">
      <view>会员信息：{{ memberStore.profile }}</view>
      <button
        @tap="
          memberStore.setProfile({
            nickname: '黑马',
            token: '123',
          })
        "
        size="mini"
        plain
        type="primary"
      >
        保存用户信息
      </button>
      <button @tap="memberStore.clearProfile()" size="mini" plain type="warn">清除用户信息</button>
      <button @tap="getData" size="mini" plain type="primary">测试请求</button>
    </view>
  </view>
</template>

<script setup lang="ts">
  import { useMemberStore } from '@/store/modules/member'
  import { http } from '@/utils/http'

  const memberStore = useMemberStore()
  const getData = async () => {
    const res = await http({
      method: 'GET',
      url: '/member/profile',
      header: {},
    })
    console.log('请求成功', res)
  }
</script>

<style scoped lang="scss">
  .content {
    background-color: #f5f5f5;
    height: 100vh;
  }
</style>
