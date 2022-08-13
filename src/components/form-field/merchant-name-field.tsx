import { InputLabel, TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';

const id = 'merchantName-input';

export const MerchantField = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useFormContext();

  if (JSON.parse(watch('userTypeInfo')).userType !== 'OWNER') {
    setValue('merchantName', undefined);
    return null;
  }
  return (
    <>
      <InputLabel shrink htmlFor={id}>
        ชื่อร้านค้า
      </InputLabel>
      <TextField
        fullWidth
        disabled={isSubmitting}
        error={!!errors.merchantName?.message}
        helperText={errors.merchantName?.message as string | undefined}
        id={id}
        placeholder="store name"
        size="small"
        type="text"
        {...register('merchantName')}
      />
    </>
  );
};
