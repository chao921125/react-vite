import { cutNumber } from '../../utils/math'

describe('Number测试', () => {
  test('number 保留到小数点以后n位', () => {
    // expect(cutNumber(2.212, 1)).toBe(2.2)
    expect(cutNumber(2.212, 0)).toBe(2)
  })
})
