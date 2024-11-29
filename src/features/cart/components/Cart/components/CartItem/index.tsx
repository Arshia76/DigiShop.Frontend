import { useState } from 'react'
import { Svg } from '@/assets'
import { Select, SvgComponent } from '@/components/ui'
import { useCartContext } from '../../../../context'

export interface CartItemProps {
  id: string
  img: string
  title: string
  quantity: number
  selectedQuantity: number
  price: number
}

const CartItem = ({
  id,
  img,
  price,
  quantity,
  title,
  selectedQuantity,
}: CartItemProps) => {
  const [itemQuantity, setItemQuantity] = useState({
    label: selectedQuantity,
    value: selectedQuantity,
  })
  const options = Array.from({ length: quantity }, (_, i) => ({
    label: i + 1,
    value: i + 1,
  }))

  const { changeItemQuantity, removeFromCart } = useCartContext()

  return (
    <div
      className='flex items-center justify-between flex-wrap w-full border-b border-b-gray-300
     pb-4 last:border-none gap-4 '
    >
      <div className='flex items-center gap-4 flex-[1_1_250px]'>
        <img
          width={120}
          height={120}
          src={`${window.STATIC_URL?.imagePath}${img?.replaceAll('\\', '/')}`}
          alt={title}
          className='rounded-lg'
        />

        <span className='font-semibold text-xl'>{title}</span>
      </div>
      <div className='flex items-center justify-between flex-[2_1_250px]'>
        <Select
          className='!w-24 justify-start'
          label='تعداد'
          value={itemQuantity}
          onChange={(value) => {
            setItemQuantity(value)
            changeItemQuantity(id, value.value)
          }}
          options={options}
        />
        <span className='text-lg  text-custom-slate font-semibold'>
          {price.toLocaleString() + ' ' + 'ریال'}
        </span>
        <div onClick={() => removeFromCart(id)}>
          <SvgComponent src={Svg.Trash_Icon} className='Cart_Remove_Icon' />
        </div>
      </div>
    </div>
  )
}

export { CartItem }
