import { Img } from '@/assets'
import { CartItem } from './components/CartItem'
import { CartTotal } from './components/CartTotal'

const Cart = () => {
  return (
    <section
      className="p-4 flex flex-wrap *:flex-[1_1_650px] gap-6 w-full lg:h-[calc(100vh-72px)]
    overflow-hidden"
    >
      <div
        className="flex flex-col gap-6 w-full shadow-md border border-gray-300 rounded-lg p-4
      h-full overflow-y-auto"
      >
        <CartItem img={Img.Airpods_Img} title="هندزفری" price="1,200,000" quantity={5} />
        <CartItem img={Img.Playstation_Img} title="پلی استیشن" price="24,200,000" quantity={9} />
        <CartItem img={Img.Alexa_Img} title="اسپیکر" price="5,200,000" quantity={5} />
        <CartItem img={Img.Camera_Img} title="دوربین" price="5,800,000" quantity={2} />
        <CartItem img={Img.Airpods_Img} title="هندزفری" price="1,200,000" quantity={5} />
        <CartItem img={Img.Playstation_Img} title="پلی استیشن" price="24,200,000" quantity={9} />
        <CartItem img={Img.Alexa_Img} title="اسپیکر" price="5,200,000" quantity={5} />
        <CartItem img={Img.Camera_Img} title="دوربین" price="5,800,000" quantity={2} />
      </div>
      <CartTotal />
    </section>
  )
}

export { Cart }
