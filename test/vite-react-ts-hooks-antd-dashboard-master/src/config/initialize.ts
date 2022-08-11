export const initialUserState = {
  avatar: 'https://i.gtimg.cn/club/item/face/img/2/15922_100.gif',
  created_at: '2021-12-22 11:22:10',
  id: 1,
  username: localStorage.getItem('username') || '游客',
  phone: '139****1001',
  password: '',
  permissions: [],
  roles: [1],
  newUser: JSON.parse(localStorage.getItem('newUser')!) ?? true
}

export const initialMenuState = {
  ancestors: '1',
  component: '',
  created_at: '2022-03-08 21:29:17',
  description: '',
  disable: 0,
  hidden: 0,
  icon: 'tubiaozhizuomoban-24',
  id: 6,
  keep_alive: 1,
  level: 1,
  locale: 'menu.dashboard.welcome',
  name: '欢迎页',
  parent_id: 1,
  path: '/',
  redirect: '',
  sort: 99,
  tenant_id: 'administration',
  title: '欢迎页',
  type: '',
  updated_at: ''
}
