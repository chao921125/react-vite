import './style.less'

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import React from 'react'

import AvatarMenu from '../avatar-menu'
import PageBreadcrumb from '../page-breadcrumb'

interface IHeaderProps {
  collapse: boolean
  onTrigger: () => void
}

const HeaderBar: React.FC<IHeaderProps> = props => {
  const { collapse, onTrigger } = props

  return (
    <div className="header-bar">
      <div className="header-bar-left">
        {collapse ? (
          <MenuUnfoldOutlined className="header-bar__trigger" onClick={onTrigger} />
        ) : (
          <MenuFoldOutlined className="header-bar__trigger" onClick={onTrigger} />
        )}

        <PageBreadcrumb />
      </div>

      <div>
        <AvatarMenu />
      </div>
    </div>
  )
}

export default HeaderBar
