import { localeConfig } from '@/config/locale'
import { ConfigProvider } from 'antd'

import 'moment/dist/locale/zh-cn'
import React, { useEffect, Suspense } from 'react'
import { IntlProvider } from 'react-intl'
import { HashRouter } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import '@/styles/App.less'
import { globalAtom } from '@/store'
import moment from 'moment'
import enUS from 'antd/es/locale/en_US'
import zhCN from 'antd/es/locale/zh_CN'
import { initLoadIcon, initNotification } from './utils/init'
// import ILayout from '@/components/layout'
import { AutoRoutes } from '@/router'
import NProgressWithNode from '@/components/nProgress'

export default function App() {
  const [locale] = useRecoilState(globalAtom.locale)

  useEffect(() => {
    initNotification()
    initLoadIcon()
  }, [])

  useEffect(() => {
    if (locale.toLowerCase() === 'en-us') {
      moment.locale('en')
    } else if (locale.toLowerCase() === 'zh-cn') {
      moment.locale('zh')
    }
  }, [locale])

  const getAntdLocale = () => {
    if (locale.toLowerCase() === 'en-us') {
      return enUS
    } else if (locale.toLowerCase() === 'zh-cn') {
      return zhCN
    }
  }
  const getLocale = () => {
    const lang = localeConfig.find((item) => {
      return item.key === locale.toLowerCase()
    })
    return lang?.messages
  }

  return (
    <ConfigProvider locale={getAntdLocale()} componentSize='middle'>
      <IntlProvider locale={locale.split('-')[0]} messages={getLocale()}>
        <div className='App'>
          <HashRouter>
            <Suspense fallback={<NProgressWithNode></NProgressWithNode>}>
              <AutoRoutes></AutoRoutes>
            </Suspense>
          </HashRouter>
        </div>
      </IntlProvider>
    </ConfigProvider>
  )
}
