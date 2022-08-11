import { lazy } from 'react'

import IRoute from '../IRoute'

const OtherAnimation = lazy(() => import('@/views/Other/animation'))
const OtherGallery = lazy(() => import('@/views/Other/gallery'))
const OtherRegExp = lazy(() => import('@/views/Other/regexp'))
const OtherFile = lazy(() => import('@/views/Other/file'))
const OtherTest = lazy(() => import('@/views/Other/test')) // 测试页面

const routes: IRoute = {
  name: 'other',
  title: '其他',
  path: '/other',
  children: [
    {
      name: 'animation',
      title: '动画',
      path: '/other/animation',
      exact: true,
      component: OtherAnimation,
    },
    {
      name: 'gallery',
      title: '画廊',
      path: '/other/gallery',
      exact: true,
      component: OtherGallery,
    },
    {
      name: 'otherRegexp',
      title: '正则',
      path: '/other/regexp',
      exact: true,
      component: OtherRegExp,
    },
    {
      name: 'otherFile',
      title: '文件',
      path: '/other/file',
      exact: true,
      component: OtherFile,
    },
    {
      name: 'otherTest',
      title: '测试',
      path: '/other/test',
      exact: true,
      component: OtherTest,
    },
  ],
}

export default routes
