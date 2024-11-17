import { Button } from '@/components/ui'

const CartTotal = () => {
  return (
    <div className="flex flex-col rounded-lg border border-gray-300 p-4 gap-4 h-fit max-w-xs">
      <div className="flex items-center justify-between">
        <span>مبلغ کل</span>
        <span>15,500,000 ریال</span>
      </div>
      <div className="flex items-center justify-between">
        <span>هزینه ارسال</span>
        <span>50,500 ریال</span>
      </div>
      <div className="flex items-center justify-between">
        <span>تخفیف</span>
        <span>0 ریال</span>
      </div>
      <div className="flex items-center justify-between">
        <span>پرداختی نهایی</span>
        <span>15,550,500 ریال</span>
      </div>
      <Button colour={'primary'} className="w-full">
        پرداخت
      </Button>
    </div>
  )
}

export { CartTotal }
