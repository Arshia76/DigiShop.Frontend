import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ProductFilterSchema, ProductFilterType } from '../../schema'

export function useProductFilter() {
  const { control, handleSubmit } = useForm<ProductFilterType>({
    resolver: zodResolver(ProductFilterSchema),
  })

  return { control }
}
