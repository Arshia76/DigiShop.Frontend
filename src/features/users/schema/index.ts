import { z } from 'zod'

const CreateUserSchema = z.object({
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

const ChangeUserPasswordSchema = z.object({
  oldPassword: z
    .string({
      required_error: 'رمز عبور قبلی کاربر را وارد کنید',
    })
    .min(1, 'رمز عبور قبلی کاربر را وارد کنید'),

  newPassword: z
    .string({
      required_error: 'رمز عبور جدید کاربر را وارد کنید',
    })
    .min(1, 'رمز عبور جدید کاربر را وارد کنید'),
})

const ChangeUserPasswordByAdminSchema = z
  .object({
    newPassword: z
      .string({
        required_error: 'رمز عبور کاربر را وارد کنید',
      })
      .min(1, 'رمز عبور کاربر را وارد کنید'),

    confirmNewPassword: z
      .string({
        required_error: 'رمز عبور کاربر را وارد کنید',
      })
      .min(1, 'رمز عبور کاربر را وارد کنید'),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: 'رمز عبور وارد شده مطابقت ندارد',
    path: ['confirmNewPassword'],
  })

const UpdateUserSchema = CreateUserSchema.omit({ username: true, password: true })

export type CreateUserType = z.infer<typeof CreateUserSchema>
export type UpdateUserType = z.infer<typeof UpdateUserSchema>
export type ChangeUserPasswordType = z.infer<typeof ChangeUserPasswordSchema>
export type ChangeUserPasswordByAdminType = z.infer<typeof ChangeUserPasswordByAdminSchema>

export { CreateUserSchema, UpdateUserSchema, ChangeUserPasswordSchema, ChangeUserPasswordByAdminSchema }
