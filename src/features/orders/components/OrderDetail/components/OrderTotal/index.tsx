export interface OrderTotalProps {
  totalAmount: number
}

const OrderTotal = ({ totalAmount }: OrderTotalProps) => {
  return (
    <div className='flex flex-col rounded-lg shadow-md border border-gray-300 p-4 gap-4 h-fit max-w-xs'>
      <div className='flex items-center justify-between'>
        <span>مبلغ کل</span>
        <span>{totalAmount.toLocaleString()} ریال</span>
      </div>
      <div className='flex items-center justify-between'>
        <span>هزینه ارسال</span>
        <span>{'50,000'} ریال</span>
      </div>
      <div className='flex items-center justify-between'>
        <span>تخفیف</span>
        <span>0 ریال</span>
      </div>
      <div className='flex items-center justify-between'>
        <span>پرداختی نهایی</span>
        <span>{Number(totalAmount + 50000).toLocaleString()} ریال</span>
      </div>
    </div>
  )
}

export { OrderTotal }
