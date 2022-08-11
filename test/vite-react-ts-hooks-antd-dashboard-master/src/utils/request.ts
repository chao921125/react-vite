import Axios, { AxiosInstance } from 'axios'
import qs from 'qs'
import { message, Modal } from 'antd'
import { tokenFn } from './token'
import { createContext, useContext } from 'react'
import config from '@/config'

const request = Axios.create({
  baseURL: String(config.baseURL),
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

request.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      Authorization: config.headers?.Authorization || (tokenFn.get() as string)
    }
    if (config.headers?.['Content-Type'] === 'application/x-www-form-urlencoded') {
      config.data = qs.stringify(config.data)
    }

    return config
  },
  (err) => Promise.reject(err)
)

request.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      // if (response.config.url === '/login') {
      //   return Promise.resolve(response.data)
      // }
      if (response.data.code === 0) {
        return Promise.resolve(response.data.data)
      } else {
        message.error(response.data.msg)
      }
    }
    return Promise.reject(response)
  },
  (err) => {
    console.log('response.config.ureerl===', err.response.config)
    if (err.response && err.response.status === 401) {
      Modal.info({
        title: '会话超时，请重新登陆！',
        maskClosable: false,
        onOk() {
          tokenFn.remove()
          window.location.reload()
        }
      })
      return Promise.resolve()
    }
    const msg = err.response?.data?.msg || err.message || 'error!'
    return Promise.reject(msg)
  }
)

export const AxiosContext = createContext<AxiosInstance>(
  new Proxy(request, {
    apply: () => {
      throw new Error('You must wrap your component in an AxiosProvider')
    },
    get: () => {
      throw new Error('You must wrap your component in an AxiosProvider')
    }
  })
)

export const useAxios = () => {
  return useContext(AxiosContext)
}

export default request
