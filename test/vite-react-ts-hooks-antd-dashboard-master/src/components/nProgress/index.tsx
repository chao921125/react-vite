import React, { FC, Fragment, useEffect } from 'react'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'

const NProgressWithNode: FC = () => {
  useEffect(() => {
    nProgress.start()
    return () => { nProgress.done() }
  })
  return <Fragment />
}

export default NProgressWithNode
