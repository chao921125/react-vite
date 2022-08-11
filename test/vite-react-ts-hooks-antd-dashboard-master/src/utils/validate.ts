const validate = {
  validteName: (_:any, value:any) => {
    const reg = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/
    if (value && reg.test(value)) {
      return Promise.resolve()
    } else {
      return Promise.reject(new Error('请输入中文、数字、字母或下划线'))
    }
  }
}

export default validate
