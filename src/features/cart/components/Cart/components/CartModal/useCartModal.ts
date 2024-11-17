import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { CartSchema, CartType } from '../../schema'
import { CartModalProps } from '.'

export function useCartModal({ cartModal, setCartModal }: CartModalProps) {
  const { data } = cartModal

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<CartType>({
    resolver: zodResolver(CartSchema),
  })

  const onSubmit: SubmitHandler<CartType> = (values) => {
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
