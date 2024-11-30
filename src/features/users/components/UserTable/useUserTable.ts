import { useRef, useState } from 'react'
import { useQueryClient } from 'react-query'
import { Alert } from '@/components/ui'
import { IModal } from '@/lib/interface'
import { ColDef, ColGroupDef } from 'ag-grid-enterprise'
import { CustomCellRendererProps } from 'ag-grid-react'
import { GridActionItemProps } from '@/components/ui/Table/components/actions'
import { Svg } from '@/assets'
import { useDeleteUserMutation, useGetUsersQuery } from '../../service/query'
import { ITableRef } from '@/components/ui/Table'
import { DeleteModalProps } from '@/components/shared/DeleteModal'
import { IUserResult } from '../../service/interface'

export function useUserTable() {
  const [userModal, setUserModal] = useState<IModal>({
    data: null,
    isOpen: false,
    type: 'add',
  })

  const gridRef = useRef<ITableRef<IUserResult> | null>(null)

  const queryClient = useQueryClient()

  const [deleteModalState, setDeleteModalState] = useState<DeleteModalProps>({
    isLoading: false,
    isOpen: false,
    title: 'آیا از حذف کاربر مطمئن هستید؟',
    onConfirm: () => null,
    onClose: () => null,
  })

  const { mutate: deleteUser } = useDeleteUserMutation()

  const colDefs: ColDef[] | ColGroupDef[] = [
    {
      field: 'firstName',
      headerName: 'نام',
      headerTooltip: 'نام',
      checkboxSelection: true,
      headerCheckboxSelection: true,
    },
    {
      field: 'lastName',
      headerName: 'نام خانوادگی',
      headerTooltip: 'نام خانوادگی',
    },

    {
      field: 'phoneNumber',
      headerName: 'شماره موبایل',
      headerTooltip: 'شماره موبایل',
    },

    {
      headerName: 'عملیات',
      headerTooltip: 'عملیات',
      pinned: 'left',
      sortable: false,
      filter: false,
      // minWidth: 150,
      cellRenderer: 'actions',
    },
  ]

  const actions: (row: CustomCellRendererProps) => GridActionItemProps[] = (row: CustomCellRendererProps) => [
    {
      theme: 'yellow',
      icon: Svg.Edit_Icon,
      title: 'ویرایش',
      onClick: () => {
        setUserModal({
          type: 'edit',
          isOpen: true,
          data: row.data,
        })
      },
    },
    {
      theme: 'red',
      icon: Svg.Trash_Icon,
      title: 'حذف',
      onClick() {
        setDeleteModalState((state: any) => ({
          ...state,
          isOpen: true,
          onClose: () => {
            setDeleteModalState((state: any) => ({
              ...state,
              isOpen: false,
            }))
          },
          onConfirm: () => {
            setDeleteModalState((state: any) => ({
              ...state,
              isLoading: true,
            }))
            deleteUser(row.data?._id, {
              onSuccess: () => {
                queryClient.invalidateQueries('users')
                setDeleteModalState((state: any) => ({
                  ...state,
                  isLoading: false,
                  isOpen: false,
                }))
              },
            })
          },
        }))
      },
    },
  ]

  const { isFetching } = useGetUsersQuery({
    onSuccess(data) {
      if (gridRef.current?.setData) gridRef.current?.setData(data)
    },
    onError(error) {
      Alert({ type: 'error', message: error.message })
    },
  })

  return {
    colDefs,
    gridRef,
    actions,
    isFetching,
    userModal,
    deleteModalState,
    setUserModal,
  }
}
