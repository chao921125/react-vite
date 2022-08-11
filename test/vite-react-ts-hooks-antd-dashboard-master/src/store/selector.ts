import { selector } from 'recoil'
import { globalAtom } from './atom'
import themes from '@/config/themes'

export const globalSelector = {
  themeConfig: selector({
    key: 'themeConfig',
    get: ({ get }) => {
      const key = get(globalAtom.systemConfig).theme
      return themes[key]
    }
  }),

  menuMap: selector({
    key: 'menuMap',
    get: ({ get }) => {
      const menus = get(globalAtom.menus)
      const maps: Record<string, NSP.Menu> = {}

      const getMaps = (menus: NSP.Menu[]) => {
        menus.forEach((item) => {
          maps[item.path] = item
          if (Array.isArray(item.children) && item.children.length) {
            getMaps(item.children)
          }
        })
      }
      getMaps(menus)
      return maps
    }
  }),

  flatMenus: selector({
    key: 'flatMenus',
    get: ({ get }) => {
      const menus = get(globalAtom.menus)
      const flats: NSP.Menu[] = []
      const getMenus = (menus: NSP.Menu[]) => {
        menus.forEach((item) => {
          const { children, ...rest } = item
          flats.push({ ...rest })
          if (children && children.length) {
            getMenus(children)
          }
        })
      }
      getMenus(menus)
      return flats
    }
  })
}
