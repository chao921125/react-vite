import React, { useEffect, useMemo, useState } from 'react'
import { useOutlet } from 'react-router-dom'
import SiderMenu from '@/layout/components/SiderMenu'
import { BackTop, Layout, Spin, Space, Col, Row } from 'antd'
import { useRecoilState, useRecoilValue } from 'recoil'
import { globalAtom } from '@/store'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
// import LoadingPage from '@/components/loading'
import CopyRight from '@/components/copyright'
// import IHeader from '@/layout/components/Header'
import watermark from '@/utils/water-mark'
import useMenu from '@/hooks/useMenu'
import useGuide from '@/components/guide/useGuide'
import NavBar from '@/layout/components/NavBar'
import KeepAlive from '@/components/keep-alive'
import GlobalHeaderRight from '@/layout/components/GlobalHeaderRight'
import HeaderMenu from '@/layout/components/HeaderMenu'

const { Header, Sider, Content } = Layout

export default function BasicLayout() {
  const outlet = useOutlet()
  const [collapse, setCollapse] = useRecoilState(globalAtom.collapsed)
  const system = useRecoilValue(globalAtom.systemConfig)
  const user = useRecoilValue(globalAtom.user)
  const { menus, getMenuByPath } = useMenu()
  const { driverStart } = useGuide()
  const [showMaximize, setShowMaximize] = useState(false)
  const getSearchVisible = useRecoilValue(globalAtom.headerSearchVisible)
  const clickChangeMaximize = () => {
    console.log('clickChangeMaximize', showMaximize)
    setShowMaximize(!showMaximize)
  }
  const Trigger = useMemo(() => {
    return collapse ? (
      <MenuUnfoldOutlined
        id='sidebar-trigger'
        style={{ color: '#000' }}
        onClick={() => {
          setCollapse(!collapse)
        }}
      />
    ) : (
      <MenuFoldOutlined
        id='sidebar-trigger'
        style={{ color: '#000' }}
        onClick={() => {
          setCollapse(!collapse)
        }}
      />
    )
  }, [collapse])
  // 水印设置放在Layout里，避免登陆页也加上水印
  useEffect(() => {
    // watermark.set(user?.username || '')
    console.log('====raa', user?.username)
    if (user?.username && user.username != '游客' && user.username != 'guest') {
      if (user?.newUser) {
        driverStart()
      }
      watermark.set(user?.username)
    }
  }, [user])

  // 设置网页标题
  useEffect(() => {
    const menu = getMenuByPath(location.pathname) as NSP.Menu
    document.title = menu?.name || system.name
  }, [menus, location.pathname])

  const headerMenuClass = useMemo(() => {
    return getSearchVisible ? 'menu-search menu-search-visible' : 'menu-search'
  }, [getSearchVisible])
  return (
    <Layout className='i-layout'>
      {/* xs < 768, sm >= 768, md >= 992, lg >= 1200, lx >= 1920*/}
      <Sider
        style={showMaximize ? { display: 'none' } : {}}
        collapsible
        collapsed={collapse}
        width={256}
        collapsedWidth={60}
        trigger={Trigger}
        onCollapse={setCollapse}>
        <SiderMenu />
      </Sider>
      <Layout>
        <Header style={showMaximize ? { display: 'none' } : { height: '64px' }}>
          <Row className='i-header' align='middle' justify='space-between'>
            <Row align='middle' className={headerMenuClass}>
              <Col flex={1}>
                <HeaderMenu />
              </Col>
            </Row>
            <Space align='end' size={16}>
              <GlobalHeaderRight />
            </Space>

          </Row>

        </Header>
        <nav
          style={{
            paddingTop: 4,
            paddingLeft: 24,
            paddingRight: 24,
            paddingBottom: 2,
            background: '#fff'
          }}
        >
          {NavBar(clickChangeMaximize, showMaximize)}
        </nav>

        <BackTop target={() => document.querySelector('.i-content') as any}></BackTop>
        <Content className='i-content'>
          <React.Suspense fallback={<Spin />}>
            <KeepAlive>
              { outlet }
            </KeepAlive>
          </React.Suspense>
          <p style={{ marginTop: 12 }}>
            <CopyRight />
          </p>
        </Content>
      </Layout>
    </Layout>
  )
}

