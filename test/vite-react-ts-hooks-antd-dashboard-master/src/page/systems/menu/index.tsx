import React, { useState } from 'react'
import { Button } from 'antd'

export default function MenuPage() {
  const [num, setNum] = useState(0)
  const submitHandle = () => {
    setNum(num + 1)
  }
  return (
    <div>
      <p>MenuPage 非 keep-alive</p>
      <Button type='primary' onClick={submitHandle}>num{num}</Button>
    </div>
  )
}

