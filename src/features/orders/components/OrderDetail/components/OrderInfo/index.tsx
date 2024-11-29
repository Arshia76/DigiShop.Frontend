export interface OrderInfoProps {
  address: {
    province: string
    city: string
    postalCode: string
    detail: string
  }

  products: {
    productId: string
    title: string
    price: number
    quantity: number
  }[]
}

const OrderInfo = ({ address, products }: OrderInfoProps) => {
  if (address && products)
    return (
      <section className='flex flex-col gap-2'>
        <div className='flex flex-col items-start shadow-md gap-2 rounded-lg border border-gray-300 p-4'>
          <h5 className='font-semibold text-xl'>آدرس</h5>
          <div className='flex gap-2'>
            <h6 className='text-lg'>استان :</h6>
            <span className='text-lg'>{address.province}</span>
          </div>
          <div className='flex gap-2'>
            <h6 className='text-lg'>شهر :</h6>
            <span className='text-lg'>{address.city}</span>
          </div>
          <div className='flex gap-2'>
            <h6 className='text-lg'>کد پستی :</h6>
            <span className='text-lg'>{address.province}</span>
          </div>
          <div className='flex gap-2'>
            <h6 className='text-lg'>آدرس :</h6>
            <span className='text-lg'>{address.detail}</span>
          </div>
        </div>
        <div className='rounded-lg border shadow-md border-gray-300 p-4'>
          <h5 className='text-xl font-semibold mb-2'>محصولات</h5>
          <table className='w-full'>
            <thead>
              <tr className='*:border *:border-gray-300 *:p-1'>
                <th>شناسه</th>
                <th>نام</th>
                <th>تعداد</th>
                <th>مبلغ</th>
              </tr>
            </thead>
            {products.map((product) => (
              <tbody>
                <tr className='*:border *:border-gray-300 *:text-center *:p-1'>
                  <td>{product.productId}</td>
                  <td>{product.title}</td>
                  <td>{product.quantity}</td>
                  <td>{product.price.toLocaleString() + ' ' + 'ریال'}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </section>
    )
}

export { OrderInfo }
