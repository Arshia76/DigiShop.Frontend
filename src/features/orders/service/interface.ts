export interface ICreateOrderData {
  address: {
    province: string
    city: string
    postalCode: string
    detail: string
  }
  userId: string
  date: string
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
  date: string
  totalAmount: string
}
