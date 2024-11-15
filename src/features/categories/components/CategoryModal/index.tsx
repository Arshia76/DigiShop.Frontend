import { Modal, Input, Button } from '@/components/ui';
import { useCategoryModal } from './useCategoryModal';
import { IModal } from '@/lib/interface';
import { Dispatch, SetStateAction } from 'react';

export interface CategryModalProps {
  categoryModal: IModal;
  setCategoryModal: Dispatch<SetStateAction<IModal>>;
}

const CategoryModal = ({
  categoryModal,
  setCategoryModal,
}: CategryModalProps) => {
  const { control, errors, handleSubmit, isLoading } = useCategoryModal({
    categoryModal,
    setCategoryModal,
  });
  return (
    <Modal width='max-w-2xl' isOpen={categoryModal.isOpen}>
      <Modal.Header>
        <span>کاربر</span>
        <span
          style={{ cursor: 'pointer' }}
          onClick={() =>
            setCategoryModal({
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
            label='عنوان'
            control={control}
            error={errors.title?.message}
            name='title'
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
            setCategoryModal({
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

export { CategoryModal };
