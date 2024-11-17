import { Button, Input } from '@/components/ui'
import { useUserInfo } from './useUserInfo'
const UserInfo = () => {
  const { control, errors, isLoadingUpdate, handleSubmit, passwordControl, passwordErrors, isLoadingChangePassword, handleChangePassword } =
    useUserInfo()
  return (
    <section className="flex flex-wrap *:flex-[1_1_350px] gap-4 p-4">
      <div className="flex flex-col gap-4 border border-gray-300 rounded-lg p-6">
        <h5 className="text-2xl font-semibold">ویرایش اطلاعات</h5>
        <Input label="نام" control={control} name="firstName" error={errors.firstName?.message} />
        <Input label="نام خانوادگی" control={control} name="lastName" error={errors.lastName?.message} />
        <Input label="شماره موبایل" control={control} name="phoneNumber" error={errors.phoneNumber?.message} />
        <Button colour={'primary'} loaderOnly loading={isLoadingUpdate} onClick={handleSubmit}>
          ویرایش
        </Button>
      </div>
      <div className="flex flex-col gap-4 border border-gray-300 rounded-lg p-6">
        <h5 className="text-2xl font-semibold">تغییر رمز عبور</h5>
        <Input label="رمز عبور قبلی" type="password" control={passwordControl} name="oldPassword" error={passwordErrors.oldPassword?.message} />
        <Input label="رمز عبور جدید" type="password" control={passwordControl} name="newPassword" error={passwordErrors.newPassword?.message} />
        <Button colour={'primary'} loaderOnly loading={isLoadingChangePassword} onClick={handleChangePassword}>
          تغییر رمز عبور
        </Button>
      </div>
    </section>
  )
}

export { UserInfo }
