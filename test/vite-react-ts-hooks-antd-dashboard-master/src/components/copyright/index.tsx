import React from 'react'

const CopyRight: React.FC<any> = () => {
  return (
    <span
      style={{
        textAlign: 'center',
        color: '#909090',
        display: 'block'
      }}
    >
      copyright © {new Date().getFullYear()} xxx集团 xxx部研发
    </span>
  )
}

export default CopyRight
