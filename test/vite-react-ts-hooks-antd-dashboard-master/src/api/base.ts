import { AxiosRequestConfig } from 'axios'

import { code, login_res } from './mock'
// import request from '@/utils/request'

export default {
  // getCode: () => request.get<any, NSP.VerifyCode>('/code'),
  getCode: () => {
    return Promise.resolve(code)
  },
  // checkCode: (data: any, config: AxiosRequestConfig) => request.post('/code/check', data, config),
  checkCode: (data:any, config: any, diff: number) => {
    // console.log(config, data)
    if (diff > 160 && diff < 210) {
      return Promise.resolve({
        repCode: 0
      })
    } else {
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject('error')
    }
  },

  // login: (data: any, config: AxiosRequestConfig) => request.post<any, NSP.LoginRes>('/auth/oauth/token', data, config),
  login: (data: any, config: AxiosRequestConfig) => {
    return Promise.resolve(login_res)
    // return request.post<any, NSP.LoginRes>('/login', data, config)
  }
}
