import { api } from './api'
import type { Product, ListFilters, ProductsResponse } from '../types'

export const PAGE_SIZE = 8

export const productService = {
  // TODO 2.1 (Listado): GET /auth/products con params limit=PAGE_SIZE y skip=(page - 1) * PAGE_SIZE.
  // Si hay texto de búsqueda (q), use GET /auth/products/search con el parámetro q.
  list: async ({ page, q }: ListFilters): Promise<ProductsResponse> => {
    void api
    void page
    void q
    throw new Error('list no implementado')
  },

  // TODO 3.1 (Detalle): GET /auth/products/{id}.
  getById: async (id: number): Promise<Product> => {
    void id
    throw new Error('getById no implementado')
  },

  // TODO 4.3 (Crear): POST /products/add enviando el FormData (multipart/form-data).
  create: async (body: FormData): Promise<Product> => {
    void body
    throw new Error('create no implementado')
  },

  // TODO 4.4 (Eliminar): DELETE /products/{id}.
  remove: async (id: number): Promise<Product> => {
    void id
    throw new Error('remove no implementado')
  },
}
