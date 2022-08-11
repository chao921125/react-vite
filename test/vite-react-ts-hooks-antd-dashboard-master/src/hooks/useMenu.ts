import { useRecoilState } from 'recoil'
import { globalAtom } from '@/store'
import { useLocation } from 'react-router-dom'

export default function useMenu() {
  const [menus] = useRecoilState(globalAtom.menus)
  const [navMenus, setNavMenus] = useRecoilState(globalAtom.navMenus)
  const location = useLocation()
  // 获取当前路由对应的菜单
  const getMenuByPath = (path: string, all?: boolean) => {
    const patharr = path.split('/')
    const arr: string[] = patharr.map((item, index) => patharr.slice(0, index + 1).join('/')).slice(1)

    const findMenu = (list: NSP.Menu[], path: string) => {
      return list.filter((item) => item.path === path)[0]
    }
    let currentList = [...menus]
    const current: NSP.Menu[] = []
    arr.forEach((item) => {
      const cm = findMenu(currentList, item)
      if (cm) {
        current.push(cm)
      }
      currentList = cm?.children || currentList
    })
    if (all) {
      return current
    }
    return current[current.length - 1]
  }

  //  删除胶囊导航
  const removeNavMenus = (path: string) => {
    const next = navMenus.filter((item) => item.path !== path)
    if (next.length !== navMenus.length) {
      setNavMenus(next)
    }
  }
  // 添加胶囊导航
  const addNavMenus = (menu: NSP.Menu) => {
    if (!navMenus.filter((item) => item.path === menu.path).length) {
      setNavMenus([...navMenus, menu])
    }
  }
  // 关闭所有胶囊导航
  const closeAllNavMenus = () => {
    setNavMenus([navMenus[0]])
  }

  // 关闭其他胶囊导航
  const closeOtherNavMenus = () => {
    const navs = navMenus.filter(item => item.path == location.pathname || item.path == '/')
    setNavMenus(navs)
  }

  // 关闭左边胶囊导航
  const closeLeftNavMenus = () => {
    const numKey = navMenus.findIndex((item) => {
      return item.path === location.pathname
    })
    const navs = navMenus.filter((item, index) => item.path == location.pathname || item.path == '/' || index >= numKey)
    setNavMenus(navs)
  }
  // 关闭右边胶囊导航
  const closeRightNavMenus = () => {
    const numKey = navMenus.findIndex((item) => {
      return item.path === location.pathname
    })
    const navs = navMenus.filter((item, index) => item.path == location.pathname || item.path == '/' || index < numKey)
    setNavMenus(navs)
  }

  return {
    menus,
    getMenuByPath,
    addNavMenus,
    removeNavMenus,
    closeAllNavMenus,
    closeOtherNavMenus,
    closeLeftNavMenus,
    closeRightNavMenus
  }
}
