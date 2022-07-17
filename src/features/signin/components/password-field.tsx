import { useFormContext } from 'react-hook-form';

import { TextInput } from '@/components';

export const PasswordField = () => {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useFormContext();

  return (
    <TextInput
      className="w-full"
      disabled={isSubmitting}
      helperText={errors.password?.message as string | undefined}
      label="รหัสผ่าน"
      placeholder="password"
      size="large"
      type="password"
      {...register('password')}
    />
  );
};
