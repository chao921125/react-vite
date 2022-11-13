// 去除字符串前后空格，等同于 string.trim() 方法
export const helperStrTrim = (value: string) => value.replace(/^\s*|\s*$/g, '')

// 去除字符串所有空格
export const helperStrTrimAll = (value: string) => value.replace(/\s*/g, '')

// 去除字符串左侧空格
export const helperStrTrimLeft = (value: string) => value.replace(/^\s*/, '')

// 去除字符串右侧空格
export const helperStrTrimRight = (value: string) => value.replace(/(\s*$)/g, '')
