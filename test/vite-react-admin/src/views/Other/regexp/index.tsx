import React, { useState } from 'react'

import { Form, Input, Space, Tooltip, Typography } from 'antd'
import {
  helperValidateUserName,
  helperValidateAccountName,
  helperValidatePwd,
  helperValidatePhone,
  helperValidateEmail,
  helperValidateUrl,
  helperValidateIPv4,
  helperValidateIdCard,
  helperValidateZipCode,
  helperValidateHex,
} from '@/utils/helperReg'

function OtherRegExp() {
  const [initValues] = useState({
    param1: 'initVal',
  })
  // const validateReg = (val: string) => {
  //   console.log('validateReg1: ', val)
  // }
  const validateReg = (_: any, value: string) => {
    if (value) {
      return Promise.resolve()
    }
    return Promise.reject(new Error('请检查您输入的数据!'))
  }

  // ========================== 校验规则 =================================================
  // 4到16位（字母，数字，下划线，减号）
  const validateReg1 = (_: any, value: string) => {
    console.log('validateReg1: ', value, helperValidateUserName(value))
    if (value && helperValidateUserName(value)) {
      return Promise.resolve()
    }
    return Promise.reject(new Error('请检查您输入的数据!'))
  }

  // 4到16位（字母开头，允许字母数字下划线）
  const validateReg2 = (_: any, value: string) => {
    console.log('validateReg2: ', value, helperValidateAccountName(value))
    if (value && helperValidateAccountName(value)) {
      return Promise.resolve()
    }
    return Promise.reject(new Error('请检查您输入的数据!'))
  }

  // 必须包含大小写字母和数字的组合，可使用特殊字符，长度在8-10之间
  const validateReg3 = (_: any, value: string) => {
    console.log('validateReg3: ', value, helperValidatePwd(value))
    if (value && helperValidatePwd(value)) {
      return Promise.resolve()
    }
    return Promise.reject(new Error('请检查您输入的数据!'))
  }

  // 手机号
  const validateReg4 = (_: any, value: string) => {
    console.log('validateReg4: ', value, helperValidatePhone(value))
    if (value && helperValidatePhone(value)) {
      return Promise.resolve()
    }
    return Promise.reject(new Error('请检查您输入的数据!'))
  }

  // 邮箱
  const validateReg5 = (_: any, value: string) => {
    console.log('validateReg5: ', value, helperValidateEmail(value))
    if (value && helperValidateEmail(value)) {
      return Promise.resolve()
    }
    return Promise.reject(new Error('请检查您输入的数据!'))
  }

  // URL
  const validateReg6 = (_: any, value: string) => {
    console.log('validateReg6: ', value, helperValidateUrl(value))
    if (value && helperValidateUrl(value)) {
      return Promise.resolve()
    }
    return Promise.reject(new Error('请检查您输入的数据!'))
  }

  // IPv4
  const validateReg7 = (_: any, value: string) => {
    console.log('validateReg7: ', value, helperValidateIPv4(value))
    if (value && helperValidateIPv4(value)) {
      return Promise.resolve()
    }
    return Promise.reject(new Error('请检查您输入的数据!'))
  }

  // 身份证号
  const validateReg8 = (_: any, value: string) => {
    console.log('validateReg8: ', value, helperValidateIdCard(value))
    if (value && helperValidateIdCard(value)) {
      return Promise.resolve()
    }
    return Promise.reject(new Error('请检查您输入的数据!'))
  }

  // 邮编
  const validateReg9 = (_: any, value: string) => {
    console.log('validateReg9: ', value, helperValidateZipCode(value))
    if (value && helperValidateZipCode(value)) {
      return Promise.resolve()
    }
    return Promise.reject(new Error('请检查您输入的数据!'))
  }

  // 十六进制颜色
  const validateReg10 = (_: any, value: string) => {
    console.log('validateReg10: ', value, helperValidateHex(value))
    if (value && helperValidateHex(value)) {
      return Promise.resolve()
    }
    return Promise.reject(new Error('请检查您输入的数据!'))
  }

  return (
    <div className="regexp-wrapper">
      <h3>正则校验</h3>
      <div style={{ width: 640, minHeight: 200, border: '1px dotted #ddd', padding: 20 }}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={initValues}
          validateTrigger="onChange"
        >
          <Form.Item label="正则校验项1" name="param1" rules={[{ validator: validateReg }]} validateTrigger="onBlur">
            {/* <Input placeholder="请输入" onBlur={e => validateReg(e.target.value)} /> */}
            <Input placeholder="请输入" />
          </Form.Item>

          <Form.Item label="用户名">
            <Space>
              <Form.Item name="username" noStyle rules={[{ validator: validateReg1 }]} validateTrigger="onBlur">
                <Input style={{ width: 210 }} placeholder="请输入" />
              </Form.Item>
              <Tooltip title="4到16位（字母，数字，下划线，减号）">
                <Typography.Link href="#">规则</Typography.Link>
              </Tooltip>
            </Space>
          </Form.Item>

          <Form.Item label="账号">
            <Space>
              <Form.Item name="accountname" noStyle rules={[{ validator: validateReg2 }]} validateTrigger="onBlur">
                <Input style={{ width: 210 }} placeholder="请输入" />
              </Form.Item>
              <Tooltip title="4到16位（字母开头，允许字母数字下划线）">
                <Typography.Link href="#">规则</Typography.Link>
              </Tooltip>
            </Space>
          </Form.Item>

          <Form.Item label="密码">
            <Space>
              <Form.Item name="password" noStyle rules={[{ validator: validateReg3 }]} validateTrigger="onBlur">
                <Input style={{ width: 210 }} placeholder="请输入" />
              </Form.Item>
              <Tooltip title="必须包含大小写字母和数字的组合，可使用特殊字符，长度在8-12之间">
                <Typography.Link href="#">规则</Typography.Link>
              </Tooltip>
            </Space>
          </Form.Item>

          <Form.Item label="手机号">
            <Space>
              <Form.Item name="telPhone" noStyle rules={[{ validator: validateReg4 }]} validateTrigger="onBlur">
                <Input style={{ width: 210 }} placeholder="请输入" />
              </Form.Item>
              <Tooltip title="手机号">
                <Typography.Link href="#">规则</Typography.Link>
              </Tooltip>
            </Space>
          </Form.Item>

          <Form.Item label="邮箱">
            <Space>
              <Form.Item name="email" noStyle rules={[{ validator: validateReg5 }]} validateTrigger="onBlur">
                <Input style={{ width: 210 }} placeholder="请输入" />
              </Form.Item>
              <Tooltip title="邮箱">
                <Typography.Link href="#">规则</Typography.Link>
              </Tooltip>
            </Space>
          </Form.Item>

          <Form.Item label="URL地址">
            <Space>
              <Form.Item name="url" noStyle rules={[{ validator: validateReg6 }]} validateTrigger="onBlur">
                <Input style={{ width: 210 }} placeholder="请输入" />
              </Form.Item>
              <Tooltip title="URL地址">
                <Typography.Link href="#">规则</Typography.Link>
              </Tooltip>
            </Space>
          </Form.Item>

          <Form.Item label="IPv4">
            <Space>
              <Form.Item name="IPv4" noStyle rules={[{ validator: validateReg7 }]} validateTrigger="onBlur">
                <Input style={{ width: 210 }} placeholder="请输入" />
              </Form.Item>
              <Tooltip title="IPv4">
                <Typography.Link href="#">规则</Typography.Link>
              </Tooltip>
            </Space>
          </Form.Item>

          <Form.Item label="身份证号">
            <Space>
              <Form.Item name="IdCard" noStyle rules={[{ validator: validateReg8 }]} validateTrigger="onBlur">
                <Input style={{ width: 210 }} placeholder="请输入" />
              </Form.Item>
              <Tooltip title="身份证号">
                <Typography.Link href="#">规则</Typography.Link>
              </Tooltip>
            </Space>
          </Form.Item>

          <Form.Item label="邮编">
            <Space>
              <Form.Item name="ZipCode" noStyle rules={[{ validator: validateReg9 }]} validateTrigger="onBlur">
                <Input style={{ width: 210 }} placeholder="请输入" />
              </Form.Item>
              <Tooltip title="邮编">
                <Typography.Link href="#">规则</Typography.Link>
              </Tooltip>
            </Space>
          </Form.Item>

          <Form.Item label="十六进制颜色">
            <Space>
              <Form.Item name="hexColor" noStyle rules={[{ validator: validateReg10 }]} validateTrigger="onBlur">
                <Input style={{ width: 210 }} placeholder="请输入" />
              </Form.Item>
              <Tooltip title="十六进制颜色">
                <Typography.Link href="#">规则</Typography.Link>
              </Tooltip>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default OtherRegExp
