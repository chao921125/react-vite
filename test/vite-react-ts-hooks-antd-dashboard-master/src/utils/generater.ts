const Generater = class {
  private count = 0

  constructor(counterStartNumber: number) {
    this.count = counterStartNumber
  }
  // 生成自增整数
  AutoIncreaseInteger() {
    return this.count++
  }
  // 生成随机整数 具有范围约束[min, max)
  // min 最小值
  // max 最大值
  RangeInteger(min: number, max: number) {
    const range = max - min
    const value = Math.floor(Math.random() * range) + min
    return value
  }
  // 生成随机一个指定参数中的字符串
  // ...strings 指定的字符串组
  SpecifiedString(...strings: string[]) {
    const map = new Map(Object.entries(strings))

    return map.get(String(this.RangeInteger(0, strings.length)))
  }
  // 生成指定长度的随机 含[a~z]的字符串,
  // length 指定字符串长度
  // toUpper 首字母是否大写
  RandomString(length: number, firstToUpper?: boolean) {
    let str = ''
    for (let i = 0; i < length; i++) {
      if (firstToUpper && i == 0) {
        str += String.fromCharCode(this.RangeInteger(97, 123)).toUpperCase() // 首字母大写
        continue
      }
      str += String.fromCharCode(this.RangeInteger(97, 123))
    }

    return str
  }
}

export const RandGen = new Generater(0)
