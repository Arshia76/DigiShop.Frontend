export interface ICreateOrderData {
  address: {
    province: string
    city: string
    postalCode: string
    detail: string
  }
  products: {
    productId: string
    selectedQuantity: number
  }[]
}

export interface IOrderResult {
  _id: string
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
  userId: string
  createdAt: string
  updatedAt: string
  totalAmount: number
}
