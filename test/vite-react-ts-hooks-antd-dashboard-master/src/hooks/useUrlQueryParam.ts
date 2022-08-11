
import { useSearchParams } from 'react-router-dom'
import { useMemo } from 'react'
import { cleanObject } from '@/utils'

export const useUrlQueryParam = <K extends string>(keys:K[]) => {
  const [searchParams, setSearchParam] = useSearchParams()
  return [
    useMemo(() => keys.reduce((prev:{}, key:string) => {
      return { ...prev, [key]: searchParams.get(key) || '' }
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    }, {} as {[key in K]:string}), [searchParams]),
    (params:Partial<{[key in K]: unknown}>) => {
      const o = cleanObject({ ...Object.fromEntries(searchParams), ...params }) as URLSearchParams
      return setSearchParam(o)
    }
  ] as const
}
