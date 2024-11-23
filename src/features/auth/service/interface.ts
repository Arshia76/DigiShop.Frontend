export interface ISignupData {
  firstName: string
  lastName: string
  phoneNumber: string
  username: string
  password: string
}

// eslint-disable-next-line
export interface ISigninData extends Pick<ISignupData, 'username' | 'password'> {}

export interface IAuthResult {
  access_token: string
  id: string
  role: 'Admin' | 'User'
}
