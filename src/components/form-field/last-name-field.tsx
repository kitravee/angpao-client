import { InputLabel, TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';

const id = 'lastname-input';

export const LastNameField = () => {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useFormContext();

  return (
    <>
      <InputLabel shrink htmlFor={id}>
        นามสกุล
      </InputLabel>
      <TextField
        fullWidth
        disabled={isSubmitting}
        error={!!errors.lastName?.message}
        helperText={errors.lastName?.message as string | undefined}
        id={id}
        placeholder="last-name"
        size="small"
        type="text"
        {...register('lastName')}
      />
    </>
  );
};
