import './style.less'

import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Dropdown, Menu, message } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'

function AvatarMenu() {
  const history = useHistory()

  const handleMenuClick = ({ key }: any) => {
    switch (key) {
      case 'mine':
        break
      case 'setting':
        break
      case 'logout':
        localStorage.clear()
        history.replace('/account/login')
        break
      default:
        message.warning('没有该操作')
    }
  }

  const getMenuList = () => (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="mine">
        <UserOutlined />
        个人中心
      </Menu.Item>
      <Menu.Item key="setting">
        <SettingOutlined />
        个人设置
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">
        <LogoutOutlined />
        退出登录
      </Menu.Item>
    </Menu>
  )

  return (
    <Dropdown overlay={getMenuList}>
      <div className="header-bar-avatar">
        <Avatar icon={<UserOutlined />} />
        <div className="username">用户名</div>
      </div>
    </Dropdown>
  )
}

export default AvatarMenu
