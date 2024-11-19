import { z } from 'zod'

const MAX_FILE_SIZE = 1024 * 1024
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png']

const ProductSchema = z.object({
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
    .refine((files) => files?.length > 0, {
      message: 'تصویر محصول را انتخاب کنید',
    })
    .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), {
      message: 'نوع عکس اشتباه است',
    })

    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, {
      message: `سایز تصویر باید کمتر از 1 مگابایت باشد`,
    }),
})

const ProductFilterSchema = z.object({
  sortBy: z.string().optional(),

  category: z.string().optional(),

  query: z.string().optional(),
})

export type ProductType = z.infer<typeof ProductSchema>
export type ProductFilterType = z.infer<typeof ProductFilterSchema>

export { ProductSchema, ProductFilterSchema }
