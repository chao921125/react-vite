import { message } from 'antd'
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

import config from '@/config'

interface AxiosRequestConfigExpand extends AxiosRequestConfig {
  isNoPending?: boolean
  responseRange?: string
}

// const urlWithoutToken = ['/account/login', '/license/info']

const CancelToken = axios.CancelToken
window.cancelAxiosRequest = undefined
// 放入一个全局数组，以便之后在router中统一取消
window.__axiosPromiseArr = []

// 防止重复请求
const removePending = (config: AxiosRequestConfigExpand) => {
  for (let key in window.__axiosPromiseArr) {
    if (window.__axiosPromiseArr[key].url === config.url) {
      window.__axiosPromiseArr[key].func()
      window.__axiosPromiseArr.splice(key, 1)
    }
  }
}

export class Request {
  // private baseConfig: AxiosRequestConfig = {
  //   baseURL: config.BaseURL,
  //   headers: {},
  //   timeout: 8000,
  // }
  private baseConfig: AxiosRequestConfigExpand = {
    baseURL: config.BaseURL,
    headers: {},
    timeout: 8000,
  }

  // axios实例
  private instance: AxiosInstance = axios.create(this.baseConfig)

  public constructor() {
    this.setReqInterceptors()
    this.setResnterceptors()
  }

  // 设置请求头
  public setHeader = (headers: any) => {
    this.baseConfig.headers = { ...this.baseConfig.headers, ...headers }
    this.instance = axios.create(this.baseConfig)
    this.setReqInterceptors()
    this.setResnterceptors()
  }

  // get请求
  public get = (url: string, data: any = {}, config: AxiosRequestConfig = {}): Promise<any> =>
    this.instance({
      ...{ url, method: 'get', params: data },
      ...config,
    })

  // post请求
  public post = (url: string, data: any = {}, config: AxiosRequestConfig = {}): Promise<any> =>
    this.instance({
      ...{ url, method: 'post', data },
      ...config,
    })

  // 不经过统一的axios实例的get请求
  public postOnly = (url: string, data: any = {}, config: AxiosRequestConfig = {}) =>
    axios({
      ...this.baseConfig,
      ...{ url, method: 'post', data },
      ...config,
    })

  // 不经过统一的axios实例的post请求
  public getOnly = (url: string, data: any = {}, config: AxiosRequestConfig = {}) =>
    axios({
      ...this.baseConfig,
      ...{ url, method: 'get', params: data },
      ...config,
    })

  // delete请求,后端通过requestBody接收
  public deleteBody = (url: string, data: any = {}, config: AxiosRequestConfig = {}) =>
    this.instance({
      ...{ url, method: 'delete', data },
      ...config,
    })

  // delete请求,后端通过后端通过requestParam接收
  public deleteParam = (url: string, data: any = {}, config: AxiosRequestConfig = {}) =>
    this.instance({
      ...{ url, method: 'delete', params: data },
      ...config,
    })

  // 请求拦截器
  private setReqInterceptors = () => {
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfigExpand) => {
        // 添加token
        if (localStorage.getItem('token') && config.url !== '/account/login') {
          config.headers.token = localStorage.getItem('token')
        }

        // 支持分片下载
        if (config.responseType === 'blob' && config?.responseRange) {
          // config.headers.Range = 'bytes=0-1023'
          config.headers.Range = config?.responseRange
        }

        // 取消重复请求
        if (!config.isNoPending) {
          removePending(config)
        }

        config.cancelToken = new CancelToken(cancel => {
          window.__axiosPromiseArr.push({
            url: config.url,
            func: cancel,
          })
        })

        return config
      },
      err => {
        message.error('请求失败')
        return Promise.reject(err)
      }
    )
  }

  // 响应拦截器
  private setResnterceptors = () => {
    this.instance.interceptors.response.use(
      res => {
        if (res.request.responseType === 'blob') {
          return Promise.resolve(res)
        }

        const { code, data, msg } = res.data
        if (code === 0) {
          return Promise.resolve(data)
        } else {
          message.error(msg || '获取数据失败')
          return Promise.reject(res)
        }
      },
      err => {
        const { response } = err
        if (response && (response.status === 503 || response.status === 401)) {
          // authLogout()
          if (window.location.pathname !== '/login') {
            window.open('/login', '_self')
          }
        }

        if (axios.isCancel(err)) {
          // 为了终结promise链 就是实际请求 不会走到.catch(rej=>{});这样就不会触发错误提示之类了。
          return new Promise(() => {})
        }
        message.error('服务器响应失败')
        return Promise.reject(err)
      }
    )
  }
}

export default new Request()
