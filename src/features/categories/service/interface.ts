export interface ICreateCategoryData {
  title: string;
}

export interface IUpdateCategoryData extends Partial<ICreateCategoryData> {
  id: string;
}
