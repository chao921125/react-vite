const jsonServer = require('json-server') // 在node里面使用json-server包
// const path = require('path')
// const Mock = require('mockjs')

// const db = require('./modules/db') // 引入mockjs配置模块
// import mockUser from './modules/user'
const mockUser = require('./modules/user')

let prefix = '/api' // 定义路由根别名
// let time = 1000 // 延时返回数据

// 创建服务器
const server = jsonServer.create() // 创建jsonserver 服务对象

// // 配置jsonserver服务器 中间件
// server.use(
//   jsonServer.defaults({
//     static: path.join(__dirname, '/public'), // 静态资源托管
//   })
// )

server.use(jsonServer.bodyParser) // 抓取body数据使用json-server中间件

// 响应
// server.use((req, res, next) => {
//   // 可选 统一修改请求方式

//   // token统一携带的校验  islogin接口存在，这里无需
//   if (req.url.includes('/login') || req.url.includes('/register')) {
//     next()
//   } else {
//     if (req.headers.token) {
//       next()
//     } else {
//       setTimeout(() => {
//         res.jsonp({
//           code: 401,
//           message: 'token不存在，或者过期',
//         })
//       }, time)
//     }
//   }

//   // 不做校验
//   // next()
// })

// 测试mock数据
// server.get(`${prefix}/list`, (req, res) => {
//   console.log('req: ', req.url)
//   // console.log(req.query, req.body) // 抓取提交过来的query和body
//   res.jsonp({
//     code: 0,
//     message: '数据读取成功',
//     data: {
//       list: db.list,
//     },
//   })
// })

server.post(`${prefix}/login`, (req, res) => {
  // console.log(req.query, req.body) // 抓取提交过来的query和body
  let username = req.body.username
  let password = req.body.password
  if ((username === 'admin' || username === 'guest') && password === 'admin123456') {
    res.jsonp({
      code: 0,
      message: '登录成功',
      data: {
        token: mockUser.login(username),
      },
    })
  } else {
    res.jsonp({
      code: 400,
      message: '登录失败',
    })
  }
})

// 获取用户信息
server.get(`${prefix}/userInfo`, (req, res) => {
  console.log('req: ', req.url)
  res.jsonp({
    code: 0,
    message: '用户信息获取成功',
    data: mockUser.getUserInfo(req.headers),
  })
})

// 开启jsonserver服务
server.listen(3001, () => {
  console.log('mock server is running port 3001')
})
