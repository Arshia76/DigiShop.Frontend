import { useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Alert } from '@/components/ui'
import { SubmitHandler, useForm } from 'react-hook-form'
import { CreateProductSchema, CreateProductType, UpdateProductSchema, UpdateProductType } from '../../schema'
import { useCreateProductMutation, useUpdateProductMutation } from '../../service/query'
import { useQueryClient } from 'react-query'
import { ProductModalProps } from '.'
import { useGetCategoriesQuery } from '@/features/categories/service/query'
import { useProductImage } from '../ProductImage/useProductImage'

export function useProductModal({ productModal, setProductModal }: ProductModalProps) {
  const { type, data, isOpen } = productModal

  const { openFilePicker, plainFiles, clear } = useProductImage()

  const queryClient = useQueryClient()

  const { mutate: createProduct, isLoading: isLoadingCreate } = useCreateProductMutation()

  const { mutate: updateProduct, isLoading: isLoadingUpdate } = useUpdateProductMutation()

  const { data: categories } = useGetCategoriesQuery({})

  const ProductSchema = {
    add: CreateProductSchema,
    edit: UpdateProductSchema,
    delete: null,
    // eslint-disable-next-line
    // @ts-ignore
  }[type]

  type ProductType = {
    add: CreateProductType
    edit: UpdateProductType
    delete: null
    // eslint-disable-next-line
    // @ts-ignore
  }[type]

  const {
    control,
    handleSubmit,
    setValue,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm<ProductType>({
    resolver: zodResolver(ProductSchema),
  })

  const [image] = watch(['image'])

  const onSubmit: SubmitHandler<ProductType> = (values) => {
    const formData = new FormData()

    formData.append('category', values.category.value)
    formData.append('image', values.image)
    formData.append('price', values.price.toString())
    formData.append('quantity', values.quantity.toString())
    formData.append('title', values.title)
    formData.append('description', values.description)

    if (type === 'edit') {
      formData.append('id', data._id)
      updateProduct(formData, {
        onSuccess() {
          queryClient.invalidateQueries('products')

          setProductModal({
            isOpen: false,
            data: null,
            type,
          })
        },
        onError(error) {
          Alert({ type: 'error', message: error.message })
        },
      })
    } else {
      createProduct(formData, {
        onSuccess() {
          queryClient.invalidateQueries('products')

          setProductModal({
            isOpen: false,
            data: null,
            type,
          })
        },
        onError(error) {
          Alert({ type: 'error', message: error.message })
        },
      })
    }
  }

  useEffect(() => {
    if (data && type === 'edit') {
      const category = categories?.find((item) => item._id === data.category._id)

      setValue('title', data?.title)
      setValue('description', data?.description)
      setValue('price', data?.price)
      setValue('quantity', data?.quantity)
      setValue('image', `${window.STATIC_URL?.imagePath}${data.image.replaceAll('\\', '/')}`)
      setValue('category', { label: category?.title, value: category?._id })
    } else {
      setValue('title', '')
      setValue('description', '')
      // @ts-ignore
      setValue('price', '')
      // @ts-ignore
      setValue('quantity', '')
      setValue('image', '')
      // @ts-ignore
      setValue('category', '')
      clear()
    }
    // eslint-disable-next-line
  }, [data, setValue, type, isOpen])

  useEffect(() => {
    clearErrors()
  }, [type, clearErrors, isOpen])

  const isLoading = isLoadingCreate || isLoadingUpdate

  return {
    control,
    errors,
    isLoading,
    categories,
    image,
    plainFiles,
    clear,
    openFilePicker,
    handleSubmit: handleSubmit(onSubmit),
  }
}
