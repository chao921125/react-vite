import './style.less'

import React, { useEffect, useState } from 'react'

import logo from '../../assets/svg/logo.svg'

function Dashboard() {
  const [modeName, setModeName] = useState('当前模式: ')

  useEffect(() => {
    setModeName(`当前模式: ${import.meta.env.VITE_MODE_TYPE_NAME}`)
  }, [])

  return (
    <div className="dashboard-wrapper">
      <img src={logo} className="logo" alt="logo" />
      <h2>{modeName}</h2>
    </div>
  )
}

export default Dashboard
