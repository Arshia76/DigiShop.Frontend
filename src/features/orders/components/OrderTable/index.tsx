import { Table } from '@/components/ui'
import { useOrderTable } from './useOrderTable'

const OrderTable = () => {
  const { colDefs, gridRef, actions, isFetching } = useOrderTable()
  return (
    <div className="h-[90%]">
      <div className="flex items-center justify-between">
        <h4 className="text-custom-black text-3xl font-bold mb-2">سفارشات</h4>
      </div>
      <Table parentRef={gridRef} isLoading={isFetching} columnDefs={colDefs} actions={actions} />
    </div>
  )
}

export { OrderTable }
