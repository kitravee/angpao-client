import { InputLabel, TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';

const id = 'password-input';
export const PasswordField = () => {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useFormContext();

  return (
    <>
      <InputLabel shrink htmlFor={id}>
        รหัสผ่าน
      </InputLabel>
      <TextField
        fullWidth
        disabled={isSubmitting}
        error={!!errors.password?.message}
        helperText={errors.password?.message as string | undefined}
        id={id}
        placeholder="password"
        size="small"
        {...register('password')}
      />
    </>
  );
};
