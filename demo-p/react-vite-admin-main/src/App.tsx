import { generateRoute, history } from '@/utils/routeUtils';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import { Routes, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { GlobalProvider } from 'rmox';
import { asyncRoutes, constantRoutes } from './routers';
export default () => {
  return (
    <GlobalProvider>
      <ConfigProvider locale={zhCN}>
        <HistoryRouter history={history}>
          <Routes>
            {asyncRoutes.map(generateRoute)}
            {constantRoutes.map(generateRoute)}
          </Routes>
        </HistoryRouter>
      </ConfigProvider>
    </GlobalProvider>
  );
};
