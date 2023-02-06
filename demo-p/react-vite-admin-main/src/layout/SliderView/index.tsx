import useSliderModel from '@/models/useSliderModel';
import { asyncRoutes, RouterConfig } from '@/routers';
import { history } from '@/utils/routeUtils';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
// 处理menu
export const generateMenu = (configs: RouterConfig[] = []): ItemType[] => {
  return configs.reduce<ItemType[]>(
    (pre, { routes, path, meta: { title, icon, hiddenMenu } = {} }) => {
      if (!hiddenMenu && path) {
        pre.push({
          key: path,
          icon,
          label: routes ? title : <Link to={path}>{title}</Link>,
          children: routes?.some((v) => !v.meta?.hiddenMenu)
            ? generateMenu(routes)
            : undefined,
        });
      }
      return pre;
    },
    [],
  );
};
// 侧边栏
const SiderView = () => {
  const { paths } = useSliderModel();
  const pathname = window.location.pathname;
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  /** 计算menus */
  const menus = useMemo(() => {
    return generateMenu(asyncRoutes[0]?.routes);
  }, []);
  const onMenuClick = useCallback<Required<MenuProps>['onClick']>(({ key }) => {
    history.push(key);
  }, []);
  useEffect(() => {
    setOpenKeys(paths);
  }, [paths]);

  return (
    <Menu
      onClick={onMenuClick}
      mode="inline"
      theme="light"
      defaultSelectedKeys={[pathname]}
      selectedKeys={[pathname]}
      onOpenChange={setOpenKeys}
      openKeys={openKeys}
      items={menus}
    />
  );
};
export default memo(SiderView);
