export interface ICreateOrderData {
  address: {
    province: string
    city: string
    postalCode: string
    detail: string
  }
  totalAmount: string
}

export interface IOrderResult {
  _id: string
  address: {
    province: string
    city: string
    postalCode: string
    detail: string
  }
  userId: string
  createdAt: string
  updatedAt: string
  totalAmount: string
}
