import { useMutation, useQuery } from 'react-query'
import { createCategory, deleteCategory, getCategories, updateCategory } from '../api'
import { IErrorResult, IQueryParams } from '@/lib/interface'
import { ICategoryResult, ICreateCategoryData, IUpdateCategoryData } from '../interface'

export function useGetCategoriesQuery({ onSuccess, onError }: IQueryParams<ICategoryResult[]>) {
  return useQuery({
    queryFn: getCategories,
    queryKey: 'categories',
    onSuccess,
    onError,
  })
}

export function useCreateCategoryMutation() {
  return useMutation<ICategoryResult, IErrorResult, ICreateCategoryData>({
    mutationFn: createCategory,
  })
}

export function useUpdateCategoryMutation() {
  return useMutation<ICategoryResult, IErrorResult, IUpdateCategoryData>({
    mutationFn: updateCategory,
  })
}

export function useDeleteCategoryMutation() {
  return useMutation<ICategoryResult, IErrorResult, string>({
    mutationFn: deleteCategory,
  })
}
