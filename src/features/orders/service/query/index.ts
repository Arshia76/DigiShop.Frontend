import { useMutation, useQuery } from 'react-query'
import { createOrder, getOrders, getUserOrders } from '../api'
import { IQueryParams } from '@/lib/interface'

export function useGetOrdersQuery({ onSuccess, onError }: IQueryParams) {
  return useQuery({
    queryFn: getOrders,
    queryKey: 'orders',
    onSuccess,
    onError,
  })
}

export function useGetUserOrdersQuery({ onSuccess, onError }: IQueryParams) {
  return useQuery({
    queryFn: getUserOrders,
    queryKey: 'user',
    onSuccess,
    onError,
  })
}

export function useCreateOrderMutation() {
  return useMutation({
    mutationFn: createOrder,
  })
}
