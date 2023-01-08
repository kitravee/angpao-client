import { InputLabel, TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';

const id = 'firstname-input';

export const FirstNameField = () => {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useFormContext();

  return (
    <>
      <InputLabel shrink htmlFor={id}>
        ชื่อ
      </InputLabel>
      <TextField
        fullWidth
        disabled={isSubmitting}
        error={!!errors.firstName?.message}
        helperText={errors.firstName?.message as string | undefined}
        id={id}
        placeholder="first name"
        size="small"
        type="text"
        {...register('firstName')}
      />
    </>
  );
};
