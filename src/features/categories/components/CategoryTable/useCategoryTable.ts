import { useRef, useState } from 'react'
import { useQueryClient } from 'react-query'
import { IModal } from '@/lib/interface'
import { ColDef, ColGroupDef } from 'ag-grid-enterprise'
import { CustomCellRendererProps } from 'ag-grid-react'
import { GridActionItemProps } from '@/components/ui/Table/components/actions'
import { Svg } from '@/assets'
import { useDeleteCategoryMutation, useGetCategoriesQuery } from '../../service/query'
import { ITableRef } from '@/components/ui/Table'
import { DeleteModalProps } from '@/components/shared/DeleteModal'
import { Alert } from '@/components/ui'
import { ICategoryResult } from '../../service/interface'

export function useCategoryTable() {
  const [categoryModal, setCategoryModal] = useState<IModal>({
    data: null,
    isOpen: false,
    type: 'add',
  })

  const gridRef = useRef<ITableRef<ICategoryResult> | null>(null)

  const queryClient = useQueryClient()

  const [deleteModalState, setDeleteModalState] = useState<DeleteModalProps>({
    isLoading: false,
    isOpen: false,
    title: 'آیا از حذف دسته بندی مطمئن هستید؟',
    onConfirm: () => null,
    onClose: () => null,
  })

  const { mutate: deleteCategory } = useDeleteCategoryMutation()

  const colDefs: ColDef[] | ColGroupDef[] = [
    {
      field: 'title',
      headerName: 'عنوان',
      headerTooltip: 'عنوان',
      checkboxSelection: true,
      headerCheckboxSelection: true,
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
        setCategoryModal({
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
            deleteCategory(row.data?._id, {
              onSuccess: () => {
                queryClient.invalidateQueries('categories')
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

  const { isFetching } = useGetCategoriesQuery({
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
    categoryModal,
    setCategoryModal,
    deleteModalState,
  }
}
