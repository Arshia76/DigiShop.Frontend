import { useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
  CreateUserSchema,
  CreateUserType,
  UpdateUserSchema,
  UpdateUserType,
  ChangeUserPasswordByAdminType,
  ChangeUserPasswordByAdminSchema,
} from '../../schema'
import {
  useCreateUserMutation,
  useUpdateUserMutation,
  useChangeUserPasswordMutation,
  useChangeUserPasswordByAdminMutation,
} from '../../service/query'
import { useQueryClient } from 'react-query'
import { UserModalProps } from '.'
import { Alert } from '@/components/ui'

export function useUserModal({ userModal, setUserModal }: UserModalProps) {
  const { type, data } = userModal

  const queryClient = useQueryClient()

  const { mutate: createProduct, isLoading: isLoadingCreate } = useCreateUserMutation()

  const { mutate: updateUser, isLoading: isLoadingUpdate } = useUpdateUserMutation()

  const { mutate: changeUserPasswordByAdmin, isLoading: isLoadingChangeUserPasswordByAdmin } = useChangeUserPasswordByAdminMutation()

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
    control: changeUserPasswordByAdminControl,
    handleSubmit: handleChangeUserPasswordByADmin,
    clearErrors: clearChangeUserPasswordByAdminErrors,
    setValue: setChangeUserPasswordByAdminValue,
    formState: { errors: changeUserPasswordByAdminErrors },
  } = useForm<ChangeUserPasswordByAdminType>({
    resolver: zodResolver(ChangeUserPasswordByAdminSchema),
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

  const onChangePassword: SubmitHandler<ChangeUserPasswordByAdminType> = (values) => {
    changeUserPasswordByAdmin(
      { id: data._id, ...values },
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
    } else {
      setValue('firstName', '')
      setValue('lastName', '')
      setValue('phoneNumber', '')
    }

    setChangeUserPasswordByAdminValue('confirmNewPassword', '')
    setChangeUserPasswordByAdminValue('newPassword', '')
  }, [data, setValue, setChangeUserPasswordByAdminValue, type])

  useEffect(() => {
    clearErrors()
    clearChangeUserPasswordByAdminErrors()
  }, [type, clearErrors, clearChangeUserPasswordByAdminErrors])

  const isLoading = isLoadingCreate || isLoadingUpdate || isLoadingChangeUserPasswordByAdmin

  return {
    control,
    errors,
    isLoading,
    handleSubmit: handleSubmit(onSubmit),

    changeUserPasswordByAdminControl,
    changeUserPasswordByAdminErrors,
    handleChangeUserPasswordByADmin: handleChangeUserPasswordByADmin(onChangePassword),
  }
}
