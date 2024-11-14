import { ColDef } from 'ag-grid-enterprise';
import moment from 'moment-jalaali';

type TColumnTypes =
  | 'text'
  | 'rowIndex'
  | 'jalaliDate'
  | 'currency'
  | 'number'
  | 'percent'
  | 'set'
  | 'time';
export interface CustomColDef<TData> extends Omit<ColDef<TData>, 'type'> {
  type?: keyof typeof columnType;
}

export const columnType: { [key in TColumnTypes]: ColDef<any, any> } = {
  jalaliDate: {
    valueFormatter: ({ value }) => {
      return moment(value, 'YYYY-MM-DD').format('jYYYY/jMM/jDD');
    },
    filterValueGetter: (node) => {
      return moment(
        node.getValue(node.colDef?.field ?? '').format('jYYYY/jMM/jDD')
      );
    },
  },
  time: {
    filter: 'agNumberColumnFilter',
    valueFormatter: ({ value }) => {
      return moment(value).format('HH:mm');
    },
    filterValueGetter: (node) => {
      return moment(node.getValue(node.colDef?.field ?? ''))
        .format('HH:mm')
        ?.replace(':', '');
    },
  },
  text: {
    valueFormatter: ({ value }) => value ?? '',
    filter: 'agTextColumnFilter',
  },
  rowIndex: {
    valueGetter: ({ node }) => {
      if (!node?.isRowPinned()) return (node?.rowIndex ?? 1) + 1;
    },
    filter: 'agNumberColumnFilter',
  },
  currency: {
    valueFormatter: ({ value }) =>
      Number(value).toLocaleString() +
      (value ? (Number(value) < 0 ? '-' : '') + ' ریال' : ''),
    cellClass: ({ value }) =>
      value ? (Number(value) < 0 ? 'negative-number' : '') : '',
    filter: 'agNumberColumnFilter',
  },
  number: {
    valueFormatter: ({ value }) => {
      if (isNaN(value)) return value;
      return value
        ? Math.abs(Number(value)) + (Number(value) < 0 ? '-' : '')
        : '0';
    },
    filter: 'agNumberColumnFilter',
  },
  percent: {
    valueFormatter: ({ value }) => (value ? Number(value) + '%' : '-'),
    filter: 'agNumberColumnFilter',
  },
  set: {
    filter: 'agSetColumnFilter',
  },
};
