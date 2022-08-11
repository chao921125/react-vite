import { globalAtom } from '@/store'
import { Row } from 'antd'
import React from 'react'
import { useRecoilValue } from 'recoil'

export default function HomePage() {
  const user = useRecoilValue(globalAtom.user)
  return (
    <Row
      className='i-page'
      align='middle'
      justify='center'
      style={{
        fontSize: '50px',
        color: '#888',
        flexDirection: 'column'
      }}
    >
      <img src='https://element.eleme.cn/static/theme-index-blue.c38b733.png' width={900}></img>
      <div>welcome {user?.username}</div>
      <div style={{ minHeight: '500px' }}>
          sdfsdfsd
        <div style={{ height: '500px', backgroundColor: 'red' }}>sdfsd</div>
      </div>
    </Row>
  )
}
