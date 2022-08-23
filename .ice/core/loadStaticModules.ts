import module0 from '../plugins/request/pluginRuntime/runtime';

import type { IAppConfig } from '../types';

function loadStaticModules(appConfig: IAppConfig) {
  module0({ appConfig });
}

export default loadStaticModules;
