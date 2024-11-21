import { Button, Input } from '@/components/ui'
import { useSignupForm } from './useSignupForm'
import { useNavigate } from 'react-router-dom'
import { Routes } from '@/lib/routes'

const SignupForm = () => {
  const { control, errors, handleSubmit, isLoading } = useSignupForm()
  const navigate = useNavigate()
  return (
    <section
      className="flex flex-col shadow-md items-center border 
  border-custom-gray p-4 mt-4 rounded-lg w-fit mx-auto"
    >
      <h5 className="text-custom-slate text-4xl mb-4 font-bold">ثبت نام</h5>
      <div className="flex flex-col *:min-w-96 gap-4 p-4">
        <Input label="نام" control={control} error={errors.firstName?.message} name="firstName" />
        <Input label="نام خانوادگی" control={control} error={errors.lastName?.message} name="lastName" />
        <Input label="شماره موبایل" inputMode="numeric" control={control} error={errors.phoneNumber?.message} name="phoneNumber" />
        <Input label="نام کاربری" control={control} error={errors.username?.message} name="username" />
        <Input label="رمز عبور" type="password" control={control} error={errors.password?.message} name="password" />
      </div>
      <Button colour={'primary'} loaderOnly loading={isLoading} onClick={handleSubmit} className="w-32">
        ثبت نام
      </Button>
      <hr className="border-t border-t-gray-300 my-4 w-full" />
      <span className="text-md text-custom-slate cursor-pointer" onClick={() => navigate(Routes.SIGNIN)}>
        حساب کاربری دارم؟! ورود
      </span>
    </section>
  )
}

export { SignupForm }
