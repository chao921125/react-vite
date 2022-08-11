import React, { useEffect, useImperativeHandle, useRef, useState } from 'react'
import { message, Modal } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import styles from './index.module.less'

import { useRequest } from 'ahooks'
import { aesEncrypt } from '@/utils/aes'
import api from '@/api'

interface IProps {
  onOk: (obj: { code: string }) => void;
  loading: [boolean, Function];
}
/* 滑块验证 组件 */
export default React.forwardRef((props: IProps, ref) => {
  const [visible, setVisible] = useState<boolean>(false)
  const [title, setTitle] = useState('请完成安全验证')
  const [left, setLefe] = useState(0)
  const sliderRef = useRef<any>()

  const { data: code, run } = useRequest(api.base.getCode)
  const [isLoad, setLoad] = props.loading
  useImperativeHandle(ref, () => ({
    setVisible,
    setTitle
  }))

  /* 重置滑块和数据 */
  const resetSlider = () => {
    sliderRef.current?.setStart(0)
    sliderRef.current?.setDiff(0)
    setLefe(0)
    run()
  }

  /* 滑块验证 */
  const onSubmit = (diff: number) => {
    const move = diff - 10
    const params = {
      captchaType: 'blockPuzzle',
      pointJson: code?.repData.secretKey
        ? aesEncrypt(JSON.stringify({ x: move, y: 5.0 }), code.repData.secretKey)
        : JSON.stringify({ x: move, y: 5.0 }),
      token: code?.repData.token
    }
    api.base
      .checkCode({}, { params }, diff)
      .then((res: any) => {
        if (res.repCode === 0) {
          const { secretKey, token } = code?.repData || {}
          const word = token + '---' + JSON.stringify({ x: move, y: 5.0 })
          const codeparams = secretKey ? aesEncrypt(word, secretKey) : word
          setLoad(!isLoad)
          // 验证成功
          props.onOk?.({ code: codeparams })
          resetSlider()
          setVisible(false)
        } else {
          resetSlider()
          message.error('校验失败，请重试')
        }
      })
      .catch(() => {
        resetSlider()
        message.error('校验失败，请重试')
      })
  }

  return visible ? (
    <Modal
      width={362}
      title={title}
      bodyStyle={{ padding: 16 }}
      visible={true}
      onCancel={() => {
        setVisible(false)
        setLoad(!isLoad)
      }}
      footer={
        <Slider
          ref={sliderRef}
          onChange={(diff) => {
            setLefe(diff)
          }}
          onSubmit={onSubmit}
        ></Slider>
      }
    >
      <div className={styles.sliderImgPanel}>
        <img width={330} height={155} src={`${code?.repData?.originalImageBase64}`}></img>
        <div className={styles.sliderImgBlock} style={{ marginLeft: left }}></div>
      </div>
    </Modal>
  ) : null
})

/* Slider 组件 */

interface ISliderProps {
  onChange?: (diff: number) => void;
  onSubmit?: (diff: number) => void;
}
const Slider = React.forwardRef((props: ISliderProps, ref) => {
  const [drag, setDrag] = useState(false)
  const [start, setStart] = useState(0)
  const [diff, setDiff] = useState(0)
  const MIN = 0
  const MAX = 288

  useImperativeHandle(ref, () => ({ setDiff, setStart }))

  useEffect(() => {
    const fn = (e: any) => {
      if (drag) {
        const clientX = e.clientX || e.touches[0].clientX
        const current = Math.min(Math.max(MIN, clientX - start), MAX)
        setDiff(current)
        props.onChange?.(current)
      }
    }
    const mouseup = (e: any) => {
      if (drag) {
        setDrag(false)
        const clientX = e.clientX || e.changedTouches[0].clientX
        const current = Math.min(Math.max(MIN, clientX - start), MAX)
        props.onSubmit?.(current)
      }
    }

    window.addEventListener('mousemove', fn, false)
    window.addEventListener('touchmove', fn, false)
    window.addEventListener('mouseup', mouseup, false)
    window.addEventListener('touchend', mouseup, false)
    return () => {
      window.removeEventListener('mousemove', fn)
      window.removeEventListener('touchmove', fn)
      window.removeEventListener('mouseup', mouseup)
      window.removeEventListener('touchend', mouseup)
    }
  }, [drag, start])

  return (
    <div className={styles.slider_bar}>
      <RightOutlined
        style={{ marginLeft: diff }}
        onMouseDown={(e) => {
          setDrag(true)
          setStart(e.clientX)
        }}
        onTouchStart={(e) => {
          setDrag(true)
          setStart(e.touches[0].clientX)
        }}
        className={styles.slider_arrow}
      />
    </div>
  )
})
