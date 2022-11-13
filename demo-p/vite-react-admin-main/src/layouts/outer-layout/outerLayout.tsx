import './style.less'

import React from 'react'

import OuterRouter from '@/router/outerRouter'

function OuterLayout() {
  return (
    <div className="outer-layout">
      <OuterRouter />
    </div>
  )
}

export default OuterLayout
