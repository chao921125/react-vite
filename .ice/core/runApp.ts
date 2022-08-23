import { createElement } from 'react';
import {
  createBaseApp,
  initAppLifeCycles,
  emitLifeCycles,
  getSearchParams,
  initHistory,
  createHistory,
} from 'create-app-shared';
import reactAppRenderer, { RenderAppConfig } from 'react-app-renderer';

// eslint-disable-next-line
import '../../src/global.css';

import loadStaticModules from './loadStaticModules';
import loadRuntimeModules from './loadRuntimeModules';

import { setAppConfig } from './appConfig';
import ErrorBoundary from './ErrorBoundary';
import { IAppConfig, IBuildConfig } from '../types';

const buildConfig: IBuildConfig = { mpa: false, icestarkType: 'es' };
const runtimeValue: any = {};

runtimeValue.enableRouter = true;

// TODO: createBaseApp() 返回一个 createBaseApp，命名需要优化下
const frameworkAppBase = createBaseApp({
  loadRuntimeModules,
  createElement,
  runtimeAPI: {
    createHistory,

    getSearchParams,
  },
  runtimeValue,
});

export function runApp(appConfig: IAppConfig = {}) {
  // store appConfig in case of server side render
  // server bundle will to get appConfig after run runApp
  setAppConfig(appConfig as IAppConfig);
  // load static modules before init runtime such as request
  loadStaticModules(appConfig as IAppConfig);

  // set History before GID
  initHistory && initHistory(appConfig as any);

  if (process.env.__IS_SERVER__) return;
  reactAppRenderer({
    appConfig: appConfig as RenderAppConfig,
    buildConfig,
    ErrorBoundary,
    appLifecycle: {
      createBaseApp: frameworkAppBase,
      initAppLifeCycles,
      emitLifeCycles,
    },
  });
}

export default {
  createBaseApp: frameworkAppBase,
  initAppLifeCycles,
};
