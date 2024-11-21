import { CartItem } from './components/CartItem'
import { CartTotal } from './components/CartTotal'
import { useCart } from './useCart'

const Cart = () => {
  const { cartItems } = useCart()
  return (
    <section
      className="p-4 flex flex-wrap *:flex-[1_1_650px] gap-6 w-full lg:h-[calc(100vh-72px)]
    overflow-hidden"
    >
      <div
        className="flex flex-col gap-6 w-full shadow-md border border-gray-300 rounded-lg p-4
      h-full overflow-y-auto"
      >
        {cartItems.map((item) => {
          return (
            <CartItem
              id={item.id}
              selectedQuantity={item.selectedQuantity}
              img={item.image}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              key={item.id}
            />
          )
        })}
      </div>
      <CartTotal />
    </section>
  )
}

export { Cart }
