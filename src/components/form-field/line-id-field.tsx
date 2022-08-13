import { InputLabel, TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';

const id = 'line-id-input';

export const LineIdField = () => {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useFormContext();

  return (
    <>
      <InputLabel shrink htmlFor={id}>
        ไลน์ไอดี
      </InputLabel>
      <TextField
        fullWidth
        disabled={isSubmitting}
        error={!!errors.name?.message}
        helperText={errors.name?.message as string | undefined}
        id={id}
        placeholder="line id"
        size="small"
        type="text"
        {...register('lineId')}
      />
    </>
  );
};
