import { http } from '@/lib/http'
import { ISigninData, ISignupData } from '../interface'

const signup = async (data: ISignupData) => {
  const response = await http.post('auth/signup', data)
  return response.data
}

const signin = async (data: ISigninData) => {
  const response = await http.post('auth/signin', data)
  return response.data
}

export { signin, signup }
