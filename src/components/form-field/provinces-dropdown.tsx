import { FormHelperText } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as React from 'react';
import { FC } from 'react';
import { useController, useFormState } from 'react-hook-form';

import { useGetProvinces } from '@/features/setting/api/use-provinces';

interface ProvincesDropdownProps {
  someProps?: any;
}

const fieldName = 'provinceId';

export const ProvincesDropdown: FC<ProvincesDropdownProps> = () => {
  const { data: provinces } = useGetProvinces();
  const { errors } = useFormState();
  const { field } = useController<any, typeof fieldName>({
    name: fieldName,
  });

  const handleChange = (event: SelectChangeEvent) => {
    field.onChange(event.target.value as string);
  };

  return (
    <>
      <InputLabel shrink htmlFor="provinces-selects">
        จังหวัด
      </InputLabel>
      <FormControl fullWidth>
        <Select
          error={!!errors?.[fieldName]?.message}
          id="provinces-selects"
          labelId="provinces-selects-label"
          size="small"
          value={field.value ?? ' '}
          onChange={handleChange}
        >
          {provinces?.map((province) => {
            return (
              <MenuItem key={province?.id} value={province?.id}>
                {province?.name?.th}
              </MenuItem>
            );
          })}
        </Select>
        {!!errors?.[fieldName]?.message && (
          <FormHelperText error sx={{ mx: '14px' }}>
            <>{errors?.[fieldName]?.message}</>
          </FormHelperText>
        )}
      </FormControl>
    </>
  );
};
