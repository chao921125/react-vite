import CryptoJS from 'crypto-js'

/**
 * @param {string} word 要加密的内容
 * @param {string} keyWord 服务器随机返回的关键字
 */
export const aesEncrypt = (word: string, keyWord = 'XwKsGlMcdPMEhR1B') => {
  const srcs = CryptoJS.enc.Utf8.parse(word)
  const key = CryptoJS.enc.Utf8.parse(keyWord)
  const encrypted = CryptoJS.AES.encrypt(srcs, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  })
  return encrypted.ciphertext.toString()
}

export const encryption = (params: any) => {
  // eslint-disable-next-line prefer-const
  let { data, type, param, key } = params
  const result = JSON.parse(JSON.stringify(data))
  if (type === 'Base64') {
    param.forEach((ele: any) => {
      result[ele] = btoa(result[ele])
    })
  } else {
    param.forEach((ele: any) => {
      const data = result[ele]
      key = CryptoJS.enc.Latin1.parse(key)
      const iv = key

      const encrypted = CryptoJS.AES.encrypt(data, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.ZeroPadding
      })
      result[ele] = encrypted.toString()
    })
  }

  return result
}
