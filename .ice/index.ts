import logger from './plugins/logger';
export * from './plugins/router';
import { config, APP_MODE } from './plugins/config';
import { Helmet } from 'react-helmet';
export * from './plugins/auth/pluginRuntime/runtime/Auth';
import request from './plugins/request/request';
import useRequest from './plugins/request/useRequest';

export {
  logger,
  config,
  APP_MODE,
  Helmet as Head,
  // @deprecated
  Helmet,
  request,
  useRequest,
};

export * from './core/routerAPI';
export * from './core/publicAPI';

export { lazy } from './core/lazy';

export * from './core/runApp';
export * from './types';
