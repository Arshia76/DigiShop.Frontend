import { Img } from '@/assets'
import ProductDetail from '@/features/products/components/ProductDetail'

const ProductPage = () => {
  return (
    <section className="p-4">
      <ProductDetail img={Img.Airpods_Img} title="هندزفری" price="1,200,000" category="هندزفری اپل" />
    </section>
  )
}

export { ProductPage }
