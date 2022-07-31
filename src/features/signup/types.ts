export interface SignupFormData {
  userType: UserType;
  email: string;
  password: string;
  phone: string;
}

export type UserType = 'USER' | 'MERCHANT';
