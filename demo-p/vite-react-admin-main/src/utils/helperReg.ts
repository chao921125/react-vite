// 用户名正则，4到16位（字母，数字，下划线，减号）
export const helperValidateUserName = (value: string) => {
  const uPattern = /^[a-zA-Z0-9_-]{4,16}$/
  if (uPattern.test(value)) {
    return true
  }
  return false
}

// 账号名正则，字母开头，允许4-16字节，允许字母数字下划线
export const helperValidateAccountName = (value: string) => {
  const uPattern = /^[a-zA-Z][a-zA-Z0-9_]{3,15}$/
  if (uPattern.test(value)) {
    return true
  }
  return false
}

// 密码正则，必须包含大小写字母和数字的组合，可使用特殊字符，长度在8-12之间
export const helperValidatePwd = (value: string) => {
  // const uPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/
  const uPattern = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/)
  if (uPattern.test(value)) {
    return true
  }
  return false
}

// 手机号正则
export const helperValidatePhone = (value: string) => {
  const uPattern = /^1[3456789]\d{9}$/
  if (uPattern.test(value)) {
    return true
  }
  return false
}

// 邮箱正则
export const helperValidateEmail = (value: string) => {
  const uPattern = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
  if (uPattern.test(value)) {
    return true
  }
  return false
}

// URL正则
export const helperValidateUrl = (value: string) => {
  const uPattern = /^((https?|ftp|file):\/\/)?([\da-z\\.-]+)\.([a-z\\.]{2,6})([\\/\w \\.-]*)*\/?$/
  if (uPattern.test(value)) {
    return true
  }
  return false
}

// IPv4正则
export const helperValidateIPv4 = (value: string) => {
  const uPattern = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
  if (uPattern.test(value)) {
    return true
  }
  return false
}

// 身份证号正则
export const helperValidateIdCard = (value: string) => {
  const uPattern = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  if (uPattern.test(value)) {
    return true
  }
  return false
}

// 邮编正则
export const helperValidateZipCode = (value: string) => {
  const uPattern = /^\d{6}$/
  if (uPattern.test(value)) {
    return true
  }
  return false
}

// 十六进制 Hex颜色
export const helperValidateHex = (value: string) => {
  const uPattern = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
  if (uPattern.test(value)) {
    return true
  }
  return false
}

// 数字价格千分位分割
export const helperValidateThousandth = (value: number) => {
  if (value.toString().indexOf('.') !== -1) {
    return value.toLocaleString()
  } else {
    const uPattern = /(?!^)(?=(\d{3})+$)/g
    return value.toString().replace(uPattern, ',')
  }
}

// 是否是都由中文组成
export const helperValidateAllChinese = (value: string) => {
  const uPattern = /^[\u4E00-\u9FA5]+$/
  if (uPattern.test(value)) {
    return true
  }
  return false
}

// 是否包含中文
export const helperValidateIncludeChinese = (value: string) => {
  const uPattern = /[\u4E00-\u9FA5]/
  if (uPattern.test(value)) {
    return true
  }
  return false
}

// 获取网页中所有img标签的图片地址
export const helperValidateImgPath = (sHtml: any) => {
  const imgUrlRegex = /<img[^>]+src="((?:https?:)?\/\/[^"]+)"[^>]*?>/gi
  let matchImgUrls: any[] = []

  sHtml.replace(imgUrlRegex, (match: any, $1: any) => {
    $1 && matchImgUrls.push($1)
  })
  return matchImgUrls
}

// 判断版本号
export const helperValidateVersion = (value: string) => {
  const uPattern = /^(?:\d+\.){2}\d+$/
  if (uPattern.test(value)) {
    return true
  }
  return false
}

// HTML转义
export const helperValidateEscape = (value: string) => {
  const escapeMaps: any = {
    '&': 'amp',
    '<': 'lt',
    '>': 'gt',
    '"': 'quot',
    "'": '#39',
  }
  const escapeRegexp = new RegExp(`[${Object.keys(escapeMaps).join('')}]`, 'g')

  return value.replace(escapeRegexp, match => `&${escapeMaps[match]};`)
}

// HTML反转义
export const helperValidateUnEscape = (value: string) => {
  const unescapeMaps: any = {
    amp: '&',
    lt: '<',
    gt: '>',
    quot: '"',
    '#39': "'",
  }
  const unescapeRegexp = /&([^;]+);/g

  return value.replace(unescapeRegexp, (match, unescapeKey) => {
    return unescapeMaps[unescapeKey] || match
  })
}

// 提取连续重复的字符
export const helperValidateRepeatStr = (value: string) => {
  const repeatStrs: string[] = []
  const repeatRe = /(.+)\1+/g
  // 很多时候replace并不是用来做替换，而是做数据提取用
  value.replace(repeatRe, (_$0, $1): any => {
    $1 && repeatStrs.push($1)
  })
  return repeatStrs
}
