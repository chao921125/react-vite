/**
 * name: 微应用名称 - 具有唯一性
 * entry: 微应用入口 - 通过该地址加载微应用，这里我们使用 config 配置
 * container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
 * activeRule: 微应用触发的路由规则 - 触发路由规则后将加载该微应用
 */

// import { RegistrableApp } from 'qiankun'

const apps: Array<any> = [
  {
    name: 'MICRO1_Vue2_APP',
    entry: import.meta.env.VITE_qiankun_micro_vue2,
    container: '#frame',
    activeRule: '/micro1',
    props: {
      // 额外参数
      prop_module: 'vite react17',
    },
  },
  {
    name: 'MICRO2_React_APP',
    entry: import.meta.env.VITE_qiankun_micro_react,
    container: '#frame',
    activeRule: '/micro2',
    props: {
      // 额外参数
      prop_module: 'vite react17',
    },
  },
]

export default apps
