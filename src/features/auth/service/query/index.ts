import { useMutation } from 'react-query'
import { signin, signup } from '../api'
import { IAuthResult, ISigninData, ISignupData } from '../interface'
import { IErrorResult } from '@/lib/interface'

export function useSigninMutation() {
  return useMutation<IAuthResult, IErrorResult, ISigninData>({
    mutationFn: signin,
  })
}

export function useSignupMutation() {
  return useMutation<IAuthResult, IErrorResult, ISignupData>({
    mutationFn: signup,
  })
}
