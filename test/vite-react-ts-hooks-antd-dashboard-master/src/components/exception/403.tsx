import { Button, Result } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NoAuthPage: React.FC<{}> = () => {
  const navigate = useNavigate()
  return (
    <Result
      status='403'
      title='403'
      subTitle='抱歉，您无权访问此页面'
      extra={
        <Button type='primary' onClick={() => navigate('/login')}>
                    登录其他账号
        </Button>
      }
    />
  )
}

export default NoAuthPage
