import React, { useMemo } from 'react'
import { Menu } from 'antd'
import { useRecoilValue } from 'recoil'
import { globalAtom } from '@/store'
import { useLocation, useNavigate } from 'react-router-dom'
import Icon from '@/components/icon'

const HeaderMenu = () => {
  const menuMap = useRecoilValue(globalAtom.menus)
  const location = useLocation()
  const navigate = useNavigate()

  const topLevelMenus = useMemo(() => {
    return menuMap.map((item:NSP.Menu) => {
      return {
        label: item.name,
        title: item.label,
        key: item.path,
        icon: item.icon && <Icon size='large' type={`icon-${item.icon}`}/>
      }
    })
  }, [location, menuMap])

  // console.log('topLevelMenus', topLevelMenus)
  const handleNag = ({ key }:{ key: any }) => {
    // navigate(item.props.path)
    const item = menuMap.filter((item) => item.path === key)[0]
    // console.log('item', item)
    if (item.type === 'outlink') {
      window.open(item.path)
    } else {
      navigate(item.path)
    }
  }
  return <Menu onClick={handleNag} mode='horizontal' items={topLevelMenus} />
}

export default HeaderMenu
