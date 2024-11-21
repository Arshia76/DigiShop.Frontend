import { z } from 'zod'

const CreateCartOrderSchema = z.object({
  province: z
    .string({
      required_error: 'استان را وارد کنید',
    })
    .min(1, 'استان را وارد کنید'),

  city: z
    .string({
      required_error: 'شهر را وارد کنید',
    })
    .min(1, 'شهر را وارد کنید'),

  postalCode: z
    .string({
      required_error: 'کدپستی را وارد کنید',
    })
    .min(1, 'کدپستی را وارد کنید'),

  address: z
    .string({
      required_error: 'آدرس را وارد کنید',
    })
    .min(1, 'آدرس را وارد کنید'),
})

export type CreateCartOrderType = z.infer<typeof CreateCartOrderSchema>

export { CreateCartOrderSchema }
