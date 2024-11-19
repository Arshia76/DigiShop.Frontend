import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { SigninSchema, SigninType } from '../../schema'
import { useAuth } from '../../context'

export function useSigninForm() {
  const { signin, isLoadingSignin } = useAuth()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninType>({
    resolver: zodResolver(SigninSchema),
  })

  const onSubmit: SubmitHandler<SigninType> = (values) => {
    signin(values)
  }

  return {
    control,
    errors,
    isLoading: isLoadingSignin,
    handleSubmit: handleSubmit(onSubmit),
  }
}
