import { Button } from '@/components/ui'
import { Routes } from '@/lib/routes'
import { useNavigate } from 'react-router-dom'

export interface ProductCardProps {
  id: string
  img: string
  title: string
  price: string
  category: string
  description: string
}

const ProductCard = ({ id, img, description, price, title, category }: ProductCardProps) => {
  const navigate = useNavigate()
  return (
    <div className="flex shadow-lg flex-col gap-4 rounded-lg">
      <div className="w-full cursor-pointer relative">
        <span className="absolute left-3 top-3 text-sm bg-custom-black text-white rounded-2xl px-4 py-1">{category}</span>
        <img src={`${window.STATIC_URL?.imagePath}${img.replaceAll('\\', '/')}`} alt={title} className="rounded-t-lg" />
      </div>
      <div className="px-4  h-full">
        <h4 className="text-xl font-semibold mb-1">{title}</h4>

        <p className="text-sm line-clamp-3 text-ellipsis font-medium leading-5 mb-4 text-justify text-custom-slate">{description}</p>
        <span className="text-xl font-semibold">{price.toLocaleString()} ریال</span>
      </div>
      <div className="flex items-center justify-start px-4 pb-4 gap-4">
        <Button colour="primary" className="w-full p-2" onClick={() => navigate(Routes.DETAIL + '/' + id)}>
          مشاهده
        </Button>
      </div>
    </div>
  )
}

export { ProductCard }
