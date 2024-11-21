import { useCartContext } from './context'

export function useCart() {
  const { cartItems } = useCartContext()

  return { cartItems }
}
