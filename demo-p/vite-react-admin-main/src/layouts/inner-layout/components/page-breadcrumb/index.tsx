import { HomeOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import breadcrumbNameMap from '@/constants/breadcrumb'
// const breadcrumbNameMap: any = {
//   '/dashboard': '首页',
//   '/other': '其他',
//   '/other/animation': '动画',
//   '/other/gallery': '画廊',
// }

function PageBreadcrumb() {
  const location = useLocation()
  const [pathSnippets, setPathSnippets] = useState<string[]>([])

  useEffect(() => {
    const pathSnippetsArr = location.pathname.split('/').filter(i => i)
    setPathSnippets(pathSnippetsArr)
  }, [location.pathname])

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    )
  })

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/dashboard">
        <HomeOutlined />
      </Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems)

  return <Breadcrumb>{breadcrumbItems}</Breadcrumb>
}

export default PageBreadcrumb
