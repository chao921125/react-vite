import React, { Fragment, memo, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { globalAtom, globalSelector } from '@/store'
import { RandGen } from '@/utils/generater'

const KeepAlive = (props: { children: any}) => {
  const { children } = props
  const location = useLocation()
  const componentList = useRef(new Map())
  const [updateReducer, forceUpdateReducer] = useRecoilState(globalAtom.forceUpdateReducer)// 强制渲染

  const { pathname } = location
  const storage = useRef(new Map())

  const activeKey = useRef('activeKey')
  const [reload, setReload] = useState(false)
  const cacheRoutes = useRecoilValue(globalAtom.cacheRoutes)
  const menuMap = useRecoilValue(globalSelector.menuMap)
  const navMenus = useRecoilValue(globalAtom.navMenus)
  // const params = useParams()
  // 重新加载
  const uploadTab = () => {
    setTimeout(() => {
      forceUpdateReducer(false)
    })
    forceUpdateReducer(true)
  }

  const [firstOne, setFirstOne] = useState(true)

  useEffect(() => {
    setFirstOne(false)
  }, [])

  useEffect(() => {
    const newKey = RandGen.RandomString(16)
    if (!storage.current.has(pathname)) {
      storage.current.set(pathname, newKey)
    }
    activeKey.current = pathname + '__' + (storage.current.has(pathname) ? storage.current.get(pathname) : newKey)

    componentList.current.forEach((value, key) => {
      const _key = key.split('__')[0]
      // console.log('--------------useEffectupdateReducer========', updateReducer)
      console.log('--------------_key========', _key)
      // console.log('--------------pathname========', pathname)
      console.log('--------------!navMenus.includes(_key)========', !cacheRoutes.includes(_key))
      // console.log('--------------(_key === pathname)========', (_key === pathname))
      console.log('--------------updateReducer========', updateReducer)
      console.log('--------------firstOne========', firstOne)
      if (!cacheRoutes.includes(_key) || updateReducer || firstOne) {
        componentList.current.delete(key)
        storage.current.delete(_key)
      }
    }, componentList.current)
    if (!componentList.current.has(activeKey.current) && activeKey.current !== '') {
      componentList.current.set(activeKey.current, children)
    }
    doRefresh()
  }, [pathname, menuMap, navMenus, cacheRoutes, updateReducer])

  useEffect(() => {
    reload && setTimeout(() => setReload(false))
  }, [reload])
  const doRefresh = () => setReload(true)
  // componentDidMount
  useEffect(() => {
    uploadTab()
  }, [])
  return (
    <div>
      {
        Array.from(componentList.current).map(([key, component]) =>
          <Fragment key={key}>
            {
              key === activeKey.current
                ? <div
                  className={
                    `layout-container${cacheRoutes.includes(key.split('__')[0]) ? ' keep-alive-fade' : ''}`
                  }>
                  { component }
                </div>
                : <div
                  className='layout-container__keep-alive'
                  style={{ display: 'none' }}>
                  { component }
                </div>
            }
          </Fragment>
        )
      }
    </div>
  )
}

export default memo(KeepAlive)
