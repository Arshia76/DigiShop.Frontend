import { ProductCard, ProductFilter } from '@/features/products/components'
import { useShop } from './useShop'

const ShopPage = () => {
  const { products, isLoadingProducts } = useShop()
  return (
    <section className="flex p-4 gap-4">
      <ProductFilter />
      <div className="flex flex-1 flex-wrap justify-start *:flex-[1_1_300px] *:max-w-[300px] gap-4 ">
        {products?.map((product) => {
          return (
            <ProductCard
              key={product._id}
              id={product._id}
              img={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          )
        })}
      </div>
    </section>
  )
}

export { ShopPage }
