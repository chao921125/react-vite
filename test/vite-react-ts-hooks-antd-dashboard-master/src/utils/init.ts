import { notification } from 'antd'

export const initNotification = () => {
  notification.config({ maxCount: 5, duration: 10 })
}

const loadStyle = (url: string) => {
  const link = document.createElement('link')
  link.type = 'text/css'
  link.rel = 'stylesheet'
  link.href = url
  const head = document.getElementsByTagName('head')[0]
  head.appendChild(link)
}

/**
 * 加载icon字体图标
 */
export const initLoadIcon = () => {
  const iconUrls = [
    '//at.alicdn.com/t/font_3215430_h2bwggemk9w.css' // 字体图标地址
    // '//at.alicdn.com/t/font_567566_qo5lxgtishg.css',
    // '//at.alicdn.com/t/font_667895_v7uduh4zui.css',
    // '//at.alicdn.com/t/font_1638883_qi08jij1ln.css',
    // '//at.alicdn.com/t/font_2370986_3h47drwkre5.css',
    // '//at.alicdn.com/t/font_2370987_ze1dc8mt8qg.css',
    // '//at.alicdn.com/t/font_2370987_zafofkbmr8p.css'
  ]
  iconUrls.forEach((ele) => {
    loadStyle(ele)
  })
}
