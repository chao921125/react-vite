import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu } from 'antd'

import { useRecoilValue } from 'recoil'
import { globalAtom, globalSelector } from '@/store'
import type { ItemType } from 'antd/lib/menu/hooks/useItems'
import Icon from '@/components/icon'
import logoPic from '@/assets/img/logo.png'

export default function SiderMenu() {
  const navigate = useNavigate()
  const location = useLocation()
  const menuTrees = useRecoilValue(globalAtom.menus)
  const menuMapSelector = useRecoilValue(globalSelector.menuMap)
  const collapsed = useRecoilValue(globalAtom.collapsed)
  const [menuArr, setMenuArr] = useState<ItemType[]>([])
  const selectedMenuRef = useRef<NSP.Menu | null>(null)
  const [openKeys, setOpenKeys] = useState<string[]>([])

  const menuMaps = useRecoilValue(globalAtom.menus)
  // 将树形节点改为一维数组
  const generateList = (data: NSP.Menu[], dataList: NSP.Menu[]) => {
    for (const node of data) {
      const newNode = { ...node }
      dataList.push(newNode)
      if (node?.children) {
        generateList(node.children, dataList)
      }
    }

    return [...dataList]
  }
  // 根据 path 获取顶级menu
  const getTopPath = (path:string):string => {
    const currentMenu:NSP.Menu = menuMapSelector[path]
    if (currentMenu?.parent_id > 0) {
      const menuList: NSP.Menu[] = generateList(menuTrees, [])
      const parentMenu = menuList?.filter((item) => item.id === currentMenu?.parent_id)[0]

      return parentMenu ? getTopPath(parentMenu.path) : currentMenu?.path
    }
    return currentMenu?.path
  }

  // 设置 openKeys
  useEffect(() => {
    const currentMenu:NSP.Menu = menuMapSelector[location.pathname]
    if (currentMenu) {
      // 非topLevelMenu,清空openKey
      if (currentMenu.parentId > 0) {
        setOpenKeys([])
      }
      const menuList: NSP.Menu[] = generateList(menuTrees, [])
      const parentMenu = menuList?.filter((item) => (item.id === currentMenu.parentId) && item.parentId > 0)[0]
      if (parentMenu) {
        const opkeys = openKeys.filter((itPath) => itPath === parentMenu.path).length > 0 ? openKeys : [...openKeys, parentMenu.path]
        setOpenKeys(opkeys)
      }
    }
  }, [location, menuMaps])

  // 设置 submenu
  useEffect(() => {
    const currentTopPath = getTopPath(location.pathname)
    // 非topLevelMenu,重置选中menu
    if ((currentTopPath !== location.pathname)) {
      selectedMenuRef.current = menuMapSelector[location.pathname]
    }
    const siderMenus:NSP.Menu = menuMapSelector[currentTopPath]
    const menuTree = siderMenus?.children || [siderMenus]
    // console.log('menuTree==', menuTree)
    const loopMenu = (nodes: NSP.Menu[]): ItemType[] => {
      return nodes.map((item: NSP.Menu) => {
        return (item?.children && item.children.length > 0) ? {
          key: item?.path,
          label: item?.title,
          title: item?.title,
          // icon: item?.icon && <i className={`iconfont ${item.icon} ant-menu-item-icon`}></i>,
          icon: item?.icon && <Icon type={`icon-${item.icon}`}/>,
          children: loopMenu(item.children)
        } : {
          key: item?.path,
          label: item?.title,
          title: item?.title,
          icon: item?.icon && <Icon type={`icon-${item.icon}`}/>
        }
      })
    }

    setMenuArr(loopMenu(menuTree))
  }, [location, menuTrees])

  const menuHandleClick = useCallback(
    async ({ key }: { key: string }, showTip = true) => {
      const menuData = menuMapSelector[key]
      if (menuData) {
        navigate(menuData.path)
      }
    },
    [menuMapSelector]
  )

  const Logo = useMemo(() => {
    if (collapsed) {
      return <img style={{ width: '59px', height: '45px' }} alt='logo' src={logoPic}/>
    }
    return (
      <>
        <img alt='logo' src={logoPic}/>
        {/* <div style={{ fontSize: 24, fontWeight: 700, transform: 'scale(1,1.25)' }}>*/}
        {/*  &nbsp; BOOKING*/}
        {/* </div>*/}
      </>
    )
  }, [collapsed])

  return (
    <div className='i-sider'>
      <a className='logo' href='#/'>
        {Logo}
      </a>

      <Menu
        theme='dark'
        className='i-sider-menu'
        mode='inline'
        openKeys={openKeys}
        onOpenChange={(openKeys) => {
          setOpenKeys(openKeys)
        }}
        selectedKeys={[selectedMenuRef.current?.path || '/']}
        style={{ width: 'auto' }}
        items={menuArr}
        onClick={(item) => menuHandleClick(item)}
      />
    </div>
  )
}
