import { Table } from '@/components/ui'
import { useUsersOrders } from './useUserOrders'

const UserOrders = () => {
  const { colDefs, gridRef } = useUsersOrders()
  return (
    <div className="p-4">
      <Table columnDefs={colDefs} parentRef={gridRef} isLoading={false} />
    </div>
  )
}

export { UserOrders }
