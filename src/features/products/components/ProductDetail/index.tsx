import { Button } from '@/components/ui'
import { useProductDetail } from './useProductDetail'
import { GridLoader } from '@/components/ui/Table/components'
import { useNavigate } from 'react-router-dom'
import { Routes } from '@/lib/routes'

const ProductDetail = () => {
  const { product, addToCart, checkItemExists, isLoading } = useProductDetail()
  const navigate = useNavigate()

  if (isLoading)
    return (
      <div className="flex w-full justify-center">
        <GridLoader />
      </div>
    )
  if (product)
    return (
      <section className="flex h-full *:flex-[1_1_250px] mx-auto justify-start border-2 gap-4 border-gray-300 p-8 rounded-lg shadow-md">
        <div className="rounded-lg">
          <img
            src={`${window.STATIC_URL?.imagePath}${product.image.replaceAll('\\', '/')}`}
            alt={product.title}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center justify-between w-full">
            <h4 className="text-2xl font-semibold mb-1">{product?.title}</h4>
            <span className="text-xl font-semibold">{product?.price.toLocaleString()} ریال</span>
          </div>
          <h5 className="text-md font-semibold mb-2 bg-custom-black text-white rounded-full px-10 py-1">{product?.category?.title}</h5>
          <p className="text-md text-justify leading-8 text-gray-700">{product?.description}</p>
          <div className="flex items center gap-4">
            <Button
              colour={'primary'}
              className="w-fit px-8"
              disabled={checkItemExists(product._id)}
              onClick={() => {
                addToCart({
                  id: product._id,
                  title: product.title,
                  price: Number(product.price),
                  image: product.image,
                  quantity: Number(product.quantity),
                  selectedQuantity: 1,
                })
              }}
            >
              {checkItemExists(product._id) ? 'به سبد افزوده شد.' : 'افزودن به سبد خرید'}
            </Button>
            <Button colour={'secondary'} className="w-fit px-8" onClick={() => navigate(Routes.SHOP)}>
              ادامه خرید
            </Button>
          </div>
        </div>
      </section>
    )
}

export default ProductDetail
