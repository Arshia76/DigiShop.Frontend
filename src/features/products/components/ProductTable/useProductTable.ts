import { useRef, useState } from 'react'
import { Alert } from '@/components/ui'
import { useQueryClient } from 'react-query'
import { IModal } from '@/lib/interface'
import { ColDef, ColGroupDef } from 'ag-grid-enterprise'
import { CustomCellRendererProps } from 'ag-grid-react'
import { GridActionItemProps } from '@/components/ui/Table/components/actions'
import { Svg } from '@/assets'
import { useDeleteProductMutation, useGetProductsQuery } from '../../service/query'
import { ITableRef } from '@/components/ui/Table'
import { DeleteModalProps } from '@/components/shared/DeleteModal'

export function useProductTable() {
  const [productModal, setProductModal] = useState<IModal>({
    data: null,
    isOpen: false,
    type: 'add',
  })

  const gridRef = useRef<ITableRef<any> | null>(null)

  const queryClient = useQueryClient()

  const [deleteModalState, setDeleteModalState] = useState<DeleteModalProps>({
    isLoading: false,
    isOpen: false,
    title: 'آیا از حذف محصول مطمئن هستید؟',
    onConfirm: () => null,
    onClose: () => null,
  })

  const { mutate: deleteProduct } = useDeleteProductMutation()

  const colDefs: ColDef[] | ColGroupDef[] = [
    {
      field: 'title',
      headerName: 'عنوان',
      headerTooltip: 'عنوان',
      checkboxSelection: true,
      headerCheckboxSelection: true,
    },
    {
      field: 'price',
      headerName: 'قیمت',
      headerTooltip: 'قیمت',
    },

    {
      field: 'category.title',
      headerName: 'دسته بندی',
      headerTooltip: 'دسته بندی',
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
        setProductModal({
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
            deleteProduct(row.data?._id, {
              onSuccess: () => {
                queryClient.invalidateQueries('products')
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

  const { isFetching } = useGetProductsQuery(
    {},
    {
      onSuccess(data) {
        // eslint-disable-next-line
        // @ts-ignore
        gridRef.current?.setData(data)
      },
      onError(error) {
        Alert({ type: 'error', message: error.message })
      },
    }
  )

  return {
    colDefs,
    gridRef,
    actions,
    isFetching,
    productModal,
    setProductModal,
    deleteModalState,
  }
}
