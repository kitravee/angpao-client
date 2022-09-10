import { FormHelperText } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as React from 'react';
import { FC } from 'react';
import { useController, useFormState } from 'react-hook-form';

import { useGetCategories } from '@/features/setting/api/use-get-categories';

interface CategoriesDropdownProps {
  someProps?: any;
}

const fieldName = 'categoryId';

export const CategoriesDropdown: FC<CategoriesDropdownProps> = () => {
  const { data: categories, isLoading } = useGetCategories();
  const { errors } = useFormState();
  const { field } = useController<any, typeof fieldName>({
    name: fieldName,
  });

  const handleChange = (event: SelectChangeEvent) => {
    field.onChange(event.target.value as string);
  };

  if (isLoading) {
    return null;
  }

  return (
    <>
      <InputLabel shrink htmlFor="categories-selects">
        ประเภทสถานที่ท่องเที่ยว
      </InputLabel>
      <FormControl fullWidth>
        <Select
          error={!!errors?.[fieldName]?.message}
          id="categories-selects"
          labelId="categories-selects-label"
          size="small"
          value={field.value ?? ''}
          onChange={handleChange}
        >
          {categories?.map((category) => {
            return (
              <MenuItem key={category?.id} value={category?.id}>
                {category?.name?.th}
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
