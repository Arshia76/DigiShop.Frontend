import { useParams } from 'react-router-dom'
import { useGetProductQuery } from '../../service/query'
import { useCartContext } from '@/features/cart/context'

export function useProductDetail() {
  const { id } = useParams()
  const { data: product, isLoading } = useGetProductQuery(id as string, {})

  const { addToCart, checkItemExists } = useCartContext()

  return { product, isLoading, addToCart, checkItemExists }
}
