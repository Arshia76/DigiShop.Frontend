import { z } from 'zod'

const MAX_FILE_SIZE = 1024 * 1024
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png']

const CreateProductSchema = z.object({
  title: z
    .string({
      required_error: 'عنوان محصول را وارد کنید',
    })
    .min(1, 'عنوان محصول را وارد کنید'),

  description: z
    .string({
      required_error: 'توضیحات محصول را وارد کنید',
    })
    .min(1, 'توضیحات محصول را وارد کنید'),

  price: z.coerce
    .number({
      required_error: 'قیمت محصول را وارد کنید',
    })
    .gt(0, 'قیمت محصول را وارد کنید'),

  quantity: z.coerce
    .number({
      required_error: 'تعداد محصول را وارد کنید',
    })
    .gte(1, 'تعداد محصول را وارد کنید'),

  category: z.object(
    {
      label: z.string(),
      value: z.string(),
    },
    {
      required_error: 'دسته بندی محصول را انتخاب کنید',
      invalid_type_error: 'دسته بندی محصول را انتخاب کنید',
    }
  ),

  image: z
    .any()
    .refine((file) => file.name, {
      message: 'تصویر محصول را انتخاب کنید',
    })
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), {
      message: 'نوع عکس اشتباه است',
    })

    .refine((file) => file?.size <= MAX_FILE_SIZE, {
      message: `سایز تصویر باید کمتر از 1 مگابایت باشد`,
    }),
})

const UpdateProductSchema = CreateProductSchema

const ProductQuerySchema = z.object({
  sort: z
    .object({
      label: z.string().optional(),
      value: z.string().optional(),
    })
    .optional()
    .nullable(),

  category: z
    .object({
      label: z.string().optional(),
      value: z.string().optional(),
    })
    .optional()
    .nullable(),

  query: z.string().optional().nullable(),
})

export type CreateProductType = z.infer<typeof CreateProductSchema>
export type UpdateProductType = z.infer<typeof UpdateProductSchema>
export type ProductQueryType = z.infer<typeof ProductQuerySchema>

export { CreateProductSchema, UpdateProductSchema, ProductQuerySchema }
