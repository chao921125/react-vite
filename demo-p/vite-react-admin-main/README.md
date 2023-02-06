# vite-react-admin

React TypeScript Vite 后台管理系统

## 技术选择

- React
- TypeScript
- vite
- Ant Design
- axios
- less

## 多环境

Vite 在一个特殊的 import.meta.env 对象上暴露环境变量，只有以 VITE\_ 为前缀的变量才会暴露给经过 vite 处理的代码。

- .env # 所有情况下都会加载
- .env.local # 所有情况下都会加载，但会被 git 忽略
- .env.[mode] # 只在指定模式下加载
- .env.[mode].local # 只在指定模式下加载，但会被 git 忽略

项目支持 development (开发) 模式、production (生产) 模式、staging (预发布|预上线) 模式、mock 数据模式

### 开发模式运行

```
npm run dev
```

### 生产模式

```
npm run build
npm run serve
```

### 使用 mock 数据模式预览

启动 mock 服务

```
npm run mock-server
```

启动应用

```
npm run dev:mock
```

## 功能

- 登录/退出
- 侧边菜单
- 个人中心
- 首页
- permission 权限测试页
- icon 图标
