import request from '@/utils/request'

// 登录
const login = async (params: { username: string; password: string; verCode: string }) => {
  const res = await request.post('/login', params)
  return {
    token: res.token,
  }
}

const getUserInfo = async (params: {}) => {
  const res = await request.get('/userInfo', params)
  return {
    data: res,
  }
}

export default {
  login,
  getUserInfo,
}
