export interface IProductQuery {
  sort?: string
  query?: string | null
  category?: string
}

export interface IProductResult {
  _id: string
  title: string
  createdAt: string
  updatedAt: string
  price: string
  quantity: string
  description: string
  image: string
  category: {
    _id: string
    title: string
  }
}
