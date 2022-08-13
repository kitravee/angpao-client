export interface MyFormData {
  userTypeInfo: string;
  merchantName: string;
}

export type Role = 'MERCHANT' | 'USER';

export type UserType = 'GUIDE' | 'ADMIN' | 'USER' | 'OWNER';

export type UserTypeInfo = {
  role: Role;
  userType: UserType;
};

export type MySubmitForm = {
  roleName: Role;
  userType: UserType;
  merchantName: string | undefined;
};
