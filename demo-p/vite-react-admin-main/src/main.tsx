import './styles/index.css'
import './styles/app.less'

import startQiankun from './micro'

import { ConfigProvider } from 'antd'
import zh_CN from 'antd/es/locale-provider/zh_CN'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

// ReactDOM.render(
//   <React.StrictMode>
//     <ConfigProvider locale={zh_CN}>
//       <App />
//     </ConfigProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// )

async function startApp() {
  try {
    // await store.dispatch('globalStore/updateSysAction');
  } catch (e) {
    console.log('获取系统信息失败')
  } finally {
    // 启动应用
    startQiankun()
    ReactDOM.render(
      <React.StrictMode>
        <ConfigProvider locale={zh_CN}>
          <App />
        </ConfigProvider>
      </React.StrictMode>,
      document.getElementById('root')
    )
  }
}

startApp()
