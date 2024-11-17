import { Modal, Input, Button, Textarea } from '@/components/ui'
import { useCartModal } from './useCartModal'
import { IModal } from '@/lib/interface'
import { Dispatch, SetStateAction } from 'react'

export interface CartModalProps {
  cartModal: IModal
  setCartModal: Dispatch<SetStateAction<IModal>>
}

const ProductModal = ({ cartModal, setCartModal }: CartModalProps) => {
  const { control, errors, handleSubmit } = useCartModal({ cartModal, setCartModal })
  return (
    <Modal width="max-w-2xl" isOpen={cartModal.isOpen}>
      <Modal.Header>
        <span>سبد خرید</span>
        <span
          style={{ cursor: 'pointer' }}
          onClick={() =>
            setCartModal({
              data: null,
              isOpen: false,
              type: 'add',
            })
          }
        >
          بستن
        </span>
      </Modal.Header>
      <Modal.Body>
        <div className="flex flex-wrap *:flex-[1_1_250px] gap-2 p-4">
          <Input label="استان" control={control} error={errors.province?.message} name="province" />
          <Input label="شهر" control={control} error={errors.city?.message} name="city" />
          <Input label="کد پستی" control={control} error={errors.postalCode?.message} name="postalCode" />
          <Textarea label="آدرس" control={control} error={errors.address?.message} name="address" rows={5} />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button colour="primary" className="w-20 me-2" loaderOnly onClick={handleSubmit}>
          ثبت سفارش
        </Button>
        <Button
          colour="secondary"
          className="w-20"
          onClick={() =>
            setCartModal({
              data: null,
              isOpen: false,
              type: 'add',
            })
          }
        >
          بازگشت
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export { ProductModal }
