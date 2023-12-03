import { useQuery, UseQueryOptions } from 'react-query'

import getDesigns from 'src/api/designs/designs'

type ApiType = Awaited<ReturnType<typeof getDesigns>>

interface Root {
  id: number
  design_name: string
  size_id: number
  quantity: number
  image_url: string
  packing_id: number
  type_id: number
  ProductPacking: ProductPacking
  ProductSize: ProductSize
  ProductType: ProductType
}

export interface ProductPacking {
  id: number
  packing_name: string
}

export interface ProductSize {
  id: number
  size_name: string
}

export interface ProductType {
  id: number
  type_name: string
  category_id: number
  ProductCategory: ProductCategory
}

export interface ProductCategory {
  id: number
  category_name: string
}

const REQUEST_RETRY_COUNT = 3

interface Options<TData>
  extends Omit<UseQueryOptions<ApiType, unknown, TData>, 'queryKey' | 'queryFn' | 'cacheTime' | 'select'> {
  select?: (data: ApiType) => TData
}

const useFetchDesigns = <T = ApiType>({ onError, ...options }: Options<T> = {}) => {
  const initQuery = useQuery({
    queryKey: ['designs data'],
    queryFn: async () => {
      const data = await getDesigns()

      return data
    },
    cacheTime: Infinity,
    enabled: true,
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    retry: REQUEST_RETRY_COUNT,
    staleTime: Infinity,
    onError: error => {
      if (onError) {
        onError(error)
      }
    },
    ...options
  })

  return initQuery
}

export default useFetchDesigns
export type { Root as DesignRoot }
