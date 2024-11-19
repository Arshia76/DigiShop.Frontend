import { http } from '@/lib/http'
import { ISigninData, ISignupData } from '../interface'

const signup = async (data: ISignupData) => {
  const response = await http.post('auth/localSignup', data)
  return response.data
}

const signin = async (data: ISigninData) => {
  const response = await http.post('auth/localSignin', data)
  return response.data
}

export { signin, signup }
