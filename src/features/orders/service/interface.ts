export interface ICreateOrder {
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
