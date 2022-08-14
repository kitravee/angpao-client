import { InputLabel, TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';

const id = 'locationUrl-input';

export const LocationUrlField = () => {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useFormContext();

  return (
    <>
      <InputLabel shrink htmlFor={id}>
        Url Google Map
      </InputLabel>
      <TextField
        fullWidth
        disabled={isSubmitting}
        error={!!errors.locationUrl?.message}
        helperText={errors.locationUrl?.message as string | undefined}
        id={id}
        placeholder="ลิ้ง Google Map"
        size="small"
        type="text"
        {...register('locationUrl')}
      />
    </>
  );
};
