import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMemberStore = defineStore(
  'member',
  () => {
    // 会员信息
    const profile = ref()
    // 保存会员信息，登录时使用
    const setProfile = (value: any) => {
      profile.value = value
    }
    // 清理会员信息，退出时使用
    const clearProfile = () => {
      profile.value = undefined
    }
    // 返回要输出的数据
    return {
      profile,
      setProfile,
      clearProfile,
    }
  },
  // 数据持久化
  {
    persist: true,
  }
)
