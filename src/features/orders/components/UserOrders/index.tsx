import { Table } from '@/components/ui'
import { useUserOrders } from './useUserOrders'

const UserOrders = () => {
  const { colDefs, gridRef, actions, isFetching } = useUserOrders()
  return (
    <div className="p-4 h-full">
      <Table columnDefs={colDefs} parentRef={gridRef} actions={actions} isLoading={isFetching} />
    </div>
  )
}

export { UserOrders }
