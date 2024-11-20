import { Button, SvgComponent, Table } from '@/components/ui'
import { useProductTable } from './useProductTable'
import { ProductModal } from '../ProductModal'
import { Svg } from '@/assets'
import { DeleteModal } from '@/components/shared'

const ProductTable = () => {
  const { actions, colDefs, gridRef, isFetching, productModal, setProductModal, deleteModalState } = useProductTable()
  return (
    <div className="h-[90%]">
      <div className="flex items-center justify-between">
        <h4 className="text-custom-black text-3xl font-bold">محصولات</h4>
        <Button
          colour="primary"
          icon={<SvgComponent src={Svg.Plus_Icon} className="Add_Btn_Icon" />}
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
      </div>
      <Table parentRef={gridRef} isLoading={isFetching} columnDefs={colDefs} actions={actions} />
      <ProductModal productModal={productModal} setProductModal={setProductModal} />
      <DeleteModal {...deleteModalState} />
    </div>
  )
}

export { ProductTable }
