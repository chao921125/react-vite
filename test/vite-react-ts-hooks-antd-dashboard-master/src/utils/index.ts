/**
 * 是否是0
 * @param value
 */
export const isFalsy = (value: number) => (value === 0 ? false : !value)

/**
 * 清空对象中空值键
 * @param object
 */
export const cleanObject = (object: any) => {
  const result = { ...object }
  Object.keys(result).forEach((key) => {
    const value = result[key]
    if (isFalsy(value)) {
      delete result[key]
    }
  })
  return result
}
