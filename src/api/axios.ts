import axios, { AxiosRequestConfig } from 'axios'
import store from '../store'
import { ElMessage } from 'element-plus'
import { IUserInfo } from './types/common'
import router from '@/router/'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  // If the request takes longer than `timeout`, the request will be aborted.
  timeout: 1000
})
console.log(axiosInstance)

// 请求拦截器, 请求发送前做的一些事情
axiosInstance.interceptors.request.use(function (config) {
  // 统一设置用户身份 token
  const user = store.state.user as IUserInfo
  if (user?.token) {
    Object.assign(config, {
      header: {
        Authorization: user.token
      }
    })
  }
  return config
}, async function (error) {
  // Do something with request error
  return await Promise.reject(error)
})

// 响应拦截器，对响应数据做一些处理
axiosInstance.interceptors.response.use(function (response) {
  // 统一处理接口响应错误，比如token过期、服务端异常等
  console.log(response)
  const status = response.data.status
  // 正常情况
  if (!status || status === 200) return response

  // 统一处理token过期
  if (status === 410000) {
    // 清除本地登录状态
    store.commit('setUserInfo', null)
    // 跳到登录页
    router.push({
      name: 'login',
      query: {
        redirect: router.currentRoute.value.fullPath
      }
    })
    return Promise.reject(response)
    // 抛出异常
  }
  ElMessage.error(response.data.msg || '请求失败，请稍后重试')
  return Promise.reject(response)
}, async function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return await Promise.reject(error)
})

// eslint-disable-next-line @typescript-eslint/promise-function-async, @typescript-eslint/explicit-function-return-type
export default <T = any>(config: AxiosRequestConfig) => {
  return axiosInstance(config).then(res => {
    return res.data.data as T
  })
}
