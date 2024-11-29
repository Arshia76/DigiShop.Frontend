import { GridLoader } from '@/components/ui/Table/components'
import { OrderInfo, OrderTotal } from './components'
import { useOrderDetail } from './useOrderDetail'

const OrderDetail = () => {
  const { order, isFetching } = useOrderDetail()

  if (isFetching) return <GridLoader />

  return (
    <section
      className='p-4 flex flex-wrap *:flex-[1_1_650px] gap-6 w-full lg:h-[calc(100vh-72px)]
overflow-hidden'
    >
      <OrderInfo address={order!.address} products={order!.products} />
      <OrderTotal totalAmount={Number(order?.totalAmount)} />
    </section>
  )
}

export { OrderDetail }
