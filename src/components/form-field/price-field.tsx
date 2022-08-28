import {
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material';
import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import NumberFormat, { InputAttributes } from 'react-number-format';

import { Theme } from '@/theme/theme';

interface PriceFieldProps {
  fieldName: string;
  inputLabelName?: string;
  startLabel?: string;
  id?: string;
  placeholder?: string;
}

export const PriceField: FC<PriceFieldProps> = ({
  fieldName = 'price-text-area',
  inputLabelName = 'text-area',
  startLabel = '',
  id = 'price-text-area-input',
}) => {
  const {
    register,
    getValues,
    formState: { errors, isSubmitting },
  } = useFormContext();
  return (
    <>
      <InputLabel shrink htmlFor={id}>
        {inputLabelName}
      </InputLabel>
      <TextField
        fullWidth
        InputProps={{
          inputComponent: NumberInput as any,
          inputProps: {
            // fixedDecimalScale: true,
            // suffix: '',
            // prefix: '',
            // thousandSeparator: true,
            allowNegative: false,
            defaultValue: getValues()?.[fieldName],
            sx: {
              borderLeft: (theme: Theme) =>
                `1px solid ${theme.palette.grey[400]}`,
              height: '100%',
              paddingLeft: '8px',
            },
          },
          startAdornment: (
            <InputAdornment position="start">
              <Typography>{startLabel}</Typography>
            </InputAdornment>
          ),
        }}
        disabled={isSubmitting}
        error={!!errors.name?.message}
        helperText={errors.name?.message as string | undefined}
        id={id}
        size="small"
        {...register(fieldName)}
      />
    </>
  );
};

const NumberInput = React.forwardRef<NumberFormat<InputAttributes>, any>(
  function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumberFormat
        isNumericString
        thousandSeparator
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        {...other}
      />
    );
  },
);

NumberInput.displayName = 'UsertypeRadio';
