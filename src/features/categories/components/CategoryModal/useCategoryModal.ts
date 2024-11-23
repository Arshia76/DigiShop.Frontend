import { useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { CreateCategorySchema, CreateCategoryType, UpdateCategorySchema, UpdateCategoryType } from '../../schema'
import { useCreateCategoryMutation, useUpdateCategoryMutation } from '../../service/query'
import { useQueryClient } from 'react-query'
import { CategryModalProps } from '.'
import { Alert } from '@/components/ui'

export function useCategoryModal({ categoryModal, setCategoryModal }: CategryModalProps) {
  const { type, data, isOpen } = categoryModal

  const queryClient = useQueryClient()

  const { mutate: createProduct, isLoading: isLoadingCreate } = useCreateCategoryMutation()

  const { mutate: updateProduct, isLoading: isLoadingUpdate } = useUpdateCategoryMutation()

  const CategorySchema = {
    add: CreateCategorySchema,
    edit: UpdateCategorySchema,
    delete: null,
    // eslint-disable-next-line
    // @ts-ignore
  }[type]

  type CategoryType = {
    add: CreateCategoryType
    edit: UpdateCategoryType
    delete: null
    // eslint-disable-next-line
    // @ts-ignore
  }[type]

  const {
    control,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<CategoryType>({
    resolver: zodResolver(CategorySchema),
  })

  const onSubmit: SubmitHandler<CategoryType> = (values) => {
    if (type === 'edit') {
      updateProduct(
        { id: data._id, ...values },
        {
          onSuccess() {
            queryClient.invalidateQueries('categories')

            setCategoryModal({
              isOpen: false,
              data: null,
              type,
            })
          },
          onError(error) {
            Alert({ type: 'error', message: error.message })
          },
        }
      )
    } else {
      createProduct(values, {
        onSuccess() {
          queryClient.invalidateQueries('categories')

          setCategoryModal({
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
      setValue('title', data?.title)
    } else {
      setValue('title', '')
    }
  }, [data, setValue, type, isOpen])

  useEffect(() => {
    clearErrors()
  }, [type, clearErrors, isOpen])

  const isLoading = isLoadingCreate || isLoadingUpdate

  return {
    control,
    errors,
    isLoading,
    handleSubmit: handleSubmit(onSubmit),
  }
}
