import React, { lazy, Suspense } from 'react'
import { Route, RouteProps, Switch } from 'react-router-dom'

import PageLoading from '@/components/page-loading/pageLoading'

import IRoute from './IRoute'

// const Home = lazy(() => import('@/views/Home'))
const Dashboard = lazy(() => import('@/views/Dashboard'))
const OtherAnimation = lazy(() => import('@/views/Other/animation'))
const OtherGallery = lazy(() => import('@/views/Other/gallery'))

// const routes: RouteProps[] = [
//   {
//     path: '/dashboard',
//     exact: true,
//     component: Dashboard,
//   },
//   {
//     path: '/home',
//     exact: true,
//     component: Home,
//   },
// ]

export const routes: IRoute[] = [
  {
    name: 'dashboard',
    title: '首页',
    path: '/dashboard',
    exact: true,
    component: Dashboard,
  },
  {
    name: 'otherAnimation',
    title: '动画',
    path: '/other/animation',
    exact: true,
    component: OtherAnimation,
  },
  {
    name: 'otherGallery',
    title: '画廊',
    path: '/other/gallery',
    exact: true,
    component: OtherGallery,
  },
]

const InnerRouter = () => (
  <Suspense fallback={<PageLoading />}>
    <Switch>
      {routes.map((route: RouteProps) => (
        <Route key={route.path + ''} path={route.path} exact={route.exact} component={route.component} />
      ))}
    </Switch>
  </Suspense>
)

export default InnerRouter
