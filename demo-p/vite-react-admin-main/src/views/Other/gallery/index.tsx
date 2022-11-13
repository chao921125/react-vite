import React from 'react'
import classes from './index.module.less'

function OtherGallery() {
  return (
    <div className={classes['other-gallery-wrapper']}>
      <h3 className={classes.title}>画廊</h3>
      <div className={classes.contentContainer}>内容</div>
    </div>
  )
}

export default OtherGallery
