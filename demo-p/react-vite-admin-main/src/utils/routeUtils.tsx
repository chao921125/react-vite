import { RouterConfig } from '@/routers';
import { Spin } from 'antd';
import { createBrowserHistory } from 'history';
import { Suspense } from 'react';
import { HistoryRouterProps, Outlet, Route } from 'react-router-dom';
/** 生成Route */
export const generateRoute = ({
  routes,
  path = '',
  Component,
  ...other
}: RouterConfig) => {
  return (
    <Route
      path={path}
      key={path}
      element={
        Component ? (
          <Suspense fallback={<Spin className="row_center full_view" />}>
            <Component>
              <Outlet />
            </Component>
          </Suspense>
        ) : (
          <Outlet />
        )
      }
      {...other}>
      {routes?.map((v) => generateRoute(v))}
    </Route>
  );
};

/** 路由树拍平(没有标题 和 路由/屏蔽 有重定向优先重定向) */
export const routeTreeToList = (list: RouterConfig[] = []) => {
  return list.reduce<{ [key: string]: RouterConfig }>(
    (pre, { routes, path, redirect, ...other }) => {
      if (path) {
        pre[path] = {
          ...other,
          redirect,
          routes,
          path: routes ? redirect ?? routes[0].path : path,
        };
      }
      if (routes) {
        pre = {
          ...pre,
          ...routeTreeToList(routes),
        };
      }
      return pre;
    },
    {},
  );
};

export const history = createBrowserHistory({
  window,
}) as unknown as HistoryRouterProps['history'];
