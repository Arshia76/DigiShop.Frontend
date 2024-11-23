import { useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { CreateUserSchema, CreateUserType, ChangeUserPasswordSchema, ChangeUserPasswordType, UpdateUserSchema, UpdateUserType } from '../../schema'
import { useCreateUserMutation, useUpdateUserMutation, useChangeUserPasswordMutation } from '../../service/query'
import { useQueryClient } from 'react-query'
import { UserModalProps } from '.'
import { Alert } from '@/components/ui'

export function useUserModal({ userModal, setUserModal }: UserModalProps) {
  const { type, data } = userModal

  const queryClient = useQueryClient()

  const { mutate: createProduct, isLoading: isLoadingCreate } = useCreateUserMutation()

  const { mutate: updateUser, isLoading: isLoadingUpdate } = useUpdateUserMutation()

  const { mutate: changeUserPassword, isLoading: isLoadingChangePassword } = useChangeUserPasswordMutation()

  const UserSchema = {
    add: CreateUserSchema,
    edit: UpdateUserSchema,
    delete: null,
    // eslint-disable-next-line
    // @ts-ignore
  }[type]

  type UserType = {
    add: CreateUserType
    edit: UpdateUserType
    delete: null
    // eslint-disable-next-line
    // @ts-ignore
  }[type]

  const {
    control,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<UserType>({
    resolver: zodResolver(UserSchema),
  })

  const {
    control: passwordControl,
    handleSubmit: handleChangePassword,
    clearErrors: clearChangePasswordErrors,
    formState: { errors: passwordErrors },
  } = useForm<ChangeUserPasswordType>({
    resolver: zodResolver(ChangeUserPasswordSchema),
  })

  const onSubmit: SubmitHandler<UserType> = (values) => {
    if (type === 'edit') {
      updateUser(
        { id: data._id, firstName: values.firstName, lastName: values.lastName, phoneNumber: values.phoneNumber },
        {
          onSuccess() {
            queryClient.invalidateQueries('users')

            setUserModal({
              isOpen: false,
              data: null,
              type,
            })
          },
          onError(error) {
            Alert({ type: 'error', message: error.message })
          },
        }
      )
    } else {
      createProduct(values, {
        onSuccess() {
          queryClient.invalidateQueries('users')

          setUserModal({
            isOpen: false,
            data: null,
            type,
          })
        },
        onError(error) {
          Alert({ type: 'error', message: error.message })
        },
      })
    }
  }

  const onChangePassword: SubmitHandler<ChangeUserPasswordType> = (values) => {
    changeUserPassword(
      { id: data.id, ...values },
      {
        onSuccess() {
          setUserModal({
            isOpen: false,
            data: null,
            type,
          })
        },
        onError(error) {
          Alert({ type: 'error', message: error.message })
        },
      }
    )
  }

  useEffect(() => {
    if (data && type === 'edit') {
      setValue('firstName', data?.firstName)
      setValue('lastName', data?.lastName)
      setValue('phoneNumber', data?.phoneNumber)
      setValue('password', data?.password)
      setValue('password', data?.password)
    } else {
      setValue('firstName', '')
      setValue('lastName', '')
      setValue('phoneNumber', '')
      setValue('password', '')
      setValue('password', '')
    }
  }, [data, setValue, type])

  useEffect(() => {
    clearErrors()
    clearChangePasswordErrors()
  }, [type, clearErrors, clearChangePasswordErrors])

  const isLoading = isLoadingCreate || isLoadingUpdate || isLoadingChangePassword

  return {
    control,
    errors,
    isLoading,
    handleSubmit: handleSubmit(onSubmit),

    passwordControl,
    passwordErrors,
    handleChangePassword: handleChangePassword(onChangePassword),
  }
}
