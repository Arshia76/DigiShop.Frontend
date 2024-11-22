import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
  UpdateUserSchema,
  UpdateUserType,
  ChangeUserPasswordSchema,
  ChangeUserPasswordType,
} from '@/features/users/schema'
import {
  useChangeUserPasswordMutation,
  useGetUserQuery,
  useUpdateUserMutation,
} from '@/features/users/service/query'
import { useNavigate, useParams } from 'react-router-dom'
import { Routes } from '@/lib/routes'

export function useUserInfo() {
  const params = useParams()
  const navigate = useNavigate()

  const { mutate: updateUser, isLoading: isLoadingUpdate } =
    useUpdateUserMutation()

  const { mutate: changeUserPassword, isLoading: isLoadingChangePassword } =
    useChangeUserPasswordMutation()

  const {
    control,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<UpdateUserType>({
    resolver: zodResolver(UpdateUserSchema),
  })

  const {
    control: passwordControl,
    handleSubmit: handleChangePassword,
    setValue: setChangePasswordValue,
    setError: setChangePasswordError,
    formState: { errors: passwordErrors },
  } = useForm<ChangeUserPasswordType>({
    resolver: zodResolver(ChangeUserPasswordSchema),
  })

  const onSubmit: SubmitHandler<UpdateUserType> = (values) => {
    updateUser(
      { id: params.id as string, ...values },
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
      { id: params.id as string, ...values },
      {
        onSuccess() {
          setChangePasswordValue('newPassword', '')
          setChangePasswordValue('oldPassword', '')
        },
        onError(error: any) {
          setChangePasswordError('root', {
            message: error.response.data?.message,
          })
        },
      }
    )
  }

  const { isFetching: isLoadingUser } = useGetUserQuery(params.id as string, {
    onSuccess(data) {
      setValue('firstName', data.firstName)
      setValue('lastName', data.lastName)
      setValue('phoneNumber', data.phoneNumber)
    },

    onError() {
      navigate(Routes.HOME)
    },
  })

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
