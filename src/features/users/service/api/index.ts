import { http } from '@/lib/http';
import { ICreateUserData, IUpdateUserData } from '../interface';

const getUsers = async () => {
  const response = await http.get('users');
  return response.data;
};

const getUser = async (id: string) => {
  const response = await http.get(`user/${id}`);
  return response.data;
};

const createUser = async (data: ICreateUserData) => {
  const response = await http.post('users/create', data);
  return response.data;
};

const updateUser = async (data: IUpdateUserData) => {
  const response = await http.put('users/update', data);
  return response.data;
};

const deleteUser = async (id: string) => {
  const response = await http.delete(`users/${id}/delete`);
  return response.data;
};

export { getUser, getUsers, createUser, updateUser, deleteUser };
