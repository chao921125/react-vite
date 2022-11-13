// 权限
export interface IPermission {
  id: number
  // 路由权限/按钮权限
  type: 'route' | 'button'
  // 权限名称
  name: string
  // 描述
  description?: string
  // 提示信息
  reminder?: string
}

// 用户信息
export interface IUserInfo {
  id?: number
  // 账号
  account?: string
  // 姓名
  username?: string
  // 邮箱
  email?: string
  // 手机号
  phone?: string
  // 角色
  roles: number[]
  // 权限
  permission: IPermission[]
}
