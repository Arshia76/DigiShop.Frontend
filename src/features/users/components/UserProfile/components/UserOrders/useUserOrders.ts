import { useRef } from 'react'
import { ColDef, ColGroupDef } from 'ag-grid-enterprise'
import { ITableRef } from '@/components/ui/Table'

export function useUsersOrders() {
  const gridRef = useRef<ITableRef<any> | null>(null)

  const colDefs: ColDef[] | ColGroupDef[] = [
    {
      field: 'id',
      headerName: 'شناسه',
      headerTooltip: 'شناسه',
      checkboxSelection: true,
      headerCheckboxSelection: true,
    },

    {
      field: 'paymentDate',
      headerName: 'تاریخ پرداخت',
      headerTooltip: 'تاریخ پرداخت',
    },

    {
      field: 'totalPrice',
      headerName: 'مبلغ کل',
      headerTooltip: 'مبلغ کل',
    },

    {
      field: 'isSuccessful',
      headerName: 'موفق',
      headerTooltip: 'موفق',
    },

    {
      field: 'address',
      headerName: 'آدرس',
      headerTooltip: 'آدرس',
    },
  ]

  //   const { isFetching } = useGetUsersQuery({
  //     onSuccess(res) {
  //       gridRef.current?.setData(res.data);
  //     },
  //     onError(error) {
  //       console.log(error);
  //     },
  //   });

  return { colDefs, gridRef }
}
