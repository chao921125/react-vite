import { getFileExt } from '../../utils/file'

describe('文件测试', () => {
  test('file 文件后缀名', () => {
    expect(getFileExt('test.1.mp4')).toBe('mp4')
  })
})
