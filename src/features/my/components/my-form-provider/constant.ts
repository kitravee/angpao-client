import { UserTypeInfo } from '../../types';

export const DEFAULT_ROLE_FORM = {
  userTypeInfo: JSON.stringify({
    role: 'USER',
    userType: 'USER',
  } as UserTypeInfo),
  merchantName: undefined,
};
