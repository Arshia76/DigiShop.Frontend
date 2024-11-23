import { useMutation, useQuery } from 'react-query'
import { changeUserPassword, createUser, deleteUser, getUser, getUsers, updateUser } from '../api'
import { IErrorResult, IQueryParams } from '@/lib/interface'
import { IChangeUserPassword, ICreateUserData, IUpdateUserData, IUserResult } from '../interface'

export function useGetUsersQuery({ onSuccess, onError }: IQueryParams<IUserResult[]>) {
  return useQuery({
    queryFn: getUsers,
    queryKey: 'users',
    onSuccess,
    onError,
  })
}

export function useGetUserQuery(id: string, { onSuccess, onError }: IQueryParams<IUserResult>) {
  return useQuery({
    queryFn: () => getUser(id),
    queryKey: ['user', id],
    onSuccess,
    onError,
  })
}

export function useCreateUserMutation() {
  return useMutation<IUserResult, IErrorResult, ICreateUserData>({
    mutationFn: createUser,
  })
}

export function useUpdateUserMutation() {
  return useMutation<IUserResult, IErrorResult, IUpdateUserData>({
    mutationFn: updateUser,
  })
}

export function useChangeUserPasswordMutation() {
  return useMutation<IUserResult, IErrorResult, IChangeUserPassword>({
    mutationFn: changeUserPassword,
  })
}

export function useDeleteUserMutation() {
  return useMutation<IUserResult, IErrorResult, string>({
    mutationFn: deleteUser,
  })
}
