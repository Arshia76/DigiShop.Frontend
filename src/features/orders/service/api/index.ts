import { http } from '@/lib/http'
import { ICreateOrderData } from '../interface'

const getOrders = async () => {
  const response = await http.get('orders')
  return response.data
}

const getOrder = async (id: string) => {
  const response = await http.get(`orders/${id}`)
  return response.data
}

const getUserOrders = async () => {
  const response = await http.get('orders/current/user')
  return response.data
}

const createOrder = async (data: ICreateOrderData) => {
  const response = await http.post('orders/create', data)
  return response.data
}

export { getOrders, getOrder, getUserOrders, createOrder }
