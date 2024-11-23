import { ProductCard, ProductFilter } from '@/features/products/components'
import { useShop } from './useShop'
import { GridLoader } from '@/components/ui/Table/components'

const ShopPage = () => {
  const { products, isLoadingProducts } = useShop()
  return (
    <section className="flex p-4 gap-4">
      <ProductFilter />
      {isLoadingProducts ? (
        <div className="flex-1 flex justify-center">
          <GridLoader />
        </div>
      ) : (
        <div className="flex flex-1 flex-wrap justify-start *:flex-[1_1_300px] *:max-w-[300px] gap-4 ">
          {products?.length ? (
            products?.map((product) => {
              return (
                <ProductCard
                  key={product._id}
                  id={product._id}
                  img={product.image}
                  title={product.title}
                  price={product.price}
                  category={product.category.title}
                  description={product.description}
                />
              )
            })
          ) : (
            <span className="text-xl w-full mx-auto  font-semibold text-center">موردی یافت نشد</span>
          )}
        </div>
      )}
    </section>
  )
}

export { ShopPage }
