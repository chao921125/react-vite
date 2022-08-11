import React, { ComponentType, FC, LazyExoticComponent, useEffect, useLayoutEffect, useMemo } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { globalAtom, globalSelector } from '@/store'
import useLogin from '@/hooks/useLogin'
import BasicLayout from '@/layout/basic-layout'
import Home from '@/components/home'
import NotFound from '@/components/exception/404'
import LoadingPage from '@/components/loading/suspend-fallback-loading'
import LoginPage from '@/page/login'
import TopLevelMenuPage from '@/layout/components/TopLevelMenuPage'
// import { Spin } from 'antd'

/**
 *  动态路由
 */
type LazyPa = () => Promise<{ default: ComponentType<any> }>;

export const AutoRoutes: FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const token = useRecoilValue(globalAtom.token)
  const menuMap = useRecoilValue(globalSelector.menuMap)
  const menuMaps = useRecoilValue(globalAtom.menus)
  const { initAfterLogin } = useLogin()

  useLayoutEffect(() => {
    if (token) {
      initAfterLogin().then(() => console.log('初始化已加载完成'))
    }
  }, [token])

  /* 路由鉴权拦截 */
  useEffect(() => {
    const isWhiteList = ['/login', '/404', '/topLevelMenuPage'].includes(location.pathname)
    if (!isWhiteList) {
      if (!token) {
        navigate('/login', { replace: true })
      }
    }
  }, [token, location.pathname])

  /* 路由规则为./page/*\/*\/index.tsx所有的页面会自动注册 */
  const pages = useMemo(() => {
    const localFiles = import.meta.glob('@/page/*/*/index.tsx')
    const result: Array<{ path: string; comp: LazyExoticComponent<ComponentType<any>> }> = []
    for (const key in localFiles) {
      if (Object.prototype.hasOwnProperty.call(localFiles, key)) {
        const path = key.replace(/(.\/page)|(.tsx)/g, '')
        if (menuMap[path.slice(1)]) {
          result.push({
            path: path.slice(1),
            comp: React.lazy(localFiles[key] as LazyPa)
          })
        }
      }
    }
    return result
  }, [menuMap])
  // console.log('router-pages', pages)

  const checkTopLevelPageMenu = (menus: NSP.Menu[], pages:any) => {
    console.log('pages', pages)
    const item = menus.filter((item) => item.path === location.pathname)[0]
    return (item?.parent_id <= 0) ? <TopLevelMenuPage frompath={item.path} /> : <NotFound />
  }
  return (
    <Routes>
      <Route path={'/'} element={<BasicLayout />}>
        <Route index element={<Home />}></Route>
        {pages.map((item) => (
          <Route key={item.path} path={item.path} element={<item.comp />} />
        ))}
        <Route path='*' element={pages.length ? checkTopLevelPageMenu(menuMaps, pages) : <LoadingPage />}></Route>
      </Route>
      <Route path={'/login'} element={<LoginPage />} />
      <Route path={'/topLevelMenuPage'} element={<TopLevelMenuPage frompath='/topLevelMenuPage' />} />
    </Routes>
  )
}
