import { InputLabel, TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';

const id = 'email-input';

export const EmailField = () => {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useFormContext();

  return (
    <>
      <InputLabel shrink htmlFor={id}>
        อีเมลล์
      </InputLabel>
      <TextField
        fullWidth
        disabled={isSubmitting}
        error={!!errors.username?.message}
        helperText={errors.username?.message as string | undefined}
        id={id}
        placeholder="email"
        size="small"
        type="text"
        {...register('username')}
      />
    </>
  );
};
