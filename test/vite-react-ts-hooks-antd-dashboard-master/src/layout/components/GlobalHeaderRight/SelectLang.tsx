import React from 'react'
import { Menu } from 'antd'
import { ReactComponent as LanguageSvg } from '@/assets/svg/language.svg'
import classes from './index.module.less'
import { localeConfig } from '@/config/locale'
// import { useLocale } from '@/locales'
import { useRecoilState } from 'recoil'
import HeaderDropdown from '../HeaderDropdown'
import { globalAtom } from '@/store'

interface SelectLangProps {
  className?: string
}

const SelectLang: React.FC<SelectLangProps> = () => {
  const [user, setUser] = useRecoilState(globalAtom.user)
  const [selectedKeys, setSelectedKeys] = React.useState<string[]>([])

  const selectLocale = ({ key }: { key: any }) => {
    setUser({ ...user, locale: key })
    localStorage.setItem('locale', key)
    setSelectedKeys([key])
  }

  const langList = () => {
    return (
      <Menu onClick={selectLocale} selectedKeys={selectedKeys} style={{ textAlign: 'left' }} items={localeConfig} />
    )
  }
  return (
    <HeaderDropdown placement='bottomRight' className={classes.action} overlay={langList}>
      <span id='language-change' className={classes.lang}>
        <LanguageSvg className={`anticon `} />
      </span>
    </HeaderDropdown>
  )
}

export default SelectLang
