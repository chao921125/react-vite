// import Mock from 'mockjs'
const Mock = require('mockjs')

const loginData = Mock.mock({
  token: '@lower(@guid)',
})

const userInfo = Mock.mock({
  name: '@cname',
  gender: '@pick([1, 2])',
  avatar: 'https://cn.vitejs.dev/logo.svg',
  email: '@email',
  mobilePhone: /^1[345789]\d{9}$/,
  roles: [1],
  // 路由权限表
  // 如果配置了一级路由，则它之下的所有子路由都可访问。
  permission: [
    {
      id: 1,
      name: 'dashboard',
    },
    {
      id: 2,
      name: 'other',
    },
    {
      id: 3,
      name: 'permission',
      reminder: '您没有权限访问',
    },
  ],
})

module.exports = {
  login(username) {
    if (username === 'admin') {
      loginData.token = '303c9aa195d04cf184557d8321a3693d' // role 1
    } else if (username === 'guest') {
      loginData.token = '4d91bb4471574c3da9a85f5ff27c4fcb' // role 2
    }
    return loginData.token
  },
  logout() {
    return {
      code: 200,
      data: {},
    }
  },
  getUserInfo(config) {
    // console.log('config: ', config)
    const { token } = config
    console.log('token: ', token)
    if (token === '303c9aa195d04cf184557d8321a3693d') {
      userInfo.roles = [1]
    } else if (token === '4d91bb4471574c3da9a85f5ff27c4fcb') {
      userInfo.roles = [2]
      userInfo.permission = [
        {
          id: 1,
          name: 'dashboard',
        },
        {
          id: 2,
          name: 'other',
        },
        // {
        //   id: 3,
        //   name: 'permission',
        //   reminder: '您没有权限访问',
        // },
      ]
    }
    return userInfo
  },
}
