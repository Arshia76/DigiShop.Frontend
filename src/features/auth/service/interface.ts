export interface ISignupData {
  firstName: string
  lastName: string
  phoneNumber: string
  username: string
  password: string
}

export interface ISigninData
  extends Pick<ISignupData, 'username' | 'password'> {}
