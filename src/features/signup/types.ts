export interface SignupFormData {
  roleName: Role;
  name: string;
  username: string;
  password: string;
  phone: string;
}

export type Role = 'USER' | 'MERCHANT';
