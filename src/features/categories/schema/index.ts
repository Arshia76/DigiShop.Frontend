import { z } from 'zod';

const CategorySchema = z.object({
  title: z
    .string({
      required_error: 'عنوان دسته بندی را وارد کنید',
    })
    .min(1, 'عنوان دسته بندی را وارد کنید'),
});

export type CategoryType = z.infer<typeof CategorySchema>;

export { CategorySchema };
