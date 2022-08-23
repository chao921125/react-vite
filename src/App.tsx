import { runApp, IAppConfig } from 'ice';

const appConfig: IAppConfig = {
  app: {
    // 可选，默认 ice-container，根节点 id
    rootId: 'ice-container',

    // 可选，默认 true，是否解析路由组件的查询参数
    parseSearchParams: true,

    // 可选，默认 false，是否开启 React.StrictMode，icejs 2.0 开始支持
    strict: false,

    // 可选，自定义错误的处理事件
    onErrorBoundaryHandler: (error, componentStack) => {
      // Do something with the error
    },
  },
  store: {},
  router: {
    type: 'hash',
  },
  request: {},
};

runApp(appConfig);
