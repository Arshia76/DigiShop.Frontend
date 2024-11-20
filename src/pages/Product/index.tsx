import ProductDetail from '@/features/products/components/ProductDetail'
import { useGetProductQuery } from '@/features/products/service/query'
import { useParams } from 'react-router-dom'

const ProductPage = () => {
  const { id } = useParams()
  const { data: product } = useGetProductQuery(id as string, {})
  return (
    <section className="p-4">
      <ProductDetail
        img={product?.image}
        title={product?.title}
        price={product?.price}
        description={product?.description}
        category={product?.category.title}
      />
    </section>
  )
}

export { ProductPage }
