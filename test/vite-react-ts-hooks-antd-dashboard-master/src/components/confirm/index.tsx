import React, { ReactNode } from 'react'
import { Modal, ModalProps } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'

export interface confirmOptions extends ModalProps {
    title?: string,
    color?: string,
    content?: string | ReactNode,
}

/**
 * promise confirm
 * @param options
 */
export default async function confirm(options: string | confirmOptions) {
  if (typeof options === 'string') {
    // eslint-disable-next-line no-param-reassign
    options = {
      content: options
    }
  }
  const {
    title = '温馨提示',
    content,
    color = 'red',
    ...others
  } = options

  return new Promise<void>((resolve, reject) => {
    Modal.confirm({
      icon: <QuestionCircleOutlined />,
      title,
      content: <div style={{ marginTop: 8, fontSize: 14, color }}>{content}</div>,
      okText: '确定',
      cancelText: '取消',
      onOk: () => resolve(),
      // eslint-disable-next-line prefer-promise-reject-errors
      onCancel: () => reject(),
      ...others
    })
  }).catch(() => {})
}
