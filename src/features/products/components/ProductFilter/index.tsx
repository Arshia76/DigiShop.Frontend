import { Select, Input, Button } from '@/components/ui'
import { useProductFilter } from './useProductFilter'

const ProductFilter = () => {
  const { control } = useProductFilter()
  return (
    <section className="shadow-md border border-gray-200 rounded-lg p-4 flex flex-col gap-4 h-fit sticky top-[88px]">
      <span className="text-3xl">جستجو</span>
      <Input control={control} label="نام محصول" />
      <Select control={control} label="مرتب سازی" />
      <Select control={control} label="فیلتر" />
      <Button colour={'primary'}>جستجو</Button>
    </section>
  )
}

export { ProductFilter }
