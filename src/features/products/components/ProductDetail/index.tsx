import { Button } from '@/components/ui'
import { useProductDetail } from './useProductDetail'

const ProductDetail = () => {
  const { product, addToCart, checkItemExists } = useProductDetail()

  return (
    <section className="flex h-full *:flex-[1_1_250px] mx-auto justify-start border-2 gap-4 border-gray-300 p-8 rounded-lg shadow-md">
      <div className="rounded-lg">
        <img src={`${'http://localhost:5000/'}${product?.image?.replaceAll('\\', '/')}`} alt={product?.title} className="rounded-lg object-cover" />
      </div>
      <div className="flex flex-col items-start gap-4">
        <div className="flex items-center justify-between w-full">
          <h4 className="text-2xl font-semibold mb-1">{product?.title}</h4>
          <span className="text-xl font-semibold">{product?.price.toLocaleString()} ریال</span>
        </div>
        <h5 className="text-xl font-semibold mb-2 text-custom-slate">{product?.category?.title}</h5>
        <p className="text-md text-justify leading-8 text-gray-700">{product?.description}</p>
        <Button
          colour={'primary'}
          className="w-fit px-8"
          disabled={checkItemExists(product?._id)}
          onClick={() => {
            addToCart({
              id: product?._id,
              title: product?.title,
              price: product?.price,
              image: product?.image,
              quantity: product?.quantity,
              selectedQuantity: 1,
            })
          }}
        >
          {checkItemExists(product?._id) ? 'به سبد افزوده شد.' : 'افزودن به سبد خرید'}
        </Button>
      </div>
    </section>
  )
}

export default ProductDetail
