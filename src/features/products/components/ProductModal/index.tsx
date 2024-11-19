import { Modal, Input, Button, Select, Textarea } from '@/components/ui'
import { useProductModal } from './useProductModal'
import { IModal } from '@/lib/interface'
import { Dispatch, SetStateAction } from 'react'
import { ProductImage } from '../ProductImage'
import { useProductImage } from '../ProductImage/useProductImage'

export interface ProductModalProps {
  productModal: IModal
  setProductModal: Dispatch<SetStateAction<IModal>>
}

const ProductModal = ({ productModal, setProductModal }: ProductModalProps) => {
  const { control, errors, handleSubmit, isLoading, categories } = useProductModal({
    productModal,
    setProductModal,
  })

  const options = categories?.map((category) => ({ label: category.title, value: category._id }))

  const { openFilePicker, plainFiles, clear } = useProductImage()
  return (
    <Modal width="max-w-2xl" isOpen={productModal.isOpen}>
      <Modal.Header>
        <span>محصول</span>
        <span
          style={{ cursor: 'pointer' }}
          onClick={() => {
            setProductModal({
              data: null,
              isOpen: false,
              type: 'add',
            })
            clear()
          }}
        >
          بستن
        </span>
      </Modal.Header>
      <Modal.Body>
        <div className="flex flex-wrap *:flex-[1_1_250px] gap-2 p-4">
          <Input label="عنوان" control={control} error={errors.title?.message} name="title" />
          <Input label="قیمت" type="number" control={control} inputMode="numeric" error={errors.price?.message} name="price" />
          <Select label="دسته بندی" options={options} control={control} error={errors.category?.message} name="category" />
          <Input label="تعداد" type="number" control={control} inputMode="numeric" error={errors.quantity?.message} name="quantity" />
          <Textarea
            mainContainerClassName="!flex-none !w-full"
            label="توضیحات"
            control={control}
            error={errors.description?.message}
            name="description"
            rows={5}
          />
          <ProductImage files={plainFiles} openFilePicker={() => openFilePicker()} />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button colour="primary" className="w-20 me-2" loaderOnly loading={isLoading} onClick={handleSubmit}>
          اعمال
        </Button>
        <Button
          colour="secondary"
          className="w-20"
          onClick={() => {
            setProductModal({
              data: null,
              isOpen: false,
              type: 'add',
            })
            clear()
          }}
        >
          بازگشت
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export { ProductModal }
