import { useGetProductsQuery } from '@/features/products/service/query'

export function useShop() {
  const { data: products, isFetching: isLoadingProducts } = useGetProductsQuery({}, {})

  return { products, isLoadingProducts }
}
