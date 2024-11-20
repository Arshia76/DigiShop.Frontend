import { http } from '@/lib/http'

const getProducts = async () => {
  const response = await http.get('products')
  return response.data
}

const getProduct = async (id: string) => {
  const response = await http.get(`products/${id}`)
  return response.data
}

const createProduct = async (data: FormData) => {
  const response = await http.post('products/create', data, {
    headers: {
      accept: 'application/json',
      'Accept-Language': 'en-US,en;q=0.8',
      'Content-Type': 'multipart/form-data',
    },
  })
  return response.data
}

const updateProduct = async (data: FormData) => {
  const response = await http.patch('products/update', data, {
    headers: {
      accept: 'application/json',
      'Accept-Language': 'en-US,en;q=0.8',
      'Content-Type': 'multipart/form-data',
    },
  })
  return response.data
}

const deleteProduct = async (id: string) => {
  const response = await http.delete(`products/${id}/delete`)
  return response.data
}

export { getProducts, getProduct, createProduct, updateProduct, deleteProduct }
