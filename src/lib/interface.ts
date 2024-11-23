export interface IModal {
  type?: 'add' | 'edit' | 'delete'
  isOpen: boolean
  data?: any
}

export interface IQueryParams<T> {
  onSuccess?: ((data: T) => void) | undefined
  onError?: ((err: IErrorResult) => void) | undefined
}

export interface IErrorResult {
  statusCode: number
  message: string | string[]
}
