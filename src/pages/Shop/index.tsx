import { ProductCard, ProductFilter } from '@/features/products/components'
import { Img } from '@/assets'

const ShopPage = () => {
  return (
    <section className="flex p-4">
      <ProductFilter />
      <div className="flex flex-1 flex-wrap justify-center *:flex-[1_1_300px] *:max-w-[300px] gap-4 ">
        <ProductCard img={Img.Airpods_Img} title="هندزفری" price="1,200,000" />
        <ProductCard img={Img.Playstation_Img} title="پلی استیشن" price="24,200,000" />
        <ProductCard img={Img.Alexa_Img} title="اسپیکر" price="5,200,000" />
        <ProductCard img={Img.Camera_Img} title="دوربین" price="5,800,000" />
        <ProductCard img={Img.Mouse_Img} title="موس" price="600,000" />
        <ProductCard img={Img.Phone_Img} title="موبایل" price="7,200,000" />
      </div>
    </section>
  )
}

export { ShopPage }
