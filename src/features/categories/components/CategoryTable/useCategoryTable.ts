import { useRef, useState } from 'react';
import { IModal } from '@/lib/interface';
import { ColDef, ColGroupDef } from 'ag-grid-enterprise';
import { CustomCellRendererProps } from 'ag-grid-react';
import { GridActionItemProps } from '@/components/ui/Table/components/actions';
import { Svg } from '@/assets';
import { useGetCategoriesQuery } from '../../service/query';
import { ITableRef } from '@/components/ui/Table';

export function useCategoryTable() {
  const [categoryModal, setCategoryModal] = useState<IModal>({
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
        setCategoryModal({
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

  const { isFetching } = useGetCategoriesQuery({
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
    categoryModal,
    setCategoryModal,
  };
}
