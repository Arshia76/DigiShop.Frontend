import { Button } from '@/components/ui'

export interface ProductDetailProps {
  img: string
  title: string
  price: string
  description: string
  category: string
}

const ProductDetail = ({ category, img, price, title, description }: ProductDetailProps) => {
  return (
    <section className="flex h-full *:flex-[1_1_250px] mx-auto justify-start border-2 gap-4 border-gray-300 p-8 rounded-lg shadow-md">
      <div className="rounded-lg">
        <img src={`${'http://localhost:5000/'}${img?.replaceAll('\\', '/')}`} alt={title} className="rounded-lg object-cover" />
      </div>
      <div className="flex flex-col items-start gap-4">
        <div className="flex items-center justify-between w-full">
          <h4 className="text-2xl font-semibold mb-1">{title}</h4>
          <span className="text-xl font-semibold">{price} ریال</span>
        </div>
        <h5 className="text-xl font-semibold mb-2 text-custom-slate">{category}</h5>
        <p className="text-md text-justify leading-8 text-gray-700">{description}</p>
        <Button colour={'primary'} className="w-fit px-8">
          افزودن به سبد خرید
        </Button>
      </div>
    </section>
  )
}

export default ProductDetail
