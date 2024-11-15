import { Modal, Input, Button } from '@/components/ui';
import { useUserModal } from './useUserModal';
import { IModal } from '@/lib/interface';
import { Dispatch, SetStateAction } from 'react';

export interface UserModalProps {
  userModal: IModal;
  setUserModal: Dispatch<SetStateAction<IModal>>;
}

const UserModal = ({ userModal, setUserModal }: UserModalProps) => {
  const { control, errors, handleSubmit, isLoading } = useUserModal({
    userModal,
    setUserModal,
  });
  return (
    <Modal width='max-w-2xl' isOpen={userModal.isOpen}>
      <Modal.Header>
        <span>کاربر</span>
        <span
          style={{ cursor: 'pointer' }}
          onClick={() =>
            setUserModal({
              data: null,
              isOpen: false,
              type: 'add',
            })
          }
        >
          بستن
        </span>
      </Modal.Header>
      <Modal.Body>
        <div className='flex flex-wrap *:flex-[1_1_250px] gap-2 p-4'>
          <Input
            label='نام'
            control={control}
            error={errors.firstName?.message}
            name='firstName'
          />
          <Input
            label='نام خانوادگی'
            control={control}
            error={errors.lastName?.message}
            name='lastName'
          />
          <Input
            label='شماره موبایل'
            inputMode='numeric'
            control={control}
            error={errors.phoneNumber?.message}
            name='phoneNumber'
          />
          <Input
            label='نام کاربری'
            control={control}
            error={errors.username?.message}
            name='username'
          />
          <Input
            label='رمز عبور'
            type='password'
            control={control}
            error={errors.password?.message}
            name='password'
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          colour='primary'
          className='w-20 me-2'
          loaderOnly
          loading={isLoading}
          onClick={handleSubmit}
        >
          اعمال
        </Button>
        <Button
          colour='secondary'
          className='w-20'
          onClick={() =>
            setUserModal({
              data: null,
              isOpen: false,
              type: 'add',
            })
          }
        >
          بازگشت
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export { UserModal };
