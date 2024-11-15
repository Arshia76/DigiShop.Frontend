import { useMutation, useQuery } from 'react-query';
import { createUser, deleteUser, getUser, getUsers, updateUser } from '../api';
import { IQueryParams } from '@/lib/interface';

export function useGetUsersQuery({ onSuccess, onError }: IQueryParams) {
  return useQuery({
    queryFn: getUsers,
    queryKey: 'users',
    onSuccess,
    onError,
  });
}

export function useGetUserQuery({ data, onSuccess, onError }: IQueryParams) {
  return useQuery({
    queryFn: () => getUser(data),
    queryKey: ['user', data],
    onSuccess,
    onError,
  });
}

export function useCreateUserMutation() {
  return useMutation({
    mutationFn: createUser,
  });
}

export function useUpdateUserMutation() {
  return useMutation({
    mutationFn: updateUser,
  });
}

export function useDeleteUserMutation() {
  return useMutation({
    mutationFn: deleteUser,
  });
}
