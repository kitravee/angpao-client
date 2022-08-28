import { InputLabel, TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';

const id = 'title-input';

export const TitleField = () => {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useFormContext();

  return (
    <>
      <InputLabel shrink htmlFor={id}>
        หัวเรื่อง
      </InputLabel>
      <TextField
        fullWidth
        disabled={isSubmitting}
        error={!!errors.title?.th?.message}
        helperText={errors.title?.th?.message as string | undefined}
        id={id}
        placeholder="title"
        size="small"
        type="text"
        {...register('title.th')}
      />
    </>
  );
};
