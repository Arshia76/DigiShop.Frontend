import { useRef, useState } from 'react';
import { IModal } from '@/lib/interface';
import { ColDef, ColGroupDef } from 'ag-grid-enterprise';
import { CustomCellRendererProps } from 'ag-grid-react';
import { GridActionItemProps } from '@/components/ui/Table/components/actions';
import { Svg } from '@/assets';
import { useGetProductsQuery } from '../../service/query';
import { ITableRef } from '@/components/ui/Table';

export function useProductTable() {
  const [productModal, setProductModal] = useState<IModal>({
    data: null,
    isOpen: false,
    type: 'add',
  });

  const gridRef = useRef<ITableRef<any> | null>(null);

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
      field: 'category',
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
  ];

  const actions: (row: CustomCellRendererProps) => GridActionItemProps[] = (
    row: CustomCellRendererProps
  ) => [
    {
      theme: 'yellow',
      icon: Svg.Edit_Icon,
      title: 'ویرایش',
      onClick: () => {
        setProductModal({
          type: 'edit',
          isOpen: true,
          data: row.data,
        });
      },
    },
    {
      theme: 'red',
      icon: Svg.Trash_Icon,
      title: 'حذف',
      onClick() {
        return null;
      },
    },
  ];

  const { isFetching } = useGetProductsQuery({
    onSuccess(res) {
      gridRef.current?.setData(res.data);
    },
    onError(error) {
      console.log(error);
    },
  });

  return {
    colDefs,
    gridRef,
    actions,
    isFetching,
    productModal,
    setProductModal,
  };
}
