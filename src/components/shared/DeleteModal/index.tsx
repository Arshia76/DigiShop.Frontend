import { Modal, Button } from '@/components/ui'

export interface DeleteModalProps {
  isOpen: boolean
  isLoading: boolean
  title: string
  onConfirm: Function
  onClose: Function
}

const DeleteModal = ({ isOpen, isLoading, title, onConfirm, onClose }: DeleteModalProps) => {
  return (
    <Modal width="max-w-md" isOpen={isOpen}>
      <Modal.Header>
        <h5>{title}</h5>
      </Modal.Header>
      <Modal.Footer>
        <Button
          loading={isLoading}
          loaderOnly
          className="me-4 w-20"
          colour={'primary'}
          // @ts-ignore
          onClick={onConfirm}
        >
          حذف
        </Button>
        {/* @ts-ignore */}
        <Button colour={'secondary'} className="w-20" onClick={onClose}>
          لغو
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export { DeleteModal }
