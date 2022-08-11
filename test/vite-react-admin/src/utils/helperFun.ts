// 过滤空参数
export const helperFilterEmptyParam = (obj: { [x: string]: any }) => {
  const newObj: { [x: string]: any } = {}
  for (let key in obj) {
    if (obj[key] !== '') {
      newObj[key] = obj[key]
    }
  }
  return newObj
}

// 对象转化为FormData对象
export const helperTransformFormData = (obj: { [x: string]: any }) => {
  const formData = new FormData()
  Object.keys(obj).forEach(key => {
    const value = obj[key]
    if (Array.isArray(value)) {
      value.forEach((subValue, i) => formData.append(key + `[${i}]`, subValue))
    } else {
      formData.append(key, obj[key])
    }
  })
  return formData
}
