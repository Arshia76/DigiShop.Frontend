import { AxiosResponse } from 'axios'

export interface IModal {
  type?: 'add' | 'edit' | 'delete'
  isOpen: boolean
  data?: any
}

export interface IQueryParams {
  data?: any
  onSuccess?: ((data: AxiosResponse<any, any>) => void) | undefined
  onError?: ((err: unknown) => void) | undefined
}
