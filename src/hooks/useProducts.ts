import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { productService } from '../services/productService'
import type { Product, ListFilters, ProductsResponse } from '../types'
import { getErrorMessage } from '../utils/errorHandler'

export function useProducts(filters: ListFilters) {
  return useQuery<ProductsResponse>({
    queryKey: ['products', filters.page, filters.q],
    queryFn: () => productService.list(filters),
    placeholderData: keepPreviousData,
  })
}

export function useProduct(id: number) {
  return useQuery<Product>({
    queryKey: ['product', id],
    queryFn: () => productService.getById(id),
    enabled: Number.isInteger(id) && id > 0,
    retry: false,
  })
}

export function useCreateProduct() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: productService.create,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['products'] })
      toast.success('Producto creado correctamente')
    },
    onError: (error) => toast.error(getErrorMessage(error)),
  })
}

export function useDeleteProduct() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: productService.remove,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['products'] })
      toast.success('Producto eliminado correctamente')
    },
    onError: (error) => toast.error(getErrorMessage(error)),
  })
}
