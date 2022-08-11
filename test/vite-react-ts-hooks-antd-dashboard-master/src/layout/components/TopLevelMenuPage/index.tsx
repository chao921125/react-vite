import { useLocale } from '@/locales'
import { Divider, Row } from 'antd'
import React, { Fragment } from 'react'
import { RouteProps } from 'react-router-dom'
import SelectMenuCard from './SelectMenuCard'
import { useRecoilValue } from 'recoil'
import { globalAtom } from '@/store'

export interface TopLevelMenuPageProps extends RouteProps {
  frompath: string
}
const
  TopLevelMenuPage: React.FC<TopLevelMenuPageProps> = ({ frompath }) => {
    const { formatMessage } = useLocale()
    const menuList = useRecoilValue(globalAtom.menus)
    const loopMenuItem = () => {
      if (!menuList) return []
      const currentMenu = menuList.filter((menu: NSP.Menu) => menu.path.toLowerCase() === frompath && menu?.children?.length)
      return currentMenu[0]?.children ?? []
    }
    const secondMenu: {
    id: number
    path: string
    name: string
    locale?: string
    icon?: string | null;
  }[] = []
    const tertiaryLoopMenuItem = loopMenuItem().map((menuItem:NSP.Menu) => {
      if (menuItem.children?.length) {
        return (
          <Fragment key={`SelectMenuCard` + menuItem.path}>
            <Divider orientation='left'>{menuItem.locale ? formatMessage({ id: menuItem.locale }) : menuItem.name}</Divider>
            <Row style={{ marginLeft: '0px', marginRight: '0px' }} gutter={[24, { xs: 12, sm: 24 }]}>
              {menuItem.children.map((menuChildrenItem) => (
                <SelectMenuCard key={`SelectMenuCard` + menuChildrenItem.path} title={menuChildrenItem.locale ? formatMessage({ id: menuChildrenItem.locale }) : menuChildrenItem.name} path={menuChildrenItem.path} />
              ))}
            </Row>
          </Fragment>
        )
      }
      secondMenu.push(menuItem)
      return ''
    })

    const secondLoopMenuItem = (
      <Fragment key={`SelectMenuCardOther`}>
        <Row style={{ marginLeft: '0px', marginRight: '0px' }} gutter={[24, { xs: 12, sm: 24 }]}>
          {secondMenu.map((menuItem) => {
            return <SelectMenuCard key={`SelectMenuCardOther` + menuItem.path + menuItem.id} title={menuItem.locale ? formatMessage({ id: menuItem.locale }) : menuItem.name} path={menuItem.path} />
          })}
        </Row>
      </Fragment>
    )

    return (
      <div>
        {tertiaryLoopMenuItem}
        {secondMenu.length ? <Divider orientation='left'>{formatMessage({ id: 'gloabal.topLevelMenu.divider.title.other' })}</Divider> : ''}
        {secondLoopMenuItem}
      </div>
    )
  }

export default TopLevelMenuPage
