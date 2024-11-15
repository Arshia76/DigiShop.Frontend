import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ProductSchema, ProductType } from '../../schema';
import {
  useCreateProductMutation,
  useUpdateProductMutation,
} from '../../service/query';
import { useQueryClient } from 'react-query';
import { ProductModalProps } from '.';

export function useProductModal({
  productModal,
  setProductModal,
}: ProductModalProps) {
  const { type, data } = productModal;

  const queryClient = useQueryClient();

  const { mutate: createProduct, isLoading: isLoadingCreate } =
    useCreateProductMutation();

  const { mutate: updateProduct, isLoading: isLoadingUpdate } =
    useUpdateProductMutation();

  const {
    control,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<ProductType>({
    resolver: zodResolver(ProductSchema),
  });

  const onSubmit: SubmitHandler<ProductType> = (values) => {
    if (type === 'edit') {
      updateProduct(
        { id: data.id, ...values },
        {
          onSuccess() {
            queryClient.invalidateQueries('products');

            setProductModal({
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
          queryClient.invalidateQueries('products');

          setProductModal({
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
      setValue('description', data?.description);
      setValue('price', data?.price);
      setValue('image', data?.image);
      setValue('category', data?.category);
    } else {
      setValue('title', '');
      setValue('description', '');
      setValue('price', '');
      setValue('image', '');
      setValue('category', '');
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
