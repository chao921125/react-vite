import React, { FC, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import useLogin from '@/hooks/useLogin'

import styles from './index.module.less'

import CopyRight from '@/components/copyright'
import ValidSlider from '@/components/valid-slider'

import bgPic from '@/assets/img/shouye.png'
import logoPic from '@/assets/img/logo.png'
import config from '@/config'

const initialValues = {
  username: 'admin',
  password: '123456',
  tenant_id: config.tenant_id
}

const LoginPage: FC = () => {
  const navigate = useNavigate()
  const { login } = useLogin()

  const [isSign, setIsSign] = useState(true)
  const [fromValue, setFromValue] = useState(initialValues)
  const form = useRef<{ username: string; password: string; tenant_id: string }>(initialValues)
  const validModal = useRef<any>()

  const onFinished = async(fromValues: any) => {
    form.current = fromValues
    validModal.current?.setVisible(true)
  }

  // @ts-ignore
  const onOk = ({ code }) => {
    login({ ...form.current, code }).then(() => {
      navigate('/', { replace: true })
    })
  }

  const handleButton = (e: any) => {
    e.preventDefault()
    setIsSign(!isSign)
    onFinished(fromValue)
  }

  const getValues = (e: any) => {
    const { name, value } = e.target
    setFromValue({ ...fromValue, [name]: value })
  }

  return <div className={styles.body}>
    <div className={`${styles.container} ${isSign ? '' : styles.rightPanelActive}`}>
      {/* <!-- 注册 --> */}
      {/* <div className={`${styles.containerForm} ${styles.containerSignup}`}>
        <form className={styles.form} id='form1'>
          <h2 className={styles.formTitle}>注 册</h2>
          <input type='text' placeholder='User' className={styles.input} />
          <input type='email' placeholder='Email' className={styles.input} />
          <input type='password' placeholder='Password' className={styles.input} />
          <button className={styles.btn}>注 册</button>
        </form>
      </div> */}
      <div className={`${styles.containerForm} ${styles.containerSignup}`}>
        <div className={styles.formspin}>
          <div className={styles.formspinItem}>
            {/* <Spin className={styles.spin} style={{ color: '#912409' }} size='large' tip={`加载中...`} /> */}
            <span className={`${styles.antSpinDot} ${styles.antSpinDotSpin}`}>
              <i></i><i></i><i></i><i></i>
            </span>
            <p style={{ color: '#095c91' }}>
            登录中
            </p>
          </div>
        </div>
      </div>
      {/* <!-- 登录 --> */}
      <div className={`${styles.containerForm} ${styles.containerSignin}`}>
        <form className={styles.form} id='form2'>
          <h2 className={styles.formTitle}>登 录</h2>
          <input type='text' name='username' value={fromValue.username} onChange={getValues} placeholder='请输入账户名' className={styles.input} />
          <input type='password' name='password' autoComplete='true' value={fromValue.password} onChange={getValues} placeholder='请输入密码' className={styles.input} />
          {/* <a href='#' className={styles.link}>Forgot your password?</a> */}
          <a href='#' className={styles.link}>忘记密码?</a>
          <button className={styles.btn} onClick={handleButton}>登 录</button>
        </form>
      </div>

      {/* <!-- 浮层 --> */}
      <div className={styles.containerOverlay}>
        <div className={styles.overlay}>
          <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
            {/* <button className={styles.btn} id='signIn' onClick={changeBtn}>登 录</button> */}
            <img src={logoPic} alt='logo' />
          </div>
          <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
            {/* <button className={styles.btn} id='signUp' onClick={changeBtn}>注 册</button> */}
            <img src={logoPic} alt='logo' />
          </div>
        </div>
      </div>
    </div>
    {/* <!-- 背景 --> */}
    <div className={styles.slidershow}>
      {/* <div className={styles.slidershowImage} style={{ backgroundImage: "url('https://source.unsplash.com/Snqdjm71Y5s')" }}></div>
      <div className={styles.slidershowImage} style={{ backgroundImage: "url('https://source.unsplash.com/5APj-fzKE-k')" }}></div>
      <div className={styles.slidershowImage} style={{ backgroundImage: "url('https://source.unsplash.com/wnbBH_CGOYQ')" }}></div>
      <div className={styles.slidershowImage} style={{ backgroundImage: "url('https://source.unsplash.com/OkTfw7fXLPk')" }}></div> */}
      <div className={styles.slidershowImage} style={{ backgroundImage: `url("${bgPic}")` }}></div>
      <div className={styles.slidershowImage} style={{ backgroundImage: `url("${bgPic}")` }}></div>
      <div className={styles.slidershowImage} style={{ backgroundImage: `url("${bgPic}")` }}></div>
      <div className={styles.slidershowImage} style={{ backgroundImage: `url("${bgPic}")` }}></div>
      <div className={styles.slidershowImage} style={{ backgroundImage: `url("${bgPic}")` }}></div>
    </div>
    <div style={{ zIndex: 2 }} className={styles.copy_right}>
      <CopyRight />
    </div>

    <ValidSlider ref={validModal} onOk={onOk} loading={[isSign, setIsSign]} />
  </div>
}

export default LoginPage
