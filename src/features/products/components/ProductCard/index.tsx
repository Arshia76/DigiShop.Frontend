import { Button } from '@/components/ui'

export interface ProductCardProps {
  img: string
  title: string
  price: string
  description?: string
}

const ProductCard = ({ img, description, price, title }: ProductCardProps) => {
  return (
    <div className="flex shadow-lg flex-col gap-4 rounded-lg">
      <div className="w-full cursor-pointer">
        <img src={`${'http://localhost:5000/'}${img.replaceAll('\\', '/')}`} alt={title} className="rounded-t-lg" />
      </div>
      <div className="px-4  h-full">
        <h4 className="text-xl font-semibold mb-1">{title}</h4>
        <p className="text-sm line-clamp-3 text-ellipsis font-medium leading-5 mb-4 text-justify text-custom-slate">{description}</p>
        <span className="text-xl font-semibold">{price} ریال</span>
      </div>
      <div className="flex items-center justify-start px-4 pb-4 gap-4">
        <Button colour="primary" className="w-full p-2">
          مشاهده
        </Button>
      </div>
    </div>
  )
}

export { ProductCard }
