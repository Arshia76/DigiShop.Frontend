import { Button } from '@/components/ui'

export interface ProductDetailProps {
  img: string
  title: string
  price: string
  description?: string
  category: string
}

const ProductDetail = ({ category, img, price, title, description }: ProductDetailProps) => {
  return (
    <section className="flex h-full *:flex-[1_1_250px] mx-auto justify-start border-2 gap-4 border-gray-300 p-8 rounded-lg shadow-md">
      <div className="rounded-lg">
        <img src={img} alt={title} className="rounded-lg object-cover" />
      </div>
      <div className="flex flex-col items-start gap-4">
        <div className="flex items-center justify-between w-full">
          <h4 className="text-2xl font-semibold mb-1">{title}</h4>
          <span className="text-xl font-semibold">{price} ریال</span>
        </div>
        <h5 className="text-xl font-semibold mb-2 text-custom-slate">{category}</h5>
        <p className="text-md text-justify leading-8 text-gray-700">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و
          سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
          طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت
          تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
          گیرد.
        </p>
        <Button colour={'primary'} className="w-fit px-8">
          افزودن به سبد خرید
        </Button>
      </div>
    </section>
  )
}

export default ProductDetail
