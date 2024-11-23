import { useRef } from 'react'
import { ColDef, ColGroupDef } from 'ag-grid-enterprise'
import { useGetUserOrdersQuery } from '../../service/query'
import { ITableRef } from '@/components/ui/Table'
import moment from 'moment-jalaali'
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
      valueGetter: ({ data }) => moment(data.date).format('jYYYY/jMM/jDD'),
      headerName: 'تاریخ ثبت',
      headerTooltip: 'تاریخ ثبت',
    },

    {
      valueGetter: ({ data }) => data.totalAmount.toLocaleString(),
      headerName: 'مبلغ کل',
      headerTooltip: 'مبلغ کل',
    },
  ]

  const { isFetching } = useGetUserOrdersQuery({
    onSuccess(data) {
      // eslint-disable-next-line
      // @ts-ignore
      gridRef.current?.setData(data)
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
