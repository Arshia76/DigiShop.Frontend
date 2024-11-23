import { useMutation, useQuery } from 'react-query'
import { createOrder, getOrders, getUserOrders } from '../api'
import { IErrorResult, IQueryParams } from '@/lib/interface'
import { ICreateOrderData, IOrderResult } from '../interface'

export function useGetOrdersQuery({ onSuccess, onError }: IQueryParams<IOrderResult[]>) {
  return useQuery({
    queryFn: getOrders,
    queryKey: 'orders',
    onSuccess,
    onError,
  })
}

export function useGetUserOrdersQuery({ onSuccess, onError }: IQueryParams<IOrderResult[]>) {
  return useQuery({
    queryFn: getUserOrders,
    queryKey: 'user',
    onSuccess,
    onError,
  })
}

export function useCreateOrderMutation() {
  return useMutation<IOrderResult, IErrorResult, ICreateOrderData>({
    mutationFn: createOrder,
  })
}