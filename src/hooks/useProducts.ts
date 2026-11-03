import { productService } from '../services/productService'
import type { Product, ListFilters, ProductsResponse } from '../types'

// TODO 2.2 (Listado): useProducts(filters) con useQuery. La queryKey debe incluir los filtros y la
// consulta no debe parpadear al cambiar de página (placeholderData: keepPreviousData).
export function useProducts(filters: ListFilters) {
  void productService
  void filters
  return { data: undefined as ProductsResponse | undefined, isLoading: false, isError: false, error: null as unknown, refetch: () => {}, isFetching: false }
}

// TODO 3.1 (Detalle): useProduct(id) con useQuery; sin reintentos (retry: false) para que un 404 se muestre de inmediato.
export function useProduct(id: number) {
  void id
  return { data: undefined as Product | undefined, isLoading: false, isError: false, error: null as unknown }
}

// TODO 4.3 (Crear): useCreateProduct() con useMutation. Al terminar: toast de éxito y invalidar la lista.
// Si falla: toast de error con getErrorMessage.
export function useCreateProduct() {
  return {
    mutate: (body: FormData, options?: { onSuccess?: () => void }) => {
      void body
      void options
    },
    isPending: false,
  }
}

// TODO 4.4 (Eliminar): useDeleteProduct() con useMutation. Mismo patrón que crear.
export function useDeleteProduct() {
  return {
    mutate: (id: number) => {
      void id
    },
    isPending: false,
  }
}
