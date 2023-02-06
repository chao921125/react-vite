import { version } from '@/../package.json';
import useSliderModel from '@/models/useSliderModel';
import { logout } from '@/utils/loginUtils';
import { history } from '@/utils/routeUtils';
import { DownOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Dropdown, MenuProps } from 'antd';
import { createElement } from 'react';
import BreadcrumbView from '../BreadcrumbView';
import styles from './index.module.less';
const Nav = () => {
  const { collapsed, setCollapsed } = useSliderModel();
  /** menu点击 */
  const onAvatarMenuClick: MenuProps['onClick'] = ({ key }) => {
    switch (key) {
      case 'home':
        history.push('/');
        break;
      default:
        logout();
        break;
    }
  };

  return (
    <nav className={styles.nav}>
      <div className="flex">
        {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: styles.trigger,
          onClick: () => setCollapsed(!collapsed),
        })}
        <BreadcrumbView />
      </div>
      <div className="mr-3 flex-1 text-right">v{version}</div>
      <Dropdown
        menu={{
          onClick: onAvatarMenuClick,
          items: [
            { key: 'home', label: '首页' },
            {
              key: 'login_out',
              label: '退出登录',
            },
          ],
        }}>
        <div className="flex justify-center items-center cursor-pointer w-fit mr-3">
          <img
            src="https://pic2.zhimg.com/80/v2-26f75c5243e4b44946d95fb69b49f8c1_1440w.webp"
            alt="头像"
            className="w-8 h-8 rounded-lg"
          />
          <div className="ml-2 mr-1 text-xs">白运齐</div>
          <DownOutlined />
        </div>
      </Dropdown>
    </nav>
  );
};
export default Nav;
