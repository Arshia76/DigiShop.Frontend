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
        <img src={img} alt={title} className="rounded-t-lg" />
      </div>
      <div className="px-4  h-full">
        <h4 className="text-xl font-semibold mb-1">{title}</h4>
        <p className="text-sm line-clamp-3 text-ellipsis font-medium leading-5 mb-4 text-justify text-custom-slate">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و
          سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
          طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت
          تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
          گیرد.
        </p>
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
