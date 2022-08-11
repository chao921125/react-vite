import { helperStrTrim, helperStrTrimAll, helperStrTrimLeft, helperStrTrimRight } from '../../utils/helperStr'

describe('字符串测试', () => {
  test('string trim函数', () => {
    // expect(helperStrTrim('中文字符')).toBe('中文字符')
    // expect(helperStrTrim(' 中文字符')).toBe('中文字符')
    // expect(helperStrTrim(' 中文字符 ')).toBe('中文字符')
    // expect(helperStrTrim('中文 字符')).toBe('中文 字符')
    expect(helperStrTrim(' 中文 字符')).toBe('中文 字符')
  })

  test('string 去除所有空格', () => {
    expect(helperStrTrimAll(' 中文 字符')).toBe('中文字符')
  })

  test('string 去除左侧空格', () => {
    // expect(helperStrTrimLeft(' 中文 字符')).toBe('中文 字符')
    // expect(helperStrTrimLeft('中文 字符')).toBe('中文 字符')
    // expect(helperStrTrimLeft('中文 字符 ')).toBe('中文 字符 ')
    expect(helperStrTrimLeft(' 中文 字符 ')).toBe('中文 字符 ')
  })

  test('string 去除右侧空格', () => {
    // expect(helperStrTrimRight(' 中文 字符')).toBe(' 中文 字符')
    // expect(helperStrTrimRight('中文 字符')).toBe('中文 字符')
    // expect(helperStrTrimRight('中文 字符 ')).toBe('中文 字符')
    expect(helperStrTrimRight(' 中文 字符 ')).toBe(' 中文 字符')
  })
})
