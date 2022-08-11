import React from 'react'

import { Button } from 'antd'
import { helperFilterEmptyParam } from '@/utils/helperFun'
import { getArrFirst, isAllEqual } from '@/utils/helperArr'
import './index.less'

function OtherTest() {
  // 过滤空参数
  const handleFun1 = async () => {
    const params = {
      name: 'test.xlsx',
      desc: '',
    }
    console.log('params: ', helperFilterEmptyParam(params))
  }

  // 获取(嵌套)数组第一项
  const handleFun2 = async () => {
    // const arr = ['a', 'b']
    const arr = [
      {
        url: 'url1',
        children: [
          {
            url: 'url1-1',
          },
        ],
      },
      {
        url: 'url2',
      },
    ]
    console.log(getArrFirst(arr))
  }

  // 判断一维数组中的值是否都相等
  const handleFun3 = async () => {
    const arr = ['a', 'a', 'a']
    console.log(isAllEqual(arr))
  }

  return (
    <div className="test-wrapper">
      <h3 className="title">测试页面</h3>
      <div className="content">
        <div className="btn-container">
          <Button type="primary" onClick={handleFun1}>
            过滤空参数
          </Button>
          <Button type="primary" onClick={handleFun2}>
            获取数组第一项
          </Button>
          <Button type="primary" onClick={handleFun3}>
            数组值全等
          </Button>
        </div>
      </div>
    </div>
  )
}

export default OtherTest
