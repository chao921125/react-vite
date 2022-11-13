const Mock = require('mockjs')

let dbData = n => {
  let data = []

  for (var i = 0; i < n; i++) {
    data.push({
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      id: 10000 + i, //_id 字符
      _id: 10000 + i + '',
      title: '@ctitle(8,12)',
      des: '@ctitle(10,12)',
      time: '@integer(1310505744645,1610505744645)',
      detail: {
        auth: '@cname()',
        content: '@cparagraph(3,8)',
      },
    })
  }
  return data
}

module.exports = Mock.mock({
  list: dbData(60),
})
