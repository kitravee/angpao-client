import {
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material';
import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import NumberFormat, { InputAttributes } from 'react-number-format';

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
            // allowNegative: false,
            // isNumericString: true,
            defaultValue: getValues()?.[fieldName],
          },
          endAdornment: (
            <InputAdornment position="end">
              <Typography>{startLabel}</Typography>
            </InputAdornment>
          ),
        }}
        disabled={isSubmitting}
        error={!!errors?.[fieldName]?.message}
        helperText={errors?.[fieldName]?.message as string | undefined}
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
              value: values?.value,
            },
          });
        }}
        {...other}
      />
    );
  },
);

NumberInput.displayName = 'UsertypeRadio';
