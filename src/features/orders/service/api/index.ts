import { http } from '@/lib/http'
import { ICreateOrderData } from '../interface'

const getOrders = async () => {
  const response = await http.get('orders')
  return response.data
}

const getUserOrders = async () => {
  const response = await http.get('orders/currentUser')
  return response.data
}

const createOrder = async (data: ICreateOrderData) => {
  const response = await http.post('orders/create', data)
  return response.data
}

export { getOrders, getUserOrders, createOrder }