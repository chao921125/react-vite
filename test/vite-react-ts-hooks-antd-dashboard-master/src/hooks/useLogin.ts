import api from '@/api'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { globalAtom } from '@/store'
import { aesEncrypt } from '@/utils/aes'
import { tokenFn } from '@/utils/token'
import { RandGen } from '@/utils/generater'
import { strToHexCharCode, strToUtf8Bytes } from '@/utils/format'

export default function useLogin() {
  const setToken = useSetRecoilState(globalAtom.token)
  const [user, setUser] = useRecoilState(globalAtom.user)
  const setMenu = useSetRecoilState(globalAtom.menus)

  const login = (form: { username: string; password: string; tenant_id: string, code: string }) => {
    const randomStr = RandGen.RandomString(16, true)
    const keyWord = strToHexCharCode(strToUtf8Bytes(randomStr + form.code))
    // aesEncrypt
    const resPassword = aesEncrypt(form.password + randomStr, randomStr)
    return api.base
      .login(
        {
          username: form.username,
          password: resPassword,
          tenant_id: form.tenant_id
        },
        {
          headers: {
            Authorization: 'Basic ZGFvaXNtOmRhb2lzbQ==',
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          params: {
            secret: keyWord,
            code: form.code,
            grant_type: 'password'
          }
        }
      )
      .then((res) => {
        const tokenType = res.token_type.charAt(0).toUpperCase() + res.token_type.slice(0, 1)
        tokenFn.set(`${tokenType} ${res.access_token}`)
        setToken(`${tokenType} ${res.access_token}`)
      })
  }

  const logout = () => {
    tokenFn.remove()
    window.location.reload()
  }

  // 登陆成功后获取 用户信息和菜单
  const initAfterLogin = () => {
    return Promise.all([api.user.getCurrentUser(), api.menu.getCurrentMenu()]).then((res) => {
      setUser({ ...user, ...res[0] })
      setMenu(res[1])
    })
  }

  return {
    login,
    logout,
    initAfterLogin
  }
}
