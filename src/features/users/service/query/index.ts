import { useMutation, useQuery } from 'react-query'
import {
  changeUserPassword,
  createUser,
  deleteUser,
  getUser,
  getUserOrders,
  getUsers,
  updateUser,
} from '../api'
import { IQueryParams } from '@/lib/interface'

export function useGetUsersQuery({ onSuccess, onError }: IQueryParams) {
  return useQuery({
    queryFn: getUsers,
    queryKey: 'users',
    onSuccess,
    onError,
  })
}

export function useGetUserQuery(
  id: string,
  { onSuccess, onError }: IQueryParams
) {
  return useQuery({
    queryFn: () => getUser(id),
    queryKey: ['user', id],
    onSuccess,
    onError,
  })
}

export function useCreateUserMutation() {
  return useMutation({
    mutationFn: createUser,
  })
}

export function useUpdateUserMutation() {
  return useMutation({
    mutationFn: updateUser,
  })
}

export function useChangeUserPasswordMutation() {
  return useMutation({
    mutationFn: changeUserPassword,
  })
}

export function useDeleteUserMutation() {
  return useMutation({
    mutationFn: deleteUser,
  })
}
