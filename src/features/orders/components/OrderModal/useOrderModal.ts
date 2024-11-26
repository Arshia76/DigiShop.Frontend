import { useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { CreateOrderSchema, CreateOrderType } from '../../schema'
import { OrderModalProps } from '.'
import { useCreateOrderMutation } from '../../service/query'
import { useCartContext } from '@/features/cart/components/Cart/context'
import { Alert } from '@/components/ui'

export function useOrderModal({ orderModal, setOrderModal }: OrderModalProps) {
  const { isOpen, type } = orderModal
  const { cartItems, clearCart } = useCartContext()
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CreateOrderType>({
    resolver: zodResolver(CreateOrderSchema),
  })

  const { mutate: createOrder, isLoading } = useCreateOrderMutation()

  const onSubmit: SubmitHandler<CreateOrderType> = (values) => {
    createOrder(
      {
        address: {
          ...values,
        },
        totalAmount: cartItems
          .reduce((total, current) => {
            return (total += current.price * current.selectedQuantity)
          }, 0)
          .toString(),
      },
      {
        onSuccess() {
          setOrderModal({
            isOpen: false,
            data: null,
            type,
          })
          clearCart()
        },
        onError(error) {
          Alert({ type: 'error', message: error.message })
        },
      }
    )
  }

  useEffect(() => {
    setValue('province', '')
    setValue('city', '')
    setValue('postalCode', '')
    setValue('detail', '')
  }, [isOpen, type, setValue])

  return {
    control,
    errors,
    isLoading,
    handleSubmit: handleSubmit(onSubmit),
  }
}
