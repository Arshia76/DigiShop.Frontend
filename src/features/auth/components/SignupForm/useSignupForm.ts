import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { SignupSchema, SignupType } from '../../schema'
import { useAuth } from '../../context'

export function useSignupForm() {
  const { signup, isLoadingSignup } = useAuth()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupType>({
    resolver: zodResolver(SignupSchema),
  })

  const onSubmit: SubmitHandler<SignupType> = (values) => {
    signup(values)
  }

  return {
    control,
    errors,
    isLoading: isLoadingSignup,
    handleSubmit: handleSubmit(onSubmit),
  }
}
