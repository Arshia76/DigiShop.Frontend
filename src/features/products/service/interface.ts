export interface ICreateProductData {
  title: string
  price: string
  description: string
  category: string
  image: string
}

export interface IUpdateDoctorData extends Partial<ICreateProductData> {
  id: string
}
