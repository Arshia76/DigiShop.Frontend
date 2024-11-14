import { Modal, Input, Button, Select, Textarea } from '@/components'
import { useProductModal } from './useProductModal'
import { IModal } from '@/lib/interface'
import { Dispatch, SetStateAction } from 'react'

export interface ProductModalProps {
  productModal: IModal
  setProductModal: Dispatch<SetStateAction<IModal>>
}

const ProductModal = ({ productModal, setProductModal }: ProductModalProps) => {
  const { control, errors, handleSubmit, isLoading } = useProductModal({ productModal, setProductModal })
  return (
    <Modal width="max-w-2xl" isOpen={productModal.isOpen}>
      <Modal.Header>
        <span>محصول</span>
        <span
          style={{ cursor: 'pointer' }}
          onClick={() =>
            setProductModal({
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
        <div className="flex flex-wrap *:flex-[1_1_250px] gap-4 p-4">
          <Input label="نام محصول" control={control} error={errors.title?.message} name="title" />
          <Input label="قیمت محصول" control={control} error={errors.price?.message} name="price" />
          <Select label="دسته بندی محصول" control={control} error={errors.category?.message} name="category" />
          <Input label="نام محصول" control={control} error={errors.image?.message} name="image" />
          <Textarea label="توضیحات محصول" control={control} error={errors.description?.message} name="description" rows={5} />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button colour="primary" className="w-20 me-2" loaderOnly loading={isLoading} onClick={handleSubmit}>
          اعمال
        </Button>
        <Button
          colour="secondary"
          className="w-20"
          onClick={() =>
            setProductModal({
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
