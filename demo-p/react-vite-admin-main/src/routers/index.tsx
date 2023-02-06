import { ReactNode } from 'react';
import BasicLayout from '@/layout/BasicLayout';
import { BreadConfig } from '@/layout/BreadcrumbView';
import NotFound from '@/layout/NotFound';
import Login from '@/pages/login';
import test from '@/pages/test';
import { SettingFilled } from '@ant-design/icons';
import { routeTreeToList } from '@/utils/routeUtils';

export interface TabConfig {
  alwayTag?: boolean; // 是否一直存在
  url: string; // 跳转地址
  title?: string; // 标题
  activated?: boolean; // 是否当前显示
}
export interface RouterConfig {
  path?: string; // 路径
  Component?: React.ComponentType<{ children?: ReactNode }>; // 组件
  tagName?: string; // 标签名称(详情使用)
  redirect?: string; // 重定向地址
  routes?: RouterConfig[]; // 多级路由
  meta?: {
    icon?: ReactNode; // 图标
    hiddenMenu?: boolean; // 是否隐藏menu
    white?: boolean; // 白名单
    hiddenTab?: boolean; // 是否隐藏tag
    noCache?: boolean; // 不缓存页面
    title?: string;
  };
  breadList?: BreadConfig[];
}
export const constantRoutes: RouterConfig[] = [
  {
    path: '/login',
    Component: Login,
    meta: {
      title: '登录',
    },
  },
  {
    path: '*',
    Component: NotFound,
    meta: {
      title: '404',
    },
  },
];
export const asyncRoutes: RouterConfig[] = [
  {
    path: '/',
    Component: BasicLayout,
    meta: {
      title: '首页',
    },
    routes: [
      {
        path: '/test',
        Component: test,
        meta: {
          title: 'test',
          icon: <SettingFilled />,
          white: true,
        },
      },
      {
        path: '/test1',
        Component: test,
        meta: {
          title: 'test1',
          icon: <SettingFilled />,
          white: true,
        },
      },
      {
        path: '/menus',
        Component: test,
        meta: {
          title: '菜单栏',
          icon: <SettingFilled />,
          white: true,
        },
        routes: [
          {
            path: '/menus/menu1',
            Component: test,
            meta: {
              title: '菜单栏1',
              icon: <SettingFilled />,
              white: true,
            },
          },
          {
            path: '/menus/menu2',
            Component: test,
            meta: {
              title: '菜单栏2',
              icon: <SettingFilled />,
              white: true,
            },
          },
        ],
      },
    ],
  },
];

export const routesObject = routeTreeToList(asyncRoutes);
