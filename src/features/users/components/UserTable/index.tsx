import { Button, SvgComponent, Table } from '@/components/ui'
import { useUserTable } from './useUserTable'
import { UserModal } from '../UserModal'
import { Svg } from '@/assets'
import { DeleteModal } from '@/components/shared'

const UserTable = () => {
  const {
    actions,
    colDefs,
    gridRef,
    isFetching,
    userModal,
    deleteModalState,
    setUserModal,
  } = useUserTable()
  return (
    <div className='h-[90%]'>
      <div className='flex items-center justify-between'>
        <h4 className='text-custom-black text-3xl font-bold'>کاربران</h4>
        <Button
          colour='primary'
          icon={<SvgComponent src={Svg.Plus_Icon} className='Add_Btn_Icon' />}
          className='mb-4 ms-auto px-4 '
          onClick={() =>
            setUserModal({
              isOpen: true,
              type: 'add',
              data: null,
            })
          }
        >
          افزودن کاربر جدید
        </Button>
      </div>
      <Table
        parentRef={gridRef}
        isLoading={isFetching}
        columnDefs={colDefs}
        actions={actions}
      />
      <UserModal userModal={userModal} setUserModal={setUserModal} />
      <DeleteModal {...deleteModalState} />
    </div>
  )
}

export { UserTable }
