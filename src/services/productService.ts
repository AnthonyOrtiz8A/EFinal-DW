import { api } from './api'
import type { Product, ListFilters, ProductsResponse } from '../types'

export const PAGE_SIZE = 8

export const productService = {
  list: async ({ page, q }: ListFilters): Promise<ProductsResponse> => {
    const search = q.trim()
    const { data } = await api.get<ProductsResponse>(
      search ? '/auth/products/search' : '/auth/products',
      {
        params: {
          limit: PAGE_SIZE,
          skip: (page - 1) * PAGE_SIZE,
          ...(search ? { q: search } : {}),
        },
      },
    )
    return data
  },

  getById: async (id: number): Promise<Product> => {
    const { data } = await api.get<Product>(`/auth/products/${id}`)
    return data
  },

  create: async (body: FormData): Promise<Product> => {
    const { data } = await api.post<Product>('/products/add', body, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    return data
  },

  remove: async (id: number): Promise<Product> => {
    const { data } = await api.delete<Product>(`/products/${id}`)
    return data
  },
}
