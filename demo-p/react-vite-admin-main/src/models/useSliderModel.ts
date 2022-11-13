import { routesObject } from '@/routers';
import { hiddenSpinner } from '@/utils/loadingUtils';
import { history } from '@/utils/routeUtils';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { createModel } from 'rmox';

const useSliderModel = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { pathname } = useLocation();
  const [paths, setPaths] = useState<string[]>([]);
  /** 监听路由改变切换展开项 */
  useEffect(() => {
    const paths = pathname.split('/').reduce<string[]>(
      (pre, cur) => {
        if (cur) {
          const last = pre.at(-1);
          pre.push(`${last === '/' ? '' : last || ''}/${cur}`);
        }
        return pre;
      },
      ['/'],
    );
    const route = routesObject[pathname];
    /** 如果当前地址不正确 重定向到对应地址 */
    if (route && route.path && route.path !== pathname) {
      history.push(route.path);
    } else {
      setPaths(paths);
    }
    hiddenSpinner();
  }, [pathname]);
  return { paths, collapsed, pathname, setCollapsed };
};
export default createModel(useSliderModel);
