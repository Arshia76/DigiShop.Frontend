import { useMutation, useQuery } from 'react-query';
import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from '../api';
import { IQueryParams } from '@/lib/interface';

export function useGetCategoriesQuery({ onSuccess, onError }: IQueryParams) {
  return useQuery({
    queryFn: getCategories,
    queryKey: 'categories',
    onSuccess,
    onError,
  });
}

export function useCreateCategoryMutation() {
  return useMutation({
    mutationFn: createCategory,
  });
}

export function useUpdateCategoryMutation() {
  return useMutation({
    mutationFn: updateCategory,
  });
}

export function useDeleteCategoryMutation() {
  return useMutation({
    mutationFn: deleteCategory,
  });
}
