import { useMutation } from 'react-query'
import { signin, signup } from '../api'

export function useSigninMutation() {
  return useMutation({
    mutationFn: signin,
  })
}

export function useSignupMutation() {
  return useMutation({
    mutationFn: signup,
  })
}
