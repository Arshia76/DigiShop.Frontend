import { Routes } from '@/lib/routes'
import { useGetOrderQuery } from '../../service/query'
import { useParams, useNavigate } from 'react-router-dom'

export function useOrderDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data: order, isFetching } = useGetOrderQuery(id as string, {
    onSuccess() {},
    onError() {
      navigate(Routes.HOME)
    },
  })

  return { order, isFetching }
}
