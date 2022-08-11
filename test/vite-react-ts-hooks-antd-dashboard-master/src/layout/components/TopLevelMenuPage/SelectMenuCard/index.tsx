import { Card, Col } from 'antd'
import React from 'react'
import { RouteProps, useLocation, useNavigate } from 'react-router-dom'
import styles from './index.module.less'
import useMenu from '@/hooks/useMenu'

export interface SelectMenuCardProps extends RouteProps {
  path: string
  title: string
}
const SelectMenuCard: React.FC<SelectMenuCardProps> = ({ path, title }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const navOption = useMenu()
  const historyHandle = () => {
    navigate(path, { replace: true })
    navOption.removeNavMenus(location.pathname)
  }
  return (
    <Col xs={24} sm={12} md={6}>
      <Card onClick={historyHandle} className={styles.siteCardBorderLessWrapper} title={title}>
        <p>{path}</p>
      </Card>
    </Col>
  )
}

export default SelectMenuCard
