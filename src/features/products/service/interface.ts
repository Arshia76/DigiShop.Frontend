export interface ICreateProductData {
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
}

export interface IUpdateProductData extends Partial<ICreateProductData> {
  id: string;
}
