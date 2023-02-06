import React, { useState, useEffect } from 'react'

import { Button } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import './index.less'
import service from '@/api/otherFile'
import { saveResponseAsBlobFile } from '@/utils/file'
import { getFileName, getFileLength, saveBlobFile } from '@/utils/largeFile'

function OtherFile() {
  const [data_BlobDowned, setData_BlobDowned] = useState<boolean>(false)
  const [data_BlobArr, setData_BlobArr] = useState<Array<{ index: number; data: any }>>([])
  const [data_BlobType, setData_BlobType] = useState<string>('')
  const [data_BlobName, setData_BlobName] = useState<string>('')
  const [data_BlobStart, setData_BlobStart] = useState<number>(0)

  useEffect(() => {
    console.log('data_BlobDowned: ', data_BlobDowned)
    if (data_BlobDowned) {
      console.log('分片下载')
      saveBlobFile(data_BlobArr, data_BlobName, data_BlobType)
    }
  }, [data_BlobDowned])

  // 文件下载
  const handleDownFile = async () => {
    console.log('文件下载')
    const params = {
      params: {
        name: 'test.xlsx',
      },
      responseType: 'blob',
    }
    const res = await service.downFile(params)
    saveResponseAsBlobFile(res)
  }

  // 文件切片断点下载
  const handleDownLarge = async () => {
    await handleDownSlicing(1 * 1000 * 4096) // 4M
  }

  const handleDownSlicing = async (chunk = 2048) => {
    console.log('文件切片断点下载')
    const res = await handleDownLargeFileBlob('bytes=0-128')

    setData_BlobName(getFileName(res)) // 文件名
    let fileLength = getFileLength(res) // 文件大小
    setData_BlobType(res.data.type) // 文件类型

    // await handleDownLargeFile(0, chunk, fileLength);
    await handleDownLargeFile(data_BlobStart, chunk, fileLength)
  }

  const handleDownLargeFile = async (lastByte: number, chunk = 1024, fileLength: number) => {
    let blobData = null
    let blobDowned = false
    let startByte = lastByte

    let len = Math.ceil((fileLength - lastByte) / chunk) // 切片数量
    for (let i = 0; i < len; i++) {
      var endByte = startByte + chunk
      let stepRange = `bytes=${startByte}-${endByte - 1}`
      if (endByte >= fileLength - lastByte) {
        blobDowned = true
        stepRange = `bytes=${startByte}-`
      }
      blobData = await handleDownLargeFileBlob(stepRange)
      if (blobData?.data) {
        setData_BlobArr([
          ...data_BlobArr,
          {
            index: i,
            data: blobData.data,
          },
        ])
        setData_BlobStart(endByte)
        setData_BlobDowned(blobDowned)
      }
      startByte = endByte
    }
  }
  const handleDownLargeFileBlob = async (stepRange: string) => {
    const params = {
      params: {
        name: 'test.xlsx',
      },
      responseType: 'blob',
      responseRange: stepRange,
    }
    const res = await service.downFile(params)
    return res
  }

  return (
    <div className="file-wrapper">
      <h3 className="title">文件</h3>
      <div className="content">
        <div className="down-container">
          <Button type="primary" icon={<DownloadOutlined />} onClick={handleDownFile}>
            文件下载
          </Button>
          <Button type="primary" icon={<DownloadOutlined />} shape="round" onClick={handleDownLarge}>
            切片断点下载
          </Button>
        </div>
      </div>
    </div>
  )
}

export default OtherFile
