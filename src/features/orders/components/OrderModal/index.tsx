import { Modal, Input, Button, Textarea } from '@/components/ui'
import { useOrderModal } from './useOrderModal'
import { IModal } from '@/lib/interface'
import { Dispatch, SetStateAction } from 'react'

export interface OrderModalProps {
  orderModal: IModal
  setOrderModal: Dispatch<SetStateAction<IModal>>
}

const OrderModal = ({ orderModal, setOrderModal }: OrderModalProps) => {
  const { control, errors, handleSubmit } = useOrderModal({
    orderModal,
    setOrderModal,
  })
  return (
    <Modal width='max-w-2xl' isOpen={orderModal.isOpen}>
      <Modal.Header>
        <span>ثبت سفارش</span>
        <span
          style={{ cursor: 'pointer' }}
          onClick={() =>
            setOrderModal({
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
        <div className='flex flex-col gap-2 p-4'>
          <Input
            label='استان'
            control={control}
            error={errors.province?.message}
            name='province'
          />
          <Input
            label='شهر'
            control={control}
            error={errors.city?.message}
            name='city'
          />
          <Input
            label='کد پستی'
            control={control}
            error={errors.postalCode?.message}
            name='postalCode'
          />
          <Textarea
            label='آدرس'
            control={control}
            error={errors.detail?.message}
            name='detail'
            rows={5}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          colour='primary'
          className='w-24 me-2'
          loaderOnly
          onClick={handleSubmit}
        >
          ثبت سفارش
        </Button>
        <Button
          colour='secondary'
          className='w-20'
          onClick={() =>
            setOrderModal({
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

export { OrderModal }
