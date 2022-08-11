import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { LogoutOutlined } from '@ant-design/icons'
import { Avatar, Menu, Modal, Spin } from 'antd'

import HeaderDropdown from '../HeaderDropdown'
import classes from './index.module.less'
import { useRecoilState } from 'recoil'
import { globalAtom } from '@/store'
import useLogin from '@/hooks/useLogin'

export interface GlobalHeaderRightProps {
  menu?: boolean
}

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({ menu }) => {
  const [user, setUser] = useRecoilState(globalAtom.user)

  const navigate = useNavigate()

  const { logout } = useLogin()

  const onMenuClick = useCallback(
    (event: { key: any }) => {
      const { key } = event
      if (key === 'logout') {
        Modal.confirm({
          title: '确认退出系统',
          onOk: () => {
            logout()
          }
        })
        return
      }
      navigate(`/account/${key}`)
    },
    [user, setUser]
  )

  const loading = (
    <span className={`account`}>
      <Spin
        size='small'
        style={{
          marginLeft: 8,
          marginRight: 8
        }}
      />
    </span>
  )

  if (!user) {
    return loading
  }

  const menuHeaderConfig = [
    {
      label: '个人信息',
      key: 'userinfo',
      icon: <LogoutOutlined />
    },
    {
      label: '退出登录',
      key: 'logout',
      icon: <LogoutOutlined />
    }
  ]

  const menuHeaderDropdown = (
    <Menu className={'menu'} selectedKeys={[]} onClick={onMenuClick} items={menuHeaderConfig} />
  )
  return (
    <HeaderDropdown overlay={menuHeaderDropdown}>
      <span className={`${classes.action} ${classes.account}`}>
        <Avatar size={26} className={classes.avatar} src={user?.avatar} alt='avatar' />
        <span className={`${classes.name} anticon`}>  {user?.username || '用户名'}</span>
      </span>
    </HeaderDropdown>
  )
}

export default AvatarDropdown
