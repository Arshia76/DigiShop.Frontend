import { Button, Table } from '@/components'
import { useProductTable } from './useProductTable'
import { ProductModal } from '../ProductModal'

const ProductTable = () => {
  const { actions, colDefs, gridRef, isFetching, productModal, setProductModal } = useProductTable()
  return (
    <div className="h-[90%]">
      <Button
        colour="primary"
        className="mb-4 ms-auto px-4 "
        onClick={() =>
          setProductModal({
            isOpen: true,
            type: 'add',
            data: null,
          })
        }
      >
        افزودن محصول جدید
      </Button>
      <Table parentRef={gridRef} isLoading={isFetching} columnDefs={colDefs} actions={actions} />
      <ProductModal productModal={productModal} setProductModal={setProductModal} />
    </div>
  )
}

export { ProductTable }
