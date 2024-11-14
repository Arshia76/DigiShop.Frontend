import { Button } from '@/components'

const ProductCard = () => {
  return (
    <div className="flex shadow-lg flex-col gap-4 rounded-lg">
      <div className="w-full h-48 mb-8 cursor-pointer">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="card-image"
          className="rounded-t-lg"
        />
      </div>
      <div className="px-4 py-2 h-full">
        <h4 className="text-xl font-semibold mb-1">نایکی</h4>
        <p className="text-sm line-clamp-4 text-ellipsis font-medium leading-5 text-justify text-custom-slate">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و
          سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
          طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت
          تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
          گیرد.
        </p>
      </div>
      <div className="flex items-center justify-start px-4 pb-4 gap-4">
        <Button colour="primary" className="w-full  p-2">
          افزودن به سبد
        </Button>
      </div>
    </div>
  )
}

export { ProductCard }
