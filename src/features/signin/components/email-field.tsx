import { useFormContext } from 'react-hook-form';

import { TextInput } from '@/components';

export const EmailField = () => {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useFormContext();

  return (
    <TextInput
      className="w-full"
      disabled={isSubmitting}
      helperText={errors.email?.message as string | undefined}
      label="อีเมลล์"
      placeholder="email"
      size="large"
      {...register('email')}
    />
  );
};
