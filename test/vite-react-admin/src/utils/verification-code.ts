import { randomNumber } from '@/utils/math'

/*
  生成验证码
 */
export const verificationCode = (canvas: any): string => {
  const ctx = canvas.getContext('2d')
  // i，o和1，0比较相似，不好区分，所以不出现这两个字母
  const chars = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'm',
    'n',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'M',
    'N',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ]
  let code = ''
  ctx.clearRect(0, 0, 80, 39)
  for (let i = 0; i < 4; i++) {
    const char = chars[randomNumber(0, 56)]
    code += char
    // 设置字体随机大小
    ctx.font = randomNumber(20, 25) + 'px SimHei'
    // 文字颜色
    ctx.fillStyle = '#D3D7F7'
    ctx.textBaseline = 'middle'
    // 文字边缘阴影，制造模糊效果
    ctx.shadowOffsetX = randomNumber(-3, 3)
    ctx.shadowOffsetY = randomNumber(-3, 3)
    ctx.shadowBlur = randomNumber(-3, 3)
    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'
    const x = (80 / 5) * (i + 1)
    const y = 39 / 2
    const deg = randomNumber(-25, 25)
    // 设置旋转角度和坐标原点
    ctx.translate(x, y)
    ctx.rotate((deg * Math.PI) / 180)
    ctx.fillText(char, 0, 0)
    // 恢复旋转角度和坐标原点
    ctx.rotate((-deg * Math.PI) / 180)
    ctx.translate(-x, -y)
  }
  return code
}
