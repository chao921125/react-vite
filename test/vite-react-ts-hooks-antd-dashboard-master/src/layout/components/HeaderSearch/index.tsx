import { SearchOutlined } from '@ant-design/icons'
import { AutoComplete, Input } from 'antd'
import useMergedState from 'rc-util/es/hooks/useMergedState'
import type { AutoCompleteProps } from 'antd/es/auto-complete'
import React, { useRef } from 'react'

import classNames from 'classnames'
import './index.less'
import { useSetRecoilState } from 'recoil'
import { globalAtom } from '@/store'

export interface HeaderSearchProps {
  onSearch?: (value?: string) => void
  onChange?: (value?: string) => void
  onVisibleChange?: (b: boolean) => void
  className?: string
  placeholder?: string
  options: AutoCompleteProps['options']
  defaultVisible?: boolean
  visible?: boolean
  defaultValue?: string
  value?: string
}

const HeaderSearch: React.FC<HeaderSearchProps> = (props) => {
  const { className, defaultValue, onVisibleChange, placeholder, visible, defaultVisible, ...restProps } = props

  // @ts-ignore
  const inputRef = useRef<Input | null>(null)

  const [value, setValue] = useMergedState<string | undefined>(defaultValue, {
    value: props.value,
    onChange: props.onChange
  })

  const handleChange = (value: string) => {
    setValue(value)
  }

  const [searchMode, setSearchMode] = useMergedState(defaultVisible ?? false, {
    value: props.visible,
    onChange: onVisibleChange
  })

  const setSearchVisible = useSetRecoilState(globalAtom.headerSearchVisible)

  const inputClass = classNames('input', {
    ['show']: searchMode
  })
  return (
    <div
      className={classNames(className, 'headerSearch')}
      onClick={() => {
        setSearchMode(true)
        setSearchVisible(true)
        if (searchMode && inputRef.current) {
          inputRef.current.focus()
        }
      }}
      onTransitionEnd={({ propertyName }) => {
        if (propertyName === 'width' && !searchMode) {
          if (onVisibleChange) {
            onVisibleChange(searchMode)
          }
        }
      }}
    >
      <SearchOutlined
        key='Icon'
        style={{
          cursor: 'pointer'
        }}
      />
      <AutoComplete key='AutoComplete' className={inputClass} value={value} options={restProps.options} onChange={handleChange}>
        <Input
          size='small'
          ref={inputRef}
          defaultValue={defaultValue}
          aria-label={placeholder}
          placeholder={placeholder}
          allowClear
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              if (restProps.onSearch) {
                restProps.onSearch(value)
              }
            }
          }}
          onBlur={() => {
            setSearchMode(false)
            setSearchVisible(false)
          }}
        />
      </AutoComplete>
    </div>
  )
}

export default HeaderSearch
