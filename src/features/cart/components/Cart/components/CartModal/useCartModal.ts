import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { CreateCartOrderSchema, CreateCartOrderType } from '../../schema'
import { CartModalProps } from '.'

export function useCartModal({ cartModal, setCartModal }: CartModalProps) {
  const { isOpen } = cartModal

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<CreateCartOrderType>({
    resolver: zodResolver(CreateCartOrderSchema),
  })

  const onSubmit: SubmitHandler<CreateCartOrderType> = (values) => {
    //   updateProduct(
    //     { id: data.id, ...values },
    //     {
    //       onSuccess() {
    //         queryClient.invalidateQueries('products')
    //         setCartModal({
    //           isOpen: false,
    //           data: null,
    //           type,
    //         })
    //       },
    //       onError(error: any) {
    //         setError('root', { message: error.response.data?.message })
    //       },
    //     }
    //   )
  }

  return {
    control,
    errors,
    // isLoading,
    handleSubmit: handleSubmit(onSubmit),
  }
}
