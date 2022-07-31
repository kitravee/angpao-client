import {
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material';
import { useFormContext } from 'react-hook-form';

const id = 'phone-input';
const thailand = { code: 'TH', label: 'Thailand', phone: '+66' };
export const PhoneField = () => {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useFormContext();

  return (
    <>
      <InputLabel shrink htmlFor={id}>
        เบอร์โทรศัพท์
      </InputLabel>
      <TextField
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img
                alt="Thailand flag"
                loading="lazy"
                src={`https://flagcdn.com/w20/${thailand.code.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/w40/${thailand.code.toLowerCase()}.png 2x`}
                width="20"
              />
              <Typography
                sx={{ marginLeft: 1, marginRight: 1.5 }}
                variant="body2"
              >
                {thailand.phone}
              </Typography>
            </InputAdornment>
          ),
        }}
        disabled={isSubmitting}
        error={!!errors.phone?.message}
        helperText={errors.phone?.message as string | undefined}
        id={id}
        placeholder="09123456XX"
        size="small"
        type="tel"
        {...register('phone')}
      />
    </>
  );
};

{
  /* <TextField
label="With normal TextField"
id="outlined-start-adornment"
sx={{ m: 1, width: '25ch' }}
InputProps={{
  startAdornment: <InputAdornment position="start">kg</InputAdornment>,
}}
/> */
}
