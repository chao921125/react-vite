import request from '@/utils/request'

// 文件下载
const downFile = async (params: any) => {
  const res = await request.post('/test/file/download', params)
  return res
}

export default {
  downFile,
}
