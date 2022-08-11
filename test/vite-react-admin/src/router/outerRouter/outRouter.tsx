import React, { lazy, Suspense } from 'react'
import { Route, RouteProps, Switch } from 'react-router-dom'

import PageLoading from '@/components/page-loading/pageLoading'

const Login = lazy(() => import('@/views/account/login'))
const Register = lazy(() => import('@/views/account/register'))

const routes: RouteProps[] = [
  {
    path: '/account/login',
    exact: true,
    component: Login,
  },
  {
    path: '/account/register',
    exact: true,
    component: Register,
  },
]

const OterRouter = () => (
  <Suspense fallback={<PageLoading />}>
    <Switch>
      {routes.map((route: RouteProps) => (
        <Route key={route.path + ''} path={route.path} exact={route.exact} component={route.component} />
      ))}
    </Switch>
  </Suspense>
)

export default OterRouter
