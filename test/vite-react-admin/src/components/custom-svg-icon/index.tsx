import AntdIcon from '@ant-design/icons'
import React from 'react'

import { BLACK_ICON_MAP, COLOUR_ICON_MAP, IconName } from '@/assets/icons'

export type { BlackIconName, ColourIconName, IconName } from '@/assets/icons'

interface IProps {
  className?: string
  style?: React.CSSProperties
  // 图标名称
  name: IconName
  // 图标大小
  size?: string | number
  // 图标颜色。只有单色图标可以修改颜色。颜色也可通过样式设置
  color?: string
  // 旋转角度
  rotate?: number
  // 是否让图标转圈
  spin?: boolean
  // 类似img的alt
  title?: string
  // black:单色图标,colour多色图标
  mode?: 'black' | 'colour'
  // 图标宽度
  width?: string | number
  // 图标高度
  height?: string | number
  onClick?: () => void
}

const CustomSvgIcon: React.FC<IProps> = props => {
  const {
    className,
    style,
    name,
    size = 16,
    color,
    rotate,
    spin,
    mode = 'black',
    title = '',
    width,
    height,
    onClick,
  } = props

  const iconStyle = {
    ...style,
    ...{
      fontSize: size,
      color,
    },
  }

  if (mode === 'black')
    return (
      <AntdIcon
        className={className}
        style={iconStyle}
        title={title}
        rotate={rotate}
        spin={spin}
        component={BLACK_ICON_MAP[name]}
        onClick={onClick}
      />
    )

  return (
    <img
      className={className}
      style={{ display: 'block', ...style, width: width || size, height: height || size }}
      src={COLOUR_ICON_MAP[name]}
      onClick={onClick}
      alt={title}
    />
  )
}

export default CustomSvgIcon
