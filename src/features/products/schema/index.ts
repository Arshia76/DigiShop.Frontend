import { z } from 'zod'

const ProductSchema = z.object({
  title: z
    .string({
      required_error: 'نام محصول را وارد کنید',
    })
    .min(1, 'نام محصول را وارد کنید'),

  description: z
    .string({
      required_error: 'توضیحات محصول را وارد کنید',
    })
    .min(1, 'توضیحات محصول را وارد کنید'),

  price: z
    .string({
      required_error: 'قیمت محصول را وارد کنید',
    })
    .min(1, 'قیمت محصول را وارد کنید'),

  category: z
    .string({
      required_error: 'دسته بندی محصول را مشخص کنید',
    })
    .min(1, 'دسته بندی محصول را مشخص کنید'),

  image: z
    .string({
      required_error: 'تصویر محصول را انتخاب کنید',
    })
    .min(1, 'تصویر محصول را انتخاب کنید'),
})

export type ProductType = z.infer<typeof ProductSchema>

export { ProductSchema }
