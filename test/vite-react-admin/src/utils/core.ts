// 方便生成联合类型
export const tupleStr = <T extends string[]>(...args: T) => args

export const tupleNum = <T extends number[]>(...args: T) => args

/**
 * 获取url中的查询字符串参数
 */
export const getURLParams = (url: string): any => {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}'
  )
}

/**
 * 序列化请求参数
 */

export function paramsSerializer(params = {}) {
  const paramArr: string[] = []
  let key: string
  let value: any
  for ([key, value] of Object.entries(params)) {
    if (Array.isArray(value)) {
      value.forEach(item => paramArr.push(`${encodeURIComponent(key)}=${encodeURIComponent(item)}`))
    } else {
      // 剔除null和undefined值
      // eslint-disable-next-line
      value != null && paramArr.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    }
  }
  return paramArr.join('&')
}

/**
 * 延迟执行async函数的一部分, 将其放入休眠状态, 返回Promise。
 * @param {Number} interval  阻塞的时间 ms
 * @example
```
async function test() {
  console.log('Hello')
  await sleep(1000)
  console.log('world!')
}
```
 */
export const sleep = (interval: number) => new Promise(resolve => setTimeout(resolve, interval))

// 复制内容到剪贴板
export const copyToBoard = (value: string) => {
  const element = document.createElement('textarea')
  document.body.appendChild(element)
  element.value = value
  element.select()
  if (document.execCommand('copy')) {
    document.execCommand('copy')
    document.body.removeChild(element)
    return true
  }
  document.body.removeChild(element)
  return false
}
