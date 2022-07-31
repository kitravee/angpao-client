import { LoadingButton } from '@mui/lab';
import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';

interface SubmitButtonProps {
  children?: React.ReactNode;
}

export const SubmitButton: FC<SubmitButtonProps> = ({ children }) => {
  const {
    formState: { isSubmitting },
  } = useFormContext();
  return (
    <>
      <LoadingButton
        disableElevation
        fullWidth
        color="primary"
        loading={isSubmitting}
        size="large"
        sx={{ color: 'white' }}
        type="submit"
        variant="contained"
      >
        {children}
      </LoadingButton>
    </>
  );
};
