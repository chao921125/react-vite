// // import NProgress from "nprogress";
// // import "nprogress/nprogress.css";
import { message } from 'antd'

import { registerMicroApps, addGlobalUncaughtErrorHandler, start } from 'qiankun'

// // 子应用注册信息
import apps from './apps'

// /**
//  * 注册子应用
//  * 第一个参数 - 子应用的注册信息
//  * 第二个参数 - 全局生命周期钩子
//  */

registerMicroApps(apps, {
  // qiankun 生命周期钩子 - 加载前
  beforeLoad: app => {
    // 加载子应用前，加载进度条
    // NProgress.start();
    console.log('before load', app.name)
    return Promise.resolve()
  },
  // qiankun 生命周期钩子 - 挂载后
  afterMount: app => {
    // 加载子应用前，进度条加载完成
    // NProgress.done();
    console.log('after mount', app.name)
    return Promise.resolve()
  },
  // qiankun 生命周期狗子 - 卸载后
  afterUnmount: async app => await console.log(`%c After unmount', ${app.name}`, 'background: red; color: #fff'),
})

/**
 * 添加全局的未捕获异常处理器
 */
addGlobalUncaughtErrorHandler((event: any) => {
  // console.error(event);
  const { message: msg } = event
  // 加载失败时提示
  if (msg && msg.includes('died in status LOADING_SOURCE_CODE')) {
    message.error('子应用加载失败，请检查应用是否可运行')
    console.log('子应用加载失败，请检查应用是否可运行')
  }
})

// 导出 qiankun 的启动函数
export default start
