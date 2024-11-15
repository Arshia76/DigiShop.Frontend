import { z } from 'zod'

const SignupSchema = z.object({
  firstName: z
    .string({
      required_error: 'نام کاربر را وارد کنید',
    })
    .min(1, 'نام کاربر را وارد کنید'),

  lastName: z
    .string({
      required_error: 'نام خانوادگی کاربر را وارد کنید',
    })
    .min(1, 'نام خانوادگی کاربر را وارد کنید'),

  phoneNumber: z
    .string({
      required_error: 'شماره موبایل کاربر را وارد کنید',
    })
    .min(1, 'شماره موبایل کاربر را وارد کنید'),

  username: z
    .string({
      required_error: 'نام کاربری کاربر را وارد کنید',
    })
    .min(1, 'نام کاربری کاربر را وارد کنید'),

  password: z
    .string({
      required_error: 'رمز عبور کاربر را وارد کنید',
    })
    .min(1, 'رمز عبور کاربر را وارد کنید'),
})

const SigninSchema = z.object({
  username: z
    .string({
      required_error: 'نام کاربری کاربر را وارد کنید',
    })
    .min(1, 'نام کاربری کاربر را وارد کنید'),

  password: z
    .string({
      required_error: 'رمز عبور کاربر را وارد کنید',
    })
    .min(1, 'رمز عبور کاربر را وارد کنید'),
})

export type SignupType = z.infer<typeof SignupSchema>
export type SigninType = z.infer<typeof SigninSchema>

export { SignupSchema, SigninSchema }
