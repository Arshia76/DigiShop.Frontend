import { Button, SvgComponent, Table } from '@/components/ui'
import { useCategoryTable } from './useCategoryTable'
import { CategoryModal } from '../CategoryModal'
import { Svg } from '@/assets'
import { DeleteModal } from '@/components/shared'

const CategoryTable = () => {
  const { actions, colDefs, gridRef, isFetching, categoryModal, deleteModalState, setCategoryModal } = useCategoryTable()
  return (
    <div className="h-[90%]">
      <div className="flex items-center justify-between">
        <h4 className="text-custom-black text-3xl font-bold">دسته بندی ها</h4>
        <Button
          colour="primary"
          icon={<SvgComponent src={Svg.Plus_Icon} className="Add_Btn_Icon" />}
          className="mb-4 ms-auto px-4 "
          onClick={() =>
            setCategoryModal({
              isOpen: true,
              type: 'add',
              data: null,
            })
          }
        >
          افزودن دسته بندی جدید
        </Button>
      </div>
      <Table parentRef={gridRef} isLoading={isFetching} columnDefs={colDefs} actions={actions} />
      <CategoryModal categoryModal={categoryModal} setCategoryModal={setCategoryModal} />
      <DeleteModal {...deleteModalState} />
    </div>
  )
}

export { CategoryTable }
