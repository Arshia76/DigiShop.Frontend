import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CategorySchema, CategoryType } from '../../schema';
import {
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
} from '../../service/query';
import { useQueryClient } from 'react-query';
import { CategryModalProps } from '.';

export function useCategoryModal({
  categoryModal,
  setCategoryModal,
}: CategryModalProps) {
  const { type, data } = categoryModal;

  const queryClient = useQueryClient();

  const { mutate: createProduct, isLoading: isLoadingCreate } =
    useCreateCategoryMutation();

  const { mutate: updateProduct, isLoading: isLoadingUpdate } =
    useUpdateCategoryMutation();

  const {
    control,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<CategoryType>({
    resolver: zodResolver(CategorySchema),
  });

  const onSubmit: SubmitHandler<CategoryType> = (values) => {
    if (type === 'edit') {
      updateProduct(
        { id: data.id, ...values },
        {
          onSuccess() {
            queryClient.invalidateQueries('categories');

            setCategoryModal({
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
          queryClient.invalidateQueries('categories');

          setCategoryModal({
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
      setValue('title', data?.title);
    } else {
      setValue('title', '');
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
