import { http } from '@/lib/http'
import { ICreateCategoryData, IUpdateCategoryData } from '../interface'

const getCategories = async () => {
  const response = await http.get('categories')
  return response.data
}

const createCategory = async (data: ICreateCategoryData) => {
  const response = await http.post('categories/create', data)
  return response.data
}

const updateCategory = async (data: IUpdateCategoryData) => {
  const response = await http.patch('categories/update', data)
  return response.data
}

const deleteCategory = async (id: string) => {
  const response = await http.delete(`categories/${id}/delete`)
  return response.data
}

export { getCategories, createCategory, updateCategory, deleteCategory }
