import { FC } from 'react';
import { useController } from 'react-hook-form';

// import { SignupFormData } from '@/features/signup/types';

import { UsertypeRadio } from './usertype-radio';

export const UsertypeRadioField: FC = () => {
  const fieldName = 'userTypeInfo';
  const { field } = useController<any, typeof fieldName>({
    name: fieldName,
  });

  return <UsertypeRadio {...field} />;
};
