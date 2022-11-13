// 处理blob响应
export const saveResponseAsBlobFile = function (res: any) {
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
  // console.log(fileName);
  if (!fileName) {
    fileName = 'unknown'
  }
  saveBlobFile(res.data, fileName)
}

// 保存文件
export const saveBlobFile = function (data: any, fileName: string) {
  const blob = new Blob([data])
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

// 获取文件后缀名
export const getFileExt = (value: any) => value.split('.').pop().toLowerCase()
