import { useRef } from 'react'
import { ColDef, ColGroupDef } from 'ag-grid-enterprise'
import { useGetUserOrdersQuery } from '../../service/query'
import { ITableRef } from '@/components/ui/Table'
import { Alert } from '@/components/ui'

export function useUserOrders() {
  const gridRef = useRef<ITableRef<any> | null>(null)

  const colDefs: ColDef[] | ColGroupDef[] = [
    {
      field: 'address.province',
      headerName: 'استان',
      headerTooltip: 'استان',
      checkboxSelection: true,
      headerCheckboxSelection: true,
    },
    {
      field: 'address.city',
      headerName: 'شهر',
      headerTooltip: 'شهر',
    },

    {
      field: 'address.postalCode',
      headerName: 'کدپستی',
      headerTooltip: 'کدپستی',
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
  ]

  const { isFetching } = useGetUserOrdersQuery({
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
    isFetching,
  }
}
