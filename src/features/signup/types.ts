export interface SignupFormData {
  roleName: Role;
  email: string;
  password: string;
  phone: string;
}

export type Role = 'USER' | 'MERCHANT';
