import { Table } from '@/components/ui'
import { useUserOrders } from './useUserOrders'

const UserOrders = () => {
  const { colDefs, gridRef } = useUserOrders()
  return (
    <div className='p-4 h-full'>
      <Table columnDefs={colDefs} parentRef={gridRef} isLoading={false} />
    </div>
  )
}

export { UserOrders }
