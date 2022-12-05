import './style.less'

import { LockOutlined, SafetyOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Col, Form, Input, message, Row } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'

import service from '@/api/account'
// import request from '@/utils/request'
import { verificationCode } from '@/utils/verification-code'
import actions from '@/shared/actions'

function Login() {
  const history = useHistory()
  const canvasRef = useRef(null)
  const [verCode, setVerCode] = useState('')

  useEffect(() => {
    getVerCode()
  }, [])

  //  获取验证码
  const getVerCode = () => {
    setVerCode(verificationCode(canvasRef.current))
  }

  // 提交
  const handleFinish = async (values: any) => {
    console.log('handleFinish: ', values)
    const { username, password } = values
    if (import.meta.env.VITE_USE_MOCK === 'true') {
      const params = {
        username,
        password,
        verCode,
      }
      const res = await service.login(params)
      // request.setHeader({ Authorization: res.token })
      actions.setGlobalState({
        token: res.token,
      })
      localStorage.setItem('token', res.token)
      history.replace('/dashboard')
    } else {
      if (username === 'admin' && password === 'admin123456') {
        console.log('验证成功')
        actions.setGlobalState({
          token: 'token_test',
        })
        localStorage.setItem('token', 'token_test')
        history.replace('/dashboard')
      } else {
        const params = {}
        const res = await service.getUserInfo(params)
        console.log('res: ', res)
        message.error('请检查您的账号密码')
      }
    }
  }

  return (
    <div className="login-wrapper">
      <div className="login-wrapper__title">后台管理系统</div>
      <Form onFinish={handleFinish}>
        <Form.Item
          label={<div className="form-item__label">账号</div>}
          name="username"
          validateTrigger="onBlur"
          initialValue="admin"
          rules={[{ required: true, message: '账号不能为空' }]}
        >
          <Input prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入账号" />
        </Form.Item>

        <Form.Item
          label={<div className="form-item__label">密码</div>}
          name="password"
          validateTrigger="onBlur"
          initialValue="admin123456"
          rules={[
            {
              required: true,
              message: '密码不能为空！',
            },
            {
              pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/,
              message: '密码为6~20位，且需要包含数字和字母！',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="请输入密码"
          />
        </Form.Item>

        <Form.Item
          label={<div className="form-item__label">验证码</div>}
          name="verCode"
          validateTrigger="onBlur"
          rules={[
            {
              required: true,
              message: '验证码不能为空！',
            },
            {
              pattern: new RegExp(verCode, 'i'),
              message: '验证码有误！',
            },
          ]}
        >
          <Row>
            <Col span={16}>
              <Input prefix={<SafetyOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入验证码" />
            </Col>
            <Col span={8} style={{ height: '40px' }}>
              <canvas onClick={getVerCode} width="80" height="40" style={{ cursor: 'pointer' }} ref={canvasRef} />
            </Col>
          </Row>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block={true}>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
