import { useParams } from 'react-router-dom'
import { useGetProductQuery } from '../../service/query'
import { useCartContext } from '@/features/cart/components/Cart/context'

export function useProductDetail() {
  const { id } = useParams()
  const { data: product } = useGetProductQuery(id as string, {})

  const { addToCart, checkItemExists } = useCartContext()

  return { product, addToCart, checkItemExists }
}
