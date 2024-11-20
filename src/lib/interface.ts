export interface IModal {
  type?: 'add' | 'edit' | 'delete'
  isOpen: boolean
  data?: any
}

export interface IQueryParams {
  data?: any
  onSuccess?: ((data: any) => void) | undefined
  onError?: ((err: unknown) => void) | undefined
}
