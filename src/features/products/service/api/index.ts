import { http } from '@/lib/http';
import { ICreateProductData, IUpdateProductData } from '../interface';

const getProducts = async () => {
  const response = await http.get('products');
  return response.data;
};

const getProduct = async (id: string) => {
  const response = await http.get(`products/${id}`);
  return response.data;
};

const createProduct = async (data: ICreateProductData) => {
  const response = await http.post('products/create', data);
  return response.data;
};

const updateProduct = async (data: IUpdateProductData) => {
  const response = await http.put('products/update', data);
  return response.data;
};

const deleteProduct = async (id: string) => {
  const response = await http.delete(`products/${id}/delete`);
  return response.data;
};

export { getProducts, getProduct, createProduct, updateProduct, deleteProduct };
