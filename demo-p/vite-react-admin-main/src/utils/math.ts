/**
 * 生成指定区间的随机整数
 * @param {Number} min 最小数
 * @param {Number} max 最大数
 * @return {Number}
 */
export const randomNumber = (min: number, max: number): number => Math.floor(min + Math.random() * (max - min + 1))

// 保留到小数点以后n位
export const cutNumber = (number: number, no: number = 2) => Number(number.toFixed(no))
