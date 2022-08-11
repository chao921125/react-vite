import React from 'react'

import { ReactComponent as ZhCnSvg } from '@/assets/svg/zh_CN.svg'
import { ReactComponent as EnUsSvg } from '@/assets/svg/en_US.svg'

import enUS from '@/locales/en-us'
import zhCN from '@/locales/zh-cn'

export const localeConfig = [
  {
    label: 'English',
    key: 'en-us',
    messages: enUS,
    icon: <EnUsSvg />
  },
  {
    label: '简体中文',
    key: 'zh-cn',
    messages: zhCN,
    icon: <ZhCnSvg />
  }
]
