import React from 'react'
import thumbnailPath from '@/assets/images/infinite-line-animation.png'
import './index.less'

function CardItem() {
  return (
    <div className="card-item">
      <a href="" target="_blank">
        <figure data-aos="fade-up">
          <img src={thumbnailPath} alt="title" />
          <figcaption>
            <h3>标题</h3>
            <p>内容描述</p>
          </figcaption>
        </figure>
      </a>
    </div>
  )
}

export default CardItem
