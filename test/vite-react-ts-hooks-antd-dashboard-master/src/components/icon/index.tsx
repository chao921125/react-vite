import React from 'react'
import classNames from 'classnames'
import { createFromIconfontCN } from '@ant-design/icons'
import styles from './index.module.less'

// IconType继承React.HTMLAttributes的属性，然后IconType,就拥有了其可被外界访问的属性
export interface IconType extends React.HTMLAttributes<any> {
  // type 必有属性，如果使用的时候没有静态检查是，会提示错误，类型不匹配，使用ts的好处，静态类型检查非常nice
  // 报错如下：TS2741: Property 'type' is missing in type '{}' but required in type 'IconType'.  index.tsx(7, 3): 'type' is declared here.
  type: string
  // 图标尺寸，默认 normal
  size?: 'small' | 'normal' | 'large' | null // 可选属性，size后面加上？
  // 是否禁用
  disabled?: boolean
}
// createFromIconfontCN 返回一个组件
const FontIcon = createFromIconfontCN({
  // 请给新图标一个合适的驼峰命名，并保证单词正确//at.alicdn.com/t/font_3168130_s635q11ab28.js
  scriptUrl: '//at.alicdn.com/t/font_3168130_or9t3i7rw6j.js'
})

const Icon: React.FC<IconType> = ({ className, size = 'normal', disabled, ...restProps }) => {
  // 我们使用classNames 这个插件动态渲染icon的状态，size,disabled等等
  return (
    <FontIcon
      className={classNames(
        {
          [styles.large]: size === 'large',
          [styles.normal]: size === 'normal',
          [styles.small]: size === 'small',
          [styles.disabled]: disabled
        },
        className
      )}
      {...restProps}
    />
  )
}
// 思考题：这个地方需要用，react.memo吗？
export default React.memo(Icon)
