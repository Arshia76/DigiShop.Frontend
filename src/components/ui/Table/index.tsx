import { MutableRefObject, useEffect, useRef, useMemo } from 'react'
import { AgGridReact, CustomCellRendererProps } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-quartz.css'
import { AG_GRID_LOCALE_FA } from '@/assets/locale/ad-grid/locale.fa'
import { GridLoader } from './components'
import { GridActionItem, GridActionItemProps } from './components/actions'
import { columnType } from './helpers/ColTypes'
import { AgGridEvent, GridOptions, EnterpriseCoreModule, GridApi } from 'ag-grid-enterprise'

export interface ITableRef<TData> {
  setData: ((data: TData[]) => void) | null
  removeRows: ((data?: TData[]) => void) | null
  updateRows: ((data: TData[]) => void) | null
  addRows: ((data: TData[]) => void) | null
  getData: (() => TData[] | undefined) | null
  getFilteredData: (() => TData[] | undefined) | null
}

export interface TableProps<TData> extends GridOptions {
  actions?: (row: CustomCellRendererProps) => GridActionItemProps[]
  totalRowGenerator?: (filteredData: TData[]) => TData[]
  parentRef: MutableRefObject<ITableRef<TData> | null>
  isLoading: boolean
}

const Table = <TData,>({ components, actions, isLoading, totalRowGenerator, parentRef, ...rest }: TableProps<TData>) => {
  const actionsComponent = (row: CustomCellRendererProps): JSX.Element => {
    return (
      <div className="flex items-center justify-center h-full gap-2">
        {actions?.(row)?.map((action, index) => (
          <GridActionItem key={index} {...action} />
        ))}
      </div>
    )
  }

  const gridRef = useRef<AgGridReact>(null)

  const statusBar = useMemo(() => {
    return {
      statusPanels: [
        { statusPanel: 'agTotalAndFilteredRowCountComponent', align: 'left' },
        { statusPanel: 'agTotalRowCountComponent', align: 'center' },
        { statusPanel: 'agFilteredRowCountComponent' },
        { statusPanel: 'agSelectedRowCountComponent' },
        { statusPanel: 'agAggregationComponent' },
      ],
    }
  }, [])

  useEffect(() => {
    if (isLoading) {
      gridRef?.current?.api?.setGridOption('rowData', [])
      gridRef?.current?.api?.setGridOption('loading', true)
    }
    // eslint-disable-next-line
  }, [isLoading])

  // const autoSizeColumns = (api: GridApi<TData>) => {
  //   setTimeout(() => {
  //     if (api) api.autoSizeAllColumns()
  //   }, 20)
  // }

  const totalRowCalculator = ({ api }: AgGridEvent<TData>) => {
    if (gridRef.current && totalRowGenerator) {
      const filteredData: TData[] = []
      api?.forEachNodeAfterFilter((e) => {
        if (e.data) {
          filteredData.push(e.data)
        }
      })
      gridRef.current.api.setGridOption('pinnedBottomRowData', totalRowGenerator(filteredData))
    }
  }

  const totalRowCalculatorAndAutoSizeColumn = (event: AgGridEvent<TData>) => {
    // autoSizeColumns(event.api)
    totalRowCalculator(event)
  }

  const setGridData = (data: TData[]) => {
    gridRef.current?.api.setFilterModel({})
    gridRef.current?.api?.setGridOption('rowData', data)
  }

  const getAllRows = () => {
    const rowData: TData[] = []
    gridRef.current?.api?.forEachNode((node) => {
      if (node.data) rowData.push(node.data)
    })
    return rowData
  }

  const getFilteredData = () => {
    const filteredData: TData[] = []
    gridRef.current?.api?.forEachNodeAfterFilter((e) => {
      if (e.data) {
        filteredData.push(e.data)
      }
    })
    return filteredData
  }

  const removeRows = (data?: TData[]) => {
    gridRef.current?.api?.applyTransaction({
      remove: data ? data : gridRef.current.api.getSelectedRows(),
    })
  }

  const addRows = (data: TData[]) => {
    gridRef.current?.api?.applyTransaction({ add: data })
  }

  const updateRows = (data: TData[]) => {
    gridRef.current?.api?.applyTransaction({ update: data })
  }

  return (
    <div className="parent h-full w-full ag-theme-quartz">
      {/* @ts-ignore */}
      <AgGridReact
        loadingOverlayComponent={() => <GridLoader />}
        columnTypes={columnType}
        ref={gridRef}
        components={{ ...components, actions: actionsComponent }}
        enableRtl
        localeText={AG_GRID_LOCALE_FA}
        pagination
        tooltipInteraction
        paginationAutoPageSize
        rowSelection="single"
        onFirstDataRendered={totalRowCalculatorAndAutoSizeColumn}
        onRowDataUpdated={totalRowCalculatorAndAutoSizeColumn}
        onFilterChanged={totalRowCalculator}
        // onColumnGroupOpened={autoSizeColumns}
        // onRowGroupOpened={autoSizeColumns}
        statusBar={statusBar}
        onGridReady={(event) => {
          // @ts-ignore
          // autoSizeColumns(event.api)
          event.api.setGridOption('rowData', [])
          if (parentRef) {
            parentRef.current = {
              setData: setGridData,
              getData: getAllRows,
              removeRows,
              addRows,
              updateRows,
              getFilteredData,
            }
          }
        }}
        suppressRowClickSelection
        defaultColDef={{
          floatingFilter: true,
          unSortIcon: true,
          sortable: true,
          editable: false,
          flex: 1,
          minWidth: 100,
          filter: 'agTextColumnFilter',
          resizable: true,
          enableRowGroup: false,
        }}
        modules={[EnterpriseCoreModule]}
        suppressScrollOnNewData
        suppressMenuHide
        suppressCopyRowsToClipboard
        suppressColumnVirtualisation
        animateRows
        multiSortKey="ctrl"
        {...rest}
      />
    </div>
  )
}

Table.displayName = 'Table'

export { Table }
