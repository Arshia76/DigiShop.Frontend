import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { SignupSchema, SignupType } from '../../schema'
import { useSignupMutation } from '../../service/query'

export function useSignupForm() {
  const { mutate: signup, isLoading } = useSignupMutation()

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignupType>({
    resolver: zodResolver(SignupSchema),
  })

  const onSubmit: SubmitHandler<SignupType> = (values) => {
    signup(values, {
      onSuccess() {},
      onError(error: any) {
        setError('root', { message: error.response.data?.message })
      },
    })
  }

  return {
    control,
    errors,
    isLoading,
    handleSubmit: handleSubmit(onSubmit),
  }
}
