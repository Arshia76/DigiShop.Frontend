import { Modal, Input, Button } from '@/components/ui'
import { useUserModal } from './useUserModal'
import { IModal } from '@/lib/interface'
import { Dispatch, SetStateAction } from 'react'

export interface UserModalProps {
  userModal: IModal
  setUserModal: Dispatch<SetStateAction<IModal>>
}

const UserModal = ({ userModal, setUserModal }: UserModalProps) => {
  const {
    control,
    errors,
    handleSubmit,
    isLoading,
    handleChangeUserPasswordByADmin,
    changeUserPasswordByAdminControl,
    changeUserPasswordByAdminErrors,
  } = useUserModal({
    userModal,
    setUserModal,
  })

  return (
    <Modal width="max-w-2xl" isOpen={userModal.isOpen}>
      <Modal.Header>
        <span>کاربر</span>
        <span
          style={{ cursor: 'pointer' }}
          onClick={() =>
            setUserModal({
              data: null,
              isOpen: false,
              type: userModal.type,
            })
          }
        >
          بستن
        </span>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div className="flex flex-wrap *:flex-[1_1_250px] gap-2 p-4">
            <Input label="نام" control={control} error={errors.firstName?.message} name="firstName" />
            <Input label="نام خانوادگی" control={control} error={errors.lastName?.message} name="lastName" />
            <Input label="شماره موبایل" inputMode="numeric" control={control} error={errors.phoneNumber?.message} name="phoneNumber" />
            {userModal.type === 'add' && (
              <>
                <Input label="نام کاربری" control={control} error={errors.username?.message} name="username" />
                <Input label="رمز عبور" type="password" control={control} error={errors.password?.message} name="password" />
              </>
            )}
          </div>
          {userModal.type === 'edit' && (
            <>
              <hr className="w-full text-custom-gray my-2 border-t-2" />
              <h4 className="text-md ps-4">تغییر رمز</h4>
              <div className="flex flex-wrap *:flex-[1_1_250px] gap-2 p-4">
                <Input
                  label="رمز عبور جدید"
                  type="password"
                  control={changeUserPasswordByAdminControl}
                  error={changeUserPasswordByAdminErrors.newPassword?.message}
                  name="newPassword"
                />

                <Input
                  label="تکرار رمز عبور جدید"
                  type="password"
                  control={changeUserPasswordByAdminControl}
                  error={changeUserPasswordByAdminErrors.confirmNewPassword?.message}
                  name="confirmNewPassword"
                />
              </div>
            </>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button colour="primary" className="w-20 me-2" loaderOnly loading={isLoading} onClick={handleSubmit}>
          اعمال
        </Button>
        {userModal.type === 'edit' && (
          <Button colour="primary" className="w-20 me-2" loaderOnly loading={isLoading} onClick={handleChangeUserPasswordByADmin}>
            تغییر رمز
          </Button>
        )}
        <Button
          colour="secondary"
          className="w-20"
          onClick={() =>
            setUserModal({
              data: null,
              isOpen: false,
              type: userModal.type,
            })
          }
        >
          بازگشت
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export { UserModal }
