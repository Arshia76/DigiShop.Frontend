import { createContext, useContext, useEffect, useState } from 'react'

export interface CartItem {
  id: string
  title: string
  quantity: number
  selectedQuantity: number
  price: number
  image: string
}

const CartContext = createContext<{
  cartItems: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: string) => void
  changeItemQuantity: (id: string, quantity: number) => void
  checkItemExists: (id: string) => boolean
  clearCart: () => void
}>({
  cartItems: [],
  addToCart: () => null,
  removeFromCart: () => null,
  changeItemQuantity: () => null,
  checkItemExists: () => false,
  clearCart: () => null,
})

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(
    JSON.parse(localStorage.getItem('DigiShopCart') ?? JSON.stringify('')) || []
  )

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((prevItem) => prevItem.id === item.id)

      if (!existingItem) {
        return [...prevItems, item]
      }
      return prevItems
    })
  }

  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((prevItem) => prevItem.id === id)

      if (existingItem) {
        return prevItems.filter((prevItem) => prevItem.id !== id)
      }
      return prevItems
    })
  }

  const changeItemQuantity = (id: string, selectedQuantity: number) => {
    setCartItems((prevItems) => {
      const items = prevItems.map((item) => {
        if (item.id === id) {
          item.selectedQuantity = selectedQuantity
        }
        return item
      })

      localStorage.setItem('DigiShopCart', JSON.stringify(items))
      return items
    })
  }

  const checkItemExists = (id: string) => {
    return cartItems.some((item) => item.id === id)
  }

  const clearCart = () => {
    setCartItems([])
    localStorage.removeItem('DigiShopCart')
  }
  useEffect(() => {
    localStorage.setItem('DigiShopCart', JSON.stringify(cartItems))
    // eslint-disable-next-line
  }, [cartItems.length])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        changeItemQuantity,
        clearCart,
        checkItemExists,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// eslint-disable-next-line
export const useCartContext = () => useContext(CartContext)
