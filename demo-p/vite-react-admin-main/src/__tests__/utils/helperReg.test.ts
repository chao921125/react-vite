import {
  helperValidateThousandth,
  helperValidateAllChinese,
  helperValidateIncludeChinese,
  helperValidateEscape,
  helperValidateUnEscape,
  helperValidateRepeatStr,
} from '../../utils/helperReg'

describe('正则测试', () => {
  test('Reg 千分位', () => {
    expect(helperValidateThousandth(1236789.12)).toBe('1,236,789.12')
  })

  it('Reg 是否是都由中文组成', () => {
    expect(helperValidateAllChinese('中文字符')).toBe(true)
  })

  it('Reg 是否包含中文', () => {
    expect(helperValidateIncludeChinese('中文字符123')).toBe(true)
  })

  it('Reg HTML转义', () => {
    const htmlStr = `
      <div>
        <p>hello world</p>
      </div>
    `
    const htmlEscapeStr = `
      &lt;div&gt;
        &lt;p&gt;hello world&lt;/p&gt;
      &lt;/div&gt;
    `
    expect(helperValidateEscape(htmlStr)).toBe(htmlEscapeStr)
  })

  it('Reg HTML反转义', () => {
    const htmlUnEscapeStr = `
      &lt;div&gt;
        &lt;p&gt;hello world&lt;/p&gt;
      &lt;/div&gt;
    `
    const htmlStr = `
      <div>
        <p>hello world</p>
      </div>
    `
    expect(helperValidateUnEscape(htmlUnEscapeStr)).toBe(htmlStr)
  })

  it('Reg 提取连续重复的字符', () => {
    // expect(helperValidateRepeatStr('12323454545666')).toStrictEqual(['23', '45', '6'])
    expect(helperValidateRepeatStr('5666')).toStrictEqual(['6'])
  })
})
