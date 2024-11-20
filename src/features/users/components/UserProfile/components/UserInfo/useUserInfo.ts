import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { UpdateUserSchema, UpdateUserType, ChangeUserPasswordSchema, ChangeUserPasswordType } from '@/features/users/schema'
import { useChangeUserPasswordMutation, useUpdateUserMutation } from '@/features/users/service/query'

export function useUserInfo() {
  const { mutate: updateUser, isLoading: isLoadingUpdate } = useUpdateUserMutation()

  const { mutate: changeUserPassword, isLoading: isLoadingChangePassword } = useChangeUserPasswordMutation()

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<UpdateUserType>({
    resolver: zodResolver(UpdateUserSchema),
  })

  const {
    control: passwordControl,
    handleSubmit: handleChangePassword,
    setError: setChangePasswordError,
    formState: { errors: passwordErrors },
  } = useForm<ChangeUserPasswordType>({
    resolver: zodResolver(ChangeUserPasswordSchema),
  })

  const onSubmit: SubmitHandler<UpdateUserType> = (values) => {
    updateUser(
      { id: '1', ...values },
      {
        onSuccess() {},
        onError(error: any) {
          setError('root', { message: error.response.data?.message })
        },
      }
    )
  }

  const onChangePassword: SubmitHandler<ChangeUserPasswordType> = (values) => {
    changeUserPassword(
      { id: '1', ...values },
      {
        onSuccess() {},
        onError(error: any) {
          setChangePasswordError('root', {
            message: error.response.data?.message,
          })
        },
      }
    )
  }

  return {
    control,
    errors,
    isLoadingUpdate,
    handleSubmit: handleSubmit(onSubmit),

    passwordControl,
    passwordErrors,
    isLoadingChangePassword,
    handleChangePassword: handleChangePassword(onChangePassword),
  }
}
