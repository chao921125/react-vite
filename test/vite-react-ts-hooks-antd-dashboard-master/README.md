# 介绍

> 基于vite、react18、ts、hooks、antd、react-query、recoil等（非ANT DESIGN PRO）开箱即用混合模式，支持多标签的管理后台模板
## 演示地址

 > [https://vite-react-ts-hooks-antd-dashboard.vercel.app/](https://vite-react-ts-hooks-antd-dashboard.vercel.app/)

## 项目依赖
* "antd",
* "recoil",
* "admin",
* "tabs",
* "hook",
* "react-router-dom6",
* "react",
* "react-query",
* "vite"

# 项目启动

## 安装yarn
```
npm install -g yarn
```

## 安装依赖
```
yarn
```

## 开发服务启动
```
yarn dev
```
## 目录结构
```
|- src
    |- @type 类型声明文件
    |- api 接口请求实现
    |- assets 资源文件（img/svg）
    |- components 通用组件
    |- config 配置文件、环境差异配置
    |- hooks 钩子函数库
    |- layout 布局组件
    |- locales 国际化文件
    |- page 页面组件
    |- router 路由配置
    |- stors 状态管理
    |- utils 工具函数
```
## 部署

待完成

# 组件添加

https://ant.design/components/overview-cn/

在antd官网预览并选择组建，在项目中使用以下方式引入即可:

```js
import {Table, Tag, Space} from 'antd'

```

# 提交规范
```js
Git message

feat: {
    description: 'A new feature',
    title: 'Features',
    emoji: '✨',
},
fix: {
    description: 'A bug fix',
    title: 'Bug Fixes',
    emoji: '🐛',
},
docs: {
    description: 'Documentation only changes',
    title: 'Documentation',
    emoji: '📚',
},
style: {
    description:
        'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
    title: 'Styles',
    emoji: '💎',
},
refactor: {
    description:
        'A code change that neither fixes a bug nor adds a feature',
    title: 'Code Refactoring',
    emoji: '📦',
},
perf: {
    description: 'A code change that improves performance',
    title: 'Performance Improvements',
    emoji: '🚀',
},
test: {
    description: 'Adding missing tests or correcting existing tests',
    title: 'Tests',
    emoji: '🚨',
},
build: {
    description:
        'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
    title: 'Builds',
    emoji: '🛠',
},
ci: {
    description:
        'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
    title: 'Continuous Integrations',
    emoji: '⚙️',
},
chore: {
    description: "Other changes that don't modify src or test files",
    title: 'Chores',
    emoji: '♻️',
},
revert: {
    description: 'Reverts a previous commit',
    title: 'Reverts',
    emoji: '🗑',
}

```
