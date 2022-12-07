import axios, { AxiosRequestConfig } from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://shop.fed.lagou.com/api/admin',
  // If the request takes longer than `timeout`, the request will be aborted.
  timeout: 1000
})
console.log(axiosInstance)

// 请求拦截器, 请求发送前做的一些事情
axiosInstance.interceptors.request.use(function (config) {
  // 统一设置用户身份 token
  return config
}, async function (error) {
  // Do something with request error
  return await Promise.reject(error)
})

// 响应拦截器，对响应数据做一些处理
axiosInstance.interceptors.response.use(function (response) {
  // 统一处理接口响应错误，比如token过期、服务端异常等
  return response
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
