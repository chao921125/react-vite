// 获取文件名
export const getFileName = function (res: any) {
  let fileName = null
  if (res && res.headers) {
    fileName = res.headers['content-disposition']
  }
  if (fileName) {
    const temp = fileName.split('fileName=')
    if (temp && temp.length > 0) {
      try {
        fileName = decodeURIComponent(temp[1])
      } catch (e) {
        console.error(e)
        fileName = temp[1]
      }
    } else {
      fileName = null
    }
  }
  if (!fileName) {
    fileName = 'unknown'
  }
  return fileName
}

// 获取文件大小
export const getFileLength = function (res: any) {
  let fileLength = 0
  if (res && res.headers) {
    const contentRange = res.headers['content-range']
    fileLength = contentRange.split('/')[1]
  }
  return Number(fileLength)
}

// 保存文件
export const saveBlobFile = function (dataArr: Array<any>, fileName: string, type = 'text/xml') {
  const blobData = []
  for (let i = 0; i < dataArr.length; i++) {
    blobData.push(dataArr[i].data)
  }
  const blob = new Blob(blobData, { type })
  if ('download' in document.createElement('a')) {
    // 非IE下载
    const elink = document.createElement('a')
    elink.download = fileName
    elink.style.display = 'none'
    elink.href = window.URL.createObjectURL(blob)
    document.body.appendChild(elink)
    elink.click()
    URL.revokeObjectURL(elink.href) // 释放URL 对象
    document.body.removeChild(elink)
  } else {
    // IE10+下载
    navigator.msSaveBlob(blob, fileName)
  }
}
