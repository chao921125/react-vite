import { Button, Dropdown, Menu, Tabs, Tooltip } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import {
  ColumnWidthOutlined,
  DeleteOutlined,
  SmallDashOutlined,
  VerticalLeftOutlined,
  VerticalRightOutlined,
  RedoOutlined, ArrowsAltOutlined, ShrinkOutlined
} from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { globalAtom, globalSelector } from '@/store'
import useMenu from '@/hooks/useMenu'

export default function NavBar(clickChangeMaximize: React.MouseEventHandler<HTMLElement> | undefined, showMaximize: boolean) {
  const navigate = useNavigate()
  const location = useLocation()
  const navMenus = useRecoilValue(globalAtom.navMenus)
  const menuMap = useRecoilValue(globalSelector.menuMap)
  const { addNavMenus, removeNavMenus, closeAllNavMenus, closeOtherNavMenus, closeLeftNavMenus, closeRightNavMenus } = useMenu()
  const [updateReducer, forceUpdateReducer] = useRecoilState(globalAtom.forceUpdateReducer)// 强制渲染

  // const [reload, setReload] = useState(false)
  //
  // // 重新加载
  // const uploadTab = () => {
  //   setTimeout(() => {
  //     setReload(false)
  //   })
  //   setReload(true)
  // }

  // 关闭左边
  const closeLeftTab = () => {
    closeLeftNavMenus()
  }

  // 关闭右边
  const closeRightTab = () => {
    closeRightNavMenus()
  }

  // 关闭其他
  const closeOtherTab = () => {
    closeOtherNavMenus()
  }

  // 关闭所有
  const closeAllTab = () => {
    closeAllNavMenus()
    navigate('/')
  }

  const tabsDivId = useRef('antd-tabs-divid')
  const [showArrow, setShowArrow] = useState(false)

  useEffect(() => {
    const item = menuMap[location.pathname]
    item && addNavMenus(item)
  }, [menuMap, location.pathname])

  useEffect(() => {
    // 所有tabs标签宽度
    // eslint-disable-next-line
    const tabListWidth = document?.getElementById(tabsDivId.current)?.children[0].children[1].children[0].clientWidth as number
    // console.log('getElementById(tabsDivId.current)', document?.getElementById(tabsDivId.current)?.children[0].children[1].children[0])
    // tabs 可视区域宽度
    // eslint-disable-next-line
    const tabsNavWidth = document?.getElementById(tabsDivId.current)?.children[0].children[1].clientWidth as number
    // console.log('----', document?.getElementById(tabsDivId.current)?.children[0].children[1])
    // console.log('tabListWidth', tabListWidth)
    // console.log('tabsNavWidth', tabsNavWidth)
    if (tabListWidth - tabsNavWidth > 0) {
      setShowArrow(true)
    } else {
      setShowArrow(false)
    }
  })
  // 右箭头点击事件
  const rightButton = () => {
    // eslint-disable-next-line
    const tabList = document?.getElementById(tabsDivId.current)?.children[0].children[1].children[0] as HTMLElement
    // eslint-disable-next-line
    const tabsNav = document?.getElementById(tabsDivId.current)?.children[0].children[1] as HTMLElement
    // 计算偏移量
    if (tabList.clientWidth > tabsNav.clientWidth) {
      // eslint-disable-next-line
      const translateX = Number(tabList.style.cssText.split('px')[0].split('(')[1]) - tabsNav.clientWidth
      if (Math.abs(translateX) < tabList.clientWidth - tabsNav.clientWidth) {
        // eslint-disable-next-line
        tabList.style.cssText = 'transform: translate(' + translateX + 'px, 0px);'
      } else {
        // eslint-disable-next-line
        tabList.style.cssText = 'transform: translate(' + -(tabList.clientWidth - tabsNav.clientWidth) + 'px, 0px);'
      }
    }
  }
  // 左箭头点击事件
  const leftButton = () => {
    // eslint-disable-next-line
    const tabList = document?.getElementById(tabsDivId.current)?.children[0].children[1].children[0] as HTMLElement
    // eslint-disable-next-line
    const tabsNav = document?.getElementById(tabsDivId.current)?.children[0].children[1] as HTMLElement
    if (tabList.clientWidth > tabsNav.clientWidth) {
      // eslint-disable-next-line
      const translateX = Number(tabList.style.cssText.split('px')[0].split('(')[1]) + tabsNav.clientWidth

      if (Math.abs(translateX) < tabList.clientWidth - tabsNav.clientWidth && translateX < 0) {
        // eslint-disable-next-line
        tabList.style.cssText = 'transform: translate(' + translateX + 'px, 0px);'
      } else {
        // eslint-disable-next-line
        tabList.style.cssText = 'transform: translate(' + 0 + 'px, 0px);'
      }
    }
  }

  const menuArr = [
    {
      key: 'closeLeftTabKey',
      label: '关闭左边',
      title: '关闭左边',
      icon: <VerticalRightOutlined />
    },
    {
      key: 'closeRightTabKey',
      label: '关闭右边',
      title: '关闭右边',
      icon: <VerticalLeftOutlined />
    },
    {
      type: 'divider',
      key: Math.random(),
      label: '分割线',
      title: '分割线'
    },
    {
      key: 'closeOtherTabKey',
      label: '关闭其他',
      title: '关闭其他',
      icon: <SmallDashOutlined />
    },
    {
      key: 'closeAllTabKey',
      label: '关闭全部',
      title: '关闭全部',
      icon: <DeleteOutlined />
    }
  ]

  const closeTabHandle = ({ key }:{key:string}) => {
    switch (key) {
      case 'closeLeftTabKey':
        closeLeftTab()
        break
      case 'closeRightTabKey':
        closeRightTab()
        break
      case 'closeOtherTabKey':
        closeOtherTab()
        break
      case 'closeAllTabKey':
        closeAllTab()
        break
    }
  }
  // 更多操作
  const menu = (
    <Menu items={menuArr} style={{ color: '#1890ff' }} onClick={closeTabHandle} />
  )
  // 重新加载
  const uploadTab = () => forceUpdateReducer(true)

  useEffect(() => {
    updateReducer && setTimeout(() => forceUpdateReducer(false))
  }, [updateReducer])

  const operations = {
    left: <>{showArrow ? <Button type='link' icon={<VerticalRightOutlined />} onClick={leftButton} /> : ''}</>,
    right: (
      <>
        {showArrow ? <Button type='link' icon={<VerticalLeftOutlined />} onClick={rightButton} /> : ''}
        <Dropdown overlayStyle={{ color: '#1890ff !important' }} overlay={menu} placement='bottomLeft' arrow>
          <Button type='link' icon={<ColumnWidthOutlined />} />
        </Dropdown>
        <Tooltip placement='bottom' title={'重新加载'}>
          <Button type='link' disabled={updateReducer} onClick={uploadTab} icon={<RedoOutlined />} />
        </Tooltip>
        <Tooltip placement='bottomRight' title={!showMaximize ? '最大化' : '还原'}>
          <Button style={{ marginRight: '8px' }} type='link' icon={!showMaximize ? <ArrowsAltOutlined /> : <ShrinkOutlined />} onClick={clickChangeMaximize} />
        </Tooltip>
      </>
    )
  }
  return (
    <div className='i-navbar'>
      <Tabs
        id={tabsDivId.current}
        size='small'
        type='editable-card'
        style={{ flex: 1 }}
        hideAdd
        activeKey={location.pathname}
        onChange={(path) => {
          navigate(path)
        }}
        tabBarExtraContent={operations}
        onEdit={(key, action) => {
          if (action === 'remove') {
            if (location.pathname === key) {
              navigate('/')
            }
            removeNavMenus(key as string)
          }
        }}
      >
        {navMenus.map((menu, index) => (
          <Tabs.TabPane closable={!!index} tab={menu.title} key={menu.path}></Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  )
}
