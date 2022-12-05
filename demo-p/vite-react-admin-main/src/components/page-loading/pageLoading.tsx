import { Spin } from 'antd'
import React from 'react'

const loadingWrap: React.CSSProperties = {
  paddingTop: '100px',
  textAlign: 'center',
}

const PageLoading: React.FC = () => {
  return (
    <div style={loadingWrap}>
      <Spin size="large" />
    </div>
  )
}
export default PageLoading
