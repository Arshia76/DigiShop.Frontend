import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { SigninSchema, SigninType } from '../../schema'
import { useSigninMutation } from '../../service/query'

export function useSigninForm() {
  const { mutate: signin, isLoading } = useSigninMutation()

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SigninType>({
    resolver: zodResolver(SigninSchema),
  })

  const onSubmit: SubmitHandler<SigninType> = (values) => {
    signin(values, {
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
