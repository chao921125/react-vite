import { AxiosInstance, AxiosRequestTransformer } from 'axios'
import qs from 'qs'
import { createContext, useContext } from 'react'
import { useMutation, useQuery } from 'react-query'
import request from '@/utils/request'

export const AxiosContext = createContext<AxiosInstance>(
  new Proxy(request, {
    apply: () => {
      throw new Error('You must wrap your component in an AxiosProvider')
    },
    get: () => {
      throw new Error('You must wrap your component in an AxiosProvider')
    }
  })
)

export const useAxios = () => {
  return useContext(AxiosContext)
}

const transformPagination = (pagination: any) => {
  if (!pagination) return

  const current = pagination.current ? pagination.current : pagination.defaultCurrent
  const pageSize = pagination.pageSize ? pagination.pageSize : pagination.defaultPageSize

  // let offset = 0
  // if (current && pageSize) {
  //   offset = (current - 1) * pageSize
  // }

  return {
    page: current,
    pageSize
  }
}

const useGetOne = <T>(key: string, url: string, params?: any) => {
  const axios = useAxios()

  const service = async () => {
    return await axios.get(
      `${url}`,
      params
    )
  }
  return useQuery(key, () => service())
}

const useGetPageList = <T>(key: string, url: string, pagination?: any, filters?: any, sorter?: any) => {
  const axios = useAxios()

  const service = async () => {
    const page = { ...transformPagination(pagination) }
    const params = transformParams(Object.assign(page, filters, sorter))
    const transformRequest: AxiosRequestTransformer = (data, headers) => {}
    // console.log('--params: ', params)
    return await axios.get(`${url}`, {
      params,
      paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: 'repeat' })
      },
      transformRequest
    })
  }
  return useQuery(key, () => service())
}

const transformParams = (obj: any) => {
  if (!obj) return {}
  return obj
}

const useGetList = <T>(key: string, url: string, filters?: any, sorter?: any) => {
  const axios = useAxios()
  const params = filters || sorter ? transformParams(Object.assign(filters, sorter)) : {} // transformFilters(filters)

  const service = async () => {
    // console.log('--params: ', params)
    return await axios.get(`${url}`, {
      params,
      paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: 'repeat' })
      }
    }).then((res) => {
      console.log('--res: ', res)
      return res.data as T | undefined
    }).catch((error) => {
      console.log('--error: ', error)
      return error
    })
  }
  return useQuery(key, () => service())
}

const useCreate = <T, U>(url: string) => {
  const axios = useAxios()
  return useMutation(async (params: T) => {
    return await axios.post(`${url}`, qs.stringify(params)).then((res) => {
      return res.data as U
    })
  })
}

const useUpdate = <T>(url: string) => {
  const axios = useAxios()
  return useMutation(async (item: T) => {
    return await axios.patch(`${url}`, item)
  })
}

const useDelete = <T>(url: string) => {
  const axios = useAxios()
  return useMutation(async (id: number) => {
    return await axios.delete(`${url}?id=${id}`)
  })
}

const useBatch = (url: string) => {
  const axios = useAxios()
  return useMutation(async (ids: number[]) => {
    return await axios.post(`${url}`, { idList: ids })
  })
}

export { useGetOne, useGetList, useGetPageList, useUpdate, useCreate, useDelete, useBatch }
