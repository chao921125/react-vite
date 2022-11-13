import React, { useEffect } from 'react'
// import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import PageLoading from './components/page-loading/pageLoading'

import InnerLayout from '@/layouts/inner-layout'
// const InnerLayout = React.lazy(() => import('@/layouts/inner-layout'))
const OuterLayout = React.lazy(() => import('@/layouts/outer-layout'))

function App() {
  useEffect(() => {
    console.log('环境变量标题：', import.meta.env.VITE_APP_TITLE)
    document.title = import.meta.env.VITE_APP_TITLE
  }, [])

  return (
    <Router>
      <React.Suspense fallback={<PageLoading />}>
        <Switch>
          {/* 这两个路由是父路由，不能设置严格匹配。
          当url导航到子路由时，需要先匹配到父路由，再匹配子路由。
          如果父路由是exact模式，那么url为“/account/login”时，这个url就无法匹配到路由“/account”，也就无法继续往下匹配路由“/account/login”。 */}
          <Route path="/account" component={OuterLayout} />

          {/* 由于没有设置exact，只要url中包含"/",就会与这个路由匹配成功，所以必须将它写在最后。
          如果写在最前面，比如url为“/account/login”时，也会匹配成功 */}
          <Route path="/" component={InnerLayout} />
        </Switch>
      </React.Suspense>
    </Router>
  )
}

export default App
