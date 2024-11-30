import { useState } from 'react'
import { Button } from '@/components/ui'
import { useCartContext } from '../../../../context'
import { OrderModal } from '@/features/orders/components'
import { IModal } from '@/lib/interface'
import { useAuthContext } from '@/features/auth/context'
import { useNavigate } from 'react-router-dom'
import { Routes } from '@/lib/routes'

const CartTotal = () => {
  const { cartItems } = useCartContext()
  const { isAuthenticated } = useAuthContext()
  const navigate = useNavigate()

  const totalPrice = cartItems.reduce((total, current) => {
    return (total += current.price * current.selectedQuantity)
  }, 0)

  const payable = totalPrice ? totalPrice + 50000 : 0

  const [orderModal, setOrderModal] = useState<IModal>({
    data: null,
    isOpen: false,
    type: 'add',
  })

  return (
    <div className="flex flex-col rounded-lg border shadow-md border-gray-300 p-4 gap-4 h-fit max-w-xs">
      <div className="flex items-center justify-between">
        <span>مبلغ کل</span>
        <span>{totalPrice.toLocaleString()} ریال</span>
      </div>
      <div className="flex items-center justify-between">
        <span>هزینه ارسال</span>
        <span>{totalPrice > 0 ? '50,000' : '0'} ریال</span>
      </div>
      <div className="flex items-center justify-between">
        <span>تخفیف</span>
        <span>0 ریال</span>
      </div>
      <div className="flex items-center justify-between">
        <span>پرداختی نهایی</span>
        <span>{payable.toLocaleString()} ریال</span>
      </div>
      <Button
        colour={'primary'}
        className="w-full"
        disabled={totalPrice === 0}
        onClick={() => {
          if (isAuthenticated) {
            setOrderModal({
              isOpen: true,
              type: 'add',
              data: null,
            })
          } else {
            navigate(Routes.SIGNIN)
          }
        }}
      >
        پرداخت
      </Button>
      <Button colour={'secondary'} className="w-full" onClick={() => navigate(Routes.SHOP)}>
        ادامه خرید
      </Button>
      <OrderModal orderModal={orderModal} setOrderModal={setOrderModal} />
    </div>
  )
}

export { CartTotal }
