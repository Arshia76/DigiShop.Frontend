export interface ICreateUserData {
  firstName: string
  lastName: string
  phoneNumber: string
  username: string
  password: string
}

export interface IUpdateUserData extends Omit<ICreateUserData, 'username' | 'password'> {
  id: string
}

export interface IChangeUserPassword {
  id: string
  oldPassword?: string
  newPassword: string
}

export interface IChangeUserPasswordByAdmin {
  id: string
  newPassword?: string
  confirmNewPassword: string
}

export interface IUserResult {
  _id: string
  firstName: string
  lastName: string
  phoneNumber: string
  role: 'Admin' | 'User'
  username: string
  createdAt: string
  updatedAt: string
}
