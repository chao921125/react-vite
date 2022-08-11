import { Button, Menu, Modal, Row, Space } from 'antd'
import { FullscreenExitOutlined, FullscreenOutlined, PoweroffOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'

import Avatar from './AvatarDropdown'
import HeaderDropdown from '../HeaderDropdown'
import HeaderSearch from '../HeaderSearch'
// import "./index.less";
import classes from './index.module.less'
import SelectLang from './SelectLang'

import screenfull from 'screenfull'
import useLogin from '@/hooks/useLogin'
import type { AutoCompleteProps } from 'antd/es/auto-complete'
import { useRecoilValue } from 'recoil'
import { globalAtom } from '@/store'
import { Link } from 'react-router-dom'

export type SiderTheme = 'light' | 'dark'

const GlobalHeaderRight: React.FC = () => {
  const className = `${classes.right} ${classes.light}`
  const { logout } = useLogin()
  const [screenfullState, updateScreenfullState] = useState(false)
  const menuTrees = useRecoilValue(globalAtom.menus)

  const screenfullToggle = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle()
    }
  }

  const escFunction = () => {
    updateScreenfullState(!screenfullState)
  }

  useEffect(() => {
    // 监听退出全屏事件 --- chrome 用 esc 退出全屏并不会触发 keyup 事件
    document.addEventListener('webkitfullscreenchange', escFunction, { passive: false }) /* Chrome, Safari and Opera */
    document.addEventListener('mozfullscreenchange', escFunction, { passive: false }) /* Firefox */
    document.addEventListener('fullscreenchange', escFunction, { passive: false }) /* Standard syntax */
    document.addEventListener('msfullscreenchange', escFunction, { passive: false }) /* IE / Edge */
    return () => {
      // 销毁时清除监听
      document.removeEventListener('webkitfullscreenchange', escFunction)
      document.removeEventListener('mozfullscreenchange', escFunction)
      document.removeEventListener('fullscreenchange', escFunction)
      document.removeEventListener('MSFullscreenChange', escFunction)
    }
  })
  const headerDropdownConfig = [
    {
      label: '文档',
      key: 'wendang1',
      onClick: () => {
        window.open('/~docs')
      }
    },
    {
      label: 'Ant Design Pro 文档',
      key: 'wendang2',
      onClick: () => {
        window.open('https://pro.ant.design/docs/getting-started')
      }
    }
  ]

  // 将树形节点改为一维数组
  const generateList = (data: any, dataList: any[]) => {
    for (const node of data) {
      const newNode = { ...node }
      dataList.push(newNode)
      if (node?.children) {
        generateList(node.children, dataList)
      }
    }

    return dataList
  }

  const [searchOptions, setSearchOptions] = useState<AutoCompleteProps['options']>([])

  useEffect(() => {
    const menuList = generateList(menuTrees, [])
    const searchOptionArr = menuList.map((item) => {
      if (item.type !== 'outlink') {
        return {
          label: <Link to={item.path}>{item.name}</Link>,
          value: item.name
        }
      }
      // console.log('item.path', item.path)
      return {
        label: <a onClick={() => {
          window.open(item.path)
        }}>{item.name}</a>,
        value: item.name
      }
    })
    setSearchOptions(searchOptionArr)
  }, [menuTrees])
  return (
    <Space className={className}>
      <HeaderSearch
        className={`${classes.action} ${classes.search}`}
        placeholder='菜单搜索'
        defaultValue='Home'
        options={searchOptions}
        onSearch={(value) => {
          console.log('input', value)
        }}
      />
      <HeaderDropdown
        className={classes.action}
        overlay={
          <Menu items={headerDropdownConfig} />
        }
      >
        <span>
          <QuestionCircleOutlined />
        </span>
      </HeaderDropdown>

      <Button type='link' style={{ touchAction: 'none' }} icon={!screenfullState ? <FullscreenOutlined /> : <FullscreenExitOutlined />} onClick={screenfullToggle} />
      <SelectLang className={classes.action} />
      <Avatar />

      <Space style={{ transform: 'translateY(-1px)' }}>|</Space>

      <Row
        align='middle'
        style={{ cursor: 'pointer' }}
        onClick={() => {
          Modal.confirm({
            title: '确认退出系统',
            onOk: () => {
              logout()
            }
          })
        }}
      >
        <PoweroffOutlined style={{ marginRight: 8 }} />
            退出
      </Row>
    </Space>
  )
}
export default GlobalHeaderRight
