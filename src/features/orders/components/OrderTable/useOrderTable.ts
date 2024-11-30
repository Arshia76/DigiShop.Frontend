import { useRef } from 'react'
import { ColDef, ColGroupDef } from 'ag-grid-enterprise'
import { useGetOrdersQuery } from '../../service/query'
import { ITableRef } from '@/components/ui/Table'
import { Alert } from '@/components/ui'
import { CustomCellRendererProps } from 'ag-grid-react'
import { GridActionItemProps } from '@/components/ui/Table/components/actions'
import { Svg } from '@/assets'
import { useNavigate } from 'react-router-dom'
import { Routes } from '@/lib/routes'
import { IOrderResult } from '../../service/interface'

export function useOrderTable() {
  const gridRef = useRef<ITableRef<IOrderResult> | null>(null)
  const navigate = useNavigate()

  const colDefs: ColDef[] | ColGroupDef[] = [
    {
      field: '_id',
      headerName: 'شناسه سفارش',
      headerTooltip: 'شناسه سفارش',
    },
    {
      field: 'user._id',
      headerName: 'شناسه کاربر',
      headerTooltip: 'شناسه کاربر',
    },
    {
      valueGetter: ({ data }) => data.user.firstName + ' ' + data.user.lastName,
      headerName: 'نام کاربر',
      headerTooltip: 'نام کاربر',
    },
    {
      field: 'createdAt',
      headerName: 'تاریخ ثبت',
      headerTooltip: 'تاریخ ثبت',
      type: 'jalaliDate',
    },

    {
      field: 'totalAmount',
      headerName: 'مبلغ کل',
      headerTooltip: 'مبلغ کل',
      type: 'currency',
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
      theme: 'green',
      icon: Svg.Eye_Icon,
      title: 'ویرایش',
      onClick: () => {
        navigate(`${Routes.ORDER}/${row.data._id}`)
      },
    },
  ]

  const { isFetching } = useGetOrdersQuery({
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
  }
}
