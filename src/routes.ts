import { IRouterConfig, lazy } from 'ice';
import Layout from '@/Layouts/BasicLayout';

const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Home = lazy(() => import('@/pages/Home'));
const Canvas = lazy(() => import('@/pages/Canvas'));
const NotFound = lazy(() => import('@/components/NotFound'));

const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    component: Layout,
    children: [{
      path: '/dashboard',
      component: Dashboard,
      pageConfig: {
        title: '登录页面',
      },
    }, {
      path: '/',
      exact: true,
      component: Home,
      pageConfig: {
        title: '首页',
      },
    },  {
      path: '/demo-canvas',
      exact: true,
      component: Canvas,
      pageConfig: {
        title: 'map',
      },
    }, {
      component: NotFound,
    }],
  },
];

export default routerConfig;
