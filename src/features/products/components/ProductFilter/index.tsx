import { Select, Input, Button } from '@/components/ui'
import { useProductFilter } from './useProductFilter'

const ProductFilter = () => {
  const { control, categories, sortOptions, isFetching, handleSubmit } = useProductFilter()
  return (
    <section className="shadow-md border border-gray-200 rounded-lg p-4 flex flex-col gap-4 h-fit sticky top-[88px]">
      <span className="text-3xl">جستجو</span>
      <Input control={control} label="نام محصول" name="query" />
      <Select control={control} label="مرتب سازی" name="sort" options={sortOptions} isClearable />
      <Select control={control} label="دسته بندی" name="category" options={categories} isClearable />
      <Button colour={'primary'} loading={isFetching} loaderOnly onClick={handleSubmit}>
        جستجو
      </Button>
    </section>
  )
}

export { ProductFilter }
