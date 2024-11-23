import { useQueryClient } from 'react-query'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ProductQuerySchema, ProductQueryType } from '../../schema'
import { useGetCategoriesQuery } from '@/features/categories/service/query'
import { useGetProductsQuery } from '../../service/query'

export function useProductFilter() {
  const { data } = useGetCategoriesQuery({})
  const queryClient = useQueryClient()

  const categories = data?.map((c) => ({
    label: c.title,
    value: c._id,
  }))

  const sortOptions = [
    {
      label: 'بیشترین قیمت',
      value: 'price',
    },
    {
      label: 'جدید ترین',
      value: 'date',
    },
  ]

  const { control, handleSubmit, watch } = useForm<ProductQueryType>({
    resolver: zodResolver(ProductQuerySchema),
  })

  const { category, query, sort } = watch()

  const { refetch, isFetching } = useGetProductsQuery(
    {
      category: category?.value,
      query: query?.length ? query : null,
      sort: sort?.value,
    },
    {}
  )

  const onSubmit: SubmitHandler<ProductQueryType> = () => {
    refetch()
    queryClient.invalidateQueries('products')
  }

  return {
    control,
    categories,
    sortOptions,
    isFetching,
    handleSubmit: handleSubmit(onSubmit),
  }
}
