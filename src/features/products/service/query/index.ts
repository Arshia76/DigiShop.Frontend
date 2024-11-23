import { useMutation, useQuery } from 'react-query'
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../api'
import { IErrorResult, IQueryParams } from '@/lib/interface'
import { IProductResult, IProductQuery } from '../interface'

export function useGetProductsQuery(queryParams: IProductQuery, { onSuccess, onError }: IQueryParams<IProductResult[]>) {
  return useQuery({
    queryFn: () => getProducts(queryParams),
    queryKey: 'products',
    onSuccess,
    onError,
  })
}

export function useGetProductQuery(id: string, { onSuccess, onError }: IQueryParams<IProductResult>) {
  return useQuery({
    queryFn: () => getProduct(id),
    queryKey: ['product', id],
    onSuccess,
    onError,
  })
}

export function useCreateProductMutation() {
  return useMutation<IProductResult, IErrorResult, FormData>({
    mutationFn: createProduct,
  })
}

export function useUpdateProductMutation() {
  return useMutation<IProductResult, IErrorResult, FormData>({
    mutationFn: updateProduct,
  })
}

export function useDeleteProductMutation() {
  return useMutation<IProductResult, IErrorResult, string>({
    mutationFn: deleteProduct,
  })
}
