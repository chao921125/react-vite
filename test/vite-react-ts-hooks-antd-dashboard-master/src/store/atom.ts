import { atom } from 'recoil'
import { Cookies, tokenFn } from '@/utils/token'
import system from '@/config/system'
import { initialMenuState, initialUserState } from '@/config/initialize'

export const globalAtom = {
  locale: atom({
    key: 'locale',
    default: ['zh-cn', 'en-us'].find((item) => item === Cookies.get('locale')) || 'zh-cn'
  }),
  token: atom({
    key: 'token',
    default: tokenFn.get() || ''
  }),
  user: atom<NSP.User | Record<string, any>>({
    key: 'user',
    default: initialUserState
  }),
  menus: atom<NSP.Menu[]>({
    key: 'menus',
    default: []
  }),
  navMenus: atom<NSP.Menu[]>({
    key: 'navMenus',
    default: [initialMenuState]
  }),
  systemConfig: atom<NSP.SystemConfig>({
    key: 'systemConfig',
    default: { ...system, ...JSON.parse(Cookies.get('systemConfig') || '{}') }
  }),
  qiankunConfig: atom({
    key: 'qiankunConfig',
    default: undefined
  }),
  collapsed: atom({
    key: 'collapsed',
    default: false
  }),
  forceUpdateReducer: atom({
    key: 'forceUpdateReducer',
    default: false
  }),
  cacheRoutes: atom({
    key: 'cacheRoutes',
    default: ['/system/menu/index']
  }),
  headerSearchVisible: atom({
    key: 'headerSearchVisible',
    default: false
  })
}
