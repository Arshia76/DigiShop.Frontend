import { useMutation, useQuery } from 'react-query'
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../api'
import { IQueryParams } from '@/lib/interface'

export function useGetProductsQuery({ onSuccess, onError }: IQueryParams) {
  return useQuery({
    queryFn: getProducts,
    queryKey: 'products',
    onSuccess,
    onError,
  })
}

export function useGetProductQuery({ data, onSuccess, onError }: IQueryParams) {
  return useQuery({
    queryFn: () => getProduct(data),
    queryKey: ['product', data],
    onSuccess,
    onError,
  })
}

export function useCreateProductMutation() {
  return useMutation({
    mutationFn: createProduct,
  })
}

export function useUpdateProductMutation() {
  return useMutation({
    mutationFn: updateProduct,
  })
}

export function useDeleteProductMutation() {
  return useMutation({
    mutationFn: deleteProduct,
  })
}
