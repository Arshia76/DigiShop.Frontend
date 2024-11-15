export interface ICreateUserData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  username: string;
  password: string;
}

export interface IUpdateUserData extends Partial<ICreateUserData> {
  id: string;
}
