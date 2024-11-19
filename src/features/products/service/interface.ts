export interface ICreateProductData {
  title: string
  price: number
  description: string
  category: string
  quantity: number
  image: string
}

export interface IUpdateProductData extends Partial<ICreateProductData> {
  id: string
}
