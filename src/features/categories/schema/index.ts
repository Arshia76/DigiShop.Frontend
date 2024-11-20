import { z } from 'zod'

const CreateCategorySchema = z.object({
  title: z
    .string({
      required_error: 'عنوان دسته بندی را وارد کنید',
    })
    .min(1, 'عنوان دسته بندی را وارد کنید'),
})

const UpdateCategorySchema = CreateCategorySchema

export type CreateCategoryType = z.infer<typeof CreateCategorySchema>
export type UpdateCategoryType = z.infer<typeof UpdateCategorySchema>

export { CreateCategorySchema, UpdateCategorySchema }
