import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UserSchema, UserType } from '../../schema';
import {
  useCreateUserMutation,
  useUpdateUserMutation,
} from '../../service/query';
import { useQueryClient } from 'react-query';
import { UserModalProps } from '.';

export function useUserModal({ userModal, setUserModal }: UserModalProps) {
  const { type, data } = userModal;

  const queryClient = useQueryClient();

  const { mutate: createProduct, isLoading: isLoadingCreate } =
    useCreateUserMutation();

  const { mutate: updateUser, isLoading: isLoadingUpdate } =
    useUpdateUserMutation();

  const {
    control,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<UserType>({
    resolver: zodResolver(UserSchema),
  });

  const onSubmit: SubmitHandler<UserType> = (values) => {
    if (type === 'edit') {
      updateUser(
        { id: data.id, ...values },
        {
          onSuccess() {
            queryClient.invalidateQueries('users');

            setUserModal({
              isOpen: false,
              data: null,
              type,
            });
          },
          onError(error: any) {
            setError('root', { message: error.response.data?.message });
          },
        }
      );
    } else {
      createProduct(values, {
        onSuccess() {
          queryClient.invalidateQueries('users');

          setUserModal({
            isOpen: false,
            data: null,
            type,
          });
        },
        onError(error: any) {
          setError('root', { message: error.response.data?.message });
        },
      });
    }
  };

  useEffect(() => {
    if (data && type === 'edit') {
      setValue('firstName', data?.firstName);
      setValue('lastName', data?.lastName);
      setValue('phoneNumber', data?.phoneNumber);
      setValue('password', data?.password);
      setValue('password', data?.password);
    } else {
      setValue('firstName', '');
      setValue('lastName', '');
      setValue('phoneNumber', '');
      setValue('password', '');
      setValue('password', '');
    }
  }, [data, setValue, type]);

  useEffect(() => {
    clearErrors();
  }, [type, clearErrors]);

  const isLoading = isLoadingCreate || isLoadingUpdate;

  return {
    control,
    errors,
    isLoading,
    handleSubmit: handleSubmit(onSubmit),
  };
}
