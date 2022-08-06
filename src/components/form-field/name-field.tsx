import { InputLabel, TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';

const id = 'name-input';

export const NameField = () => {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useFormContext();

  return (
    <>
      <InputLabel shrink htmlFor={id}>
        ชื่อ-นามสกุล
      </InputLabel>
      <TextField
        fullWidth
        disabled={isSubmitting}
        error={!!errors.email?.message}
        helperText={errors.email?.message as string | undefined}
        id={id}
        placeholder="name"
        size="small"
        type="text"
        {...register('name')}
      />
    </>
  );
};
