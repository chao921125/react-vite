import type { DropDownProps } from 'antd/es/dropdown'
import { Dropdown } from 'antd'
import React from 'react'
import classNames from 'classnames'
import './index.less'

export type HeaderDropdownProps = {
  overlayClassName?: string
  overlay: React.ReactNode | (() => React.ReactNode) | any
  placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'top' | 'topRight' | 'bottom'
} & Omit<DropDownProps, 'overlay'>

const HeaderDropdown: React.FC<HeaderDropdownProps> = ({ overlayClassName: cls, ...restProps }) => <Dropdown overlayClassName={classNames('container', cls)} {...restProps} />

export default HeaderDropdown
