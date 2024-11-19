import { Button, Input } from '@/components/ui'
import { useSigninForm } from './useSigninForm'
const SigninForm = () => {
  const { control, errors, isLoading, handleSubmit } = useSigninForm()
  return (
    <section
      className="flex flex-col shadow-md items-center border 
    border-custom-gray p-4 mt-4 rounded-lg w-fit mx-auto"
    >
      <h5 className="text-custom-slate text-4xl mb-4 font-bold">ورود</h5>
      <div className="flex flex-col *:min-w-96 gap-4 p-4">
        <Input label="نام کاربری" control={control} error={errors.username?.message} name="username" />
        <Input label="رمز عبور" type="password" control={control} error={errors.password?.message} name="password" />
      </div>
      <Button colour={'primary'} loaderOnly loading={isLoading} onClick={handleSubmit} className="w-32">
        ورود
      </Button>
    </section>
  )
}

export { SigninForm }
