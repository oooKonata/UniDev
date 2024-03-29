/* 
  添加拦截器
    拦截 request 请求
    拦截 uploadFile 文件上传

  目标
    1、非 http 开头拼接地址
    2、设置请求超时
    3、添加小程序端请求标头
    4、添加 token 请求头标识
*/

import { useMemberStore } from '@/store'

// 基础地址
const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

// 添加拦截器
// request 和 uploadFile 公用一个拦截器配置
// 拦截器配置
const httpInterceptor = {
  // 拦截前触发
  invoke(options: UniApp.RequestOptions) {
    // 1、非 http 开头拼接地址，非 http 开头的，拼接上baseURL
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    // 2、设置请求超时，默认60s，改为10s
    options.timeout = 10000
    // 3、添加小程序端请求标头
    options.header = {
      // 保留原有header参数，加上'source-client': 'miniapp' 标识
      // 后端根据标识返回小程序端接口
      ...options.header,
      'source-client': 'miniapp',
    }
    // 4、添加 token 请求头标识
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if (token) {
      // 如果存在token，header 添加 Authorization: token 标识
      // 后续根据token判断登录状态
      options.header.Authorization = token
    }
  },
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

/* 
  封装 http 请求函数
    1、返回 Promise 对象，用于处理返回值类型
    2、响应成功 resolve
      1、提取数据
      2、添加泛型
    3、响应失败 reject
      1、401错误
      2、其他错误
      3、网络错误
*/

// 2.2、添加类型，支持泛型
interface Data<T> {
  code: string
  msg: string
  result: T
}

export const http = <T>(options: UniApp.RequestOptions) => {
  // 1、返回 Promise 对象
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      // 响应成功
      success(res) {
        // 状态码为2xx，获取数据成功
        if (res.statusCode >= 200 && res.statusCode < 300) {
          // 2.1、提取数据
          resolve(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          // 3.1、401错误，-> 清理用户数据，跳转至登录页，
          const memberStore = useMemberStore()
          memberStore.clearProfile()
          uni.navigateTo({ url: '/pages/login/login' })
          // 标记为失败
          reject(res)
        } else {
          // 3.2、通用错误，-> 根据后端错误提示轻提示
          uni.showToast({
            icon: 'none',
            title: (res.data as Data<T>).msg || '请求错误',
          })
          // 标记为失败
          reject(res)
        }
      },
      // 响应失败
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络错误，换个网络试试',
        })
        reject(err)
      },
    })
  })
}
