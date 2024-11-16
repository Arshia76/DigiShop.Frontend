import { Button } from '@/components/ui'

const HomePage = () => {
  return (
    <main
      className="h-[calc(100vh-72px)] w-full bg-hero bg-no-repeat bg-cover bg-center relative
    after:bg-black after:absolute after:left-0 after:top-0 after:w-full
    after:h-full after:bg-opacity-50"
    >
      <div
        className="flex flex-col items-center justify-center absolute top-1/2 left-1/2
      -translate-x-1/2 -translate-y-1/2 gap-10 z-30"
      >
        <h1 className="text-5xl font-bold text-lightBlue-300">به دیجی شاپ خوش آمدید</h1>
        <p className="text-2xl font-semibold text-white">بهترین تجهیزات و لوازم الکترونیکی را از ما بخرید</p>
        <Button className="h-14 px-6 text-4xl" colour={'primary'}>
          شروع خرید
        </Button>
      </div>
    </main>
  )
}

export { HomePage }
