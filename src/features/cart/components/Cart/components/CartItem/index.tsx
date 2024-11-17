import { useState } from 'react'
import { Svg } from '@/assets'
import { Select, SvgComponent } from '@/components/ui'

export interface CartItemProps {
  img: string
  title: string
  quantity: number
  price: string
}

const CartItem = ({ img, price, quantity, title }: CartItemProps) => {
  const [selectedQuantity, setSelectedQuantity] = useState({ label: 1, value: 1 })
  const options = Array.from({ length: quantity }, (_, i) => ({
    label: i + 1,
    value: i + 1,
  }))
  return (
    <div
      className="flex items-center justify-between flex-wrap w-full border-b border-b-gray-300
     pb-4 last:border-none gap-4 "
    >
      <div className="flex items-center gap-4 flex-[1_1_250px]">
        <img width={120} height={120} src={img} alt={title} className="rounded-lg" />

        <span className="font-semibold text-xl">{title}</span>
      </div>
      <div className="flex items-center justify-between flex-[2_1_250px]">
        <Select
          className="!w-24 justify-start"
          label="تعداد"
          value={selectedQuantity}
          onChange={(value) => {
            setSelectedQuantity(value)
          }}
          options={options}
        />
        <span className="text-lg  text-custom-slate font-semibold">{price + ' ' + 'ریال'}</span>
        <SvgComponent src={Svg.Trash_Icon} className="Cart_Remove_Icon" />
      </div>
    </div>
  )
}

export { CartItem }
