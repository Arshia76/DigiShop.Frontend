import { ProductCard, ProductFilter } from '@/features/products/components'
import { Img } from '@/assets'
import { useShop } from './useShop'

const ShopPage = () => {
  const { products, isLoadingProducts } = useShop()
  return (
    <section className="flex p-4">
      <ProductFilter />
      <div className="flex flex-1 flex-wrap justify-center *:flex-[1_1_300px] *:max-w-[300px] gap-4 ">
        {products?.map((product) => {
          return <ProductCard img={Img.Airpods_Img} title={product.title} price={product.price} />
        })}
      </div>
    </section>
  )
}

export { ShopPage }
